# Component Library Migration Plan

## 📋 Overview

This plan restructures the component library to follow better atomic design principles without deleting any existing components. It fixes naming inconsistencies, organizes components logically, and updates all imports.

## 🎯 Goals

- ✅ Preserve all existing components
- ✅ Fix Storybook title inconsistencies
- ✅ Organize components by function/category
- ✅ Update all import paths
- ✅ Add barrel exports for cleaner imports
- ✅ Maintain atomic design hierarchy

## 📊 Current Analysis

- **Total files**: ~200 Vue and Story files
- **Current structure**: Mixed organization with inconsistent naming
- **Import patterns**: Direct component imports using `@/components/...`

## 🚀 Migration Strategy

### Phase 1: Storybook Title Standardization (Quick Wins)

**Estimated time**: 2-3 hours

Fix inconsistent story titles to follow `Level/Category/Component` format:

#### Files to Update:

```bash
# Fix these title inconsistencies:
src/components/atoms/FileUpload.stories.ts
  FROM: title: "atoms/FileUpload"
  TO:   title: "Atoms/Forms/FileUpload"

src/components/atoms/others/actions/Actions.stories.ts
  FROM: title: "Elements/Actions"
  TO:   title: "Atoms/Actions/Actions"

# Standardize spacing in titles:
src/components/organisms/description-list/DescriptionList.stories.ts
  FROM: title: "Organisms/Description List"
  TO:   title: "Organisms/Data/DescriptionList"

src/components/organisms/rich-table/RichTable.stories.ts
  FROM: title: "Organisms/Rich Table"
  TO:   title: "Organisms/Data/RichTable"
```

### Phase 2: Directory Restructuring (No File Deletion)

**Estimated time**: 4-6 hours

#### 2.1 Create New Directory Structure

```bash
mkdir -p src/components/atoms/buttons
mkdir -p src/components/atoms/forms
mkdir -p src/components/atoms/feedback
mkdir -p src/components/atoms/navigation
mkdir -p src/components/atoms/data-display
mkdir -p src/components/atoms/overlays
mkdir -p src/components/atoms/date-time
mkdir -p src/components/atoms/content
mkdir -p src/components/atoms/actions

mkdir -p src/components/molecules/forms
mkdir -p src/components/molecules/navigation
mkdir -p src/components/molecules/cards

mkdir -p src/components/organisms/navigation
mkdir -p src/components/organisms/content
mkdir -p src/components/organisms/data
```

#### 2.2 Move Components (Preserve all files)

**Atoms - Buttons (MOVE):**

```bash
# Already in correct location - just need to update stories
src/components/atoms/buttons/PrimaryButton.vue ✅
src/components/atoms/buttons/SecondaryButton.vue ✅
src/components/atoms/buttons/GhostButton.vue ✅
src/components/atoms/buttons/SoftButton.vue ✅
src/components/atoms/buttons/LinkButton.vue ✅
```

**Atoms - Forms (MOVE):**

```bash
# Move FileUpload to forms category
MOVE: src/components/atoms/FileUpload.vue
TO:   src/components/atoms/forms/FileUpload.vue

MOVE: src/components/atoms/FileUpload.stories.ts
TO:   src/components/atoms/forms/FileUpload.stories.ts

# Others already correctly placed:
src/components/atoms/forms/input/ ✅
src/components/atoms/forms/select/ ✅
src/components/atoms/forms/Checkbox.* ✅
src/components/atoms/forms/Radio.* ✅
src/components/atoms/forms/Slider.* ✅
```

**Atoms - Feedback (REORGANIZE):**

```bash
MOVE: src/components/atoms/others/Badge.*
TO:   src/components/atoms/feedback/Badge.*

MOVE: src/components/atoms/others/NotificationBar.*
TO:   src/components/atoms/feedback/NotificationBar.*

MOVE: src/components/atoms/others/Loading.*
TO:   src/components/atoms/feedback/Loading.*

MOVE: src/components/atoms/others/sonner/
TO:   src/components/atoms/feedback/sonner/
```

