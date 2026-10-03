# Real Choice Menswear — Digital Storefront & Acquisition Engine

> Production-ready, high-converting interactive web application for **Real Choice Collection (Menswear)** located at Jivraj Cross Road, Jivraj Park, Ahmedabad. Optimized for Vercel edge deployment and local offline sales pitches.

---

## 1. Specifications & Store Metadata

- **Store**: Real Choice Collection (Menswear)
- **Address**: Vejalpur Road, Jivraj Cross Rd, opp. Sahjanand Complex, Jivraj Park, Ahmedabad, Gujarat 380051
- **Landmarks**: Opposite Sahjanand Complex / Tower, Near Aarti Farsan
- **Primary Contact**: `084697 01926` / `+91 84697 01926`
- **WhatsApp API Gateway**: `https://wa.me/918469701926`
- **Operating Hours**: Mon–Sun: 10:30 AM – 10:00 PM (dynamically calculated)
- **Verified Ratings**: Google 4.9★ (63+ reviews) | Justdial 4.9/5 (73 votes)
- **Stack**: Semantic HTML5, Vanilla ES6+ Web APIs, Tailored CSS3 Design System, Vercel Edge CDN.

---

## 2. Directory Layout

```
realchoice/
├── .gitignore
├── README.md
├── vercel.json                 # Static routing, cache-control & security headers
├── index.html                  # Accessible 5-state UI architecture
├── styles.css                  # Tailored design system, tokens & mobile sticky bar
├── app.js                      # Dynamic store hours, catalog CRM & ROI engine
└── assets/
    ├── logo.svg                # Tailored crest & illuminated neon brand logo
    ├── store-front.jpg         # Authentic physical storefront photo
    ├── store-street.jpg        # Vejalpur Road street view context
    ├── store-interior.jpg      # High-resolution boutique interior
    └── products/
        ├── cuban-shirt.jpg     # Textured Cuban collar shirt
        ├── resort-print.jpg    # Retro mustard botanical resort shirt
        ├── street-oversized.jpg# 240 GSM drop-shoulder boxy tee
        ├── heavyweight-tee.jpg # Acid-wash mineral graphic pullover
        ├── cargo-pants.jpg     # Tactical multi-pocket utility cargo
        ├── denim-vintage.jpg   # Ring-spun classic straight denim
        ├── casual-linen.jpg    # European flax breathable linen overshirt
        └── formal-blazer.jpg   # Midnight satin partywear blazer shirt
```

---

## 3. Core Engine Architecture

1. **Dynamic Real-Time Hours**:
   - Compares client system timestamp against operating window (`10.5` to `22.0`).
   - Renders live pulse badge (`Open Now` / `Closed`) with remaining hours countdown and day-of-week table auto-highlighting.
2. **Catalog CRM & WhatsApp Reservation**:
   - Filterable tabs: `All Looks`, `Casual & Resort`, `Streetwear & Oversized`, `Denim & Cargos`, `Party & Festive`.
   - Real-time debounced search across item name, category, fabric, and description.
   - 1-click WhatsApp deep-link generation pre-populating item name, selected size (M/L/XL/XXL), store price, and SKU.
3. **Smart Size Advisor**:
   - Computes recommended sizes based on height (155–198 cm), weight (50–115 kg), and styling preference (Slim / Regular / Oversized).
4. **Client Acquisition & ROI Drawer**:
   - Slide-over executive presentation with customizable footfall and bill size sliders for sales meetings with store ownership.
5. **Mobile-First Conversion Bar**:
   - Ergonomic sticky bottom bar on `<768px` viewports for immediate 1-tap call, map routing, and WhatsApp booking.

---

## 4. Local Development

```bash
# Run via Python built-in static server
python -m http.server 8080

# Or via Node http-server
npx http-server -p 8080
```

Navigate to `http://localhost:8080` in any modern browser.

---

## 5. Vercel Deployment

### Deploy via Vercel CLI:
```bash
# Install Vercel CLI (if not installed)
npm install -g vercel

# Deploy directly
vercel --prod
```

### Deploy via GitHub (Recommended):
1. Push repository to GitHub: `git push -u origin master` (or `main`).
2. Import project into Vercel Dashboard (`https://vercel.com/new`).
3. Framework Preset: **Other** / **Static Site**.
4. Root Directory: `./`.
5. Deploy.
