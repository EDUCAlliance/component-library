<script setup lang="ts">
import type { AcceptableValue, SelectRootEmits, SelectRootProps } from "reka-ui"
import { SelectRoot, useForwardProps } from "reka-ui"
import { reactiveOmit } from "@vueuse/core"
import { computed, provide } from "vue"
import { selectClearContextKey } from "./context"

const props = defineProps<SelectRootProps<AcceptableValue | boolean> & { clearable?: boolean }>()
const emits = defineEmits<SelectRootEmits<AcceptableValue | boolean> & { clear: [] }>()

const forwarded = useForwardProps(reactiveOmit(props, "clearable"))

provide(selectClearContextKey, {
  clearable: computed(() => props.clearable),
  onClear: () => emits("clear"),
})
</script>

<template>
  <SelectRoot
    data-slot="select"
    v-bind="forwarded"
    @update:model-value="emits('update:modelValue', $event)"
    @update:open="emits('update:open', $event)"
  >
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
