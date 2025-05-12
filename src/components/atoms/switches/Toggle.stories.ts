import { expect, userEvent, within } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"

import Toggle from "./Toggle.vue"

/**
 * Primary button used for main actions on a webpage.
 */
const meta = {
  title: "Atoms/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", , "base"],
      description: "The size of the toggle.",
    },
    color: {
      control: "select",
      options: ["black", "yellow", "pink", "green", "orange", "violet"],
      description: "The color of the button.",
    },
    disabled: { control: "boolean", description: "Whether the toggle is disabled." },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Yellow: Story = {
  args: {
    size: "base",
    color: "yellow",
    disabled: false,
  },
}

export const Pink: Story = {
  args: {
    size: "base",
    color: "pink",
    disabled: false,
  },
}

export const Green: Story = {
  args: {
    size: "base",
    color: "green",
    disabled: false,
  },
}

export const Orange: Story = {
  args: {
    size: "base",
    color: "orange",
    disabled: false,
  },
}

export const Violet: Story = {
  args: {
    size: "base",
    color: "violet",
    disabled: false,
  },
}

export const Base: Story = {
  args: {
    size: "base",
    disabled: false,
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    disabled: false,
  },
}

export const WithIcons: Story = {
  args: {
    withIcons: true,
  },
}
