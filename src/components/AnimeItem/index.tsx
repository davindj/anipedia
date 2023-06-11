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
  onSelect?: () => void
  /**
   * [Optional] Handler on Item Clicked
   */
  onClick?: () => void
}

/**
 * UI Component usually used in Collection
 */
export const AnimeItem = ({ title, image, ...props }: AnimeItemProps) => {
  return (
    <div {...props}>
      <img src={image} />
      <a href="">{title}</a>
    </div>
  )
}
