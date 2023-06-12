import styled from '@emotion/styled'
import { css } from '@emotion/react'

const BackgroundGlowAnimation = css`
  @keyframes background-glow {
    0% {
      background-color: #ccc;
    }
    50% {
      background-color: #ddd;
    }
    100% {
      background-color: #ccc;
    }
  }
`

const AnimeItemSkeletonImageWrapper = styled.div`
  ${BackgroundGlowAnimation}
  width: 100%;
  padding-top: calc(400% / 3); /* 3:4 aspect ratio (height divided by width) */
  border-radius: 5px;
  overflow: hidden;
  animation: background-glow 1.5s ease-in-out infinite;
`

const AnimeItemSkeletonTitleWrapper = styled.h3`
  ${BackgroundGlowAnimation}
  background: #eee;
  color: transparent;
  cursor: progress;
  display: inline-block;
  animation: background-glow 1.5s ease-in-out infinite;
`

export { AnimeItemSkeletonImageWrapper, AnimeItemSkeletonTitleWrapper }
