import styled from '@emotion/styled'

const RemoveConfirmationModalDarkBackground = styled.div`
  height: 100dvh;
  width: 100vw;
  background: #000c;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`

const RemoveConfirmationModalBody = styled.div`
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

const RemoveConfirmationModalTitle = styled.p`
  margin: 0px;
  font-size: 1.2em;
  font-weight: bold;
`

const RemoveConfirmationModalDescription = styled.p`
  margin-block: 0px 20px;
`

export {
  RemoveConfirmationModalDarkBackground,
  RemoveConfirmationModalBody,
  RemoveConfirmationModalTitle,
  RemoveConfirmationModalDescription,
}
