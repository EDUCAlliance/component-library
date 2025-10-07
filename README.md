# EDUC Component Library

A comprehensive Vue 3 component library built with TypeScript, Tailwind CSS, and following atomic design principles. This library provides a complete set of reusable UI components for EDUC applications.

## Features

- 🎨 **Modern Design System** - Built with Tailwind CSS v4
- 🧩 **Atomic Design** - Organized into atoms, molecules, and organisms
- 📦 **Tree-shakable** - Import only what you need
- 🔧 **TypeScript** - Full type safety and IntelliSense support
- ♿ **Accessible** - Built with accessibility in mind using Headless UI and Reka UI
- 🎭 **Storybook** - Interactive component documentation
- 🧪 **Tested** - Comprehensive test coverage with Vitest

## Installation

```sh
# Using npm
npm install @educ/component-library

# Using bun
bun add @educ/component-library

# Using yarn
yarn add @educ/component-library

# Using pnpm
pnpm add @educ/component-library
```

### Peer Dependencies

Make sure you have Vue 3 installed:

```sh
bun add vue@^3.5.0
```

## Usage

### Import Styles

Import the component styles in your main entry file:

```js
// main.ts or main.js
import "@educ/component-library/dist/style.css"
```

### Using Components

You can import components individually for better tree-shaking:

```vue
<script setup lang="ts">
import { PrimaryButton, Card, CardHeader, CardBody } from "@educ/component-library"
</script>

<template>
  <Card>
    <CardHeader>
      <h2>Welcome to EDUC</h2>
    </CardHeader>
    <CardBody>
      <p>This is a card component from the EDUC library.</p>
      <PrimaryButton @click="handleClick"> Click Me </PrimaryButton>
    </CardBody>
  </Card>
</template>
```

Or import everything (not recommended for production):

```js
import * as EducComponents from "@educ/component-library"
```

### Tailwind CSS Setup

This library uses Tailwind CSS. If your project also uses Tailwind, add the library path to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@educ/component-library/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Available Components

### Atoms

- **Buttons**: PrimaryButton, SecondaryButton, GhostButton, LinkButton, SoftButton
- **Forms**: Input, Checkbox, Radio, Select, Slider, FileUpload, Textarea, TagsInput, Toggle
- **Feedback**: Badge, Loading, NotificationBar, Sonner (Toast notifications)
- **Navigation**: Breadcrumbs, Tabs
- **Data Display**: Avatar, Card, Table, ItemCard
- **Date/Time**: Calendar, RangeCalendar
- **Overlays**: Dialog, Tooltip, HoverCard
- **Content**: BackgroundImage, ContactCard, EDUC Logos
- **Others**: Accordion, Alert, DropdownMenu

### Molecules

- **Navigation**: ButtonGroup
- **Cards**: Various card compositions

### Organisms

- **Content**: Hero sections, CTA sections, Features
- **Data**: DescriptionList, RichTable
- **Navigation**: Footer components

## Development

### Setup

```sh
bun install
```

### Run Storybook

```sh
bun storybook
```

### Build Library

```sh
bun run build:lib
```

### Run Tests

```sh
bun test:unit
```

### Lint

```sh
bun lint
```

## Publishing

Before publishing to npm:

1. Update the version in `package.json`
2. Update the repository URL, author, and homepage in `package.json`
3. Build the library:

```sh
bun run build:lib
```

4. Publish to npm:

```sh
npm publish --access public
```

Or if using a private registry:

```sh
npm publish
```

## TypeScript Support

This library is written in TypeScript and includes type definitions. TypeScript will automatically pick up the types when you import components.

```typescript
import type { ButtonProps } from "@educ/component-library"
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a pull request.

## Support

For issues and feature requests, please use the [GitHub issue tracker](https://github.com/yourusername/educ-component-library/issues).
