import { Anime } from '../../../entities/anime'

const mockAnimeDefault: Anime = {
  id: 1,
  title: 'One Piece',
  cover: '/anime-cover/anime-cover-1.jpeg',
}

const mockAnimeWithNoCover: Anime = {
  id: 1,
  title: 'One Piece',
  cover: '',
}

export { mockAnimeDefault, mockAnimeWithNoCover }
