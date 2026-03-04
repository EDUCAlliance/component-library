import type { Meta, StoryObj } from "@storybook/vue3-vite"
import EDUCLogo from "./EDUCLogo.vue"
import EDUCLearningLogo from "./EDUCLearningLogo.vue"
import EDUCCatalogueLogo from "./EDUCCatalogueLogo.vue"
import EDUCOpenupLogo from "./EDUCOpenupLogo.vue"
import EDUCPortalLogo from "./EDUCPortalLogo.vue"
import EuropeLogo from "./EuropeLogo.vue"

const meta = {
  title: "Atoms/Content/Logos",
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
      EuropeLogo,
    },
    template: `
      <div class="p-4">
        <div class="grid grid-cols-2 gap-8 place-items-start">
          <div class="flex flex-col gap-2">
            <span class="text-xs text-muted-foreground">EDUC</span>
            <EDUCLogo class="w-48" />
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-xs text-muted-foreground">Learning</span>
            <EDUCLearningLogo class="w-48" />
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-xs text-muted-foreground">Catalogue</span>
            <EDUCCatalogueLogo class="w-48" />
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-xs text-muted-foreground">Openup</span>
            <EDUCOpenupLogo class="w-48" />
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-xs text-muted-foreground">Portal</span>
            <EDUCPortalLogo class="w-48" />
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-xs text-muted-foreground">European Union</span>
            <EuropeLogo class="w-24" />
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <div class="p-4">
    <div class="grid grid-cols-2 gap-8 place-items-start">
      <div class="flex flex-col gap-2">
        <span class="text-xs text-muted-foreground">EDUC</span>
        <EDUCLogo class="w-48" />
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-xs text-muted-foreground">Learning</span>
        <EDUCLearningLogo class="w-48" />
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-xs text-muted-foreground">Catalogue</span>
        <EDUCCatalogueLogo class="w-48" />
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-xs text-muted-foreground">Openup</span>
        <EDUCOpenupLogo class="w-48" />
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-xs text-muted-foreground">Portal</span>
        <EDUCPortalLogo class="w-48" />
      </div>
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

export const MarkOnly: Story = {
  name: "Mark only (no text)",
  render: () => ({
    components: { EDUCLogo, EDUCPortalLogo },
    template: `
      <div class="flex flex-col gap-6 p-4">
        <div class="flex items-center gap-6">
          <EDUCLogo :fullLogo="false" class="w-20" />
          <span class="text-sm text-muted-foreground">EDUC mark</span>
        </div>
        <div class="flex items-center gap-6">
          <EDUCPortalLogo :fullLogo="false" class="w-20" />
          <span class="text-sm text-muted-foreground">Application logos</span>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Set `fullLogo=false` to hide the wordmark and render only the mark. Supported by `EDUCLogo` and `EDUCPortalLogo`.",
      },
      source: {
        code: `
<template>
  <div class="flex items-center gap-6">
    <EDUCLogo :fullLogo="false" />
    <EDUCPortalLogo :fullLogo="false" />
  </div>
</template>
        `,
      },
    },
  },
}

export const WhiteVariant: Story = {
  name: "White variant (color prop)",
  render: () => ({
    components: {
      EDUCLogo,
      EDUCLearningLogo,
      EDUCCatalogueLogo,
      EDUCOpenupLogo,
      EDUCPortalLogo,
    },
    template: `
      <div class="p-6 rounded-md" style="background:#0b0b0b">
        <div class="grid grid-cols-2 gap-8 place-items-start">
          <div class="flex flex-col gap-2">
            <span class="text-xs text-white-primary/70">EDUC</span>
            <EDUCLogo class="w-44" :color="'#ffffff'" />
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-xs text-white-primary/70">Learning</span>
            <EDUCLearningLogo class="w-44" color="#ffffff" />
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-xs text-white-primary/70">Catalogue</span>
            <EDUCCatalogueLogo class="w-44" color="#ffffff" />
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-xs text-white-primary/70">Openup</span>
            <EDUCOpenupLogo class="w-44" color="#ffffff" />
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-xs text-white-primary/70">Portal</span>
            <EDUCPortalLogo class="w-44" color="#ffffff" />
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Use the `color` prop to set a CSS color (e.g., `#fff`) for a white logo on dark backgrounds.",
      },
      source: {
        code: `
<template>
  <div style="background:#0b0b0b" class="p-6">
    <EDUCLogo color="#ffffff" />
    <EDUCLearningLogo color="#ffffff" />
    <EDUCCatalogueLogo color="#ffffff" />
    <EDUCOpenupLogo color="#ffffff" />
    <EDUCPortalLogo color="#ffffff" />
  </div>
</template>
        `,
      },
    },
  },
}
