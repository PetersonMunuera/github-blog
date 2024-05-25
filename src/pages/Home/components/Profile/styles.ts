import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem;

  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    h1 {
      font-weight: bold;
      font-size: 1.5rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-title']};
    }

    a {
      font-weight: bold;
      font-size: 0.75rem;
      line-height: 1.6;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
    }

    a svg {
      margin-left: 0.5rem;
    }
  }

  p {
    flex: 1;
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
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
