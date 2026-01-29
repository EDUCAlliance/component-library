<template>
  <div class="text-white-primary bg-green-primary relative py-12 md:py-16 lg:py-20">
    <div class="relative container mx-auto px-4">
      <div class="flex flex-col items-center gap-6 md:gap-8 lg:flex-row lg:justify-between">
        <h2
          class="max-w-3xl text-center text-2xl font-bold text-balance sm:text-3xl md:text-4xl lg:text-left lg:text-5xl"
        >
          Contact us and meet the EDUC Team!
        </h2>
        <SoftButton color="violet" class="shrink-0">More information & EDUC Team</SoftButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SoftButton } from "@/components/atoms/buttons"
</script>
