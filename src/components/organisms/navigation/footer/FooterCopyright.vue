<template>
  <div class="border-white-quaternary border-y px-4 py-2">
    <div
      class="container mx-auto flex flex-wrap items-center justify-center gap-4 sm:justify-between"
    >
      <p class="text-sm">
        &copy; {{ new Date().getFullYear() }} All rights reserved by EDUC consortium.
      </p>
      <slot name="logo">
        <EuropeLogo class="h-8" />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EuropeLogo } from "../../../atoms/content/logos"

defineSlots<{
  logo(props: Record<string, never>): import("vue").VNode[]
}>()
</script>
