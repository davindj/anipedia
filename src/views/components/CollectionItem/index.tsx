import { AnimeCollection } from '../../../entities/animeCollection'
import { getRouteWithParam } from '../../../routes'
import ROUTE_PATH from '../../../routes/path'
import { Button, ButtonColorEnum, ButtonTypeEnum } from '../Button'
import {
  CollectionItemWrapper,
  ItemImage,
  ItemBody,
  ItemBodyTextContainer,
  ItemTitle,
  ItemSubtitle,
  ItemBodyActionContainer,
} from './style'

type CollectionItemProps = {
  /**
   * Anime Collection to be Rendered
   */
  collection: AnimeCollection
  /**
   * [Optional] Handler on Item Edit
   */
  onEdit?: () => void
  /**
   * [Optional] Handler on Item Removed
   */
  onRemove?: () => void
}

/**
 * Collection Item
 */
export const CollectionItem = ({
  collection: { id, name, animes },
  onEdit = () => {},
  onRemove = () => {},
}: CollectionItemProps) => {
  const target = getRouteWithParam(ROUTE_PATH.COLLECTION_DETAIL_PAGE, id)
  const coverImage =
    animes.length > 0 ? animes[0].cover : '/img/collection-no-image.png'
  const title = name
  const subtitle =
    animes.length > 1 ? `${animes.length} animes` : `${animes.length} anime`

  // handler
  const onClickEdit = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation() // Prevent event propagation to parent elements
    e.preventDefault()
    onEdit()
  }
  const onClickRemove = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation() // Prevent event propagation to parent elements
    e.preventDefault()
    onRemove()
  }

  return (
    <CollectionItemWrapper to={target}>
      <ItemImage src={coverImage} />
      <ItemBody>
        <ItemBodyTextContainer>
          <ItemTitle>{title}</ItemTitle>
          <ItemSubtitle>{subtitle}</ItemSubtitle>
        </ItemBodyTextContainer>
        <ItemBodyActionContainer>
          <Button
            text={'Edit'}
            color={ButtonColorEnum.SUCCESS}
            type={ButtonTypeEnum.TONE}
            onClick={onClickEdit}
          />
          <Button
            text={'Remove'}
            color={ButtonColorEnum.DANGER}
            type={ButtonTypeEnum.TEXT}
            onClick={onClickRemove}
          />
        </ItemBodyActionContainer>
      </ItemBody>
    </CollectionItemWrapper>
  )
}

export type { CollectionItemProps }
