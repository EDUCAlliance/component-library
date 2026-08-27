<script setup lang="ts">
import type { SelectRootEmits, SelectRootProps } from "reka-ui"
import { SelectRoot, useForwardPropsEmits } from "reka-ui"

const props = defineProps<SelectRootProps>()
const emits = defineEmits<SelectRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SelectRoot data-slot="select" v-bind="forwarded">
    <div v-if="$slots.label || $slots.helper" class="flex w-full flex-col gap-2">
      <p class="font-bold" v-if="$slots.label">
        <slot name="label" />
      </p>

      <slot />

      <p class="text-black-tertiary text-sm" v-if="$slots.helper">
        <slot name="helper" />
      </p>
    </div>

    <slot v-else />
  </SelectRoot>
</template>
