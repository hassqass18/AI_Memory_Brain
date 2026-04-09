# American Dream — Pre-Launch Nurture Sequence
## Workflow Completion Guide

**Workflow ID:** 1620833000000048465
**Status as of 06-Apr-2026:** Structure complete. Emails need content upload. Domain auth required before activation.

---

## What Has Been Built

The full 13-node workflow is live in Zoho Campaigns:

| Position | Node | Wait |
|---|---|---|
| 1 | Trigger — Any signup form submission | — |
| 2 | Email 1: Welcome & Introduction | — |
| 3 | Wait | 3 Days |
| 4 | Email 2: Why Now — Off-Plan Advantage | — |
| 5 | Wait | 3 Days |
| 6 | Email 3: The Lifestyle — Amenities & Design | — |
| 7 | Wait | **4 Days** |
| 8 | Email 4: Your Floor Plan — Units & Pricing | — |
| 9 | Wait | **4 Days** |
| 10 | Email 5: The Investment Case | — |
| 11 | Wait | **4 Days** |
| 12 | Email 6: Last Call — Pre-Launch Closing | — |

Total sequence: **18 days** from first opt-in to final email.

---

## Step 1 — Domain Authentication (REQUIRED before activation)

Emails sent from `hello@sierrahomesusa.com` will be blocked by DMARC unless SPF and DKIM are configured for `sierrahomesusa.com`.

### SPF Record

Add this TXT record to your DNS (at your domain registrar or DNS provider for `sierrahomesusa.com`):

```
Type:  TXT
Name:  @  (or sierrahomesusa.com)
Value: v=spf1 include:zcsend.net ~all
TTL:   3600
```

> If you already have an SPF record, append `include:zcsend.net` before the final `~all` or `-all`.

### DKIM Record

1. In Zoho Campaigns: go to **Settings → Sender Email Addresses**
2. Click **Add Sender Email**, enter `hello@sierrahomesusa.com`
3. Zoho will generate a DKIM key — it gives you a CNAME or TXT record to add to DNS
4. Add that record at your DNS provider
5. Click **Verify** in Zoho once DNS propagates (can take up to 24–48 hours)

### DMARC (Recommended)

Add a DMARC policy to protect the domain:

```
Type:  TXT
Name:  _dmarc.sierrahomesusa.com
Value: v=DMARC1; p=none; rua=mailto:dmarc@sierrahomesusa.com
TTL:   3600
```

Start with `p=none` (monitoring only), then upgrade to `p=quarantine` once deliverability is confirmed.

---

## Step 2 — Add Verified Sender in Zoho Campaigns

1. Go to **Settings → Sender Email Addresses**
2. Add `hello@sierrahomesusa.com` as the sender address
3. Complete domain verification (from Step 1)
4. Set **From Name:** `Sierra USA Homes`
5. Set **Reply-To:** `info@sierrahomesusa.com`

---

## Step 3 — Upload HTML to Each Email Node

Each of the 6 email nodes in the workflow currently shows "Create Message" — you need to paste the HTML into each one.

The HTML files are saved at:
```
Marketing/Email/
  email1_welcome.html
  email2_offplan_advantage.html
  email3_lifestyle_amenities.html
  email4_floor_plans_pricing.html
  email5_investment_case.html
  email6_prelaunce_closing.html
```

For each email node:

1. Click the email node in the workflow canvas (the salmon/orange MESSAGE card)
2. Click **Create Message** or the pencil/edit icon
3. In the email editor, choose **HTML Editor** / **Code Editor** tab
4. Paste the full contents of the corresponding HTML file
5. Set:
   - **Subject line** — see table below
   - **From name:** Sierra USA Homes
   - **From email:** hello@sierrahomesusa.com
6. Click **Save**

### Subject Lines

| Email | Subject |
|---|---|
| Email 1 | Welcome to American Dream Apartments — Nyali's Most Anticipated Launch |
| Email 2 | Why the Smartest Buyers Always Enter Off-Plan |
| Email 3 | Life Above Nyali — There's a Rooftop Cinema Waiting for You |
| Email 4 | 1, 2 & 3-Bedroom — Find Your Floor Plan at American Dream |
| Email 5 | Why Serious Investors Are Already Moving on American Dream |
| Email 6 | Pre-Launch Window Closing — Reserve Before Prices Rise |

---

## Step 4 — Connect the Trigger to Your Lead Form

1. Click the **Trigger** node (blue circle at top of workflow)
2. Confirm it is set to: **On Form Submission → Any signup form**
3. If you want to restrict to a specific form, click the trigger and select the American Dream lead capture form by name
4. Ensure the trigger is also synced to the **"American Dream Leads"** contact list in Zoho CRM/Campaigns

---

## Step 5 — Test Before Activating

1. Create a test contact with your own email address
2. Add them manually to the "American Dream Leads" list
3. Check that Email 1 arrives within a few minutes
4. Verify subject line, sender name, formatting, and all links
5. Check that the unsubscribe link works

---

## Step 6 — Activate the Workflow

Once all 6 email nodes have content and domain auth is verified:

1. Open the workflow: Zoho Campaigns → **Automation → Advanced Workflows → American Dream — Pre-Launch Nurture Sequence**
2. Click the orange **Activate** button (top right)
3. Confirm activation
4. Status will change from Draft → Active

---

## Notes

- **Unsubscribe links:** The HTML files use `*|UNSUB|*` as a Zoho merge tag placeholder. Zoho Campaigns automatically replaces this with the correct unsubscribe URL when the email is sent.
- **A/B testing:** The nurture sequence content brief recommends A/B testing subject lines for Email 2 and Email 6. You can do this after initial activation by cloning and splitting those nodes.
- **Tracking:** Enable open tracking and click tracking in each email node's settings.
- **GDPR/CAN-SPAM:** Footer copy is pre-included in all HTML files. Ensure the physical address in the footer is correct before going live.

---

*Document created: 06-Apr-2026*
*Workflow built by: AI Memory — Cowork Session*
