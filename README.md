# ⚙ PartMatch AI

### The Google of Industrial Parts

> Search real global suppliers instantly. Free forever.

🔗 **Live App:** https://partmatch-ai.vercel.app

---

## What is PartMatch AI?

PartMatch AI is a free global industrial parts search engine built for maintenance engineers, procurement managers, and repair shops worldwide.

When a machine breaks down and you need a hydraulic seal, a bearing, a bolt, or any industrial part — PartMatch AI finds the best suppliers globally in seconds, comparing real prices from China, India, USA, Europe, the Middle East and more.

---

## The Problem It Solves

Finding aftermarket industrial parts is painful:
- Part numbers don't match across brands
- Supplier catalogs are outdated PDFs
- You call 5 distributors and wait 2 days
- A machine sitting idle costs $15,000/day

PartMatch AI fixes this.

---

## Features

### 🌍 8-Market Parallel Search
Searches USA · India · China · UK · Germany · UAE · Australia · Japan simultaneously via Google Shopping (Serper API) plus eBay Browse API — all in one query.

### 🛒 eBay Integration
Live eBay product search runs in parallel with Google Shopping results. eBay OAuth token cached for 2 hours.

### 🧠 OEM Part Number Detection
Detects 30+ industrial OEM brands (Atlas Copco, SKF, JCB, Donaldson, Parker, Bosch Rexroth, Caterpillar, Komatsu, Cummins, and more). Automatically searches for aftermarket alternatives and shows savings vs OEM reference price.

### 💰 Inline Landed Cost on Every Card
Every product card shows:
- Seller's original price
- USD equivalent (for non-USD markets)
- Your local currency conversion (live rates)
- Shipping estimate
- Import duty (with China +20% surcharge for US buyers)
- Customs clearance fee
- Local tax / VAT / GST
- **Total landed cost**

### 📈 Live Exchange Rates
Fetches real exchange rates from ExchangeRate API every 24 hours. Cached in localStorage. 23 currencies supported. Falls back to hardcoded rates if API is unavailable.

### 📋 Tax Rates from GitHub
Import duties, local taxes, and shipping rates fetched from `tax-rates.json` in this repo every 24 hours. Update the JSON file to update rates for all users — no code deploy needed.

### 📊 Top-10 Sidebar
Two-column layout shows:
- **Top 10 Global** — 10 cheapest results by USD price across all markets
- **Top 10 Local** — 10 cheapest from your detected country
- Gold / Silver / Bronze rank badges for top 3

### 📍 IP-Based Country Detection
Detects your country via ipapi.co. Prioritises local market results and shows delivery estimates in your local context.

### 🔐 Privacy First
No server-side database. All user data (search history, settings, tokens) stored in browser localStorage only.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Pure HTML / CSS / JavaScript (no framework) |
| Search | Google Shopping via Serper.dev API |
| Marketplace | eBay Browse API (OAuth client credentials) |
| Currency | ExchangeRate API (live, 24h cache) |
| Tax rates | GitHub raw JSON (24h cache) |
| Geolocation | ipapi.co |
| Deployment | Vercel |
| Storage | localStorage (browser-only) |

---

## Test Suite

Run all 18 automated tests at:
**[partmatch-ai.vercel.app/test.html](https://partmatch-ai.vercel.app/test.html)**

Tests cover:
- API connectivity (Serper, eBay, ExchangeRate)
- Search accuracy across 5 query types
- Currency conversion math
- Landed cost calculations
- Edge cases (empty query, special chars, long queries, invalid keys)

---

## For Suppliers

Want your company listed in PartMatch AI?

📧 alluvenkat11@gmail.com

---

## Built By

**Venkata Rao Allu**
Mechanical Engineer + MS Cybersecurity
Rowan University, NJ · Incoming Cyber Analyst @ Velko Systems LLC

With 2+ years sourcing hydraulic and pneumatic parts globally across India, Europe and Southeast Asia — I built the tool I always needed.

🔗 [linkedin.com/in/venkata-rao-allu](https://linkedin.com/in/venkata-rao-allu)
📧 alluvenkat11@gmail.com
🌐 [cadgenie.netlify.app](https://cadgenie.netlify.app)
⚙️ [partmatch-ai.vercel.app](https://partmatch-ai.vercel.app)

---

## License

MIT — Free to use, share, and contribute.
