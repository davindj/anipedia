import { Anime } from '../../entities/anime'

enum AnimeCollectionActionEnum {
  ADD_ANIMES_TO_COLLECTION,
  REMOVE_ANIME_FROM_COLLECTION,
  ADD_COLLECTION,
  EDIT_COLLECTION,
  REMOVE_COLLECTION,
  LOAD_COLLECTIONS,
}

type AnimeCollectionAddAnimesToCollectionAction = {
  type: AnimeCollectionActionEnum.ADD_ANIMES_TO_COLLECTION
  collectionName: string
  animes: Anime[]
}
type AnimeCollectionRemoveAnimeFromCollectionAction = {
  type: AnimeCollectionActionEnum.REMOVE_ANIME_FROM_COLLECTION
  collectionName: string
  animeId: number
}
type AnimeCollectionAddCollectionAction = {
  type: AnimeCollectionActionEnum.ADD_COLLECTION
  collectionName: string
  animes: Anime[]
}
type AnimeCollectionEditCollectionAction = {
  type: AnimeCollectionActionEnum.EDIT_COLLECTION
  oldCollectionName: string
  newCollectionName: string
}
type AnimeCollectionRemoveCollectionAction = {
  type: AnimeCollectionActionEnum.REMOVE_COLLECTION
  collectionName: string
}
type AnimeCollectionLoadCollectionsAction = {
  type: AnimeCollectionActionEnum.LOAD_COLLECTIONS
}
type AnimeCollectionAction =
  | AnimeCollectionAddAnimesToCollectionAction
  | AnimeCollectionRemoveAnimeFromCollectionAction
  | AnimeCollectionAddCollectionAction
  | AnimeCollectionEditCollectionAction
  | AnimeCollectionRemoveCollectionAction
  | AnimeCollectionLoadCollectionsAction

export type {
  AnimeCollectionAddAnimesToCollectionAction,
  AnimeCollectionRemoveAnimeFromCollectionAction,
  AnimeCollectionAddCollectionAction,
  AnimeCollectionEditCollectionAction,
  AnimeCollectionRemoveCollectionAction,
  AnimeCollectionLoadCollectionsAction,
  AnimeCollectionAction,
}
export { AnimeCollectionActionEnum }
