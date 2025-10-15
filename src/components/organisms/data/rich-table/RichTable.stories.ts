import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref, computed } from "vue"
import {
  RichTable,
  RichTableHeader,
  RichTableHead,
  RichTableColumn,
  RichTableRow,
  RichTableCell,
  RichTableActions,
} from "./index"
import { PrimaryButton, SecondaryButton } from "../../../atoms/buttons"
import { Badge } from "../../../atoms/feedback"

const meta = {
  title: "Organisms/Data/RichTable",
  component: RichTable,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
**Rich Table** is a compound component system for creating feature-rich data tables using CSS Grid.

The component system includes:
- **RichTable**: The main grid container - use the \`columns\` prop to define column widths
- **RichTableHeader**: Optional full-width header section for title, description, and action buttons
- **RichTableHead**: Header row container with column labels
- **RichTableColumn**: Individual column headers with optional sorting
- **RichTableRow**: Data row container with hover effects
- **RichTableCell**: Individual data cells
- **RichTableActions**: Action buttons column (e.g., three dots menu)

**Key Features:**
- Uses CSS Grid with subgrid for precise column alignment
- Column widths controlled centrally via the \`columns\` prop on RichTable
- Header spans full width above the table
- Fully customizable styling via class props
- Sortable columns with event emission
- Alternating row colors via class bindings

This compound approach provides maximum flexibility while maintaining consistency.
        `,
      },
    },
  },
} as Meta<typeof RichTable>

export default meta
type Story = StoryObj<typeof meta>

// Sample staff data matching the Figma design
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
  {
    name: "Katharina Kloss",
    title: "Project Manager",
    email: "katharina.kloss@uni-potsdam.de",
    status: "Active",
  },
  {
    name: "Frédéric Renouard",
    title: "Project Manager",
    email: "frederic.renouard@univ-rennes.fr",
    status: "Active",
  },
  {
    name: "Jennifer Major",
    title: "Project Manager",
    email: "major.j@parisnanterre.fr",
    status: "Active",
  },
  {
    name: "Daniela Ghiani",
    title: "Project Manager",
    email: "daniela.ghiani@unica.it",
    status: "Active",
  },
  {
    name: "Violeta Osouchová",
    title: "Project Manager",
    email: "osouchova@czs.muni.cz",
    status: "Active",
  },
  {
    name: "Iva Sedláková",
    title: "EDUC-WIDE Project Manager",
    email: "sedlakova@rect.muni.cz",
    status: "Active",
  },
]

export const Default: Story = {
  render: () => ({
    components: {
      RichTable,
      RichTableHeader,
      RichTableHead,
      RichTableColumn,
      RichTableRow,
      RichTableCell,
      RichTableActions,
      PrimaryButton,
      SecondaryButton,
      Badge,
    },
    setup() {
      return { staffData }
    },
    template: `
      <div class="bg-gray-50 min-h-screen p-8">
        <div class="max-w-6xl mx-auto">
          <RichTable columns="381px 213px 1fr 213px 40px">
            <RichTableHeader
              title="Our staff"
              description="A list of all the staff in your alliance, including their names, titles, emails, and universities."
            >
              <template #actions>
                <PrimaryButton size="sm">Add staff</PrimaryButton>
                <SecondaryButton size="sm">Select</SecondaryButton>
              </template>
            </RichTableHeader>

            <RichTableHead>
              <RichTableColumn
                column-key="name"
                label="Name"
                :sortable="true"
              />
              <RichTableColumn
                column-key="title"
                label="Title"
              />
              <RichTableColumn
                column-key="email"
                label="Email"
              />
              <RichTableColumn
                column-key="status"
                label="Status"
              />
              <RichTableColumn
                column-key="actions"
                label=""
              />
            </RichTableHead>

            <RichTableRow
              v-for="(person, index) in staffData"
              :key="index"
              :class="index % 2 === 1 ? 'bg-white-tertiary' : 'bg-white-primary'"
            >
              <RichTableCell class="font-medium text-black-primary">
                {{ person.name }}
              </RichTableCell>
              <RichTableCell class="text-black-sexternary">
                {{ person.title }}
              </RichTableCell>
              <RichTableCell class="text-black-sexternary">
                {{ person.email }}
              </RichTableCell>
              <RichTableCell>
                <Badge color="green" size="sm">{{ person.status }}</Badge>
              </RichTableCell>
              <RichTableCell>
                <RichTableActions />
              </RichTableCell>
            </RichTableRow>
          </RichTable>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Complete staff table example showcasing all compound components working together. Features sortable columns, status badges, action buttons, and alternating row colors.",
      },
    },
  },
}

export const SimpleTable: Story = {
  render: () => ({
    components: {
      RichTable,
      RichTableHeader,
      RichTableHead,
      RichTableColumn,
      RichTableRow,
      RichTableCell,
      PrimaryButton,
    },
    template: `
      <div class="bg-gray-50 min-h-screen p-8">
        <div class="max-w-4xl mx-auto">
          <RichTable columns="80px 1fr 200px">
            <RichTableHeader
              title="Simple Data Table"
              description="A basic example with minimal configuration."
            >
              <template #actions>
                <PrimaryButton size="sm">Add Item</PrimaryButton>
              </template>
            </RichTableHeader>

            <RichTableHead>
              <RichTableColumn column-key="id" label="ID" />
              <RichTableColumn column-key="name" label="Name" :sortable="true" />
              <RichTableColumn column-key="category" label="Category" />
            </RichTableHead>

            <RichTableRow class="bg-white-primary">
              <RichTableCell class="font-mono">#001</RichTableCell>
              <RichTableCell class="font-medium">Sample Item 1</RichTableCell>
              <RichTableCell>Category A</RichTableCell>
            </RichTableRow>

            <RichTableRow class="bg-white-tertiary">
              <RichTableCell class="font-mono">#002</RichTableCell>
              <RichTableCell class="font-medium">Sample Item 2</RichTableCell>
              <RichTableCell>Category B</RichTableCell>
            </RichTableRow>

            <RichTableRow class="bg-white-primary">
              <RichTableCell class="font-mono">#003</RichTableCell>
              <RichTableCell class="font-medium">Sample Item 3</RichTableCell>
              <RichTableCell>Category A</RichTableCell>
            </RichTableRow>
          </RichTable>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "A simpler table example showing the basic structure and flexibility of the compound component system.",
      },
    },
  },
}

