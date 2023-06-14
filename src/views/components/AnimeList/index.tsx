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
   * [Optional] List of Selected Anime Idx
   */
  selectedIndexs?: number[]
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
  onSelectItem?: (animeIdx: number) => void
  /**
   * [Optional] Items to be rendered in List
   */
  onRemoveItem?: (animeIdx: number) => void
}

/**
 * UI Component usually used in Collection
 */
export const AnimeList = ({
  animes,
  selectedIndexs = [],
  skeletonCount = 0,
  isItemSelectable = false,
  isItemRemovable = false,
  onSelectItem = () => {},
  onRemoveItem = () => {},
  ...props
}: AnimeListProps) => {
  return (
    <AnimeListWrapper {...props}>
      {animes.map((anime, idx) => (
        <AnimeItem
          key={anime.id}
          anime={anime}
          isSelectable={isItemSelectable}
          isSelected={selectedIndexs.includes(idx)}
          isRemovable={isItemRemovable}
          onSelect={() => onSelectItem(idx)}
          onRemove={() => onRemoveItem(idx)}
        />
      ))}
      {Array(skeletonCount)
        .fill(0)
        .map((_, i) => {
          return <AnimeItemSkeleton key={`skele-${i}`} />
        })}
    </AnimeListWrapper>
  )
}

export type { AnimeListProps }
