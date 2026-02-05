import type { Meta, StoryObj } from "@storybook/vue3-vite"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogScrollContent,
  DialogOverlay,
} from "."
import { PrimaryButton } from "@/components/atoms/buttons"
import { Input } from "@/components/atoms/forms"

const meta = {
  title: "Atoms/Overlays/Dialog",
  component: Dialog,
  argTypes: {
    class: {
      control: "text",
      description: "Additional classes for the dialog root.",
    },
  },
  render: (args) => ({
    components: {
      Dialog,
      DialogTrigger,
      DialogContent,
      DialogHeader,
      DialogTitle,
      DialogDescription,
      DialogFooter,
      PrimaryButton,
    },
    setup() {
      return { args }
    },
    template: `
      <Dialog :class="args.class">
        <DialogTrigger>
          <PrimaryButton>Open Dialog</PrimaryButton>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Basic Dialog</DialogTitle>
            <DialogDescription>
              This is a basic dialog example with a title and description.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <PrimaryButton>Close</PrimaryButton>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `,
  }),
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
**Dialog** is a window overlaid on either the primary window or another dialog window.

Component is based on Reka UI.

- Fully accessible and keyboard-navigable
- Focus is trapped within the dialog when open
- ESC key closes the dialog
- Clicking outside closes the dialog
- Scroll is locked when dialog is open
- Multiple dialog components can be nested

<div style="display: flex; gap: 8px;">
<a href="https://www.figma.com/design/kZqaOmwkPp8sjQpMeHR4nS/EDUC-UI-components?node-id=391-2546&t=WyOxhfBthfxdEtLs-4" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/figma-reference.png" alt="Figma reference" />
</a>
<a href="https://reka-ui.com/docs/components/dialog" target="_blank">
  <img src="http://localhost:6006/src/stories/assets/buttons/full-documentation.png" alt="Reka UI reference" />
</a>
</div>
        `,
      },
      source: {
        code: `<Dialog>
  <DialogTrigger>
    <PrimaryButton>Open Dialog</PrimaryButton>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Basic Dialog</DialogTitle>
      <DialogDescription>
        This is a basic dialog example with a title and description.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose>
        <PrimaryButton>Close</PrimaryButton>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
      },
    },
  },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}

