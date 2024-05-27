import styled from 'styled-components'

export const PostsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 3rem 0;

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const Post = styled.article`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  border: 2px solid transparent;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
    cursor: pointer;
  }

  header {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    h2 {
      font-size: 1.25rem;
      line-height: 1.6;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-size: 0.875rem;
      white-space: nowrap;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
