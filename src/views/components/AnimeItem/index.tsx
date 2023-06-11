import {
  AnimeItemCheckbox,
  AnimeItemImageWrapper,
  AnimeItemTitle,
  AnimeItemWrapper,
} from './style'

interface AnimeItemProps {
  /**
   * Anime Title
   */
  title: string
  /**
   * [Optional] Image source for Anime Cover Image
   */
  image?: string
  /**
   * [Optional] Redirect target on Item Click in Cover Image / Title
   */
  target?: string
  /**
   * [Optional] Is Item Selectable
   */
  isSelectable?: boolean
  /**
   * [Optional] Is Item Selected
   */
  isSelected?: boolean
  /**
   * [Optional] Handler on Item Selected
   */
  onSelect?: (newVal: boolean) => void
  /**
   * [Optional] Handler on Item Clicked
   */
  onClick?: () => void
}

/**
 * UI Component usually used in Collection
 */
export const AnimeItem = ({
  title,
  image = '',
  isSelectable = false,
  isSelected = false,
  target = '',
  onSelect,
  ...props
}: AnimeItemProps) => {
  const isOnSelectExist = onSelect != null
  const altImage = `${image} cover image`
  return (
    <AnimeItemWrapper {...props}>
      {isSelectable && (
        <AnimeItemCheckbox
          type="checkbox"
          checked={isSelected}
          onChange={e => isOnSelectExist && onSelect(e.target.checked)}
        />
      )}
      <AnimeItemImageWrapper>
        <img src={image} alt={altImage} />
      </AnimeItemImageWrapper>
      <AnimeItemTitle href={target}>{title}</AnimeItemTitle>
    </AnimeItemWrapper>
  )
}
