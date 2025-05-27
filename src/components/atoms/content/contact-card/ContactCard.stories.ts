import type { Meta, StoryObj } from "@storybook/vue3"
import { ContactCard, ContactCardHeader, ContactCardContact } from "."
import { Avatar, AvatarImage, AvatarFallback } from "../../data-display/avatar"

type ContactCardColor = "yellow" | "pink" | "green" | "orange" | "violet"

interface StoryProps {
  color?: ContactCardColor
  customAvatar?: boolean
  avatarSrc?: string
  avatarFallback?: string
  customHeader?: boolean
  name?: string
  organization?: string
  role?: string
  customContact?: boolean
  email?: string
}

const meta = {
  title: "Atoms/Content/ContactCard",
  component: ContactCard,
  render: (args: StoryProps) => ({
    components: {
      ContactCard,
      ContactCardHeader,
      ContactCardContact,
      Avatar,
      AvatarImage,
      AvatarFallback,
    },
    setup() {
      return { args }
    },
    template: `
      <ContactCard :color="args.color">
        <template v-if="args.customAvatar" #avatar>
          <Avatar size="xl" class="h-48 w-48">
            <AvatarImage :src="args.avatarSrc" />
            <AvatarFallback>{{ args.avatarFallback }}</AvatarFallback>
          </Avatar>
        </template>
        <template v-if="args.customHeader" #header>
          <ContactCardHeader
            :name="args.name"
            :organization="args.organization"
            :role="args.role"
          />
        </template>
        <template v-if="args.customContact" #contact>
          <ContactCardContact :email="args.email" />
        </template>
      </ContactCard>
    `,
  }),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
**ContactCard** is a component used to display user information with customizable styling and layout.

Component is custom made for this library.

- Customizable avatar, header and contact
- Supports colors

<div style="display: flex; gap: 8px;">
<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=486-2380&t=WyOxhfBthfxdEtLs-4" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />
</a>
</div>
        `,
      },
    },
  },
  argTypes: {
    color: {
      control: "select",
      options: ["yellow", "pink", "green", "orange", "violet"],
      description: "The color theme of the contact card.",
    },
    customAvatar: {
      control: "boolean",
      description: "Whether to use custom avatar settings.",
    },
    avatarSrc: {
      control: "text",
      description: "The source URL for the avatar image.",
      if: { arg: "customAvatar", truthy: true },
    },
    avatarFallback: {
      control: "text",
      description: "Fallback text for the avatar when image fails to load.",
      if: { arg: "customAvatar", truthy: true },
    },
    customHeader: {
      control: "boolean",
      description: "Whether to use custom header settings.",
    },
    name: {
      control: "text",
      description: "The name of the contact.",
      if: { arg: "customHeader", truthy: true },
    },
    organization: {
      control: "text",
      description: "The organization of the contact.",
      if: { arg: "customHeader", truthy: true },
    },
    role: {
      control: "text",
      description: "The role of the contact.",
      if: { arg: "customHeader", truthy: true },
    },
    customContact: {
      control: "boolean",
      description: "Whether to use custom contact settings.",
    },
    email: {
      control: "text",
      description: "The email address of the contact.",
      if: { arg: "customContact", truthy: true },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContactCard>

export default meta
type Story = StoryObj<StoryProps>

export const Default: Story = {
  args: {
    color: "pink",
  },
}

export const Yellow: Story = {
  args: {
    color: "yellow",
    customAvatar: true,
    avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    avatarFallback: "FD",
    customHeader: true,
    name: "Felix Developer",
    organization: "Tech Solutions Inc.",
    role: "Senior Developer",
    customContact: true,
    email: "felix@tech-solutions.com",
  },
}

export const Pink: Story = {
  args: {
    color: "pink",
    customAvatar: true,
    avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
    avatarFallback: "AM",
    customHeader: true,
    name: "Alice Manager",
    organization: "Design Studio",
    role: "Project Manager",
    customContact: true,
    email: "alice@design-studio.com",
  },
}

export const Green: Story = {
  args: {
    color: "green",
    customAvatar: true,
    avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
    avatarFallback: "BD",
    customHeader: true,
    name: "Bob Designer",
    organization: "Creative Agency",
    role: "UI/UX Designer",
    customContact: true,
    email: "bob@creative-agency.com",
  },
}

export const Orange: Story = {
  args: {
    color: "orange",
    customAvatar: true,
    avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carol",
    avatarFallback: "CE",
    customHeader: true,
    name: "Carol Engineer",
    organization: "Innovation Labs",
    role: "Software Engineer",
    customContact: true,
    email: "carol@innovation-labs.com",
  },
}

export const Violet: Story = {
  args: {
    color: "violet",
    customAvatar: true,
    avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    avatarFallback: "DL",
    customHeader: true,
    name: "David Lead",
    organization: "Tech Institute",
    role: "Team Lead",
    customContact: true,
    email: "david@tech-institute.com",
  },
}

export const CustomContent: Story = {
  render: () => ({
    components: { ContactCard, Avatar, AvatarImage, AvatarFallback },
    template: `
      <ContactCard color="green">
        <template #avatar>
          <Avatar size="xl" class="h-48 w-48">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Custom" />
            <AvatarFallback>CC</AvatarFallback>
          </Avatar>
        </template>
        <template #header>
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-bold">Custom Content</h3>
            <p class="mt-3 text-black-sexternary">With Custom Layout</p>
            <div class="mt-4 flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-green-primary"></span>
              <span class="text-sm">Available</span>
            </div>
          </div>
        </template>
        <template #contact>
          <div class="flex items-center gap-4">
            <a href="mailto:custom@example.com" class="text-green-primary hover:underline">
              Email
            </a>
            <span>•</span>
            <a href="tel:+1234567890" class="text-green-primary hover:underline">
              Call
            </a>
          </div>
        </template>
      </ContactCard>
    `,
  }),
}
