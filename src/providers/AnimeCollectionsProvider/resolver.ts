import { v4 as uuid } from 'uuid'
import { Resolver } from '../../types/provider'
import { AnimeCollection } from '../../entities/animeCollection'
import { AnimeCollectionState } from './state'
import {
  AnimeCollectionAction,
  AnimeCollectionAddCollectionAction,
  AnimeCollectionAddAnimesToCollectionAction,
  AnimeCollectionRemoveAnimeFromCollectionAction,
  AnimeCollectionEditCollectionAction,
  AnimeCollectionRemoveCollectionAction,
  AnimeCollectionLoadCollectionsAction,
  AnimeCollectionActionEnum,
} from './action'

const ANIME_COLLECTIONS_KEY = 'anipedia-anime_collections'

const animeCollectionAddAnimesToCollectionResolver: Resolver<
  AnimeCollectionState,
  AnimeCollectionAddAnimesToCollectionAction
> = (state, { collectionName, animes }) => {
  const { animeCollections: collections } = state
  const collectionIdx = collections.findIndex(
    collection => collection.name === collectionName
  )
  const addedanimes = animes.filter(
    ({ id }) =>
      collections[collectionIdx].animes.findIndex(anime => anime.id === id) ===
      -1
  )
  if (addedanimes.length === 0) {
    return state // doesnt update state because there's no anime to add
  }
  const newCollections = [...collections]
  newCollections[collectionIdx] = {
    ...collections[collectionIdx],
    animes: [...collections[collectionIdx].animes, ...addedanimes],
  }
  return {
    ...state,
    animeCollections: newCollections,
  }
}

const animeCollectionRemoveAnimeFromCollectionResolver: Resolver<
  AnimeCollectionState,
  AnimeCollectionRemoveAnimeFromCollectionAction
> = (state, { collectionName, animeId }) => {
  const { animeCollections: collections } = state
  const collectionIdx = collections.findIndex(
    collection => collection.name === collectionName
  )
  const newCollections = [...collections]
  newCollections[collectionIdx] = {
    ...collections[collectionIdx],
    animes: collections[collectionIdx].animes.filter(
      ({ id }) => id !== animeId
    ),
  }
  return {
    ...state,
    animeCollections: newCollections,
  }
}

const animeCollectionAddCollectionResolver: Resolver<
  AnimeCollectionState,
  AnimeCollectionAddCollectionAction
> = (state, { collectionName, animes }) => {
  const { animeCollections: collections } = state
  const newCollection: AnimeCollection = {
    id: uuid(),
    name: collectionName,
    animes: animes.map(anime => ({ ...anime })),
  }
  return {
    ...state,
    animeCollections: [...collections, newCollection],
  }
}

const animeCollectionEditCollectionResolver: Resolver<
  AnimeCollectionState,
  AnimeCollectionEditCollectionAction
> = (state, { oldCollectionName, newCollectionName }) => {
  const { animeCollections: collections } = state
  const collectionIdx = collections.findIndex(
    collection => collection.name === oldCollectionName
  )
  const newCollections = [...collections]
  newCollections[collectionIdx] = {
    ...collections[collectionIdx],
    name: newCollectionName,
  }
  return {
    ...state,
    animeCollections: newCollections,
  }
}

const animeCollectionRemoveCollectionResolver: Resolver<
  AnimeCollectionState,
  AnimeCollectionRemoveCollectionAction
> = (state, { collectionName }) => {
  const { animeCollections: collections } = state
  return {
    ...state,
    animeCollections: [
      ...collections.filter(collection => collection.name !== collectionName),
    ],
  }
}

const animeCollectionLoadCollectionsResolver: Resolver<
  AnimeCollectionState,
  AnimeCollectionLoadCollectionsAction
> = () => {
  const animeCollections = loadAnimeCollections()
  return {
    isLoading: false,
    animeCollections,
  }
}

const loadAnimeCollections = (): AnimeCollection[] => {
  const data = localStorage.getItem(ANIME_COLLECTIONS_KEY)
  if (!data) return []
  return JSON.parse(data) // TODO check wether JSON is proper type
}

const saveAnimeCollections = (collections: AnimeCollection[]) => {
  localStorage.setItem(ANIME_COLLECTIONS_KEY, JSON.stringify(collections))
}

// MAIN RESOLVER
const resolver = (
  state: AnimeCollectionState,
  action: AnimeCollectionAction
): AnimeCollectionState => {
  let newState = state
  if (action.type === AnimeCollectionActionEnum.ADD_ANIMES_TO_COLLECTION)
    newState = animeCollectionAddAnimesToCollectionResolver(state, action)
  else if (
    action.type === AnimeCollectionActionEnum.REMOVE_ANIME_FROM_COLLECTION
  )
    newState = animeCollectionRemoveAnimeFromCollectionResolver(state, action)
  else if (action.type === AnimeCollectionActionEnum.ADD_COLLECTION)
    newState = animeCollectionAddCollectionResolver(state, action)
  else if (action.type === AnimeCollectionActionEnum.EDIT_COLLECTION)
    newState = animeCollectionEditCollectionResolver(state, action)
  else if (action.type === AnimeCollectionActionEnum.REMOVE_COLLECTION)
    newState = animeCollectionRemoveCollectionResolver(state, action)
  else if (action.type === AnimeCollectionActionEnum.LOAD_COLLECTIONS)
    newState = animeCollectionLoadCollectionsResolver(state, action)

  if (action.type !== AnimeCollectionActionEnum.LOAD_COLLECTIONS) {
    // Save Collection after Action, except for load collections
    saveAnimeCollections(newState.animeCollections)
  }
  return newState
}

export default resolver
