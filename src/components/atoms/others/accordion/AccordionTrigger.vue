<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { AccordionHeader, AccordionTrigger, type AccordionTriggerProps } from "reka-ui"
import { cn } from "@/lib/utils"
import { inject } from "vue"

const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const size = inject<"md" | "lg">("accordionSize", "md")
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      data-slot="accordion-trigger"
      v-bind="delegatedProps"
      :class="
        cn(
          size === 'lg' ? 'text-3xl' : 'text-lg',
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-6 text-left font-bold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>div>svg]:rotate-180 [&[data-state=open]>div>svg[data-icon=plus]]:opacity-0',
          props.class,
        )
      "
    >
      <slot />
      <slot name="icon">
        <div class="relative h-5 w-5">
          <font-awesome-icon
            :icon="['fas', 'plus']"
            :class="
              cn(
                size === 'lg' ? 'text-2xl' : 'text-lg',
                'text-black-primary pointer-events-none absolute top-1/2 right-0 shrink-0 -translate-y-1/2 duration-200',
              )
            "
          />
          <font-awesome-icon
            :icon="['fas', 'minus']"
            :class="
              cn(
                size === 'lg' ? 'text-2xl' : 'text-lg',
                'text-black-primary pointer-events-none absolute top-1/2 right-0 shrink-0 -translate-y-1/2 duration-200',
              )
            "
          />
        </div>
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
