import type { Meta, StoryObj } from "@storybook/vue3"
import ButtonGroup from "./ButtonGroup.vue"
import SecondaryButton from "../atoms/buttons/SecondaryButton.vue"

const meta: Meta<typeof ButtonGroup> = {
  title: "Molecules/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  decorators: [
    () => ({
      template: "<div><story /></div>",
    }),
  ],
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

export const Default: Story = {
  render: () => ({
    components: { ButtonGroup, SecondaryButton },
    template: `
      <ButtonGroup>
        <SecondaryButton>Left</SecondaryButton>
        <SecondaryButton>Middle</SecondaryButton>
        <SecondaryButton>Right</SecondaryButton>
      </ButtonGroup>
    `,
  }),
}

/* export const WithIcons: Story = {
  render: () => ({
    components: { ButtonGroup, SecondaryButton },
    template: `
      <ButtonGroup>
        <SecondaryButton icon="ChevronLeft">Previous</SecondaryButton>
        <SecondaryButton icon="RotateCw">Refresh</SecondaryButton>
        <SecondaryButton icon="ChevronRight">Next</SecondaryButton>
      </ButtonGroup>
    `,
  }),
}; */
