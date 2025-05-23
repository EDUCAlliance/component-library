import type { Meta, StoryObj } from "@storybook/vue3"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import ItemCard from "./ItemCard.vue"

const meta = {
  title: "Atoms/ItemCard",
  component: ItemCard,
  render: (args) => ({
    components: { ItemCard, FontAwesomeIcon },
    setup() {
      return { args }
    },
    template: `
      <ItemCard v-bind="args">
        <template #icon>
          <font-awesome-icon :icon="['fas', 'book']" />
        </template>
        {{ args.default }}
      </ItemCard>
    `,
  }),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
**ItemCard** is a component used to display a list of items with customizable styling and layout.

Component is custom made for this library.

- Customizable icon/text and color
- Supports colors

<div style="display: flex; gap: 8px;">
<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=601-4865&t=WyOxhfBthfxdEtLs-4" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />
</a>
</div>

        `,
      },
    },
  },
  argTypes: {
    default: { control: "text", description: "The main content of the card." },
    color: {
      control: "select",
      options: ["yellow", "pink", "green", "orange", "violet"],
      description: "The color of the icon section.",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ItemCard>

export default meta
type Story = StoryObj<typeof meta>

export const Yellow: Story = {
  args: {
    default: "Mathematics",
    color: "yellow",
  },
}

export const Pink: Story = {
  args: {
    default: "Literature",
    color: "pink",
  },
}

export const Green: Story = {
  args: {
    default: "Biology",
    color: "green",
  },
}

export const Orange: Story = {
  args: {
    default: "Chemistry",
    color: "orange",
  },
}

export const Violet: Story = {
  args: {
    default: "Physics",
    color: "violet",
  },
}
