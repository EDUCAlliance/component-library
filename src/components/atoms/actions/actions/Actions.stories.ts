import type { Meta, StoryObj } from "@storybook/vue3-vite"
import Actions from "./Actions.vue"
import ActionCard from "./ActionCard.vue"
import ActionCardIcon from "./ActionCardIcon.vue"
import ActionCardTitle from "./ActionCardTitle.vue"
import ActionCardDescription from "./ActionCardDescription.vue"

const meta = {
  title: "Atoms/Actions/Actions",
  component: Actions,
  tags: ["autodocs"],
} satisfies Meta<typeof Actions>

export default meta
type Story = StoryObj<typeof meta>

export const OutlinedVariant: Story = {
  name: "Outlined Actions",
  render: () => ({
    components: {
      Actions,
      ActionCard,
      ActionCardIcon,
      ActionCardTitle,
      ActionCardDescription,
    },
    template: `
      <Actions>
        <ActionCard color="violet" variant="outlined">
          <ActionCardIcon :icon="['fas', 'handshake']" />
          <ActionCardTitle>EDUC-SHARE</ActionCardTitle>
          <ActionCardDescription>
            Aims at introducing pilot tools to enhance multidisciplinary collaborative research,
            addressing key global challenges.
          </ActionCardDescription>
        </ActionCard>
        <ActionCard color="orange" variant="outlined">
          <ActionCardIcon :icon="['fas', 'handshake']" />
          <ActionCardTitle>EDUC-SHARE</ActionCardTitle>
          <ActionCardDescription>
            Aims at introducing pilot tools to enhance multidisciplinary collaborative research,
            addressing key global challenges.
          </ActionCardDescription>
        </ActionCard>
        <ActionCard color="pink" variant="outlined">
          <ActionCardIcon :icon="['fas', 'handshake']" />
          <ActionCardTitle>EDUC-SHARE</ActionCardTitle>
          <ActionCardDescription>
            Aims at introducing pilot tools to enhance multidisciplinary collaborative research,
            addressing key global challenges.
          </ActionCardDescription>
        </ActionCard>
        <ActionCard color="green" variant="outlined">
          <ActionCardIcon :icon="['fas', 'handshake']" />
          <ActionCardTitle>EDUC-SHARE</ActionCardTitle>
          <ActionCardDescription>
            Aims at introducing pilot tools to enhance multidisciplinary collaborative research,
            addressing key global challenges.
          </ActionCardDescription>
        </ActionCard>
      </Actions>
    `,
  }),
}

export const FilledVariant: Story = {
  name: "Filled Actions",
  render: () => ({
    components: {
      Actions,
      ActionCard,
      ActionCardIcon,
      ActionCardTitle,
      ActionCardDescription,
    },
    template: `
      <Actions>
        <ActionCard color="violet" variant="filled">
          <ActionCardIcon :icon="['fas', 'handshake']" />
          <ActionCardTitle>EDUC-SHARE</ActionCardTitle>
          <ActionCardDescription>
            Aims at introducing pilot tools to enhance multidisciplinary collaborative research,
            addressing key global challenges.
          </ActionCardDescription>
        </ActionCard>
        <ActionCard color="orange" variant="filled">
          <ActionCardIcon :icon="['fas', 'handshake']" />
          <ActionCardTitle>EDUC-SHARE</ActionCardTitle>
          <ActionCardDescription>
            Aims at introducing pilot tools to enhance multidisciplinary collaborative research,
            addressing key global challenges.
          </ActionCardDescription>
        </ActionCard>
        <ActionCard color="pink" variant="filled">
          <ActionCardIcon :icon="['fas', 'handshake']" />
          <ActionCardTitle>EDUC-SHARE</ActionCardTitle>
          <ActionCardDescription>
            Aims at introducing pilot tools to enhance multidisciplinary collaborative research,
            addressing key global challenges.
          </ActionCardDescription>
        </ActionCard>
        <ActionCard color="green" variant="filled">
          <ActionCardIcon :icon="['fas', 'handshake']" />
          <ActionCardTitle>EDUC-SHARE</ActionCardTitle>
          <ActionCardDescription>
            Aims at introducing pilot tools to enhance multidisciplinary collaborative research,
            addressing key global challenges.
          </ActionCardDescription>
        </ActionCard>
      </Actions>
    `,
  }),
}

export const WithLinks: Story = {
  name: "Actions with Links",
  render: () => ({
    components: {
      Actions,
      ActionCard,
      ActionCardIcon,
      ActionCardTitle,
      ActionCardDescription,
    },
    template: `
      <Actions>
        <ActionCard color="violet" variant="outlined" link="https://example.com/educ-share">
          <ActionCardIcon :icon="['fas', 'handshake']" />
          <ActionCardTitle>EDUC-SHARE</ActionCardTitle>
          <ActionCardDescription>
            Aims at introducing pilot tools to enhance multidisciplinary collaborative research,
            addressing key global challenges.
          </ActionCardDescription>
        </ActionCard>
        <ActionCard color="orange" variant="outlined" link="https://example.com/educ-connect">
          <ActionCardIcon :icon="['fas', 'users']" />
          <ActionCardTitle>EDUC-CONNECT</ActionCardTitle>
          <ActionCardDescription>
            Building bridges between institutions to foster collaboration and knowledge sharing.
          </ActionCardDescription>
        </ActionCard>
        <ActionCard color="pink" variant="outlined" link="https://example.com/educ-research">
          <ActionCardIcon :icon="['fas', 'flask']" />
          <ActionCardTitle>EDUC-RESEARCH</ActionCardTitle>
          <ActionCardDescription>
            Supporting innovative research initiatives across multiple disciplines.
          </ActionCardDescription>
        </ActionCard>
        <ActionCard color="green" variant="outlined" link="https://example.com/educ-learn">
          <ActionCardIcon :icon="['fas', 'graduation-cap']" />
          <ActionCardTitle>EDUC-LEARN</ActionCardTitle>
          <ActionCardDescription>
            Empowering students and educators with cutting-edge learning tools.
          </ActionCardDescription>
        </ActionCard>
      </Actions>
    `,
  }),
}
