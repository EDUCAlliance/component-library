<script setup lang="ts">
import { computed, ref, type HTMLAttributes, type Ref } from "vue"
import { useVModel } from "@vueuse/core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import {
  type DateValue,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
  useDateFormatter,
} from "reka-ui"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/atoms/date-time/calendar"
import type { CalendarColor } from "@/components/atoms/date-time/colors"

const props = withDefaults(
  defineProps<{
    defaultValue?: DateValue
    modelValue?: DateValue
    class?: HTMLAttributes["class"]
    state?: "default" | "error" | "success" | "warning"
    color?: CalendarColor
    disabled?: boolean
    readonly?: boolean
    placeholder?: string
    locale?: string
    minValue?: DateValue
    maxValue?: DateValue
    isDateDisabled?: (date: DateValue) => boolean
    isDateUnavailable?: (date: DateValue) => boolean
  }>(),
  {
    state: "default",
    color: "black",
    locale: "en-US",
  },
)

const emits = defineEmits<{
  (e: "update:modelValue", payload: DateValue | undefined): void
}>()

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
}) as Ref<DateValue | undefined>

const open = ref(false)

const formattedValue = computed(() =>
  modelValue.value
    ? useDateFormatter(props.locale).selectedDate(modelValue.value, false)
    : undefined,
)

const onSelect = (value: DateValue | undefined) => {
  modelValue.value = value
  open.value = false
}

const stateClasses = {
  default: "border-black-quinternary data-[state=open]:border-black-primary",
  error: "border-error-primary text-error-quinternary",
  success: "border-success-primary text-success-quinternary",
  warning: "border-warning-primary text-warning-quinternary",
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

    <PopoverRoot v-model:open="open">
      <PopoverTrigger
        :disabled="props.disabled || props.readonly"
        :class="
          cn(
            'relative flex h-10.5 w-full cursor-pointer items-center gap-2 rounded-md border bg-white px-4 py-3 text-left text-sm shadow-xs transition-[color,border-radius] duration-150 outline-none hover:rounded-none focus-visible:rounded-none data-[state=open]:rounded-none',
            !props.disabled && stateClasses[props.state],
            props.disabled &&
              'bg-white-tertiary border-black-quaternary text-black-quinternary cursor-not-allowed',
            props.readonly && 'bg-white-quaternary cursor-default hover:rounded-md',
            props.class,
          )
        "
        :aria-invalid="props.state === 'error' ? 'true' : undefined"
      >
        <FontAwesomeIcon
          :icon="['fas', 'calendar-days']"
          :class="
            cn('text-[16px]', props.disabled ? 'text-black-quinternary' : 'text-black-primary')
          "
        />

        <span :class="cn('flex-1 truncate', !formattedValue && 'text-black-sexternary')">
          {{ formattedValue ?? props.placeholder }}
        </span>

        <!-- Status Icon -->
        <FontAwesomeIcon
          v-if="props.state !== 'default'"
          :icon="iconMap[props.state]"
          :class="[
            'text-[16px]',
            props.state === 'error' && 'text-error-primary',
            props.state === 'success' && 'text-success-primary',
            props.state === 'warning' && 'text-warning-primary',
          ]"
        />
      </PopoverTrigger>

      <PopoverPortal>
        <PopoverContent
          align="start"
          :side-offset="4"
          class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-50 outline-hidden"
        >
          <Calendar
            :model-value="modelValue"
            :color="props.color"
            :locale="props.locale"
            :min-value="props.minValue"
            :max-value="props.maxValue"
            :is-date-disabled="props.isDateDisabled"
            :is-date-unavailable="props.isDateUnavailable"
            initial-focus
            class="bg-white-primary rounded-xl shadow-[1px_2px_2px_rgba(61,61,59,0.1)]"
            @update:model-value="onSelect"
          />
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>

    <!-- Helper Slot -->
    <p class="text-black-tertiary text-sm" v-if="$slots.helper">
      <slot name="helper" />
    </p>
  </div>
</template>
