<script setup lang="ts">
import { computed } from "vue"
import {
  Select as SelectRoot,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/components/atoms/forms/select"
import { SelectItem as RekaSelectItem, SelectItemText } from "reka-ui"
import { Badge } from "@/components/atoms/feedback"
import { Checkbox } from "@/components/atoms/forms"

type Option = { value: string; label: string }

const props = withDefaults(
  defineProps<{
    modelValue?: string[]
    options: Option[]
    placeholder?: string
    disabled?: boolean
    name?: string
    class?: string
  }>(),
  {
    modelValue: () => [],
    placeholder: "Select options",
  },
)

const emit = defineEmits<{
  (e: "update:modelValue", value: string[]): void
}>()

const selected = computed({
  get: () => props.modelValue ?? [],
  set: (val: string[]) => emit("update:modelValue", val),
})

const labelByValue = computed<Record<string, string>>(() =>
  props.options.reduce(
    (acc, o) => {
      acc[o.value] = o.label
      return acc
    },
    {} as Record<string, string>,
  ),
)

function removeTag(value: string) {
  const next = selected.value.filter((v) => v !== value)
  selected.value = next
}
</script>

<template>
  <SelectRoot v-model="selected" multiple :disabled="disabled" :name="name" :class="props.class">
    <SelectTrigger
      class="flex min-h-11 w-[420px] items-center justify-between gap-2 py-2 pr-3 pl-2"
    >
      <div class="flex min-w-0 grow flex-wrap items-center gap-2">
        <template v-if="selected.length">
          <Badge
            v-for="val in selected"
            :key="val"
            color="gray"
            size="sm"
            class="flex items-center gap-1"
          >
            {{ labelByValue[val] ?? val }}
            <button
              type="button"
              @pointerdown.stop.prevent
              @mousedown.stop.prevent
              @click.stop.prevent="removeTag(val)"
            >
              <font-awesome-icon :icon="['fas', 'xmark']" class="text-[12px]" />
            </button>
          </Badge>
        </template>
        <SelectValue v-else :aria-label="placeholder" :placeholder="placeholder" class="pl-2" />
      </div>
    </SelectTrigger>

    <SelectContent>
      <div class="py-1">
        <RekaSelectItem
          v-for="opt in options"
          :key="opt.value"
          :value="opt.value"
          :class="`focus:bg-white-quinternary [&_svg:not([class*='text-'])]:text-black-secondary relative flex w-full cursor-default items-center gap-3 px-4 py-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50`"
        >
          <Checkbox :checked="selected.includes(opt.value)" color="black" />
          <SelectItemText>
            {{ opt.label }}
          </SelectItemText>
        </RekaSelectItem>
      </div>
    </SelectContent>
  </SelectRoot>
</template>
