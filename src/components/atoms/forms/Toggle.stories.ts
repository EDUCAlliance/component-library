import { expect, userEvent, within } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"

import Toggle from "./Toggle.vue"

/**
 * Primary button used for main actions on a webpage.
 */
const meta = {
  title: "Atoms/Forms/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
**Toggle** is a switch component for binary on/off states, such as enabling or disabling a setting.

Based on Headless UI and custom styles.

- Fully accessible and keyboard-navigable.
- Supports custom colors and small size.
- Optional icons for on/off states.
- Controlled or uncontrolled mode.

<div style="display: flex; gap: 8px;">

<a href="https://headlessui.com/v1/vue/switch" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/full-documentation.png" alt="Full docs" />
</a>

<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=131-699&t=Mkp3c5SrIIlNDlq2-4" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />
</a>

</div>
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "base"],
      description: "The size of the toggle.",
    },
    color: {
      control: "select",
      options: ["black", "yellow", "pink", "green", "orange", "violet"],
      description: "The color of the button.",
    },
    disabled: { control: "boolean", description: "Whether the toggle is disabled." },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Yellow: Story = {
  args: {
    size: "base",
    color: "yellow",
    disabled: false,
  },
}

export const Pink: Story = {
  args: {
    size: "base",
    color: "pink",
    disabled: false,
  },
}

export const Green: Story = {
  args: {
    size: "base",
    color: "green",
    disabled: false,
  },
}

export const Orange: Story = {
  args: {
    size: "base",
    color: "orange",
    disabled: false,
  },
}

export const Violet: Story = {
  args: {
    size: "base",
    color: "violet",
    disabled: false,
  },
}

export const Base: Story = {
  args: {
    size: "base",
    disabled: false,
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    disabled: false,
  },
}

export const WithIcons: Story = {
  args: {
    withIcons: true,
  },
}
