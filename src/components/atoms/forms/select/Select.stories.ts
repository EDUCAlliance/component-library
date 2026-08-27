import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from ".."
import { Avatar, AvatarImage, AvatarFallback } from "@/components/atoms/data-display/avatar"

const meta = {
  title: "Atoms/Forms/Select",
  component: Select,
  argTypes: {
    modelValue: {
      control: "text",
      description: "Selected value (`v-model`). An array when `multiple` is set.",
    },
    defaultValue: {
      control: "text",
      description: "Value selected on first render, for uncontrolled usage.",
    },
    open: { control: "boolean", description: "Controlled open state (`v-model:open`)." },
    defaultOpen: {
      control: "boolean",
      description: "Whether the dropdown is open on first render, for uncontrolled usage.",
    },
    multiple: { control: "boolean", description: "Allow selecting more than one option." },
    disabled: { control: "boolean", description: "Prevents any interaction with the select." },
    required: { control: "boolean", description: "Marks the field as required in a form." },
    name: {
      control: "text",
      description: "Name of the hidden native input, submitted with the owning form.",
    },
    autocomplete: {
      control: "text",
      description: "Native `autocomplete` attribute of the hidden input.",
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description: "Reading direction of the select.",
    },
    by: {
      control: false,
      description:
        "Field name or comparator function used to compare object values against each other.",
    },
    class: {
      control: "text",
      description: "Additional classes for the select root.",
    },
  },
  render: (args) => ({
    components: { Select, SelectTrigger, SelectContent, SelectItem, SelectValue },
    setup() {
      return { args }
    },
    template: `
      <Select v-bind="args">
        <SelectTrigger class="w-[300px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
        </SelectContent>
      </Select>
    `,
  }),
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Select** is a dropdown component for choosing a single option from a list.\n\nCustom made for this library.\n\n- Fully accessible and keyboard-navigable.\n- Custom content and option rendering.\n- \`label\` and \`helper\` slots, same as \`Input\`.\n\n### Anatomy\n\n\`\`\`vue\n<Select>\n  <template #label>Label</template>\n  <SelectTrigger>\n    <SelectValue placeholder="…" />\n  </SelectTrigger>\n  <SelectContent>\n    <SelectGroup>\n      <SelectLabel>Group heading</SelectLabel>\n      <SelectItem value="a">A</SelectItem>\n    </SelectGroup>\n    <SelectSeparator />\n  </SelectContent>\n  <template #helper>Helper text</template>\n</Select>\n\`\`\`\n\n### Sub-component props\n\n| Component | Prop | Description |\n| --- | --- | --- |\n| \`SelectTrigger\` | \`disabled\` | Disables only the trigger, the value stays submitted. |\n| \`SelectTrigger\` | \`class\` | Extra classes, typically the width. |\n| \`SelectContent\` | \`position\` | \`popper\` (default) or \`item-aligned\`. |\n| \`SelectContent\` | \`side\`, \`sideOffset\`, \`align\`, \`alignOffset\` | Placement of the dropdown against the trigger (\`popper\` only). |\n| \`SelectContent\` | \`avoidCollisions\` | Flip the dropdown when it would overflow the viewport. |\n| \`SelectContent\` | \`bodyLock\` | Lock body scroll while open, defaults to \`true\`. |\n| \`SelectContent\` | \`forceMount\` | Keep the content mounted while closed, for custom animations. |\n| \`SelectItem\` | \`value\` | Value written to the model, required. |\n| \`SelectItem\` | \`disabled\` | Makes the option unselectable. |\n| \`SelectItem\` | \`textValue\` | Typeahead text, needed when the option renders non-text content. |\n| \`SelectValue\` | \`placeholder\` | Shown while nothing is selected. |\n| \`SelectValue\` | default slot | Custom rendering of the selected value. |\n\n<div style="display: flex; gap: 8px;">\n\n<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=180-3086&t=Mkp3c5SrIIlNDlq2-4" target="_blank">\n  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />\n</a>\n\n</div>\n        `,
      },
      source: {
        code: `<Select>
  <SelectTrigger class="w-[300px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="cherry">Cherry</SelectItem>
  </SelectContent>
</Select>`,
      },
    },
  },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {}

