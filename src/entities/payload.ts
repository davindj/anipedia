import { gql } from '@apollo/client'

export const GET_ANIMES = gql`
  query AnimeList($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media {
        id
        title {
          romaji
          english
          native
          userPreferred
        }
        coverImage {
          extraLarge
          large
          medium
          color
        }
        bannerImage
      }
    }
  }
`

export type GetAnimesVariable = {
  page: number
  perPage: number
}

export type GetAnimesPayload = {
  Page: {
    pageInfo: {
      total: number
      currentPage: number
      lastPage: number
      hasNextPage: boolean
      perPage: number
    }
    media: {
      id: number
      title: {
        romaji: string
      }
      coverImage: {
        extraLarge: string
        large: string
        medium: string
      }
      bannerImage: string
    }[]
  }
}

export const GET_ANIME_DETAIL = gql`
  query AnimeDetail($id: Int) {
    Media(id: $id) {
      id
      title {
        romaji
      }
      coverImage {
        extraLarge
        medium
      }
      bannerImage
      description(asHtml: false)
      genres
      meanScore
      episodes
      trailer {
        id
        site
        thumbnail
      }
      studios(isMain: true) {
        nodes {
          name
        }
      }
    }
  }
`

export type GetAnimeDetailVariable = {
  id: number
}

export type GetAnimeDetailPayload = {
  Media: {
    id: number
    title: {
      romaji: string
    }
    coverImage: {
      extraLarge: string
      medium: string
    }
    bannerImage: string
    description: string
    genres: string[]
    meanScore: number
    episodes: number
    trailer?: {
      id: string
      site: string
      thumbnail: string
    }
    studios?: {
      nodes?: {
        name: string
      }[]
    }
  }
}
