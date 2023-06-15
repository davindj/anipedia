import { useContext } from 'react'
import MainLayout from '../../layouts/MainLayout'
import AnimeCollectionContext from '../../../providers/AnimeCollectionsProvider/context'
import {
  CollectionItemsWrapper,
  CollectionListPageWrapper,
  TitlePage,
} from './style'
import { AnimeCollection } from '../../../entities/animeCollection'
import { CollectionItem } from '../../components/CollectionItem'
import {
  Button,
  ButtonColorEnum,
  ButtonSizeEnum,
  ButtonTypeEnum,
} from '../../components/Button'
import { Container } from '../../../utils/style'

const CollectionListPage = () => {
  const {
    animeCollections,
    openAddCollectionModal,
    openEditCollectionModal,
    openRemoveCollectionModal,
  } = useContext(AnimeCollectionContext)

  // handler
  const onAddButtonClicked = () => {
    openAddCollectionModal()
  }
  const onEditCollectionItem = (collection: AnimeCollection) => () => {
    openEditCollectionModal(collection)
  }
  const onRemoveCollectionItem = (collection: AnimeCollection) => () => {
    openRemoveCollectionModal(collection)
  }

  return (
    <MainLayout>
      <Container>
        <CollectionListPageWrapper>
          <TitlePage>My Collections</TitlePage>
          <Button
            text={'Add a Collection'}
            size={ButtonSizeEnum.NORMAL}
            color={ButtonColorEnum.SUCCESS}
            type={ButtonTypeEnum.FILL}
            onClick={onAddButtonClicked}
          />
          <CollectionItemsWrapper>
            {animeCollections.map(collection => (
              <CollectionItem
                key={collection.id}
                collection={collection}
                onEdit={onEditCollectionItem(collection)}
                onRemove={onRemoveCollectionItem(collection)}
              />
            ))}
          </CollectionItemsWrapper>
        </CollectionListPageWrapper>
      </Container>
    </MainLayout>
  )
}

export default CollectionListPage
