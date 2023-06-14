import styled from '@emotion/styled'
import { COLOR_TEXT_DARK } from '../../../constants/style'

const SelectedAnimeToastWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  background-color: white;
  padding: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  column-gap: 20px;
  row-gap: 20px;
`

const SelectedAnimeToastTitle = styled.p`
  margin: 0px;
  font-weight: bold;
  color: ${COLOR_TEXT_DARK};
`

const SelectedAnimeToastButtonGroup = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

export {
  SelectedAnimeToastWrapper,
  SelectedAnimeToastTitle,
  SelectedAnimeToastButtonGroup,
}
