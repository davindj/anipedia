import { NavLink } from 'react-router-dom'
import { ContainerPadding } from '../../../utils/style'
import ROUTE_PATH from '../../../routes/path'

const Footer = () => {
  return (
    <footer>
      <ContainerPadding>
        <NavLink
          to={ROUTE_PATH.ANIME_LIST_PAGE}
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          to Anime List Page
        </NavLink>
        <NavLink
          to={ROUTE_PATH.COLLECTION_LIST_PAGE}
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          to Collection List Page
        </NavLink>
      </ContainerPadding>
    </footer>
  )
}

export default Footer
