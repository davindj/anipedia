import { useEffect, useReducer } from 'react'
import { ProviderProps } from '../../types/provider'
import resolver from './resolver'
import AnimeCollectionContext, { AnimeCollectionContextType } from './context'
import { AnimeCollectionActionEnum } from './action'
import useRemoveCollectionModal from './hooks/useRemoveCollectionModal'
import { RemoveConfirmationModal } from '../../views/components/RemoveConfirmationModal'
import useRemoveAnimeFromCollectionModal from './hooks/useRemoveAnimeFromCollectionModal'
import useAddAnimesToCollectionModal from './hooks/useAddAnimesToCollectionModal'
import { AddAnimesToCollectionModal } from '../../views/components/AddAnimesToCollectionModal'
import useAddCollectionModal from './hooks/useAddCollectionModal'
import { CollectionNameModal } from '../../views/components/CollectionNameModal'

const AnimeCollectionProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(resolver, [])
  useEffect(() => {
    dispatch({ type: AnimeCollectionActionEnum.LOAD_COLLECTIONS })
  }, [])

  // Modal Collection
  const { modalProps: addCollectionModalProps, openAddCollectionModal } =
    useAddCollectionModal(dispatch, state)
  const openEditCollectionModal = () => {}
  const { modalProps: removeCollectionModalProps, openRemoveCollectionModal } =
    useRemoveCollectionModal(dispatch)

  // Modal Anime
  const {
    modalProps: addAnimesToCollectionModalProps,
    openAddAnimesToCollectionModal,
  } = useAddAnimesToCollectionModal(dispatch, state, openAddCollectionModal)
  const {
    modalProps: removeAnimeFromCollectionModalProps,
    openRemoveAnimeFromCollectionModal,
  } = useRemoveAnimeFromCollectionModal(dispatch)

  const context: AnimeCollectionContextType = {
    animeCollections: state,
    openAddAnimesToCollectionModal,
    openRemoveAnimeFromCollectionModal,
    openAddCollectionModal,
    openEditCollectionModal,
    openRemoveCollectionModal,
  }

  return (
    <AnimeCollectionContext.Provider value={context}>
      <CollectionNameModal {...addCollectionModalProps} />
      <RemoveConfirmationModal {...removeCollectionModalProps} />
      <RemoveConfirmationModal {...removeAnimeFromCollectionModalProps} />
      <AddAnimesToCollectionModal {...addAnimesToCollectionModalProps} />
      {children}
    </AnimeCollectionContext.Provider>
  )
}

export default AnimeCollectionProvider
