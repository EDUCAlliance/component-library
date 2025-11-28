<template>
  <div :class="badgeClasses">
    <div :class="dotClasses" v-if="props.variant === 'secondary'" />
    <slot />
    <button
      v-if="props.closable"
      @click="handleClose"
      type="button"
      :class="closeButtonClasses"
      aria-label="Close badge"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        :class="closeIconClasses"
      >
        <path
          d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    color?: "gray" | "yellow" | "pink" | "green" | "orange" | "violet" | "black" | "white"
    variant?: "primary" | "secondary"
    size?: "xs" | "sm" | "base"
    closable?: boolean
  }>(),
  {
    color: "white",
    size: "base",
    variant: "primary",
    closable: false,
  },
)

const emit = defineEmits<{
  close: [event: MouseEvent]
}>()

const handleClose = (event: MouseEvent) => {
  emit("close", event)
}

const badgeClasses = computed(() => ({
  "text-black-primary flex w-fit items-center gap-1 rounded-full border": true,
  "bg-white-quinternary border-black-quinternary":
    props.color === "gray" && props.variant === "primary",
  "bg-black-primary border-black-tertiary text-white-primary":
    props.color === "black" && props.variant === "primary",
  "bg-yellow-tertiary border-yellow-primary":
    props.color === "yellow" && props.variant === "primary",
  "bg-pink-tertiary border-pink-primary": props.color === "pink" && props.variant === "primary",
  "bg-green-tertiary border-green-primary": props.color === "green" && props.variant === "primary",
  "bg-orange-tertiary border-orange-primary":
    props.color === "orange" && props.variant === "primary",
  "bg-violet-tertiary border-violet-primary":
    props.color === "violet" && props.variant === "primary",
  "bg-white-primary border-black-quaternary":
    props.variant === "secondary" || props.color === "white",
  "px-2 py-1 text-sm": props.size === "base",
  "px-2 py-1 text-xs": props.size === "sm",
  "px-[6px] py-px text-xs": props.size === "xs",
}))

const dotClasses = computed(() => ({
  "w-2 h-2 rounded-full": props.variant === "secondary",
  "bg-black-primary": props.color === "black" && props.variant === "secondary",
  "bg-yellow-primary": props.color === "yellow" && props.variant === "secondary",
  "bg-pink-primary": props.color === "pink" && props.variant === "secondary",
  "bg-green-primary": props.color === "green" && props.variant === "secondary",
  "bg-orange-primary": props.color === "orange" && props.variant === "secondary",
  "bg-violet-primary": props.color === "violet" && props.variant === "secondary",
}))

const closeButtonClasses = computed(() => ({
  "ml-1 inline-flex items-center justify-center rounded-full transition-colors hover:bg-black-primary/10 focus:outline-none focus:ring-2 focus:ring-offset-1":
    true,
  "focus:ring-black-primary": props.color !== "white",
  "focus:ring-white-primary": props.color === "white",
}))

const closeIconClasses = computed(() => ({
  "w-3 h-3": props.size === "xs",
  "w-3.5 h-3.5": props.size === "sm",
  "w-4 h-4": props.size === "base",
}))
</script>
