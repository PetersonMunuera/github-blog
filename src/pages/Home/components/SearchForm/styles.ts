import styled from 'styled-components'

export const FormContainer = styled.div`
  margin-top: 4.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 1.125rem;
      line-height: 1.6;
    }
  }

  form {
    margin-top: 0.75rem;

    input {
      width: 100%;
      background-color: ${(props) => props.theme['base-input']};
      padding: 0.75rem 1rem;
      border: 1px solid ${(props) => props.theme['base-border']};
      border-radius: 6px;
      color: ${(props) => props.theme['base-text']};
      line-height: 1.6;
    }

    input::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    input:focus {
      border-color: ${(props) => props.theme.blue};
    }
  }
`
