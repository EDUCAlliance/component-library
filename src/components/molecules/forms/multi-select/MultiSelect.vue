<script setup lang="ts">
import { computed, ref, watch } from "vue"
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverContent,
  PopoverPortal,
} from "reka-ui"
import { Checkbox } from "@/components/atoms/forms"
import PrimaryButton from "@/components/atoms/buttons/PrimaryButton.vue"
import { cn } from "@/lib/utils"

export type MultiSelectOption = {
  value: string
  label: string
  disabled?: boolean
}

const props = withDefaults(
  defineProps<{
    modelValue?: string[]
    options: MultiSelectOption[]
    placeholder?: string
    label?: string
    searchPlaceholder?: string
    disabled?: boolean
    class?: string
  }>(),
  {
    modelValue: () => [],
    placeholder: "All",
    searchPlaceholder: "Search...",
  },
)

const emit = defineEmits<{
  (e: "update:modelValue", value: string[]): void
}>()

const isOpen = ref(false)
const searchQuery = ref("")

watch(isOpen, (open) => {
  if (open) searchQuery.value = ""
})

const selected = computed(() => props.modelValue ?? [])

const filteredOptions = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return props.options
  return props.options.filter((o) => o.label.toLowerCase().includes(q))
})

const isSelected = (value: string) => selected.value.includes(value)

const toggle = (value: string) => {
  const next = isSelected(value)
    ? selected.value.filter((v) => v !== value)
    : [...selected.value, value]
  emit("update:modelValue", next)
}

const close = () => {
  isOpen.value = false
}

const triggerLabel = computed(() => {
  const selected = props.modelValue ?? []
  if (!selected.length) return props.placeholder
  if (selected.length === 1) {
    return props.options.find((o) => o.value === selected[0])?.label ?? props.placeholder
  }
  return `${selected.length} selected`
})


</script>

<template>
  <div :class="cn('flex flex-col gap-1', props.class)">
    <p v-if="label" class="text-sm font-bold">{{ label }}</p>

    <PopoverRoot v-model:open="isOpen">
      <PopoverTrigger as-child :disabled="disabled">
        <button
          type="button"
          :disabled="disabled"
          :data-state="isOpen ? 'open' : 'closed'"
          :class="
            cn(
              'border-black-quinternary focus-visible:border-ring group flex h-11 w-fit min-w-[160px] items-center justify-between gap-2 rounded-md border bg-transparent py-3 pr-3 pl-4 text-sm whitespace-nowrap shadow-xs transition-[color,border-radius] duration-150 outline-none',
              'hover:rounded-none focus:ring-2 focus:ring-offset-2 focus:ring-black-secondary',
              'disabled:cursor-not-allowed disabled:opacity-50',
              'data-[state=open]:border-black-primary data-[state=open]:rounded-none',
            )
          "
        >
          <span class="truncate">{{ triggerLabel }}</span>
          <font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="text-black-tertiary ml-auto text-[12px] duration-200 ease-in-out group-data-[state=open]:rotate-180"
          />
        </button>
      </PopoverTrigger>

      <PopoverPortal>
        <PopoverContent
          :side-offset="4"
          align="start"
          :class="
            cn(
              'bg-white-primary border-black-quaternary z-50 min-w-[var(--reka-popover-trigger-width)] border shadow-sm outline-none',
              'data-[state=open]:animate-in data-[state=closed]:animate-out',
              'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
              'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
              'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
            )
          "
        >
          <div
            v-if="options.length > 5"
            class="border-black-quinternary flex items-center gap-2 border-b px-4"
          >
            <font-awesome-icon
              :icon="['fas', 'magnifying-glass']"
              class="text-black-tertiary shrink-0 text-[12px]"
            />
            <input
              v-model="searchQuery"
              type="text"
              :placeholder="searchPlaceholder"
              class="placeholder:text-black-sexternary h-10 w-full border-none bg-transparent text-sm outline-none"
              @keydown.enter.prevent="close"
            />
          </div>

          <div class="max-h-[240px] overflow-y-auto py-1">
            <p
              v-if="!filteredOptions.length"
              class="text-black-tertiary px-4 py-2 text-sm"
            >
              No options found.
            </p>
            <button
              v-for="opt in filteredOptions"
              :key="opt.value"
              type="button"
              :disabled="opt.disabled"
              class="focus:bg-white-quinternary flex w-full cursor-pointer items-center gap-3 px-4 py-2 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50"
              @click="!opt.disabled && toggle(opt.value)"
            >
              <Checkbox :checked="isSelected(opt.value)" color="black" />
              <span>{{ opt.label }}</span>
            </button>
          </div>

          <div class="border-black-quinternary border-t px-3 py-2 flex justify-end">
            <PrimaryButton size="sm" class="w-fit" @click="close">
              Done
            </PrimaryButton>
          </div>
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>
  </div>
</template>