export const WithoutHeader: Story = {
  render: () => ({
    components: {
      RichTable,
      RichTableHead,
      RichTableColumn,
      RichTableRow,
      RichTableCell,
      RichTableActions,
    },
    template: `
      <div class="bg-gray-50 min-h-screen p-8">
        <div class="max-w-4xl mx-auto">
          <RichTable columns="1fr 1fr 40px">
            <RichTableHead>
              <RichTableColumn column-key="name" label="Name" :sortable="true" />
              <RichTableColumn column-key="email" label="Email" />
              <RichTableColumn column-key="actions" label="" />
            </RichTableHead>

            <RichTableRow class="bg-white-primary">
              <RichTableCell class="font-medium">John Doe</RichTableCell>
              <RichTableCell class="text-black-sexternary">john@example.com</RichTableCell>
              <RichTableCell>
                <RichTableActions />
              </RichTableCell>
            </RichTableRow>

            <RichTableRow class="bg-white-tertiary">
              <RichTableCell class="font-medium">Jane Smith</RichTableCell>
              <RichTableCell class="text-black-sexternary">jane@example.com</RichTableCell>
              <RichTableCell>
                <RichTableActions />
              </RichTableCell>
            </RichTableRow>
          </RichTable>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Table without header section, showing that components can be used individually as needed.",
      },
    },
  },
}

export const WithSorting: Story = {
  render: () => ({
    components: {
      RichTable,
      RichTableHeader,
      RichTableHead,
      RichTableColumn,
      RichTableRow,
      RichTableCell,
      PrimaryButton,
      Badge,
    },
    setup() {
      const tableData = ref([
        { name: "Alice Johnson", role: "Designer", status: "Active", age: 28 },
        { name: "Bob Smith", role: "Developer", status: "Active", age: 35 },
        { name: "Charlie Brown", role: "Manager", status: "Inactive", age: 42 },
        { name: "Diana Prince", role: "Developer", status: "Active", age: 31 },
        { name: "Edward Norton", role: "Designer", status: "Active", age: 29 },
      ])

      const sortColumn = ref("")
      const sortDirection = ref("asc")

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const handleSort = (columnKey: any) => {
        // If clicking the same column, toggle direction
        if (sortColumn.value === columnKey) {
          sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc"
        } else {
          // New column, start with ascending
          sortColumn.value = columnKey
          sortDirection.value = "asc"
        }
      }

      const sortedData = computed(() => {
        if (!sortColumn.value) return tableData.value

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return [...tableData.value].sort((a: any, b: any) => {
          const aValue = a[sortColumn.value]
          const bValue = b[sortColumn.value]

          const compare = aValue < bValue ? -1 : aValue > bValue ? 1 : 0
          return sortDirection.value === "asc" ? compare : -compare
        })
      })

      return { tableData, sortedData, sortColumn, sortDirection, handleSort }
    },
    template: `
      <div class="bg-gray-50 min-h-screen p-8">
        <div class="max-w-5xl mx-auto">
          <RichTable columns="1fr 200px 120px 100px">
            <RichTableHeader
              title="Team Members"
              description="Click on column headers to sort the table. Sorting is implemented in the parent component."
            >
              <template #actions>
                <PrimaryButton size="sm">Add Member</PrimaryButton>
              </template>
            </RichTableHeader>

            <RichTableHead>
              <RichTableColumn
                column-key="name"
                label="Name"
                :sortable="true"
                @sort="handleSort"
                :class="sortColumn === 'name' ? 'text-blue-600' : ''"
              />
              <RichTableColumn
                column-key="role"
                label="Role"
                :sortable="true"
                @sort="handleSort"
                :class="sortColumn === 'role' ? 'text-blue-600' : ''"
              />
              <RichTableColumn
                column-key="status"
                label="Status"
                :sortable="true"
                @sort="handleSort"
                :class="sortColumn === 'status' ? 'text-blue-600' : ''"
              />
              <RichTableColumn
                column-key="age"
                label="Age"
                :sortable="true"
                @sort="handleSort"
                :class="sortColumn === 'age' ? 'text-blue-600' : ''"
              />
            </RichTableHead>

            <RichTableRow
              v-for="(person, index) in sortedData"
              :key="index"
              :class="index % 2 === 1 ? 'bg-white-tertiary' : 'bg-white-primary'"
            >
              <RichTableCell class="font-medium text-black-primary">
                {{ person.name }}
              </RichTableCell>
              <RichTableCell class="text-black-sexternary">
                {{ person.role }}
              </RichTableCell>
              <RichTableCell>
                <Badge :color="person.status === 'Active' ? 'green' : 'gray'" size="sm">
                  {{ person.status }}
                </Badge>
              </RichTableCell>
              <RichTableCell class="text-black-sexternary">
                {{ person.age }}
              </RichTableCell>
            </RichTableRow>
          </RichTable>

          <div class="mt-8 p-4 bg-white-primary rounded border">
            <p class="text-sm font-bold mb-2">Current Sort State:</p>
            <p class="text-sm text-black-sexternary">
              Column: <span class="font-mono">{{ sortColumn || 'none' }}</span>
            </p>
            <p class="text-sm text-black-sexternary">
              Direction: <span class="font-mono">{{ sortDirection }}</span>
            </p>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: `
**Interactive Sorting Example**

This example demonstrates how to implement sorting with the RichTable component:

1. **Listen to the sort event**: Each \`RichTableColumn\` with \`:sortable="true"\` emits a \`sort\` event when clicked
2. **Track sort state**: Use reactive refs to track which column is sorted and the direction
3. **Compute sorted data**: Use a computed property to sort your data based on the current state
4. **Visual feedback**: The currently sorted column is highlighted in blue

\`\`\`vue
<script setup>
import { ref, computed } from 'vue'

const sortColumn = ref(null)
const sortDirection = ref('asc')

const handleSort = (columnKey) => {
  if (sortColumn.value === columnKey) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortColumn.value = columnKey
    sortDirection.value = 'asc'
  }
}

const sortedData = computed(() => {
  if (!sortColumn.value) return tableData.value

  return [...tableData.value].sort((a, b) => {
    const aValue = a[sortColumn.value]
    const bValue = b[sortColumn.value]
    const compare = aValue < bValue ? -1 : aValue > bValue ? 1 : 0
    return sortDirection.value === 'asc' ? compare : -compare
  })
})
</script>

<template>
  <RichTable>
    <RichTableHead>
      <RichTableColumn
        column-key="name"
        label="Name"
        :sortable="true"
        @sort="handleSort"
      />
    </RichTableHead>

    <RichTableRow v-for="item in sortedData" :key="item.id">
      <RichTableCell>{{ item.name }}</RichTableCell>
    </RichTableRow>
  </RichTable>
</template>
\`\`\`

**Note**: The sorting logic lives in your component, giving you full control over how data is sorted. You can implement custom sort functions, multi-column sorting, or integrate with backend APIs.
        `,
      },
    },
  },
}
