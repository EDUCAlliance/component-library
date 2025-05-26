import type { Meta, StoryObj } from "@storybook/vue3"
import {
  RichTable,
  RichTableHeader,
  RichTableContent,
  RichTableHead,
  RichTableColumn,
  RichTableRow,
  RichTableCell,
  RichTableActions,
} from "./index"
import PrimaryButton from "@/components/atoms/buttons/PrimaryButton.vue"
import SecondaryButton from "@/components/atoms/buttons/SecondaryButton.vue"
import Badge from "@/components/atoms/others/Badge.vue"

const meta = {
  title: "Organisms/Rich Table",
  component: RichTable,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
**Rich Table** is a compound component system for creating feature-rich data tables.

The component system includes:
- **RichTable**: The main container
- **RichTableHeader**: Section for title, description, and action buttons
- **RichTableContent**: Container for the actual table content
- **RichTableHead**: Header row container
- **RichTableColumn**: Individual column headers with optional sorting
- **RichTableRow**: Data row container with hover effects
- **RichTableCell**: Individual data cells
- **RichTableActions**: Action buttons column (e.g., three dots menu)

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
      RichTableContent,
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
                <RichTableColumn
                  key="name"
                  label="Name"
                  width="381px"
                  :sortable="true"
                />
                <RichTableColumn
                  key="title"
                  label="Title"
                  width="213px"
                />
                <RichTableColumn
                  key="email"
                  label="Email"
                />
                <RichTableColumn
                  key="status"
                  label="Status"
                  width="213px"
                />
                <RichTableColumn
                  key="actions"
                  label=""
                  width="24px"
                />
              </RichTableHead>

              <RichTableRow
                v-for="(person, index) in staffData"
                :key="index"
                :class="index % 2 === 1 ? 'bg-white-tertiary' : 'bg-white-primary'"
              >
                <RichTableCell width="381px" class="font-medium text-black-primary">
                  {{ person.name }}
                </RichTableCell>
                <RichTableCell width="213px" class="text-black-sexternary">
                  {{ person.title }}
                                  </RichTableCell>
                <RichTableCell class="text-black-sexternary">
                  {{ person.email }}
                </RichTableCell>
                <RichTableCell width="213px">
                  <Badge color="green" size="sm">{{ person.status }}</Badge>
                </RichTableCell>
                <RichTableCell width="24px">
                  <RichTableActions />
                </RichTableCell>
              </RichTableRow>
            </RichTableContent>
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
      RichTableContent,
      RichTableHead,
      RichTableColumn,
      RichTableRow,
      RichTableCell,
      PrimaryButton,
    },
    template: `
      <div class="bg-gray-50 min-h-screen p-8">
        <div class="max-w-4xl mx-auto">
          <RichTable>
            <RichTableHeader
              title="Simple Data Table"
              description="A basic example with minimal configuration."
            >
              <template #actions>
                <PrimaryButton size="sm">Add Item</PrimaryButton>
              </template>
            </RichTableHeader>

            <RichTableContent>
              <RichTableHead>
                <RichTableColumn key="id" label="ID" width="80px" />
                <RichTableColumn key="name" label="Name" :sortable="true" />
                <RichTableColumn key="category" label="Category" />
              </RichTableHead>

              <RichTableRow class="bg-white-primary">
                <RichTableCell width="80px" class="font-mono">#001</RichTableCell>
                <RichTableCell class="font-medium">Sample Item 1</RichTableCell>
                <RichTableCell>Category A</RichTableCell>
              </RichTableRow>

              <RichTableRow class="bg-white-tertiary">
                <RichTableCell width="80px" class="font-mono">#002</RichTableCell>
                <RichTableCell class="font-medium">Sample Item 2</RichTableCell>
                <RichTableCell>Category B</RichTableCell>
              </RichTableRow>

              <RichTableRow class="bg-white-primary">
                <RichTableCell width="80px" class="font-mono">#003</RichTableCell>
                <RichTableCell class="font-medium">Sample Item 3</RichTableCell>
                <RichTableCell>Category A</RichTableCell>
              </RichTableRow>
            </RichTableContent>
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
      RichTableContent,
      RichTableHead,
      RichTableColumn,
      RichTableRow,
      RichTableCell,
      RichTableActions,
    },
    template: `
      <div class="bg-gray-50 min-h-screen p-8">
        <div class="max-w-4xl mx-auto">
          <RichTable>
            <RichTableContent>
              <RichTableHead>
                <RichTableColumn key="name" label="Name" :sortable="true" />
                <RichTableColumn key="email" label="Email" />
                <RichTableColumn key="actions" label="" width="40px" />
              </RichTableHead>

              <RichTableRow class="bg-white-primary">
                <RichTableCell class="font-medium">John Doe</RichTableCell>
                <RichTableCell class="text-black-sexternary">john@example.com</RichTableCell>
                <RichTableCell width="40px">
                  <RichTableActions />
                </RichTableCell>
              </RichTableRow>

              <RichTableRow class="bg-white-tertiary">
                <RichTableCell class="font-medium">Jane Smith</RichTableCell>
                <RichTableCell class="text-black-sexternary">jane@example.com</RichTableCell>
                <RichTableCell width="40px">
                  <RichTableActions />
                </RichTableCell>
              </RichTableRow>
            </RichTableContent>
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
