# 🦷 Bright Smiles — Dental Clinic Review System

A gamified, SEO-optimized review collection system for dental clinics. Patients scan a QR code, rate their visit, write a review, and get a fun scratch card reward.

## 🔗 Live Links

| Page | URL |
|---|---|
| **Review App** | [bright-smiles-reveal](https://unknownsorcerer007.github.io/bright-smiles-reveal/) |
| **QR Code (Printable)** | [qr-code.html](https://unknownsorcerer007.github.io/bright-smiles-reveal/qr-code.html) |
| **Print Templates** | [print-templates.html](https://unknownsorcerer007.github.io/bright-smiles-reveal/print-templates.html) |

## 📸 What's Included

### Review Flow (5 Screens)
1. **Star Rating** — Tap 1-5 stars with animated feedback
2. **Keyword Selection** — Pick 2 experiences + 1 treatment (auto-advances)
3. **Review Writer** — Write review with keyword tracking + quality meter
4. **Scratch Card** — Gamified reward reveal with confetti
5. **Social Share** — Share reward card on Instagram/WhatsApp

### Print Materials
- **QR Code Card** — Printable dental-themed QR code for reception desk
- **Bill Inserts** — 3 per page, staple to patient bills/receipts
- **Prescription Stickers** — 6 per page, stick on prescription bags
- **Waiting Room Flyer** — Full branded counter stand / wall flyer

### SEO / GEO / AEO Optimization
- **Schema.org** LocalBusiness + Dentist structured data
- **FAQPage** schema for Google People Also Ask
- **Speakable** schema for voice assistants
- **Geo meta tags** with coordinates
- **Open Graph + Twitter Cards** for social sharing
- **Canonical URL** + robots meta

## 🛠️ Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Mobile-first responsive, glass morphism, animations
- **Vanilla JS** — Zero dependencies, fast load
- **Canvas API** — Scratch card + confetti system
- **QRCode.js** — QR code generation
- **GitHub Pages** — Free hosting

## 📁 File Structure

```
bright-smiles-reveal/
├── index.html              # Main review app (5 screens)
├── style.css               # Full responsive CSS
├── app.js                  # App logic, jokes, keywords, scratch card
├── manifest.json           # PWA manifest
├── qr-code.html            # Printable QR code card
├── print-templates.html    # Bill inserts, stickers, flyer
├── char_spa.webp           # Reward card image (spa theme)
├── char_vacation.webp      # Reward card image (vacation theme)
├── char_camera.webp        # Reward card image (camera theme)
└── README.md               # This file
```

## ⚙️ Configuration

Edit the `CONFIG` object in `app.js`:

```javascript
const CONFIG = {
    googlePlaceId: "YOUR_GOOGLE_PLACE_ID",
    clinicName: "Your Clinic Name",
    location: "Your City, State",
    contactEmail: "your@email.com",
    phone: "+1-XXX-XXX-XXXX"
};
```

Update Schema.org data in `index.html`:
- Business address, phone, hours
- Services list
- AggregateRating
- FAQ questions
- Geo coordinates

## 🚀 Deployment

1. Fork this repo
2. Update `CONFIG` in `app.js` with your clinic details
3. Update Schema.org JSON-LD in `index.html`
4. Enable GitHub Pages (Settings → Pages → main branch)
5. Print templates from `print-templates.html`
6. Distribute QR codes on bills, prescriptions, and reception desk

## 📊 Features

| Feature | Description |
|---|---|
| 🎮 Gamification | Scratch card reward system with confetti |
| 📱 Mobile-First | Optimized for phone cameras (80%+ users) |
| 🖥️ Desktop-Friendly | Glass morphism centered card on desktop |
| 🔄 No Repeat Jokes | 95+ jokes, anti-repeat tracking system |
| 📈 SEO Optimized | Schema.org, meta tags, canonical URL |
| 🤖 AI Ready | GEO + AEO structured data for AI search |
| ⚡ Fast | Vanilla JS, no frameworks, <50KB total |
| 🎨 Customizable | Change colors, keywords, jokes, config |
| 🔒 Anonymous | No patient data collected |
| 📶 Offline Ready | PWA manifest for Add to Home Screen |

## 💰 Pricing (For Agencies)

| Tier | Includes | Price |
|---|---|---|
| **Standard** | Review page + QR code + schema + bill design | $497–797 one-time |
| **With Hosting** | Standard + custom domain + monthly updates | $497 setup + $49/mo |

Target: Dental clinics, restaurants, salons, medical offices.

## 📝 License

MIT — Free to use and modify.

---

Built with 🦷 by [unknownsorcerer007](https://github.com/unknownsorcerer007)
