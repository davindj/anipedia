import type { Meta, StoryObj } from '@storybook/react'

import { SelectedAnimeToast } from '.'

const meta = {
  title: 'Components/SelectedAnimeToast',
  component: SelectedAnimeToast,
  decorators: [
    story => (
      <div style={{ maxWidth: '300px', overflow: 'hidden' }}>{story()}</div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof SelectedAnimeToast>

export default meta
type Story = StoryObj<typeof meta>

export const NoSelectedAnime: Story = {
  args: {
    isOpen: false,
    selectedAnimesCount: 0,
  },
}

export const OneSelectedAnime: Story = {
  args: {
    isOpen: false,
    selectedAnimesCount: 1,
  },
}

export const MoreThanOneSelectedAnime: Story = {
  args: {
    isOpen: false,
    selectedAnimesCount: 4,
  },
}
