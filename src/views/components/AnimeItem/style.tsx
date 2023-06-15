import styled from '@emotion/styled'
import { COLOR_TEXT_DARK, MEDIA_WIDTH_MD } from '../../../utils/style'
import { NavLink } from 'react-router-dom'

const AnimeItemWrapper = styled(NavLink)`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  text-decoration: none;

  // &:hover {
  //   filter: brightness(0.5);
  // }
`

const AnimeItemImageWrapper = styled.div`
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

  font-size: 0.8em;
  margin: 0px;

  color: ${COLOR_TEXT_DARK};
  line-height: 1em;

  text-overflow: ellipsis;
`

const AnimeItemCheckbox = styled.input`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;

  /* Double-sized Checkboxes */
  -ms-transform: scale(1.5); /* IE */
  -moz-transform: scale(1.5); /* FF */
  -webkit-transform: scale(1.5); /* Safari and Chrome */
  -o-transform: scale(1.5); /* Opera */
  transform: scale(1.5);
  padding: 10px;

  @media (min-width: ${MEDIA_WIDTH_MD}) {
    -ms-transform: scale(2); /* IE */
    -moz-transform: scale(2); /* FF */
    -webkit-transform: scale(2); /* Safari and Chrome */
    -o-transform: scale(2); /* Opera */
    transform: scale(2);
  }
`

export {
  AnimeItemWrapper,
  AnimeItemImageWrapper,
  AnimeItemTitle,
  AnimeItemCheckbox,
}
