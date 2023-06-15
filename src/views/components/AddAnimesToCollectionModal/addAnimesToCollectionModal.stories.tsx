import type { Meta, StoryObj } from '@storybook/react'

import { AddAnimesToCollectionModal } from '.'

const meta = {
  title: 'Components/Modals/AddAnimesToCollectionModal',
  component: AddAnimesToCollectionModal,
  decorators: [
    story => (
      <>
        <h3>
          To testing Add Anime to Collection Modal, please use control and set
          isOpen to true
        </h3>
        <div>{story()}</div>
      </>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AddAnimesToCollectionModal>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    isOpen: false,
    collections: [],
  },
}

export const Filled: Story = {
  args: {
    isOpen: false,
    collections: [
      {
        id: '1',
        name: 'collection 1',
        animes: [
          {
            id: 1,
            title: 'one piece',
            cover: '/anime-cover/anime-cover-1.jpeg',
          },
        ],
      },
      {
        id: '2',
        name: 'collection 2',
        animes: [
          {
            id: 2,
            title: 'one piece',
            cover: '/anime-cover/anime-cover-2.jpeg',
          },
          {
            id: 3,
            title: 'one piece',
            cover: '/anime-cover/anime-cover-3.jpeg',
          },
        ],
      },
      {
        id: '3',
        name: 'collection 3',
        animes: [],
      },
    ],
  },
}
