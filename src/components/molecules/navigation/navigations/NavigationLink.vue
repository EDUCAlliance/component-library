<script setup lang="ts">
import LinkButton from "@/components/atoms/buttons/LinkButton.vue"

defineProps<{
  href: string
}>()
</script>

<template>
  <LinkButton class="text-black-tertiary hover:text-black-primary font-semibold" :href="href"
    ><slot
  /></LinkButton>
</template>
