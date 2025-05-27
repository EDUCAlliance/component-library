<template>
  <div class="relative flex h-screen w-full flex-col items-center justify-center">
    <BackgroundImage src="/assets/hero/simple.svg" alt="Hero" />

    <div
      class="text-black-primary relative container mx-auto flex flex-col items-center gap-12 text-center"
    >
      <h1 class="text-4xl font-bold text-balance xl:text-7xl">This is headline</h1>
      <p class="max-w-3xl text-xl xl:text-2xl">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus ac leo pretium faucibus.
        Vestibulum fermentum tortor id mi. Morbi scelerisque luctus velit.
      </p>
      <div class="flex gap-6">
        <PrimaryButton size="lg">Join now</PrimaryButton>
        <GhostButton size="lg">
          <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
          Visit OpenUp
        </GhostButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BackgroundImage } from "@/components/atoms/content"
import { GhostButton, PrimaryButton } from "@/components/atoms/buttons"
</script>
