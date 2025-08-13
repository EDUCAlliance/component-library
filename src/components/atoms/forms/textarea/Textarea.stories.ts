import type { Meta, StoryObj } from "@storybook/vue3-vite"
import Textarea from "./Textarea.vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

const meta = {
  title: "Atoms/Forms/Textarea",
  component: Textarea,
  argTypes: {
    modelValue: { control: "text", description: "Textarea value (v-model)" },
    placeholder: { control: "text", description: "Textarea placeholder" },
    rows: { control: "number", description: "Number of visible text rows" },
    state: {
      control: "select",
      options: ["default", "error", "success", "warning"],
      description: "Textarea state (default, error, success, warning)",
    },
    disabled: { control: "boolean", description: "Disabled state" },
    readonly: { control: "boolean", description: "Readonly state" },
    class: { control: "text", description: "Additional classes for the textarea wrapper" },
  },
  render: (args) => ({
    components: { Textarea, FontAwesomeIcon },
    setup() {
      return { args }
    },
    template: `<Textarea v-bind="args" />`,
  }),
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Textarea** allows multi-line text input with the same API and states as Input.

Custom made for this library.

- Supports prefix/suffix slots, label, helper, and all states.
- Fully accessible and keyboard-navigable.

<div style="display: flex; gap: 8px;">
<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=140-1360&t=COqmc6qbhawQjCir-4" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />
</a>
</div>
        `,
      },
    },
  },
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {
    modelValue: "",
    placeholder: "Placeholder",
    state: "default",
    rows: 4,
  },
}

export const WithPrefix: Story = {
  render: (args) => ({
    components: { Textarea, FontAwesomeIcon },
    setup() {
      return { args }
    },
    template: `
      <Textarea v-bind="args">
        <template #prefix>
          <FontAwesomeIcon :icon="['fas', 'user']" />
        </template>
      </Textarea>
    `,
  }),
  args: {
    modelValue: "",
    placeholder: "With prefix",
  },
  parameters: {
    docs: {
      source: {
        code: `<Textarea v-model="value" placeholder="With prefix">
  <template #prefix>
    <FontAwesomeIcon :icon="['fas', 'user']" />
  </template>
</Textarea>`,
      },
    },
  },
}

export const WithSuffix: Story = {
  render: (args) => ({
    components: { Textarea, FontAwesomeIcon },
    setup() {
      return { args }
    },
    template: `
      <Textarea v-bind="args">
        <template #suffix>
          <FontAwesomeIcon :icon="['fas', 'magnifying-glass']" />
        </template>
      </Textarea>
    `,
  }),
  args: {
    modelValue: "",
    placeholder: "With suffix",
  },
  parameters: {
    docs: {
      source: {
        code: `<Textarea v-model="value" placeholder="With suffix">
  <template #suffix>
    <FontAwesomeIcon :icon="['fas', 'magnifying-glass']" />
  </template>
</Textarea>`,
      },
    },
  },
}

export const Error: Story = {
  args: {
    modelValue: "",
    placeholder: "Error state",
    state: "error",
  },
}

export const Success: Story = {
  args: {
    modelValue: "",
    placeholder: "Success state",
    state: "success",
  },
}

export const Warning: Story = {
  args: {
    modelValue: "",
    placeholder: "Warning state",
    state: "warning",
  },
}

export const Disabled: Story = {
  args: {
    modelValue: "",
    placeholder: "Disabled",
    disabled: true,
  },
}

export const Readonly: Story = {
  args: {
    modelValue: "Readonly value",
    placeholder: "Readonly",
    readonly: true,
  },
}

export const WithLabelAndHelper: Story = {
  render: (args) => ({
    components: { Textarea },
    setup() {
      return { args }
    },
    template: `
      <Textarea v-bind="args">
        <template #label>
          Label
        </template>
        <template #helper>
          Helper or error message here
        </template>
      </Textarea>
    `,
  }),
  args: {
    modelValue: "",
    placeholder: "With label and helper",
  },
  parameters: {
    docs: {
      source: {
        code: `<Textarea v-model="value" placeholder="With label and helper">
  <template #label>
    Label
  </template>
  <template #helper>
    Helper or error message here
  </template>
</Textarea>`,
      },
    },
  },
}
