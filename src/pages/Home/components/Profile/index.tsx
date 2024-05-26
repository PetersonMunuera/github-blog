import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { ProfileContainer, ProfileInfo } from './styles'
import { GithubUser } from '../..'

interface ProfileProps {
  user: GithubUser
}

export function Profile({ user }: ProfileProps) {
  return (
    <ProfileContainer>
      <img src={user.avatarUrl} alt="" />
      <ProfileInfo>
        <header>
          <h1>{user.name}</h1>
          <a href={user.profileUrl} target="_blanc">
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <p>{user.bio}</p>
        <footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.username}</span>
          </div>
          {user.company && (
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{user.company}</span>
            </div>
          )}
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{user.followers} seguidores</span>
          </div>
        </footer>
      </ProfileInfo>
    </ProfileContainer>
  )
}
