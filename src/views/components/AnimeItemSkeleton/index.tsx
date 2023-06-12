import {
  AnimeItemSkeletonImageWrapper,
  AnimeItemSkeletonTitleWrapper,
} from './style'

/**
 * Skeleton for Anime Item Component
 */
export const AnimeItemSkeleton = () => {
  return (
    <div>
      <AnimeItemSkeletonImageWrapper />
      <AnimeItemSkeletonTitleWrapper>anime_title</AnimeItemSkeletonTitleWrapper>
    </div>
  )
}
