import type { Meta, StoryObj } from "@storybook/vue3"
import type { DefineComponent } from "vue"
import Avatar from "./Avatar.vue"
import AvatarImage from "./AvatarImage.vue"
import AvatarFallback from "./AvatarFallback.vue"
import AvatarNotification from "./AvatarNotification.vue"

interface AvatarStoryProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  src: string
  alt: string
  fallbackText: string
  showFallback: boolean
  class?: string
}

const meta = {
  title: "Atoms/DataDisplay/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "The size of the avatar",
      defaultValue: "md",
    },
    src: {
      control: "text",
      description: "The source URL of the avatar image",
    },
    alt: {
      control: "text",
      description: "Alt text for the avatar image",
    },
    fallbackText: {
      control: "text",
      description: "Text to show when image fails to load",
    },
    showFallback: {
      control: "boolean",
      description: "Force show fallback instead of image",
    },
    class: {
      control: "text",
      description: "Custom CSS classes",
    },
  },
  args: {
    size: "md",
    src: "https://cataas.com/cat?type=square&width=64",
    alt: "@educ",
    fallbackText: "JD",
    showFallback: false,
    notification: true,
  },
} as Meta<DefineComponent>

export default meta
type Story = StoryObj<AvatarStoryProps>

const AvatarStory = (args: AvatarStoryProps) => ({
  components: { Avatar, AvatarImage, AvatarFallback, AvatarNotification },
  setup() {
    return { args }
  },
  template: `
    <Avatar :size="args.size" :class="args.class">
      <template v-if="!args.showFallback">
        <AvatarImage :src="args.src" :alt="args.alt" />
      </template>
      <AvatarFallback>{{ args.fallbackText }}</AvatarFallback>
      <AvatarNotification v-if="args.notification" />
    </Avatar>
  `,
})

export const Base: Story = {
  render: AvatarStory,
}

export const WithFallback: Story = {
  render: AvatarStory,
  args: {
    src: "invalid-image-url.jpg",
    alt: "Invalid Image",
    fallbackText: "JD",
    showFallback: true,
    size: "md",
  },
}

export const Sizes: Story = {
  render: () => ({
    components: { Avatar, AvatarImage, AvatarFallback },
    template: `
      <div class="flex items-center gap-4">
        <Avatar size="xs">
          <AvatarFallback>XS</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <Avatar size="md">
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>LG</AvatarFallback>
        </Avatar>
        <Avatar size="xl">
          <AvatarFallback>XL</AvatarFallback>
        </Avatar>
      </div>
    `,
  }),
}
