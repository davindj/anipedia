import { useEffect, useReducer } from 'react'
import { ProviderProps } from '../../../types/provider'
import resolver from './resolver'
import AnimeCollectionContext, { AnimeCollectionContextType } from './context'
import { AnimeCollectionActionEnum } from './action'
import useRemoveCollectionModal from './hooks/useRemoveCollectionModal'
import { RemoveConfirmationModal } from '../../components/RemoveConfirmationModal'
import useRemoveAnimeFromCollectionModal from './hooks/useRemoveAnimeFromCollectionModal'

const AnimeCollectionProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(resolver, [])
  useEffect(() => {
    dispatch({ type: AnimeCollectionActionEnum.LOAD_COLLECTIONS })
  }, [])

  const { modalProps: removeCollectionModalProps, openRemoveCollectionModal } =
    useRemoveCollectionModal(dispatch)
  const {
    modalProps: removeAnimeFromCollectionModalProps,
    openRemoveAnimeFromCollectionModal,
  } = useRemoveAnimeFromCollectionModal(dispatch)

  // TODO modal
  const openAddAnimesToCollectionModal = () => {}
  const openAddCollectionModal = () => {}
  const openEditCollectionModal = () => {}

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
      {children}
    </AnimeCollectionContext.Provider>
  )
}

export default AnimeCollectionProvider
