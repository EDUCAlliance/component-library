import { expect, userEvent, within } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"

import GhostButton from "./GhostButton.vue"

const meta = {
  title: "Elements/Buttons/GhostButton",
  component: GhostButton,
  render: (args) => ({
    components: { GhostButton },
    setup() {
      return { args }
    },
    template: `<ghost-button v-bind="args" >{{ args.default }}</ghost-button>`,
  }),
  parameters: {
    layout: "centered",
  },
  argTypes: {
    default: { control: "text", description: "A slot for button children." },
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg", "circle"],
      description: "The size of the button.",
    },
    disabled: { control: "boolean", description: "Whether the button is disabled." },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GhostButton>

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
