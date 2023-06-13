import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

type ButtonWrapperProps = {
  sizeStyle: SerializedStyles
  colorStyle: SerializedStyles
}

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  border: none;
  background: none;
  border-radius: 10px;
  transition: background-color 0.3s, transform 0.3s;
  transform: scale(1);
  &:active {
    transform: scale(0.9);
  }

  ${props => props.sizeStyle}
  ${props => props.colorStyle}
`

export { ButtonWrapper }
