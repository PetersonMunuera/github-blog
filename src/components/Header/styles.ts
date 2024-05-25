import styled from 'styled-components'
import coverImg from '../../assets/cover.svg'

export const HeaderContainer = styled.header`
  background: url(${coverImg});
  background-size: cover;
  background-position: center;
  padding: 4rem 0 8.375rem;

  img {
    display: block;
    margin: 0 auto;
  }
`
