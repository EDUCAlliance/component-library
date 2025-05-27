<template>
  <div :class="actionsClasses">
    <slot>
      <GhostButton size="sm" class="w-auto p-1">
        <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" class="h-3 w-3" />
      </GhostButton>
    </slot>
  </div>
</template>

<script setup lang="ts">
import type { RichTableActionsProps } from "./types"
import { cn } from "@/lib/utils"
import { GhostButton } from "../../../atoms/buttons"

const props = withDefaults(defineProps<RichTableActionsProps>(), {
  class: "",
})

const actionsClasses = cn("flex items-center justify-end px-3", props.class)
</script>
