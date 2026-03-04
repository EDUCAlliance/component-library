<script lang="ts" setup>
import { Toaster as Sonner, type ToasterProps } from "vue-sonner"
import "./sonner.css"

const props = defineProps<ToasterProps>()
</script>

<template>
  <Sonner class="toaster group" v-bind="props" rich-colors :duration="1000000" close-button />
</template>
