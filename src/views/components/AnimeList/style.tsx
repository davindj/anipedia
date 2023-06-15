// import { MEDIA_WIDTH_LG, MEDIA_WIDTH_MD } from '@constants/style'
import styled from '@emotion/styled'
import { MEDIA_WIDTH_LG, MEDIA_WIDTH_MD } from '../../../utils/style'

const AnimeListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  column-gap: 10px;
  row-gap: 40px;

  /* Medium Size */
  @media (min-width: ${MEDIA_WIDTH_MD}) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  /* Large Size */
  @media (min-width: ${MEDIA_WIDTH_LG}) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
`
export { AnimeListWrapper }
