// ===========
// CONSTANTS
// ===========

import styled from '@emotion/styled'

// MEDIA SIZE
export const MEDIA_WIDTH_SM = '576px'
export const MEDIA_WIDTH_MD = '768px'
export const MEDIA_WIDTH_LG = '992px'
export const MEDIA_WIDTH_XL = '1200px'
// COLOR
export const COLOR_BACKGROUND = '#F6FFF6'
export const COLOR_DANGER = '#FF5050'
export const COLOR_DANGER_LIGHT = '#FFDDDD'
export const COLOR_DANGER_DARK = '#DD2F2F'
export const COLOR_SUCCESS = '#21F662'
export const COLOR_SUCCESS_LIGHT = '#F0FFF0'
export const COLOR_SUCCESS_DARK = '#17B547'
export const COLOR_INFO = '#2176F6'
export const COLOR_INFO_LIGHT = '#D0E8FF'
export const COLOR_INFO_DARK = '#1739B5'
export const COLOR_SECONDARY = '#999999'
export const COLOR_SECONDARY_LIGHT = '#eeeeee'
export const COLOR_SECONDARY_DARK = '#646464'
export const COLOR_TEXT_LIGHT = '#ffffff'
export const COLOR_TEXT_DARK = '#000000'
// ==================
// END OF CONSTANTS
// ==================

// ============
// COMPONENTS
// ============
export const FullContainer = styled.div`
  width: 100%;
  padding-top: 1px;
  margin-top: -1px;
  position: relative;
`
export const Container = styled.div`
  width: 100%;
  padding-top: 1px;
  margin-top: -1px;
  position: relative;

  margin: 0px auto;

  @media (min-width: ${MEDIA_WIDTH_SM}) {
    width: 560px;
  }
  @media (min-width: ${MEDIA_WIDTH_MD}) {
    width: 720px;
  }
  @media (min-width: ${MEDIA_WIDTH_LG}) {
    width: 960px;
  }
  @media (min-width: ${MEDIA_WIDTH_XL}) {
    width: 1180px;
  }
`
export const ContainerPadding = styled(Container)`
  padding-inline: 20px;
`
