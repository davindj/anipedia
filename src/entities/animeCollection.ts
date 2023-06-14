import { Anime } from './anime'

interface AnimeCollection {
  id: string
  name: string
  animes: Anime[]
}

export type { AnimeCollection }
