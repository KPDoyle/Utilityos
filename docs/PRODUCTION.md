# UtilityOS — production implementation requirements

The deployed build is an interactive demonstration. The following are concrete dependencies for a commercial launch, not capabilities currently active in the app.

## Identity and durable data

Add authenticated organisation workspaces with owner, manager and accountant roles; server-side authorisation; durable storage and backups; location/entity separation; append-only server audit records; retention/deletion controls; encrypted document storage; and tenant-isolation tests. The current local activity history is useful for demonstration but is not a tamper-proof audit log.

## Accounting

Implement server-managed OAuth flows for selected Xero/QuickBooks/Sage products. Keep secrets server-side and encrypt refresh tokens. Map organisations, contacts, nominal codes, tax codes and tracking dimensions. Use idempotency, deduplication, sync status, retries, revocation and reconciliation. Explicit approval precedes posting. Never pretend a connection is active merely because an export was prepared.

## Procurement and supplier operations

Secure authorised quote feeds or brokerage/provider agreements. Gather verified site/meter/usage and eligibility data. Define total-cost comparisons, service-level terms, contract length, exit/notice fees, commission and market coverage. Supplier changes require an authority process and explicit informed approval. Draft requests currently remain local.

## Bills and documents

Add secure upload/virus checks, document access policies, invoice extraction with source evidence, confidence scores and human review; validate tax treatment with appropriate professional input. Compare invoices against verified tariffs, readings and contract data. Current bill alerts and historical trends are labelled samples.

## AI and communication

Connect a suitable server-side model with constrained tools, grounding in authorised tenant records, evidence citations, prompt-injection defences and human approvals for external actions. Current assistant is deterministic and clearly labelled. Add provider email/ticket delivery only after explicit authorisation and verified recipients, with delivery status and an audit record.

## Banking, metering and reminders

Use authorised banking/metering integrations and consent flows. Start with read-only reconciliation. No direct payment execution is present. Add scheduled reminders with preferences, deliverability, deduplication and opt-out handling; calendar-file export is currently supported.

## Commercial readiness

Establish business terms, privacy notices, role and retention policies, brand clearance, supplier coverage, commission disclosures and appropriate specialist arrangements for regulated products such as insurance. Complete accessibility, mobile-device, security and production integration testing before accepting real customer information.
