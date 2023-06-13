import { RouterProvider } from 'react-router-dom'
import router from './routes'

// Providers
import AnimeCollectionProvider from './views/providers/AnimeCollectionsProvider'

function App() {
  return (
    <AnimeCollectionProvider>
      <RouterProvider router={router} />
    </AnimeCollectionProvider>
  )
}

export default App
