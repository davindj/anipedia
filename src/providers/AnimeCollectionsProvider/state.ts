import { AnimeCollection } from '../../entities/animeCollection'

type AnimeCollectionState = {
  isLoading: boolean
  animeCollections: AnimeCollection[]
}

const initialState: AnimeCollectionState = {
  isLoading: true,
  animeCollections: [],
}

export type { AnimeCollectionState }
export default initialState
