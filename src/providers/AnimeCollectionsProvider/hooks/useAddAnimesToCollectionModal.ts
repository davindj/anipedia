import { useState } from 'react'
import { AnimeCollection } from '../../../entities/animeCollection'
import { AnimeCollectionAction, AnimeCollectionActionEnum } from '../action'
import { Anime } from '../../../entities/anime'
import { AddAnimesToCollectionModalProps } from '../../../views/components/AddAnimesToCollectionModal'

const defaultModalProps: AddAnimesToCollectionModalProps = {
  isOpen: false,
  collections: [],
}

const useAddAnimesToCollectionModal = (
  dispatch: React.Dispatch<AnimeCollectionAction>,
  collections: AnimeCollection[],
  openAddCollectionModal: (animes: Anime[]) => void
) => {
  // State
  const [modalProps, setModalProps] = useState({ ...defaultModalProps })

  // Action
  const openAddAnimesToCollectionModal = (animes: Anime[]) => {
    const onClickCollection = (collection: AnimeCollection) => {
      dispatch({
        type: AnimeCollectionActionEnum.ADD_ANIMES_TO_COLLECTION,
        animes,
        collectionName: collection.name,
      })
      setModalProps({ ...defaultModalProps })
    }
    const onAddNewCollection = () => {
      openAddCollectionModal(animes)
      setModalProps({ ...defaultModalProps })
    }
    const onCancel = () => setModalProps({ ...defaultModalProps })

    setModalProps({
      isOpen: true,
      collections,
      onClickCollection,
      onAddNewCollection,
      onCancel,
    })
  }

  return { modalProps, openAddAnimesToCollectionModal }
}

export default useAddAnimesToCollectionModal
