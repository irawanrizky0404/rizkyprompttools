# UI/UX Component: DataTable (Sortable, Filterable, Paginated)

## Component Interface
```tsx
<DataTable
  columns={ColumnDef[]}
  data={T[]}
  pageSize={25}
  sortable={true}
  filterable={true}
  rowSelection="multi"
  onRowClick={(row) => void}
/>
```

## States

### Loading
```
[ Skeleton Table ]
┌────────┬────────┬────────┬────────┐
│ ██████ │ ██████ │ ██████ │ ██████ │  ← 6 shimmer rows
└────────┴────────┴────────┴────────┘
```

### Empty
```
┌──────────────────────────────────┐
│  📋  No results found            │
│  Try adjusting your filters or   │
│  clearing the search term.       │
│                                  │
│  [ Clear Filters ]               │
└──────────────────────────────────┘
```

### Populated
```
┌───┬───────────────┬──────────┬──────────────┐
│ ☐ │ Name          │ Status   │ Last Updated │
├───┼───────────────┼──────────┼──────────────┤
│ ☐ │ Project Alpha │ Active   │ 2025-03-12   │
│ ☐ │ Project Beta  │ Paused   │ 2025-03-10   │
│ ☑ │ Project Gamma │ Archived │ 2025-02-28   │
│ ☐ │ Project Delta │ Active   │ 2025-03-14   │
└───┴───────────────┴──────────┴──────────────┘
 Showing 1–25 of 142 results   < 1  2  3  4  5 … 6 >
```

### Error
```
┌──────────────────────────────────┐
│  ⚠️  Failed to load data         │
│  Network request timed out.      │
│                                  │
│  [ Retry ]                       │
└──────────────────────────────────┘
```

## Accessibility
- Role="table" + aria-label on container
- sort buttons announce aria-sort="ascending"|"descending"
- Keyboard: Tab to cell, Enter to activate, Shift+Arrow for multi-select
- Focus trap on pagination when modal open

## Responsive Behavior
| Breakpoint | Layout |
|------------|--------|
| ≥ 1024px | Full table with all columns |
| 768–1023px | Hide 2 least-important columns, horizontal scroll |
| < 768px | Card-list layout (label: value per row) |
