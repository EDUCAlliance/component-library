import type { Meta, StoryObj } from "@storybook/vue3"
import DescriptionList1 from "./DescriptionList1.vue"

const meta = {
  title: "Organisms/Description List",
  component: DescriptionList1,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} as Meta<typeof DescriptionList1>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { DescriptionList1 },
    template: `
      <div class="bg-gray-50 min-h-screen py-8">
        <DescriptionList1 />
      </div>
    `,
  }),
}

export const CourseCard: Story = {
  render: () => ({
    components: { DescriptionList1 },
    template: `
      <div class="bg-gray-50 min-h-screen py-8">
        <DescriptionList1 />
      </div>
    `,
  }),
}
