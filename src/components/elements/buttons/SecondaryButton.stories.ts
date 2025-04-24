import { expect, userEvent, within } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"

import SecondaryButton from "./SecondaryButton.vue"

/**
 * Secondary button used for secondary actions (deletion, canceling an action) on a webpage.
 */
const meta = {
  title: "Elements/Buttons/Secondary",
  component: SecondaryButton,
  render: (args) => ({
    components: { SecondaryButton },
    setup() {
      return { args }
    },
    template: `<secondary-button v-bind="args" >{{ args.default }}</secondary-button>`,
  }),
  parameters: {
    layout: "centered",
  },
  argTypes: {
    default: { control: "text", description: "A slot for button children." },
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg", "icon"],
      description: "The size of the button.",
    },
    disabled: { control: "boolean", description: "Whether the button is disabled." },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SecondaryButton>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    size: "lg",
    default: "Click me",
    disabled: false,
  },
}

export const Base: Story = {
  args: {
    size: "base",
    default: "Click me",
    disabled: false,
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    default: "Click me",
    disabled: false,
  },
}

export const ExtraSmall: Story = {
  args: {
    size: "xs",
    default: "Click me",
    disabled: false,
  },
}
