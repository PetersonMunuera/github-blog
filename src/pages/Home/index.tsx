import { useEffect, useState } from 'react'
import { Posts } from './components/Posts'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { api } from '../../lib/axios'

export interface PostType {
  id: string
  title: string
  body: string
  createdAt: Date
}

interface IssueResponseType {
  id: string
  title: string
  body: string
  created_at: string
}

export function Home() {
  const [posts, setPosts] = useState<PostType[]>([])

  async function fetchPosts(query = '') {
    const searchIssuesResponse = await api.get('search/issues', {
      params: {
        q: `${query} repo:PetersonMunuera/github-blog`,
      },
    })

    const { items: issuesListResponse }: { items: IssueResponseType[] } =
      searchIssuesResponse.data

    setPosts(
      issuesListResponse.map((issue) => {
        return {
          id: issue.id,
          title: issue.title,
          body: issue.body,
          createdAt: new Date(issue.created_at),
        }
      }),
    )
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const postsNumber = posts.length

  return (
    <>
      <Profile />
      <SearchForm postsNumber={postsNumber} onSearchPosts={fetchPosts} />
      <Posts posts={posts} />
    </>
  )
}
