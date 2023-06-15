import { createContext } from 'react'
import { Anime } from '../../entities/anime'
import { AnimeCollection } from '../../entities/animeCollection'
import { AnimeCollectionState } from './state'

type AnimeCollectionContextType = AnimeCollectionState & {
  openAddAnimesToCollectionModal: (animes: Anime[]) => void
  openRemoveAnimeFromCollectionModal: (
    anime: Anime,
    collection: AnimeCollection
  ) => void
  openAddCollectionModal: (animes?: Anime[]) => void
  openEditCollectionModal: (collection: AnimeCollection) => void
  openRemoveCollectionModal: (collection: AnimeCollection) => void
}
const initialContextValue: AnimeCollectionContextType = {
  isLoading: true,
  animeCollections: [],
  openAddAnimesToCollectionModal: () => {},
  openRemoveAnimeFromCollectionModal: () => {},
  openAddCollectionModal: () => {},
  openEditCollectionModal: () => {},
  openRemoveCollectionModal: () => {},
}

const AnimeCollectionContext = createContext(initialContextValue)
export default AnimeCollectionContext
export type { AnimeCollectionContextType }
