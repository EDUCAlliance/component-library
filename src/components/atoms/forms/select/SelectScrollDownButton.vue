<script setup lang="ts">
import { cn } from "@/lib/utils"
import { SelectScrollDownButton, type SelectScrollDownButtonProps, useForwardProps } from "reka-ui"
import { computed, type HTMLAttributes } from "vue"

const props = defineProps<SelectScrollDownButtonProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectScrollDownButton
    data-slot="select-scroll-down-button"
    v-bind="forwardedProps"
    :class="cn('flex cursor-default items-center justify-center py-1', props.class)"
  >
    <slot>
      <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-[16px]" />
    </slot>
  </SelectScrollDownButton>
</template>
