import type { Meta, StoryObj } from "@storybook/vue3-vite"
import TagsInput from "./TagsInput.vue"
import { ref } from "vue"

const meta = {
  title: "Atoms/Forms/TagsInput",
  component: TagsInput,
  tags: ["autodocs"],
  args: {
    placeholder: "Select items",
    options: [
      { value: "item-1", label: "Item 1" },
      { value: "item-2", label: "Item 2" },
      { value: "item-3", label: "Item 3" },
    ],
  },
  parameters: {
    docs: {
      description: {
        component:
          "Multi-select built on top of Reka UI's Select, rendering selected values as badges and using checkboxes in the list.",
      },
    },
  },
  render: (args) => ({
    components: { TagsInput },
    setup() {
      const value = ref<string[]>(["item-2"])
      return { args, value }
    },
    template: `
      <TagsInput v-model="value" v-bind="args" />
      <div class="mt-4 text-xs text-black-tertiary">Value: {{ value }}</div>
    `,
  }),
} satisfies Meta<typeof TagsInput>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
