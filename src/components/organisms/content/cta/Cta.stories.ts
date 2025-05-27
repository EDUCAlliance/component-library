import type { Meta, StoryObj } from "@storybook/vue3"
import Cta1 from "./Cta1.vue"
import Cta2 from "./Cta2.vue"
import Cta3 from "./Cta3.vue"

const meta = {
  title: "Organisms/Content/CTA",
  component: Cta1,
  tags: ["autodocs"],
} satisfies Meta<typeof Cta1>

export default meta
type Story = StoryObj<typeof meta>

export const DarkCtaWithMultipleButtons: Story = {
  name: "Centered CTA with Group Selection",
  render: () => ({
    components: { Cta1 },
    template: "<Cta1 />",
  }),
}

export const GreenCtaWithSingleButton: Story = {
  name: "Two Column CTA with Single Button",
  render: () => ({
    components: { Cta2 },
    template: "<Cta2 />",
  }),
}

export const YellowCtaWithBackground: Story = {
  name: "Left Aligned CTA with Shaped Background",
  render: () => ({
    components: { Cta3 },
    template: "<Cta3 />",
  }),
}
