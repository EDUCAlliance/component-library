import { expect, userEvent, within } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"

import Toggle from "./Toggle.vue"

/**
 * Primary button used for main actions on a webpage.
 */
const meta = {
  title: "Elements/Buttons/Toggle",
  component: Toggle,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
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
    disabled: { control: "boolean", description: "Whether the button is disabled." },
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    size: "base",
    disabled: false,
  },
}
