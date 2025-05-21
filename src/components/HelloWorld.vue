<template>
  <NotificationBar
    headline="Staff Week · Digital Course Development and Virtual Mobility"
    text="University od Pécs · Hungary"
    color="pattern"
  >
    <p class="text-sm font-bold">Staff Week · Digital Course Development and Virtual Mobility</p>
    <p class="text-sm opacity-70">University od Pécs · Hungary</p>
    <GhostButton class="text-white-primary" size="sm"
      >See what’s coming next <ArrowRight class="size-4"
    /></GhostButton>
  </NotificationBar>
  <div class="mx-auto max-w-2xl">
    <!-- NotificationBar Demo -->

    <!-- End NotificationBar Demo -->
    <p class="text-yellow-primary text-3xl">test</p>
    <Toggle />
    <ButtonGroup>
      <SecondaryButton>First Button</SecondaryButton
      ><TooltipProvider>
        <Tooltip>
          <TooltipTrigger><SecondaryButton>Second Button</SecondaryButton></TooltipTrigger>
          <TooltipContent>Hello world!</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <SecondaryButton>Second Button</SecondaryButton>
    </ButtonGroup>
    <Radio />
    <Slider :default-value="[33]" :max="100" :step="1" />

    <Loading />

    <Breadcrumbs>
      <BreadcrumbsLink href="/">
        <BreadcrumbsIcon>
          <Home :size="20" />
        </BreadcrumbsIcon>
      </BreadcrumbsLink>
      <BreadcrumbsArrow />
      <BreadcrumbsLink href="/projects" active> Projects </BreadcrumbsLink>
      <BreadcrumbsArrow />
      <BreadcrumbsLink href="/projects/1"> Lorem ipsum </BreadcrumbsLink>
    </Breadcrumbs>

    <Select>
      <SelectTrigger class="w-[300px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple"
          >Apple <span class="text-black-sexternary">Secondary text</span></SelectItem
        >
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>

<script setup lang="ts">
import SecondaryButton from "./atoms/buttons/SecondaryButton.vue"
import Radio from "./atoms/forms/Radio.vue"
import Toggle from "./atoms/switches/Toggle.vue"
import ButtonGroup from "./molecules/ButtonGroup.vue"
import Slider from "./atoms/forms/Slider.vue"
import Loading from "./atoms/others/Loading.vue"
import { TooltipTrigger, TooltipContent, TooltipProvider, Tooltip } from "./atoms/others/tooltip"
import {
  Breadcrumbs,
  BreadcrumbsLink,
  BreadcrumbsArrow,
  BreadcrumbsIcon,
} from "./atoms/others/breadcrumbs"
import { Home, ArrowRight } from "lucide-vue-next"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "./atoms/forms/select"
import NotificationBar from "./atoms/others/NotificationBar.vue"
import GhostButton from "./atoms/buttons/GhostButton.vue"

defineProps<{
  msg: string
}>()
</script>
