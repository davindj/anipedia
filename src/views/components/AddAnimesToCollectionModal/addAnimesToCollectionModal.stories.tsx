import type { Meta, StoryObj } from '@storybook/react'

import { AddAnimesToCollectionModal } from '.'
import { userEvent, within } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'
import { mockAnimeCollections } from './mock'

const meta = {
  title: 'Components/Modal/AddAnimesToCollectionModal',
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
    isOpen: true,
    collections: mockAnimeCollections,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body)

    const collections = await canvas.getAllByRole('button', {
      name: /collection-anime/i,
      exact: false,
    })
    const addButton = await canvas.getByRole('button', {
      name: /add new collection/i,
    })
    const cancelButton = await canvas.getByRole('button', { name: /cancel/i })

    await expect(collections.length).toBe(3)
    await expect(addButton).toBeInTheDocument()
    await expect(cancelButton).toBeInTheDocument()
  },
}

export const CollectionItemClicked: Story = {
  args: {
    isOpen: true,
    collections: mockAnimeCollections,
    onClickCollection: jest.fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement.ownerDocument.body)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spy = jest.spyOn(args as any, 'onClickCollection')

    const collections = await canvas.getAllByRole('button', {
      name: /collection-anime/i,
      exact: false,
    })
    const firstCollection = collections[0]
    await userEvent.click(firstCollection)

    await expect(spy).toHaveBeenCalled()
    await spy.mockRestore()
  },
}

export const AddNewCollectionClicked: Story = {
  args: {
    isOpen: true,
    collections: mockAnimeCollections,
    onAddNewCollection: jest.fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement.ownerDocument.body)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spy = jest.spyOn(args as any, 'onAddNewCollection')

    const addButton = await canvas.getByRole('button', {
      name: /add new collection/i,
    })
    await userEvent.click(addButton)

    await expect(spy).toHaveBeenCalled()
    await spy.mockRestore()
  },
}

export const CancelClicked: Story = {
  args: {
    isOpen: true,
    collections: mockAnimeCollections,
    onCancel: jest.fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement.ownerDocument.body)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const spy = jest.spyOn(args as any, 'onCancel')

    const cancelButton = await canvas.getByRole('button', { name: /cancel/i })
    await userEvent.click(cancelButton)

    await expect(spy).toHaveBeenCalled()
    await spy.mockRestore()
  },
}
