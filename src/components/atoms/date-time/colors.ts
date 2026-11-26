export type CalendarColor = "black" | "yellow" | "pink" | "green" | "orange" | "violet"

export const calendarColorClasses: Record<CalendarColor, string> = {
  black:
    "[--calendar-accent:var(--color-black-primary)] [--calendar-accent-foreground:var(--color-white-primary)] [--calendar-range:var(--color-black-quaternary)] [--calendar-range-foreground:var(--color-black-secondary)] [--calendar-range-muted:var(--color-white-quinternary)] [--calendar-range-muted-foreground:var(--color-black-quinternary)]",
  yellow:
    "[--calendar-accent:var(--color-yellow-primary)] [--calendar-accent-foreground:var(--color-black-primary)] [--calendar-range:var(--color-yellow-secondary)] [--calendar-range-foreground:var(--color-yellow-quaternary)] [--calendar-range-muted:var(--color-yellow-tertiary)] [--calendar-range-muted-foreground:var(--color-yellow-primary)]",
  pink: "[--calendar-accent:var(--color-pink-primary)] [--calendar-accent-foreground:var(--color-white-primary)] [--calendar-range:var(--color-pink-secondary)] [--calendar-range-foreground:var(--color-pink-quaternary)] [--calendar-range-muted:var(--color-pink-tertiary)] [--calendar-range-muted-foreground:var(--color-pink-primary)]",
  green:
    "[--calendar-accent:var(--color-green-primary)] [--calendar-accent-foreground:var(--color-white-primary)] [--calendar-range:var(--color-green-secondary)] [--calendar-range-foreground:var(--color-green-quaternary)] [--calendar-range-muted:var(--color-green-tertiary)] [--calendar-range-muted-foreground:var(--color-green-primary)]",
  orange:
    "[--calendar-accent:var(--color-orange-primary)] [--calendar-accent-foreground:var(--color-black-primary)] [--calendar-range:var(--color-orange-secondary)] [--calendar-range-foreground:var(--color-orange-quaternary)] [--calendar-range-muted:var(--color-orange-tertiary)] [--calendar-range-muted-foreground:var(--color-orange-primary)]",
  violet:
    "[--calendar-accent:var(--color-violet-primary)] [--calendar-accent-foreground:var(--color-white-primary)] [--calendar-range:var(--color-violet-secondary)] [--calendar-range-foreground:var(--color-violet-quaternary)] [--calendar-range-muted:var(--color-violet-tertiary)] [--calendar-range-muted-foreground:var(--color-violet-primary)]",
}
