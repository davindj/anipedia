import { gql, useQuery } from '@apollo/client'
import { useContext, useEffect, useState } from 'react'
import { Anime } from '../../../entities/anime'
import AnimeCollectionContext from '../../providers/AnimeCollectionsProvider/context'

const GET_LOCATIONS = gql`
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

const useAnimeListPageHook = () => {
  const { openAddAnimesToCollectionModal } = useContext(AnimeCollectionContext)
  const [selectedIdxs, setSelectedIdxs] = useState<number[]>([])
  const { data, fetchMore } = useQuery<{
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
  }>(GET_LOCATIONS, { variables: { page: 1, perPage: 10 } })
  const [isLoading, setIsLoading] = useState(false)

  const throttle = (throttledFunction: () => void) => {
    let isAvailable = true
    return () => {
      if (!isAvailable) return
      isAvailable = false
      throttledFunction()
      setTimeout(() => {
        isAvailable = true
      }, 2000)
    }
  }
  const fetchMoreDataWithThrottle = throttle(() => {
    console.log({ data })
    if (!data) return
    setIsLoading(true)
    fetchMore({
      variables: { page: data.Page.pageInfo.currentPage + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        setIsLoading(false)
        if (!fetchMoreResult) return prev
        return {
          ...fetchMoreResult,
          Page: {
            ...fetchMoreResult.Page,
            media: [...prev.Page.media, ...fetchMoreResult.Page.media],
          },
        }
      },
    })
  })

  const handleScroll = () => {
    preventScrollToBottom()
    if (isLoading) return
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement
    const isValidHeight = scrollTop + clientHeight >= scrollHeight - 100
    if (!isValidHeight) return
    fetchMoreDataWithThrottle()
  }

  function preventScrollToBottom() {
    const scrollThreshold = 20

    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight
    const clientHeight =
      document.documentElement.clientHeight || document.body.clientHeight

    if (scrollTop + clientHeight >= scrollHeight - scrollThreshold) {
      // Scroll to a slightly higher position to prevent reaching the bottom
      window.scrollTo(0, scrollHeight - clientHeight - scrollThreshold)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [data, handleScroll])

  // Handler
  const onSelect = (selectedIdx: number) => {
    if (selectedIdxs.includes(selectedIdx)) {
      setSelectedIdxs(selectedIdxs.filter(idx => idx !== selectedIdx))
      return
    }
    setSelectedIdxs([...selectedIdxs, selectedIdx])
  }
  const onAddToCollection = () => {
    const selectedAnimes = animes.filter((_, idx) => selectedIdxs.includes(idx))
    openAddAnimesToCollectionModal(selectedAnimes)
    setSelectedIdxs([])
  }
  const onClearSelection = () => {
    setSelectedIdxs([])
  }

  // Fields
  const animes: Anime[] = !data
    ? []
    : data.Page.media.map(
        (anime): Anime => ({
          id: anime.id,
          cover: anime.coverImage.large,
          title: anime.title.romaji,
        })
      )
  const skeletonCount = isLoading ? 10 : 0
  const isToastOpen = selectedIdxs.length > 0

  return {
    isToastOpen,
    isLoading,
    animes,
    selectedIdxs,
    skeletonCount,
    onSelect,
    onAddToCollection,
    onClearSelection,
  }
}

export default useAnimeListPageHook
