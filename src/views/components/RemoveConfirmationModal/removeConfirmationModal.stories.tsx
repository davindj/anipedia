import type { Meta, StoryObj } from '@storybook/react'

import { RemoveConfirmationModal } from '.'
import { userEvent, within } from '@storybook/testing-library'
import { jest, expect } from '@storybook/jest'

const meta = {
  title: 'Components/Modal/RemoveConfirmationModal',
  component: RemoveConfirmationModal,
  decorators: [
    story => (
      <>
        <h3>
          To testing Remove Confirmation Modal, please use control and set
          isOpen to true
        </h3>
        <div>{story()}</div>
      </>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof RemoveConfirmationModal>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    isOpen: false,
    title: 'Remove Item from Collection',
    description: 'Are you sure you want to delete this item?',
  },
}

export const Remove: Story = {
  args: {
    isOpen: true,
    title: 'Remove Item from Collection',
    description: 'Are you sure you want to delete this item?',
    onRemove: jest.fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement.ownerDocument.body)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spy = jest.spyOn(args as any, 'onRemove')

    const cancelBtn = await canvas.findByRole('button', {
      name: /remove/i,
    })
    await userEvent.click(cancelBtn)

    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  },
}

export const Cancel: Story = {
  args: {
    isOpen: true,
    title: 'Remove Item from Collection',
    description: 'Are you sure you want to delete this item?',
    onCancel: jest.fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement.ownerDocument.body)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spy = jest.spyOn(args as any, 'onCancel')

    const cancelBtn = await canvas.findByRole('button', {
      name: /cancel/i,
    })
    await userEvent.click(cancelBtn)

    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  },
}
