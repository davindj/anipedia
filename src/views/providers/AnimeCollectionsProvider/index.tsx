import { useEffect, useReducer } from 'react'
import { ProviderProps } from '../../../types/provider'
import resolver from './resolver'
import initialState from './state'
import AnimeCollectionContext from './context'
import { AnimeCollectionActionEnum } from './action'

const AnimeCollectionProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(resolver, initialState)
  useEffect(() => {
    dispatch({ type: AnimeCollectionActionEnum.LOAD_COLLECTIONS })
  }, [])
  return (
    <AnimeCollectionContext.Provider value={{ state, dispatch }}>
      {children}
    </AnimeCollectionContext.Provider>
  )
}

export default AnimeCollectionProvider
