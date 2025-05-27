<script setup lang="ts">
import { computed, provide } from "vue"
import type { HTMLAttributes } from "vue"
import { Avatar, AvatarImage, AvatarFallback } from "../../data-display/avatar"
import ContactCardHeader from "./ContactCardHeader.vue"
import ContactCardContact from "./ContactCardContact.vue"

type ContactCardColor = "yellow" | "pink" | "green" | "orange" | "violet"

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"]
    color?: ContactCardColor
  }>(),
  {
    color: "pink",
  },
)

provide("contact-card-color", props.color)

const colorClasses = computed(() => ({
  "border-yellow-primary": props.color === "yellow",
  "border-pink-primary": props.color === "pink",
  "border-green-primary": props.color === "green",
  "border-orange-primary": props.color === "orange",
  "border-violet-primary": props.color === "violet",
}))

const hrColorClasses = computed(() => ({
  "border-yellow-primary": props.color === "yellow",
  "border-pink-primary": props.color === "pink",
  "border-green-primary": props.color === "green",
  "border-orange-primary": props.color === "orange",
  "border-violet-primary": props.color === "violet",
}))
</script>

<template>
  <div
    :class="['flex flex-col items-center gap-6 rounded-lg border-2 p-8', colorClasses, props.class]"
  >
    <slot name="avatar">
      <Avatar size="xl" class="h-48 w-48">
        <AvatarImage src="https://cataas.com/cat?type=square&width=64" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </slot>

    <slot name="header">
      <ContactCardHeader
        name="John Doe"
        organization="University of Potsdam"
        role="Project Manager"
      />
    </slot>

    <hr :class="['w-full border-t-2', hrColorClasses]" />

    <slot name="contact">
      <ContactCardContact email="john.doe@muni.cz" />
    </slot>
  </div>
</template>
