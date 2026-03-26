<template>
  <div v-bind="$attrs" class="border-white-quaternary border-t px-4 py-12">
    <div class="container mx-auto">
      <div class="grid gap-8 md:grid-cols-[minmax(240px,300px)_minmax(0,1fr)] md:items-start md:gap-6">
        <div class="w-full md:max-w-[300px]">
          <slot name="logo">
            <EDUCLogo class="mb-8 h-20" />
          </slot>
        </div>
        <div
          class="grid min-w-0 grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 md:pl-10 xl:grid-cols-4"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EDUCLogo } from "../../../atoms/content/logos"

defineOptions({ inheritAttrs: false })

defineSlots<{
  default(props: Record<string, never>): import("vue").VNode[]
  logo(props: Record<string, never>): import("vue").VNode[]
}>()
</script>
