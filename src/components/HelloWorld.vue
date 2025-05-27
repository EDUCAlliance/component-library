<template>
  <Toaster />
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
  <Hero3 />
  <div class="mx-auto max-w-2xl">
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
    <HoverCard>
      <HoverCardTrigger>Hover</HoverCardTrigger>
      <HoverCardContent> The Vue Framework – created and maintained by @vuejs. </HoverCardContent>
    </HoverCard>
    <Accordion size="md" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Does it support long content?</AccordionTrigger>
        <AccordionContent>
          At EDUC European Digital UniverCity Alliance, we are driven by a shared commitment to a
          brighter future through collaborative education. Our journey is guided by the EDUC Charter
          of Common Values and Good Collaboration, which embodies the principles steering our
          actions over the next decade. This charter serves as our compass, ensuring all partner
          institutions are aligned to achieve common goals.</AccordionContent
        >
      </AccordionItem>
    </Accordion>
    <Calendar :weekday-format="'narrow'" class="w-fit" />
    <RangeCalendar class="w-fit" />
    <EDUCLogo />
    <EDUCPortalLogo class="text-orange-primary" />
    <EDUCCatalogueLogo />
    <EDUCLearningLogo />
    <EDUCOpenupLogo />
    <Dialog>
      <DialogTrigger> Edit Profile </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <PrimaryButton size="sm">Save changes</PrimaryButton>
          <SecondaryButton size="sm">Cancel</SecondaryButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    <div class="my-12">
      <Card1 />
    </div>
    <div class="my-12">
      <Card2 />
    </div>
    <div class="my-12">
      <Card3 />
    </div>
    <div class="my-12">
      <Card4 />
    </div>
    <div class="my-12">
      <PodcastCard />
    </div>
    <DescriptionList1 />
    <DescriptionList2 />
    <DescriptionList3 />

    <!-- RichTable Example -->
    <div class="my-12">
      <RichTable columns="381px 213px 1fr 213px fit-content">
        <RichTableHeader
          title="Our staff"
          description="A list of all the staff in your alliance, including their names, titles, emails, and universities."
        >
          <template #actions>
            <PrimaryButton size="sm">Add staff</PrimaryButton>
            <SecondaryButton size="sm">Select</SecondaryButton>
          </template>
        </RichTableHeader>

        <RichTableContent>
          <RichTableHead>
            <RichTableColumn key="name" label="Name" :sortable="true" />
            <RichTableColumn key="title" label="Title" />
            <RichTableColumn key="email" label="Email" />
            <RichTableColumn key="status" label="Status" />
            <RichTableColumn key="actions" label="" />
          </RichTableHead>

          <RichTableRow
            v-for="(person, index) in staffData"
            :key="index"
            :class="index % 2 === 1 ? 'bg-white-tertiary' : 'bg-white-primary'"
          >
            <RichTableCell class="text-black-primary font-medium">
              {{ person.name }}
            </RichTableCell>
            <RichTableCell>
              {{ person.title }}
            </RichTableCell>
            <RichTableCell>
              {{ person.email }}
            </RichTableCell>
            <RichTableCell>
              <Badge color="green" size="sm">{{ person.status }}</Badge>
            </RichTableCell>
            <RichTableCell width="fit-content">
              <RichTableActions />
            </RichTableCell>
          </RichTableRow>
        </RichTableContent>
      </RichTable>
      <FileUpload />
    </div>
  </div>

  <!-- Features Sections Container -->
  <div class="bg-white-tertiary">
    <Features1 />
    <Features2 />
    <Features3 />
    <Features4 />
  </div>

  <ContactCard color="violet">
    <template #avatar>
      <Avatar class="h-48 w-48">
        <AvatarImage src="https://cataas.com/cat?type=square&width=64" />
        <AvatarFallback>JS</AvatarFallback>
      </Avatar>
    </template>
    <template #header>
      <ContactCardHeader
        name="John Doe"
        organization="University of Potsdam"
        role="Project Manager"
      />
    </template>
    <template #contact>
      <!-- Custom contact content -->
    </template>
  </ContactCard>
  <div class="my-12"><Actions1 /></div>
  <div class="my-12"><Actions2 /></div>
  <PrimaryButton
    @click="
      () => {
        toast.success('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
        })
      }
    "
  ></PrimaryButton>

  <ItemCard>
    <template #icon>
      <font-awesome-icon :icon="['fas', 'user']" />
    </template>
    <p>Hello world!</p>
  </ItemCard>

  <Cta />
  <Footer class="mt-32" />
