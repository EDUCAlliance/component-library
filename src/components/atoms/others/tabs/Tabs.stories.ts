import type { Meta, StoryObj } from "@storybook/vue3"
import { Tabs } from "."
import TabsContent from "./TabsContent.vue"
import TabsList from "./TabsList.vue"
import TabsTrigger from "./TabsTrigger.vue"

const meta = {
  title: "Atoms/Others/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["black", "yellow", "pink", "green", "orange", "violet"],
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    setup() {
      return { args }
    },
    template: `
      <Tabs v-bind="args" default-value="tab1" class="w-[400px]">
        <TabsList>
          <TabsTrigger value="tab1">Account</TabsTrigger>
          <TabsTrigger value="tab2">Password</TabsTrigger>
          <TabsTrigger value="tab3">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div class="p-4">
            <h3 class="text-lg font-medium">Account Settings</h3>
            <p class="text-sm text-muted-foreground">Manage your account settings and preferences.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div class="p-4">
            <h3 class="text-lg font-medium">Password Settings</h3>
            <p class="text-sm text-muted-foreground">Change your password and security settings.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div class="p-4">
            <h3 class="text-lg font-medium">Application Settings</h3>
            <p class="text-sm text-muted-foreground">Customize your application preferences.</p>
          </div>
        </TabsContent>
      </Tabs>
    `,
  }),
}

export const Vertical: Story = {
  render: (args) => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    setup() {
      return { args }
    },
    template: `
      <Tabs v-bind="args" default-value="tab1" class="flex flex-row gap-4 w-[600px]">
        <TabsList class="flex-col h-auto grid grid-cols-1">
          <TabsTrigger value="tab1" class="justify-start">Profile</TabsTrigger>
          <TabsTrigger value="tab2" class="justify-start">Notifications</TabsTrigger>
          <TabsTrigger value="tab3" class="justify-start">Appearance</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div class="p-4">
            <h3 class="text-lg font-medium">Profile Settings</h3>
            <p class="text-sm text-muted-foreground">Update your profile information and preferences.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div class="p-4">
            <h3 class="text-lg font-medium">Notification Preferences</h3>
            <p class="text-sm text-muted-foreground">Manage your notification settings.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div class="p-4">
            <h3 class="text-lg font-medium">Appearance Settings</h3>
            <p class="text-sm text-muted-foreground">Customize the look and feel of your application.</p>
          </div>
        </TabsContent>
      </Tabs>
    `,
  }),
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    setup() {
      return { args }
    },
    template: `
      <Tabs v-bind="args" default-value="tab1" class="w-[400px]">
        <TabsList>
          <TabsTrigger value="tab1">Active</TabsTrigger>
          <TabsTrigger value="tab2" disabled>Disabled</TabsTrigger>
          <TabsTrigger value="tab3">Active</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div class="p-4">
            <h3 class="text-lg font-medium">Active Tab</h3>
            <p class="text-sm text-muted-foreground">This tab is active and can be selected.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div class="p-4">
            <h3 class="text-lg font-medium">Disabled Tab</h3>
            <p class="text-sm text-muted-foreground">This content won't be accessible.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div class="p-4">
            <h3 class="text-lg font-medium">Active Tab</h3>
            <p class="text-sm text-muted-foreground">This tab is also active and selectable.</p>
          </div>
        </TabsContent>
      </Tabs>
    `,
  }),
}
