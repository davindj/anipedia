import { createPortal } from 'react-dom'
import {
  RemoveConfirmationModalBody,
  RemoveConfirmationModalDarkBackground,
  RemoveConfirmationModalDescription,
  RemoveConfirmationModalTitle,
} from './style'
import {
  Button,
  ButtonColorEnum,
  ButtonSizeEnum,
  ButtonTypeEnum,
} from '../Button'

type RemoveConfirmationModalProps = {
  /**
   * Is Modal Open
   */
  isOpen: boolean
  /**
   * Modal Title
   */
  title: string
  /**
   * Modal Description
   */
  description: string
  /**
   * [Optional] Handler on Cancel Button Clicked
   */
  onCancel?: () => void
  /**
   * [Optional] Handler on Remove Button Clicked
   */
  onRemove?: () => void
}

/**
 * Modal to Handle Remove Confirmation
 */
export const RemoveConfirmationModal = ({
  isOpen,
  title,
  description,
  onCancel = () => {},
  onRemove = () => {},
}: RemoveConfirmationModalProps) => {
  if (!isOpen) return <></>
  return createPortal(
    <RemoveConfirmationModalDarkBackground>
      <RemoveConfirmationModalBody>
        <RemoveConfirmationModalTitle>{title}</RemoveConfirmationModalTitle>
        <RemoveConfirmationModalDescription>
          {description}
        </RemoveConfirmationModalDescription>
        <Button
          text="Remove"
          color={ButtonColorEnum.DANGER}
          size={ButtonSizeEnum.LARGE}
          type={ButtonTypeEnum.FILL}
          onClick={onRemove}
        />
        <Button
          text="Cancel"
          color={ButtonColorEnum.SECONDARY}
          size={ButtonSizeEnum.LARGE}
          type={ButtonTypeEnum.OUTLINE}
          onClick={onCancel}
        />
      </RemoveConfirmationModalBody>
    </RemoveConfirmationModalDarkBackground>,
    document.body
  )
}

export type { RemoveConfirmationModalProps }
