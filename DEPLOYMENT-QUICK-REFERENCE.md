# Quick Reference: Website Deployment

## 🌐 Live Website
**https://karinaenguyen.github.io/KienVan/**

## ✅ Is My Site Deployed?

**3 Quick Checks:**

1. **Badge in README** - Green = Deployed ✅
2. **[Actions Tab](https://github.com/KarinaeNguyen/KienVan/actions)** - Latest run has ✅
3. **Visit Website** - Use hard refresh (`Ctrl+F5` or `Cmd+Shift+R`)

## 🔄 Deployment Process

```
Push to main → Auto-deploys in ~1-2 minutes → Live
```

## 🚨 Can't See Changes?

**Most Common Cause: Browser Cache**

### Quick Fixes (Try in order):

1. **Hard Refresh**
   - Windows/Linux: `Ctrl + F5`
   - Mac: `Cmd + Shift + R`

2. **Clear Cache**
   - Open DevTools (`F12`)
   - Right-click refresh → "Empty Cache and Hard Reload"

3. **Incognito Mode**
   - Open site in private/incognito window

4. **Verify Deployment**
   - Check [Actions tab](https://github.com/KarinaeNguyen/KienVan/actions)
   - Ensure latest run shows ✅ (green checkmark)

## 📊 Check Deployment Status

### Quick Check:
- Go to: https://github.com/KarinaeNguyen/KienVan/actions
- Look for ✅ on latest "Deploy Next.js to GitHub Pages"

### Detailed Check:
1. Click latest workflow run
2. View "build" and "deploy" jobs
3. Check logs for deployment URL
4. Compare commit SHA with your latest commit

## 🎯 Key Points

✅ **Deployment is AUTOMATIC** - No manual steps needed
✅ **Deploys on push to `main`** - Every time
✅ **Takes ~1-2 minutes** - Be patient
✅ **Browser cache is the #1 issue** - Use hard refresh

## 🔗 Important Links

- **Live Site**: https://karinaenguyen.github.io/KienVan/
- **Actions**: https://github.com/KarinaeNguyen/KienVan/actions
- **Workflow**: https://github.com/KarinaeNguyen/KienVan/actions/workflows/deploy.yml
- **Commits**: https://github.com/KarinaeNguyen/KienVan/commits/main

## 📖 More Help?

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed guide.

---

**TL;DR**: Your site auto-deploys when you push to `main`. If you can't see changes, use hard refresh (`Ctrl+F5`).
