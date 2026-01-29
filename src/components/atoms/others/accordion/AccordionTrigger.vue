<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { AccordionHeader, AccordionTrigger, type AccordionTriggerProps } from "reka-ui"
import { cn } from "@/lib/utils"
import { inject } from "vue"

const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const size = inject<"sm" | "md" | "lg">("accordionSize", "md")
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      data-slot="accordion-trigger"
      v-bind="delegatedProps"
      :class="
        cn(
          size === 'lg' ? 'text-3xl' : size === 'md' ? 'text-lg' : 'text-base',
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md text-left font-bold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>div>svg]:rotate-180 [&[data-state=open]>div>svg[data-icon=plus]]:opacity-0',
          size === 'sm' ? 'py-4' : 'py-6',
          props.class,
        )
      "
    >
      <slot />
      <slot name="icon">
        <div class="relative h-5 w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            data-icon="plus"
            :class="
              cn(
                size === 'lg' ? 'size-6' : size === 'md' ? 'size-6' : 'size-4',
                'text-black-primary pointer-events-none absolute top-1/2 right-0 shrink-0 -translate-y-1/2 duration-200',
              )
            "
          >
            <path
              d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            data-icon="minus"
            :class="
              cn(
                size === 'lg' ? 'size-6' : size === 'md' ? 'size-6' : 'size-4',
                'text-black-primary pointer-events-none absolute top-1/2 right-0 shrink-0 -translate-y-1/2 duration-200',
              )
            "
          >
            <path
              d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z"
            />
          </svg>
        </div>
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
