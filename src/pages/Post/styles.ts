import styled from 'styled-components'

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
`

export const PostInfoContainer = styled.section`
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);

  nav {
    display: flex;
    justify-content: space-between;
  }

  nav a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-weight: bold;
    font-size: 0.75rem;
    line-height: 1.6;
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
  }

  nav a:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }

  h1 {
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }

  footer {
    display: flex;
    gap: 1.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    div svg {
      width: 1.125rem;
      color: ${(props) => props.theme['base-label']};
    }

    div span {
      color: ${(props) => props.theme['base-span']};
    }
  }
`
