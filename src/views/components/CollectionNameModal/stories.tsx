import type { Meta, StoryObj } from '@storybook/react'

import { CollectionNameModal } from '.'

const meta = {
  title: 'Components/Modals/CollectionNameModal',
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
  tags: ['autodocs'],
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
