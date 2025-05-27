<script setup lang="ts">
import { cn } from "@/lib/utils"
import { TabsList, type TabsListProps } from "reka-ui"
import { computed, type HTMLAttributes } from "vue"

const props = defineProps<TabsListProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsList
    data-slot="tabs-list"
    v-bind="delegatedProps"
    :class="cn('inline-flex w-fit items-center justify-center gap-3', props.class)"
  >
    <slot />
  </TabsList>
</template>
