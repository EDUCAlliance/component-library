<template>
  <p class="text-yellow-primary text-3xl">test</p>
  <Toggle />
</template>

<script setup lang="ts">
import Toggle from "./elements/buttons/Toggle.vue"

defineProps<{
  msg: string
}>()
</script>
