<template>
  <div :class="actionsClasses">
    <slot>
      <GhostButton size="sm" class="w-auto p-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" class="h-4 w-4 fill-current">
          <path
            d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
          />
        </svg>
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

const actionsClasses = cn("flex items-center justify-end px-3 py-0", props.class)
</script>
