// THIRD PARTY
import { useEffect, useReducer } from 'react'

// PROVIDER UTILS
import { ProviderProps } from '../../types/provider'
import AnimeCollectionContext, { AnimeCollectionContextType } from './context'

// REDUCER
import { AnimeCollectionActionEnum } from './action'
import resolver from './resolver'
import initialState from './state'

// VIEWS
import { RemoveConfirmationModal } from '../../views/components/RemoveConfirmationModal'
import { AddAnimesToCollectionModal } from '../../views/components/AddAnimesToCollectionModal'
import { CollectionNameModal } from '../../views/components/CollectionNameModal'

// HOOKS
import useRemoveCollectionModal from './hooks/useRemoveCollectionModal'
import useRemoveAnimeFromCollectionModal from './hooks/useRemoveAnimeFromCollectionModal'
import useAddAnimesToCollectionModal from './hooks/useAddAnimesToCollectionModal'
import useAddCollectionModal from './hooks/useAddCollectionModal'
import useEditCollectionModal from './hooks/useEditCollectionModal'

// PROVIDER COMPONENT
const AnimeCollectionProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(resolver, initialState)
  useEffect(() => {
    dispatch({ type: AnimeCollectionActionEnum.LOAD_COLLECTIONS })
  }, [])

  // Modal Collection
  const { modalProps: addCollectionModalProps, openAddCollectionModal } =
    useAddCollectionModal(dispatch, state.animeCollections)
  const { modalProps: editCollectionModalProps, openEditCollectionModal } =
    useEditCollectionModal(dispatch, state.animeCollections)
  const { modalProps: removeCollectionModalProps, openRemoveCollectionModal } =
    useRemoveCollectionModal(dispatch)

  // Modal Anime
  const {
    modalProps: addAnimesToCollectionModalProps,
    openAddAnimesToCollectionModal,
  } = useAddAnimesToCollectionModal(
    dispatch,
    state.animeCollections,
    openAddCollectionModal
  )
  const {
    modalProps: removeAnimeFromCollectionModalProps,
    openRemoveAnimeFromCollectionModal,
  } = useRemoveAnimeFromCollectionModal(dispatch)

  // Context
  const context: AnimeCollectionContextType = {
    ...state,
    openAddAnimesToCollectionModal,
    openRemoveAnimeFromCollectionModal,
    openAddCollectionModal,
    openEditCollectionModal,
    openRemoveCollectionModal,
  }

  return (
    <AnimeCollectionContext.Provider value={context}>
      <CollectionNameModal {...addCollectionModalProps} />
      <CollectionNameModal {...editCollectionModalProps} />
      <RemoveConfirmationModal {...removeCollectionModalProps} />
      <RemoveConfirmationModal {...removeAnimeFromCollectionModalProps} />
      <AddAnimesToCollectionModal {...addAnimesToCollectionModalProps} />
      {children}
    </AnimeCollectionContext.Provider>
  )
}

export default AnimeCollectionProvider
