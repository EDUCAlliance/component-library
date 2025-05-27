import type { Meta, StoryObj } from "@storybook/vue3"
import RangeCalendar from "./RangeCalendar.vue"

const meta = {
  title: "Atoms/RangeCalendar",
  component: RangeCalendar,
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
**RangeCalendar** is a composable calendar component for selecting date ranges.

Component is based on Reka UI.

- Keyboard accessible
- Supports multiple months
- Highly composable

You don't have to use the completed RangeCalendar component, but you can create your own calendar using compound components.

<div style="display: flex; gap: 8px;">

<a href="https://reka-ui.com/docs/components/range-calendar" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/full-documentation.png" alt="Full docs" />
</a>

<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=196-4442&t=zzVCc3zdl4etXm0P-4" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />
</a>

</div>
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RangeCalendar>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    numberOfMonths: 1,
    weekStartsOn: 1,
    disabled: false,
    fixedWeeks: false,
    class: "",
  },
  render: (args) => ({
    components: { RangeCalendar },
    setup() {
      return { args }
    },
    template: `
      <RangeCalendar
        :number-of-months="args.numberOfMonths"
        :week-starts-on="args.weekStartsOn"
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
    weekStartsOn: 1,
    disabled: false,
    fixedWeeks: false,
    class: "",
  },
  render: (args) => ({
    components: { RangeCalendar },
    setup() {
      return { args }
    },
    template: `
      <RangeCalendar
        :number-of-months="args.numberOfMonths"
        :week-starts-on="args.weekStartsOn"
        :disabled="args.disabled"
        :fixed-weeks="args.fixedWeeks"
        :class="args.class"
      />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "Displays two months side by side for easier range selection.",
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    numberOfMonths: 1,
    weekStartsOn: 1,
    fixedWeeks: false,
    class: "",
  },
  render: (args) => ({
    components: { RangeCalendar },
    setup() {
      return { args }
    },
    template: `
      <RangeCalendar
        :number-of-months="args.numberOfMonths"
        :week-starts-on="args.weekStartsOn"
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
