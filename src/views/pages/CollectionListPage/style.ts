import styled from '@emotion/styled'
import { MEDIA_WIDTH_LG, MEDIA_WIDTH_MD } from '../../../utils/style'

const CollectionListPageWrapper = styled.div`
  padding: 20px;
`

const TitlePage = styled.h1`
  font-weight: bold;
  font-size: 2em;
  margin: 0px;
  margin-bottom: 20px;
  line-height: 1em;
`

const CollectionItemsWrapper = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  column-gap: 20px;

  @media (min-width: ${MEDIA_WIDTH_MD}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${MEDIA_WIDTH_LG}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export { CollectionListPageWrapper, TitlePage, CollectionItemsWrapper }
