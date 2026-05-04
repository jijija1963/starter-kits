'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import { Trash2, RotateCcw } from 'lucide-react'

/**
 * 데이터 패칭 예제 페이지
 * TanStack Query (React Query)를 사용한 서버 상태 관리 패턴을 보여줍니다
 * jsonplaceholder 공개 API를 사용해 실제 동작하는 예제를 제공합니다
 */

// TypeScript 타입 정의
interface Post {
  id: number
  title: string
  body: string
  userId: number
}

interface Comment {
  id: number
  postId: number
  name: string
  email: string
  body: string
}

export default function DataFetchingExamplePage() {
  // Query Client 인스턴스 가져오기
  const queryClient = useQueryClient()

  // 상태 관리
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null)
  const [newPostTitle, setNewPostTitle] = useState('')
  const [newPostBody, setNewPostBody] = useState('')
  const [errorExample, setErrorExample] = useState(false)

  // API 함수들
  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    if (!response.ok) throw new Error('포스트 로드 실패')
    return response.json() as Promise<Post[]>
  }

  const fetchComments = async (postId: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    if (!response.ok) throw new Error('댓글 로드 실패')
    return response.json() as Promise<Comment[]>
  }

  // Tab 1: useQuery 기본 예제
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // 1분
  })

  // Tab 2: 의존 쿼리 (selectedPostId가 있을 때만 실행)
  const commentsQuery = useQuery({
    queryKey: ['comments', selectedPostId],
    queryFn: () => selectedPostId ? fetchComments(selectedPostId) : Promise.resolve([]),
    enabled: !!selectedPostId,
  })

  // Tab 3: useMutation - 포스트 생성
  const createPostMutation = useMutation({
    mutationFn: async (newPost: { title: string; body: string; userId: number }) => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost),
      })
      if (!response.ok) throw new Error('포스트 생성 실패')
      return response.json() as Promise<Post>
    },
    onSuccess: () => {
      toast.success('포스트가 생성되었습니다!')
      setNewPostTitle('')
      setNewPostBody('')
      // 기존 쿼리 무효화 (원하면 새로 fetch)
      // queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
    onError: () => {
      toast.error('포스트 생성에 실패했습니다.')
    },
  })

  // Tab 4: 에러 처리 예제
  const errorQuery = useQuery({
    queryKey: ['error-example'],
    queryFn: async () => {
      // 의도적으로 에러 유발
      if (errorExample) {
        const response = await fetch('https://jsonplaceholder.typicode.com/invalid-endpoint')
        if (!response.ok) throw new Error(`HTTP ${response.status} 에러 발생`)
        return response.json()
      }
      return { status: 'ready' }
    },
    retry: 1,
    retryDelay: 1000,
    enabled: errorExample,
  })

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* 상단 헤더 섹션 */}
        <section className="py-12 border-b bg-muted/50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              데이터 패칭
            </h1>
            <p className="text-muted-foreground">
              TanStack Query를 사용한 서버 상태 관리와 데이터 패칭 패턴을 학습합니다.
            </p>
          </div>
        </section>

        {/* 데이터 패칭 탭 섹션 */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* 4개 탭으로 쿼리 패턴 분류 */}
            <Tabs defaultValue="basic" className="w-full">
              {/* 탭 네비게이션 */}
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="basic" className="text-xs md:text-sm">기본</TabsTrigger>
                <TabsTrigger value="dependent" className="text-xs md:text-sm">의존</TabsTrigger>
                <TabsTrigger value="mutation" className="text-xs md:text-sm">생성</TabsTrigger>
                <TabsTrigger value="error" className="text-xs md:text-sm">에러</TabsTrigger>
              </TabsList>

              {/* 탭 1: useQuery 기본 */}
              <TabsContent value="basic" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>useQuery 기본 패턴</CardTitle>
                    <CardDescription>
                      최근 5개의 포스트를 가져오고, 로딩/에러/성공 상태를 처리합니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* 상태 표시 */}
                    <div className="flex gap-4">
                      <Badge variant={postsQuery.isLoading ? 'default' : 'outline'}>
                        로딩: {postsQuery.isLoading ? '예' : '아니오'}
                      </Badge>
                      <Badge variant={postsQuery.isError ? 'destructive' : 'outline'}>
                        에러: {postsQuery.isError ? '예' : '아니오'}
                      </Badge>
                      <Badge variant={postsQuery.isSuccess ? 'default' : 'outline'}>
                        성공: {postsQuery.isSuccess ? '예' : '아니오'}
                      </Badge>
                    </div>

                    {/* 로딩 상태 */}
                    {postsQuery.isLoading && (
                      <div className="space-y-3">
                        <Skeleton className="h-20 w-full" />
                        <Skeleton className="h-20 w-full" />
                        <Skeleton className="h-20 w-full" />
                      </div>
                    )}

                    {/* 에러 상태 */}
                    {postsQuery.isError && (
                      <div className="bg-destructive/10 rounded-lg p-4">
                        <p className="text-sm text-destructive">
                          ❌ 포스트를 불러올 수 없습니다.
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {postsQuery.error?.message || '알 수 없는 에러'}
                        </p>
                      </div>
                    )}

                    {/* 성공 상태 - 포스트 리스트 */}
                    {postsQuery.isSuccess && (
                      <div className="space-y-3">
                        {postsQuery.data.map((post) => (
                          <div
                            key={post.id}
                            className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                            onClick={() => setSelectedPostId(post.id)}
                          >
                            <h4 className="font-medium text-sm mb-1">
                              Post #{post.id}: {post.title}
                            </h4>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {post.body}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    <Separator />

                    {/* Refetch 버튼 */}
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => postsQuery.refetch()}
                      disabled={postsQuery.isLoading}
                    >
                      <RotateCcw className="mr-2 h-4 w-4" />
                      다시 로드
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 탭 2: 의존 쿼리 */}
              <TabsContent value="dependent" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>의존 쿼리 패턴</CardTitle>
                    <CardDescription>
                      왼쪽에서 포스트를 선택하면 오른쪽에 댓글이 자동으로 로드됩니다.
                      selectedPostId가 있을 때만 쿼리가 실행됩니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 좌측: 포스트 목록 */}
                      <div className="space-y-2">
                        <p className="text-sm font-medium">포스트 선택</p>
                        <div className="border rounded-lg max-h-96 overflow-y-auto">
                          {postsQuery.isLoading ? (
                            <div className="p-4 space-y-3">
                              <Skeleton className="h-16 w-full" />
                              <Skeleton className="h-16 w-full" />
                            </div>
                          ) : (
                            <div className="divide-y">
                              {postsQuery.data?.map((post) => (
                                <div
                                  key={post.id}
                                  className={`p-3 cursor-pointer transition-colors ${
                                    selectedPostId === post.id
                                      ? 'bg-primary/10'
                                      : 'hover:bg-muted/50'
                                  }`}
                                  onClick={() => setSelectedPostId(post.id)}
                                >
                                  <p className="text-xs font-medium line-clamp-1">
                                    {post.title}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* 우측: 댓글 */}
                      <div className="space-y-2">
                        <p className="text-sm font-medium">댓글</p>
                        <div className="border rounded-lg max-h-96 overflow-y-auto">
                          {!selectedPostId ? (
                            <div className="p-4 text-center text-muted-foreground text-sm">
                              포스트를 선택해주세요
                            </div>
                          ) : commentsQuery.isLoading ? (
                            <div className="p-4 space-y-3">
                              <Skeleton className="h-16 w-full" />
                              <Skeleton className="h-16 w-full" />
                            </div>
                          ) : commentsQuery.isError ? (
                            <div className="p-4 text-sm text-destructive">
                              댓글 로드 실패
                            </div>
                          ) : (
                            <div className="divide-y">
                              {commentsQuery.data?.map((comment) => (
                                <div key={comment.id} className="p-3 text-xs">
                                  <p className="font-medium mb-1">{comment.name}</p>
                                  <p className="text-muted-foreground line-clamp-2">
                                    {comment.body}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 탭 3: useMutation */}
              <TabsContent value="mutation" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>useMutation - 데이터 생성</CardTitle>
                    <CardDescription>
                      새로운 포스트를 생성하는 mutation 예제입니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* 입력 필드들 */}
                    <div className="space-y-2">
                      <Label htmlFor="post-title">제목</Label>
                      <Input
                        id="post-title"
                        placeholder="포스트 제목을 입력하세요"
                        value={newPostTitle}
                        onChange={(e) => setNewPostTitle(e.target.value)}
                        disabled={createPostMutation.isPending}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="post-body">내용</Label>
                      <textarea
                        id="post-body"
                        placeholder="포스트 내용을 입력하세요"
                        value={newPostBody}
                        onChange={(e) => setNewPostBody(e.target.value)}
                        disabled={createPostMutation.isPending}
                        className="w-full px-3 py-2 border rounded-lg text-sm bg-background text-foreground placeholder-muted-foreground disabled:opacity-50"
                        rows={4}
                      />
                    </div>

                    {/* 상태 표시 */}
                    {createPostMutation.isSuccess && (
                      <div className="bg-green-50 dark:bg-green-950 rounded-lg p-3">
                        <p className="text-sm text-green-700 dark:text-green-300">
                          ✓ 포스트가 생성되었습니다! (ID: {createPostMutation.data?.id})
                        </p>
                      </div>
                    )}

                    {/* 생성 버튼 */}
                    <Button
                      className="w-full"
                      onClick={() =>
                        createPostMutation.mutate({
                          title: newPostTitle,
                          body: newPostBody,
                          userId: 1,
                        })
                      }
                      disabled={
                        createPostMutation.isPending || !newPostTitle || !newPostBody
                      }
                    >
                      {createPostMutation.isPending ? '생성 중...' : '포스트 생성'}
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 탭 4: 에러 처리 */}
              <TabsContent value="error" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>에러 처리 패턴</CardTitle>
                    <CardDescription>
                      의도적으로 에러를 유발해 재시도와 에러 처리를 테스트합니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* 에러 토글 버튼 */}
                    <Button
                      variant={errorExample ? 'destructive' : 'outline'}
                      onClick={() => setErrorExample(!errorExample)}
                    >
                      {errorExample ? '에러 해제' : '에러 발생시키기'}
                    </Button>

                    {/* 상태 표시 */}
                    <div className="space-y-2">
                      <Badge variant="outline">
                        상태: {errorQuery.isLoading ? '로딩중...' : errorQuery.isError ? '에러 ❌' : '성공 ✓'}
                      </Badge>
                      {errorQuery.isError && (
                        <Badge variant="destructive">
                          재시도: {errorQuery.failureCount}/{errorQuery.failureReason ? '2' : '0'}
                        </Badge>
                      )}
                    </div>

                    {/* 에러 정보 표시 */}
                    {errorQuery.isError && (
                      <div className="bg-destructive/10 rounded-lg p-4 space-y-2">
                        <p className="text-sm font-medium text-destructive">에러 정보</p>
                        <pre className="text-xs bg-muted rounded p-2 overflow-x-auto">
                          {errorQuery.error?.message || '알 수 없는 에러'}
                        </pre>
                        <p className="text-xs text-muted-foreground">
                          Query는 1회 재시도 후 실패합니다 (retry: 1).
                        </p>
                      </div>
                    )}

                    {/* 재시도 버튼 */}
                    {errorQuery.isError && (
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => errorQuery.refetch()}
                      >
                        <RotateCcw className="mr-2 h-4 w-4" />
                        재시도
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
