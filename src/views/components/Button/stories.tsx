import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonColorEnum, ButtonSizeEnum, ButtonStyleEnum } from '.'

const meta = {
  title: 'Components/Button',
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
    style: {
      control: { type: 'select', options: ButtonStyleEnum },
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
    style: ButtonStyleEnum.FILL,
    color: ButtonColorEnum.SUCCESS,
  },
}

export const FillDanger: Story = {
  args: {
    text: 'Button',
    style: ButtonStyleEnum.FILL,
    color: ButtonColorEnum.DANGER,
  },
}

export const FillSecondary: Story = {
  args: {
    text: 'Button',
    style: ButtonStyleEnum.FILL,
    color: ButtonColorEnum.SECONDARY,
  },
}
export const OutlineSuccess: Story = {
  args: {
    text: 'Button',
    style: ButtonStyleEnum.OUTLINE,
    color: ButtonColorEnum.SUCCESS,
  },
}

export const OutlineDanger: Story = {
  args: {
    text: 'Button',
    style: ButtonStyleEnum.OUTLINE,
    color: ButtonColorEnum.DANGER,
  },
}

export const OutlineSecondary: Story = {
  args: {
    text: 'Button',
    style: ButtonStyleEnum.OUTLINE,
    color: ButtonColorEnum.SECONDARY,
  },
}

export const TextSuccess: Story = {
  args: {
    text: 'Button',
    style: ButtonStyleEnum.TEXT,
    color: ButtonColorEnum.SUCCESS,
  },
}

export const TextDanger: Story = {
  args: {
    text: 'Button',
    style: ButtonStyleEnum.TEXT,
    color: ButtonColorEnum.DANGER,
  },
}

export const TextSecondary: Story = {
  args: {
    text: 'Button',
    style: ButtonStyleEnum.TEXT,
    color: ButtonColorEnum.SECONDARY,
  },
}