export const WithForm: Story = {
  render: () => ({
    components: {
      Dialog,
      DialogTrigger,
      DialogContent,
      DialogHeader,
      DialogTitle,
      DialogDescription,
      DialogFooter,
      DialogClose,
      PrimaryButton,
      Input,
    },
    template: `
      <Dialog>
        <DialogTrigger>
          <PrimaryButton>Edit Profile</PrimaryButton>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <Input placeholder="John Doe">
              <template #label>Name</template>
              <template #helper>Enter your full name</template>
            </Input>
            <Input placeholder="@johndoe" state="default">
              <template #label>Username</template>
              <template #prefix>@</template>
              <template #helper>This is your public display name</template>
            </Input>
            <Input placeholder="john@example.com" state="success">
              <template #label>Email</template>
              <template #helper>Your email has been verified</template>
            </Input>
          </div>
          <DialogFooter>
            <DialogClose>
              <PrimaryButton type="submit">Save changes</PrimaryButton>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<Dialog>
  <DialogTrigger>
    <PrimaryButton>Edit Profile</PrimaryButton>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div class="grid gap-4 py-4">
      <Input placeholder="John Doe">
        <template #label>Name</template>
        <template #helper>Enter your full name</template>
      </Input>
      <Input placeholder="@johndoe" state="default">
        <template #label>Username</template>
        <template #prefix>@</template>
        <template #helper>This is your public display name</template>
      </Input>
      <Input placeholder="john@example.com" state="success">
        <template #label>Email</template>
        <template #helper>Your email has been verified</template>
      </Input>
    </div>
    <DialogFooter>
      <DialogClose>
        <PrimaryButton type="submit">Save changes</PrimaryButton>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
      },
    },
  },
}

export const WithScrollContent: Story = {
  render: () => ({
    components: {
      Dialog,
      DialogTrigger,
      DialogScrollContent,
      DialogHeader,
      DialogTitle,
      DialogDescription,
      DialogFooter,
      DialogClose,
      DialogOverlay,
      PrimaryButton,
    },
    template: `
      <Dialog>
        <DialogTrigger as-child>
          <PrimaryButton>Edit Profile</PrimaryButton>
        </DialogTrigger>
        <DialogOverlay />
        <DialogScrollContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Modal title</DialogTitle>
            <DialogDescription>
              Here is modal with overlay scroll
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4 h-[300dvh]">
            <p>
              This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling will move the modal as needed.
            </p>
          </div>
          <DialogFooter>
            <DialogClose>
              <PrimaryButton type="submit">Save changes</PrimaryButton>
            </DialogClose>
          </DialogFooter>
        </DialogScrollContent>
      </Dialog>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<Dialog>
  <DialogTrigger as-child>
    <PrimaryButton>Edit Profile</PrimaryButton>
  </DialogTrigger>
  <DialogOverlay />
  <DialogScrollContent class="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Modal title</DialogTitle>
      <DialogDescription>
        Here is modal with overlay scroll
      </DialogDescription>
    </DialogHeader>
    <div class="grid gap-4 py-4 h-[300dvh]">
      <p>
        This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling will move the modal as needed.
      </p>
    </div>
    <DialogFooter>
      <DialogClose>
        <PrimaryButton type="submit">Save changes</PrimaryButton>
      </DialogClose>
    </DialogFooter>
  </DialogScrollContent>
</Dialog>`,
      },
    },
  },
}

export const LoginForm: Story = {
  render: () => ({
    components: {
      Dialog,
      DialogTrigger,
      DialogScrollContent,
      DialogHeader,
      DialogTitle,
      DialogDescription,
      DialogFooter,
      DialogClose,
      DialogOverlay,
      PrimaryButton,
      DialogContent,
      Input,
    },
    template: `
    <Dialog>
      <DialogTrigger>
        <PrimaryButton>Login form</PrimaryButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle class="text-center text-2xl">Login form</DialogTitle>
        </DialogHeader>
        <div class="flex flex-col justify-center gap-4 py-4">
          <Input placeholder="Enter your email or username">
            <template #label>Email or username</template>
          </Input>
          <Input placeholder="Enter your password" type="password">
            <template #label>Password</template>
          </Input>
          <p class="text-center">
            <a href="#" class="link">Forgot your password?</a>
          </p>
          <PrimaryButton type="submit" class="w-full">Sign in</PrimaryButton>
          <p class="text-center">
            <a href="#" class="link">Create account</a>
          </p>
          <p class="border-black-quaternary mx-auto w-fit border-t pt-4 text-center font-bold">
            Or sign in with your social media account
          </p>
          <div class="text-black-tertiary flex justify-center gap-6">
            <a href="#" class="text-black-tertiary hover:text-black-primary transition-colors">
              <svg role="img" viewBox="0 0 24 24" class="size-5" xmlns="http://www.w3.org/2000/svg">
                <title>Facebook</title>
                <path
                  d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="#" class="text-black-tertiary hover:text-black-primary transition-colors">
              <svg role="img" viewBox="0 0 24 24" class="size-5" xmlns="http://www.w3.org/2000/svg">
                <title>X</title>
                <path
                  d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"
                  fill="currentcolor"
                />
              </svg>
            </a>
            <a href="#" class="text-black-tertiary hover:text-black-primary transition-colors">
              <svg role="img" viewBox="0 0 24 24" class="size-5" xmlns="http://www.w3.org/2000/svg">
                <title>Instagram</title>
                <path
                  d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="#" class="text-black-tertiary hover:text-black-primary transition-colors">
              <svg role="img" viewBox="0 0 24 24" class="size-5" xmlns="http://www.w3.org/2000/svg">
                <title>YouTube</title>
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="#" class="text-black-tertiary hover:text-black-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 448 512">
                <path
                  d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>`,
  }),
  parameters: {
    docs: {
      source: {
        code: `<Dialog>
  <DialogTrigger>
    <PrimaryButton>Login form</PrimaryButton>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle class="text-center text-2xl">Login form</DialogTitle>
    </DialogHeader>
    <div class="flex flex-col justify-center gap-4 py-4">
      <Input placeholder="Enter your email or username">
        <template #label>Email or username</template>
      </Input>
      <Input placeholder="Enter your password" type="password">
        <template #label>Password</template>
      </Input>
      <p class="text-center">
        <a href="#" class="link">Forgot your password?</a>
      </p>
      <PrimaryButton type="submit" class="w-full">Sign in</PrimaryButton>
      <p class="text-center">
        <a href="#" class="link">Create account</a>
      </p>
      <p class="border-black-quaternary mx-auto w-fit border-t pt-4 text-center font-bold">
        Or sign in with your social media account
      </p>
      <div class="text-black-tertiary flex justify-center gap-6">
        <!-- Social media icons -->
        <a href="#" class="text-black-tertiary hover:text-black-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-5">
          ...
          </svg>
        </a>
      </div>
    </div>
  </DialogContent>
</Dialog>`,
      },
    },
  },
}
