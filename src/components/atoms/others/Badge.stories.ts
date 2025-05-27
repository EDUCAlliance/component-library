import { expect, userEvent, within } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"

import Badge from "./Badge.vue"

/**
 * Primary button used for main actions on a webpage.
 */
const meta = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
  **Badge** is a small status indicator or label, often used to highlight new or unread items, statuses, or categories.

  Custom made for this library.

  - Supports multiple colors and variants (primary, secondary).
  - Can be used for notifications, tags, or status indicators.
  - Flex by default, so icons can be placed at the beginning of the badge.

<div style="display: flex; gap: 8px;">

<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=65-480&t=Mkp3c5SrIIlNDlq2-4" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />
</a>

</div>
        `,
      },
    },
  },
  argTypes: {
    default: { control: "text", description: "A slot for badge content." },
    color: {
      control: "select",
      options: ["black", "yellow", "pink", "green", "orange", "violet"],
      description: "The color of the badge.",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary"],
      description: "The variant of the badge.",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "base"],
      description: "The size of the badge.",
    },
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: `<badge v-bind="args">{{ args.default }}</badge>`,
  }),
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    color: "black",
    size: "base",
    default: "Badge",
  },
}

export const Yellow: Story = {
  args: {
    color: "yellow",
    size: "base",
    default: "Badge",
  },
}

export const Pink: Story = {
  args: {
    color: "pink",
    size: "base",
    default: "Badge",
  },
}

export const Green: Story = {
  args: {
    color: "green",
    size: "base",
    default: "Badge",
  },
}

export const Orange: Story = {
  args: {
    color: "orange",
    size: "base",
    default: "Badge",
  },
}

export const Violet: Story = {
  args: {
    color: "violet",
    size: "base",
    default: "Badge",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    color: "black",
    size: "base",
    default: "Badge",
  },
}
