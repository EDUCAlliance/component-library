<script setup lang="ts">
import EDUCLogo from "@/components/atoms/logos/EDUCLogo.vue"
import NavigationLink from "./NavigationLink.vue"
import GhostButton from "@/components/atoms/buttons/GhostButton.vue"
import PrimaryButton from "@/components/atoms/buttons/PrimaryButton.vue"
import { ref } from "vue"

const isOpen = ref(false)
</script>

<template>
  <div class="bg-white-primary py-4">
    <div class="container mx-auto hidden justify-between px-4 lg:flex">
      <div class="flex items-center gap-12">
        <EDUCLogo />
        <NavigationLink href="https://www.google.com">About us</NavigationLink>
        <NavigationLink href="https://www.google.com">Resources</NavigationLink>
        <NavigationLink href="https://www.google.com">People</NavigationLink>
      </div>
      <div class="flex items-center gap-6">
        <GhostButton class="text-black-tertiary h-12 w-12 justify-center [&>svg]:size-5!">
          <font-awesome-icon :icon="['fas', 'search']" />
        </GhostButton>
        <GhostButton class="text-black-tertiary font-semibold">
          English <font-awesome-icon :icon="['fas', 'chevron-down']" class="text-sm" />
        </GhostButton>
        <PrimaryButton>Log in</PrimaryButton>
      </div>
    </div>
    <div class="container mx-auto px-4 lg:hidden">
      <div class="flex items-center gap-6">
        <NavigationLink href="https://www.google.com">About us</NavigationLink>
        <NavigationLink href="https://www.google.com">Resources</NavigationLink>
        <NavigationLink href="https://www.google.com">People</NavigationLink>
      </div>
    </div>
  </div>
</template>
