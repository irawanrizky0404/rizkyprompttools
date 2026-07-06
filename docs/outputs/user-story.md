# Agile User Story Writer Output

**Epic:** Team Collaboration & Notifications

---

## Story 1: Real-Time Board Updates

**ID:** US-101
**Title:** As a team member, I want to see other users' changes appear on the board in real time so I don't work with stale data.

**Acceptance Criteria:**
- When user A moves a card, user B sees the card animate to its new position within 500ms (no page refresh)
- When user A adds a comment, user B sees it appear in the card detail modal within 1 second
- A connection indicator shows green (connected) / yellow (reconnecting) / red (disconnected) in the top nav
- If WebSocket disconnects, the UI shows a non-intrusive banner "Reconnecting..." and re-queues missed events on reconnect
- Optimistic updates: user's own actions render immediately without waiting for server confirmation

**Story Points:** 8
**Priority:** High
**Dependencies:** WebSocket infrastructure (US-099)

---

## Story 2: @Mention Notifications

**ID:** US-102
**Title:** As a team member, I want to receive a notification when someone @mentions me in a comment or task description so I don't miss action items directed at me.

**Acceptance Criteria:**
- Typing `@` in a comment or description field triggers a member autocomplete dropdown (searches by name and email, top 5 results)
- Selecting a member inserts `@DisplayName` as a clickable chip
- Mentioned user receives:
  - In-app notification bell (red badge with count)
  - Email notification (within 5 minutes, with link to the card)
  - Optional push notification (mobile, if enabled)
- Notification includes: "Sarah mentioned you in 'Design homepage' — 'Can you review the mockups?'"
- Clicking notification navigates directly to the card with the comment highlighted
- Mentions in the user's own comments do not generate notifications

**Story Points:** 5
**Priority:** Medium
**Dependencies:** Notification engine (US-098)

---

## Story 3: Granular Notification Preferences

**ID:** US-103
**Title:** As a user, I want to control which events trigger notifications (email, in-app, push) so I'm not overwhelmed by irrelevant alerts.

**Acceptance Criteria:**
- Settings page at `/profile/notifications` with toggle groups:
  | Event | In-App (bell) | Email | Push |
  |-------|--------------|-------|------|
  | @Mentions | ✅ | ✅ | ✅ |
  | Card assigned to me | ✅ | ✅ | ✅ |
  | Comment on my card | ✅ | ✅ | ☐ |
  | Due date approaching | ✅ | ☐ | ☐ |
  | Board changes (any) | ✅ | ☐ | ☐ |
  | Weekly digest | n/a | ☐ | n/a |
- Changes save immediately (no "save" button needed — auto-save on toggle)
- "Quiet hours" setting: 10 PM – 8 AM, push notifications suppressed
- "Pause all notifications" toggle with preset: 1hr, 4hr, 24hr, custom
- Email frequency: real-time / digest (daily) / digest (weekly) / none

**Story Points:** 3
**Priority:** Medium
**Dependencies:** None

---

## Story 4: Slack Notification Integration

**ID:** US-104
**Title:** As a team using Slack, I want to receive TaskFlow notifications in a Slack channel so I can stay updated without switching tools.

**Acceptance Criteria:**
- Connect Slack workspace via OAuth from `/integrations/slack`
- Select which channel(s) receive notifications (default: #taskflow)
- Choose events to forward: card created, moved, completed, @mention, comment
- Slack message format:
  ```
  📋 [Board Name] Card moved
  Sarah moved "Homepage redesign" from "In Progress" → "Review"
  <https://taskflow.app/board/123|View in TaskFlow>
  ```
- Disconnect with single click from integration settings
- Connection health indicator: "Slack connected" / "Reconnect"

**Story Points:** 5
**Priority:** Low
**Dependencies:** Notification engine (US-098), Slack API access

---

## Backlog Summary
| ID | Title | Points | Priority | Status |
|----|-------|--------|----------|--------|
| US-101 | Real-time board updates | 8 | High | In progress |
| US-102 | @Mention notifications | 5 | Medium | Ready |
| US-103 | Notification preferences | 3 | Medium | Ready |
| US-104 | Slack integration | 5 | Low | Backlog |
| US-105 | Email digest (weekly summary) | 3 | Low | Backlog |
| US-106 | In-app notification center | 5 | Medium | Ready |
| US-107 | Push notifications (mobile) | 8 | Low | Backlog |
| | **Total** | **37** | | |
