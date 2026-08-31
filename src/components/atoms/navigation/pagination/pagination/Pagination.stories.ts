import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import {
  Pagination,
  PaginationEllipsis,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from "."

const PAGE_ITEMS_TEMPLATE = `
          <PaginationPrev />
          <template v-for="(item, index) in items" :key="item.type === 'page' ? item.value : \`ellipsis-\${index}\`">
            <PaginationListItem v-if="item.type === 'page'" :value="item.value">
              {{ item.value }}
            </PaginationListItem>
            <PaginationEllipsis v-else />
          </template>
          <PaginationNext />`

const meta = {
  title: "Atoms/Navigation/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
**Pagination** is a compound component system built on top of Reka UI's Pagination primitives.

The component system includes:
- **Pagination**: The root component - controls the current page and total item count via \`total\`, \`items-per-page\`, \`default-page\`/\`page\` and \`sibling-count\`
- **PaginationList**: Renders the collapsed range of page numbers and ellipses via its scoped \`items\` slot
- **PaginationListItem**: An individual page number button
- **PaginationEllipsis**: The "…" placeholder for skipped page ranges
- **PaginationPrev** / **PaginationNext**: Buttons to go to the previous/next page

Use the \`color\` prop on \`Pagination\` to theme the active page (\`black\`, \`yellow\`, \`pink\`, \`green\`, \`orange\`, \`violet\`).
Use the \`size\` prop (\`base\`, \`sm\`) to control the height/padding of every part.
        `,
      },
    },
  },
  argTypes: {
    color: {
      control: "select",
      options: ["black", "yellow", "pink", "green", "orange", "violet"],
    },
    size: {
      control: "select",
      options: ["base", "sm"],
    },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    total: 100,
    itemsPerPage: 10,
    color: "black",
    size: "base",
  },
  render: (args) => ({
    components: {
      Pagination,
      PaginationList,
      PaginationListItem,
      PaginationEllipsis,
      PaginationPrev,
      PaginationNext,
    },
    setup() {
      return { args }
    },
    template: `
      <Pagination v-bind="args">
        <PaginationList v-slot="{ items }">${PAGE_ITEMS_TEMPLATE}
        </PaginationList>
      </Pagination>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<Pagination :total="100" :items-per-page="10" color="black">
  <PaginationList v-slot="{ items }">
    <PaginationPrev />
    <template v-for="(item, index) in items" :key="item.type === 'page' ? item.value : \`ellipsis-\${index}\`">
      <PaginationListItem v-if="item.type === 'page'" :value="item.value">
        {{ item.value }}
      </PaginationListItem>
      <PaginationEllipsis v-else />
    </template>
    <PaginationNext />
  </PaginationList>
</Pagination>`,
      },
    },
  },
}

export const Colors: Story = {
  render: () => ({
    components: {
      Pagination,
      PaginationList,
      PaginationListItem,
      PaginationEllipsis,
      PaginationPrev,
      PaginationNext,
    },
    setup() {
      const colors = ["black", "yellow", "pink", "green", "orange", "violet"] as const
      return { colors }
    },
    template: `
      <div class="flex flex-col gap-6">
        <Pagination v-for="color in colors" :key="color" :color="color" :total="100" :items-per-page="10" :default-page="1">
          <PaginationList v-slot="{ items }">${PAGE_ITEMS_TEMPLATE}
          </PaginationList>
        </Pagination>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<Pagination
  v-for="color in ['black', 'yellow', 'pink', 'green', 'orange', 'violet']"
  :key="color"
  :color="color"
  :total="100"
  :items-per-page="10"
>
  <PaginationList v-slot="{ items }">
    <PaginationPrev />
    <template v-for="(item, index) in items" :key="item.type === 'page' ? item.value : \`ellipsis-\${index}\`">
      <PaginationListItem v-if="item.type === 'page'" :value="item.value">
        {{ item.value }}
      </PaginationListItem>
      <PaginationEllipsis v-else />
    </template>
    <PaginationNext />
  </PaginationList>
</Pagination>`,
      },
    },
  },
}