**Atoms - Data Display (REORGANIZE):**

```bash
MOVE: src/components/atoms/Table.*
TO:   src/components/atoms/data-display/Table.*

MOVE: src/components/atoms/card/
TO:   src/components/atoms/data-display/card/

MOVE: src/components/atoms/others/avatar/
TO:   src/components/atoms/data-display/avatar/

MOVE: src/components/atoms/ItemCard.*
TO:   src/components/atoms/data-display/ItemCard.*
```

**Atoms - Navigation (REORGANIZE):**

```bash
MOVE: src/components/atoms/others/breadcrumbs/
TO:   src/components/atoms/navigation/breadcrumbs/

MOVE: src/components/atoms/others/tabs/
TO:   src/components/atoms/navigation/tabs/
```

**Atoms - Overlays (REORGANIZE):**

```bash
MOVE: src/components/atoms/others/dialog/
TO:   src/components/atoms/overlays/dialog/

MOVE: src/components/atoms/others/tooltip/
TO:   src/components/atoms/overlays/tooltip/

MOVE: src/components/atoms/others/hover-card/
TO:   src/components/atoms/overlays/hover-card/
```

**Atoms - Date Time (REORGANIZE):**

```bash
MOVE: src/components/atoms/others/calendar/
TO:   src/components/atoms/date-time/calendar/

MOVE: src/components/atoms/others/range-calendar/
TO:   src/components/atoms/date-time/range-calendar/
```

**Atoms - Content (REORGANIZE):**

```bash
MOVE: src/components/atoms/logos/
TO:   src/components/atoms/content/logos/

MOVE: src/components/atoms/BackgroundImage.*
TO:   src/components/atoms/content/BackgroundImage.*

MOVE: src/components/atoms/others/contact-card/
TO:   src/components/atoms/content/contact-card/
```

**Atoms - Actions (REORGANIZE):**

```bash
MOVE: src/components/atoms/others/actions/
TO:   src/components/atoms/actions/actions/
```

**Atoms - Switches (KEEP LOCATION, UPDATE STORIES):**

```bash
RENAME STORY TITLE: src/components/atoms/switches/Toggle.stories.ts
FROM: "Atoms/Toggle"
TO:   "Atoms/Forms/Toggle"
```

**Molecules (REORGANIZE):**

```bash
MOVE: src/components/molecules/ButtonGroup.*
TO:   src/components/molecules/navigation/ButtonGroup.*

MOVE: src/components/molecules/navigations/
TO:   src/components/molecules/navigation/

# Move card-related molecules
MOVE: src/components/molecules/cards/
TO:   src/components/molecules/cards/ (already exists)
```

**Organisms (REORGANIZE):**

```bash
MOVE: src/components/organisms/footer/
TO:   src/components/organisms/navigation/footer/

MOVE: src/components/organisms/hero/
TO:   src/components/organisms/content/hero/

MOVE: src/components/organisms/features/
TO:   src/components/organisms/content/features/

MOVE: src/components/organisms/cta/
TO:   src/components/organisms/content/cta/

MOVE: src/components/organisms/rich-table/
TO:   src/components/organisms/data/rich-table/

MOVE: src/components/organisms/description-list/
TO:   src/components/organisms/data/description-list/
```

### Phase 3: Update Story Titles

**Estimated time**: 2-3 hours

#### Updated Story Titles Map:

