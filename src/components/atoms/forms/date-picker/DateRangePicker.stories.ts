import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import { CalendarDate } from "@internationalized/date"
import DateRangePicker from "./DateRangePicker.vue"

const range = { start: new CalendarDate(2025, 1, 8), end: new CalendarDate(2025, 2, 8) }

const meta = {
  title: "Atoms/Forms/DateRangePicker",
  component: DateRangePicker,
  argTypes: {
    modelValue: {
      control: false,
      description: "Selected range (`v-model`), a `{ start, end }` object of `DateValue`s.",
    },
    defaultValue: { control: false, description: "Range selected on first render." },
    placeholder: { control: "text", description: "Shown while no range is selected." },
    state: {
      control: "select",
      options: ["default", "error", "success", "warning"],
      description: "Validation state (default, error, success, warning)",
    },
    color: {
      control: "select",
      options: ["black", "yellow", "pink", "green", "orange", "violet"],
      description: "Accent color of the selected range in the calendar.",
    },
    disabled: { control: "boolean", description: "Disabled state" },
    readonly: { control: "boolean", description: "Readonly state" },
    locale: { control: "text", description: "Locale used for the trigger label and calendar." },
    numberOfMonths: {
      control: { type: "number", min: 1, max: 3 },
      description: "Number of months shown side by side.",
    },
    minValue: { control: false, description: "Earliest selectable date." },
    maxValue: { control: false, description: "Latest selectable date." },
    isDateDisabled: {
      control: false,
      description: "Returns `true` for dates that can't be picked.",
    },
    isDateUnavailable: {
      control: false,
      description: "Returns `true` for dates shown as unavailable (struck through).",
    },
    class: { control: "text", description: "Additional classes for the trigger" },
  },
  render: (args) => ({
    components: { DateRangePicker },
    setup() {
      const value = ref(args.modelValue)

      return { args, value }
    },
    template: `<DateRangePicker v-bind="args" v-model="value" class="w-[360px]" />`,
  }),
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**DateRangePicker** lets the user pick a start and end date from a two-month calendar popover, with the same API and states as Input.

Built from Reka UI \`Popover\` and the library \`RangeCalendar\`. The value is a \`{ start, end }\` object of \`DateValue\`s from \`@internationalized/date\`.

- \`label\` and \`helper\` slots, same as \`Input\`.
- \`state\` for form validation (error, success, warning).
- \`color\` for the range accent.

<div style="display: flex; gap: 8px;">
<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=196-4442" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />
</a>
</div>
        `,
      },
    },
  },
} satisfies Meta<typeof DateRangePicker>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    placeholder: "Pick a date range",
    state: "default",
  },
}

export const WithValue: Story = {
  args: {
    modelValue: range,
  },
  parameters: {
    docs: {
      source: {
        code: `<script setup lang="ts">
import { ref } from "vue"
import { CalendarDate } from "@internationalized/date"

const value = ref({ start: new CalendarDate(2025, 1, 8), end: new CalendarDate(2025, 2, 8) })
</script>

<template>
  <DateRangePicker v-model="value" />
</template>`,
      },
    },
  },
}

export const Color: Story = {
  args: {
    modelValue: range,
    color: "yellow",
  },
  parameters: {
    docs: {
      description: {
        story:
          "`color` sets the accent of the selected range: `black`, `yellow`, `pink`, `green`, `orange` or `violet`.",
      },
      source: {
        code: `<DateRangePicker v-model="value" color="yellow" />`,
      },
    },
  },
}

export const WithLabelAndHelper: Story = {
  render: (args) => ({
    components: { DateRangePicker },
    setup() {
      const value = ref()

      return { args, value }
    },
    template: `
      <DateRangePicker v-bind="args" v-model="value" class="w-[360px]">
        <template #label>Stay</template>
        <template #helper>Check-in and check-out dates.</template>
      </DateRangePicker>
    `,
  }),
  args: {
    placeholder: "Pick a date range",
  },
  parameters: {
    docs: {
      source: {
        code: `<DateRangePicker v-model="value" placeholder="Pick a date range">
  <template #label>Stay</template>
  <template #helper>Check-in and check-out dates.</template>
</DateRangePicker>`,
      },
    },
  },
}

export const Validation: Story = {
  render: (args) => ({
    components: { DateRangePicker },
    setup() {
      const value = ref()

      return { args, value }
    },
    template: `
      <DateRangePicker v-bind="args" v-model="value" :state="value ? 'success' : 'error'" class="w-[360px]">
        <template #label>Stay</template>
        <template #helper>{{ value ? "Looks good." : "Pick both dates." }}</template>
      </DateRangePicker>
    `,
  }),
  args: {
    placeholder: "Pick a date range",
  },
  parameters: {
    docs: {
      description: {
        story: "`state` reflects form validation, the `helper` slot carries the message.",
      },
      source: {
        code: `<DateRangePicker v-model="value" :state="value ? 'success' : 'error'">
  <template #label>Stay</template>
  <template #helper>{{ value ? "Looks good." : "Pick both dates." }}</template>
</DateRangePicker>`,
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "Disabled",
    disabled: true,
  },
}

export const Readonly: Story = {
  args: {
    modelValue: range,
    readonly: true,
  },
}
