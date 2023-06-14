import styled from '@emotion/styled'
import {
  COLOR_SECONDARY_LIGHT,
  COLOR_SUCCESS_DARK,
  COLOR_SUCCESS_LIGHT,
  COLOR_TEXT_DARK,
} from '../../../constants/style'
import { css } from '@emotion/react'

const DarkBackground = styled.div`
  height: 100dvh;
  width: 100vw;
  background: #000c;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`

const Body = styled.div`
  background-color: white;
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
  max-height: min(500px, 80vh);
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px 5px 20px 5px #000;
  animation: slidein 0.3s;
  display: grid;
  grid-template-rows: auto 1fr auto;

  @keyframes slidein {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0px);
    }
  }
`

// TOP CONTENT
const ContentTop = styled.div`
  padding: 20px 20px 10px;
`
const Title = styled.p`
  margin: 0px;
  font-size: 1.2em;
  font-weight: bold;
`
const Description = styled.p`
  margin: 0px;
`

// MIDDLE CONTENT
const ContentMiddle = styled.div`
  border-top: 1px solid ${COLOR_SECONDARY_LIGHT};
  overflow-y: scroll;
`
const ItemCard = styled.button`
  display: block;
  padding: 10px 20px;
  background: none;
  border: none;
  width: 100%;
  display: flex;
  column-gap: 10px;
  align-items: center;

  &:hover,
  &:active {
    background: #ccc6;
  }
`
const ItemCardCreate = styled.button`
  display: block;
  padding: 10px 20px;
  background: none;
  border: none;
  width: 100%;
  display: flex;
  column-gap: 10px;
  align-items: center;
  color: ${COLOR_SUCCESS_DARK};
  font-weight: bold;

  &:hover,
  &:active {
    background: ${COLOR_SUCCESS_LIGHT};
  }
`
const ItemCardFirstChildCSS = css`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 5px;
`
const ItemCardImage = styled.img`
  ${ItemCardFirstChildCSS}
  object-fit: cover;
`
const ItemCardNoImage = styled.div`
  ${ItemCardFirstChildCSS}
  border: 1px dashed black;
`
const ItemCardBody = styled.div`
  flex: 1;
  text-align: left;
  p {
    margin: 0px;
    &:nth-child(2) {
      font-size: 1em;
    }
  }
`

// BOTTOM CONTENT
const ContentBottom = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${COLOR_SECONDARY_LIGHT};
`
const ButtonCancel = styled.button`
  display: block;
  background: none;
  border: none;
  padding: 20px 40px;
  color: ${COLOR_TEXT_DARK};

  &:hover,
  &:active {
    background: #ccc6;
  }
}`

export {
  DarkBackground,
  Body,
  ContentTop,
  Title,
  Description,
  ContentMiddle,
  ItemCard,
  ItemCardCreate,
  ItemCardImage,
  ItemCardNoImage,
  ItemCardBody,
  ContentBottom,
  ButtonCancel,
}