```typescript
// Atoms
"Atoms/Buttons/Primary" → PrimaryButton
"Atoms/Buttons/Secondary" → SecondaryButton
"Atoms/Buttons/Ghost" → GhostButton
"Atoms/Buttons/Soft" → SoftButton
"Atoms/Buttons/Link" → LinkButton

"Atoms/Forms/Input" → Input
"Atoms/Forms/Select" → Select
"Atoms/Forms/Checkbox" → Checkbox
"Atoms/Forms/Radio" → Radio
"Atoms/Forms/Slider" → Slider
"Atoms/Forms/Toggle" → Toggle
"Atoms/Forms/FileUpload" → FileUpload

"Atoms/Feedback/Badge" → Badge
"Atoms/Feedback/NotificationBar" → NotificationBar
"Atoms/Feedback/Loading" → Loading
"Atoms/Feedback/Sonner" → Sonner

"Atoms/DataDisplay/Table" → Table
"Atoms/DataDisplay/Card" → Card
"Atoms/DataDisplay/Avatar" → Avatar
"Atoms/DataDisplay/AvatarGroup" → AvatarGroup
"Atoms/DataDisplay/ItemCard" → ItemCard

"Atoms/Navigation/Breadcrumbs" → Breadcrumbs
"Atoms/Navigation/Tabs" → Tabs

"Atoms/Overlays/Dialog" → Dialog
"Atoms/Overlays/Tooltip" → Tooltip
"Atoms/Overlays/HoverCard" → HoverCard

"Atoms/DateTime/Calendar" → Calendar
"Atoms/DateTime/RangeCalendar" → RangeCalendar

"Atoms/Content/Logos" → Logos
"Atoms/Content/ContactCard" → ContactCard

"Atoms/Actions/Actions" → Actions

// Molecules
"Molecules/Navigation/ButtonGroup" → ButtonGroup

// Organisms
"Organisms/Navigation/Footer" → Footer
"Organisms/Content/Hero" → Hero
"Organisms/Content/Features" → Features
"Organisms/Content/CTA" → CTA
"Organisms/Data/RichTable" → RichTable
"Organisms/Data/DescriptionList" → DescriptionList
```

### Phase 4: Create Barrel Exports

**Estimated time**: 2-3 hours

#### Create index.ts files for clean imports:

**src/components/atoms/buttons/index.ts:**

```typescript
export { default as PrimaryButton } from "./PrimaryButton.vue"
export { default as SecondaryButton } from "./SecondaryButton.vue"
export { default as GhostButton } from "./GhostButton.vue"
export { default as SoftButton } from "./SoftButton.vue"
export { default as LinkButton } from "./LinkButton.vue"
```

**src/components/atoms/forms/index.ts:**

```typescript
export { default as Input } from "./input/Input.vue"
export { default as Select } from "./select/Select.vue"
export { default as Checkbox } from "./Checkbox.vue"
export { default as Radio } from "./Radio.vue"
export { default as Slider } from "./Slider.vue"
export { default as FileUpload } from "./FileUpload.vue"
```

**Continue for all categories...**

**src/components/index.ts (Main barrel):**

```typescript
// Atoms
export * from "./atoms/buttons"
export * from "./atoms/forms"
export * from "./atoms/feedback"
export * from "./atoms/navigation"
export * from "./atoms/data-display"
export * from "./atoms/overlays"
export * from "./atoms/date-time"
export * from "./atoms/content"
export * from "./atoms/actions"

// Molecules
export * from "./molecules/navigation"
export * from "./molecules/cards"

// Organisms
export * from "./organisms/navigation"
export * from "./organisms/content"
export * from "./organisms/data"
```

### Phase 5: Update All Import Statements

**Estimated time**: 3-4 hours

#### Find and Replace Patterns:

**Current imports to update:**

