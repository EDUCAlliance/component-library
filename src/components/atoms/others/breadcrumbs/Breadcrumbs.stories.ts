import type { Meta, StoryObj } from "@storybook/vue3"
import { Breadcrumbs, BreadcrumbsArrow, BreadcrumbsLink, BreadcrumbsIcon } from "."

const meta = {
  title: "Atoms/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    class: {
      control: "text",
      description: "Additional classes for the breadcrumbs.",
    },
  },
  render: (args) => ({
    components: { Breadcrumbs, BreadcrumbsArrow, BreadcrumbsLink, BreadcrumbsIcon },
    setup() {
      return { args }
    },
    template: `
      <Breadcrumbs :class="args.class">
        <BreadcrumbsLink href="#">
          <BreadcrumbsIcon>
            <font-awesome-icon :icon="['fas', 'house']" class="text-[16px]" />
          </BreadcrumbsIcon>
        </BreadcrumbsLink>
        <BreadcrumbsArrow />
        <BreadcrumbsLink href="#" active>Projects</BreadcrumbsLink>
        <BreadcrumbsArrow />
        <BreadcrumbsLink href="#">Lorem ipsum</BreadcrumbsLink>
      </Breadcrumbs>
    `,
  }),
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Breadcrumbs** is a component for navigation.

Custom made for this library.

- Fully accessible and keyboard-navigable.
- Custom icons can be used.

<div style="display: flex; gap: 8px;">

<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=194-1464&t=Mkp3c5SrIIlNDlq2-4" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />
</a>

</div>
        `,
      },
    },
  },
} satisfies Meta<typeof Breadcrumbs>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {}
