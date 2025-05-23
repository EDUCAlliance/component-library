import type { Meta, StoryObj } from "@storybook/vue3"
import Hero1 from "./Hero1.vue"
import Hero2 from "./Hero2.vue"
import Hero3 from "./Hero3.vue"

const meta = {
  title: "Organisms/Hero",
  component: Hero1,
  tags: ["autodocs"],
} satisfies Meta<typeof Hero1>

export default meta
type Story = StoryObj<typeof meta>

export const DarkHeroWithCenteredContent: Story = {
  name: "Dark Hero with Centered Content",
  render: () => ({
    components: { Hero1 },
    template: "<Hero1 />",
  }),
}

export const DarkHeroWithLeftContent: Story = {
  name: "Dark Hero with Left Content",
  render: () => ({
    components: { Hero2 },
    template: "<Hero2 />",
  }),
}

export const LightHeroWithCenteredContent: Story = {
  name: "Light Hero with Centered Content",
  render: () => ({
    components: { Hero3 },
    template: "<Hero3 />",
  }),
}
