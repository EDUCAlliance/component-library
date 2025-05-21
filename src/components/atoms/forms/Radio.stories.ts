import { expect, userEvent, within } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"

import Radio from "./Radio.vue"

/**
 * Primary button used for main actions on a webpage.
 */
const meta = {
  title: "Atoms/Forms/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
**Radio** allows users to select one option from a list. The difference between this and a checkbox is that a radio button is used to select one option from a list, while a checkbox is used to select multiple options.

Component is based on Reka UI.

- Fully accessible and keyboard-navigable.
- Controlled or uncontrolled mode.

<div style="display: flex; gap: 8px;">

<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=131-699&t=Mkp3c5SrIIlNDlq2-4" target="_blank">
  <img src="http://localhost:5173/buttons/figma-reference.png" alt="Figma reference" />
</a>

</div>
      `,
      },
    },
  },
  argTypes: {
    color: {
      control: "select",
      options: ["black", "yellow", "pink", "green", "orange", "violet"],
      description: "The color of the button.",
    },
    disabled: { control: "boolean", description: "Whether the radio button is disabled." },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>

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
