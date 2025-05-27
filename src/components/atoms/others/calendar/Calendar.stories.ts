import type { Meta, StoryObj } from "@storybook/vue3"
import Calendar from "./Calendar.vue"

const meta = {
  title: "Atoms/Calendar",
  component: Calendar,
  argTypes: {
    class: {
      control: "text",
      description: "Additional classes for the calendar root.",
    },
    numberOfMonths: {
      control: { type: "number", min: 1, max: 3 },
      description: "Number of months to display at once.",
      defaultValue: 1,
    },
    disabled: {
      control: "boolean",
      description: "Whether the calendar is disabled.",
      defaultValue: false,
    },
    fixedWeeks: {
      control: "boolean",
      description: "Always display 6 weeks in the calendar.",
      defaultValue: false,
    },
    // Add more props as needed from the Reka UI API
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
**Calendar** is a composable calendar component for selecting single dates.\n\nComponent is based on Reka UI.\n\n- Keyboard accessible\n- Supports multiple months\n- Highly composable\n\nYou don't have to use the completed Calendar component, but you can create your own calendar using compound components.\n\n<div style="display: flex; gap: 8px;">\n\n<a href="https://reka-ui.com/docs/components/calendar" target="_blank">\n  <img src="http://localhost:6006/src/stories/assets/buttons/full-documentation.png" alt="Full docs" />\n</a>\n\n<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=196-4442&t=zzVCc3zdl4etXm0P-4" target="_blank">\n  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />\n</a>\n\n</div>\n        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    numberOfMonths: 1,
    disabled: false,
    fixedWeeks: false,
    class: "",
  },
  render: (args) => ({
    components: { Calendar },
    setup() {
      return { args }
    },
    template: `
      <Calendar
        :number-of-months="args.numberOfMonths"
        :disabled="args.disabled"
        :fixed-weeks="args.fixedWeeks"
        :class="args.class"
      />
    `,
  }),
}

export const TwoMonths: Story = {
  args: {
    numberOfMonths: 2,
    disabled: false,
    fixedWeeks: false,
    class: "",
  },
  render: (args) => ({
    components: { Calendar },
    setup() {
      return { args }
    },
    template: `
      <Calendar
        :number-of-months="args.numberOfMonths"
        :disabled="args.disabled"
        :fixed-weeks="args.fixedWeeks"
        :class="args.class"
      />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "Displays two months side by side for easier date selection.",
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    numberOfMonths: 1,
    fixedWeeks: false,
    class: "",
  },
  render: (args) => ({
    components: { Calendar },
    setup() {
      return { args }
    },
    template: `
      <Calendar
        :number-of-months="args.numberOfMonths"
        :disabled="args.disabled"
        :fixed-weeks="args.fixedWeeks"
        :class="args.class"
      />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "Calendar in a disabled state.",
      },
    },
  },
}
