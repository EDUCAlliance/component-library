import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import MultiSelect, { type MultiSelectOption } from "./MultiSelect.vue"

const FRUITS: MultiSelectOption[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
]

const DISCIPLINES: MultiSelectOption[] = [
  { value: "computer-science", label: "Computer Science" },
  { value: "mathematics", label: "Mathematics" },
  { value: "physics", label: "Physics" },
  { value: "chemistry", label: "Chemistry" },
  { value: "biology", label: "Biology" },
  { value: "economics", label: "Economics" },
  { value: "law", label: "Law" },
  { value: "medicine", label: "Medicine" },
  { value: "engineering", label: "Engineering" },
  { value: "architecture", label: "Architecture" },
  { value: "arts", label: "Arts" },
  { value: "history", label: "History" },
]

const AUDIENCE: MultiSelectOption[] = [
  { value: "ba", label: "BA" },
  { value: "ba-year-1", label: "Bach. students year 1" },
  { value: "ba-year-2", label: "Bach. students year 2" },
  { value: "ba-year-3", label: "Bach. students year 3" },
  { value: "ma", label: "MA" },
  { value: "phd", label: "PhD" },
]

const meta: Meta<typeof MultiSelect> = {
  title: "Molecules/Forms/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
**MultiSelect** is a multi-selection dropdown with an integrated text search and a confirmation button.

Designed for filter-heavy UIs (such as course catalogues) where users need to select multiple options before applying. Unlike a basic \`<Select multiple>\`, this component:

- Keeps the dropdown **open** while the user selects
- Allows **text search** when the option list is long (> 5 items)
- Requires an explicit **Done** click to emit the new value — enabling "send all filters at once" UX
- Stores a \`pendingValue\` internally so dismissing without confirming discards the edit

### Usage
\`\`\`vue
<script setup lang="ts">
import { MultiSelect } from "@EDUCAlliance/component-library"
import { ref } from "vue"

const selected = ref<string[]>([])
const options = [
  { value: "cs", label: "Computer Science" },
  { value: "math", label: "Mathematics" },
]
<\/script>

<template>
  <MultiSelect
    v-model="selected"
    :options="options"
    label="Discipline"
    placeholder="All"
  />
</template>
\`\`\`

### Events
| Event | Payload | Description |
|---|---|---|
| \`update:modelValue\` | \`string[]\` | Emitted on Done click |
| \`confirm\` | \`string[]\` | Same as above, for explicit confirm handling |
`,
      },
    },
  },
  argTypes: {
    placeholder: { control: "text", description: "Trigger label when nothing selected" },
    label: { control: "text", description: "Label shown above the trigger" },
    searchPlaceholder: {
      control: "text",
      description: "Placeholder text for the search input (shown when options > 5)",
    },
    disabled: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof MultiSelect>

export const Base: Story = {
  render: (args) => ({
    components: { MultiSelect },
    setup() {
      const selected = ref<string[]>([])
      return { args, selected }
    },
    template: `
      <div class="flex flex-col gap-4">
        <MultiSelect
          v-model="selected"
          :options="args.options"
          :placeholder="args.placeholder"
          :label="args.label"
          :disabled="args.disabled"
        />
        <p class="text-sm text-black-tertiary">Selected: {{ selected.join(', ') || '—' }}</p>
      </div>
    `,
  }),
  args: {
    options: FRUITS,
    placeholder: "All",
    label: "Fruit",
  },
}

export const AudienceTargeted: Story = {
  name: "Audience Targeted (Catalogue example)",
  render: () => ({
    components: { MultiSelect },
    setup() {
      const selected = ref<string[]>([])
      return { selected, AUDIENCE }
    },
    template: `
      <div class="flex flex-col gap-4">
        <MultiSelect
          v-model="selected"
          :options="AUDIENCE"
          label="Audience targeted"
          placeholder="All"
        />
        <p class="text-sm text-black-tertiary">Applied: {{ selected.join(', ') || '—' }}</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Replicates the use-case from the catalogue GitHub issue — target audience selection with a 'Done' button.",
      },
    },
  },
}

export const WithSearch: Story = {
  name: "With Search (Many options)",
  render: () => ({
    components: { MultiSelect },
    setup() {
      const selected = ref<string[]>([])
      return { selected, DISCIPLINES }
    },
    template: `
      <div class="flex flex-col gap-4">
        <MultiSelect
          v-model="selected"
          :options="DISCIPLINES"
          label="Discipline"
          placeholder="All"
          searchPlaceholder="Search disciplines..."
        />
        <p class="text-sm text-black-tertiary">Applied: {{ selected.join(', ') || '—' }}</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "When there are more than 5 options, the search input is automatically shown inside the dropdown.",
      },
    },
  },
}

export const Preselected: Story = {
  render: () => ({
    components: { MultiSelect },
    setup() {
      const selected = ref<string[]>(["apple", "cherry"])
      return { selected, FRUITS }
    },
    template: `
      <div class="flex flex-col gap-4">
        <MultiSelect
          v-model="selected"
          :options="FRUITS"
          label="Fruit"
          placeholder="All"
        />
        <p class="text-sm text-black-tertiary">Applied: {{ selected.join(', ') || '—' }}</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "Demonstrates component with pre-selected values passed via `v-model`.",
      },
    },
  },
}

export const Disabled: Story = {
  render: () => ({
    components: { MultiSelect },
    template: `
      <MultiSelect
        :model-value="['apple']"
        :options="[{ value: 'apple', label: 'Apple' }, { value: 'banana', label: 'Banana' }]"
        label="Fruit"
        disabled
      />
    `,
  }),
}
