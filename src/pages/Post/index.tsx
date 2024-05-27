import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { NavLink, useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { PostContent, PostInfoContainer } from './styles'
import { ptBR } from 'date-fns/locale'
import { formatDistanceToNow } from 'date-fns'

interface Post {
  title: string
  htmlURL: string
  username: string
  createdAt: Date
  comments: number
  body: string
}

interface IssueResponseType {
  title: string
  html_url: string
  user: {
    login: string
  }
  created_at: string
  comments: number
  body: string
}

export function Post() {
  const [post, setPost] = useState<Post>({} as Post)

  const { number: issueNumber } = useParams()

  const fetchPost = useCallback(async () => {
    const issueResponse = await api.get(
      `/repos/PetersonMunuera/github-blog/issues/${issueNumber}`,
    )

    const issue: IssueResponseType = issueResponse.data

    setPost({
      body: issue.body,
      comments: issue.comments,
      createdAt: new Date(issue.created_at),
      htmlURL: issue.html_url,
      title: issue.title,
      username: issue.user.login,
    })
  }, [issueNumber])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return (
    <>
      <PostInfoContainer>
        <nav>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
          </NavLink>
          <NavLink target="_blanc" to={post.htmlURL}>
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </NavLink>
        </nav>

        <h1>{post.title}</h1>

        <footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{post.username}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            {post.createdAt && (
              <span>
                {formatDistanceToNow(post.createdAt, {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            )}
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{post.comments} comentários</span>
          </div>
        </footer>
      </PostInfoContainer>
      <PostContent>
        <Markdown>{post.body}</Markdown>
      </PostContent>
    </>
  )
}
