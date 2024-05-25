import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { PostInfoContainer } from './styles'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <nav>
        <a href="">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>VOLTAR</span>
        </a>
        <a href="">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          <span>VER NO GITHUB</span>
        </a>
      </nav>

      <h1>JavaScript data types and data structures</h1>

      <footer>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <span>cameronwll</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>Há 1 dia</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>5 comentários</span>
        </div>
      </footer>
    </PostInfoContainer>
  )
}
