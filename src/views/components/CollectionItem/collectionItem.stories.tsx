import type { Meta, StoryObj } from '@storybook/react'
import { CollectionItem } from '.'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { userEvent, within } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'

const meta = {
  title: 'Components/ListItem/CollectionItem',
  component: CollectionItem,
  decorators: [
    story => (
      <MemoryRouter initialEntries={['/']}>
        {story()}
        <Routes>
          <Route path="*"></Route>
        </Routes>
      </MemoryRouter>
    ),
  ],
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const cardTitle = await canvas.getByText(/my collection/i)
    const cardSubtitle = await canvas.getByText(/2 animes/i)

    await expect(cardTitle).toBeInTheDocument()
    await expect(cardSubtitle).toBeInTheDocument()
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const cardTitle = await canvas.getByText(/my collection/i)
    const cardSubtitle = await canvas.getByText(/1 anime/i)

    await expect(cardTitle).toBeInTheDocument()
    await expect(cardSubtitle).toBeInTheDocument()
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const cardTitle = await canvas.getByText(/my collection/i)
    const cardSubtitle = await canvas.getByText(/0 anime/i)

    await expect(cardTitle).toBeInTheDocument()
    await expect(cardSubtitle).toBeInTheDocument()
  },
}

export const HaveCorrectFunctionality: Story = {
  args: {
    collection: {
      id: '1',
      name: 'my collection',
      animes: [],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const card = await canvas.getByRole('link', { name: /my collection/i })

    await expect(card).toHaveAttribute('href', '/collections/1')
  },
}

export const HaveEditButtonClickable: Story = {
  args: {
    collection: {
      id: '1',
      name: 'my collection',
      animes: [],
    },
    onEdit: jest.fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spyEdit = jest.spyOn(args as any, 'onEdit')

    const btnEdit = await canvas.getByRole('button', { name: /edit/i })
    await userEvent.click(btnEdit)

    await expect(spyEdit).toHaveBeenCalledTimes(1)
    spyEdit.mockRestore()
  },
}

export const HaveRemoveButtonClickable: Story = {
  args: {
    collection: {
      id: '1',
      name: 'my collection',
      animes: [],
    },
    onRemove: jest.fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spyRemove = jest.spyOn(args as any, 'onRemove')

    const btnRemove = await canvas.getByRole('button', { name: /remove/i })
    await userEvent.click(btnRemove)

    await expect(spyRemove).toHaveBeenCalledTimes(1)
    spyRemove.mockRestore()
  },
}
