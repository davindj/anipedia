import { NavLink } from 'react-router-dom'
import { Container } from '../../../utils/style'

const Header = () => {
  return (
    <header>
      <Container>
        <NavLink to={'/'}>Anipedia</NavLink>
      </Container>
    </header>
  )
}

export default Header
