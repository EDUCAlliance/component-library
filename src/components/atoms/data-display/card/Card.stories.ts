import type { Meta, StoryObj } from "@storybook/vue3"
import Card from "./Card.vue"
import CardHeader from "./CardHeader.vue"
import CardBody from "./CardBody.vue"
import CardFooter from "./CardFooter.vue"
import CardDivider from "./CardDivider.vue"
import { BackgroundImage } from "../../content"
import { Badge } from "../../feedback"
import { Avatar, AvatarImage, AvatarFallback } from "../avatar"
import { GhostButton } from "../../buttons"

const meta = {
  title: "Atoms/DataDisplay/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Card components provide a flexible and extensible content container. The card system is built with composable building blocks:

- **Card** – The main container with basic styling and context
- **CardHeader** – Header section for titles, images, and badges
- **CardBody** – Main content area with padding
- **CardFooter** – Footer section for actions and additional content
- **CardDivider** – Visual separator between content sections

The card components can be combined to create various layouts from simple content cards to complex project and job posting cards.

<div style="display: flex; gap: 8px;">

<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=615-5008&t=GbiXcEPnZCpQT5fm-4" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />
</a>

</div>
`,
      },
    },
  },
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const ProjectCard: Story = {
  render: () => ({
    components: {
      Card,
      CardHeader,
      CardBody,
      CardFooter,
      CardDivider,
      BackgroundImage,
      Badge,
      Avatar,
      AvatarImage,
      AvatarFallback,
      GhostButton,
    },
    template: `
      <Card class="w-[412px]">
        <CardHeader class="h-[264px]">
          <BackgroundImage src="/assets/background/project/1.svg" alt="Project 1" />
          <Badge size="sm" color="black">Project</Badge>
          <h4 class="relative text-2xl font-bold text-balance">
            Method of plasma treatment of a surface of a hollow electrically non-conductive body
          </h4>
        </CardHeader>
        <CardBody>
          <p>
            We intend to build an IoT framework that is able to monitor and to simulate as a lining lab
            the "circularity" of a city environment...
          </p>
          <CardDivider class="mt-4" />
          <div class="flex items-center gap-3 py-3">
            <p class="text-base font-bold">Owner</p>
            <div class="flex items-center gap-2">
              <Avatar size="xs">
                <AvatarImage src="https://cataas.com/cat?type=square&width=64" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <p>John Doe</p>
            </div>
          </div>
          <CardDivider />
        </CardBody>
        <CardFooter>
          <GhostButton class="text-violet-primary" size="auto">
            View detail <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-4" />
          </GhostButton>
        </CardFooter>
      </Card>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<Card class="w-[412px]">
  <CardHeader class="h-[264px]">
    <BackgroundImage src="/assets/background/project/1.svg" alt="Project 1" />
    <Badge size="sm" color="black">Project</Badge>
    <h4 class="relative text-2xl font-bold text-balance">
      Method of plasma treatment of a surface of a hollow electrically non-conductive body
    </h4>
  </CardHeader>
  <CardBody>
    <p>
      We intend to build an IoT framework that is able to monitor and to simulate as a lining lab
      the "circularity" of a city environment...
    </p>
    <CardDivider class="mt-4" />
    <div class="flex items-center gap-3 py-3">
      <p class="text-base font-bold">Owner</p>
      <div class="flex items-center gap-2">
        <Avatar size="xs">
          <AvatarImage src="https://cataas.com/cat?type=square&width=64" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <p>John Doe</p>
      </div>
    </div>
    <CardDivider />
  </CardBody>
  <CardFooter>
    <GhostButton class="text-violet-primary" size="auto">
      View detail <ArrowRight class="size-4" />
    </GhostButton>
  </CardFooter>
</Card>`,
      },
    },
  },
}

export const ProjectCardWithImage: Story = {
  render: () => ({
    components: {
      Card,
      CardHeader,
      CardBody,
      CardFooter,
      CardDivider,
      BackgroundImage,
      Badge,
      Avatar,
      AvatarImage,
      AvatarFallback,
      GhostButton,
    },
    template: `
      <Card class="w-[412px]">
        <CardHeader class="h-[264px]">
          <BackgroundImage src="/assets/example-image-card.jpg" alt="Project 1" />
          <Badge size="sm" color="white">Project</Badge>
          <h4 class="relative text-2xl font-bold text-balance">
            "Smart city app": Circular Economy IoT framework
          </h4>
        </CardHeader>
        <CardBody>
          <p>
            We intend to build an IoT framework that is able to monitor and to simulate as a lining lab
            the "circularity" of a city environment...
          </p>
          <CardDivider class="mt-4" />
          <div class="flex items-center gap-3 py-3">
            <p class="text-base font-bold">Owner</p>
            <div class="flex items-center gap-2">
              <Avatar size="xs">
                <AvatarImage src="https://cataas.com/cat?type=square&width=64" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <p>John Doe</p>
            </div>
          </div>
          <CardDivider />
        </CardBody>
        <CardFooter>
          <GhostButton class="text-violet-primary" size="auto">
            View detail <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-4" />
          </GhostButton>
        </CardFooter>
      </Card>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<Card class="w-[412px]">
  <CardHeader class="h-[264px]">
    <BackgroundImage src="/assets/example-image-card.jpg" alt="Project 1" />
    <Badge size="sm" color="white">Project</Badge>
    <h4 class="relative text-2xl font-bold text-balance">
      "Smart city app": Circular Economy IoT framework
    </h4>
  </CardHeader>
  <CardBody>
    <p>
      We intend to build an IoT framework that is able to monitor and to simulate as a lining lab
      the "circularity" of a city environment...
    </p>
    <CardDivider class="mt-4" />
    <div class="flex items-center gap-3 py-3">
      <p class="text-base font-bold">Owner</p>
      <div class="flex items-center gap-2">
        <Avatar size="xs">
          <AvatarImage src="https://cataas.com/cat?type=square&width=64" />
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <p>John Doe</p>
      </div>
    </div>
    <CardDivider />
  </CardBody>
  <CardFooter>
    <GhostButton class="text-violet-primary" size="auto">
      View detail <ArrowRight class="size-4" />
    </GhostButton>
  </CardFooter>
</Card>`,
      },
    },
  },
}

export const FacilityCard: Story = {
  render: () => ({
    components: {
      Card,
      CardHeader,
      CardBody,
      CardFooter,
      CardDivider,
      BackgroundImage,
      GhostButton,
    },
    template: `
      <Card class="w-[412px]">
        <BackgroundImage src="/assets/background/facilities/element.svg" alt="Project 1" />
        <CardHeader>
          <h4 class="relative text-3xl font-bold text-balance">
            CEING – Interdisciplinary research and gender studies centre
          </h4>
        </CardHeader>
        <CardBody class="text-white-primary mt-12">
          <p class="relative">
            CEING is a Centre of Excellence for the coordination of training and research activities
            based on gender mainstreaming guidelines, which are already present transversally in
            UNICA...
          </p>
          <CardDivider class="mt-4" color="white" />
          <div class="relative flex items-center gap-3 py-3">
            <p class="text-base font-bold">Owner</p>
            <div class="flex items-center gap-2">
              <p>University of Cagliari</p>
            </div>
          </div>
          <CardDivider color="white" />
        </CardBody>
        <CardFooter class="relative">
          <GhostButton class="text-white-primary" size="auto">
            View detail <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-4" />
          </GhostButton>
        </CardFooter>
      </Card>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<Card class="w-[412px]">
  <BackgroundImage src="/assets/background/facilities/element.svg" alt="Project 1" />
  <CardHeader>
    <h4 class="relative text-3xl font-bold text-balance">
      CEING – Interdisciplinary research and gender studies centre
    </h4>
  </CardHeader>
  <CardBody class="text-white-primary mt-12">
    <p class="relative">
      CEING is a Centre of Excellence for the coordination of training and research activities
      based on gender mainstreaming guidelines, which are already present transversally in
      UNICA...
    </p>
    <CardDivider class="mt-4" color="white" />
    <div class="relative flex items-center gap-3 py-3">
      <p class="text-base font-bold">Owner</p>
      <div class="flex items-center gap-2">
        <p>University of Cagliari</p>
      </div>
    </div>
    <CardDivider color="white" />
  </CardBody>
  <CardFooter class="relative">
    <GhostButton class="text-white-primary" size="auto">
      View detail <ArrowRight class="size-4" />
    </GhostButton>
  </CardFooter>
</Card>`,
      },
    },
  },
}

export const JobCard: Story = {
  render: () => ({
    components: {
      Card,
      CardBody,
      CardFooter,
      CardDivider,
      Badge,
      GhostButton,
    },
    template: `
      <Card class="border-pink-primary max-w-[628px] border-2">
        <CardBody class="p-6">
          <p class="text-sm font-medium tracking-wider uppercase">
            The Department of microsystems at the University of South-eastern Norway
          </p>
          <CardDivider class="mt-3 mb-4" />
          <div class="mb-2 flex items-center gap-2">
            <Badge color="black" size="sm">Full-time</Badge>
            <Badge color="pink" size="sm">Graduates</Badge>
          </div>
          <h4 class="text-2xl font-bold">Researcher in electrode material for sodium ion battery</h4>
          <CardDivider class="mt-4 mb-3" />
          <p>
            As part of the project your main responsibilities and duties are implementation of the
            project related to the development of carbon electrode materials for sodium ion battery.
          </p>
          <CardDivider class="my-3" />
          <div class="grid gap-2 md:grid-cols-2">
            <div class="flex items-center gap-2">
              <font-awesome-icon :icon="['fas', 'flag']" class="size-4" />
              <p>Horten, Norway</p>
            </div>
            <div class="flex items-center gap-2">
              <font-awesome-icon :icon="['fas', 'money-bill']" class="size-4" />
              <p>NOK 624.500–821.100 per year</p>
            </div>
          </div>
          <CardDivider class="mt-3" />
        </CardBody>
        <CardFooter class="px-6 pb-6">
          <GhostButton class="text-pink-primary" size="auto">
            View detail <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-4" />
          </GhostButton>
        </CardFooter>
      </Card>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<Card class="border-pink-primary max-w-[628px] border-2">
  <CardBody class="p-6">
    <p class="text-sm font-medium tracking-wider uppercase">
      The Department of microsystems at the University of South-eastern Norway
    </p>
    <CardDivider class="mt-3 mb-4" />
    <div class="mb-2 flex items-center gap-2">
      <Badge color="black" size="sm">Full-time</Badge>
      <Badge color="pink" size="sm">Graduates</Badge>
    </div>
    <h4 class="text-2xl font-bold">Researcher in electrode material for sodium ion battery</h4>
    <CardDivider class="mt-4 mb-3" />
    <p>
      As part of the project your main responsibilities and duties are implementation of the
      project related to the development of carbon electrode materials for sodium ion battery.
    </p>
    <CardDivider class="my-3" />
    <div class="grid gap-2 md:grid-cols-2">
      <div class="flex items-center gap-2">
        <Flag class="size-4" />
        <p>Horten, Norway</p>
      </div>
      <div class="flex items-center gap-2">
        <DollarSign class="size-4" />
        <p>NOK 624.500–821.100 per year</p>
      </div>
    </div>
    <CardDivider class="mt-3" />
  </CardBody>
  <CardFooter class="px-6 pb-6">
    <GhostButton class="text-pink-primary" size="auto">
      View detail <ArrowRight class="size-4" />
    </GhostButton>
  </CardFooter>
</Card>`,
      },
    },
  },
}

export const PodcastCard: Story = {
  render: () => ({
    components: {
      Card,
      CardHeader,
      CardBody,
      CardFooter,
      CardDivider,
      BackgroundImage,
      Badge,
      GhostButton,
    },
    template: `
      <Card class="w-[412px]">
    <CardHeader class="h-[412px]">
      <BackgroundImage src="/assets/example-image-microphone.jpg" alt="Podcast Episode" />
      <BackgroundImage src="/assets/background/podcast/1-1.svg" alt="Podcast Episode" />
      <h4 class="relative text-3xl font-bold text-balance">
        EDUCast: Five Years of EDUC: Milestones, Memories and the Road Ahead
      </h4>
      <div class="relative flex gap-1">
        <Badge size="sm" color="black">Season 2</Badge>
        <Badge size="sm" color="white">Episode 1</Badge>
      </div>
    </CardHeader>
    <CardBody class="text-black-primary">
      <div class="flex items-center gap-3">
        <p class="text-base font-bold">Guest</p>
        <p class="text-sm">Prof. Dr. István Tarrósy (Director of the Inter...)</p>
      </div>
      <CardDivider class="mt-3" />
    </CardBody>
    <CardFooter>
      <GhostButton class="text-pink-primary" size="auto">
        View detail <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-3" />
      </GhostButton>
    </CardFooter>
  </Card>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<Card class="w-[412px]">
  <CardHeader class="h-[412px]">
    <BackgroundImage src="/assets/background/podcast/episode-1.jpg" alt="Podcast Episode" />
    <h4 class="relative text-3xl font-bold text-balance">
      EDUCast: Five Years of EDUC: Milestones, Memories and the Road Ahead
    </h4>
    <div class="relative flex gap-1">
      <Badge size="sm" color="black">Season 2</Badge>
      <Badge size="sm" color="white">Episode 1</Badge>
    </div>
  </CardHeader>
  <CardBody class="text-black-primary">
    <div class="pb-3 border-b border-gray-200">
      <div class="flex items-center gap-3">
        <p class="text-base font-bold">Guest</p>
        <p class="text-sm text-gray-600">
          Prof. Dr. István Tarrósy (Director of the Inter...)
        </p>
      </div>
    </div>
    <GhostButton class="text-pink-primary mt-6" size="auto">
      View detail <ArrowRight class="size-3" />
    </GhostButton>
  </CardBody>
</Card>`,
      },
    },
  },
}

export const BasicCard: Story = {
  render: () => ({
    components: { Card, CardHeader, CardBody, CardFooter, GhostButton },
    template: `
      <Card class="max-w-md">
        <CardHeader>
          <h3 class="text-lg font-semibold text-black-primary">Card Title</h3>
        </CardHeader>
        <CardBody>
          <p>This is a basic card with minimal content to showcase the basic structure.</p>
        </CardBody>
        <CardFooter>
          <GhostButton class="text-pink-primary" size="auto">
            View detail <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-3" />
          </GhostButton>
        </CardFooter>
      </Card>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<Card class="max-w-md">
  <CardHeader>
    <h3 class="text-lg font-semibold">Card Title</h3>
  </CardHeader>
  <CardBody>
    <p>This is a basic card with minimal content to showcase the basic structure.</p>
  </CardBody>
  <CardFooter>
    <button class="px-4 py-2 bg-blue-500 text-white rounded">Action</button>
  </CardFooter>
</Card>`,
      },
    },
  },
}

export const CardComponent: Story = {
  render: () => ({
    components: { Card },
    template: `<Card class="p-4">Simple card container</Card>`,
  }),
  parameters: {
    docs: {
      source: {
        code: `<Card class="p-4">Simple card container</Card>`,
      },
    },
  },
}

export const CardHeaderComponent: Story = {
  render: () => ({
    components: { Card, CardHeader },
    template: `
      <Card class="max-w-md">
        <CardHeader class="text-black-primary">
          <h3 class="text-lg font-semibold">Header Content</h3>
          <p class="text-sm text-gray-600">Subtitle or additional info</p>
        </CardHeader>
      </Card>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<Card class="max-w-md">
  <CardHeader>
    <h3 class="text-lg font-semibold">Header Content</h3>
    <p class="text-sm text-gray-600">Subtitle or additional info</p>
  </CardHeader>
</Card>`,
      },
    },
  },
}

export const CardBodyComponent: Story = {
  render: () => ({
    components: { Card, CardBody },
    template: `
      <Card class="max-w-md">
        <CardBody>
          <p>This is the main content area of the card. It includes automatic padding and can contain any content.</p>
        </CardBody>
      </Card>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<Card class="max-w-md">
  <CardBody>
    <p>This is the main content area of the card. It includes automatic padding and can contain any content.</p>
  </CardBody>
</Card>`,
      },
    },
  },
}

export const CardFooterComponent: Story = {
  render: () => ({
    components: { Card, CardFooter },
    template: `
      <Card class="max-w-md">
        <CardFooter>
          <button class="px-4 py-2 bg-blue-500 text-white rounded mr-2">Primary</button>
          <button class="px-4 py-2 border border-gray-300 rounded">Secondary</button>
        </CardFooter>
      </Card>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<Card class="max-w-md">
  <CardFooter>
    <button class="px-4 py-2 bg-blue-500 text-white rounded mr-2">Primary</button>
    <button class="px-4 py-2 border border-gray-300 rounded">Secondary</button>
  </CardFooter>
</Card>`,
      },
    },
  },
}

export const CardDividerComponent: Story = {
  render: () => ({
    components: { Card, CardBody, CardDivider },
    template: `
      <Card class="max-w-md">
        <CardBody>
          <p>Content above divider</p>
          <CardDivider class="my-4" />
          <p>Content below divider</p>
          <CardDivider class="my-4" color="pink" />
          <p>Content below colored divider</p>
        </CardBody>
      </Card>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<Card class="max-w-md">
  <CardBody>
    <p>Content above divider</p>
    <CardDivider class="my-4" />
    <p>Content below divider</p>
    <CardDivider class="my-4" color="pink" />
    <p>Content below colored divider</p>
  </CardBody>
</Card>`,
      },
    },
  },
}