export const WithLabelAndHelper: Story = {
  render: (args) => ({
    components: { Select, SelectTrigger, SelectContent, SelectItem, SelectValue },
    setup() {
      return { args }
    },
    template: `
      <Select v-bind="args" class="w-[300px]">
        <template #label>Favourite fruit</template>
        <SelectTrigger class="w-full">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
        </SelectContent>
        <template #helper>Used to personalise your recommendations.</template>
      </Select>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "`label` and `helper` slots mirror the `Input` component. When either is used, the select renders a `flex-col` wrapper around the trigger.",
      },
      source: {
        code: `<Select class="w-[300px]">
  <template #label>Favourite fruit</template>
  <SelectTrigger class="w-full">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="cherry">Cherry</SelectItem>
  </SelectContent>
  <template #helper>Used to personalise your recommendations.</template>
</Select>`,
      },
    },
  },
}

export const DefaultValue: Story = {
  args: {
    defaultValue: "banana",
  },
  parameters: {
    docs: {
      description: {
        story: "`defaultValue` preselects an option without taking control of the state.",
      },
      source: {
        code: `<Select default-value="banana">
  <SelectTrigger class="w-[300px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="cherry">Cherry</SelectItem>
  </SelectContent>
</Select>`,
      },
    },
  },
}

export const Controlled: Story = {
  render: (args) => ({
    components: { Select, SelectTrigger, SelectContent, SelectItem, SelectValue },
    setup() {
      const value = ref("apple")
      const open = ref(false)

      return { args, value, open }
    },
    template: `
      <div class="flex flex-col gap-4">
        <Select v-bind="args" v-model="value" v-model:open="open">
          <SelectTrigger class="w-[300px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
          </SelectContent>
        </Select>

        <p class="text-black-tertiary text-sm">value: {{ value }} — open: {{ open }}</p>
        <button class="w-fit underline" @click="value = 'cherry'">Set to cherry</button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "`v-model` controls the selected value, `v-model:open` controls the dropdown state.",
      },
      source: {
        code: `<script setup lang="ts">
import { ref } from "vue"

const value = ref("apple")
const open = ref(false)
</script>

<template>
  <Select v-model="value" v-model:open="open">
    <SelectTrigger class="w-[300px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="cherry">Cherry</SelectItem>
    </SelectContent>
  </Select>
</template>`,
      },
    },
  },
}

export const DefaultOpen: Story = {
  args: {
    defaultOpen: true,
  },
  parameters: {
    docs: {
      description: {
        story: "`defaultOpen` renders the dropdown already open, useful for onboarding flows.",
      },
      source: {
        code: `<Select default-open>
  <SelectTrigger class="w-[300px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="cherry">Cherry</SelectItem>
  </SelectContent>
</Select>`,
      },
    },
  },
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Select, SelectTrigger, SelectContent, SelectItem, SelectValue },
    setup() {
      return { args }
    },
    template: `
      <div class="flex flex-col gap-6">
        <Select v-bind="args" disabled default-value="apple">
          <template #label>Disabled select</template>
          <SelectTrigger class="w-[300px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
          </SelectContent>
        </Select>

        <Select v-bind="args">
          <template #label>Disabled trigger only</template>
          <SelectTrigger disabled class="w-[300px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
          </SelectContent>
        </Select>

        <Select v-bind="args">
          <template #label>Disabled option</template>
          <SelectTrigger class="w-[300px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana" disabled>Banana (out of stock)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "`disabled` on `Select` blocks the whole field, on `SelectTrigger` only the trigger, and on `SelectItem` a single option.",
      },
      source: {
        code: `<Select disabled default-value="apple">…</Select>

<Select>
  <SelectTrigger disabled class="w-[300px]">…</SelectTrigger>
  …
</Select>

<Select>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana" disabled>Banana (out of stock)</SelectItem>
  </SelectContent>
</Select>`,
      },
    },
  },
}

export const InsideForm: Story = {
  render: (args) => ({
    components: { Select, SelectTrigger, SelectContent, SelectItem, SelectValue },
    setup() {
      const submitted = ref<string | null>(null)

      const onSubmit = (event: Event) => {
        const data = new FormData(event.target as HTMLFormElement)
        submitted.value = String(data.get("country") ?? "")
      }

      return { args, submitted, onSubmit }
    },
    template: `
      <form class="flex flex-col items-start gap-4" @submit.prevent="onSubmit">
        <Select v-bind="args" name="country" required autocomplete="country">
          <template #label>Country</template>
          <SelectTrigger class="w-[300px]">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cz">Czechia</SelectItem>
            <SelectItem value="de">Germany</SelectItem>
            <SelectItem value="fr">France</SelectItem>
          </SelectContent>
          <template #helper>Required — submitted as the <code>country</code> field.</template>
        </Select>

        <button type="submit" class="underline">Submit</button>
        <p v-if="submitted" class="text-black-tertiary text-sm">Submitted: {{ submitted }}</p>
      </form>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "`name`, `required` and `autocomplete` are forwarded to a hidden native input, so the select works in plain HTML forms.",
      },
      source: {
        code: `<form @submit.prevent="onSubmit">
  <Select name="country" required autocomplete="country">
    <template #label>Country</template>
    <SelectTrigger class="w-[300px]">
      <SelectValue placeholder="Select a country" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="cz">Czechia</SelectItem>
      <SelectItem value="de">Germany</SelectItem>
      <SelectItem value="fr">France</SelectItem>
    </SelectContent>
  </Select>

  <button type="submit">Submit</button>
</form>`,
      },
    },
  },
}

