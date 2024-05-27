import { useForm } from 'react-hook-form'
import { FormContainer } from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface SearchFormProps {
  postsNumber: number
  onSearchPosts: (query?: string) => Promise<void>
}

const searchFormSchema = z.object({
  query: z.string().optional(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm({ postsNumber, onSearchPosts }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(formInputs: SearchFormInputs) {
    const { query } = formInputs

    await onSearchPosts(query)
  }

  return (
    <FormContainer>
      <header>
        <h2>Publicações</h2>
        <span>{postsNumber} publicações</span>
      </header>

      <form
        onSubmit={handleSubmit(handleSearchPosts)}
        onBlur={handleSubmit(handleSearchPosts)}
      >
        <input
          {...register('query')}
          type="text"
          placeholder="Buscar conteúdo"
        />
      </form>
    </FormContainer>
  )
}