```typescript
// OLD imports (from grep results):
import Badge from "@/components/atoms/others/Badge.vue"
import BackgroundImage from "@/components/atoms/BackgroundImage.vue"
import GhostButton from "@/components/atoms/buttons/GhostButton.vue"
import PrimaryButton from "@/components/atoms/buttons/PrimaryButton.vue"
import SecondaryButton from "@/components/atoms/buttons/SecondaryButton.vue"
import SoftButton from "@/components/atoms/buttons/SoftButton.vue"
import ButtonGroup from "@/components/molecules/ButtonGroup.vue"

// NEW imports (after restructure):
import Badge from "@/components/atoms/feedback/Badge.vue"
import BackgroundImage from "@/components/atoms/content/BackgroundImage.vue"
import GhostButton from "@/components/atoms/buttons/GhostButton.vue" // No change
import PrimaryButton from "@/components/atoms/buttons/PrimaryButton.vue" // No change
import SecondaryButton from "@/components/atoms/buttons/SecondaryButton.vue" // No change
import SoftButton from "@/components/atoms/buttons/SoftButton.vue" // No change
import ButtonGroup from "@/components/molecules/navigation/ButtonGroup.vue"

// BETTER: Use barrel imports
import { Badge } from "@/components/atoms/feedback"
import { BackgroundImage } from "@/components/atoms/content"
import { GhostButton, PrimaryButton, SecondaryButton, SoftButton } from "@/components/atoms/buttons"
import { ButtonGroup } from "@/components/molecules/navigation"
```

#### Import Patterns Found:

**1. Absolute imports with @/components:**

```typescript
import Badge from "@/components/atoms/others/Badge.vue"
import BackgroundImage from "@/components/atoms/BackgroundImage.vue"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/atoms/others/avatar"
```

**2. Relative imports with ../ (parent directories):**

```typescript
import GhostButton from "../buttons/GhostButton.vue"
import PrimaryButton from "../../buttons/PrimaryButton.vue"
import Avatar from "../avatar/Avatar.vue"
import { AvatarImage, AvatarFallback } from "../avatar"
import SecondaryButton from "../atoms/buttons/SecondaryButton.vue"
```

**3. Relative imports with ./ (same directory):**

```typescript
import ButtonGroup from "./ButtonGroup.vue"
import Hero1 from "./Hero1.vue"
import NavigationLink from "./NavigationLink.vue"
import type { RichTableHeaderProps } from "./types"
```

**4. Relative imports from root components:**

```typescript
// From Card1.vue, Card2.vue, etc.
import { Card, CardHeader, CardBody, CardFooter } from "./atoms/card"
import BackgroundImage from "./atoms/BackgroundImage.vue"
import Badge from "./atoms/others/Badge.vue"
import { Avatar, AvatarImage, AvatarFallback } from "./atoms/others/avatar"

// From HelloWorld.vue (massive file with many imports)
import SecondaryButton from "./atoms/buttons/SecondaryButton.vue"
import ButtonGroup from "./molecules/ButtonGroup.vue"
import { TooltipTrigger, TooltipContent, TooltipProvider, Tooltip } from "./atoms/overlay/tooltip"
import Badge from "./atoms/data-display/Badge.vue"
```

#### Files that need import updates:

**Major files with many imports:**

```bash
src/components/HelloWorld.vue              # 50+ imports
src/components/Card1.vue                   # 6 imports
src/components/Card2.vue                   # 6 imports
src/components/Card3.vue                   # 5 imports
src/components/Card4.vue                   # 6 imports
src/components/PodcastCard.vue             # 5 imports
```

**Organism files with @/components imports:**

```bash
src/components/organisms/description-list/DescriptionList1.vue
src/components/organisms/description-list/DescriptionList2.vue
src/components/organisms/description-list/DescriptionList3.vue
src/components/organisms/hero/Hero1.vue
src/components/organisms/hero/Hero2.vue
src/components/organisms/hero/Hero3.vue
src/components/organisms/cta/Cta1.vue
src/components/organisms/cta/Cta2.vue
src/components/organisms/cta/Cta3.vue
src/components/organisms/rich-table/RichTableActions.vue
src/components/organisms/rich-table/RichTable.stories.ts
```

**Molecule files with relative imports:**

```bash
src/components/molecules/navigations/NavigationLink.vue
src/components/molecules/navigations/SimpleNavigation.vue
src/components/molecules/ButtonGroup.stories.ts
```

**Atom files with relative imports:**

