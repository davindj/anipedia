import { useState } from 'react'
import { AnimeCollection } from '../../../entities/animeCollection'
import { AnimeCollectionAction, AnimeCollectionActionEnum } from '../action'
import { CollectionNameModalProps } from '../../../views/components/CollectionNameModal'

const defaultModalProps: CollectionNameModalProps = {
  isOpen: false,
  title: '',
  initialCollectionName: '',
}

const useEditCollectionModal = (
  dispatch: React.Dispatch<AnimeCollectionAction>,
  collections: AnimeCollection[]
) => {
  // State
  const [modalProps, setModalProps] = useState({ ...defaultModalProps })

  // Action
  const openEditCollectionModal = (oldCollection: AnimeCollection) => {
    const title = 'Edit Collection'
    const initialCollectionName = oldCollection.name
    const usedNames = collections
      .map(collection => collection.name)
      .filter(name => name !== oldCollection.name) // filter because old name is unused
    const onCreate = (collectionName: string) => {
      dispatch({
        type: AnimeCollectionActionEnum.EDIT_COLLECTION,
        oldCollectionName: initialCollectionName,
        newCollectionName: collectionName,
      })
      setModalProps({ ...defaultModalProps })
    }
    const onCancel = () => setModalProps({ ...defaultModalProps })

    setModalProps({
      isOpen: true,
      title,
      usedNames,
      initialCollectionName,
      onCreate,
      onCancel,
    })
  }

  return { modalProps, openEditCollectionModal }
}

export default useEditCollectionModal
