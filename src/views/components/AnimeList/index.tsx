import { AnimeListWrapper } from './style'
import { AnimeItem } from '../AnimeItem'
import { Anime } from '../../../entities/anime'
import { AnimeItemSkeleton } from '../AnimeItemSkeleton'

type AnimeListProps = {
  /**
   * Anime Items to be rendered in List
   */
  animes: Anime[]
  /**
   * [Optional] List of Selected Anime Id
   */
  selectedIds?: number[]
  /**
   * [Optional] Number of skeleton to be rendered, usually used in loading.
   */
  skeletonCount?: number
  /**
   * [Optional] Is item in List Selectable
   */
  isItemSelectable?: boolean
  /**
   * [Optional] Is item in List Removable
   */
  isItemRemovable?: boolean
  /**
   * [Optional] Items to be rendered in List
   */
  onSelectItem?: (anime: Anime) => void
  /**
   * [Optional] Items to be rendered in List
   */
  onRemoveItem?: (anime: Anime) => void
}

/**
 * UI Component usually used in Collection
 */
export const AnimeList = ({
  animes,
  selectedIds = [],
  skeletonCount = 0,
  isItemSelectable = false,
  isItemRemovable = false,
  onSelectItem = () => {},
  onRemoveItem = () => {},
  ...props
}: AnimeListProps) => {
  return (
    <AnimeListWrapper {...props}>
      {animes.map(anime => (
        <AnimeItem
          key={anime.id}
          anime={anime}
          isSelectable={isItemSelectable}
          isSelected={selectedIds.includes(anime.id)}
          isRemovable={isItemRemovable}
          onSelect={() => onSelectItem(anime)}
          onRemove={() => onRemoveItem(anime)}
        />
      ))}
      {Array(skeletonCount)
        .fill(0)
        .map((_, i) => {
          return <AnimeItemSkeleton key={i} />
        })}
    </AnimeListWrapper>
  )
}

export type { AnimeListProps }