```bash
src/components/atoms/forms/select/Select.stories.ts
src/components/atoms/others/dialog/Dialog.stories.ts
src/components/atoms/others/NotificationBar.stories.ts
src/components/atoms/others/hover-card/HoverCard.stories.ts
src/components/atoms/others/sonner/Sonner.stories.ts
src/components/atoms/others/contact-card/ContactCard.vue
src/components/atoms/others/contact-card/ContactCard.stories.ts
src/components/atoms/others/tooltip/Tooltip.stories.ts
src/components/atoms/card/Card.stories.ts
```

## 🛠️ Implementation Commands

### Phase 1: Story Title Updates

```bash
# Use sed or manual updates for story titles
find src/components -name "*.stories.ts" -exec sed -i '' 's/title: "atoms\/FileUpload"/title: "Atoms\/Forms\/FileUpload"/' {} \;
find src/components -name "*.stories.ts" -exec sed -i '' 's/title: "Elements\/Actions"/title: "Atoms\/Actions\/Actions"/' {} \;
# ... continue for all inconsistencies
```

### Phase 2: Directory Creation and File Moves

```bash
# Create new directory structure
mkdir -p src/components/atoms/{feedback,navigation,data-display,overlays,date-time,content,actions}
mkdir -p src/components/molecules/{navigation,cards}
mkdir -p src/components/organisms/{navigation,content,data}

# Move files (example commands)
mv src/components/atoms/FileUpload.* src/components/atoms/forms/
mv src/components/atoms/others/Badge.* src/components/atoms/feedback/
mv src/components/molecules/ButtonGroup.* src/components/molecules/navigation/
# ... continue for all moves
```

### Phase 3: Create Barrel Exports

```bash
# Create index.ts files in each category folder
# (Manual creation of each index.ts file)
```

### Phase 4: Update All Import Paths

