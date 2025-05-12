<template>
  <div
    class="flex flex-wrap gap-0 [&_*:first-child]:-mr-px [&_*:first-child]:rounded-r-none [&_*:last-child]:rounded-l-none [&_*:not(:first-child):not(:last-child)]:-mr-px [&_*:not(:first-child):not(:last-child)]:rounded-none"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>
