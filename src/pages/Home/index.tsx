import { Header } from '../../components/Header'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { HomeContent } from './styles'

export function Home() {
  return (
    <div>
      <Header />

      <HomeContent>
        <Profile />
        <SearchForm />
      </HomeContent>
    </div>
  )
}
