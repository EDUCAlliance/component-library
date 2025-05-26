<template>
  <div class="flex w-full flex-col gap-2">
    <p class="text-base font-bold" v-if="$slots.label || label">
      <slot name="label">{{ label }}</slot>
    </p>

    <div
      ref="dropZone"
      :class="[
        'group relative flex w-full cursor-pointer items-center justify-center rounded-lg border border-dashed bg-white transition-[border-radius,border-color] duration-150 hover:rounded-none',
        {
          'border-black-quaternary': !isDragOver && state === 'default',
          'border-green-primary bg-green-secondary/25': isDragOver,
          'border-error-primary border-solid': state === 'error',
          'border-success-primary border-solid': state === 'success',
        },
      ]"
      @click="triggerFileInput"
      @dragover.prevent="handleDragOver"
      @dragleave.prevent="handleDragLeave"
      @drop.prevent="handleDrop"
    >
      <input
        ref="fileInput"
        type="file"
        :accept="acceptedMimeTypes.join(',')"
        :multiple="multiple"
        class="hidden"
        @change="handleFileSelect"
      />

      <div class="flex flex-col items-center px-4 py-8">
        <!-- Upload Icon -->
        <font-awesome-icon
          :icon="['fas', 'cloud-arrow-up']"
          :class="[
            'mb-3 text-4xl',
            {
              'text-black-quaternary': !isDragOver && state === 'default',
              'text-green-primary': isDragOver,
              'text-error-primary': state === 'error',
              'text-success-primary': state === 'success',
            },
          ]"
        />

        <div class="flex flex-col items-center gap-1">
          <p class="text-black-primary text-center text-base font-bold">
            Click to upload or drag and drop
          </p>
          <p class="text-black-tertiary text-center text-sm">
            {{ mimeTypeText }} up to {{ maxSizeText }}
          </p>
        </div>

        <SoftButton
          color="green"
          size="sm"
          @click.stop="triggerFileInput"
          class="mt-4 group-hover:rounded-none"
        >
          Upload
        </SoftButton>
      </div>
    </div>

    <div v-if="selectedFiles.length > 0" class="flex flex-col gap-2">
      <div
        v-for="(file, index) in selectedFiles"
        :key="`${file.name}-${index}`"
        class="border-black-quaternary bg-white-secondary flex items-center justify-between rounded-md border p-3"
      >
        <div class="flex items-center gap-3">
          <font-awesome-icon
            :icon="['fas', getFileIcon(file)]"
            class="text-black-tertiary text-lg"
          />
          <div class="flex flex-col">
            <span class="text-black-primary text-sm font-medium">{{ file.name }}</span>
            <span class="text-black-tertiary text-sm">{{ formatFileSize(file.size) }}</span>
          </div>
        </div>
        <GhostButton
          @click="removeFile(index)"
          class="text-black-tertiary hover:text-error-primary transition-colors duration-150"
        >
          <font-awesome-icon :icon="['fas', 'trash']" />
        </GhostButton>
      </div>
    </div>

    <div v-if="errorMessages.length > 0" class="flex flex-col gap-1">
      <p v-for="(error, index) in errorMessages" :key="index" class="text-error-primary text-sm">
        {{ error }}
      </p>
    </div>

    <p class="text-black-tertiary text-sm" v-if="$slots.helper">
      <slot name="helper" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import SoftButton from "./buttons/SoftButton.vue"
import GhostButton from "./buttons/GhostButton.vue"

interface FileUploadProps {
  modelValue?: File[]
  label?: string
  acceptedMimeTypes?: string[]
  maxFileSize?: number // in bytes
  multiple?: boolean
  state?: "default" | "error" | "success"
}

const props = withDefaults(defineProps<FileUploadProps>(), {
  acceptedMimeTypes: () => ["image/png", "image/jpeg", "application/pdf"],
  maxFileSize: 10 * 1024 * 1024, // 10MB
  multiple: false,
  state: "default",
})

const emit = defineEmits<{
  "update:modelValue": [files: File[]]
  filesSelected: [files: File[]]
  error: [errors: string[]]
}>()

const fileInput = ref<HTMLInputElement>()
const dropZone = ref<HTMLDivElement>()
const isDragOver = ref(false)
const selectedFiles = ref<File[]>(props.modelValue || [])
const errorMessages = ref<string[]>([])

