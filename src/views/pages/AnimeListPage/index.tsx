import { useQuery, gql } from '@apollo/client'
import { MutableRefObject } from 'react'
import { useEffect, useRef, useState } from 'react'

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

const AnimeListPage = () => {
  const [page, setPage] = useState(1)
  const { loading, error, data, networkStatus, fetchMore } = useQuery<{
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
  }>(GET_LOCATIONS, { variables: { page, perPage: 10 } })
  const [isLoading, setIsLoading] = useState(false)
  const loadingRef: MutableRefObject<boolean> = useRef<boolean>(false)

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement
    console.log({ scrollTop, clientHeight, scrollHeight })

    if (
      scrollTop + clientHeight >= scrollHeight - 20 &&
      !loadingRef.current &&
      data
    ) {
      setIsLoading(true)
      loadingRef.current = true
      fetchMore({
        variables: { page: data.Page.pageInfo.currentPage + 1 },
        updateQuery: (prev, { fetchMoreResult }) => {
          setIsLoading(false)
          loadingRef.current = false
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
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [data])

  if (loading && !data) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>
  if (!data) return <p>Data Not Loaded</p>

  return (
    <div style={{ minHeight: '100%' }}>
      <div>
        <h3>Page Info</h3>

        <p>pageInfototal: {data.Page.pageInfo.total}</p>
        <p>pageInfocurrentPage: {data.Page.pageInfo.currentPage}</p>
        <p>pageInfolastPage: {data.Page.pageInfo.lastPage}</p>
        <p>
          pageInfohasNextPage:{' '}
          {data.Page.pageInfo.hasNextPage ? 'true' : 'false'}
        </p>
        <p>pageInfoperPage: {data.Page.pageInfo.perPage}</p>
      </div>
      <div
        style={{
          display: 'flex',
          // flexDirection: 'column',
          columnGap: '10px',
          flexWrap: 'wrap',
        }}
      >
        {data.Page.media.map(anime => (
          <div key={anime.id} style={{ height: '100px' }}>
            {anime.id} - {anime.title.romaji}
          </div>
        ))}
      </div>
      {networkStatus === 6 && <span>mkay</span>}
      {isLoading && (
        <div style={{ height: '200px', background: 'cyan' }}>
          Loading Data...
        </div>
      )}
    </div>
  )
}

export default AnimeListPage
