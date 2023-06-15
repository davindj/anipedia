import type { Meta, StoryObj } from '@storybook/react'

import { AnimeItemSkeleton } from '.'

const meta = {
  title: 'Components/AnimeItemSkeleton',
  component: AnimeItemSkeleton,
  decorators: [
    story => (
      <div style={{ maxWidth: '300px', overflow: 'hidden' }}>{story()}</div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof AnimeItemSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}
