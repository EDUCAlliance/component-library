import { expect, userEvent, within } from "@storybook/test"
import type { Meta, StoryObj } from "@storybook/vue3"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import GhostButton from "../buttons/GhostButton.vue"

import NotificationBar from "./NotificationBar.vue"

const meta = {
  title: "Atoms/Feedback/NotificationBar",
  component: NotificationBar,
  render: (args) => ({
    components: { NotificationBar, GhostButton, FontAwesomeIcon },
    setup() {
      return { args }
    },
    template: `
      <notification-bar v-bind="args">
        <template v-if="!args.default">
          <p class="text-sm font-bold">{{ args.headline }}</p>
          <p class="text-sm opacity-70">{{ args.text }}</p>
          <ghost-button v-if="args.withButton" class="text-white-primary" size="sm">
            See what's coming next <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-4" />
          </ghost-button>
        </template>
        <template v-else>{{ args.default }}</template>
      </notification-bar>
    `,
  }),
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
**NotificationBar** is used to display important announcements or notifications at the top of the page.

- Supports multiple color variants
- Can contain custom content through slots
- Includes a close button
- Can display a pattern background
        `,
      },
    },
  },
  argTypes: {
    color: {
      control: "select",
      options: ["black", "yellow", "pink", "green", "violet", "orange", "pattern"],
      description: "The color variant of the notification bar.",
    },
    headline: { control: "text", description: "The headline text to display." },
    text: { control: "text", description: "The secondary text to display." },
    withButton: { control: "boolean", description: "Whether to show the action button." },
    default: { control: "text", description: "Custom content for the notification bar." },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NotificationBar>

export default meta
type Story = StoryObj<typeof meta>

export const Black: Story = {
  args: {
    color: "black",
    headline: "Important Announcement",
    text: "This is an important message for all users",
  },
}

export const Pattern: Story = {
  args: {
    color: "pattern",
    headline: "Staff Week · Digital Course Development and Virtual Mobility",
    text: "University of Pécs · Hungary",
    withButton: true,
  },
}

export const Yellow: Story = {
  args: {
    color: "yellow",
    headline: "System Maintenance",
    text: "The system will be under maintenance on Sunday",
  },
}

export const Pink: Story = {
  args: {
    color: "pink",
    headline: "New Feature Available",
    text: "Check out our latest features in the dashboard",
  },
}

export const Green: Story = {
  args: {
    color: "green",
    headline: "Success",
    text: "Your changes have been saved successfully",
  },
}

export const Violet: Story = {
  args: {
    color: "violet",
    headline: "Event Reminder",
    text: "Don't forget about the upcoming workshop",
  },
}

export const Orange: Story = {
  args: {
    color: "orange",
    headline: "Warning",
    text: "Please update your browser for the best experience",
  },
}

export const CustomContent: Story = {
  args: {
    color: "black",
    default: "This is a notification bar with custom content using the default slot",
  },
}
