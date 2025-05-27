import type { Meta, StoryObj } from "@storybook/vue3"
import Actions1 from "./Actions1.vue"
import Actions2 from "./Actions2.vue"

const meta = {
  title: "Atoms/Actions/Actions",
  component: Actions1,
  tags: ["autodocs"],
} satisfies Meta<typeof Actions1>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleActions: Story = {
  name: "Simple Actions Layout",
  render: () => ({
    components: { Actions1 },
    template: "<Actions1 />",
  }),
}

export const ColorfulActions: Story = {
  name: "Colorful Actions Layout",
  render: () => ({
    components: { Actions2 },
    template: "<Actions2 />",
  }),
}
