<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { PaginationList, type PaginationListProps, useForwardProps } from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<PaginationListProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationList
    v-slot="{ items }"
    data-slot="pagination-list"
    v-bind="forwardedProps"
    :class="cn('flex items-center -space-x-px', props.class)"
  >
    <slot :items="items" />
  </PaginationList>
</template>
