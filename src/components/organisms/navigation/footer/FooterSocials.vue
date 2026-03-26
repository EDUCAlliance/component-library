<template>
  <div
    v-bind="$attrs"
    class="[&>a]:text-black-tertiary [&>a]:hover:text-black-primary mt-4 flex items-center gap-6 [&>a]:transition-colors"
  >
    <a
      v-for="social in socials"
      :key="social.href"
      :href="social.href"
      :aria-label="social.label"
      rel="noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon :icon="social.icon" class="text-[16px]" />
    </a>
  </div>
</template>

<script setup lang="ts">
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

defineOptions({ inheritAttrs: false })

const socials = [
  {
    href: "https://www.facebook.com/educunivercity",
    label: "EDUC on Facebook",
    icon: faFacebookF,
  },
  {
    href: "https://x.com/EDUCUniverCity",
    label: "EDUC on X",
    icon: faXTwitter,
  },
  {
    href: "https://www.instagram.com/educunivercity/",
    label: "EDUC on Instagram",
    icon: faInstagram,
  },
  {
    href: "https://www.youtube.com/@educunivercity9394",
    label: "EDUC on YouTube",
    icon: faYoutube,
  },
  {
    href: "https://www.linkedin.com/company/european-digital-univercity",
    label: "EDUC on LinkedIn",
    icon: faLinkedinIn,
  },
] as const
</script>
