import {
  Button,
  ButtonColorEnum,
  ButtonSizeEnum,
  ButtonTypeEnum,
} from '../Button'
import {
  SelectedAnimeToastTitle,
  SelectedAnimeToastWrapper,
  SelectedAnimeToastButtonGroup,
} from './style'

interface SelectedAnimeToastProps {
  /**
   * Is Toast Ope
   */
  isOpen: boolean
  /**
   * Selected Animes Count
   */
  selectedAnimesCount: number
  /**
   * [Optional] Handler on Add to Collection
   */
  onAddToCollection?: () => void
  /**
   * [Optional] Handler on Clear Selected Animes
   */
  onClearSelectedAnimes?: () => void
}

/**
 * Toast for Action with Selected Animes.
 *
 * > note: to open Toast set `isOpen` to `true`
 */
export const SelectedAnimeToast = ({
  isOpen,
  selectedAnimesCount,
  onAddToCollection = () => {},
  onClearSelectedAnimes = () => {},
  ...props
}: SelectedAnimeToastProps) => {
  let titleText = 'No Anime Selected'
  if (selectedAnimesCount == 1) {
    titleText = '1 Anime Selected'
  } else if (selectedAnimesCount > 1) {
    titleText = `${selectedAnimesCount} Animes Selected`
  }
  if (!isOpen) return <></>
  return (
    <SelectedAnimeToastWrapper {...props}>
      <SelectedAnimeToastTitle>{titleText}</SelectedAnimeToastTitle>
      {selectedAnimesCount > 0 && (
        <SelectedAnimeToastButtonGroup>
          <Button
            text="Add to Collection"
            type={ButtonTypeEnum.FILL}
            color={ButtonColorEnum.SUCCESS}
            size={ButtonSizeEnum.NORMAL}
            onClick={onAddToCollection}
          />
          <Button
            text="Clear Selection"
            type={ButtonTypeEnum.TEXT}
            color={ButtonColorEnum.SECONDARY}
            size={ButtonSizeEnum.NORMAL}
            onClick={onClearSelectedAnimes}
          />
        </SelectedAnimeToastButtonGroup>
      )}
    </SelectedAnimeToastWrapper>
  )
}
