import type { Meta, StoryObj } from "@storybook/vue3"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "."
import { PrimaryButton } from "../../../atoms/buttons"

const meta = {
  title: "Atoms/Overlays/Tooltip",
  component: Tooltip,
  render: (args) => ({
    components: { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, PrimaryButton },
    setup() {
      return { args }
    },
    template: `
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <PrimaryButton>Hover me</PrimaryButton>
          </TooltipTrigger>
          <TooltipContent>
            {{ args.default }}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    `,
  }),
  argTypes: {
    default: { control: "text", description: "Tooltip content" },
  },
  args: {
    default: "This is the tooltip content",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
