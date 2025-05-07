<template>
  <p class="text-yellow-primary text-3xl">test</p>
  <Toggle />
  <ButtonGroup>
    <SecondaryButton>First Button</SecondaryButton>
    <SecondaryButton>Second Button</SecondaryButton>
    <SecondaryButton>Second Button</SecondaryButton>
  </ButtonGroup>
  <Radio />
  <Slider :default-value="[33]" :max="100" :step="1" />
  <Badge />
</template>

<script setup lang="ts">
import SecondaryButton from "./atoms/buttons/SecondaryButton.vue"
import Radio from "./atoms/forms/Radio.vue"
import Toggle from "./atoms/switches/Toggle.vue"
import ButtonGroup from "./molecules/ButtonGroup.vue"
import Slider from "./atoms/forms/Slider.vue"
import Badge from "./atoms/others/Badge.vue"

defineProps<{
  msg: string
}>()
</script>
