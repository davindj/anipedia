import { AnimeListWrapper } from './style'
import { AnimeItem } from '../AnimeItem'
import { Anime } from '../../../entities/anime'

interface AnimeListProps {
  animes: Anime[]
}

/**
 * UI Component usually used in Collection
 */
export const AnimeList = ({ animes = [], ...props }: AnimeListProps) => {
  return (
    <AnimeListWrapper {...props}>
      {animes.map(anime => (
        <AnimeItem key={anime.id} title={anime.title} image={anime.cover} />
      ))}
    </AnimeListWrapper>
  )
}
