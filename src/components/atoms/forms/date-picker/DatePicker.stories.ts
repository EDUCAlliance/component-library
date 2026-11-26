import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import { CalendarDate, getLocalTimeZone, today } from "@internationalized/date"
import DatePicker from "./DatePicker.vue"

const meta = {
  title: "Atoms/Forms/DatePicker",
  component: DatePicker,
  argTypes: {
    modelValue: { control: false, description: "Selected date (`v-model`), a `DateValue`." },
    defaultValue: { control: false, description: "Date selected on first render." },
    placeholder: { control: "text", description: "Shown while no date is selected." },
    state: {
      control: "select",
      options: ["default", "error", "success", "warning"],
      description: "Validation state (default, error, success, warning)",
    },
    color: {
      control: "select",
      options: ["black", "yellow", "pink", "green", "orange", "violet"],
      description: "Accent color of the selected date in the calendar.",
    },
    disabled: { control: "boolean", description: "Disabled state" },
    readonly: { control: "boolean", description: "Readonly state" },
    locale: { control: "text", description: "Locale used for the trigger label and calendar." },
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
    components: { DatePicker },
    setup() {
      const value = ref(args.modelValue)

      return { args, value }
    },
    template: `<DatePicker v-bind="args" v-model="value" class="w-[300px]" />`,
  }),
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**DatePicker** lets the user pick a single date from a calendar popover, with the same API and states as Input.

Built from Reka UI \`Popover\` and the library \`Calendar\`. Values are \`DateValue\` objects from \`@internationalized/date\`.

- \`label\` and \`helper\` slots, same as \`Input\`.
- \`state\` for form validation (error, success, warning).
- Fully accessible and keyboard-navigable.

<div style="display: flex; gap: 8px;">
<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=196-4442" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />
</a>
</div>
        `,
      },
    },
  },
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    placeholder: "Pick a date",
    state: "default",
  },
}

export const WithValue: Story = {
  args: {
    modelValue: new CalendarDate(2025, 1, 8),
  },
  parameters: {
    docs: {
      source: {
        code: `<script setup lang="ts">
import { ref } from "vue"
import { CalendarDate } from "@internationalized/date"

const value = ref(new CalendarDate(2025, 1, 8))
</script>

<template>
  <DatePicker v-model="value" />
</template>`,
      },
    },
  },
}

export const WithLabelAndHelper: Story = {
  render: (args) => ({
    components: { DatePicker },
    setup() {
      const value = ref()

      return { args, value }
    },
    template: `
      <DatePicker v-bind="args" v-model="value" class="w-[300px]">
        <template #label>Date of birth</template>
        <template #helper>Used to verify your age.</template>
      </DatePicker>
    `,
  }),
  args: {
    placeholder: "Pick a date",
  },
  parameters: {
    docs: {
      source: {
        code: `<DatePicker v-model="value" placeholder="Pick a date">
  <template #label>Date of birth</template>
  <template #helper>Used to verify your age.</template>
</DatePicker>`,
      },
    },
  },
}

export const Validation: Story = {
  render: (args) => ({
    components: { DatePicker },
    setup() {
      const value = ref()

      return { args, value }
    },
    template: `
      <DatePicker v-bind="args" v-model="value" :state="value ? 'success' : 'error'" class="w-[300px]">
        <template #label>Start date</template>
        <template #helper>{{ value ? "Looks good." : "Start date is required." }}</template>
      </DatePicker>
    `,
  }),
  args: {
    placeholder: "Pick a date",
  },
  parameters: {
    docs: {
      description: {
        story: "`state` reflects form validation, the `helper` slot carries the message.",
      },
      source: {
        code: `<DatePicker v-model="value" :state="value ? 'success' : 'error'">
  <template #label>Start date</template>
  <template #helper>{{ value ? "Looks good." : "Start date is required." }}</template>
</DatePicker>`,
      },
    },
  },
}

export const Error: Story = {
  args: {
    placeholder: "Error state",
    state: "error",
  },
}

export const Success: Story = {
  args: {
    modelValue: new CalendarDate(2025, 1, 8),
    state: "success",
  },
}

export const Warning: Story = {
  args: {
    modelValue: new CalendarDate(2025, 1, 8),
    state: "warning",
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
    modelValue: new CalendarDate(2025, 1, 8),
    readonly: true,
  },
}

export const MinAndMax: Story = {
  args: {
    placeholder: "Within the next 30 days",
    minValue: today(getLocalTimeZone()),
    maxValue: today(getLocalTimeZone()).add({ days: 30 }),
  },
  parameters: {
    docs: {
      description: {
        story: "`minValue` and `maxValue` limit the selectable range.",
      },
      source: {
        code: `<DatePicker
  v-model="value"
  :min-value="today(getLocalTimeZone())"
  :max-value="today(getLocalTimeZone()).add({ days: 30 })"
/>`,
      },
    },
  },
}

export const Locale: Story = {
  args: {
    modelValue: new CalendarDate(2025, 1, 8),
    locale: "cs-CZ",
  },
}

export const Color: Story = {
  args: {
    modelValue: new CalendarDate(2025, 1, 8),
    color: "yellow",
  },
  parameters: {
    docs: {
      description: {
        story:
          "`color` sets the accent of the selected date: `black`, `yellow`, `pink`, `green`, `orange` or `violet`.",
      },
      source: {
        code: `<DatePicker v-model="value" color="yellow" />`,
      },
    },
  },
}
