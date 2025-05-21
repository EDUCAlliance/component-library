<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from "reka-ui"
import { cn } from "@/lib/utils"
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from "reka-ui"
import { computed, type HTMLAttributes } from "vue"

const props = defineProps<SliderRootProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<SliderRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
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
        class="bg-black-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
      />
    </SliderTrack>

    <SliderThumb
      v-for="(_, key) in modelValue"
      :key="key"
      data-slot="slider-thumb"
      class="border-black-primary bg-white-primary focus-visible:ring-black-secondary hover:ring-black-secondary block size-7 shrink-0 cursor-pointer rounded-full border-2 shadow-sm transition-[color] hover:ring-2 hover:ring-offset-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden data-[disabled]:pointer-events-none"
    />
  </SliderRoot>
</template>
