<template>
  <div v-bind="$attrs" class="border-white-quaternary border-t px-4 py-12">
    <div class="container mx-auto">
      <div class="flex flex-col gap-8 md:flex-row md:justify-between md:gap-6">
        <div class="w-full shrink-0 md:w-[300px]">
          <slot name="logo">
            <EDUCLogo class="mb-8 h-20" />
          </slot>
        </div>
        <div class="flex flex-1 flex-wrap gap-6 md:justify-between md:gap-12 md:pl-10">
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
