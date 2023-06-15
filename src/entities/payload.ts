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
          extraLargeL
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
