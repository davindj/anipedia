import styled from '@emotion/styled'
import { COLOR_SECONDARY } from '../../../utils/style'

const AnimeItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`

const AnimeItemImageWrapper = styled.a`
  display: block;
  position: relative;
  width: 100%;
  padding-top: calc(400% / 3); /* 3:4 aspect ratio (height divided by width) */
  border-radius: 5px;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #ccc;
  }
`

const AnimeItemTitle = styled.h3`
  flex: 1;
  text-decoration: none;

  font-size: 1em;
  margin: 0px;

  &:visited,
  &:hover,
  &:active {
    color: ${COLOR_SECONDARY};
  }
`

const AnimeItemCheckbox = styled.input`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;

  /* Double-sized Checkboxes */
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
  padding: 10px;
`

export {
  AnimeItemWrapper,
  AnimeItemImageWrapper,
  AnimeItemTitle,
  AnimeItemCheckbox,
}