</template>

<script setup lang="ts">
import { SecondaryButton, GhostButton, PrimaryButton } from "./atoms/buttons"
import { Radio, Toggle, Slider, Checkbox, Input, FileUpload } from "./atoms/forms"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "./atoms/forms/select"
import { ButtonGroup } from "./molecules/navigation"
import { Loading, NotificationBar, Badge } from "./atoms/feedback"
import { Alert, AlertTitle, AlertDescription } from "./atoms/others/alert"
import { TooltipTrigger, TooltipContent, TooltipProvider, Tooltip } from "./atoms/overlays/tooltip"
import {
  Breadcrumbs,
  BreadcrumbsLink,
  BreadcrumbsArrow,
  BreadcrumbsIcon,
} from "./atoms/navigation/breadcrumbs/breadcrumbs"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./atoms/overlays/hover-card"
import Footer from "./Footer.vue"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./atoms/others/accordion"
import { RangeCalendar, Calendar } from "./atoms/date-time"
import {
  EDUCLogo,
  EDUCPortalLogo,
  EDUCCatalogueLogo,
  EDUCLearningLogo,
  EDUCOpenupLogo,
} from "./atoms/content"
import { Hero3 } from "./organisms/content/hero"
import { Cta3 as Cta } from "./organisms/content/cta"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./atoms/overlays/dialog"
import { ContactCard, ContactCardHeader } from "./atoms/content/contact-card"
import { Avatar, AvatarImage, AvatarFallback } from "./atoms/data-display/avatar"
import { ItemCard } from "./atoms/data-display"
import { Actions1, Actions2 } from "./atoms/actions/actions"
import Card1 from "./Card1.vue"
import Card2 from "./Card2.vue"
import Card3 from "./Card3.vue"
import Card4 from "./Card4.vue"
import PodcastCard from "./PodcastCard.vue"
import { Features1, Features2, Features3, Features4 } from "./organisms/content/features"
import { Toaster } from "./atoms/feedback/sonner"
import "./atoms/feedback/sonner/sonner.css"
import { toast } from "vue-sonner"
import {
  DescriptionList1,
  DescriptionList2,
  DescriptionList3,
} from "./organisms/data/description-list"
import {
  RichTable,
  RichTableHeader,
  RichTableContent,
  RichTableHead,
  RichTableColumn,
  RichTableRow,
  RichTableCell,
  RichTableActions,
} from "./organisms/data/rich-table"

defineProps<{
  msg: string
}>()

// Table data
const columns = [
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
  { key: "city", label: "City" },
]

const rows = [
  { name: "John Doe", age: 30, city: "New York" },
  { name: "Jane Smith", age: 25, city: "London" },
  { name: "Bob Johnson", age: 35, city: "Paris" },
]

// Staff data for RichTable
const staffData = [
  {
    name: "Ulrike Schmidt",
    title: "Project Manager",
    email: "ulrike.schmidt@uni-potsdam.de",
    status: "Active",
  },
  {
    name: "Imke Henningsen",
    title: "Project Manager",
    email: "imke.henningsen@uni-potsdam.de",
    status: "Active",
  },
  {
    name: "Heidi Tovsrud Knutsen",
    title: "Project Manager",
    email: "heiditk@usn.no",
    status: "Active",
  },
  {
    name: "Fermín Mallén",
    title: "Project Manager",
    email: "fmallen@uji.es",
    status: "Active",
  },
  {
    name: "Dr. Bandiné dr. Temesi Ágnes",
    title: "Project Manager",
    email: "temesi.agnes@pte.hu",
    status: "Active",
  },
]
</script>
