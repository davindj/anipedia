import { Anime } from '../../../entities/anime'
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
  anime: { title, cover },
  isSelected = false,
  isRemovable = false,
  isSelectable = false,
  onSelect = () => {},
  onRemove = () => {},
  ...props
}: AnimeItemProps) => {
  const altImage = `${cover} cover image`
  return (
    <AnimeItemWrapper {...props}>
      {isSelectable && (
        <AnimeItemCheckbox
          type="checkbox"
          checked={isSelected}
          onChange={onSelect}
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
          onClick={onRemove}
        />
      )}
    </AnimeItemWrapper>
  )
}

export type { AnimeItemProps }
