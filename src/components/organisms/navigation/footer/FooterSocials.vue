<template>
  <div
    v-bind="$attrs"
    class="[&>a]:text-black-tertiary [&>a]:hover:text-black-primary mt-4 flex items-center gap-6 [&>a]:transition-colors"
  >
    <a href="https://www.facebook.com/educunivercity" target="_blank">
      <font-awesome-icon :icon="['fab', 'facebook']" class="text-[16px]" />
    </a>
    <a href="https://x.com/EDUCUniverCity" target="_blank">
      <font-awesome-icon :icon="['fab', 'x-twitter']" class="text-[16px]" />
    </a>
    <a href="https://www.instagram.com/educunivercity/" target="_blank">
      <font-awesome-icon :icon="['fab', 'instagram']" class="text-[16px]" />
    </a>
    <a href="https://www.youtube.com/@educunivercity9394" target="_blank">
      <font-awesome-icon :icon="['fab', 'youtube']" class="text-[16px]" />
    </a>
    <a href="https://www.linkedin.com/company/european-digital-univercity" target="_blank">
      <font-awesome-icon :icon="['fab', 'linkedin']" class="text-[16px]" />
    </a>
  </div>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })
</script>
