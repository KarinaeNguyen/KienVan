# KienVan Website

[![Deploy Status](https://github.com/KarinaeNguyen/KienVan/actions/workflows/deploy.yml/badge.svg)](https://github.com/KarinaeNguyen/KienVan/actions/workflows/deploy.yml)

🌐 **Live Website**: [https://karinaenguyen.github.io/KienVan/](https://karinaenguyen.github.io/KienVan/)

## Project Overview

A modern website built with Next.js 14, React 18, and Tailwind CSS, deployed automatically to GitHub Pages.

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Authentication**: next-auth
- **Deployment**: GitHub Pages (via GitHub Actions)

## 🚀 Deployment

### Automatic Deployment

This website **automatically deploys** to GitHub Pages whenever changes are pushed to the `main` branch:

1. **Push to `main`** → Triggers GitHub Actions workflow
2. **Build** → Next.js builds the static site
3. **Deploy** → Automatically deploys to GitHub Pages
4. **Live in ~1-2 minutes** → Your changes are live!

### Viewing Deployment Status

**Option 1: Check the Badge** (above) - Green = deployed successfully

**Option 2: View Workflow Runs**
- Go to: [Actions Tab](https://github.com/KarinaeNguyen/KienVan/actions/workflows/deploy.yml)
- Look for the latest run with ✅ (green checkmark)

**Option 3: Check Deployment URL**
- Visit: [https://karinaenguyen.github.io/KienVan/](https://karinaenguyen.github.io/KienVan/)
- Use hard refresh (Ctrl+F5 or Cmd+Shift+R) to bypass browser cache

### 💡 Common Issues

**"My changes aren't showing up!"**

This is usually due to **browser caching**. Try:
1. **Hard refresh**: Press `Ctrl + F5` (Windows/Linux) or `Cmd + Shift + R` (Mac)
2. **Clear cache**: Open DevTools (F12) → Right-click refresh button → "Empty Cache and Hard Reload"
3. **Incognito mode**: Open the site in a private/incognito window
4. **Check deployment**: Verify the GitHub Actions workflow completed successfully

**"How do I know what's deployed?"**

The deployed version matches the latest commit on the `main` branch:
- Check commit SHA in [Actions logs](https://github.com/KarinaeNguyen/KienVan/actions)
- Compare with [latest commit on main](https://github.com/KarinaeNguyen/KienVan/commits/main)

## 🛠️ Development

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Building for Production

```bash
# Build the static site
npm run build

# Output will be in ./out directory
```

## 📄 Site Structure

- **/** - Home page
- **/documentation** - Documentation page
- **/signin** - Sign in page
- **/signup** - Sign up page

## 📝 Notes

- The site uses static export (`output: "export"`) for GitHub Pages compatibility
- Base path is configured as `/KienVan` in production
- Images are unoptimized for static export compatibility

## 🔧 Configuration

Key files:
- `next.config.mjs` - Next.js configuration with GitHub Pages settings
- `.github/workflows/deploy.yml` - Deployment workflow
- `package.json` - Dependencies and scripts
