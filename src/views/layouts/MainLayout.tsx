import { NavLink } from 'react-router-dom'
import ROUTE_PATH from '../../routes/path'
import { getRouteWithParam } from '../../routes'

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <h1>This is App Header</h1>
      <NavLink
        to={ROUTE_PATH.ANIME_LIST_PAGE}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        to Anime List Page
      </NavLink>
      <NavLink
        to={getRouteWithParam(ROUTE_PATH.ANIME_DETAIL_PAGE, '1')}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        to Anime Detail Page
      </NavLink>
      <NavLink
        to={ROUTE_PATH.COLLECTION_LIST_PAGE}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        to Collection List Page
      </NavLink>
      <NavLink
        to={getRouteWithParam(
          ROUTE_PATH.COLLECTION_DETAIL_PAGE,
          'my-collection'
        )}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        to Collection Detail Page
      </NavLink>
      <NavLink
        to="/unknown-page"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        to Unknown Page
      </NavLink>
      {children}
    </div>
  )
}

export default MainLayout
