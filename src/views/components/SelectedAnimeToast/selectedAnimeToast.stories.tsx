import type { Meta, StoryObj } from '@storybook/react'

import { SelectedAnimeToast } from '.'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta = {
  title: 'Components/Modal/SelectedAnimeToast',
  component: SelectedAnimeToast,
  decorators: [
    story => (
      <div style={{ maxWidth: '300px', overflow: 'hidden' }}>{story()}</div>
    ),
  ],
} satisfies Meta<typeof SelectedAnimeToast>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    isOpen: false,
    selectedAnimesCount: 0,
  },
}

export const NoSelectedAnime: Story = {
  args: {
    isOpen: true,
    selectedAnimesCount: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body)

    await expect(
      await canvas.queryByText(/no anime selected/i)
    ).toBeInTheDocument()
  },
}

export const OneSelectedAnime: Story = {
  args: {
    isOpen: true,
    selectedAnimesCount: 1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body)

    await expect(
      await canvas.queryByText(/1 anime selected/i)
    ).toBeInTheDocument()
  },
}

export const MoreThanOneSelectedAnime: Story = {
  args: {
    isOpen: true,
    selectedAnimesCount: 4,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body)

    await expect(
      await canvas.queryByText(/4 animes selected/i)
    ).toBeInTheDocument()
  },
}
