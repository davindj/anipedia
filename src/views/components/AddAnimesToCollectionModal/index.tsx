import { createPortal } from 'react-dom'
import {
  DarkBackground,
  Body,
  ContentTop,
  Title,
  Description,
  ContentMiddle,
  ItemCard,
  ItemCardImage,
  ItemCardNoImage,
  ItemCardBody,
  ContentBottom,
  ButtonCancel,
  ItemCardCreate,
} from './style'
import { AnimeCollection } from '../../../entities/animeCollection'

type AddAnimesToCollectionModalProps = {
  /**
   * Is Modal Open
   */
  isOpen: boolean
  /**
   * Is Modal Open
   */
  collections: AnimeCollection[]
  /**
   * [Optional] Handler on Cancel Button Clicked
   */
  onCancel?: () => void
  /**
   * [Optional] Handler on Add New Collection
   */
  onAddNewCollection?: () => void
  /**
   * [Optional] Handler on Collection Clicked
   */
  onClickCollection?: (collection: AnimeCollection) => void
}

/**
 * Modal to Add Anime(s) to Collection
 */
export const AddAnimesToCollectionModal = ({
  isOpen,
  collections,
  onCancel = () => {},
  onAddNewCollection = () => {},
  onClickCollection = () => {},
}: AddAnimesToCollectionModalProps) => {
  if (!isOpen) return <></>
  return createPortal(
    <DarkBackground>
      <Body>
        <ContentTop>
          <Title>Add Anime to Collection</Title>
          <Description>Please select a collection</Description>
        </ContentTop>
        <ContentMiddle>
          {collections.map((collection, idx) => {
            return (
              <ItemCard onClick={() => onClickCollection(collection)} key={idx}>
                {collection.animes.length === 0 ? (
                  <ItemCardNoImage />
                ) : (
                  <ItemCardImage src={collection.animes[0].cover} />
                )}
                <ItemCardBody>
                  <p>{collection.name}</p>
                  <p>{collection.animes.length} animes</p>
                </ItemCardBody>
              </ItemCard>
            )
          })}
          <ItemCardCreate onClick={onAddNewCollection}>
            <ItemCardNoImage />
            <ItemCardBody>
              <p>Add New Collection</p>
            </ItemCardBody>
          </ItemCardCreate>
        </ContentMiddle>
        <ContentBottom>
          <ButtonCancel onClick={onCancel}>Cancel</ButtonCancel>
        </ContentBottom>
      </Body>
    </DarkBackground>,
    document.body
  )
}

export type { AddAnimesToCollectionModalProps }
