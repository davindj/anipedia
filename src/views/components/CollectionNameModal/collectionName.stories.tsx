import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { jest, expect } from '@storybook/jest'
import { CollectionNameModal } from '.'

const meta = {
  title: 'Components/Modal/CollectionNameModal',
  component: CollectionNameModal,
  decorators: [
    story => (
      <>
        <h3>
          To testing Collection Name Modal, please use control and set isOpen to
          true
        </h3>
        <div>{story()}</div>
      </>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof CollectionNameModal>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    isOpen: false,
    title: 'Add New Collection',
    usedNames: ['my collection'],
  },
}

export const CanSubmit: Story = {
  args: {
    isOpen: true,
    title: 'Add New Collection',
    usedNames: ['my collection'],
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement.ownerDocument.body)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spy = jest.spyOn(args as any, 'onCreate')

    const inputElement = await canvas.getByPlaceholderText(
      /ex: anime summer 2023/i
    )
    await userEvent.click(inputElement)
    await waitFor(() => {}, { timeout: 1000 })
    await userEvent.type(inputElement, 'hello world', { delay: 100 })
    const submit = await canvas.getByRole('button', {
      name: /save collection/i,
    })
    await userEvent.click(submit)

    expect(spy).toHaveBeenCalled()
  },
}

export const CantSubmitValidationAlphaNumeric: Story = {
  args: {
    isOpen: true,
    title: 'Add New Collection',
    usedNames: ['my collection'],
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement.ownerDocument.body)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spy = jest.spyOn(args as any, 'onCreate')

    const inputElement = await canvas.getByPlaceholderText(
      /ex: anime summer 2023/i
    )
    await userEvent.click(inputElement)
    await waitFor(() => {}, { timeout: 1000 })
    await userEvent.type(inputElement, 'hello@#@# world', { delay: 100 })
    const submit = await canvas.getByRole('button', {
      name: /save collection/i,
    })
    await userEvent.click(submit)

    expect(spy).not.toHaveBeenCalled()
  },
}

export const CantSubmitValidationCollectionNameExisted: Story = {
  args: {
    isOpen: true,
    title: 'Add New Collection',
    usedNames: ['my collection'],
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement.ownerDocument.body)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spy = jest.spyOn(args as any, 'onCreate')

    const inputElement = await canvas.getByPlaceholderText(
      /ex: anime summer 2023/i
    )
    await userEvent.click(inputElement)
    await waitFor(() => {}, { timeout: 1000 })
    await userEvent.type(inputElement, 'my collection', { delay: 100 })
    const submit = await canvas.getByRole('button', {
      name: /save collection/i,
    })
    await userEvent.click(submit)

    expect(spy).not.toHaveBeenCalled()
  },
}

export const CantSubmitValidationRequired: Story = {
  args: {
    isOpen: true,
    title: 'Add New Collection',
    usedNames: ['my collection'],
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement.ownerDocument.body)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spy = jest.spyOn(args as any, 'onCreate')

    const inputElement = await canvas.getByPlaceholderText(
      /ex: anime summer 2023/i
    )
    await userEvent.click(inputElement)
    await waitFor(() => {}, { timeout: 1000 })
    await userEvent.type(inputElement, 'my collection', { delay: 100 })
    await waitFor(() => {}, { timeout: 100 })
    await userEvent.clear(inputElement)
    const submit = await canvas.getByRole('button', {
      name: /save collection/i,
    })
    await userEvent.click(submit)
    const errorLabel = await canvas.getByText(/this field is required/i)

    expect(spy).not.toHaveBeenCalled()
    expect(errorLabel).toBeInTheDocument()
  },
}

export const Cancel: Story = {
  args: {
    isOpen: true,
    title: 'Add New Collection',
    usedNames: ['my collection'],
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement.ownerDocument.body)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spy = jest.spyOn(args as any, 'onCancel')

    const cancelBtn = await canvas.getByRole('button', {
      name: /cancel/i,
    })
    await userEvent.click(cancelBtn)

    expect(spy).toHaveBeenCalled()
  },
}
