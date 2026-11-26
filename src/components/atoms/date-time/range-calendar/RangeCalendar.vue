<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  RangeCalendarRoot,
  type RangeCalendarRootEmits,
  type RangeCalendarRootProps,
  useForwardPropsEmits,
} from "reka-ui"
import { cn } from "@/lib/utils"
import { type CalendarColor, calendarColorClasses } from "../colors"
import {
  RangeCalendarCell,
  RangeCalendarCellTrigger,
  RangeCalendarGrid,
  RangeCalendarGridBody,
  RangeCalendarGridHead,
  RangeCalendarGridRow,
  RangeCalendarHeadCell,
  RangeCalendarHeader,
  RangeCalendarHeading,
  RangeCalendarNextButton,
  RangeCalendarPrevButton,
} from "."

const props = withDefaults(
  defineProps<
    RangeCalendarRootProps & { class?: HTMLAttributes["class"]; color?: CalendarColor }
  >(),
  {
    color: "black",
  },
)

const emits = defineEmits<RangeCalendarRootEmits>()

const delegatedProps = reactiveOmit(props, "class", "color")

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <RangeCalendarRoot
    v-slot="{ grid, weekDays }"
    data-slot="range-calendar"
    :class="
      cn(
        'border-black-quaternary w-fit rounded-lg border p-2',
        calendarColorClasses[props.color],
        props.class,
      )
    "
    v-bind="forwarded"
    :week-starts-on="1"
  >
    <RangeCalendarHeader>
      <RangeCalendarHeading />

      <div class="flex items-center gap-1">
        <RangeCalendarPrevButton />
        <RangeCalendarNextButton />
      </div>
    </RangeCalendarHeader>

    <div class="mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
      <RangeCalendarGrid v-for="month in grid" :key="month.value.toString()">
        <RangeCalendarGridHead>
          <RangeCalendarGridRow>
            <RangeCalendarHeadCell v-for="day in weekDays" :key="day">
              {{ day }}
            </RangeCalendarHeadCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridHead>
        <RangeCalendarGridBody>
          <RangeCalendarGridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            class="w-full"
          >
            <RangeCalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
            >
              <RangeCalendarCellTrigger :day="weekDate" :month="month.value" />
            </RangeCalendarCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridBody>
      </RangeCalendarGrid>
    </div>
  </RangeCalendarRoot>
</template>
