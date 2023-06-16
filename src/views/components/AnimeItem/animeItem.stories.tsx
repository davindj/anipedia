import type { Meta, StoryObj } from '@storybook/react'

import { mockAnimeDefault, mockAnimeWithNoCover } from './mock'
import { AnimeItem } from '.'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

const meta = {
  title: 'Components/ListItem/AnimeItem',
  component: AnimeItem,
  decorators: [
    story => (
      <MemoryRouter initialEntries={['/']}>
        <div style={{ maxWidth: '300px', overflow: 'hidden' }}>{story()}</div>
        <Routes>
          <Route path="*" />
        </Routes>
      </MemoryRouter>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    isSelected: {
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof AnimeItem>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    anime: mockAnimeDefault,
  },
}

export const NoImage: Story = {
  args: {
    anime: mockAnimeWithNoCover,
  },
}

export const Selectable: Story = {
  args: {
    anime: mockAnimeDefault,
    isSelected: false,
    isSelectable: true,
    onSelect: () => alert('handle select'),
  },
}

export const Selected: Story = {
  args: {
    anime: mockAnimeDefault,
    isSelected: true,
    isSelectable: true,
  },
}

export const Removable: Story = {
  args: {
    anime: mockAnimeDefault,
    isRemovable: true,
    onRemove: () => alert('handle remove'),
  },
}

export const Clickable: Story = {
  args: {
    anime: mockAnimeDefault,
    onClick: () => alert('handle click'),
  },
}
