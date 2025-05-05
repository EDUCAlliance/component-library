<template>
  <p class="text-yellow-primary text-3xl">test</p>
  <Toggle />
  <ButtonGroup>
    <SecondaryButton>First Button</SecondaryButton>
    <SecondaryButton>Second Button</SecondaryButton>
    <SecondaryButton>Second Button</SecondaryButton>
  </ButtonGroup>
</template>

<script setup lang="ts">
import SecondaryButton from "./atoms/buttons/SecondaryButton.vue"
import Toggle from "./atoms/switches/Toggle.vue"
import ButtonGroup from "./molecules/ButtonGroup.vue"

defineProps<{
  msg: string
}>()
</script>
