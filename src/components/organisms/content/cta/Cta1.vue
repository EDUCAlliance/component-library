<template>
  <div class="text-white-primary relative py-16 md:py-24 lg:py-32">
    <BackgroundImage src="/assets/example-image-bg.jpg" alt="Hero" />
    <div class="bg-black-primary/30 absolute inset-0" />
    <div class="relative container mx-auto px-4">
      <div class="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-12">
        <h2
          class="max-w-3xl text-center text-2xl font-bold text-balance sm:text-3xl md:text-4xl lg:text-5xl"
        >
          Discover what EDUC offers! Tell us some more about yourself.
        </h2>
        <div class="flex flex-col flex-wrap justify-center gap-3 sm:flex-row md:gap-4">
          <SoftButton color="violet">I am a Student</SoftButton>
          <SoftButton color="orange">I am a Researcher</SoftButton>
          <SoftButton color="pink">I am a Teacher</SoftButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BackgroundImage } from "@/components/atoms/content"
import { SoftButton } from "@/components/atoms/buttons"
</script>
