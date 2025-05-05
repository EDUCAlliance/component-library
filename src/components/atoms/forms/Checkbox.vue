<template>
  <div class="group grid size-5 grid-cols-1">
    <input id="comments" :name="props.name" type="checkbox" checked="true" :class="classes" />
    <CheckIcon
      :class="[
        'pointer-events-none col-start-1 row-start-1 size-3 self-center justify-self-center stroke-3 opacity-0 duration-200 group-has-checked:opacity-100',
        iconColorClass,
      ]"
    />
    <MinusIcon
      :class="[
        'pointer-events-none col-start-1 row-start-1 size-3 self-center justify-self-center stroke-3 opacity-0 duration-200 group-indeterminate:opacity-100',
        iconColorClass,
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import { CheckIcon, MinusIcon } from "lucide-vue-next"
import { computed } from "vue"

// import { ref } from "vue"
// import { Switch } from "@headlessui/vue"
// import { computed } from "vue"
// import { CheckIcon, XIcon } from "lucide-vue-next"

// const internalValueRef = ref(false)

// const isControlled = computed(
//   () => props.value !== undefined && typeof props.onChange === "function",
// )

// const isChecked = computed(() => {
//   return isControlled.value ? props.value : internalValueRef.value
// })

// function handleToggle(newValue: boolean) {
//   if (isControlled.value) {
//     props.onChange?.(newValue)
//   } else {
//     internalValueRef.value = newValue
//   }
// }

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    value?: boolean
    color?: "black" | "yellow" | "pink" | "green" | "orange" | "violet"
    onChange?: (value: boolean) => void
    name?: string
  }>(),
  {
    disabled: false,
    value: false,
    color: "black",
  },
)

const iconColorClass = computed(() => {
  switch (props.color) {
    case "yellow":
      return "text-black-primary" // Dark text on yellow background
    default:
      return "text-white-primary" // White text on dark backgrounds (black, pink, green, violet)
  }
})

const classes = computed(() => ({
  "border-black-quaternary bg-white-primary hover:not-checked:not-indeterminate:bg-white-tertiary outline-white-tertiary col-start-1 row-start-1 cursor-pointer disabled:cursor-not-allowed appearance-none rounded-sm border transition-[border-radius,background-color,border-color] duration-200 hover:rounded-none hover:outline-2 focus-visible:outline-none disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto":
    true,
  "checked:bg-black-primary checked:border-black-primary indeterminate:border-black-primary indeterminate:bg-black-primary":
    props.color === "black",
  "checked:bg-yellow-primary checked:border-yellow-primary indeterminate:border-yellow-primary indeterminate:bg-yellow-primary":
    props.color === "yellow",
  "checked:bg-pink-primary checked:border-pink-primary indeterminate:border-pink-primary indeterminate:bg-pink-primary":
    props.color === "pink",
  "checked:bg-green-primary checked:border-green-primary indeterminate:border-green-primary indeterminate:bg-green-primary":
    props.color === "green",
  "checked:bg-orange-primary checked:border-orange-primary indeterminate:border-orange-primary indeterminate:bg-orange-primary":
    props.color === "orange",
  "checked:bg-violet-primary checked:border-violet-primary indeterminate:border-violet-primary indeterminate:bg-violet-primary":
    props.color === "violet",
}))
</script>
