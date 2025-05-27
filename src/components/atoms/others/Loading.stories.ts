import type { Meta, StoryObj } from "@storybook/vue3"
import Loading from "./Loading.vue"

const meta = {
  title: "Atoms/Loading",
  component: Loading,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
**Loading** is a component for indicating loading state of a page or a component.

Custom made for this library.

<div style="display: flex; gap: 8px;">

<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=190-1283&t=Mkp3c5SrIIlNDlq2-4" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />
</a>

</div>
        `,
      },
    },
  },
} satisfies Meta<typeof Loading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
