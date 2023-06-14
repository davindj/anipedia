import { SerializedStyles, css } from '@emotion/react'
import { ButtonWrapper } from './style'
import {
  COLOR_DANGER,
  COLOR_DANGER_DARK,
  COLOR_DANGER_LIGHT,
  COLOR_SECONDARY,
  COLOR_SECONDARY_DARK,
  COLOR_SECONDARY_LIGHT,
  COLOR_SUCCESS,
  COLOR_SUCCESS_DARK,
  COLOR_SUCCESS_LIGHT,
  COLOR_TEXT_DARK,
  COLOR_TEXT_LIGHT,
} from '../../../constants/style'

enum ButtonSizeEnum {
  NORMAL = 'normal',
  LARGE = 'large',
}

enum ButtonColorEnum {
  SUCCESS = 'success',
  DANGER = 'danger',
  SECONDARY = 'secondary',
}

enum ButtonTypeEnum {
  FILL = 'fill',
  OUTLINE = 'outline',
  TEXT = 'text',
}

type ButtonProps = {
  /**
   * Button Text
   */
  text: string
  /**
   * [Optional] Button's size
   */
  size?: ButtonSizeEnum
  /**
   * [Optional] Button's color
   */
  color?: ButtonColorEnum
  /**
   * [Optional] Button's type
   */
  type?: ButtonTypeEnum
  /**
   * [Optional] Handler on Button Clicked
   */
  onClick?: () => void
}

/**
 * Custom Button Component
 */
export const Button = ({
  text,
  size = ButtonSizeEnum.NORMAL,
  color = ButtonColorEnum.SECONDARY,
  type = ButtonTypeEnum.FILL,
  onClick = () => {},
  ...props
}: ButtonProps) => {
  const sizeStyle = getButtonSizeStyle(size)
  const colorStyle = getButtonColorStyle(color, type)
  return (
    <ButtonWrapper
      sizeStyle={sizeStyle}
      colorStyle={colorStyle}
      onClick={onClick}
      {...props}
    >
      {text}
    </ButtonWrapper>
  )
}

const getButtonSizeStyle = (size: ButtonSizeEnum): SerializedStyles => {
  if (size === ButtonSizeEnum.LARGE) {
    return css`
      padding: 20px 40px;
    `
  }
  return css`
    padding: 10px 20px;
  `
}
const getButtonColorStyle = (
  color: ButtonColorEnum,
  type: ButtonTypeEnum
): SerializedStyles => {
  const { mainColor, lightColor, darkColor } = getHexColor(color)
  if (type === ButtonTypeEnum.FILL) {
    const textHexColor =
      color === ButtonColorEnum.SUCCESS ? COLOR_TEXT_DARK : COLOR_TEXT_LIGHT
    return css`
      background-color: ${mainColor};
      color: ${textHexColor};
      font-weight: bold;
      box-shadow: 0px 5px 30px 0px ${mainColor}dd;

      &:active,
      &:hover {
        background-color: ${darkColor};
        box-shadow: 0px 0px 10px 0px ${mainColor}dd;
      }
    `
  }
  const textButtonStyle = css`
    color: ${darkColor};
    font-weight: bold;

    &:active,
    &:hover {
      background-color: ${lightColor};
    }
  `
  if (type === ButtonTypeEnum.TEXT) {
    return textButtonStyle
  }
  return css`
    ${textButtonStyle}
    border: 1px solid ${darkColor};
  `
}
const getHexColor = (color: ButtonColorEnum) => {
  if (color === ButtonColorEnum.DANGER) {
    return {
      mainColor: COLOR_DANGER,
      lightColor: COLOR_DANGER_LIGHT,
      darkColor: COLOR_DANGER_DARK,
    }
  }
  if (color === ButtonColorEnum.SUCCESS) {
    return {
      mainColor: COLOR_SUCCESS,
      lightColor: COLOR_SUCCESS_LIGHT,
      darkColor: COLOR_SUCCESS_DARK,
    }
  }
  return {
    mainColor: COLOR_SECONDARY,
    lightColor: COLOR_SECONDARY_LIGHT,
    darkColor: COLOR_SECONDARY_DARK,
  }
}

export { ButtonSizeEnum, ButtonColorEnum, ButtonTypeEnum }
