import { Resolver } from '../../../types/provider'
import { AnimeCollection } from '../../../entities/animeCollection'
import { AnimeCollectionState } from './state'
import {
  AnimeCollectionAction,
  AnimeCollectionAddCollectionAction,
  AnimeCollectionAddAnimeToNewCollectionAction,
  AnimeCollectionAddAnimeToCollectionAction,
  AnimeCollectionAddAnimesToCollectionAction,
  AnimeCollectionRemoveAnimeFromCollectionAction,
  AnimeCollectionEditCollectionAction,
  AnimeCollectionRemoveCollectionAction,
  AnimeCollectionLoadCollectionsAction,
  AnimeCollectionActionEnum,
} from './action'

const ANIME_COLLECTIONS_KEY = 'anipedia-anime_collections'

const animeCollectionAddAnimeToNewCollectionResolver: Resolver<
  AnimeCollectionState,
  AnimeCollectionAddAnimeToNewCollectionAction
> = (state, { collectionName, animeId }) => {
  const newCollection: AnimeCollection = {
    name: collectionName,
    animeIds: [animeId],
  }
  return [...state, newCollection]
}

const animeCollectionAddAnimeToCollectionResolver: Resolver<
  AnimeCollectionState,
  AnimeCollectionAddAnimeToCollectionAction
> = (state, { collectionName, animeId }) => {
  const collectionIdx = state.findIndex(
    collection => collection.name === collectionName
  )
  if (state[collectionIdx].animeIds.findIndex(id => id === animeId) !== -1) {
    return state // doesnt update because animeId already added
  }
  const newCollections = [...state]
  newCollections[collectionIdx] = {
    ...state[collectionIdx],
    animeIds: [...state[collectionIdx].animeIds, animeId],
  }
  return newCollections
}

const animeCollectionAddAnimesToCollectionResolver: Resolver<
  AnimeCollectionState,
  AnimeCollectionAddAnimesToCollectionAction
> = (state, { collectionName, animeIds }) => {
  const collectionIdx = state.findIndex(
    collection => collection.name === collectionName
  )
  const addedAnimeIds = animeIds.filter(
    animeId => !state[collectionIdx].animeIds.includes(animeId)
  )
  if (addedAnimeIds.length === 0) {
    return state // doesnt update state because there's no anime to add
  }
  const newCollections = [...state]
  newCollections[collectionIdx] = {
    ...state[collectionIdx],
    animeIds: [...state[collectionIdx].animeIds, ...addedAnimeIds],
  }
  return newCollections
}

const animeCollectionRemoveAnimeFromCollectionResolver: Resolver<
  AnimeCollectionState,
  AnimeCollectionRemoveAnimeFromCollectionAction
> = (state, { collectionName, animeId }) => {
  const collectionIdx = state.findIndex(
    collection => collection.name === collectionName
  )
  const newCollections = [...state]
  newCollections[collectionIdx] = {
    ...state[collectionIdx],
    animeIds: state[collectionIdx].animeIds.filter(id => id !== animeId),
  }
  return newCollections
}

const animeCollectionAddCollectionResolver: Resolver<
  AnimeCollectionState,
  AnimeCollectionAddCollectionAction
> = (state, { collectionName }) => {
  const newCollection: AnimeCollection = {
    name: collectionName,
    animeIds: [],
  }
  return [...state, newCollection]
}

const animeCollectionEditCollectionResolver: Resolver<
  AnimeCollectionState,
  AnimeCollectionEditCollectionAction
> = (state, { oldCollectionName, newCollectionName }) => {
  const collectionIdx = state.findIndex(
    collection => collection.name === oldCollectionName
  )
  const newCollections = [...state]
  newCollections[collectionIdx] = {
    ...state[collectionIdx],
    name: newCollectionName,
  }
  return newCollections
}

const animeCollectionRemoveCollectionResolver: Resolver<
  AnimeCollectionState,
  AnimeCollectionRemoveCollectionAction
> = (state, { collectionName }) => {
  return [...state.filter(collection => collection.name !== collectionName)]
}

const animeCollectionLoadCollectionsResolver: Resolver<
  AnimeCollectionState,
  AnimeCollectionLoadCollectionsAction
> = state => {
  return loadAnimeCollections()
}

const loadAnimeCollections = (): AnimeCollectionState => {
  const data = localStorage.getItem(ANIME_COLLECTIONS_KEY)
  if (!data) return []
  return JSON.parse(data) // TODO check wether JSON is proper type
}

const saveAnimeCollections = (state: AnimeCollectionState) => {
  localStorage.setItem(ANIME_COLLECTIONS_KEY, JSON.stringify(state))
}

// MAIN RESOLVER
const resolver = (
  state: AnimeCollectionState,
  action: AnimeCollectionAction
): AnimeCollectionState => {
  let newState = state
  if (action.type === AnimeCollectionActionEnum.ADD_ANIME_TO_NEW_COLLECTION)
    newState = animeCollectionAddAnimeToNewCollectionResolver(state, action)
  else if (action.type === AnimeCollectionActionEnum.ADD_ANIME_TO_COLLECTION)
    newState = animeCollectionAddAnimeToCollectionResolver(state, action)
  else if (action.type === AnimeCollectionActionEnum.ADD_ANIMES_TO_COLLECTION)
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
    saveAnimeCollections(newState)
  }
  return newState
}

export default resolver
