import { useState } from 'react'
import { AnimeCollection } from '../../../entities/animeCollection'
import { RemoveConfirmationModalProps } from '../../../views/components/RemoveConfirmationModal'
import { AnimeCollectionAction, AnimeCollectionActionEnum } from '../action'
import { Anime } from '../../../entities/anime'

const defaultModalProps: RemoveConfirmationModalProps = {
  isOpen: false,
  title: '',
  description: '',
}

const useRemoveAnimeFromCollectionModal = (
  dispatch: React.Dispatch<AnimeCollectionAction>
) => {
  // State
  const [modalProps, setModalProps] = useState({ ...defaultModalProps })

  // Action
  const openRemoveAnimeFromCollectionModal = (
    anime: Anime,
    collection: AnimeCollection
  ) => {
    const title = 'Remove Anime from Collection'
    const description = `Are you sure you want to remove ${anime.title} from ${collection.name}?`
    const onRemove = () => {
      dispatch({
        type: AnimeCollectionActionEnum.REMOVE_ANIME_FROM_COLLECTION,
        animeId: anime.id,
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

  return { modalProps, openRemoveAnimeFromCollectionModal }
}

export default useRemoveAnimeFromCollectionModal