const mimeTypeText = computed(() => {
  const types = props.acceptedMimeTypes.map((type) => {
    switch (type) {
      case "image/png":
        return "PNG"
      case "image/jpeg":
        return "JPG"
      case "application/pdf":
        return "PDF"
      case "application/msword":
        return "DOC"
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        return "DOCX"
      case "application/vnd.ms-excel":
        return "XLS"
      case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
        return "XLSX"
      case "application/vnd.ms-powerpoint":
        return "PPT"
      case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        return "PPTX"
      case "application/vnd.oasis.opendocument.text":
        return "ODT"
      case "application/vnd.oasis.opendocument.spreadsheet":
        return "ODS"
      case "application/vnd.oasis.opendocument.presentation":
        return "ODP"
      case "application/vnd.oasis.opendocument.graphics":
        return "ODG"
      case "application/vnd.oasis.opendocument.formula":
        return "ODF"
      case "application/zip":
        return "ZIP"
      case "application/rar":
        return "RAR"
      case "application/7z":
        return "7Z"
      case "application/x-rar-compressed":
        return "RAR"
      case "application/x-7z-compressed":
        return "7Z"
      case "application/x-zip-compressed":
        return "ZIP"
      case "application/x-tar":
        return "TAR"
      case "application/x-bzip2":
        return "BZIP2"
      case "application/x-gzip":
        return "GZIP"
      case "application/x-bzip":
        return "BZIP"
      case "audio/*":
        return "Audio"
      case "video/*":
        return "Video"
      case "text/*":
        return "Text"
      case "image/*":
        return "Images"
      case "application/*":
        return "Documents"
      default:
        return type.split("/")[1]?.toUpperCase() || "Files"
    }
  })
  return types.join(", ")
})

const maxSizeText = computed(() => {
  const size = props.maxFileSize
  if (size >= 1024 * 1024) {
    return `${Math.round(size / (1024 * 1024))}MB`
  } else if (size >= 1024) {
    return `${Math.round(size / 1024)}KB`
  }
  return `${size}B`
})

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleDragOver = () => {
  isDragOver.value = true
}

const handleDragLeave = (event: DragEvent) => {
  if (!dropZone.value?.contains(event.relatedTarget as Node)) {
    isDragOver.value = false
  }
}

const handleDrop = (event: DragEvent) => {
  isDragOver.value = false
  const files = Array.from(event.dataTransfer?.files || [])
  processFiles(files)
}

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = Array.from(target.files || [])
  processFiles(files)
}

const processFiles = (files: File[]) => {
  errorMessages.value = []
  const validFiles: File[] = []
  const errors: string[] = []

  files.forEach((file) => {
    // Check mime type
    if (
      !props.acceptedMimeTypes.some((type) => {
        if (type.endsWith("*")) {
          return file.type.startsWith(type.replace("*", ""))
        }
        return file.type === type
      })
    ) {
      errors.push(`${file.name}: File type not supported. Accepted types: ${mimeTypeText.value}`)
      return
    }

    // Check file size
    if (file.size > props.maxFileSize) {
      errors.push(`${file.name}: File too large. Maximum size: ${maxSizeText.value}`)
      return
    }

    validFiles.push(file)
  })

  if (errors.length > 0) {
    errorMessages.value = errors
    emit("error", errors)
  }

  if (validFiles.length > 0) {
    if (props.multiple) {
      selectedFiles.value = [...selectedFiles.value, ...validFiles]
    } else {
      selectedFiles.value = [validFiles[0]]
    }
    emit("update:modelValue", selectedFiles.value)
    emit("filesSelected", validFiles)
  }
}

const removeFile = (index: number) => {
  selectedFiles.value.splice(index, 1)
  emit("update:modelValue", selectedFiles.value)
}

const getFileIcon = (file: File): string => {
  if (file.type.startsWith("image/")) return "image"
  if (file.type === "application/pdf") return "file-pdf"
  if (file.type.includes("word")) return "file-word"
  if (file.type.includes("excel") || file.type.includes("spreadsheet")) return "file-excel"
  if (file.type.includes("powerpoint") || file.type.includes("presentation"))
    return "file-powerpoint"
  if (file.type.startsWith("text/")) return "file-text"
  if (file.type.startsWith("video/")) return "file-video"
  if (file.type.startsWith("audio/")) return "file-audio"
  return "file"
}

const formatFileSize = (bytes: number): string => {
  if (bytes >= 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  } else if (bytes >= 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`
  }
  return `${bytes} B`
}

// Watch for external changes to modelValue
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      selectedFiles.value = [...newValue]
    }
  },
  { immediate: true },
)
</script>
