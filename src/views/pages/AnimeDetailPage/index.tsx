import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import AnimeCollectionContext from '../../../providers/AnimeCollectionsProvider/context'
import {
  AnimeDetailPageWrapper,
  Content,
  CollectionsWrapper,
  InterestedText,
  TrailerContainer,
  Trailer,
  GenreGroup,
  GenreText,
  EpisodeAndRatingText,
  StudioText,
  TitlePage,
  ImageCover,
  ImageBanner,
} from './style'
import {
  Button,
  ButtonColorEnum,
  ButtonSizeEnum,
  ButtonTypeEnum,
} from '../../components/Button'
import { Container } from '../../../utils/style'
import { useQuery } from '@apollo/client'
import {
  GET_ANIME_DETAIL,
  GetAnimeDetailPayload,
  GetAnimeDetailVariable,
} from '../../../entities/payload'
import { Anime } from '../../../entities/anime'
import { NavLink } from 'react-router-dom'
import { getRouteWithParam } from '../../../routes'
import ROUTE_PATH from '../../../routes/path'

const AnimeDetailPage = () => {
  const { id = '' } = useParams()
  const {
    isLoading: isLoadingAnimeList,
    animeCollections,
    openAddAnimesToCollectionModal,
  } = useContext(AnimeCollectionContext)
  const variables: GetAnimeDetailVariable = { id: parseInt(id ?? '0') }
  const { loading, error, data } = useQuery<GetAnimeDetailPayload>(
    GET_ANIME_DETAIL,
    { variables }
  )

  // handler
  const onAddToCollection = () => {
    if (!data) return
    const {
      id,
      title: { romaji: title },
      coverImage: { medium: cover },
    } = data.Media
    const anime: Anime = { id, title, cover }
    openAddAnimesToCollectionModal([anime])
  }

  const isLoading = loading || isLoadingAnimeList
  const isError = !isLoading && (data === undefined || error !== undefined)
  const isRenderable = !isLoading && !isError && data !== undefined

  // Text
  const loadingText = 'Loading Data...'
  const errorText = "Data couldn't be loaded, please try again later."

  const collections = animeCollections.filter(collection =>
    collection.animes.find(anime => `${anime.id}` === id)
  )

  return (
    <MainLayout>
      <AnimeDetailPageWrapper>
        {isLoading && <Container>{loadingText}</Container>}
        {isError && <Container>{errorText}</Container>}
        {isRenderable && (
          <>
            <ImageBanner src={data.Media.bannerImage} />
            <ImageCover src={data.Media.coverImage.extraLarge} />
            <Content>
              <TitlePage>{data.Media.title.romaji}</TitlePage>
              <StudioText>
                by{' '}
                {data.Media.studios?.nodes && data.Media.studios.nodes[0].name}
              </StudioText>
              <EpisodeAndRatingText>
                {data.Media.episodes} Episodes . ★{' '}
                {(data.Media.meanScore / 20).toFixed(1)}
              </EpisodeAndRatingText>
              <GenreGroup>
                {data.Media.genres.map((genre, idx) => {
                  return <GenreText key={idx}>{genre}</GenreText>
                })}
              </GenreGroup>
              {data.Media.trailer && (
                <TrailerContainer>
                  <Trailer
                    src={`https://www.youtube.com/embed/${data.Media.trailer.id}`}
                  />
                </TrailerContainer>
              )}
              {data.Media.description.split('<br>').map((desc, idx) => {
                return <p key={idx}>{desc}</p>
              })}
              <InterestedText>Interested with this anime?</InterestedText>
              <Button
                text={'Add to Collection'}
                size={ButtonSizeEnum.NORMAL}
                color={ButtonColorEnum.SUCCESS}
                type={ButtonTypeEnum.FILL}
                onClick={onAddToCollection}
              />
              {collections.length > 0 && (
                <>
                  <p>This anime is already added to these collections:</p>
                  <CollectionsWrapper>
                    {collections.map((collection, idx) => {
                      return (
                        <NavLink
                          key={idx}
                          to={getRouteWithParam(
                            ROUTE_PATH.COLLECTION_DETAIL_PAGE,
                            collection.id
                          )}
                        >
                          <Button
                            text={collection.name}
                            size={ButtonSizeEnum.NORMAL}
                            color={ButtonColorEnum.INFO}
                            type={ButtonTypeEnum.TONE}
                          />
                        </NavLink>
                      )
                    })}
                  </CollectionsWrapper>
                </>
              )}
            </Content>
          </>
        )}
      </AnimeDetailPageWrapper>
    </MainLayout>
  )
}

export default AnimeDetailPage
