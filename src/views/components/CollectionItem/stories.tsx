import type { Meta, StoryObj } from '@storybook/react'

import { CollectionItem } from '.'

const meta = {
  title: 'Components/CollectionItem',
  component: CollectionItem,
  decorators: [story => <div>{story()}</div>],
  tags: ['autodocs'],
} satisfies Meta<typeof CollectionItem>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    collection: {
      id: '1',
      name: 'my collection',
      animes: [
        { id: 1, title: 'one piece', cover: 'anime-cover/anime-cover-1.jpeg' },
        { id: 2, title: 'one piece', cover: 'anime-cover/anime-cover-2.jpeg' },
      ],
    },
  },
}

export const OneItem: Story = {
  args: {
    collection: {
      id: '1',
      name: 'my collection',
      animes: [
        { id: 1, title: 'one piece', cover: 'anime-cover/anime-cover-1.jpeg' },
      ],
    },
  },
}

export const Empty: Story = {
  args: {
    collection: {
      id: '1',
      name: 'my collection',
      animes: [],
    },
  },
}
