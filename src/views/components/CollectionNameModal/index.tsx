import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  CollectionNameModalBody,
  CollectionNameModalDarkBackground,
  CollectionNameModalTitle,
  InputLabel,
  InputText,
  InputError,
  InputGroup,
} from './style'
import {
  Button,
  ButtonColorEnum,
  ButtonSizeEnum,
  ButtonTypeEnum,
} from '../Button'

type CollectionNameModalProps = {
  /**
   * Is Modal Open
   */
  isOpen: boolean
  /**
   * Modal Title
   */
  title: string
  /**
   * [Optional] Initial Collection Name
   * usually filled for Edit collection name
   */
  initialCollectionName?: string
  /**
   * [Optional] Already used collection name, for Form Validation
   */
  usedNames?: string[]
  /**
   * [Optional] Handler on Remove Button Clicked
   */
  onCreate?: (collectionName: string) => void
  /**
   * [Optional] Handler on Cancel Button Clicked
   */
  onCancel?: () => void
}

/**
 * Modal to Handle Remove Confirmation
 */
export const CollectionNameModal = ({
  isOpen,
  title,
  initialCollectionName = '',
  usedNames = [],
  onCreate = () => {},
  onCancel: onCancelCallback = () => {},
}: CollectionNameModalProps) => {
  const [name, setName] = useState('')
  const refIsInputted = useRef(false)
  useEffect(() => {
    setName(initialCollectionName)
  }, [initialCollectionName])

  if (!isOpen) return <></>

  // Variable
  const finalValue = name.trim()

  const isEmpty = refIsInputted.current && finalValue === ''
  const isAlphanumeric = /^[a-zA-Z0-9\s]*$/.test(finalValue)
  const isNameAlreadyUsed = usedNames.some(
    usedName => usedName.toLowerCase() === finalValue.toLowerCase()
  )
  let errMessage = ''
  if (isEmpty) {
    errMessage = 'this field is required'
  } else if (!isAlphanumeric) {
    errMessage = 'only alphanumeric characters and space are allowed'
  } else if (isNameAlreadyUsed) {
    errMessage = 'collection name already been used'
  }
  const isError = isNameAlreadyUsed || !isAlphanumeric || isEmpty

  // Helper Function
  const resetForm = () => {
    setName('')
    refIsInputted.current = false
  }

  // Handler
  const onChangeCollectionName: React.ChangeEventHandler<
    HTMLInputElement
  > = e => {
    const newValue = e.target.value
    setName(newValue)
    refIsInputted.current = true
  }
  const onSubmit = () => {
    if (isError) return
    onCreate(finalValue)
    resetForm()
  }
  const onCancel = () => {
    onCancelCallback()
    resetForm()
  }

  return createPortal(
    <CollectionNameModalDarkBackground>
      <CollectionNameModalBody>
        <CollectionNameModalTitle>{title}</CollectionNameModalTitle>
        <InputGroup>
          <InputLabel>Collection Name</InputLabel>
          <InputText
            isError={isError}
            placeholder="ex: anime summer 2023"
            name="collection-name"
            value={name}
            onChange={onChangeCollectionName}
          />
          <InputError>{errMessage}&nbsp;</InputError>
        </InputGroup>
        <Button
          text="Save Collection"
          color={ButtonColorEnum.SUCCESS}
          size={ButtonSizeEnum.LARGE}
          type={ButtonTypeEnum.FILL}
          onClick={onSubmit}
        />
        <Button
          text="Cancel"
          color={ButtonColorEnum.SECONDARY}
          size={ButtonSizeEnum.NORMAL}
          type={ButtonTypeEnum.TEXT}
          onClick={onCancel}
        />
      </CollectionNameModalBody>
    </CollectionNameModalDarkBackground>,
    document.body
  )
}

export type { CollectionNameModalProps }
