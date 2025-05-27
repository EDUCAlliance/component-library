import type { Meta, StoryObj } from "@storybook/vue3"
import FooterLinks from "./FooterLinks.vue"
import FooterCol from "./FooterCol.vue"
import FooterLink from "./FooterLink.vue"
import FooterBottom from "./FooterBottom.vue"
import FooterCopyright from "./FooterCopyright.vue"

const meta = {
  title: "Organisms/Navigation/Footer",
  component: FooterLinks,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
There's no Footer component. Main page footer functions on composable building blocks.

- FooterLinks - A container for footer columns.
- FooterCol - A column of footer links.
- FooterLink - A link in a footer column.
- FooterBottom - Colorful bar at the bottom of the footer.
- FooterCopyright - A copyright notice.

The Composed story showcases an example of how to compose the footer from the building blocks.

<div style="display: flex; gap: 8px;">

<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=615-5008&t=GbiXcEPnZCpQT5fm-4" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />
</a>

</div>
`,
      },
    },
  },
} satisfies Meta<typeof FooterLinks>

export default meta

type Story = StoryObj<typeof meta>

export const Composed: Story = {
  render: () => ({
    components: {
      FooterLinks,
      FooterCol,
      FooterLink,
      FooterBottom,
      FooterCopyright,
    },
    template: `
      <footer>
        <FooterLinks>
          <FooterCol title="About us">
            <FooterLink href="#">Vision & Mission</FooterLink>
            <FooterLink href="#">EDUC Values & Goals</FooterLink>
          </FooterCol>
          <FooterCol title="Members">
            <FooterLink href="#">University of Potsdam</FooterLink>
            <FooterLink href="#">University of Pécs</FooterLink>
            <FooterLink href="#">University of Cagliari</FooterLink>
            <FooterLink href="#">Joume I University</FooterLink>
            <FooterLink href="#">University of South-Eastern Norway</FooterLink>
            <FooterLink href="#">Masaryk University</FooterLink>
            <FooterLink href="#">University Paris Nanterre</FooterLink>
            <FooterLink href="#">University of Rennes</FooterLink>
          </FooterCol>
          <FooterCol title="Alliance">
            <FooterLink href="#">News</FooterLink>
            <FooterLink href="#">Calls</FooterLink>
            <FooterLink href="#">Events</FooterLink>
            <FooterLink href="#">Projects</FooterLink>
            <FooterLink href="#">Galleries</FooterLink>
            <FooterLink href="#">Resources</FooterLink>
          </FooterCol>
          <FooterCol title="Community">
            <FooterLink href="#">Students</FooterLink>
            <FooterLink href="#">Teachers</FooterLink>
            <FooterLink href="#">Staff</FooterLink>
            <FooterLink href="#">Researchers</FooterLink>
            <FooterLink href="#">Partners</FooterLink>
          </FooterCol>
        </FooterLinks>
        <FooterCopyright />
        <FooterBottom>
          <a href="#"><font-awesome-icon :icon="['fas', 'cookie']" class="text-[12px]" />Cookies Note</a>
      <a href="#"
        ><font-awesome-icon :icon="['fas', 'newspaper']" class="text-[12px]" />Subscribe to
        newsletter</a
      >
      <a href="#"><font-awesome-icon :icon="['fas', 'shield-halved']" class="text-[12px]" />Imprint</a>
        </FooterBottom>
      </footer>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
<footer>
  <FooterLinks>
    <FooterCol title="About us">
      <FooterLink href="#">Vision & Mission</FooterLink>
      <FooterLink href="#">EDUC Values & Goals</FooterLink>
    </FooterCol>
    <FooterCol title="Members">
      <FooterLink href="#">University of Potsdam</FooterLink>
      <FooterLink href="#">University of Pécs</FooterLink>
      <FooterLink href="#">University of Cagliari</FooterLink>
      <FooterLink href="#">Joume I University</FooterLink>
      <FooterLink href="#">University of South-Eastern Norway</FooterLink>
      <FooterLink href="#">Masaryk University</FooterLink>
      <FooterLink href="#">University Paris Nanterre</FooterLink>
      <FooterLink href="#">University of Rennes</FooterLink>
    </FooterCol>
    <FooterCol title="Alliance">
      <FooterLink href="#">News</FooterLink>
      <FooterLink href="#">Calls</FooterLink>
      <FooterLink href="#">Events</FooterLink>
      <FooterLink href="#">Projects</FooterLink>
      <FooterLink href="#">Galleries</FooterLink>
      <FooterLink href="#">Resources</FooterLink>
    </FooterCol>
    <FooterCol title="Community">
      <FooterLink href="#">Students</FooterLink>
      <FooterLink href="#">Teachers</FooterLink>
      <FooterLink href="#">Staff</FooterLink>
      <FooterLink href="#">Researchers</FooterLink>
      <FooterLink href="#">Partners</FooterLink>
    </FooterCol>
  </FooterLinks>
  <FooterCopyright />
  <FooterBottom>
    <a href="#"><Cookie class="size-4" />Cookies Note</a>
    <a href="#"><Newspaper class="size-4" />Subscribe to newsletter</a>
    <a href="#"><Book class="size-4" />Imprint</a>
  </FooterBottom>
</footer>`,
      },
    },
  },
}

export const FooterLinksComponent: Story = {
  render: () => ({
    components: { FooterLinks, FooterCol, FooterLink },
    template: `
      <FooterLinks>
        <FooterCol title="Contact us">
          <FooterLink href="#">Our staff</FooterLink>
          <FooterLink href="tel:+49456789123"><Phone class="size-4" /> +49 456 789 123</FooterLink>
          <FooterLink href="mailto:info@example.com"><Mail class="size-4" /> info@example.com</FooterLink>
        </FooterCol>
        <FooterCol title="Quick links">
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterCol>
      </FooterLinks>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<FooterLinks>
  <FooterCol title="Contact us">
    <FooterLink href="#">Our staff</FooterLink>
    <FooterLink href="tel:+49456789123"><Phone class="size-4" /> +49 456 789 123</FooterLink>
    <FooterLink href="mailto:info@example.com"><Mail class="size-4" /> info@example.com</FooterLink>
  </FooterCol>
  <FooterCol title="Quick links">
    <FooterLink href="#">Home</FooterLink>
    <FooterLink href="#">About</FooterLink>
    <FooterLink href="#">Contact</FooterLink>
  </FooterCol>
</FooterLinks>`,
      },
    },
  },
}

export const FooterColComponent: Story = {
  render: () => ({
    components: { FooterCol, FooterLink },
    template: `
      <FooterCol title="Resources">
        <FooterLink href="#">Documentation</FooterLink>
        <FooterLink href="#">API Reference</FooterLink>
        <FooterLink href="#">Community Forum</FooterLink>
      </FooterCol>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<FooterCol title="Resources">
  <FooterLink href="#">Documentation</FooterLink>
  <FooterLink href="#">API Reference</FooterLink>
  <FooterLink href="#">Community Forum</FooterLink>
</FooterCol>`,
      },
    },
  },
}

export const FooterLinkComponent: Story = {
  render: () => ({
    components: { FooterLink },
    template: `
      <FooterLink href="#">Single Footer Link</FooterLink>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<FooterLink href="#">Single Footer Link</FooterLink>`,
      },
    },
  },
}

export const FooterBottomComponent: Story = {
  render: () => ({
    components: { FooterBottom, Book, Cookie, Newspaper },
    template: `
      <FooterBottom>
        <a href="#"><Cookie class="size-4" />Cookies Note</a>
        <a href="#"><Newspaper class="size-4" />Subscribe to newsletter</a>
        <a href="#"><Book class="size-4" />Imprint</a>
      </FooterBottom>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<FooterBottom>
  <a href="#"><Cookie class="size-4" />Cookies Note</a>
  <a href="#"><Newspaper class="size-4" />Subscribe to newsletter</a>
  <a href="#"><Book class="size-4" />Imprint</a>
</FooterBottom>`,
      },
    },
  },
}

export const FooterCopyrightComponent: Story = {
  render: () => ({
    components: { FooterCopyright },
    template: `<FooterCopyright />`,
  }),
  parameters: {
    docs: {
      source: {
        code: `<FooterCopyright />`,
      },
    },
  },
}
