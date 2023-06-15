import { useState } from 'react'
import { AnimeCollection } from '../../../../entities/animeCollection'
import { AnimeCollectionAction, AnimeCollectionActionEnum } from '../action'
import { Anime } from '../../../../entities/anime'
import { CollectionNameModalProps } from '../../../components/CollectionNameModal'

const defaultModalProps: CollectionNameModalProps = {
  isOpen: false,
  title: '',
  initialCollectionName: '',
}

const useAddCollectionModal = (
  dispatch: React.Dispatch<AnimeCollectionAction>,
  collections: AnimeCollection[]
) => {
  // State
  const [modalProps, setModalProps] = useState({ ...defaultModalProps })

  // Action
  const openAddCollectionModal = (animes: Anime[] = []) => {
    const title = 'Add New Collection'
    const usedNames = collections.map(collection => collection.name)
    const onCreate = (collectionName: string) => {
      dispatch({
        type: AnimeCollectionActionEnum.ADD_COLLECTION,
        collectionName,
        animes,
      })
      setModalProps({ ...defaultModalProps })
    }
    const onCancel = () => setModalProps({ ...defaultModalProps })

    setModalProps({
      isOpen: true,
      title,
      usedNames,
      onCreate,
      onCancel,
    })
  }

  return { modalProps, openAddCollectionModal }
}

export default useAddCollectionModal
