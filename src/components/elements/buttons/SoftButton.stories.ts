import { expect, userEvent, within } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"

import SoftButton from "./SoftButton.vue"

/**
 * Soft button used in cards and other colored elements.
 */
const meta = {
  title: "Elements/Buttons/Soft",
  component: SoftButton,
  render: (args) => ({
    components: { SoftButton },
    setup() {
      return { args }
    },
    template: `<soft-button v-bind="args" >{{ args.default }}</soft-button>`,
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
    color: {
      control: "select",
      options: ["yellow", "pink", "green", "orange", "violet"],
      description: "The color of the button.",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SoftButton>

export default meta
type Story = StoryObj<typeof meta>

export const Yellow: Story = {
  args: {
    size: "base",
    default: "Click me",
    disabled: false,
    color: "yellow",
  },
}

export const Pink: Story = {
  args: {
    size: "base",
    default: "Click me",
    disabled: false,
    color: "pink",
  },
}

export const Green: Story = {
  args: {
    size: "base",
    default: "Click me",
    disabled: false,
    color: "green",
  },
}

export const Orange: Story = {
  args: {
    size: "base",
    default: "Click me",
    disabled: false,
    color: "orange",
  },
}

export const Violet: Story = {
  args: {
    size: "base",
    default: "Click me",
    disabled: false,
    color: "violet",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    default: "Click me",
    disabled: false,
    color: "yellow",
  },
}

export const Base: Story = {
  args: {
    size: "base",
    default: "Click me",
    disabled: false,
    color: "yellow",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    default: "Click me",
    disabled: false,
    color: "yellow",
  },
}

export const ExtraSmall: Story = {
  args: {
    size: "xs",
    default: "Click me",
    disabled: false,
    color: "yellow",
  },
}
