<template>
  <Switch v-model="enabledRef" :class="classesTrack" :disabled="disabled">
    <span class="sr-only">Use setting</span>
    <span aria-hidden="true" :class="classesToggle" />
  </Switch>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Switch } from "@headlessui/vue"
import { computed } from "vue"

const enabledRef = ref(false)

const props = withDefaults(
  defineProps<{
    size?: "sm" | "base"
    disabled?: boolean
    value?: boolean
    color?: "black" | "yellow" | "pink" | "green" | "orange" | "violet"
    onChange?: (value: boolean) => void
  }>(),
  {
    size: "base",
    disabled: false,
    value: false,
    color: "black",
    onChange: () => {},
  },
)

const classesTrack = computed(() => ({
  "relative inline-flex shrink-0 cursor-pointer disabled:cursor-not-allowed rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:opacity-50":
    true,
  "h-8 w-14": props.size === "base",
  "h-6 w-11": props.size === "sm",
  "bg-black-quaternary": !enabledRef.value,
  "bg-black-primary": enabledRef.value && props.color === "black",
  "focus:ring-black-secondary": props.color === "black",
  "bg-yellow-primary": enabledRef.value && props.color === "yellow",
  "focus:ring-yellow-secondary": props.color === "yellow",
  "bg-pink-primary": enabledRef.value && props.color === "pink",
  "focus:ring-pink-secondary": props.color === "pink",
  "bg-green-primary": enabledRef.value && props.color === "green",
  "focus:ring-green-secondary": props.color === "green",
  "bg-orange-primary": enabledRef.value && props.color === "orange",
  "focus:ring-orange-secondary": props.color === "orange",
  "bg-violet-primary": enabledRef.value && props.color === "violet",
  "focus:ring-violet-secondary": props.color === "violet",
}))

const classesToggle = computed(() => ({
  "bg-white-primary pointer-events-none inline-block transform rounded-full shadow-sm ring-0 transition duration-200 ease-in-out translate-x-0":
    true,
  "translate-x-6": enabledRef.value && props.size === "base",
  "translate-x-5": enabledRef.value && props.size === "sm",
  "size-7": props.size === "base",
  "size-5": props.size === "sm",
}))
</script>