export const Small: Story = {
  args: {
    total: 100,
    itemsPerPage: 10,
    color: "black",
    size: "sm",
  },
  render: (args) => ({
    components: {
      Pagination,
      PaginationList,
      PaginationListItem,
      PaginationEllipsis,
      PaginationPrev,
      PaginationNext,
    },
    setup() {
      return { args }
    },
    template: `
      <Pagination v-bind="args">
        <PaginationList v-slot="{ items }">${PAGE_ITEMS_TEMPLATE}
        </PaginationList>
      </Pagination>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "Use `size=\"sm\"` for denser layouts, e.g. inside a compact RichTable footer.",
      },
      source: {
        code: `<Pagination size="sm" :total="100" :items-per-page="10" color="black">
  <PaginationList v-slot="{ items }">
    <PaginationPrev />
    <template v-for="(item, index) in items" :key="item.type === 'page' ? item.value : \`ellipsis-\${index}\`">
      <PaginationListItem v-if="item.type === 'page'" :value="item.value">
        {{ item.value }}
      </PaginationListItem>
      <PaginationEllipsis v-else />
    </template>
    <PaginationNext />
  </PaginationList>
</Pagination>`,
      },
    },
  },
}

export const Controlled: Story = {
  render: () => ({
    components: {
      Pagination,
      PaginationList,
      PaginationListItem,
      PaginationEllipsis,
      PaginationPrev,
      PaginationNext,
    },
    setup() {
      const page = ref(1)
      return { page }
    },
    template: `
      <div class="flex flex-col gap-4">
        <p class="text-black-tertiary text-sm">Current page: {{ page }}</p>
        <Pagination v-model:page="page" :total="120" :items-per-page="10">
          <PaginationList v-slot="{ items }">${PAGE_ITEMS_TEMPLATE}
          </PaginationList>
        </Pagination>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Use `v-model:page` for controlled state, e.g. to drive a request that fetches the matching page of data.",
      },
      source: {
        code: `<script setup lang="ts">
import { ref } from "vue"

const page = ref(1)
</script>

<template>
  <p>Current page: {{ page }}</p>
  <Pagination v-model:page="page" :total="120" :items-per-page="10">
    <PaginationList v-slot="{ items }">
      <PaginationPrev />
      <template v-for="(item, index) in items" :key="item.type === 'page' ? item.value : \`ellipsis-\${index}\`">
        <PaginationListItem v-if="item.type === 'page'" :value="item.value">
          {{ item.value }}
        </PaginationListItem>
        <PaginationEllipsis v-else />
      </template>
      <PaginationNext />
    </PaginationList>
  </Pagination>
</template>`,
      },
    },
  },
}

export const FewPages: Story = {
  args: {
    total: 30,
    itemsPerPage: 10,
    color: "green",
  },
  render: (args) => ({
    components: {
      Pagination,
      PaginationList,
      PaginationListItem,
      PaginationEllipsis,
      PaginationPrev,
      PaginationNext,
    },
    setup() {
      return { args }
    },
    template: `
      <Pagination v-bind="args">
        <PaginationList v-slot="{ items }">${PAGE_ITEMS_TEMPLATE}
        </PaginationList>
      </Pagination>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: "When every page fits without collapsing, no ellipsis is rendered.",
      },
      source: {
        code: `<Pagination :total="30" :items-per-page="10" color="green">
  <PaginationList v-slot="{ items }">
    <PaginationPrev />
    <template v-for="(item, index) in items" :key="item.type === 'page' ? item.value : \`ellipsis-\${index}\`">
      <PaginationListItem v-if="item.type === 'page'" :value="item.value">
        {{ item.value }}
      </PaginationListItem>
      <PaginationEllipsis v-else />
    </template>
    <PaginationNext />
  </PaginationList>
</Pagination>`,
      },
    },
  },
}
