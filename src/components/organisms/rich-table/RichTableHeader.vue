<template>
  <div :class="headerClasses">
    <div class="flex-1">
      <div v-if="title || $slots.title" class="mb-3">
        <slot name="title">
          <h1 class="text-black-primary text-2xl leading-tight font-bold">
            {{ title }}
          </h1>
        </slot>
      </div>
      <div v-if="description || $slots.description">
        <slot name="description">
          <p class="text-black-primary text-base font-medium">
            {{ description }}
          </p>
        </slot>
      </div>
    </div>
    <div v-if="$slots.actions" class="flex items-center gap-2">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RichTableHeaderProps } from "./types"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<RichTableHeaderProps>(), {
  title: "",
  description: "",
  class: "",
})

const headerClasses = cn("flex items-start justify-between gap-4 pb-8", props.class)
</script>
