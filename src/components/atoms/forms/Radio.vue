<template>
  <div class="group grid size-5 grid-cols-1">
    <input
      id="comments"
      :name="props.name"
      type="radio"
      :value="props.value"
      :checked="props.checked"
      :class="classes"
      @change="handleChange"
    />
    <div
      :class="[
        'pointer-events-none col-start-1 row-start-1 size-2 self-center justify-self-center rounded-full opacity-0 duration-200 group-has-checked:opacity-100',
        dotColorClass,
      ]"
    ></div>
  </div>
</template>

// TODO: Fix value and onChange
<script setup lang="ts">
import { computed } from "vue"

const emit = defineEmits<{
  change: [value: string | boolean]
}>()

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    value?: string | boolean // Radio value
    checked?: boolean // Is this radio selected
    color?: "black" | "yellow" | "pink" | "green" | "orange" | "violet"
    name?: string
    onChange?: (value: string | boolean) => void
  }>(),
  {
    disabled: false,
    checked: false,
    color: "black",
  },
)

function handleChange(event: Event) {
  const target = event.target as HTMLInputElement
  if (props.onChange && props.value) {
    props.onChange(props.value)
  }
  if (!props.value) {
    return
  }
  emit("change", props.value)
}

const dotColorClass = computed(() => {
  switch (props.color) {
    case "yellow":
      return "bg-black-primary" // Dark dot on yellow radio
    default:
      return "bg-white-primary" // White dot on dark radios (black, pink, green, violet)
  }
})

const classes = computed(() => ({
  "border-black-quaternary bg-white-primary hover:not-checked:bg-white-tertiary outline-white-tertiary col-start-1 row-start-1 cursor-pointer disabled:cursor-not-allowed appearance-none rounded-full border transition-[background-color,border-color] duration-200 hover:outline-2 focus-visible:outline-none disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto":
    true,
  "checked:bg-black-primary checked:border-black-primary": props.color === "black",
  "checked:bg-yellow-primary checked:border-yellow-primary": props.color === "yellow",
  "checked:bg-pink-primary checked:border-pink-primary": props.color === "pink",
  "checked:bg-green-primary checked:border-green-primary": props.color === "green",
  "checked:bg-orange-primary checked:border-orange-primary": props.color === "orange",
  "checked:bg-violet-primary checked:border-violet-primary": props.color === "violet",
}))
</script>
