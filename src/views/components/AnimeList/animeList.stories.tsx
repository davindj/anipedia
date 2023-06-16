import type { Meta, StoryObj } from '@storybook/react'

import { AnimeList } from '.'
import { mockedAnimesDefault } from './mock'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { userEvent, within } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/ListItem/AnimeList',
  component: AnimeList,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    story => (
      <MemoryRouter initialEntries={['/']}>
        {story()}
        <Routes>
          <Route path="*" />
        </Routes>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof AnimeList>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  args: {
    animes: mockedAnimesDefault,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getAllByRole('link').length).toBe(10)
  },
}

export const Selectable: Story = {
  args: {
    animes: mockedAnimesDefault,
    selectedIndexs: [1, 2, 3],
    isItemSelectable: true,
    onSelectItem: jest.fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spySelectItem = jest.spyOn(args as any, 'onSelectItem')

    const checkboxes = await canvas.getAllByRole('checkbox')
    const checkedCheckboxes = await canvas.getAllByRole('checkbox', {
      checked: true,
    })
    const firstCheckbox = checkboxes[0]
    await userEvent.click(firstCheckbox)

    await expect(checkboxes.length).toBe(10)
    await expect(checkedCheckboxes.length).toBe(3)
    await expect(spySelectItem).toHaveBeenCalled()
    await spySelectItem.mockRestore()
  },
}

export const Removable: Story = {
  args: {
    animes: mockedAnimesDefault,
    isItemRemovable: true,
    onRemoveItem: jest.fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spyRemoveItem = jest.spyOn(args as any, 'onRemoveItem')

    const removeButtons = await canvas.getAllByRole('button')
    const firstRemoveButton = removeButtons[0]
    await userEvent.click(firstRemoveButton)

    await expect(removeButtons.length).toBe(10)
    await expect(spyRemoveItem).toHaveBeenCalled()
    await spyRemoveItem.mockRestore()
  },
}

export const SkeletonShowns: Story = {
  args: {
    animes: mockedAnimesDefault,
    skeletonCount: 10,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getAllByRole('generic').length).toBe(31)
  },
}
