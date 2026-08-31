<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { provide } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  PaginationRoot,
  type PaginationRootEmits,
  type PaginationRootProps,
  useForwardPropsEmits,
} from "reka-ui"
import { cn } from "@/lib/utils"
import type { PaginationColor, PaginationSize } from "./types"

const props = withDefaults(
  defineProps<
    PaginationRootProps & {
      class?: HTMLAttributes["class"]
      color?: PaginationColor
      size?: PaginationSize
    }
  >(),
  {
    siblingCount: 1,
    showEdges: true,
    color: "black",
    size: "base",
  },
)
const emits = defineEmits<PaginationRootEmits>()

const delegatedProps = reactiveOmit(props, "class", "color", "size")
const forwarded = useForwardPropsEmits(delegatedProps, emits)

provide("pagination-color", props.color)
provide("pagination-size", props.size)
</script>

<template>
  <PaginationRoot
    data-slot="pagination"
    aria-label="pagination"
    v-bind="forwarded"
    :class="cn('flex items-center', props.class)"
  >
    <slot />
  </PaginationRoot>
</template>
