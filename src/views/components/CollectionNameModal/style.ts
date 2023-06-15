import styled from '@emotion/styled'
import { COLOR_DANGER } from '../../../constants/style'

const CollectionNameModalDarkBackground = styled.div`
  height: 100dvh;
  width: 100vw;
  background: #000c;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`

const CollectionNameModalBody = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  border-radius: 10px 10px 0px 0px;
  background-color: white;
  box-shadow: 0px 5px 20px 5px #000;
  animation: slidein 0.3s;

  @keyframes slidein {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0px);
    }
  }
`

const CollectionNameModalTitle = styled.p`
  margin: 0px;
  font-size: 1.2em;
  font-weight: bold;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`
const InputLabel = styled.label``
const InputText = styled.input<{ isError: boolean }>`
  border-radius: 5px;
  padding: 10px 10px;
  border: 1px solid #eee;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  ${props =>
    props.isError
      ? `
    border-color: ${COLOR_DANGER};
    outline-color: ${COLOR_DANGER};
  `
      : ''}
`
const InputError = styled.p`
  color: ${COLOR_DANGER};
  font-size: 0.8em;
  margin: 0px;
`

export {
  CollectionNameModalDarkBackground,
  CollectionNameModalBody,
  CollectionNameModalTitle,
  InputGroup,
  InputLabel,
  InputText,
  InputError,
}
