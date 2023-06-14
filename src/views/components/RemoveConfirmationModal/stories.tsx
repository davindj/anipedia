import type { Meta, StoryObj } from '@storybook/react'

import { RemoveConfirmationModal } from '.'

const meta = {
  title: 'Components/RemoveConfirmationModal',
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
  tags: ['autodocs'],
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
