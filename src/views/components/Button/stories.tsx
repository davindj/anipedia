import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonColorEnum, ButtonSizeEnum, ButtonTypeEnum } from '.'

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
