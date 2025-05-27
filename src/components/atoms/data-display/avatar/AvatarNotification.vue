<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="avatar-notification"
    :class="
      cn(
        'border-white-primary bg-success-primary absolute right-0 bottom-0 -mr-1 -mb-1 size-4 rounded-full border-2',
        props.class,
      )
    "
  ></div>
</template>
