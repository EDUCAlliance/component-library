import { cva, type VariantProps } from "class-variance-authority"

export { default as Alert } from "./Alert.vue"
export { default as AlertDescription } from "./AlertDescription.vue"
export { default as AlertTitle } from "./AlertTitle.vue"

export const alertVariants = cva(
  "relative w-full rounded-lg border p-4 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*5)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-2 gap-y-1 items-start [&>svg]:size-5 [&>svg]:text-current *:data-[slot=alert-title]:font-bold [&>svg]:translate-y-0.5",
  {
    variants: {
      variant: {
        default: "text-card-foreground",
        error:
          "bg-error-secondary border-error-primary text-error-quinternary [&>svg]:text-error-primary *:data-[slot=alert-description]:text-error-quaternary",
        success:
          "bg-success-secondary border-success-primary text-success-quinternary [&>svg]:text-success-primary *:data-[slot=alert-description]:text-success-quaternary",
        warning:
          "bg-warning-secondary border-warning-primary text-warning-quinternary [&>svg]:text-warning-primary *:data-[slot=alert-description]:text-warning-quaternary",
        message:
          "bg-message-secondary border-message-primary text-message-quinternary [&>svg]:text-message-primary *:data-[slot=alert-description]:text-message-quaternary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export type AlertVariants = VariantProps<typeof alertVariants>
