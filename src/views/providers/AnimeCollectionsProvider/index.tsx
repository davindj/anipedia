import { useEffect, useReducer } from 'react'
import { ProviderProps } from '../../../types/provider'
import resolver from './resolver'
import AnimeCollectionContext, { AnimeCollectionContextType } from './context'
import { AnimeCollectionActionEnum } from './action'
import useRemoveCollectionModal from './hooks/useRemoveCollectionModal'
import { RemoveConfirmationModal } from '../../components/RemoveConfirmationModal'
import useRemoveAnimeFromCollectionModal from './hooks/useRemoveAnimeFromCollectionModal'
import useAddAnimesToCollectionModal from './hooks/useAddAnimesToCollectionModal'
import { AddAnimesToCollectionModal } from '../../components/AddAnimesToCollectionModal'

const AnimeCollectionProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(resolver, [])
  useEffect(() => {
    dispatch({ type: AnimeCollectionActionEnum.LOAD_COLLECTIONS })
  }, [])

  // Modal Collection
  const openAddCollectionModal = () => {}
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
      <RemoveConfirmationModal {...removeCollectionModalProps} />
      <RemoveConfirmationModal {...removeAnimeFromCollectionModalProps} />
      <AddAnimesToCollectionModal {...addAnimesToCollectionModalProps} />
      {children}
    </AnimeCollectionContext.Provider>
  )
}

export default AnimeCollectionProvider
