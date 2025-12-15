# SmartRep Landing Page

A modern, responsive landing page for SmartRep - an AI-powered fitness app.

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   ├── privacy/
│   │   └── page.tsx        # Privacy Policy page
│   ├── terms/
│   │   └── page.tsx        # Terms of Service page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Main hero section
│   ├── PhoneMockup.tsx     # iPhone mockup with cycling screenshots
│   ├── QRCode.tsx          # QR code component
│   └── DownloadButton.tsx  # App Store download button
├── lib/
│   └── utils.ts            # Utility functions
└── types/
    └── index.ts            # TypeScript type definitions
```

## 🎨 Design System

- **Primary Color:** Purple (#8B5CF6)
- **Background:** Dark (#1A1A1A)
- **Typography:** Inter font family

## 📝 Next Steps

### Required Assets

1. **App Screenshots** (4+ images)
   - Place in: `public/images/screenshots/`
   - Named: `screenshot-1.png`, `screenshot-2.png`, etc.
   - Recommended size: 1170x2532px (iPhone 14 Pro Max)

2. **QR Code**
   - Place in: `public/qr-code.png`
   - Generate from your App Store URL
   - Recommended size: 500x500px minimum

3. **App Icon**
   - Place in: `public/images/app-icon.png`
   - Recommended size: 512x512px

4. **App Store Badge** (optional)
   - Place in: `public/images/app-store-badge.svg`
   - Download from [Apple Marketing Resources](https://developer.apple.com/app-store/marketing/guidelines/)

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/smartrep/id[YOUR_APP_ID]
```

### Update Placeholders

1. Replace `[YOUR_APP_ID]` in `DownloadButton.tsx` with your actual App Store ID
2. Update contact emails in Privacy and Terms pages
3. Add jurisdiction info in Terms page (section 11)
4. Uncomment image components in `PhoneMockup.tsx` and `QRCode.tsx` once you have assets
5. **Update app-ads.txt**: Replace `pub-0000000000000000` in `public/app-ads.txt` with your actual AdMob Publisher ID
   - Get your personalized code snippet from: https://admob.google.com > Apps > app-ads.txt
   - The file will be accessible at: https://mysmartrep.com/app-ads.txt

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 📦 Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)

## 📄 License

© 2024 SmartRep. All rights reserved.

