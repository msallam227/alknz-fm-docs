# ALKNZ Portal — Feature Reference

## Table of Contents
- [Admin Dashboard](#admin-dashboard)
- [Fund Manager Dashboard](#fund-manager-dashboard)
- [Chrome Extension](#chrome-extension)

---

# Admin Dashboard

Login: `admin@demo.alknz.io` / `Demo@Admin1`

The admin has full visibility across all funds, users, and investors on the platform. No data is hidden from the admin view.

---

## 1. Dashboard

The landing screen after admin login. A real-time platform-wide health check.

**What you see:**
- **4 KPI cards** — Total Investors (all funds combined), Active Funds, Team Members (fund managers), Aggregate Committed Capital
- **Fund health table** — one row per fund showing: fund name, assigned manager, investor count, and % to close
- All numbers update in real-time as investors move through the pipeline

---

## 2. Users

Create and manage all fund manager accounts on the platform.

**What you see:**
- Table of all accounts with: name, email, role, status (Active / Inactive), last login timestamp

**What you can do:**
- **Create User** — enter name + email, system auto-generates a temporary password shown once. User is prompted to set their own password on first login
- **Deactivate** — toggle a user's Active switch off to block login without deleting their account or data
- **Reset password** — generate a new temporary password for any user at any time

---

## 3. Funds

Create and configure SPVs and investment funds. Each fund is a fully isolated environment.

**What you see:**
- Card grid of all funds showing: name, type, currency, target raise, assigned managers

**What you can do:**
- **Create Fund** — fill in: name, type (SPV / Fund), currency, target raise, target close date, investment thesis, primary sectors (multi-select), focus regions (multi-select)
- **Edit Fund** — update any field after creation, changes apply immediately
- **Auto pipeline** — the moment a fund is created, all 13 pipeline stages are provisioned automatically

---

## 4. Assignments

Map fund managers to funds. Controls exactly what each user can see.

**How it works:**
- Grid of funds (rows) × fund managers (columns)
- Check a cell to grant that manager access to that fund
- One manager can be assigned to multiple funds
- Data is fully isolated — a manager only sees funds they are assigned to
- Changes take effect immediately, no logout required

---

## 5. All Investors

A unified, searchable view of every investor across all funds on the platform.

**What you see:**
- Table columns: name, fund name, investor type, nationality, pipeline stage, relationship strength (colour-coded: cold / warm / direct), expected ticket size

**What you can do:**
- **Search** — free-text across investor name, firm, and email
- **Filter** — by fund, pipeline stage, nationality, investor type, or relationship strength
- **Click any row** — opens a read-only investor profile drawer

---

## 6. Duplicate Detection

Automatically finds investors who appear across multiple funds under different names or contact details.

**How it works:**
- System runs fuzzy matching on three signals: (1) investor name, (2) email addresses, (3) LinkedIn URLs
- Suspected duplicates appear as side-by-side pairs with a match confidence score (0–100%)
- **Merge** — choose which record to keep as the winner. All tasks, call logs, pipeline history, and interaction data from both records are preserved under the winner
- **Dismiss** — mark a pair as not a true duplicate so it stops appearing

---

## 7. Investor Requests

Review a queue of investor profiles captured from the web by the Chrome Extension.

**What you see:**
- Each card shows: capturing team member, source URL, capture date, and all extracted fields (name, firm, job title, LinkedIn URL, emails, phone)
- Status badge: Pending / Approved / Rejected

**What you can do:**
- **Approve** — investor is added to the selected fund's database instantly
- **Reject** — capture is discarded with an optional reason, kept in archive for audit
- **Filter by status** — view All, Pending, Approved, or Rejected separately

---

## 8. Personas Analytics

Platform-wide view of investor persona health across all funds.

**What you see:**
- **KPI cards** — total personas defined across all funds, total investors with 50%+ match score, average match score platform-wide
- **Per-fund coverage table** — each fund row shows persona count and % of investors matched at 50%+
- **Persona leaderboard** — all personas ranked by matched investor count across the platform
- **Unmatched pool** — investors who score below 50% on every persona, representing uncovered archetypes and signals for new personas to create

---

## 9. Feedback Responses

View all user testing feedback submitted by fund managers and admins.

**What you see:**
- **Stats bar** — total response count, average intuitiveness score (1–5 scale), % of users who want more AI features
- **Response table** — submitter name, role, date, intuitiveness score, comment preview. Click any row to expand the full response

**What you can do:**
- **Filter** — by role (Admin / Fund Manager), date range, or keyword search
- **Export CSV** — download all responses as a spreadsheet

---
---

# Fund Manager Dashboard

Login: `sara@demo.alknz.io` / `Demo@FM2024`

The fund manager dashboard is organised into 7 tabs. All data is scoped to the currently selected fund. If a manager is assigned to multiple funds, they switch between them using the fund selector in the header.

---

## Tab 1 — Capital Overview

Live fund metrics. The first screen after FM login.

**What you see:**
- **4 KPI cards** — Target Raise, Total Committed (sum of all investor ticket sizes), Total Funded (capital received), % to Close
- **Ticket size distribution chart** — committed capital grouped by investment size bucket, shows whether the raise is driven by few large tickets or many smaller ones
- **Stage funnel** — investor count per pipeline stage, shows where prospects are concentrated and where deals are progressing slowest

All numbers update the moment an investor's ticket size or stage changes.

---

## Tab 2 — Task Manager

All tasks for the fund in one list. The bell icon in the dashboard header shows a live count of open tasks.

**What you see:**
- Each task row shows: investor name, task description, type badge (⚡ Auto or Manual), priority (high / medium / low, colour-coded), due date, completion checkbox

**Task types:**
- **⚡ Auto tasks** — created automatically when an investor moves to a new pipeline stage. Represent the standard checklist of actions for that stage. No setup required
- **Manual tasks** — created by clicking the + button. Link to any investor, set due date, priority, and notes

**What you can do:**
- **Filter** — by investor name, pipeline stage, priority, or completion status
- **Mark done** — check the checkbox on any task row
- **Create task** — click + to add a manual task for any investor

---

## Tab 3 — Investor Profiles

The full investor database for the fund.

**What you see:**
- List columns: name, investor type (Individual / Family Office / Corporate), nationality, pipeline stage, relationship strength badge, expected ticket size, persona match % badge

**Click any investor** to open the 4-tab detail panel:

### Identity Tab
- Full name, investor type, nationality, age, job title, firm name, LinkedIn URL, wealth level

### Context Tab
- Relationship strength (cold / warm / direct)
- Decision role (Decision Maker / Influencer / Gatekeeper)
- Investment preferences: preferred sectors, check size range, target geography
- Free-text notes

### Contact Tab
- Primary email, up to 4 secondary email addresses, phone number, WhatsApp, point of contact (who introduced this investor)

### Personas Tab
- AI match score progress bars for every persona defined in the fund
- Updated after each analysis run

**Edit mode:** Click Edit in the top-right corner to modify any field. Click Save to apply.

---

## Tab 4 — Fundraising Pipeline

Kanban board showing every investor's position in the fundraising process.

**13 stages (left → right):**

| # | Stage |
|---|---|
| 1 | Prospects |
| 2 | Investors |
| 3 | Intro Email |
| 4 | Opportunity Email |
| 5 | Phone Call |
| 6 | First Meeting |
| 7 | Second Meeting |
| 8 | Follow Up Email |
| 9 | Signing Contract |
| 10 | Signing Subscription |
| 11 | Letter for Capital Call |
| 12 | Money Transfer |
| 13 | Transfer Date |

**What you see:**
- Each investor appears as a card showing: name, expected ticket size, relationship strength badge
- Stage column header shows investor count for that stage

**What you can do:**
- **Drag and drop** a card to a new column — move is saved instantly
- Auto-tasks for the new stage are created in Task Manager the moment the card is dropped
- Scroll horizontally to navigate all 13 stages

---

## Tab 5 — Communication Center

Three sub-tabs covering all investor communication.

### Inbox
- Connect Gmail via OAuth (Settings → Gmail → Connect — one-time setup)
- Your inbox appears inside the portal
- Emails from known investor email addresses are automatically tagged with the investor's name
- Compose and reply without leaving the portal

### Call Logs
- Log every investor call: select investor, set date, pick outcome (Interested / No Answer / Connected / Follow-Up Needed), write notes and next steps
- Toggle **Auto-create follow-up task** to automatically generate a linked task in Task Manager from this call

### Templates
- Create reusable email templates with merge variables:
  - `{{investor_name}}` — investor's full name
  - `{{fund_name}}` — current fund name
  - `{{ticket_size}}` — investor's expected ticket size
- When composing an email, select a template and all variables auto-populate with the investor's data

---

## Tab 6 — Research Capture

Review investor profiles captured by the Chrome Extension.

**What you see:**
- Each capture card shows: source URL (e.g. LinkedIn profile), capture date, all extracted fields (name, firm, job title, LinkedIn URL, emails, phone), status (Pending / Accepted / Rejected)

**Accept flow:**
1. Select a fund from the dropdown on the card
2. Click **Accept**
3. Investor is created in the fund's database immediately
4. Dashboard automatically switches to Investor Profiles and opens the new investor's detail panel — no extra navigation needed

**Reject:** Discards the capture with an optional reason. Rejected captures stay in archive with their status.

---

## Tab 7 — Personas

Define investor archetypes and use AI to score every investor against them.

**What you see:**
- Persona cards showing: name, description, target attributes (investor type, nationalities, sectors, age range, ticket size range)

**What you can do:**
- **Create Persona** — define a new archetype with target attributes. The more specific, the better the AI scoring
- **Run AI Analysis** — scores every investor in the fund against every persona (0–100%) using their profile data. Results appear as progress bars in each investor's Personas sub-tab and as a badge % on the investor list
- **Analyze & Suggest** — AI scans your investor data for patterns not covered by existing personas and suggests new archetypes to create

---
---

# Chrome Extension

**Folder:** `ALKNZ-Extension-v12/`
**Browser:** Chrome (Manifest V3)

Captures investor profiles from any webpage and sends them to the portal for review in the Research Capture tab.

---

## Install

1. Open `chrome://extensions/` in Chrome
2. Enable **Developer Mode** (top-right toggle)
3. Click **Load unpacked** → select the `ALKNZ-Extension-v12/` folder
4. Pin the ALKNZ icon to your Chrome toolbar
5. Right-click icon → **Options** → set Backend URL → log in with your portal credentials
6. Click **Test Connection** → should show "Connected ✓"

---

## Capture Flow

1. Browse to any LinkedIn profile or company page
2. Click the ALKNZ icon to open the side panel
3. Extension auto-extracts: name, job title, firm, LinkedIn URL from the page
4. Add notes, relationship context, and any missing fields
5. Click **Upload to Portal**
6. Log in to the portal → Research Capture tab → capture appears as pending
7. Select a fund → click Accept → investor is created and the profile opens automatically

---

## What It Captures

| Field | Source |
|---|---|
| Full name | Page text / LinkedIn header |
| Job title | LinkedIn headline |
| Firm / Organisation | LinkedIn company or page title |
| LinkedIn URL | Current page URL |
| Email addresses | Visible contact info on page |
| Phone number | Visible contact info on page |
| Notes | Manually entered in side panel |
| Relationship context | Manually selected (cold / warm / direct) |

---

## Compatible Sites

- LinkedIn profiles and company pages
- Company websites
- Conference attendee pages
- News articles and bios

---

*Built by ALKNZ Ventures*
