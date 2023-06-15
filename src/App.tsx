import { RouterProvider } from 'react-router-dom'
import router from './routes'

// Providers
import AnimeCollectionProvider from './providers/AnimeCollectionsProvider'
import AppApolloProvider from './providers/AppApolloProvider'

import './index.css'

function App() {
  return (
    <AnimeCollectionProvider>
      <AppApolloProvider>
        <RouterProvider router={router} />
      </AppApolloProvider>
    </AnimeCollectionProvider>
  )
}

export default App
