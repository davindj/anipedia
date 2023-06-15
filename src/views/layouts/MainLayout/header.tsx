import { NavLink } from 'react-router-dom'
import { COLOR_SUCCESS_DARK, Container } from '../../../utils/style'
import { PageHeader } from './style'
import styled from '@emotion/styled'

const HeaderNavLink = styled(NavLink)`
  font-weight: bold;
  font-size: 2em;
  color: ${COLOR_SUCCESS_DARK};
  text-decoration: none;
`

const HeaderContainer = styled(Container)`
  background-color: white;
  padding: 10px;
`

const HeaderImage = styled.img`
  width: 160px;
  object-fit: cover;
  display: block;
`

const Header = () => {
  return (
    <PageHeader>
      <HeaderContainer>
        <HeaderNavLink to={'/'}>
          <HeaderImage src="/img/anipedia-logo-text.png" />
        </HeaderNavLink>
      </HeaderContainer>
    </PageHeader>
  )
}

export default Header
