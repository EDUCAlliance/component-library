<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from "reka-ui"
import { cn } from "@/lib/utils"
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from "reka-ui"
import { computed, type HTMLAttributes, withDefaults } from "vue"

const props = withDefaults(
  defineProps<
    SliderRootProps & {
      class?: HTMLAttributes["class"]
      color?: "yellow" | "pink" | "green" | "orange" | "violet" | "black"
    }
  >(),
  {
    color: "black",
  },
)
const emits = defineEmits<SliderRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const colorClasses = computed(() => {
  return {
    // Track background is always the same
    range: {
      yellow: "bg-yellow-primary",
      pink: "bg-pink-primary",
      green: "bg-green-primary",
      orange: "bg-orange-primary",
      violet: "bg-violet-primary",
      black: "bg-black-primary",
    }[props.color],
    thumb: {
      yellow:
        "focus-visible:ring-yellow-secondary hover:ring-yellow-secondary border-yellow-primary",
      pink: "focus-visible:ring-pink-secondary hover:ring-pink-secondary border-pink-primary",
      green: "focus-visible:ring-green-secondary hover:ring-green-secondary border-green-primary",
      orange:
        "focus-visible:ring-orange-secondary hover:ring-orange-secondary border-orange-primary",
      violet:
        "focus-visible:ring-violet-secondary hover:ring-violet-secondary border-violet-primary",
      black: "focus-visible:ring-black-secondary hover:ring-black-secondary border-black-primary",
    }[props.color],
  }
})
</script>

<template>
  <SliderRoot
    v-slot="{ modelValue }"
    data-slot="slider"
    :class="
      cn(
        'relative flex w-full touch-none items-center select-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
        props.class,
      )
    "
    v-bind="forwarded"
  >
    <SliderTrack
      data-slot="slider-track"
      class="bg-black-quaternary relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-3 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-3"
    >
      <SliderRange
        data-slot="slider-range"
        :class="
          cn(
            colorClasses.range,
            'absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full',
          )
        "
      />
    </SliderTrack>

    <SliderThumb
      v-for="(_, key) in modelValue"
      :key="key"
      data-slot="slider-thumb"
      :class="
        cn(
          colorClasses.thumb,
          'bg-white-primary block size-7 shrink-0 cursor-pointer rounded-full border-2 shadow-sm transition-[color] hover:ring-2 hover:ring-offset-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden data-[disabled]:pointer-events-none',
        )
      "
    />
  </SliderRoot>
</template>
