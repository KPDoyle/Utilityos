# Verification — 18 November 2026

## Passed

- Production Vite build.
- Six automated tests covering site-level cost totals, scheduled service treatment, VAT-separated exports, CSV quoting/formula protection, malformed CSV rejection, renewal dates, and backup schema validation.
- Desktop visual review at approximately 1350 px viewport width.
- Mobile (390 px) and tablet (768 px) iframe viewport review; document width matched viewport width after correcting an absolutely positioned table-header overflow.
- Mobile navigation to My services.
- Invoice creation, correct £100 net + £20 VAT = £120 total, approval state and dashboard totals.
- Browser reload with invoice persistence.
- Provider shortlist and side-by-side comparison.
- Three-step opening wizard, seven selected service request drafts, and new location creation.
- Guided assistant summarising the new opening's date and checklist progress.
- Invoice query draft, disputed state and exclusion from the awaiting-payment subtotal.
- No app-origin errors were found in the inspected browser console (extension-origin errors excluded).

## Verification limits

- The browser file chooser test stalled; end-to-end upload/import could not be completed in that session. CSV parsing, format and schema checks were tested automatically.
- Calendar and CSV downloads were implemented but not exhaustively exercised across browser families.
- Responsive tests used actual iframe viewports in Chromium, not physical iOS/Android devices.
- Live supplier, email, banking, meter, payment and accounting integrations are intentionally unconfigured, and cannot be end-to-end tested until their authorised services are supplied.
