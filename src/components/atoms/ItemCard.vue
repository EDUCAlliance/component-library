<template>
  <div
    class="border-black-quaternary flex h-24 cursor-pointer items-center overflow-hidden rounded-lg border transition-[border-radius] hover:rounded-none"
  >
    <div
      :class="[
        'flex h-full w-20 items-center justify-center text-xl',
        {
          'bg-yellow-primary text-black-primary': color === 'yellow',
          'bg-pink-primary text-white-primary': color === 'pink',
          'bg-green-primary text-white-primary': color === 'green',
          'bg-orange-primary text-black-primary': color === 'orange',
          'bg-violet-primary text-white-primary': color === 'violet',
        },
      ]"
    >
      <slot name="icon" />
    </div>
    <div class="flex flex-1 items-center justify-between gap-8 p-4">
      <p class="font-bold"><slot /></p>
      <font-awesome-icon
        :icon="['fas', 'ellipsis-vertical']"
        class="text-black-sexternary text-lg"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: "yellow" | "pink" | "green" | "orange" | "violet"
  }>(),
  {
    color: "pink",
  },
)
</script>
