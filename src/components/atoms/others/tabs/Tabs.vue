<script setup lang="ts">
import type { TabsRootEmits, TabsRootProps } from "reka-ui"
import { provide, type HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"
import { reactiveOmit } from "@vueuse/core"
import { TabsRoot, useForwardPropsEmits } from "reka-ui"

const props = defineProps<
  TabsRootProps & {
    class?: HTMLAttributes["class"]
    color?: "black" | "yellow" | "pink" | "green" | "orange" | "violet"
  }
>()
const emits = defineEmits<TabsRootEmits>()

const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegatedProps, emits)
provide("tabs-color", props.color || "black")
</script>

<template>
  <TabsRoot data-slot="tabs" v-bind="forwarded" :class="cn('flex flex-col gap-2', props.class)">
    <slot />
  </TabsRoot>
</template>
