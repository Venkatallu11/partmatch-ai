# ⚙ PartMatch AI

### The Google of Industrial Parts

> Search real global suppliers instantly. Free forever.

🔗 **Live App:** https://partmatch-ai.vercel.app  
🧪 **Test Suite:** https://partmatch-ai.vercel.app/test.html

---

## What It Does

PartMatch AI is a free global industrial parts search engine for maintenance engineers, procurement managers, and repair shops worldwide.

Search once → get real results from 8 countries + eBay, with currency conversion, import duty, and total landed cost calculated inline on every card.

---

## Features

### 🌍 8-Market + eBay Parallel Search
Searches USA, India, China, UK, Germany, UAE, Australia, and Japan simultaneously via Google Shopping (Serper API), **plus** eBay Browse API — all in one query, deduplicated by URL.

### 🧠 OEM Part Number Detection
Detects 30+ industrial OEM brands (Atlas Copco, SKF, JCB, Donaldson, Parker, Bosch Rexroth, Caterpillar, Komatsu, Cummins, and more). Automatically searches for aftermarket alternatives and shows savings vs OEM reference price.

### 💰 Inline Landed Cost on Every Card
Every product card shows:
- Seller's original price in seller's currency
- USD equivalent for non-USD markets
- Your local currency conversion (live rates)
- Estimated air shipping
- Import duty by category (with China +20% surcharge for US buyers)
- Customs clearance fee
- Local tax / VAT / GST by country
- **Total landed cost to your door**

### 📈 Live Exchange Rates
Fetches real rates from ExchangeRate API every 24 hours. Cached in localStorage with hardcoded fallback. 23 currencies supported.

### 📋 Tax Rates from GitHub
Import duties, local taxes, and shipping rates live in `tax-rates.json` in this repo. App fetches it every 24 hours. To update rates for all users — edit the JSON, commit, push. No code deploy needed.

### 📊 Top-10 Sidebar
Two-column layout with sticky sidebar showing:
- **Top 10 Global** — cheapest 10 results by USD price across all markets, ranked gold/silver/bronze
- **Top 10 Local** — cheapest 10 from your detected country

Each sidebar item links directly to the product page.

### 📍 IP-Based Country Detection
Detects your country via ipapi.co. Prioritises local market results and calculates delivery estimates in your local context.

### 🛒 eBay Marketplace Account Deletion Endpoint
Implements the eBay Marketplace Account Deletion notification protocol:
- `GET /api/ebay-notify?challenge_code=X` — returns SHA-256 hash for ownership verification
- `POST /api/ebay-notify` — acknowledges deletion notices (no-op; no user data stored server-side)

### 🔐 Privacy First
No server-side database. All user state (search history, auth, tokens, FX cache, tax cache) stored in browser localStorage only.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Pure HTML / CSS / JavaScript — no framework, no build step |
| Search | Google Shopping via [Serper.dev](https://serper.dev) |
| Marketplace | eBay Browse API (OAuth client credentials flow) |
| Currency | [ExchangeRate API](https://exchangerate-api.com) — live, 24h cached |
| Tax / Duty | GitHub raw JSON (`tax-rates.json`) — 24h cached |
| Geolocation | [ipapi.co](https://ipapi.co) |
| API endpoint | Vercel Serverless Functions (`api/ebay-notify.js`) |
| Deployment | [Vercel](https://vercel.com) |
| Storage | Browser localStorage only |

---

## How to Use

1. Go to **[partmatch-ai.vercel.app](https://partmatch-ai.vercel.app)**
2. Search for any industrial part:
   - `hydraulic piston seal 80mm NBR`
   - `SKF 6205-2RS bearing`
   - `Atlas Copco 57788856` — triggers OEM + aftermarket mode
   - `Donaldson P553000` — shows filter alternatives with savings
   - `M8 hex bolt grade 8.8`
3. See results from 8 markets + eBay with full landed cost breakdown
4. Use market filter tabs to focus on one country
5. Check the Top-10 sidebar for the globally cheapest options

---

## Files

```
partmatch-ai/
├── index.html        — entire app (HTML + CSS + JS, ~1600 lines)
├── admin.html        — admin dashboard (password protected)
├── test.html         — automated test suite (18 tests)
├── tax-rates.json    — import duties, VAT rates, shipping estimates
├── api/
│   └── ebay-notify.js — eBay account deletion notification handler
└── vercel.json       — Vercel build + routing config
```

---

## Test Suite

Run all 18 tests at **[partmatch-ai.vercel.app/test.html](https://partmatch-ai.vercel.app/test.html)**

| Category | Tests |
|----------|-------|
| API Connectivity | Serper, ExchangeRate, eBay OAuth, eBay Search, GitHub tax JSON |
| Search Accuracy | 5 industrial query types |
| Currency Math | USD↔INR, CNY, GBP, EUR; all currencies present |
| Landed Cost | CN→US, IN→US, same-country, savings calc, INR→USD |
| Edge Cases | Invalid key, special chars, long query, India market, CORS |

**Last run: 18/18 PASS (100%)**

---

## Updating Tax Rates

Edit `tax-rates.json` and push to `main`. All users get updated rates within 24 hours (or immediately on page reload with cleared cache).

Fields:
- `import_duties` — by country code, by part category. Add `_china_extra` for US CN-origin surcharge.
- `local_tax` — VAT / GST / Sales Tax by country
- `shipping_air_usd` — estimated air freight in USD by seller country → buyer country

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
