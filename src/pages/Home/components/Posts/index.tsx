import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import { NavLink } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Post, PostsContainer } from './styles'

interface PostType {
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

export function Posts() {
  const [posts, setPosts] = useState<PostType[]>([])

  async function loadPosts() {
    const searchIssuesResponse = await api.get('search/issues', {
      params: {
        q: 'repo:PetersonMunuera/github-blog',
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
    loadPosts()
  }, [])

  return (
    <PostsContainer>
      {posts.map((post) => {
        return (
          <NavLink to={`/post/${post.id}`} key={post.id}>
            <Post>
              <header>
                <h2>{post.title}</h2>
                <span>
                  {formatDistanceToNow(post.createdAt, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
              </header>
              <p>{post.body}</p>
            </Post>
          </NavLink>
        )
      })}
    </PostsContainer>
  )
}
