import { ref } from "vue"
import type { Meta, StoryObj } from "@storybook/vue3-vite"

import Checkbox from "./Checkbox.vue"

const meta = {
  title: "Atoms/Forms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
**Checkbox** allows users to select one or more options from a list.

Custom made for this library.

- Fully accessible and keyboard-navigable.
- Controlled or uncontrolled mode.
- Supports colors.
- Optional \`label\` and \`helper\` slots (clicking the label toggles the checkbox, the helper is linked via \`aria-describedby\`).

\`\`\`vue
<Checkbox v-model="accepted">
  <template #label>I accept the terms</template>
  <template #helper>You can withdraw your consent at any time.</template>
</Checkbox>
\`\`\`

There is no dedicated group component — render several checkboxes inside a \`<fieldset>\` and keep the selected values in an array (see the **Group** story).

<div style="display: flex; gap: 8px;">

<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=131-699&t=Mkp3c5SrIIlNDlq2-4" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />
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
      description: "The color of the checkbox.",
    },
    disabled: { control: "boolean", description: "Whether the checkbox is disabled." },
    modelValue: { control: "boolean", description: "Checked state, use with `v-model`." },
    name: { control: "text", description: "Native `name` attribute, useful for form submission." },
    inputValue: {
      control: "text",
      description: "Native `value` attribute submitted with the form when checked.",
    },
    id: { control: "text", description: "Input id. Generated automatically when omitted." },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>

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

export const WithLabel: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup: () => ({ args }),
    template: `
      <Checkbox v-bind="args">
        <template #label>I accept the terms and conditions</template>
      </Checkbox>
    `,
  }),
}

export const WithLabelAndHelper: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup: () => ({ args }),
    template: `
      <Checkbox v-bind="args">
        <template #label>Subscribe to newsletter</template>
        <template #helper>We send at most one email per month.</template>
      </Checkbox>
    `,
  }),
}

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => ({
    components: { Checkbox },
    setup: () => ({ args }),
    template: `
      <Checkbox v-bind="args">
        <template #label>Unavailable option</template>
        <template #helper>This option cannot be changed.</template>
      </Checkbox>
    `,
  }),
}

export const Group: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup lang="ts">
import { ref } from "vue"
import { Checkbox } from "@EDUCAlliance/component-library"

const options = [
  { value: "email", label: "Email", helper: "Get notified in your inbox." },
  { value: "sms", label: "SMS", helper: "Standard rates may apply." },
  { value: "push", label: "Push notifications", helper: "Only on mobile devices." },
]
const selected = ref<string[]>(["email"])

function toggle(value: string, checked: boolean) {
  selected.value = checked
    ? [...selected.value, value]
    : selected.value.filter((v) => v !== value)
}
</script>

<template>
  <fieldset class="flex flex-col gap-4">
    <legend class="mb-2 font-bold">Notifications</legend>
    <Checkbox
      v-for="option in options"
      :key="option.value"
      name="notifications"
      :input-value="option.value"
      :model-value="selected.includes(option.value)"
      @update:model-value="toggle(option.value, $event)"
    >
      <template #label>{{ option.label }}</template>
      <template #helper>{{ option.helper }}</template>
    </Checkbox>
  </fieldset>
</template>`,
      },
    },
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const options = [
        { value: "email", label: "Email", helper: "Get notified in your inbox." },
        { value: "sms", label: "SMS", helper: "Standard rates may apply." },
        { value: "push", label: "Push notifications", helper: "Only on mobile devices." },
      ]
      const selected = ref<string[]>(["email"])
      const toggle = (value: string, checked: boolean) => {
        selected.value = checked
          ? [...selected.value, value]
          : selected.value.filter((v) => v !== value)
      }
      return { args, options, selected, toggle }
    },
    template: `
      <fieldset class="flex flex-col gap-4">
        <legend class="mb-2 font-bold">Notifications</legend>
        <Checkbox
          v-for="option in options"
          :key="option.value"
          :color="args.color"
          name="notifications"
          :input-value="option.value"
          :model-value="selected.includes(option.value)"
          @update:model-value="toggle(option.value, $event)"
        >
          <template #label>{{ option.label }}</template>
          <template #helper>{{ option.helper }}</template>
        </Checkbox>
        <p class="text-sm">Selected: {{ selected.join(", ") || "none" }}</p>
      </fieldset>
    `,
  }),
}
