import { expect, userEvent, within } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"

import LinkButton from "./LinkButton.vue"

const meta = {
  title: "Atoms/Buttons/Link",
  component: LinkButton,
  render: (args) => ({
    components: { LinkButton },
    setup() {
      return { args }
    },
    template: `<link-button v-bind="args" >{{ args.default }}</link-button>`,
  }),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
  **LinkButton** visually resembles a hyperlink but behaves as a button. Can be used for navigation or actions.

  Custom made for this library.

  - Used for actions that look like links.
  - Supports different sizes.
  - Fully accessible and keyboard-navigable.
  - Is a flex by default, so icons can be placed inside it.
        `,
      },
    },
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
} satisfies Meta<typeof LinkButton>

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
