import type { Meta, StoryObj } from "@storybook/vue3"
import Loading from "./Loading.vue"

const meta = {
  title: "Atoms/Others/Loading",
  component: Loading,
  tags: ["autodocs"],
} satisfies Meta<typeof Loading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
