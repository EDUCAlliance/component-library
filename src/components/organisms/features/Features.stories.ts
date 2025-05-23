import type { Meta, StoryObj } from "@storybook/vue3"
import Features1 from "./Features1.vue"
import Features2 from "./Features2.vue"
import Features3 from "./Features3.vue"
import Features4 from "./Features4.vue"

const meta = {
  title: "Organisms/Features",
  component: Features1,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Features sections provide flexible layouts for showcasing key information, capabilities, and values. The features system includes 4 different layout variants:

- **Features1** – Cards with action buttons
- **Features2** – Simple cards
- **Features3** – Offset layout with title and feature list
- **Features4** – Centered grid layout

Each variant uses the EDUC color system with branded colors for headlines and maintains consistent typography and spacing.

<div style="display: flex; gap: 8px;">

<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=719-3402&t=jGvYKOgZhMwR1W9Y-4" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />
</a>

</div>
`,
      },
    },
  },
} satisfies Meta<typeof Features1>

export default meta

type Story = StoryObj<typeof meta>

export const CardsWithActions: Story = {
  render: () => ({
    components: { Features1 },
    template: `<Features1 />`,
  }),
  parameters: {
    docs: {
      /* description: {
        story: `
**Cards with Action Buttons**

This variant features colorful bordered cards with action buttons. Key characteristics:
- Equal height cards with flex-grow content areas
- Colored borders and shadows (pink, green, violet)
- "Learn more" buttons with FontAwesome arrow icons
- Responsive 3-column grid layout
- Perfect for showcasing key capabilities with call-to-actions
        `,
      }, */
      source: {
        code: `<Features1 />

<!-- Example implementation -->
<section class="py-20">
  <div class="mx-auto max-w-screen-xl px-4">
    <div class="mx-auto mb-14 max-w-[845px] text-center">
      <h2 class="text-black-primary mb-8 text-5xl font-bold">About us</h2>
      <p class="text-black-primary text-lg">
        EDUC offers diverse opportunities for universities, partners, communities, and lifelong
        learners. Discover its key action areas!
      </p>
    </div>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <!-- Feature cards with colored borders and action buttons -->
    </div>
  </div>
</section>`,
      },
    },
  },
}

export const CardsSimple: Story = {
  render: () => ({
    components: { Features2 },
    template: `<Features2 />`,
  }),
  parameters: {
    docs: {
      /* description: {
        story: `
**Simple Cards**

Clean, minimal cards without action buttons. Key characteristics:
- Simple bordered cards with colored accents
- No action buttons - pure content focus
- Responsive 3-column grid layout
- One card with fixed height for visual variety
- Ideal for presenting information without distracting actions
        `,
      }, */
      source: {
        code: `<Features2 />

<!-- Example implementation -->
<section class="py-20">
  <div class="mx-auto max-w-screen-xl px-4">
    <div class="mx-auto mb-14 max-w-[845px] text-center">
      <h2 class="text-black-primary text-5xl font-bold">The next innovative opportunity</h2>
    </div>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <!-- Simple feature cards without actions -->
    </div>
  </div>
</section>`,
      },
    },
  },
}

export const OffsetWithList: Story = {
  render: () => ({
    components: { Features3 },
    template: `<Features3 />`,
  }),
  parameters: {
    docs: {
      /* description: {
        story: `
**Offset Layout with Feature List**

Asymmetric two-column layout with title and feature list. Key characteristics:
- Large title on the left, features grid on the right
- 36px vertical gap between feature rows
- Top-aligned content in grid cells
- 2-column feature grid on desktop
- Perfect for detailed content presentation with clear hierarchy
        `,
      }, */
      source: {
        code: `<Features3 />

<!-- Example implementation -->
<section class="py-20">
  <div class="mx-auto max-w-screen-xl px-4">
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div class="flex max-w-[628px] flex-col">
        <h2 class="text-black-primary text-center text-5xl font-bold">The Charter in Action</h2>
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-9 md:grid-cols-2">
        <!-- Feature items with colored headlines -->
      </div>
    </div>
  </div>
</section>`,
      },
    },
  },
}

export const CenteredGrid: Story = {
  render: () => ({
    components: { Features4 },
    template: `<Features4 />`,
  }),
  parameters: {
    docs: {
      /* description: {
        story: `
**Centered Grid Layout**

Centered layout with comprehensive feature grid. Key characteristics:
- Centered title at the top
- 3-column responsive grid below
- Top-aligned content in all grid cells
- Consistent spacing and typography
- Ideal for comprehensive feature listings and detailed information
        `,
      }, */
      source: {
        code: `<Features4 />

<!-- Example implementation -->
<section class="py-20">
  <div class="mx-auto max-w-screen-xl px-4">
    <div class="mx-auto mb-16 max-w-[628px] text-center">
      <h2 class="text-black-primary text-5xl font-bold">The Charter in Action</h2>
    </div>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <!-- Feature items in 3-column grid -->
    </div>
  </div>
</section>`,
      },
    },
  },
}
