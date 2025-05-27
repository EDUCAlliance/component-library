import type { Meta, StoryObj } from "@storybook/vue3"
import DescriptionList1 from "./DescriptionList1.vue"
import DescriptionList2 from "./DescriptionList2.vue"
import DescriptionList3 from "./DescriptionList3.vue"

const meta = {
  title: "Organisms/Data/DescriptionList",
  component: DescriptionList1, // Using the first one as base component
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
**Description List** components for displaying detailed information about courses, calls, and research projects.

Three variants are available:
- **Variant 1 (Course Details)**: Comprehensive course information with badges, teacher details, and structured data
- **Variant 2 (Research Calls)**: Call for proposals format with action buttons and institutional information
- **Variant 3 (Project Showcase)**: Project presentation with background header, star ratings, and detailed descriptions

All variants feature:
- Responsive design with mobile-first approach
- Collapsible accordion sections for additional details
- Consistent styling with EDUC brand colors
- Interactive elements like copy buttons and action calls

<div style="display: flex; gap: 8px;">
<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=426-2195" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />
</a>
</div>
        `,
      },
    },
  },
} as Meta<typeof DescriptionList1>

export default meta
type Story = StoryObj<typeof meta>

export const CourseDetails: Story = {
  render: () => ({
    components: { DescriptionList1 },
    template: `
      <div class="min-h-screen p-8">
        <div class="max-w-6xl mx-auto">
          <DescriptionList1 />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Course details variant displaying comprehensive information about academic courses including target audience, university details, contact information, and expandable content sections.",
      },
    },
  },
}

export const ResearchCall: Story = {
  render: () => ({
    components: { DescriptionList2 },
    template: `
      <div class="min-h-screen p-8">
        <div class="max-w-6xl mx-auto">
          <DescriptionList2 />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Research call variant designed for displaying calls for proposals, featuring action buttons, deadline information, document downloads, and list of participating institutions.",
      },
    },
  },
}

export const ProjectShowcase: Story = {
  render: () => ({
    components: { DescriptionList3 },
    template: `
      <div class="min-h-screen p-8">
        <div class="max-w-6xl mx-auto">
          <DescriptionList3 />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Project showcase variant designed for displaying research projects with a visual background header, star ratings, and detailed project information including topics and contact details.",
      },
    },
  },
}
