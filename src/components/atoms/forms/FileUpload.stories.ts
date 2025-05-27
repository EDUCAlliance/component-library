import type { Meta, StoryObj } from "@storybook/vue3"
import { ref } from "vue"
import FileUpload from "./FileUpload.vue"

const meta: Meta<typeof FileUpload> = {
  title: "Atoms/Forms/FileUpload",
  component: FileUpload,
  parameters: {
    docs: {
      description: {
        component:
          "A file upload component with drag-and-drop functionality, mime type filtering, and file size validation.",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label for the file upload component",
    },
    acceptedMimeTypes: {
      control: "object",
      description: "Array of accepted MIME types",
    },
    maxFileSize: {
      control: "number",
      description: "Maximum file size in bytes",
    },
    multiple: {
      control: "boolean",
      description: "Allow multiple file selection",
    },
    state: {
      control: "select",
      options: ["default", "error", "success"],
      description: "Visual state of the component",
    },
  },
  args: {
    label: "Attachments",
    acceptedMimeTypes: ["image/png", "image/jpeg", "application/pdf"],
    maxFileSize: 10 * 1024 * 1024, // 10MB
    multiple: false,
    state: "default",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { FileUpload },
    setup() {
      const files = ref<File[]>([])
      return { args, files }
    },
    template: `
      <div>
        <FileUpload
          v-bind="args"
          v-model="files"
          @filesSelected="(selectedFiles) => console.log('Files selected:', selectedFiles)"
          @error="(errors) => console.log('Errors:', errors)"
        />
      </div>
    `,
  }),
}

export const WithLabel: Story = {
  render: (args) => ({
    components: { FileUpload },
    setup() {
      const files = ref<File[]>([])
      return { args, files }
    },
    template: `
      <div>
        <FileUpload
          v-bind="args"
          v-model="files"
          label="Upload Documents"
        />
      </div>
    `,
  }),
}

export const Multiple: Story = {
  render: (args) => ({
    components: { FileUpload },
    setup() {
      const files = ref<File[]>([])
      return { args, files }
    },
    template: `
      <div>
        <FileUpload
          v-bind="args"
          v-model="files"
          :multiple="true"
          label="Upload Multiple Files"
        />
      </div>
    `,
  }),
}

export const ImagesOnly: Story = {
  render: (args) => ({
    components: { FileUpload },
    setup() {
      const files = ref<File[]>([])
      return { args, files }
    },
    template: `
      <div>
        <FileUpload
          v-bind="args"
          v-model="files"
          :acceptedMimeTypes="['image/png', 'image/jpeg', 'image/gif', 'image/webp']"
          label="Upload Images"
        />
      </div>
    `,
  }),
}

export const DocumentsOnly: Story = {
  render: (args) => ({
    components: { FileUpload },
    setup() {
      const files = ref<File[]>([])
      return { args, files }
    },
    template: `
      <div>
        <FileUpload
          v-bind="args"
          v-model="files"
          :acceptedMimeTypes="['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']"
          label="Upload Documents"
        />
      </div>
    `,
  }),
}

export const SmallFileSize: Story = {
  render: (args) => ({
    components: { FileUpload },
    setup() {
      const files = ref<File[]>([])
      return { args, files }
    },
    template: `
      <div>
        <FileUpload
          v-bind="args"
          v-model="files"
          :maxFileSize="1024 * 1024"
          label="Upload Small Files (1MB max)"
        />
      </div>
    `,
  }),
}

export const ErrorState: Story = {
  render: (args) => ({
    components: { FileUpload },
    setup() {
      const files = ref<File[]>([])
      return { args, files }
    },
    template: `
      <div>
        <FileUpload
          v-bind="args"
          v-model="files"
          state="error"
          label="Upload with Error"
        />
      </div>
    `,
  }),
}

export const SuccessState: Story = {
  render: (args) => ({
    components: { FileUpload },
    setup() {
      const files = ref<File[]>([])
      return { args, files }
    },
    template: `
      <div>
        <FileUpload
          v-bind="args"
          v-model="files"
          state="success"
          label="Upload with Success"
        />
      </div>
    `,
  }),
}

export const WithSlots: Story = {
  render: (args) => ({
    components: { FileUpload },
    setup() {
      const files = ref<File[]>([])
      return { args, files }
    },
    template: `
      <div>
        <FileUpload
          v-bind="args"
          v-model="files"
        >
          <template #label>
            <span class="text-violet-primary">Custom Upload Label</span>
          </template>
          <template #helper>
            This is a custom helper text that provides additional information about the file upload.
          </template>
        </FileUpload>
      </div>
    `,
  }),
}

export const AllFileTypes: Story = {
  render: (args) => ({
    components: { FileUpload },
    setup() {
      const files = ref<File[]>([])
      return { args, files }
    },
    template: `
      <div>
        <FileUpload
          v-bind="args"
          v-model="files"
          :acceptedMimeTypes="['*/*']"
          :multiple="true"
          label="Upload Any Files"
        />
      </div>
    `,
  }),
}
