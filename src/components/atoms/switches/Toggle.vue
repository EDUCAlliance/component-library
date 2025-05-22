<template>
  <Switch
    :class="classesTrack"
    :disabled="disabled"
    :checked="isChecked"
    @click="handleToggle(!isChecked)"
  >
    <span class="sr-only">Use setting</span>
    <span aria-hidden="true" :class="classesToggle">
      <div
        v-if="withIcons"
        :class="[
          'absolute flex h-full w-[200%] duration-200 ease-in-out',
          isChecked ? '-left-full' : 'text-black-tertiary left-0',
        ]"
      >
        <div class="flex h-full w-1/2 items-center justify-center">
          <font-awesome-icon :icon="['fas', 'xmark']" class="text-[8px]" />
        </div>
        <div class="flex h-full w-1/2 items-center justify-center">
          <font-awesome-icon :icon="['fas', 'check']" class="text-[8px]" />
        </div>
      </div>
    </span>
  </Switch>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Switch } from "@headlessui/vue"
import { computed } from "vue"

const internalValueRef = ref(false)

const isControlled = computed(
  () => props.value !== undefined && typeof props.onChange === "function",
)

const isChecked = computed(() => {
  return isControlled.value ? props.value : internalValueRef.value
})

function handleToggle(newValue: boolean) {
  if (isControlled.value) {
    props.onChange?.(newValue)
  } else {
    internalValueRef.value = newValue
  }
}

const props = withDefaults(
  defineProps<{
    size?: "sm" | "base"
    disabled?: boolean
    value?: boolean
    withIcons?: boolean
    color?: "black" | "yellow" | "pink" | "green" | "orange" | "violet"
    onChange?: (value: boolean) => void
  }>(),
  {
    size: "base",
    disabled: false,
    value: false,
    withIcons: false,
    color: "black",
  },
)

const classesTrack = computed(() => ({
  "relative inline-flex shrink-0 cursor-pointer disabled:cursor-not-allowed rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:opacity-50":
    true,
  "h-8 w-14": props.size === "base",
  "h-6 w-11": props.size === "sm",
  "bg-black-quaternary": !isChecked.value,
  "bg-black-primary": isChecked.value && props.color === "black",
  "focus-visible:ring-black-secondary": props.color === "black",
  "bg-yellow-primary": isChecked.value && props.color === "yellow",
  "focus-visible:ring-yellow-secondary": props.color === "yellow",
  "bg-pink-primary": isChecked.value && props.color === "pink",
  "focus-visible:ring-pink-secondary": props.color === "pink",
  "bg-green-primary": isChecked.value && props.color === "green",
  "focus-visible:ring-green-secondary": props.color === "green",
  "bg-orange-primary": isChecked.value && props.color === "orange",
  "focus-visible:ring-orange-secondary": props.color === "orange",
  "bg-violet-primary": isChecked.value && props.color === "violet",
  "focus-visible:ring-violet-secondary": props.color === "violet",
}))

const classesToggle = computed(() => ({
  "bg-white-primary pointer-events-none inline-block transform rounded-full shadow-sm ring-0 transition duration-200 ease-in-out translate-x-0 overflow-hidden":
    true,
  "translate-x-6": isChecked.value && props.size === "base",
  "translate-x-5": isChecked.value && props.size === "sm",
  "size-7": props.size === "base",
  "size-5": props.size === "sm",
}))
</script>
