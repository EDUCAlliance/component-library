<template>
  <NotificationBar
    headline="Staff Week · Digital Course Development and Virtual Mobility"
    text="University od Pécs · Hungary"
    color="pattern"
  >
    <p class="text-sm font-bold">Staff Week · Digital Course Development and Virtual Mobility</p>
    <p class="text-sm opacity-70">University od Pécs · Hungary</p>
    <GhostButton class="text-white-primary" size="sm">
      See what's coming next <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-4" />
    </GhostButton>
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
    <Checkbox />
    <Slider :default-value="[33]" :max="100" :step="1" />

    <Loading />

    <Table :columns="columns" :rows="rows" color="green">
      <!-- Volitelně můžeš použít sloty pro vlastní obsah hlavičky nebo buňky -->
      <template #header-name>
        <span>Jméno</span>
      </template>
      <template #cell-age="{ row }">
        <strong>{{ row.age }} let</strong>
      </template>
    </Table>

    <div class="flex">
      <Input placeholder="Placeholder">
        <template #prefix>
          <font-awesome-icon :icon="['fas', 'user']" />
        </template>
        <!-- <template #suffix>
          <font-awesome-icon :icon="['fas', 'question-circle']" />
        </template> -->
        <template #helper>
          <span>Helper or error message here</span>
        </template>
      </Input>
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

    <Breadcrumbs>
      <BreadcrumbsLink href="/">
        <BreadcrumbsIcon>
          <font-awesome-icon :icon="['fas', 'house']" class="text-[20px]" />
        </BreadcrumbsIcon>
      </BreadcrumbsLink>
      <BreadcrumbsArrow />
      <BreadcrumbsLink href="/projects" active> Projects </BreadcrumbsLink>
      <BreadcrumbsArrow />
      <BreadcrumbsLink href="/projects/1"> Lorem ipsum </BreadcrumbsLink>
    </Breadcrumbs>

    <font-awesome-icon :icon="['fas', 'user']" />
    <Alert variant="warning">
      <font-awesome-icon :icon="['fas', 'circle-exclamation']" :style="{ fontSize: '16px' }" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription> You can add components to your app using the cli. </AlertDescription>
    </Alert>
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
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "./atoms/forms/select"
import NotificationBar from "./atoms/others/NotificationBar.vue"
import GhostButton from "./atoms/buttons/GhostButton.vue"
import { Alert, AlertTitle, AlertDescription } from "./atoms/others/alert"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import Checkbox from "./atoms/forms/Checkbox.vue"
import Input from "./atoms/forms/input/Input.vue"
defineProps<{
  msg: string
}>()
</script>
