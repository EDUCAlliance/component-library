import { expect, userEvent, within } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"

import GhostButton from "./GhostButton.vue"

const meta = {
  title: "Atoms/Buttons/GhostButton",
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
    docs: {
      description: {
        component: `
  **GhostButton** is a minimal button with no background, used for subtle actions. It shares the same styles as [LinkButton](/docs/atoms-buttons-linkbutton--docs), but is used only for actions and not navigation.

  Custom made for this library.

  - Minimal styling, often used for secondary or tertiary actions.
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
