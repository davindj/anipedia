import type { Meta, StoryObj } from '@storybook/react'

import { AnimeItem } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/AnimeItem',
  component: AnimeItem,
  decorators: [
    story => (
      <div style={{ maxWidth: '300px', overflow: 'hidden' }}>{story()}</div>
    )
  ],
  tags: ['autodocs'],
  argTypes: {
    isSelectable: {
      defaultValue: 'something false'
    },
    isSelected: {
      defaultValue: 'false'
    }
  }
} satisfies Meta<typeof AnimeItem>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  args: {
    title: 'One Piece',
    image: '/anime-cover/anime-cover-1.jpeg'
  }
}

export const NoImage: Story = {
  args: {
    title: 'One Piece'
  }
}

export const Selectable: Story = {
  args: {
    title: 'One Piece',
    image: '/anime-cover/anime-cover-1.jpeg',
    isSelectable: true,
    isSelected: false,
    onSelect: () => alert('item selected')
  }
}

export const Selected: Story = {
  args: {
    title: 'One Piece',
    image: '/anime-cover/anime-cover-1.jpeg'
  }
}
