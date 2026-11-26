<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core"
import { SelectValue, type SelectValueProps } from "reka-ui"

const props = withDefaults(
  defineProps<
    SelectValueProps & {
      maxDisplayed?: number
      formatSelected?: (count: number) => string
    }
  >(),
  {
    maxDisplayed: 2,
    formatSelected: (count: number) => `${count} selected`,
  },
)

const forwarded = reactiveOmit(props, "maxDisplayed", "formatSelected")
</script>

<template>
  <SelectValue data-slot="select-value" v-bind="forwarded" v-slot="{ selectedLabel, modelValue }">
    <slot :selected-label="selectedLabel" :model-value="modelValue">
      <template v-if="Array.isArray(modelValue) && modelValue.length > props.maxDisplayed">
        {{ props.formatSelected(modelValue.length) }}
      </template>
      <template v-else>
        {{ selectedLabel.length ? selectedLabel.join(", ") : props.placeholder }}
      </template>
    </slot>
  </SelectValue>
</template>
