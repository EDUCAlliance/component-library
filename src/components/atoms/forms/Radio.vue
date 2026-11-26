<template>
  <div class="flex items-start gap-3">
    <div class="group grid size-5 shrink-0 grid-cols-1">
      <input
        :id="inputId"
        :name="props.name"
        type="radio"
        :value="props.value"
        :checked="isChecked"
        :disabled="props.disabled"
        :aria-describedby="$slots.helper ? helperId : undefined"
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
    <div v-if="$slots.label || $slots.helper" class="flex flex-col gap-0.5 text-sm">
      <label
        v-if="$slots.label"
        :for="inputId"
        :class="[
          'leading-5 font-bold',
          props.disabled ? 'text-black-quinternary cursor-not-allowed' : 'cursor-pointer',
        ]"
      >
        <slot name="label" />
      </label>
      <p v-if="$slots.helper" :id="helperId" class="text-black-tertiary">
        <slot name="helper" />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useId } from "vue"

const emit = defineEmits<{
  change: [value: string | boolean]
  "update:modelValue": [value: string | boolean]
}>()

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    value?: string | boolean // Radio value
    checked?: boolean // Is this radio selected
    modelValue?: string | boolean // Selected value of the group, use with v-model
    id?: string
    color?: "black" | "yellow" | "pink" | "green" | "orange" | "violet"
    name?: string
    onChange?: (value: string | boolean) => void
  }>(),
  {
    disabled: false,
    checked: false,
    value: undefined,
    modelValue: undefined,
    color: "black",
  },
)

const generatedId = useId()
const inputId = computed(() => props.id ?? generatedId)
const helperId = computed(() => `${inputId.value}-helper`)

const isChecked = computed(() =>
  props.modelValue !== undefined ? props.modelValue === props.value : props.checked,
)

function handleChange() {
  if (props.value === undefined) return
  props.onChange?.(props.value)
  emit("change", props.value)
  emit("update:modelValue", props.value)
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
