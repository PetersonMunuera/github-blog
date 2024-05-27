import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { ProfileContainer, ProfileInfo } from './styles'

export interface GithubUser {
  username: string
  name: string
  bio: string
  followers: number
  company?: string
  profileUrl: string
  avatarUrl: string
}

export function Profile() {
  const [user, setUser] = useState<GithubUser>({} as GithubUser)

  async function loadUser() {
    const response = await api.get('/users/PetersonMunuera')
    const { data } = response

    setUser({
      username: data.login,
      name: data.name,
      bio: data.bio,
      followers: data.followers,
      company: data.company,
      profileUrl: data.html_url,
      avatarUrl: data.avatar_url,
    })
  }

  useEffect(() => {
    loadUser()
  }, [])

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
