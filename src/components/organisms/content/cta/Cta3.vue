<template>
  <div class="text-black-primary bg-yellow-primary relative py-12 md:py-16 lg:py-20">
    <BackgroundImage src="/assets/CTA-banner-2.svg" alt="Hero" />
    <div class="relative container mx-auto px-4">
      <div class="flex flex-col items-center gap-6 md:items-start md:gap-8">
        <h2
          class="max-w-3xl text-center text-2xl font-bold text-balance sm:text-3xl md:text-left md:text-4xl lg:text-5xl"
        >
          Contact us and meet the EDUC Team!
        </h2>
        <SoftButton color="violet">More information & EDUC Team</SoftButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BackgroundImage } from "@/components/atoms/content"
import { SoftButton } from "@/components/atoms/buttons"
</script>
