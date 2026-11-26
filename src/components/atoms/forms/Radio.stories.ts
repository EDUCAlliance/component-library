import { ref } from "vue"
import type { Meta, StoryObj } from "@storybook/vue3-vite"

import Radio from "./Radio.vue"

const meta = {
  title: "Atoms/Forms/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
**Radio** allows users to select one option from a list. The difference between this and a checkbox is that a radio button is used to select one option from a list, while a checkbox is used to select multiple options.

Custom made for this library.

- Fully accessible and keyboard-navigable.
- Controlled (\`v-model\`) or uncontrolled mode.
- Optional \`label\` and \`helper\` slots (clicking the label selects the radio, the helper is linked via \`aria-describedby\`).

\`\`\`vue
<Radio v-model="plan" value="monthly" name="plan">
  <template #label>Monthly</template>
  <template #helper>Billed every month, cancel anytime.</template>
</Radio>
\`\`\`

There is no dedicated group component — render several radios with the same \`name\` and the same \`v-model\` inside a \`<fieldset>\`. Each radio writes its own \`value\` to the model (see the **Group** story).

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
      description: "The color of the radio button.",
    },
    disabled: { control: "boolean", description: "Whether the radio button is disabled." },
    value: {
      control: "text",
      description: "Value written to the model when this radio is selected.",
    },
    modelValue: {
      control: "text",
      description:
        "Selected value of the group, use with `v-model`. The radio is checked when it equals `value`.",
    },
    checked: { control: "boolean", description: "Checked state when not using `v-model`." },
    name: {
      control: "text",
      description: "Native `name` attribute. Radios with the same name form one group.",
    },
    id: { control: "text", description: "Input id. Generated automatically when omitted." },
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

export const WithLabel: Story = {
  args: { value: "yes" },
  render: (args) => ({
    components: { Radio },
    setup: () => ({ args }),
    template: `
      <Radio v-bind="args">
        <template #label>Yes, I want to participate</template>
      </Radio>
    `,
  }),
}

export const WithLabelAndHelper: Story = {
  args: { value: "monthly" },
  render: (args) => ({
    components: { Radio },
    setup: () => ({ args }),
    template: `
      <Radio v-bind="args">
        <template #label>Monthly</template>
        <template #helper>Billed every month, cancel anytime.</template>
      </Radio>
    `,
  }),
}

export const Disabled: Story = {
  args: { value: "unavailable", disabled: true },
  render: (args) => ({
    components: { Radio },
    setup: () => ({ args }),
    template: `
      <Radio v-bind="args">
        <template #label>Unavailable option</template>
        <template #helper>This option cannot be selected.</template>
      </Radio>
    `,
  }),
}

export const Group: Story = {
  parameters: {
    docs: {
      source: {
        code: `<script setup lang="ts">
import { ref } from "vue"
import { Radio } from "@EDUCAlliance/component-library"

const options = [
  { value: "monthly", label: "Monthly", helper: "Billed every month, cancel anytime." },
  { value: "yearly", label: "Yearly", helper: "Two months free." },
  { value: "lifetime", label: "Lifetime", helper: "Pay once, use forever." },
]
const plan = ref("monthly")
</script>

<template>
  <fieldset class="flex flex-col gap-4">
    <legend class="mb-2 font-bold">Billing plan</legend>
    <Radio
      v-for="option in options"
      :key="option.value"
      v-model="plan"
      name="plan"
      :value="option.value"
    >
      <template #label>{{ option.label }}</template>
      <template #helper>{{ option.helper }}</template>
    </Radio>
  </fieldset>
</template>`,
      },
    },
  },
  render: (args) => ({
    components: { Radio },
    setup() {
      const options = [
        { value: "monthly", label: "Monthly", helper: "Billed every month, cancel anytime." },
        { value: "yearly", label: "Yearly", helper: "Two months free." },
        { value: "lifetime", label: "Lifetime", helper: "Pay once, use forever." },
      ]
      const plan = ref("monthly")
      return { args, options, plan }
    },
    template: `
      <fieldset class="flex flex-col gap-4">
        <legend class="mb-2 font-bold">Billing plan</legend>
        <Radio
          v-for="option in options"
          :key="option.value"
          v-model="plan"
          :color="args.color"
          name="plan"
          :value="option.value"
        >
          <template #label>{{ option.label }}</template>
          <template #helper>{{ option.helper }}</template>
        </Radio>
        <p class="text-sm">Selected: {{ plan }}</p>
      </fieldset>
    `,
  }),
}
