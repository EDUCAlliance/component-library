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

This package is published to GitHub Packages. Follow these steps to install it in your project:

### 1. Generate a GitHub Personal Access Token

You need a GitHub Personal Access Token (PAT) with `read:packages` permission to install packages from GitHub Packages.

1. Go to [GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)](https://github.com/settings/tokens)
2. Click **Generate new token** → **Generate new token (classic)**
3. Give your token a descriptive name (e.g., "NPM Package Access")
4. Select the following scope:
   - ✅ `read:packages` - Download packages from GitHub Package Registry
5. Click **Generate token**
6. **Important:** Copy the token immediately - you won't be able to see it again!

### 2. Configure NPM Registry

Create or update the `.npmrc` file in your project root (or in your home directory `~/.npmrc` for global configuration):

```
@educalliance:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
always-auth=true
```

### 3. Set the GITHUB_TOKEN Environment Variable

Add your GitHub token to your environment:

**On macOS/Linux:**

```sh
# Add to ~/.zshrc or ~/.bashrc for persistence
export GITHUB_TOKEN=your_github_token_here
```

**On Windows (PowerShell):**

```powershell
# Add to your PowerShell profile for persistence
$env:GITHUB_TOKEN="your_github_token_here"
```

**On Windows (Command Prompt):**

```cmd
set GITHUB_TOKEN=your_github_token_here
```

**Alternative: Direct Token in .npmrc (Less Secure)**

If you prefer not to use environment variables, you can replace `${GITHUB_TOKEN}` directly in `.npmrc`:

```
@educalliance:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=your_github_token_here
always-auth=true
```

⚠️ **Warning:** If you use this method, make sure to add `.npmrc` to your `.gitignore` to avoid committing your token!

### 4. Install the Package

Once configured, install the package using your preferred package manager:

```sh
# Using bun (recommended)
bun add @educalliance/component-library

# Using npm
npm install @educalliance/component-library

# Using yarn
yarn add @educalliance/component-library

# Using pnpm
pnpm add @educalliance/component-library
```

## Usage

### Import Styles

Import the component styles in your main entry file:

```js
// main.ts or main.js
import "@educalliance/component-library/dist/style.css"
```

### Using Components

You can import components individually for better tree-shaking:

```vue
<script setup lang="ts">
import { PrimaryButton, Card, CardHeader, CardBody } from "@educalliance/component-library" // use the names of the components from Storybook
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
import * as EducComponents from "@educalliance/component-library"
```

### Tailwind CSS

This library uses Tailwind CSS for styling. You can customize every component's styles with providing a class name to the component.

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
import type { ButtonProps } from "@educalliance/component-library"
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Support

For issues and feature requests, please use the [GitHub issue tracker](https://github.com/educalliance/component-library/issues).
