<template>
  <div v-bind="$attrs" class="border-white-quaternary border-t px-4 py-12">
    <div class="container mx-auto">
      <div
        class="grid gap-8 xl:grid-cols-[minmax(240px,300px)_minmax(0,1fr)] xl:items-start xl:gap-6"
      >
        <div class="w-full xl:max-w-[300px]">
          <slot name="logo">
            <EDUCLogo class="mb-8 h-20" />
          </slot>
        </div>
        <div
          class="flex min-w-0 flex-col gap-8 md:flex-row md:flex-nowrap md:gap-12 xl:pl-10 md:[&>*]:flex-1"
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
