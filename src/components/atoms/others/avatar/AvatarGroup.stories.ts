import type { Meta, StoryObj } from "@storybook/vue3"
import type { DefineComponent } from "vue"
import AvatarGroup from "./AvatarGroup.vue"
import Avatar from "./Avatar.vue"
import AvatarImage from "./AvatarImage.vue"
import AvatarFallback from "./AvatarFallback.vue"

interface AvatarGroupStoryProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  max?: number
  class?: string
}

const meta = {
  title: "Atoms/AvatarGroup",
  component: AvatarGroup,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "The size of the avatars in the group",
      defaultValue: "md",
    },
    max: {
      control: "number",
      description: "Maximum number of avatars to show before collapsing",
    },
    class: {
      control: "text",
      description: "Custom CSS classes",
    },
  },
  args: {
    size: "md",
  },
} as Meta<DefineComponent>

export default meta
type Story = StoryObj<AvatarGroupStoryProps>

const AvatarGroupStory = (args: AvatarGroupStoryProps) => ({
  components: { AvatarGroup, Avatar, AvatarImage, AvatarFallback },
  setup() {
    return { args }
  },
  template:
    '<AvatarGroup v-bind="args">' +
    '<Avatar :size="args.size">' +
    '<AvatarImage src="https://cataas.com/cat/1?type=square&width=64" alt="User 1" />' +
    "<AvatarFallback>U1</AvatarFallback>" +
    "</Avatar>" +
    '<Avatar :size="args.size">' +
    '<AvatarImage src="https://cataas.com/cat/2?type=square&width=64" alt="User 2" />' +
    "<AvatarFallback>U2</AvatarFallback>" +
    "</Avatar>" +
    '<Avatar :size="args.size">' +
    '<AvatarImage src="https://cataas.com/cat/3?type=square&width=64" alt="User 3" />' +
    "<AvatarFallback>U3</AvatarFallback>" +
    "</Avatar>" +
    '<Avatar :size="args.size">' +
    '<AvatarImage src="https://cataas.com/cat/4?type=square&width=64" alt="User 4" />' +
    "<AvatarFallback>U4</AvatarFallback>" +
    "</Avatar>" +
    "</AvatarGroup>",
})

export const Base: Story = {
  render: AvatarGroupStory,
}

export const Sizes: Story = {
  render: () => ({
    components: { AvatarGroup, Avatar, AvatarFallback },
    template:
      '<div class="flex flex-col gap-8">' +
      '<AvatarGroup size="xs">' +
      '<Avatar size="xs"><AvatarFallback>XS</AvatarFallback></Avatar>' +
      '<Avatar size="xs"><AvatarFallback>XS</AvatarFallback></Avatar>' +
      '<Avatar size="xs"><AvatarFallback>XS</AvatarFallback></Avatar>' +
      "</AvatarGroup>" +
      '<AvatarGroup size="sm">' +
      '<Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>' +
      '<Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>' +
      '<Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>' +
      "</AvatarGroup>" +
      '<AvatarGroup size="md">' +
      '<Avatar size="md"><AvatarFallback>MD</AvatarFallback></Avatar>' +
      '<Avatar size="md"><AvatarFallback>MD</AvatarFallback></Avatar>' +
      '<Avatar size="md"><AvatarFallback>MD</AvatarFallback></Avatar>' +
      "</AvatarGroup>" +
      '<AvatarGroup size="lg">' +
      '<Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>' +
      '<Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>' +
      '<Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>' +
      "</AvatarGroup>" +
      '<AvatarGroup size="xl">' +
      '<Avatar size="xl"><AvatarFallback>XL</AvatarFallback></Avatar>' +
      '<Avatar size="xl"><AvatarFallback>XL</AvatarFallback></Avatar>' +
      '<Avatar size="xl"><AvatarFallback>XL</AvatarFallback></Avatar>' +
      "</AvatarGroup>" +
      "</div>",
  }),
}
