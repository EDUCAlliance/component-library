<script setup lang="ts">
import { computed, type HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { useVModel } from "@vueuse/core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes["class"]
  state?: "default" | "error" | "success" | "warning"
  disabled?: boolean
  readonly?: boolean
  placeholder?: string
  clearable?: boolean
}>()

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void
  (e: "clear"): void
}>()

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const showClear = computed(
  () =>
    props.clearable &&
    !props.disabled &&
    !props.readonly &&
    modelValue.value !== undefined &&
    modelValue.value !== "",
)

function clear() {
  modelValue.value = ""
  emits("clear")
}

const stateClasses = {
  default: "border-black-quinternary focus-within:border-black-primary",
  error: "border-error-primary focus-within:border-error-primary text-error-quinternary",
  success:
    "border-success-primary focus-within:border-success-primary text-success-quinternary placeholder:text-success-quinternary",
  warning:
    "border-warning-primary focus-within:border-warning-primary text-warning-quinternary placeholder:text-warning-quinternary",
}

const iconMap = {
  error: ["fas", "circle-exclamation"],
  success: ["fas", "circle-check"],
  warning: ["fas", "triangle-exclamation"],
}
</script>

<template>
  <div class="flex w-full flex-col gap-2">
    <!-- Label Slot -->
    <p class="font-bold" v-if="$slots.label">
      <slot name="label" />
    </p>

    <div
      :class="
        cn(
          'relative flex w-full items-center rounded-md border bg-white shadow-xs transition-[color,border-radius] duration-150 focus-within:rounded-none hover:rounded-none',
          !props.disabled && stateClasses[props.state || 'default'],
          props.disabled && 'bg-white-tertiary border-black-quaternary pointer-events-none',
          props.readonly && 'bg-white-quaternary',
          props.class,
        )
      "
    >
      <!-- Prefix Slot -->
      <span
        v-if="$slots.prefix"
        :class="
          cn(
            'text-black-tertiary flex items-center pr-1 pl-3',
            props.disabled && 'text-black-quinternary',
          )
        "
        ><slot name="prefix"
      /></span>

      <!-- Input -->
      <input
        v-model="modelValue"
        :disabled="props.disabled"
        :readonly="props.readonly"
        :placeholder="props.placeholder"
        :class="
          cn(
            'placeholder:text-black-sexternary h-10.5 flex-1 border-none bg-transparent px-0 py-3 text-sm shadow-none outline-none',
            $slots.prefix ? 'pl-2' : 'pl-4',
            $slots.suffix || showClear || props.state !== 'default' ? 'pr-2' : 'pr-4',
            props.disabled && 'text-black-quinternary cursor-not-allowed',
            props.readonly && 'cursor-default',
          )
        "
        :aria-invalid="props.state === 'error' ? 'true' : undefined"
        :aria-disabled="props.disabled ? 'true' : undefined"
        :aria-readonly="props.readonly ? 'true' : undefined"
      />

      <button
        v-if="showClear"
        type="button"
        aria-label="Clear"
        :class="
          cn(
            'text-black-tertiary hover:text-black-primary flex cursor-pointer items-center pl-1',
            $slots.suffix ? 'pr-1' : 'pr-3',
            !$slots.suffix && props.state && props.state !== 'default' && 'mr-7',
          )
        "
        @click="clear"
      >
        <FontAwesomeIcon :icon="['fas', 'xmark']" class="text-[14px]" />
      </button>

      <!-- Suffix Slot -->
      <span
        v-if="$slots.suffix"
        :class="
          cn(
            'text-black-tertiary flex items-center pr-3 pl-1',
            props.disabled && 'text-black-quinternary',
          )
        "
        ><slot name="suffix"
      /></span>

      <!-- Status Icon -->
      <span
        v-if="props.state && props.state !== 'default'"
        class="pointer-events-none absolute right-4 flex items-center"
      >
        <FontAwesomeIcon
          :icon="iconMap[props.state]"
          :class="[
            'text-[16px]',
            props.state === 'error' && 'text-error-primary',
            props.state === 'success' && 'text-success-primary',
            props.state === 'warning' && 'text-warning-primary',
          ]"
        />
      </span>
    </div>

    <!-- Helper Slot -->
    <p class="text-black-tertiary text-sm" v-if="$slots.helper">
      <slot name="helper" />
    </p>
  </div>
</template>
