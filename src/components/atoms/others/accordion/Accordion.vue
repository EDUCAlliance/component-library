<script setup lang="ts">
import {
  AccordionRoot,
  type AccordionRootEmits,
  type AccordionRootProps,
  useForwardPropsEmits,
} from "reka-ui"
import { provide, computed } from "vue"

const props = defineProps<AccordionRootProps & { size?: "md" | "lg" }>()
const emits = defineEmits<AccordionRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)

const sizeRef = computed(() => props.size ?? "md")
provide("accordionSize", sizeRef)
</script>

<template>
  <AccordionRoot data-slot="accordion" v-bind="forwarded">
    <slot />
  </AccordionRoot>
</template>