export const ObjectValues: Story = {
  render: (args) => ({
    components: { Select, SelectTrigger, SelectContent, SelectItem, SelectValue },
    setup() {
      const users = [
        { id: 1, name: "Alice Johnson" },
        { id: 2, name: "Bob Smith" },
        { id: 3, name: "Carol Lee" },
      ]
      const value = ref(users[1])

      return { args, users, value }
    },
    template: `
      <div class="flex flex-col gap-4">
        <Select v-bind="args" v-model="value" by="id">
          <SelectTrigger class="w-[300px]">
            <SelectValue placeholder="Select a user">{{ value?.name }}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem v-for="user in users" :key="user.id" :value="user">
              {{ user.name }}
            </SelectItem>
          </SelectContent>
        </Select>

        <p class="text-black-tertiary text-sm">value: {{ value }}</p>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "`by` tells the select which field identifies an object, so a freshly fetched object still matches the selected one. The `SelectValue` default slot renders the label.",
      },
      source: {
        code: `<script setup lang="ts">
import { ref } from "vue"

const users = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Carol Lee" },
]
const value = ref(users[1])
</script>

<template>
  <Select v-model="value" by="id">
    <SelectTrigger class="w-[300px]">
      <SelectValue placeholder="Select a user">{{ value?.name }}</SelectValue>
    </SelectTrigger>
    <SelectContent>
      <SelectItem v-for="user in users" :key="user.id" :value="user">
        {{ user.name }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>`,
      },
    },
  },
}

export const RightToLeft: Story = {
  args: {
    dir: "rtl",
  },
  render: (args) => ({
    components: { Select, SelectTrigger, SelectContent, SelectItem, SelectValue },
    setup() {
      return { args }
    },
    template: `
      <div dir="rtl">
        <Select v-bind="args">
          <SelectTrigger class="w-[300px]">
            <SelectValue placeholder="اختر فاكهة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">تفاحة</SelectItem>
            <SelectItem value="banana">موزة</SelectItem>
            <SelectItem value="cherry">كرز</SelectItem>
          </SelectContent>
        </Select>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "`dir` switches the reading direction and mirrors the dropdown alignment.",
      },
      source: {
        code: `<Select dir="rtl">
  <SelectTrigger class="w-[300px]">
    <SelectValue placeholder="اختر فاكهة" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">تفاحة</SelectItem>
    <SelectItem value="banana">موزة</SelectItem>
    <SelectItem value="cherry">كرز</SelectItem>
  </SelectContent>
</Select>`,
      },
    },
  },
}

export const ContentPlacement: Story = {
  render: (args) => ({
    components: { Select, SelectTrigger, SelectContent, SelectItem, SelectValue },
    setup() {
      return { args }
    },
    template: `
      <div class="flex flex-col gap-6 py-40">
        <Select v-bind="args">
          <template #label>Above the trigger, aligned to the end</template>
          <SelectTrigger class="w-[300px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent
            position="popper"
            side="top"
            :side-offset="8"
            align="end"
            :align-offset="-8"
            :avoid-collisions="false"
          >
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectContent>
        </Select>

        <Select v-bind="args">
          <template #label>Item-aligned, body scroll unlocked</template>
          <SelectTrigger class="w-[300px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent position="item-aligned" :body-lock="false">
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectContent>
        </Select>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '`SelectContent` accepts the Popper placement props. `position="item-aligned"` positions the dropdown over the selected item instead, and `bodyLock` controls whether the page can scroll while open.',
      },
      source: {
        code: `<SelectContent
  position="popper"
  side="top"
  :side-offset="8"
  align="end"
  :align-offset="-8"
  :avoid-collisions="false"
>
  …
</SelectContent>

<SelectContent position="item-aligned" :body-lock="false">…</SelectContent>`,
      },
    },
  },
}

export const WithGroups: Story = {
  render: (args) => ({
    components: {
      Select,
      SelectTrigger,
      SelectContent,
      SelectItem,
      SelectValue,
      SelectGroup,
      SelectLabel,
      SelectSeparator,
    },
    setup() {
      return { args }
    },
    template: `
      <Select v-bind="args">
        <SelectTrigger class="w-[300px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="pepper">Pepper</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "`SelectGroup` with a `SelectLabel` heading groups related options, `SelectSeparator` draws a divider between them.",
      },
      source: {
        code: `<Select>
  <SelectTrigger class="w-[300px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="cherry">Cherry</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Vegetables</SelectLabel>
      <SelectItem value="carrot">Carrot</SelectItem>
      <SelectItem value="broccoli">Broccoli</SelectItem>
      <SelectItem value="pepper">Pepper</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`,
      },
    },
  },
}

