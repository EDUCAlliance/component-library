import type { Meta, StoryObj } from "@storybook/vue3"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "."
import { Avatar, AvatarImage, AvatarFallback } from "@/components/atoms/others/avatar"

const meta = {
  title: "Atoms/Forms/Select",
  component: Select,
  argTypes: {
    class: {
      control: "text",
      description: "Additional classes for the select root.",
    },
  },
  render: (args) => ({
    components: { Select, SelectTrigger, SelectContent, SelectItem, SelectValue },
    setup() {
      return { args }
    },
    template: `
      <Select :class="args.class">
        <SelectTrigger class="w-[300px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
        </SelectContent>
      </Select>
    `,
  }),
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Select** is a dropdown component for choosing a single option from a list.\n\nCustom made for this library.\n\n- Fully accessible and keyboard-navigable.\n- Custom content and option rendering.\n\n<div style="display: flex; gap: 8px;">\n\n<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=180-3086&t=Mkp3c5SrIIlNDlq2-4" target="_blank">\n  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />\n</a>\n\n</div>\n        `,
      },
    },
  },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {}

export const WithGroups: Story = {
  render: (args) => ({
    components: {
      Select,
      SelectTrigger,
      SelectContent,
      SelectItem,
      SelectValue,
      SelectGroup,
      SelectLabel,
    },
    setup() {
      return { args }
    },
    template: `
      <Select :class="args.class">
        <SelectTrigger class="w-[300px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="pepper">Pepper</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    `,
  }),
}

export const WithAvatars: Story = {
  render: (args) => ({
    components: {
      Select,
      SelectTrigger,
      SelectContent,
      SelectItem,
      SelectValue,
      Avatar,
      AvatarImage,
      AvatarFallback,
    },
    setup() {
      return { args }
    },
    template: `
      <Select :class="args.class">
        <SelectTrigger class="w-[300px]">
          <SelectValue placeholder="Select a user" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="alice">
            <Avatar size="xs">
              <AvatarImage src="https://randomuser.me/api/portraits/women/68.jpg" alt="Alice" />
            </Avatar>
            Alice Johnson
          </SelectItem>
          <SelectItem value="bob">
            <Avatar size="xs">
              <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="Bob" />
            </Avatar>
            Bob Smith
          </SelectItem>
          <SelectItem value="carol">
            <Avatar size="xs">
              <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Carol" />
            </Avatar>
            Carol Lee
          </SelectItem>
        </SelectContent>
      </Select>
    `,
  }),
}
