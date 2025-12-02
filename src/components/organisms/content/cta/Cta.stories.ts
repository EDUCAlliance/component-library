import type { Meta, StoryObj } from "@storybook/vue3-vite"
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
    parameters: {
      docs: {
        source: {
          code: `
<div class="text-white-primary relative py-32">
  <BackgroundImage src="/assets/example-image-bg.jpg" alt="Hero" />
  <div class="bg-black-primary/30 absolute inset-0" />
  <div class="relative container mx-auto px-4">
    <div class="flex flex-col items-center justify-center gap-12">
      <h2 class="max-w-3xl text-center text-5xl font-bold text-balance">
        Discover what EDUC offers! Tell us some more about yourself.
      </h2>
      <div class="flex gap-4">
        <SoftButton color="violet">I am a Student</SoftButton>
        <SoftButton color="orange">I am a Researcher</SoftButton>
        <SoftButton color="pink">I am a Teacher</SoftButton>
      </div>
    </div>
  </div>
</div>
  `,
        },
      },
    },
  }),
}

export const GreenCtaWithSingleButton: Story = {
  name: "Two Column CTA with Single Button",
  render: () => ({
    components: { Cta2 },
    template: "<Cta2 />",
  }),
  parameters: {
    docs: {
      source: {
        code: `<div class="text-white-primary bg-green-primary relative py-20">
    <div class="relative container mx-auto px-4">
      <div class="flex items-center justify-between gap-8">
        <h2 class="max-w-3xl text-5xl font-bold text-balance">
          Contact us and meet the EDUC Team!
        </h2>
        <SoftButton color="violet">More information & EDUC Team</SoftButton>
      </div>
    </div>
  </div>
  `,
      },
    },
  },
}

export const YellowCtaWithBackground: Story = {
  name: "Left Aligned CTA with Shaped Background",
  render: () => ({
    components: { Cta3 },
    template: "<Cta3 />",
  }),
  parameters: {
    docs: {
      source: {
        code: ` <div class="text-black-primary bg-yellow-primary relative py-20">
    <BackgroundImage src="/assets/CTA-banner-2.svg" alt="Hero" />
    <div class="relative container mx-auto px-4">
      <div class="flex flex-col items-start gap-8">
        <h2 class="max-w-3xl text-5xl font-bold text-balance">
          Contact us and meet the EDUC Team!
        </h2>
        <SoftButton color="violet">More information & EDUC Team</SoftButton>
      </div>
    </div>
  </div>
`,
      },
    },
  },
}
