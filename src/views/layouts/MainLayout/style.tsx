import styled from '@emotion/styled'
import { COLOR_BACKGROUND, COLOR_SUCCESS } from '../../../utils/style'

export const PageWrapper = styled.div`
  min-height: 100%;
  background-color: ${COLOR_BACKGROUND};
`

export const PageMainSection = styled.main`
  height: 100%;
  overflow-y: scroll;
`

export const PageHeader = styled.header`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: white;
  box-shadow: 0px 3px 3px 2px #0003;
`

export const PageFooter = styled.footer`
  width: 100%;
  position: fixed;
  display: block;
  left: 0;
  bottom: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0px 3px 3px 2px #0003;
`
