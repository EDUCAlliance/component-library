import type { Meta, StoryObj } from "@storybook/vue3"
import Table from "./Table.vue"

const columns = [
  { key: "treasury", label: "King's Treasury" },
  { key: "happiness", label: "People's happiness" },
]

const rows = [
  { treasury: "Empty", happiness: "Overflowing" },
  { treasury: "Modest", happiness: "Satisfied" },
  { treasury: "Empty", happiness: "Overflowing" },
]

const meta = {
  title: "Atoms/DataDisplay/Table",
  component: Table,
  render: (args) => ({
    components: { Table },
    setup() {
      return { args }
    },
    template: `<Table v-bind="args" />`,
  }),
  argTypes: {
    columns: { control: false, description: "Array of column definitions (key, label)." },
    rows: { control: false, description: "Array of row data objects." },
    color: {
      control: "select",
      options: ["yellow", "pink", "green", "orange", "violet"],
      description: "The color of the table's top border.",
    },
  },
  args: {
    columns,
    rows,
    color: "yellow",
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const Yellow: Story = {
  args: { color: "yellow" },
}
export const Pink: Story = {
  args: { color: "pink" },
}
export const Green: Story = {
  args: { color: "green" },
}
export const Orange: Story = {
  args: { color: "orange" },
}
export const Violet: Story = {
  args: { color: "violet" },
}
