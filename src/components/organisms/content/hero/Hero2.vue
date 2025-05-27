<template>
  <div class="relative flex h-screen w-full flex-col items-center justify-center">
    <BackgroundImage src="/assets/example-image-bg.jpg" alt="Hero" />
    <BackgroundImage src="/assets/hero/background-4.svg" class="object-left" alt="Hero" />

    <div
      class="text-white-primary relative container mx-auto flex flex-col items-start gap-12 text-left"
    >
      <h1 class="text-4xl font-bold text-balance xl:text-7xl">
        Welcome to EDUC Alliance's innovation and tech transfer hub.
      </h1>
      <p class="max-w-3xl text-xl xl:text-2xl">
        Explore cutting-edge research and innovation from EDUC Alliance members. Connect with a
        dynamic ecosystem and drive the next big idea.
      </p>
      <div class="flex gap-6">
        <PrimaryButton size="lg" dark>Join now</PrimaryButton>
        <GhostButton size="lg" class="text-white-primary">
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
