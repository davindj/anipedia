import { Anime } from '../../../entities/anime'
import { getRouteWithParam } from '../../../routes'
import ROUTE_PATH from '../../../routes/path'
import { Button, ButtonColorEnum, ButtonTypeEnum } from '../Button'
import {
  AnimeItemCheckbox,
  AnimeItemImageWrapper,
  AnimeItemTitle,
  AnimeItemWrapper,
} from './style'

type AnimeItemProps = {
  /**
   * Anime Data to be Rendered
   */
  anime: Anime
  /**
   * [Optional] Is Item Selectable
   */
  isSelectable?: boolean
  /**
   * [Optional] Is Item Removable
   */
  isRemovable?: boolean
  /**
   * [Optional] Is Item Selected
   */
  isSelected?: boolean
  /**
   * [Optional] Handler on Item Selected
   */
  onSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * [Optional] Handler on Item Removed
   */
  onRemove?: () => void
  /**
   * [Optional] Handler on Item Clicked
   */
  onClick?: () => void
}

/**
 * UI Component usually used in Collection
 */
export const AnimeItem = ({
  anime: { id, title, cover },
  isSelected = false,
  isRemovable = false,
  isSelectable = false,
  onSelect = () => {},
  onRemove = () => {},
  ...props
}: AnimeItemProps) => {
  const altImage = `${cover} cover image`
  const targetPage = getRouteWithParam(ROUTE_PATH.ANIME_DETAIL_PAGE, `${id}`)

  // Handler
  const onClickPreventNavigation =
    (callback: (e: React.MouseEvent<HTMLElement>) => void = () => {}) =>
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation() // Prevent event propagation to parent elements
      callback(e)
    }

  return (
    <AnimeItemWrapper {...props} to={targetPage}>
      {isSelectable && (
        <AnimeItemCheckbox
          type="checkbox"
          checked={isSelected}
          onChange={onSelect}
          onClick={onClickPreventNavigation()}
        />
      )}
      <AnimeItemImageWrapper>
        <img src={cover} alt={altImage} />
      </AnimeItemImageWrapper>
      <AnimeItemTitle>{title}</AnimeItemTitle>
      {isRemovable && (
        <Button
          text={'Remove'}
          color={ButtonColorEnum.DANGER}
          type={ButtonTypeEnum.OUTLINE}
          onClick={onClickPreventNavigation(onRemove)}
        />
      )}
    </AnimeItemWrapper>
  )
}

export type { AnimeItemProps }
