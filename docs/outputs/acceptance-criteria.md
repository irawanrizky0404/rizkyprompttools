# Acceptance Criteria: User Story — "Bulk Invite Team Members"

**Story:** As a workspace admin, I want to invite up to 50 team members at once so I can onboard my team quickly.

---

## Scenario 1: Successful bulk invite via CSV upload

```
GIVEN I am logged in as a workspace admin
  AND I am on the "Team Settings" page
WHEN I click "Bulk Invite"
  AND I upload a CSV file with columns: email, role, team
  AND the CSV contains 10 valid rows
THEN I see a preview table showing the 10 parsed entries
  AND each row shows: email, role, team, status = "pending"
  AND the "Send Invites" button is enabled
  AND the count reads "10 team members ready to invite"

WHEN I click "Send Invites"
THEN invitations are sent to all 10 email addresses
  AND I see a success toast: "10 invitations sent!"
  AND the UI updates to show 10 new "Invited" badges in the member list
  AND each user receives a "You've been invited to join [workspace]" email
```

## Scenario 2: CSV with invalid rows

```
GIVEN I upload a CSV with 12 rows
  WHERE 2 rows have invalid email formats
  AND 1 row has an empty role field
WHEN the CSV is parsed
THEN the preview table shows:
  | email              | role    | team    | status  | error                    |
  |--------------------|---------|---------|---------|--------------------------|
  | user1@example.com  | member  | design  | valid   |                          |
  | not-an-email       | member  | design  | invalid | "Invalid email format"   |
  | user3@example.com  |         | design  | invalid | "Role is required"       |
  | ...9 valid rows    | ...     | ...     | valid   |                          |
  AND the "Send Invites" button reads "Send 10 invites (2 errors)"
  AND I can click to invite only the valid rows
  AND the invalid rows are highlighted in red with error descriptions
```

## Scenario 3: Duplicate detection

```
GIVEN user3@example.com already exists in the workspace
WHEN I upload a CSV containing user3@example.com
THEN the preview shows user3@example.com as "Already a member"
  AND I cannot select that row for invitation
  AND the error column reads: "Already a member of this workspace"
```

## Scenario 4: Rate limiting

```
GIVEN I have sent 48 invites in the last 60 minutes
WHEN I try to invite 10 more users
THEN only 2 invitations are sent
  AND I see a warning: "You can send 2 more invites. Limit resets in 8 minutes."
  AND the remaining 8 are queued with status "pending: rate limited"
  AND they are auto-sent when the rate limit resets
```

## Scenario 5: Empty file handling

```
GIVEN I upload an empty CSV (headers only, no data rows)
THEN I see an error banner: "CSV file contains no data rows"
  AND the "Send Invites" button remains disabled
```

---

## Validation Rules
| Field | Rule |
|-------|------|
| email | Valid RFC 5322 format. Max 254 chars. |
| role | One of: admin, member, viewer, billing. Default: member. |
| team | Must match existing team name. If blank, added to "General". |
| Max rows | 50 per upload. 100 invites per rolling 60-minute window. |

## Edge Cases Considered
- UTF-8 BOM in CSV header → stripped automatically
- Emails with `+` aliasing → treated as distinct (user+tag@ vs user@)
- Team name case-insensitive matching → "Design" == "design" == "DESIGN"
- Concurrent upload → second upload cancels first preview
