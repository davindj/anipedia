import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { Button, ButtonColorEnum, ButtonSizeEnum, ButtonTypeEnum } from '.'
import { within } from '@storybook/testing-library'
import userEvent from '@testing-library/user-event'

const meta = {
  title: 'Components/Basic/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: {
      defaultValue: 'Button',
    },
    size: {
      control: { type: 'select', options: ButtonSizeEnum },
    },
    color: {
      control: { type: 'select', options: ButtonColorEnum },
    },
    type: {
      control: { type: 'select', options: ButtonTypeEnum },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const NormalSize: Story = {
  args: {
    text: 'Button',
    size: ButtonSizeEnum.NORMAL,
  },
  play: async ({ canvasElement }) => {
    const canvas = await within(canvasElement)

    const inputElement = await canvas.getByRole('button', {
      name: /Button/i,
    })
    expect(inputElement.innerText).toBe('Button')
    userEvent.click(inputElement)
  },
}

export const LargeSize: Story = {
  args: {
    text: 'Button',
    size: ButtonSizeEnum.LARGE,
  },
}

export const FillSuccess: Story = {
  args: {
    text: 'Button',
    type: ButtonTypeEnum.FILL,
    color: ButtonColorEnum.SUCCESS,
  },
}

export const FillDanger: Story = {
  args: {
    text: 'Button',
    type: ButtonTypeEnum.FILL,
    color: ButtonColorEnum.DANGER,
  },
}

export const FillSecondary: Story = {
  args: {
    text: 'Button',
    type: ButtonTypeEnum.FILL,
    color: ButtonColorEnum.SECONDARY,
  },
}

export const FillInfo: Story = {
  args: {
    text: 'Button',
    type: ButtonTypeEnum.FILL,
    color: ButtonColorEnum.INFO,
  },
}

export const OutlineSuccess: Story = {
  args: {
    text: 'Button',
    type: ButtonTypeEnum.OUTLINE,
    color: ButtonColorEnum.SUCCESS,
  },
}

export const OutlineDanger: Story = {
  args: {
    text: 'Button',
    type: ButtonTypeEnum.OUTLINE,
    color: ButtonColorEnum.DANGER,
  },
}

export const OutlineSecondary: Story = {
  args: {
    text: 'Button',
    type: ButtonTypeEnum.OUTLINE,
    color: ButtonColorEnum.SECONDARY,
  },
}

export const OutlineInfo: Story = {
  args: {
    text: 'Button',
    type: ButtonTypeEnum.OUTLINE,
    color: ButtonColorEnum.INFO,
  },
}

export const TextSuccess: Story = {
  args: {
    text: 'Button',
    type: ButtonTypeEnum.TEXT,
    color: ButtonColorEnum.SUCCESS,
  },
}

export const TextDanger: Story = {
  args: {
    text: 'Button',
    type: ButtonTypeEnum.TEXT,
    color: ButtonColorEnum.DANGER,
  },
}

export const TextSecondary: Story = {
  args: {
    text: 'Button',
    type: ButtonTypeEnum.TEXT,
    color: ButtonColorEnum.SECONDARY,
  },
}

export const TextInfo: Story = {
  args: {
    text: 'Button',
    type: ButtonTypeEnum.TEXT,
    color: ButtonColorEnum.INFO,
  },
}

export const ToneInfo: Story = {
  args: {
    text: 'Button',
    type: ButtonTypeEnum.TONE,
    color: ButtonColorEnum.INFO,
  },
}
