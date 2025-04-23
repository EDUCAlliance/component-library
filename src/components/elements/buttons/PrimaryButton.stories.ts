import { expect, userEvent, within } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"

import PrimaryButton from "./PrimaryButton.vue"
import { PlusIcon } from "lucide-vue-next"

/**
 * Primary button used for main actions on a webpage.
 */
const meta = {
  title: "Elements/Buttons/Primary",
  component: PrimaryButton,
  render: (args) => ({
    components: { PrimaryButton },
    setup() {
      return { args }
    },
    // The magic: drop the slot arg straight into the component
    template: `<primary-button v-bind="args" >{{ args.default }}</Button>`,
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    default: { control: "text", description: "A slot for button children." },
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg", "icon"],
      description: "The size of the button.",
    },
    icon: { control: "boolean", description: "Whether the button is an icon button." },
    disabled: { control: "boolean", description: "Whether the button is disabled." },
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof PrimaryButton>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    size: "lg",
    default: "Click me",
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
  },
}

export const ExtraSmall: Story = {
  args: {
    size: "xs",
    default: "Click me",
  },
}

export const Icon: Story = {
  args: {
    size: "base",
    default: "+",
    icon: true,
  },
}
