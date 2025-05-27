import type { Meta, StoryObj } from "@storybook/vue3"
import { Toaster } from "./index"
import { toast } from "vue-sonner"
import { ref } from "vue"
import "./sonner.css"
import PrimaryButton from "../../buttons/PrimaryButton.vue"

const meta = {
  title: "Atoms/Sonner",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A basic toast notification component.

Based on Sonner fork for Vue.

- Supports all Sonner props
- Different colors for indicating status messages
- Custom duration
- Customizable actions

<div style="display: flex; gap: 8px;">
  <a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=372-1554&t=bKPdiBs4wOFWHDaN-4" target="_blank">
    <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />
  </a>
  <a href="https://vue-sonner.vercel.app/" target="_blank">
    <img src="http://localhost:6006/src/stories/assets/buttons/full-documentation.png" alt="Sonner reference" />
  </a>
</div>
`,
      },
    },
  },
} satisfies Meta<typeof Toaster>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Toaster, PrimaryButton },
    template: `
      <div class="flex flex-col gap-4">
        <Toaster position="top-center" />
        <div class="flex gap-2 flex-wrap">
          <PrimaryButton @click="showDefault">Default Toast</PrimaryButton>
          <PrimaryButton @click="showSuccess">Success Toast</PrimaryButton>
          <PrimaryButton @click="showError">Error Toast</PrimaryButton>
          <PrimaryButton @click="showInfo">Info Toast</PrimaryButton>
          <PrimaryButton @click="showWarning">Warning Toast</PrimaryButton>
        </div>
      </div>
    `,
    setup() {
      const showDefault = () => {
        toast("Default toast message")
      }

      const showSuccess = () => {
        toast.success("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
        })
      }

      const showError = () => {
        toast.error("Failed to save changes", {
          description: "Please try again later",
        })
      }

      const showInfo = () => {
        toast.info("Update available", {
          description: "A new version of the application is ready to install",
        })
      }

      const showWarning = () => {
        toast.warning("Storage almost full", {
          description: "Please free up some space",
        })
      }

      return {
        showDefault,
        showSuccess,
        showError,
        showInfo,
        showWarning,
      }
    },
  }),
}

export const Positions: Story = {
  render: () => ({
    components: { Toaster, PrimaryButton },
    template: `
      <div class="flex flex-col gap-4">
        <Toaster :position="position" />
        <div class="flex gap-2 flex-wrap">
          <PrimaryButton v-for="pos in positions" :key="pos" @click="() => showToast(pos)">
            {{ pos }}
          </PrimaryButton>
        </div>
      </div>
    `,
    setup() {
      const positions = [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ]
      const position = ref("top-center")

      const showToast = (pos: string) => {
        position.value = pos
        toast.success("Toast position", {
          description: `Position: ${pos}`,
        })
      }

      return {
        positions,
        position,
        showToast,
      }
    },
  }),
}

export const RichColors: Story = {
  render: () => ({
    components: { Toaster, PrimaryButton },
    template: `
      <div>
        <Toaster richColors />
        <PrimaryButton @click="showToast">Show Rich Colors Toast</PrimaryButton>
      </div>
    `,
    setup() {
      const showToast = () => {
        toast.success("Rich colors enabled", {
          description: "This toast uses rich colors",
        })
      }

      return {
        showToast,
      }
    },
  }),
}

export const CustomDuration: Story = {
  render: () => ({
    components: { Toaster, PrimaryButton },
    template: `
      <div>
        <Toaster />
        <PrimaryButton @click="showToast">Show Long Duration Toast</PrimaryButton>
      </div>
    `,
    setup() {
      const showToast = () => {
        toast.info("This toast will stay longer", {
          description: "It will be visible for 5 seconds",
          duration: 5000,
        })
      }

      return {
        showToast,
      }
    },
  }),
}

export const WithAction: Story = {
  render: () => ({
    components: { Toaster, PrimaryButton },
    template: `
      <div>
        <Toaster />
        <div class="flex gap-2">
          <PrimaryButton @click="showActionToast">Show Action Toast</PrimaryButton>
          <PrimaryButton @click="showMultipleActions">Show Multiple Actions</PrimaryButton>
        </div>
      </div>
    `,
    setup() {
      const showActionToast = () => {
        toast("File uploaded", {
          action: {
            label: "Undo",
            onClick: () => console.log("Undo clicked"),
          },
        })
      }

      const showMultipleActions = () => {
        toast("2 files uploaded", {
          action: {
            label: "Undo",
            onClick: () => console.log("Undo clicked"),
          },
          cancel: {
            label: "Cancel",
            onClick: () => console.log("Cancel clicked"),
          },
        })
      }

      return {
        showActionToast,
        showMultipleActions,
      }
    },
  }),
}

export const Expanded: Story = {
  render: () => ({
    components: { Toaster, PrimaryButton },
    template: `
      <div>
        <Toaster expand />
        <PrimaryButton @click="showToast">Show Expanded Toast</PrimaryButton>
      </div>
    `,
    setup() {
      const showToast = () => {
        toast("Expanded toast", {
          description: "This toast takes up the full width of its container when expanded is true",
        })
      }

      return {
        showToast,
      }
    },
  }),
}
