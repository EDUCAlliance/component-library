import { expect, userEvent, within } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"

import Checkbox from "./Checkbox.vue"

/**
 * Primary button used for main actions on a webpage.
 */
const meta = {
  title: "Atoms/Forms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: "select",
      options: ["black", "yellow", "pink", "green", "orange", "violet"],
      description: "The color of the button.",
    },
    disabled: { control: "boolean", description: "Whether the checkbox is disabled." },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    color: "black",
    disabled: false,
  },
}

export const Yellow: Story = {
  args: {
    color: "yellow",
    disabled: false,
  },
}

export const Pink: Story = {
  args: {
    color: "pink",
    disabled: false,
  },
}

export const Green: Story = {
  args: {
    color: "green",
    disabled: false,
  },
}

export const Orange: Story = {
  args: {
    color: "orange",
    disabled: false,
  },
}

export const Violet: Story = {
  args: {
    color: "violet",
    disabled: false,
  },
}
