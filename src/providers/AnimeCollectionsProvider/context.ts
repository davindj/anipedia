import { createContext } from 'react'
import { Anime } from '../../entities/anime'
import { AnimeCollection } from '../../entities/animeCollection'

type AnimeCollectionContextType = {
  animeCollections: AnimeCollection[]
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
