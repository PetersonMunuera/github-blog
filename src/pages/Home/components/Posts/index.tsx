import { NavLink } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Post, PostsContainer } from './styles'
import { PostType } from '../..'

interface PostsProps {
  posts: PostType[]
}

export function Posts({ posts }: PostsProps) {
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
