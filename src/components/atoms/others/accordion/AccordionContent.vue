<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { AccordionContent, type AccordionContentProps } from "reka-ui"
import { cn } from "@/lib/utils"
import { inject, computed } from "vue"
import type { ComputedRef } from "vue"

const props = defineProps<AccordionContentProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const injected = inject<ComputedRef<"md" | "lg"> | undefined>("accordionSize", undefined)
const size = injected ?? computed(() => "md")

const sizeClass = computed(() => (size.value === "lg" ? "pb-8" : "pb-6"))
</script>

<template>
  <AccordionContent
    data-slot="accordion-content"
    v-bind="delegatedProps"
    class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
  >
    <div :class="cn('pt-0', sizeClass, props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
