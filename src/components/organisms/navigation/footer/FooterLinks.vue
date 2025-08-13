<template>
  <div v-bind="$attrs" class="border-white-quaternary border-t px-4 py-12">
    <div class="container mx-auto">
      <div class="grid gap-6 md:grid-cols-[300px_1fr_1fr_1fr_1fr]">
        <div>
          <img src="/assets/logo.svg" alt="logo" class="mb-8 h-20" />
          <slot name="logo" />
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })
</script>
