import type { Meta, StoryObj } from "@storybook/vue3"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogScrollContent,
  DialogOverlay,
} from "."
import PrimaryButton from "@/components/atoms/buttons/PrimaryButton.vue"
import Input from "@/components/atoms/forms/input/Input.vue"

const meta = {
  title: "Atoms/Dialog",
  component: Dialog,
  argTypes: {
    class: {
      control: "text",
      description: "Additional classes for the dialog root.",
    },
  },
  render: (args) => ({
    components: {
      Dialog,
      DialogTrigger,
      DialogContent,
      DialogHeader,
      DialogTitle,
      DialogDescription,
      DialogFooter,
      PrimaryButton,
    },
    setup() {
      return { args }
    },
    template: `
      <Dialog :class="args.class">
        <DialogTrigger>
          <PrimaryButton>Open Dialog</PrimaryButton>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Basic Dialog</DialogTitle>
            <DialogDescription>
              This is a basic dialog example with a title and description.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <PrimaryButton>Close</PrimaryButton>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `,
  }),
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Dialog** is a window overlaid on either the primary window or another dialog window.

Component is based on Reka UI.

- Fully accessible and keyboard-navigable
- Focus is trapped within the dialog when open
- ESC key closes the dialog
- Clicking outside closes the dialog
- Scroll is locked when dialog is open
- Multiple dialog components can be nested

<div style="display: flex; gap: 8px;">
<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=391-2546&t=WyOxhfBthfxdEtLs-4" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />
</a>
<a href="https://reka-ui.com/docs/components/dialog" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/full-documentation.png" alt="Reka UI reference" />
</a>
</div>
        `,
      },
    },
  },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}

export const WithForm: Story = {
  render: () => ({
    components: {
      Dialog,
      DialogTrigger,
      DialogContent,
      DialogHeader,
      DialogTitle,
      DialogDescription,
      DialogFooter,
      DialogClose,
      PrimaryButton,
      Input,
    },
    template: `
      <Dialog>
        <DialogTrigger>
          <PrimaryButton>Edit Profile</PrimaryButton>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <Input placeholder="John Doe">
              <template #label>Name</template>
              <template #helper>Enter your full name</template>
            </Input>
            <Input placeholder="@johndoe" state="default">
              <template #label>Username</template>
              <template #prefix>@</template>
              <template #helper>This is your public display name</template>
            </Input>
            <Input placeholder="john@example.com" state="success">
              <template #label>Email</template>
              <template #helper>Your email has been verified</template>
            </Input>
          </div>
          <DialogFooter>
            <DialogClose>
              <PrimaryButton type="submit">Save changes</PrimaryButton>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `,
  }),
}

export const WithScrollContent: Story = {
  render: () => ({
    components: {
      Dialog,
      DialogTrigger,
      DialogScrollContent,
      DialogHeader,
      DialogTitle,
      DialogDescription,
      DialogFooter,
      DialogClose,
      DialogOverlay,
      PrimaryButton,
    },
    template: `
      <Dialog>
        <DialogTrigger as-child>
          <PrimaryButton>Edit Profile</PrimaryButton>
        </DialogTrigger>
        <DialogOverlay />
        <DialogScrollContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Modal title</DialogTitle>
            <DialogDescription>
              Here is modal with overlay scroll
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4 h-[300dvh]">
            <p>
              This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling will move the modal as needed.
            </p>
          </div>
          <DialogFooter>
            <DialogClose>
              <PrimaryButton type="submit">Save changes</PrimaryButton>
            </DialogClose>
          </DialogFooter>
        </DialogScrollContent>
      </Dialog>
    `,
  }),
}
