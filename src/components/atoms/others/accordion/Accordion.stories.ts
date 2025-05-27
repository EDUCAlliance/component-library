import type { Meta, StoryObj } from "@storybook/vue3"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "."

const meta = {
  title: "Atoms/Accordion",
  component: Accordion,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Accordion size (sm: small, md: default, lg: large)",
    },
    type: {
      control: "select",
      options: ["single", "multiple"],
      description:
        "Accordion type (single: only one item can be open at a time, multiple: multiple items can be open at a time)",
    },
    collapsible: {
      control: "boolean",
      description:
        'When type is "single", allows closing content when clicking trigger for an open item. Has no effect if type is "multiple".',
    },
    unmountOnHide: {
      control: "boolean",
      description: "When true, the content will be unmounted when closed.",
    },
    class: { control: "text", description: "Additional classes for the accordion root" },
  },
  render: (args) => ({
    components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
    setup() {
      return { args }
    },
    template: `
      <Accordion v-bind="args" :type="args.type" :unmount-on-hide="args.unmountOnHide" :collapsible="args.collapsible">
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>
            Content for section 1. You can put any content here.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>
            Content for section 2. You can put any content here.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    `,
  }),
  args: {
    size: "md",
    type: "single",
    collapsible: false,
    unmountOnHide: true,
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Accordion** is a vertically stacked set of interactive headings and content panels.

Component is based on Reka UI.

- Supports multiple or single open sections.
- Fully accessible and keyboard-navigable.
- Adjustable size for trigger font and content padding.
- Can be controlled or uncontrolled.

<div style="display: flex; gap: 8px;">
<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=180-3086&t=Mkp3c5SrIIlNDlq2-4" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />
</a>
<a href="https://reka-ui.com/docs/components/accordion" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/full-documentation.png" alt="Reka UI reference" />
</a>
</div>
        `,
      },
    },
  },
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {}

export const Large: Story = {
  args: {
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        story: "Large variant with bigger trigger font and content padding.",
      },
    },
  },
}
