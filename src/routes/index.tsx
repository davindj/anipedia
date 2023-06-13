import { createBrowserRouter, Navigate } from 'react-router-dom'
import ROUTE_PATH from './path'

// PAGE
import AnimeListPage from '../views/pages/AnimeListPage'
import AnimeDetailPage from '../views/pages/AnimeDetailPage'
import CollectionDetailPage from '../views/pages/CollectionDetailPage'
import CollectionListPage from '../views/pages/CollectionListPage'
import NotFoundPage from '../views/pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={ROUTE_PATH.ANIME_LIST_PAGE} replace />,
    errorElement: <NotFoundPage />,
  },
  {
    path: ROUTE_PATH.ANIME_LIST_PAGE,
    element: <AnimeListPage />,
  },
  {
    path: ROUTE_PATH.ANIME_DETAIL_PAGE,
    element: <AnimeDetailPage />,
  },
  {
    path: ROUTE_PATH.COLLECTION_LIST_PAGE,
    element: <CollectionListPage />,
  },
  {
    path: ROUTE_PATH.COLLECTION_DETAIL_PAGE,
    element: <CollectionDetailPage />,
  },
])

const getRouteWithParam = (routeName: string, param: string) => {
  return routeName.replace(':id', param)
}

export default router
export { getRouteWithParam }
