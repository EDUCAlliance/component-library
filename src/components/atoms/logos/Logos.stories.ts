import type { Meta, StoryObj } from "@storybook/vue3"
import EDUCLogo from "./EDUCLogo.vue"
import EDUCLearningLogo from "./EDUCLearningLogo.vue"
import EDUCCatalogueLogo from "./EDUCCatalogueLogo.vue"
import EDUCOpenupLogo from "./EDUCOpenupLogo.vue"
import EDUCPortalLogo from "./EDUCPortalLogo.vue"

const meta = {
  title: "Atoms/Logos",
  component: EDUCLogo,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Collection of EDUC logos used across the platform:

- EDUCLogo - Main EDUC logo
- EDUCLearningLogo - Logo for EDUC Learning platform
- EDUCCatalogueLogo - Logo for EDUC Catalogue
- EDUCOpenupLogo - Logo for EDUC Openup
- EDUCPortalLogo - Logo for EDUC Portal

Each logo is available as a Vue component that can be imported and used independently.
`,
      },
    },
  },
} satisfies Meta<typeof EDUCLogo>

export default meta

type Story = StoryObj<typeof meta>

export const AllLogos: Story = {
  render: () => ({
    components: {
      EDUCLogo,
      EDUCLearningLogo,
      EDUCCatalogueLogo,
      EDUCOpenupLogo,
      EDUCPortalLogo,
    },
    template: `
      <div class="flex flex-col gap-8 p-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-lg font-semibold">EDUC Main Logo</h3>
          <EDUCLogo class="w-48" />
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="text-lg font-semibold">EDUC Learning Logo</h3>
          <EDUCLearningLogo class="w-48" />
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="text-lg font-semibold">EDUC Catalogue Logo</h3>
          <EDUCCatalogueLogo class="w-48" />
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="text-lg font-semibold">EDUC Openup Logo</h3>
          <EDUCOpenupLogo class="w-48" />
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="text-lg font-semibold">EDUC Portal Logo</h3>
          <EDUCPortalLogo class="w-48" />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <div class="flex flex-col gap-8 p-4">
    <div class="flex flex-col gap-2">
      <h3 class="text-lg font-semibold">EDUC Main Logo</h3>
      <EDUCLogo class="w-48" />
    </div>

    <div class="flex flex-col gap-2">
      <h3 class="text-lg font-semibold">EDUC Learning Logo</h3>
      <EDUCLearningLogo class="w-48" />
    </div>

    <div class="flex flex-col gap-2">
      <h3 class="text-lg font-semibold">EDUC Catalogue Logo</h3>
      <EDUCCatalogueLogo class="w-48" />
    </div>

    <div class="flex flex-col gap-2">
      <h3 class="text-lg font-semibold">EDUC Openup Logo</h3>
      <EDUCOpenupLogo class="w-48" />
    </div>

    <div class="flex flex-col gap-2">
      <h3 class="text-lg font-semibold">EDUC Portal Logo</h3>
      <EDUCPortalLogo class="w-48" />
    </div>
  </div>
</template>
`,
      },
    },
  },
}

// Individual logo stories
export const MainLogo: Story = {
  render: () => ({
    components: { EDUCLogo },
    template: '<EDUCLogo class="w-48" />',
  }),
}

export const LearningLogo: Story = {
  render: () => ({
    components: { EDUCLearningLogo },
    template: '<EDUCLearningLogo class="w-48" />',
  }),
}

export const CatalogueLogo: Story = {
  render: () => ({
    components: { EDUCCatalogueLogo },
    template: '<EDUCCatalogueLogo class="w-48" />',
  }),
}

export const OpenupLogo: Story = {
  render: () => ({
    components: { EDUCOpenupLogo },
    template: '<EDUCOpenupLogo class="w-48" />',
  }),
}

export const PortalLogo: Story = {
  render: () => ({
    components: { EDUCPortalLogo },
    template: '<EDUCPortalLogo class="w-48" />',
  }),
}
