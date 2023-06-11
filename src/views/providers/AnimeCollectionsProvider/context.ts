import { createContext } from 'react'
import initialState, { AnimeCollectionState } from './state'
import { AnimeCollectionAction } from './action'
import { ContextType } from '../../../types/provider'

const initialContextValue: ContextType<
  AnimeCollectionState,
  AnimeCollectionAction
> = {
  state: initialState,
  dispatch: () => {},
}

const AnimeCollectionContext = createContext(initialContextValue)
export default AnimeCollectionContext
