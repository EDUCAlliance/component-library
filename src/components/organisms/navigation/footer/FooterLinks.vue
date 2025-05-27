<template>
  <div class="border-white-quaternary border-t px-4 py-12">
    <div class="container mx-auto">
      <div class="grid gap-6 md:grid-cols-[300px_1fr_1fr_1fr_1fr]">
        <div>
          <img src="/assets/logo.svg" alt="logo" class="mb-8 h-20" />
          <FooterCol title="Contact us">
            <FooterLink href="#">Our staff</FooterLink>
            <FooterLink href="tel:+49456789123">
              <Phone class="size-4" /> +49 456 789 123
            </FooterLink>
            <FooterLink href="tel:+49456789123">
              <Phone class="size-4" /> +49 345 678 912
            </FooterLink>
            <FooterLink href="mailto:info@example.com">
              <Mail class="size-4" />
              info@example.com
            </FooterLink>
          </FooterCol>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FooterCol from "./FooterCol.vue"
import FooterLink from "./FooterLink.vue"
import { Mail, Phone } from "lucide-vue-next"
</script>
