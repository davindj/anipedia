import type { Meta, StoryObj } from '@storybook/react'

import { AnimeList } from '.'
import { mockedAnimesDefault } from './mock'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/AnimeList',
  component: AnimeList,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AnimeList>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  args: {
    animes: mockedAnimesDefault,
  },
}

export const Selectable: Story = {
  args: {
    animes: mockedAnimesDefault,
    isItemSelectable: true,
  },
}

export const Removable: Story = {
  args: {
    animes: mockedAnimesDefault,
    isItemRemovable: true,
  },
}

export const asd: Story = {
  args: {
    animes: mockedAnimesDefault,
    skeletonCount: 10,
  },
}