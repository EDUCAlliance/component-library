import type { Meta, StoryObj } from "@storybook/vue3-vite"
import Features1 from "./Features1.vue"
import Features2 from "./Features2.vue"
import Features3 from "./Features3.vue"
import Features4 from "./Features4.vue"

const meta = {
  title: "Organisms/Content/Features",
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
        code: `
<section class="py-20">
  <div class="mx-auto max-w-screen-xl px-4">
    <!-- Header Section -->
    <div class="mx-auto mb-14 max-w-[845px] text-center">
      <h2 class="text-black-primary mb-8 text-5xl font-bold">About us</h2>
      <p class="text-black-primary text-lg">
        EDUC offers diverse opportunities for universities, partners, communities, and lifelong
        learners. Discover its key action areas!
      </p>
    </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <!-- Feature Card 1 -->
      <div
        class="border-pink-primary shadow-pink-primary/10 bg-white-primary flex flex-col rounded-xl border p-6 shadow-lg"
      >
        <div class="flex-grow">
          <h3 class="text-pink-primary mb-4 text-2xl font-bold">Address global challenges</h3>
          <p class="text-black-primary text-base">
            Students, researchers, and staff build a network of shared knowledge and values
            through digital tools and face-to-face interaction, while connecting local
            environments to address global challenges.
          </p>
        </div>
        <div class="pt-6">
          <button
            class="text-pink-primary inline-flex items-center gap-2 text-base font-medium hover:underline"
          >
            Learn more
            <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-3" />
          </button>
        </div>
      </div>

      <!-- Feature Card 2 -->
      <div
        class="border-green-primary shadow-green-primary/10 bg-white-primary flex flex-col rounded-xl border p-6 shadow-lg"
      >
        <div class="flex-grow">
          <h3 class="text-green-primary mb-4 text-2xl font-bold">Foster diversity</h3>
          <p class="text-black-primary text-base">
            We envision inclusive, equitable, and sustainable institutions. EDUC Alliance fosters
            diversity, values uniqueness, and adapts to a dynamic educational landscape.
          </p>
        </div>
        <div class="pt-6">
          <button
            class="text-green-primary inline-flex items-center gap-2 text-base font-medium hover:underline"
          >
            Learn more
            <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-3" />
          </button>
        </div>
      </div>

      <!-- Feature Card 3 -->
      <div
        class="border-violet-primary shadow-violet-primary/10 bg-white-primary flex flex-col rounded-xl border p-6 shadow-lg"
      >
        <div class="flex-grow">
          <h3 class="text-violet-primary mb-4 text-2xl font-bold">Inclusion & gender equality</h3>
          <p class="text-black-primary text-base">
            Inclusion and gender equality are central to our mission. Each institution has plans
            to drive change, ensuring practices welcome underrepresented groups and foster
            positive encounters.
          </p>
        </div>
        <div class="pt-6">
          <button
            class="text-violet-primary inline-flex items-center gap-2 text-base font-medium hover:underline"
          >
            Learn more
            <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-3" />
          </button>
        </div>
      </div>
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
        code: `
<section class="py-20">
  <div class="mx-auto max-w-screen-xl px-4">
    <!-- Header Section -->
    <div class="mx-auto mb-14 max-w-[845px] text-center">
      <h2 class="text-black-primary text-5xl font-bold">The next innovative opportunity</h2>
    </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <!-- Feature Card 1 -->
      <div
        class="border-pink-primary shadow-pink-primary/10 bg-white-primary flex flex-col rounded-xl border p-6 shadow-lg"
      >
        <h3 class="text-pink-primary mb-4 text-2xl font-bold">Explore Cutting-Edge Innovation</h3>
        <p class="text-black-primary text-base">
          Discover groundbreaking research and innovation opportunities from EDUC Alliance
          members.
        </p>
      </div>

      <!-- Feature Card 2 -->
      <div
        class="border-green-primary shadow-green-primary/10 bg-white-primary flex flex-col rounded-xl border p-6 shadow-lg"
      >
        <h3 class="text-green-primary mb-4 text-2xl font-bold">
          Connect with a Dynamic Ecosystem
        </h3>
        <p class="text-black-primary text-base">
          Join a vibrant network of innovators across partner universities in a constantly
          evolving environment.
        </p>
      </div>

      <!-- Feature Card 3 -->
      <div
        class="bg-white-primary border-violet-primary shadow-violet-primary/10 flex h-[200px] flex-col rounded-xl border p-6 shadow-lg"
      >
        <h3 class="text-violet-primary mb-4 text-2xl font-bold">
          Drive the Future of Innovation
        </h3>
        <p class="text-black-primary text-base">
          Take the lead — enter the platform and be the driver of the next innovative opportunity.
        </p>
      </div>
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
        code: `
<section class="py-20">
  <div class="mx-auto max-w-screen-xl px-4">
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <!-- Title Section -->
      <div class="flex max-w-[628px] flex-col">
        <h2 class="text-black-primary text-5xl font-bold">The Charter in Action</h2>
      </div>

      <!-- Features List -->
      <div class="grid grid-cols-1 gap-x-6 gap-y-9 md:grid-cols-2">
        <!-- Feature Item 1 -->
        <div class="flex flex-col justify-start gap-4">
          <h3 class="text-pink-primary text-xl font-bold">Basic Values and Principles</h3>
          <p class="text-black-primary text-base">
            We are committed to values such as diversity, inclusion, equity, and sustainability.
          </p>
        </div>

        <!-- Feature Item 2 -->
        <div class="flex flex-col justify-start gap-4">
          <h3 class="text-green-primary text-xl font-bold">
            Composition and Functional Description
          </h3>
          <p class="text-black-primary text-base">
            Our governing boards and individual roles are clearly defined.
          </p>
        </div>

        <!-- Feature Item 3 -->
        <div class="flex flex-col justify-start gap-4">
          <h3 class="text-violet-primary text-xl font-bold">Decision-Making Procedures</h3>
          <p class="text-black-primary text-base">
            Transparent processes guide our decision-making.
          </p>
        </div>

        <!-- Feature Item 4 -->
        <div class="flex flex-col justify-start gap-4">
          <h3 class="text-orange-primary text-xl font-bold">Communication and Data Management</h3>
          <p class="text-black-primary text-base">
            We prioritize efficient communication and secure data storage.
          </p>
        </div>

        <!-- Feature Item 5 -->
        <div class="flex flex-col justify-start gap-4">
          <h3 class="text-pink-primary text-xl font-bold">Meeting Management</h3>
          <p class="text-black-primary text-base">
            We conduct meetings in harmony with our environmental sustainability goals.
          </p>
        </div>

        <!-- Feature Item 6 -->
        <div class="flex flex-col justify-start gap-4">
          <h3 class="text-green-primary text-xl font-bold">
            Charter Revision and Conflict Management
          </h3>
          <p class="text-black-primary text-base">
            We have established charter updates and resolution procedures.
          </p>
        </div>
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
        code: `
<section class="py-20">
  <div class="mx-auto max-w-screen-xl px-4">
    <!-- Header Section -->
    <div class="mx-auto mb-16 max-w-[628px] text-center">
      <h2 class="text-black-primary text-5xl font-bold">The Charter in Action</h2>
    </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <!-- Feature Item 1 -->
      <div class="flex flex-col justify-start gap-4">
        <h3 class="text-pink-primary text-xl font-bold">Basic Values and Principles</h3>
        <p class="text-black-primary text-base">
          We are committed to values such as diversity, inclusion, equity, and sustainability.
        </p>
      </div>

      <!-- Feature Item 2 -->
      <div class="flex flex-col justify-start gap-4">
        <h3 class="text-green-primary text-xl font-bold">
          Composition and Functional Description
        </h3>
        <p class="text-black-primary text-base">
          Our governing boards and individual roles are clearly defined.
        </p>
      </div>

      <!-- Feature Item 3 -->
      <div class="flex flex-col justify-start gap-4">
        <h3 class="text-violet-primary text-xl font-bold">Decision-Making Procedures</h3>
        <p class="text-black-primary text-base">
          Transparent processes guide our decision-making.
        </p>
      </div>

      <!-- Feature Item 4 -->
      <div class="flex flex-col justify-start gap-4">
        <h3 class="text-orange-primary text-xl font-bold">Communication and Data Management</h3>
        <p class="text-black-primary text-base">
          We prioritize efficient communication and secure data storage.
        </p>
      </div>

      <!-- Feature Item 5 -->
      <div class="flex flex-col justify-start gap-4">
        <h3 class="text-pink-primary text-xl font-bold">Meeting Management</h3>
        <p class="text-black-primary text-base">
          We conduct meetings in harmony with our environmental sustainability goals.
        </p>
      </div>

      <!-- Feature Item 6 -->
      <div class="flex flex-col justify-start gap-4">
        <h3 class="text-green-primary text-xl font-bold">
          Charter Revision and Conflict Management
        </h3>
        <p class="text-black-primary text-base">
          We have established charter updates and resolution procedures.
        </p>
      </div>
    </div>
  </div>
</section>`,
      },
    },
  },
}
