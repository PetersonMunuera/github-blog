import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Posts } from './components/Posts'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'

export interface GithubUser {
  username: string
  name: string
  bio: string
  followers: number
  company?: string
  profileUrl: string
  avatarUrl: string
}

export function Home() {
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
    <>
      <Profile user={user} />
      <SearchForm />
      <Posts />
    </>
  )
}
