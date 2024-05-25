import { Header } from '../../components/Header'
import { Profile } from './components/Profile'
import { HomeContent } from './styles'

export function Home() {
  return (
    <div>
      <Header />

      <HomeContent>
        <Profile />
      </HomeContent>
    </div>
  )
}
