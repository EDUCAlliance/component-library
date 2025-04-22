import { expect, userEvent, within } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/vue3'

import ButtonComponent from './ButtonComponent.vue'

const meta = {
  title: 'Elements/Button',
  component: ButtonComponent,
  render: () => ({
    components: { ButtonComponent },
    template: '<button-component />',
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}
