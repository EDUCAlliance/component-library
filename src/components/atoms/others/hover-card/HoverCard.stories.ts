import type { Meta, StoryObj } from "@storybook/vue3"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "."
import PrimaryButton from "../../buttons/PrimaryButton.vue"

const meta = {
  title: "Atoms/Others/HoverCard",
  component: HoverCard,
  render: (args) => ({
    components: { HoverCard, HoverCardTrigger, HoverCardContent, PrimaryButton },
    setup() {
      return { args }
    },
    template: `
      <HoverCard>
        <HoverCardTrigger>
          <PrimaryButton>Hover me</PrimaryButton>
        </HoverCardTrigger>
        <HoverCardContent>
          {{ args.default }}
        </HoverCardContent>
      </HoverCard>
    `,
  }),
  argTypes: {
    default: { control: "text", description: "Hover card content" },
  },
  args: {
    default: "This is the hover card content",
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
**HoverCard** displays rich content when users hover over a trigger element.\n\nCustom made for this library.\n\n- Useful for showing previews or additional information.\n- Fully accessible and keyboard-navigable.\n\n<div style=\"display: flex; gap: 8px;\">\n\n<a href=\"https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=180-3086&t=Mkp3c5SrIIlNDlq2-4\" target=\"_blank\">\n  <img src=\"http://localhost:6006/src/stories/assets/buttons/figma-reference.png\" alt=\"Figma reference\" />\n</a>\n\n</div>\n        `,
      },
    },
  },
} satisfies Meta<typeof HoverCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
