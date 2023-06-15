import styled from '@emotion/styled'
import {
  COLOR_SUCCESS_DARK,
  COLOR_SUCCESS_LIGHT,
  COLOR_TEXT_DARK,
  Container,
  MEDIA_WIDTH_LG,
  MEDIA_WIDTH_MD,
} from '../../../utils/style'

export const AnimeDetailPageWrapper = styled.div``

export const ImageBanner = styled.img`
  display: block;
  width: 100%;
  height: min(80vw, 80vh);
  object-fit: cover;
  filter: blur(4px);
  @media (min-width: ${MEDIA_WIDTH_LG}) {
    height: min(60vw, 60vh);
  }
`
export const ImageCover = styled.img`
  display: block;
  width: min(80vw, 80vh);
  height: calc(min(80vw, 80vh) * 4 / 3);
  object-fit: cover;
  border-radius: 10px;
  transform: translateY(-60%);
  margin: 0px auto;

  @media (min-width: ${MEDIA_WIDTH_LG}) {
    width: min(60vw, 60vh);
    height: calc(min(60vw, 60vh) * 4 / 3);
  }
`

export const Content = styled(Container)`
  transform: translateY(calc((min(80vw, 80vh) * 4 / 3 / 2 * -1)));
  @media (min-width: ${MEDIA_WIDTH_LG}) {
    transform: translateY(calc((min(60vw, 60vh) * 4 / 3 / 2 * -1)));
  }

  padding-inline: 20px;
`

export const TitlePage = styled.h1`
  font-weight: bold;
  font-size: 2em;
  margin: 0px;
  line-height: 1em;
`

export const StudioText = styled.p`
  margin: 0px;
`

export const EpisodeAndRatingText = styled.p`
  margin-block: 10px;
`

export const GenreGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
  margin-bottom: 20px;
`

export const GenreText = styled.p`
  padding: 2px 10px;
  font-size: 0.8em;
  margin: 0px;
  border-radius: 100px;
  border: 2px solid ${COLOR_SUCCESS_DARK};
  overflow: hidden;
  width: fit-content;
  background-color: ${COLOR_SUCCESS_LIGHT};

  @media (min-width: ${MEDIA_WIDTH_MD}) {
    padding: 5px 20px;
  }
`

export const TrailerContainer = styled.div`
  border-radius: 20px;
  margin: 0px auto;
  position: relative;
  overflow: hidden;

  width: 90vw;
  height: 60vw;

  @media (min-width: ${MEDIA_WIDTH_LG}) {
    width: 60vw;
    height: 40vw;
  }
`

export const Trailer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`

export const InterestedText = styled.p`
  margin: 0px;
  margin-block: 40px 20px;
  font-size: 1em;
  font-weight: bold;
  color: ${COLOR_TEXT_DARK};
`

export const CollectionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
`
