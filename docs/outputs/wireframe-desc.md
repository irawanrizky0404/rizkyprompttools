# Wireframe Description: Task Management Dashboard

**Screen:** Workspace Home (after login)
**User:** Project Manager
**Primary Action:** View team workload and recent activity

---

## Layout

```
┌─────────────────────────────────────────────────────────┐
│ [Logo] TaskFlow Pro    [Search]  [Notifications]  [👤]  │  ← Top Nav
├────────────────────────┬────────────────────────────────┤
│                        │                                │
│  📋 Workspaces         │  Good morning, Alex!          │
│  ───────────────────── │  You have 8 tasks due today   │
│  ► Design Team ◄       │                                │
│  ► Engineering         │  ┌───────┬───────┬───────┐    │
│  ► Marketing           │  │ To Do │ In    │ Done  │    │
│  ► Executive           │  │  12   │ Progr.│  24   │    │
│                        │  │       │   8   │       │    │
│  ⚡ Quick Actions      │  └───────┴───────┴───────┘    │
│  [+ New Board]         │                                │
│  [Invite Members]      │  Recent Activity               │
│                        │  ┌────────────────────────┐    │
│  📌 Pinned Boards      │  │ Sarah completed "API"  │    │
│  • Sprint 25           │  │ Mark added comment to  │    │
│  • Bug Tracker         │  │ "Design review"        │    │
│  • Brainstorming       │  │ You moved "Homepage"   │    │
│                        │  │ to "In Progress"       │    │
│  💡 Shortcuts          │  └────────────────────────┘    │
│  Ctrl+K → Command pal  │                                │
│  Ctrl+N → New task     │  Upcoming Deadlines            │
│                        │  ┌────────────────────────┐    │
│                        │  │ 🔴 Launch v2.0 - TOMOR │    │
│                        │  │ 🟡 User testing - Fri  │    │
│                        │  │ 🟢 Logo assets - Next  │    │
│                        │  └────────────────────────┘    │
├────────────────────────┴────────────────────────────────┤
│  Team online: Sarah ● Mark ● Priya ○ David ○           │  ← Footer bar
└─────────────────────────────────────────────────────────┘
```

## Component Breakdown

### 1. Top Navigation (fixed, 64px)
- **Logo + App name** — left aligned, links to dashboard
- **Search bar** — 320px, autocomplete with recent searches
- **Notification bell** — badge count, dropdown with last 5 alerts
- **Avatar** — dropdown: Profile, Settings, Billing, Sign out

### 2. Left Sidebar (280px, collapsible)
| Section | Description |
|---------|-------------|
| Workspaces | Active workspace highlighted. Click to switch. |
| Quick Actions | Contextual based on current workspace. |
| Pinned Boards | Up to 5 pinned boards with color dots. |
| Shortcuts | Keyboard shortcuts list (dynamic based on page). |

### 3. Main Content Area (flex: 1)
| Zone | Component | Description |
|------|-----------|-------------|
| Hero | Greeting + task count | Dynamic based on time of day. "8 tasks due today" links to filtered view. |
| Overview | Status cards | 3 cards showing counts (To Do / In Progress / Done). Clicking filters the board list below. |
| Activity feed | Scrollable list | 5 most recent actions in the workspace. Real-time updates via WebSocket. |
| Deadlines | Priority list | Tasks due within next 7 days. Red = today, Yellow = this week, Green = next week. |

### 4. Footer Bar (40px)
- Green/gray dots for team online status
- Count: "4 of 12 team members online"
- Hover reveals names

## States

### Loading
- Skeleton placeholders: 3 card rectangles + 4 row lines
- Shimmer animation with 1.5s cycle

### Empty (new workspace)
```
Welcome to your workspace! 🎉
It looks a bit empty in here.
[Create your first board]  or  [Import from Trello]
```

### Error
```
┌─ ⚠️ Couldn't load workspace ──────────────────────┐
│  We're having trouble connecting.                  │
│  [Retry]  [Go to Dashboard]                        │
└────────────────────────────────────────────────────┘
```

## Responsive Breakpoints
| Width | Behavior |
|-------|----------|
| > 1024px | Full layout as described |
| 768–1023px | Sidebar collapses to icon-only, deadlines moves below activity |
| < 768px | Sidebar hidden (hamburger menu), cards stack vertically |
