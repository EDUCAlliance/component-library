<template>
  <p class="text-yellow-primary text-3xl">test</p>
  <Toggle />
  <ButtonGroup>
    <SecondaryButton>First Button</SecondaryButton
    ><TooltipProvider>
      <Tooltip>
        <TooltipTrigger><SecondaryButton>Second Button</SecondaryButton></TooltipTrigger>
        <TooltipContent>Hello world!</TooltipContent>
      </Tooltip>
    </TooltipProvider>

    <SecondaryButton>Second Button</SecondaryButton>
  </ButtonGroup>
  <Radio />
  <Slider :default-value="[33]" :max="100" :step="1" />

  <Loading />

  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>Hover</TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

<script setup lang="ts">
import SecondaryButton from "./atoms/buttons/SecondaryButton.vue"
import Radio from "./atoms/forms/Radio.vue"
import Toggle from "./atoms/switches/Toggle.vue"
import ButtonGroup from "./molecules/ButtonGroup.vue"
import Slider from "./atoms/forms/Slider.vue"
import Loading from "./atoms/others/Loading.vue"
import { TooltipTrigger, TooltipContent, TooltipProvider, Tooltip } from "./atoms/others/tooltip"

defineProps<{
  msg: string
}>()
</script>