```bash
# 1. Update @/components absolute imports
find src/components -name "*.vue" -o -name "*.ts" | xargs sed -i '' 's/@\/components\/atoms\/others\/Badge/@\/components\/atoms\/feedback\/Badge/g'
find src/components -name "*.vue" -o -name "*.ts" | xargs sed -i '' 's/@\/components\/atoms\/BackgroundImage/@\/components\/atoms\/content\/BackgroundImage/g'
find src/components -name "*.vue" -o -name "*.ts" | xargs sed -i '' 's/@\/components\/atoms\/others\/avatar/@\/components\/atoms\/data-display\/avatar/g'
find src/components -name "*.vue" -o -name "*.ts" | xargs sed -i '' 's/@\/components\/molecules\/ButtonGroup/@\/components\/molecules\/navigation\/ButtonGroup/g'
find src/components -name "*.vue" -o -name "*.ts" | xargs sed -i '' 's/@\/components\/atoms\/ItemCard/@\/components\/atoms\/data-display\/ItemCard/g'
find src/components -name "*.vue" -o -name "*.ts" | xargs sed -i '' 's/@\/components\/atoms\/Table/@\/components\/atoms\/data-display\/Table/g'
find src/components -name "*.vue" -o -name "*.ts" | xargs sed -i '' 's/@\/components\/atoms\/card/@\/components\/atoms\/data-display\/card/g'
find src/components -name "*.vue" -o -name "*.ts" | xargs sed -i '' 's/@\/components\/atoms\/logos/@\/components\/atoms\/content\/logos/g'

# 2. Update relative imports in Card*.vue files (from src/components/ root)
sed -i '' 's/\.\/atoms\/others\/Badge/\.\/atoms\/feedback\/Badge/g' src/components/Card*.vue
sed -i '' 's/\.\/atoms\/BackgroundImage/\.\/atoms\/content\/BackgroundImage/g' src/components/Card*.vue
sed -i '' 's/\.\/atoms\/others\/avatar/\.\/atoms\/data-display\/avatar/g' src/components/Card*.vue
sed -i '' 's/\.\/atoms\/card/\.\/atoms\/data-display\/card/g' src/components/Card*.vue
sed -i '' 's/\.\/molecules\/ButtonGroup/\.\/molecules\/navigation\/ButtonGroup/g' src/components/Card*.vue

# 3. Update relative imports in PodcastCard.vue
sed -i '' 's/\.\/atoms\/others\/Badge/\.\/atoms\/feedback\/Badge/g' src/components/PodcastCard.vue
sed -i '' 's/\.\/atoms\/BackgroundImage/\.\/atoms\/content\/BackgroundImage/g' src/components/PodcastCard.vue
sed -i '' 's/\.\/atoms\/card/\.\/atoms\/data-display\/card/g' src/components/PodcastCard.vue

# 4. Update HelloWorld.vue (massive file)
sed -i '' 's/\.\/atoms\/others\/Badge/\.\/atoms\/feedback\/Badge/g' src/components/HelloWorld.vue
sed -i '' 's/\.\/atoms\/data-display\/Badge/\.\/atoms\/feedback\/Badge/g' src/components/HelloWorld.vue
sed -i '' 's/\.\/atoms\/logos/\.\/atoms\/content\/logos/g' src/components/HelloWorld.vue
sed -i '' 's/\.\/atoms\/others\/range-calendar/\.\/atoms\/date-time\/range-calendar/g' src/components/HelloWorld.vue
sed -i '' 's/\.\/atoms\/others\/calendar/\.\/atoms\/date-time\/calendar/g' src/components/HelloWorld.vue
sed -i '' 's/\.\/atoms\/media\/contact-card/\.\/atoms\/content\/contact-card/g' src/components/HelloWorld.vue
sed -i '' 's/\.\/atoms\/media\/avatar/\.\/atoms\/data-display\/avatar/g' src/components/HelloWorld.vue
sed -i '' 's/\.\/atoms\/feedback\/actions/\.\/atoms\/actions\/actions/g' src/components/HelloWorld.vue
sed -i '' 's/\.\/molecules\/ButtonGroup/\.\/molecules\/navigation\/ButtonGroup/g' src/components/HelloWorld.vue

# 5. Update relative imports with ../
find src/components -name "*.vue" -o -name "*.ts" | xargs sed -i '' 's/\.\.\/others\/Badge/\.\.\/feedback\/Badge/g'
find src/components -name "*.vue" -o -name "*.ts" | xargs sed -i '' 's/\.\.\/others\/avatar/\.\.\/data-display\/avatar/g'
find src/components -name "*.vue" -o -name "*.ts" | xargs sed -i '' 's/\.\.\/BackgroundImage/\.\.\/content\/BackgroundImage/g'

# 6. Fix relative paths after directory moves (manual fixes required)
# After moving files, some relative imports will need manual adjustment
```

## ✅ Validation Checklist

### After Each Phase:

- [ ] All components still render correctly
- [ ] Storybook loads without errors
- [ ] Import paths resolve correctly
- [ ] No broken dependencies
- [ ] All stories show correct titles

### Final Validation:

- [ ] Run `npm run storybook` - all stories load
- [ ] Run `npm run build` - no build errors
- [ ] Run `npm run test` - all tests pass
- [ ] Verify import paths work with new barrel exports
- [ ] Check that all 33 components are accessible

## 🔄 Rollback Plan

If issues arise:

1. Keep backup of current structure: `cp -r src/components src/components.backup`
2. Git commits after each phase for easy rollback
3. Test thoroughly after each phase before proceeding

## 📈 Benefits After Migration

1. **Cleaner imports**: `import { PrimaryButton, SecondaryButton } from '@/components/atoms/buttons'`
2. **Better organization**: Components grouped by function
3. **Consistent naming**: All stories follow same pattern
4. **Scalability**: Easy to add new components in right place
5. **Developer experience**: Easier to find components
6. **Maintainability**: Clear hierarchy and structure

## ⏱️ Total Estimated Time: 12-16 hours

**Breakdown:**

- Phase 1: 2-3 hours
- Phase 2: 4-6 hours
- Phase 3: 2-3 hours
- Phase 4: 2-3 hours
- Phase 5: 3-4 hours
- Testing & Validation: 1-2 hours
