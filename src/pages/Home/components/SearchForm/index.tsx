import { FormContainer } from './styles'

export function SearchForm() {
  return (
    <FormContainer>
      <header>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </header>

      <form>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </FormContainer>
  )
}
