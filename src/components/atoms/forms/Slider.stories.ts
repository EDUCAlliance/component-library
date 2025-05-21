import type { Meta, StoryObj } from "@storybook/vue3"
import Slider from "./Slider.vue"

const meta = {
  title: "Atoms/Forms/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Slider** allows users to select a value or range from a given interval.

Component is based on Reka UI.

- Fully accessible and keyboard-navigable.
- Controlled or uncontrolled mode.
- Supports multiple thumbs for range selection.
- Supports colors.
- Supports different orientations.

<div style="display: flex; gap: 8px;">

<a href="https://reka-ui.com/docs/components/slider" target="_blank">
  <img src="http://localhost:5173/buttons/full-documentation.png" alt="Full docs" />
</a>

<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=187-1964&t=R3Tvkfrb8NeJ4SG6-4" target="_blank">
  <img src="http://localhost:5173/buttons/figma-reference.png" alt="Figma reference" />
</a>

</div>
      `,
      },
      /* source: {
        code: `<Slider :default-value="[33]" :max="100" :step="1" class="w-[300px]" />`,
      }, */
    },
  },
  argTypes: {
    defaultValue: {
      control: { type: "object" },
      description: "The initial value of the slider.",
    },
    max: {
      control: { type: "number" },
      description: "The maximum value of the slider.",
    },
    min: {
      control: { type: "number" },
      description: "The minimum value of the slider.",
    },
    step: {
      control: { type: "number" },
      description: "The step increment of the slider.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the slider is disabled.",
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "The orientation of the slider.",
    },
    class: {
      control: { type: "text" },
      description: "Custom classes for the slider.",
    },
    color: {
      control: { type: "select" },
      options: ["yellow", "pink", "green", "orange", "violet", "black"],
      description: "Color of the slider.",
    },
  },
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: [33],
    max: 100,
    step: 1,
    class: "w-[300px]",
  },
  render: (args) => ({
    components: { Slider },
    setup() {
      return { args }
    },
    template: `<Slider v-bind="args" />`,
  }),
  parameters: {
    docs: {
      source: {
        code: `<Slider :default-value="[33]" :max="100" :step="1" class="w-[300px]" />`,
      },
    },
  },
}

export const Vertical: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    orientation: "vertical",
    class: "h-[200px]",
  },
  render: (args) => ({
    components: { Slider },
    setup() {
      return { args }
    },
    template: `<Slider v-bind="args" />`,
  }),
  parameters: {
    docs: {
      source: {
        code: `<Slider :default-value="[50]" :max="100" :step="1" orientation="vertical" class="h-[200px]" />`,
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: [70],
    max: 100,
    step: 1,
    disabled: true,
    class: "w-[300px]",
  },
  render: (args) => ({
    components: { Slider },
    setup() {
      return { args }
    },
    template: `<Slider v-bind="args" />`,
  }),
  parameters: {
    docs: {
      source: {
        code: `<Slider disabled :min="0" :max="100" :step="1" defaultValue="[70]" />`,
      },
    },
  },
}

export const Colors: Story = {
  render: () => ({
    components: { Slider },
    setup() {
      const colors = ["yellow", "pink", "green", "orange", "violet", "black"]
      return { colors }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; width: 300px;">
        <div v-for="color in colors" :key="color">
          <div style="margin-bottom: 8px; font-weight: bold; text-transform: capitalize;">{{ color }}</div>
          <Slider :default-value="[50]" :max="100" :step="1" :color="color" />
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<Slider :default-value="[50]" :max="100" :step="1" color="yellow" />`,
      },
    },
  },
}
