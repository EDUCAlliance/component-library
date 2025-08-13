<template>
  <article :class="cardClasses">
    <slot />
  </article>
</template>

<script setup lang="ts">
import { provide } from "vue"
import type { CardProps } from "./types"
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<CardProps>(), {
  variant: "default",
  class: "",
})

const baseClasses = "overflow-hidden rounded-lg shadow-sm relative duration duration-300"

const gradientStrokeBackgroundByName: Record<NonNullable<CardProps["gradient"]>, string> = {
  pinkOrange:
    "[background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(180deg,_#F96E99_0%,_#FF9880_100%)_border-box]",
  greenYellow:
    "[background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(180deg,_#28BE7F_0%,_#E8DD79_100%)_border-box]",
  purplePink:
    "[background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(180deg,_#9D76E5_0%,_#F96E99_100%)_border-box]",
}

const gradientStrokeBackground = gradientStrokeBackgroundByName[props.gradient ?? "pinkOrange"]

const variantClasses =
  props.variant === "gradient"
    ? cn("border border-transparent text-black-primary", gradientStrokeBackground)
    : "border border-gray-200 bg-white"

// Gradient variant renders a gradient stroke using CSS border-image

const cardClasses = cn(baseClasses, variantClasses, props.class)

provide("cardContext", props)
</script>
