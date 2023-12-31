import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import AnimeCollectionContext from '../../../providers/AnimeCollectionsProvider/context'
import { ButtonSection, CollectionDetailPageWrapper, TitlePage } from './style'
import {
  Button,
  ButtonColorEnum,
  ButtonSizeEnum,
  ButtonTypeEnum,
} from '../../components/Button'
import { AnimeList } from '../../components/AnimeList'
import { Container } from '../../../utils/style'

const CollectionDetailPage = () => {
  // hooks
  const {
    isLoading,
    animeCollections,
    openEditCollectionModal,
    openRemoveAnimeFromCollectionModal,
  } = useContext(AnimeCollectionContext)
  const { id } = useParams()

  // UI Fallback: Loading
  if (isLoading) return <MainLayout>Loading...</MainLayout>

  // Variables
  const collection = animeCollections.find(collection => collection.id === id)

  // UI Fallback: Collection not found
  if (!collection) return <MainLayout>Collection not found</MainLayout>

  // handler
  const onEditCollectionName = () => {
    openEditCollectionModal(collection)
  }
  const onRemoveItem = (idx: number) => {
    const anime = collection.animes[idx]
    openRemoveAnimeFromCollectionModal(anime, collection)
  }

  return (
    <MainLayout>
      <Container>
        <CollectionDetailPageWrapper>
          <TitlePage>{collection.name}</TitlePage>
          <ButtonSection>
            <Button
              text={'Edit'}
              size={ButtonSizeEnum.NORMAL}
              color={ButtonColorEnum.SUCCESS}
              type={ButtonTypeEnum.FILL}
              onClick={onEditCollectionName}
            />
          </ButtonSection>
          <AnimeList
            isItemRemovable
            animes={collection.animes}
            onRemoveItem={onRemoveItem}
          />
        </CollectionDetailPageWrapper>
      </Container>
    </MainLayout>
  )
}

export default CollectionDetailPage
