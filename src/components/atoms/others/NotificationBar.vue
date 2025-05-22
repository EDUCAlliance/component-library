<template>
  <div v-if="visible" :class="cn(colorClasses, 'relative flex h-12 items-center')">
    <img
      v-if="props.color === 'pattern'"
      src="/assets/notification-bar/pattern.svg"
      class="absolute top-0 left-0 size-full object-cover"
    />
    <div class="z-10 flex w-full min-w-0 items-center justify-center gap-4">
      <slot />
    </div>
    <button
      class="absolute top-0 right-0 z-10 flex h-full w-11 flex-shrink-0 items-center justify-center text-lg leading-none transition-opacity hover:opacity-70 focus:outline-none"
      @click="close"
      aria-label="Close notification"
      type="button"
    >
      <font-awesome-icon :icon="['fas', 'xmark']" class="size-5" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { cn } from "@/lib/utils"

const visible = ref(true)

const close = () => (visible.value = false)

const props = withDefaults(
  defineProps<{
    color?: "black" | "yellow" | "pink" | "green" | "violet" | "orange" | "pattern"
  }>(),
  {
    color: "black",
  },
)

const colorClasses = computed(() => {
  return {
    black: "bg-black-primary text-white-primary",
    yellow: "bg-yellow-primary text-black-primary",
    pink: "bg-pink-primary text-white-primary",
    green: "bg-green-primary text-white-primary",
    violet: "bg-violet-primary text-white-primary",
    orange: "bg-orange-primary text-black-primary",
    pattern: "text-white-primary bg-pink-primary",
  }[props.color]
})
</script>
