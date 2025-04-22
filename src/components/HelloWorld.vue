<script setup lang="ts">
import PrimaryButton from "./elements/PrimaryButton.vue"

defineProps<{
  msg: string
}>()
</script>

<template>
  <p class="text-yellow-primary text-3xl">test</p>
  <PrimaryButton>Test</PrimaryButton>
</template>
