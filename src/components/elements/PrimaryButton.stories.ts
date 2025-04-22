import { expect, userEvent, within } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"

import PrimaryButton from "./PrimaryButton.vue"

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
    layout: "fullscreen",
  },
  argTypes: {
    default: { control: "text", description: "A slot for button children." },
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg"],
      description: "The size of the button.",
    },
    disabled: { control: "boolean" },
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof PrimaryButton>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    size: "base",
    default: "Click me",
    disabled: false,
  },
}
