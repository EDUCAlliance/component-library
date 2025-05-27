# Component Library Structure Proposal

## Recommended Folder Structure

```
src/components/
├── atoms/
│   ├── buttons/
│   │   ├── PrimaryButton/
│   │   ├── SecondaryButton/
│   │   ├── GhostButton/
│   │   ├── SoftButton/
│   │   └── LinkButton/
│   ├── forms/
│   │   ├── Input/
│   │   ├── Select/
│   │   ├── Checkbox/
│   │   ├── Radio/
│   │   ├── Slider/
│   │   ├── Toggle/
│   │   └── FileUpload/
│   ├── feedback/
│   │   ├── Badge/
│   │   ├── NotificationBar/
│   │   ├── Loading/
│   │   ├── Spinner/
│   │   └── Sonner/
│   ├── navigation/
│   │   ├── Breadcrumbs/
│   │   ├── Tabs/
│   │   └── Link/
│   ├── data-display/
│   │   ├── Table/
│   │   ├── Avatar/
│   │   ├── AvatarGroup/
│   │   ├── Card/
│   │   └── Icon/
│   ├── overlays/
│   │   ├── Dialog/
│   │   ├── Tooltip/
│   │   └── HoverCard/
│   ├── date-time/
│   │   ├── Calendar/
│   │   └── RangeCalendar/
│   └── content/
│       ├── Text/
│       ├── Image/
│       ├── Logos/
│       └── Divider/
├── molecules/
│   ├── forms/
│   │   ├── SearchField/
│   │   └── FormGroup/
│   ├── navigation/
│   │   ├── ButtonGroup/
│   │   ├── Pagination/
│   │   └── Menu/
│   ├── cards/
│   │   ├── ItemCard/
│   │   ├── ContactCard/
│   │   └── ProductCard/
│   └── actions/
│       └── Actions/
├── organisms/
│   ├── navigation/
│   │   ├── Header/
│   │   ├── Sidebar/
│   │   └── Footer/
│   ├── content/
│   │   ├── Hero/
│   │   ├── Features/
│   │   └── CTA/
│   ├── data/
│   │   ├── RichTable/
│   │   └── DescriptionList/
│   └── layout/
│       └── PageLayout/
├── templates/
│   ├── PageTemplate/
│   ├── DashboardTemplate/
│   └── AuthTemplate/
└── pages/
    ├── HomePage/
    ├── LoginPage/
    └── DashboardPage/
```

## Naming Conventions

### Component Names

- Use PascalCase: `PrimaryButton`, `DescriptionList`
- Be descriptive but concise
- Include component type for clarity: `Button`, `Card`, `Table`

### Story Titles

- Format: `Level/Category/ComponentName`
- Examples:
  - `Atoms/Buttons/Primary`
  - `Molecules/Forms/SearchField`
  - `Organisms/Navigation/Header`

### File Structure

Each component should have:

```
ComponentName/
├── ComponentName.vue
├── ComponentName.stories.ts
├── ComponentName.test.ts
├── types.ts (if needed)
└── index.ts
```

## Missing Components to Consider

### Atoms

- Text/Typography variants
- Icon component
- Divider/Separator
- Link component
- Spinner (loading state)
- Tag (different from Badge)

### Molecules

- SearchField (Input + Button)
- Pagination
- Menu/Dropdown
- FormGroup
- ModalHeader/ModalFooter

### Organisms

- Header/Navigation
- Sidebar
- DataGrid (advanced table)
- FormContainer
- PageHeader

### Templates

- Basic page layouts
- Dashboard layouts
- Authentication layouts

## Implementation Strategy

1. **Phase 1**: Fix naming inconsistencies

   - Standardize story titles
   - Fix component naming

2. **Phase 2**: Reorganize existing components

   - Move components to better categories
   - Group related components

3. **Phase 3**: Add missing components

   - Identify most needed components
   - Implement systematically

4. **Phase 4**: Add templates level
   - Create reusable page layouts
   - Document layout patterns
