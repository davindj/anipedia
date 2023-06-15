import { useState } from 'react'
import { AnimeCollection } from '../../../entities/animeCollection'
import { RemoveConfirmationModalProps } from '../../../views/components/RemoveConfirmationModal'
import { AnimeCollectionAction, AnimeCollectionActionEnum } from '../action'

const defaultModalProps: RemoveConfirmationModalProps = {
  isOpen: false,
  title: '',
  description: '',
}

const useRemoveCollectionModal = (
  dispatch: React.Dispatch<AnimeCollectionAction>
) => {
  // State
  const [modalProps, setModalProps] = useState({ ...defaultModalProps })

  // Action
  const openRemoveCollectionModal = (collection: AnimeCollection) => {
    const title = 'Remove Collection'
    const description = `Are you sure you want to remove ${collection.name} from your anime collections?`
    const onRemove = () => {
      dispatch({
        type: AnimeCollectionActionEnum.REMOVE_COLLECTION,
        collectionName: collection.name,
      })
      setModalProps({ ...defaultModalProps })
    }
    const onCancel = () => setModalProps({ ...defaultModalProps })

    setModalProps({
      isOpen: true,
      title,
      description,
      onRemove,
      onCancel,
    })
  }

  return { modalProps, openRemoveCollectionModal }
}

export default useRemoveCollectionModal
