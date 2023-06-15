import styled from '@emotion/styled'
import { COLOR_BACKGROUND } from '../../../utils/style'

export const PageWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: ${COLOR_BACKGROUND};
  overflow: hidden;
`

export const PageMainSection = styled.main`
  overflow-y: scroll;
`