export const WithAvatars: Story = {
  render: (args) => ({
    components: {
      Select,
      SelectTrigger,
      SelectContent,
      SelectItem,
      SelectValue,
      Avatar,
      AvatarImage,
      AvatarFallback,
    },
    setup() {
      return { args }
    },
    template: `
      <Select v-bind="args">
        <SelectTrigger class="w-[300px]">
          <SelectValue placeholder="Select a user" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="alice" text-value="Alice Johnson">
            <Avatar size="xs">
              <AvatarImage src="https://randomuser.me/api/portraits/women/68.jpg" alt="Alice" />
            </Avatar>
            Alice Johnson
          </SelectItem>
          <SelectItem value="bob" text-value="Bob Smith">
            <Avatar size="xs">
              <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="Bob" />
            </Avatar>
            Bob Smith
          </SelectItem>
          <SelectItem value="carol" text-value="Carol Lee">
            <Avatar size="xs">
              <AvatarFallback>CL</AvatarFallback>
            </Avatar>
            Carol Lee
          </SelectItem>
        </SelectContent>
      </Select>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Options can render arbitrary content. Set `textValue` so keyboard typeahead still matches the visible name.",
      },
      source: {
        code: `<Select>
  <SelectTrigger class="w-[300px]">
    <SelectValue placeholder="Select a user" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="alice" text-value="Alice Johnson">
      <Avatar size="xs">
        <AvatarImage src="https://randomuser.me/api/portraits/women/68.jpg" alt="Alice" />
      </Avatar>
      Alice Johnson
    </SelectItem>
    <SelectItem value="carol" text-value="Carol Lee">
      <Avatar size="xs">
        <AvatarFallback>CL</AvatarFallback>
      </Avatar>
      Carol Lee
    </SelectItem>
  </SelectContent>
</Select>`,
      },
    },
  },
}

export const Multiple: Story = {
  render: (args) => ({
    components: {
      Select,
      SelectTrigger,
      SelectContent,
      SelectItem,
      SelectValue,
    },
    setup() {
      const value = ref<string[]>([])
      const options = [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "cherry", label: "Cherry" },
        { value: "date", label: "Date" },
      ]
      const labels: Record<string, string> = options.reduce(
        (acc, o) => {
          acc[o.value] = o.label
          return acc
        },
        {} as Record<string, string>,
      )

      return { args, value, options, labels }
    },
    template: `
      <Select v-bind="args" v-model="value" multiple>
        <SelectTrigger class="w-[300px]">
          <SelectValue :aria-label="value.join(', ')" placeholder="Select fruits">
            <template v-if="value.length">
              {{ value.map(v => labels[v]).join(', ') }}
            </template>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem v-for="opt in options" :key="opt.value" :value="opt.value">
            {{ opt.label }}
          </SelectItem>
        </SelectContent>
      </Select>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates multi-select using the `multiple` prop and `v-model` as an array, per Reka UI's Select API.",
      },
      source: {
        code: `<script setup lang="ts">
import { ref } from "vue"

const value = ref<string[]>([])
const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
]
const labels = Object.fromEntries(options.map((option) => [option.value, option.label]))
</script>

<template>
  <Select v-model="value" multiple>
    <SelectTrigger class="w-[300px]">
      <SelectValue :aria-label="value.join(', ')" placeholder="Select fruits">
        <template v-if="value.length">
          {{ value.map((item) => labels[item]).join(", ") }}
        </template>
      </SelectValue>
    </SelectTrigger>
    <SelectContent>
      <SelectItem v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>`,
      },
    },
  },
}

export const LongList: Story = {
  render: (args) => ({
    components: { Select, SelectTrigger, SelectContent, SelectItem, SelectValue },
    setup() {
      const years = Array.from({ length: 40 }, (_, index) => String(2026 - index))

      return { args, years }
    },
    template: `
      <Select v-bind="args">
        <SelectTrigger class="w-[300px]">
          <SelectValue placeholder="Select a year" />
        </SelectTrigger>
        <SelectContent class="max-h-64">
          <SelectItem v-for="year in years" :key="year" :value="year">{{ year }}</SelectItem>
        </SelectContent>
      </Select>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "With more options than fit the viewport, `SelectScrollUpButton` and `SelectScrollDownButton` are rendered automatically by `SelectContent`.",
      },
      source: {
        code: `<Select>
  <SelectTrigger class="w-[300px]">
    <SelectValue placeholder="Select a year" />
  </SelectTrigger>
  <SelectContent class="max-h-64">
    <SelectItem v-for="year in years" :key="year" :value="year">{{ year }}</SelectItem>
  </SelectContent>
</Select>`,
      },
    },
  },
}
