import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { PostContent, PostInfoContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Post() {
  return (
    <>
      <PostInfoContainer>
        <nav>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
          </NavLink>
          <NavLink to="/">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            <span>VER NO GITHUB</span>
          </NavLink>
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
      <PostContent>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, itaque?
        Necessitatibus laborum dolore veniam sequi vel deserunt libero, fugit,
        accusamus nulla atque quos provident quas officia deleniti odio ut
        repellat? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
        itaque? Necessitatibus laborum dolore veniam sequi vel deserunt libero,
        fugit, accusamus nulla atque quos provident quas officia deleniti odio
        ut repellat? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quo, itaque? Necessitatibus laborum dolore veniam sequi vel deserunt
        libero, fugit, accusamus nulla atque quos provident quas officia
        deleniti odio ut repellat? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Quo, itaque? Necessitatibus laborum dolore veniam
        sequi vel deserunt libero, fugit, accusamus nulla atque quos provident
        quas officia deleniti odio ut repellat?
      </PostContent>
    </>
  )
}
