# Template Setup Guide

Quick-start for spinning up a new client agenda PWA from this template. Follow the steps in order. For full technical background, see [PLAYBOOK.md](PLAYBOOK.md).

---

## Prerequisites

- Node 20+
- Git
- GitHub account (to use the template and enable Pages)
- Cloudflare account — or any DNS provider that supports CNAME records

---

## Step 1 — Create the repo

1. On GitHub, click **Use this template → Create a new repository**
2. Set visibility to **Private**
3. Clone the new repo locally:
   ```bash
   git clone git@github.com:<org>/<repo>.git
   cd <repo>
   npm install
   ```

---

## Step 2 — `src/config.js`

Replace every placeholder with real values:

| Export | Placeholder | Replace with |
|--------|-------------|--------------|
| `agendaTitle` | `"Client @ Event Name Year"` | e.g. `"Acme @ Salesforce Connections 2026"` |
| `clientName` | `"Client"` | e.g. `"Acme"` |
| `instructions` | *(keep as-is or update)* | Plain text shown in the header |
| `whatsappNumber` | `"TEAM_WHATSAPP_NUMBER"` | International format, no `+`, no spaces, e.g. `"15551234567"` |
| `teamContacts[*].name` | `"Account Team Member N"` | Each person's full name |
| `teamContacts[*].phone` | `"PHONE_NUMBER"` | International format, no `+`, no spaces |
| `heroImage` | `null` | Import the hero asset and set here (see Step 4) |

---

## Step 3 — `src/data/events.js`

Replace the 4 example events with the real event list.

- Every object must include **all fields** — set inapplicable ones to `null`, never omit them
- `eventCategory` must be one of: `"suggested"` | `"also"` | `"oneOnOne"` | `"social"`
- Times are the **venue's local wall-clock time** — see the timezone note below

**Timezone — update the UTC offset:**

Open `src/components/EventDetail.jsx` and find the `toUtcComponents` function (~line 35). Update the hard-coded offset to match the event venue:

```js
// ⚠ UPDATE for each engagement: hard-code the venue's UTC offset in hours.
// Chicago CDT (Jun 2026) = UTC-5 → +5. São Paulo BRT = UTC-3 → +3.
const utcMs = Date.UTC(y, mo - 1, d, h + 5, mi)
//                                      ^^^^ change this number
```

See [PLAYBOOK.md](PLAYBOOK.md) for the full event schema reference.

---

## Step 4 — Assets

**Client logo**

1. Drop the client logo SVG into `src/assets/` (e.g. `acme-logo.svg`)
2. Open `src/components/Header.jsx` and update the import and alt text:
   ```jsx
   import clientLogo from '../assets/acme-logo.svg'
   // ...
   <img src={clientLogo} alt="Acme" className="h-6 w-auto" />
   ```

**Hero image**

1. Drop the event banner into `src/assets/` (e.g. `hero.png` — ideally 1080×570)
2. Open `src/config.js` and wire it:
   ```js
   import heroImg from './assets/hero.png'
   export const heroImage = heroImg
   ```

**PWA icons**

Drop 192×192 and 512×512 PNG icons into `public/icons/`, replacing the placeholder files:
```
public/icons/icon-192.png
public/icons/icon-512.png
```
These are referenced directly by the manifest — no import needed.

---

## Step 5 — Domain

1. Edit `public/CNAME` — replace the placeholder with your subdomain:
   ```
   agenda.yourclient.com
   ```
2. In Cloudflare (or your DNS provider), create a **CNAME** record:
   - Name: `agenda` (or whatever subdomain you chose)
   - Target: `<your-github-org>.github.io`
   - Proxy: **DNS only** (grey cloud)
3. In GitHub → repo **Settings → Pages**:
   - Source: `gh-pages` branch
   - Custom domain: enter the same subdomain

---

## Step 6 — Deploy

Push to `main` — GitHub Actions builds and deploys automatically in ~2 minutes:

```bash
git add .
git commit -m "feat: configure for <Client> @ <Event>"
git push origin main
```

Verify at your custom domain once the Actions run completes.

---

## Go-Live Checklist

- [ ] Client logo appears in the top-right of the header
- [ ] Salesforce logo appears in the top-left of the header
- [ ] Hero image loads (not the grey placeholder)
- [ ] All events display with correct titles, times, and categories
- [ ] Filter tabs work: All / Sessions / 1:1s / Get Togethers / My Schedule
- [ ] Calendar export (Google + Outlook) creates events at the correct local time
- [ ] WhatsApp button and contact links open the right conversations
- [ ] Offline mode: amber banner appears, calendar/map links disable gracefully
- [ ] "Add to Home Screen" banner shows on mobile (not in standalone mode)
- [ ] PWA manifest icon appears on the home screen after install
- [ ] Lighthouse Performance + Accessibility ≥ 95
