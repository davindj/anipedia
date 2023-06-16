import styled from '@emotion/styled'
import MainLayout from '../../layouts/MainLayout'
import { COLOR_SUCCESS_DARK, COLOR_TEXT_DARK } from '../../../utils/style'

const NotFoundText = styled.p`
  padding-top: 20vh;
  font-size: 6em;
  font-weight: bold;
  text-align: center;
  padding-inline: 20px;
  margin: 0px;
  color: ${COLOR_SUCCESS_DARK};
`
const NotFoundTitleText = styled.h1`
  font-size: 1.5em;
  text-align: center;
  padding-inline: 20px;
  margin: 0px;
  color: ${COLOR_SUCCESS_DARK};
`
const NotFoundDescriptionText = styled.p`
  font-size: 1em;
  text-align: center;
  padding-inline: 20px;
  margin: 0px;
  color: ${COLOR_TEXT_DARK};
`

const NotFoundPage = () => {
  return (
    <MainLayout>
      <NotFoundText>404</NotFoundText>
      <NotFoundTitleText>Page Not Found</NotFoundTitleText>
      <NotFoundDescriptionText>
        You got lost, but it's okay you can always go back to the right path.
      </NotFoundDescriptionText>
    </MainLayout>
  )
}

export default NotFoundPage
