# UtilityOS

**All your business services. One place.**

A responsive, azure-blue business-services application for UK high-street and hospitality operators. Built with React, Vite and Lucide icons; deployed through GitHub and Vercel.

## Run locally

```sh
npm ci
npm run dev
npm test
npm run build
```

## Working features

- Portfolio dashboard with location filters, live calculations from workspace records, invoice alerts and renewals.
- Create and edit services, monthly costs, supplier references, notice periods and renewal dates.
- Provider marketplace with illustrative offers, category and green-option filters, sorting, comparison shortlist and CSV export.
- Opening wizard with business type, address, date, service selection, budget, checklist and saved draft quote requests.
- Bills ledger with invoice creation, duplicate prevention, CSV import validation, explicit net/VAT/gross amounts, review, approval, dispute and recorded-payment states.
- Supplier-request drafts, download to text and resolution tracking. No messages are sent.
- Calendar renewal reminder export in iCalendar format.
- Per-location cost and budget insights and CSV reports.
- Accounting handoff using a generic CSV export of approved bills with nominal codes. No automatic posting.
- Guided workspace assistant based on local records; no external model or provider agent.
- Local document metadata register, profile/preferences, activity history and JSON backup/restore.
- Responsive navigation and layouts, keyboard focus, labelled forms, dialog focus trap, reduced-motion support and print styles.

## Deliberate limits of this release

This is an interactive product demonstrator, **not a production brokerage or accounting service**. State is stored in `localStorage` under `utilityos.workspace.v1`, independently on each browser/device. It does not provide sign-in, multi-user access, a server database, cloud document storage or cross-device synchronisation. Use non-sensitive example data. Uploaded documents register only metadata; their contents are never stored.

Providers, quotations and historical cost series are fictional / illustrative and labelled in the UI. Actual quotes, usage feeds, authorised switching, emails, bank feeds, payments and direct Xero/QuickBooks/Sage sync are not connected. Marking paid only changes a local status. CSV exports are generic and must be mapped and reviewed before importing into accounts.

See [product research](docs/PRODUCT_RESEARCH.md) for competitor sources and the implementation map, and [production roadmap](docs/PRODUCTION.md) for external dependencies required for a live commercial service.

## Deployment

Repository: https://github.com/KPDoyle/Utilityos

Vercel project: `utilityos`. Framework: Vite. Build command: `npm run build`. Output: `dist`. SPA fallback and security headers are configured in `vercel.json`.

No credentials belong in this repository or client-side JavaScript. GitHub integration can deploy updates from `main`.
