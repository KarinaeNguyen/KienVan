# Deployment Guide

## Understanding GitHub Pages Deployment

This project uses **GitHub Actions** to automatically build and deploy the website to **GitHub Pages**. Here's everything you need to know:

## 🎯 How It Works

### The Deployment Flow

```
Code Changes → Push to main → GitHub Actions → Build → Deploy → Live Website
     ↓              ↓              ↓            ↓        ↓           ↓
  Local dev    git push       Workflow     Next.js  Pages API   https://...
```

### Timeline

- **Trigger**: Immediately when code is pushed to `main`
- **Build time**: ~30-40 seconds
- **Deploy time**: ~5-10 seconds
- **Total**: Your changes are live in **~1-2 minutes**

## 📊 Checking Deployment Status

### Method 1: GitHub Actions Tab

1. Go to: https://github.com/KarinaeNguyen/KienVan/actions
2. Look for "Deploy Next.js to GitHub Pages" workflow
3. Check the latest run:
   - ✅ Green checkmark = Successfully deployed
   - ⏳ Yellow dot = Currently deploying
   - ❌ Red X = Deployment failed

### Method 2: Workflow Badge

The README has a badge that shows real-time deployment status:
- ![Green badge](https://img.shields.io/badge/build-passing-brightgreen) = Latest deployment successful
- ![Red badge](https://img.shields.io/badge/build-failing-red) = Deployment failed

### Method 3: Check the Live Site

Visit: https://karinaenguyen.github.io/KienVan/

**Important**: Use a hard refresh to see latest changes:
- **Windows/Linux**: `Ctrl + F5`
- **Mac**: `Cmd + Shift + R`
- **Alternative**: Open in incognito/private mode

## 🔍 Verifying What's Deployed

### Check Deployed Version

1. Go to the [Actions page](https://github.com/KarinaeNguyen/KienVan/actions/workflows/deploy.yml)
2. Click on the latest successful run
3. Look for the commit SHA (e.g., `c341826`)
4. Compare with [commits on main](https://github.com/KarinaeNguyen/KienVan/commits/main)

### View Deployment Logs

1. Go to: https://github.com/KarinaeNguyen/KienVan/actions
2. Click on the latest workflow run
3. Click on "build" or "deploy" job
4. Review the logs to see:
   - What files were built
   - The deployment URL
   - Any errors or warnings

## ⚠️ Common Issues and Solutions

### Issue 1: "My changes aren't showing up!"

**Cause**: Browser is showing cached version

**Solutions**:
1. Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache:
   - Open DevTools (`F12`)
   - Right-click refresh button
   - Select "Empty Cache and Hard Reload"
3. Use incognito/private browsing mode
4. Try a different browser

### Issue 2: "How do I know if deployment worked?"

**Solution**: Check multiple indicators:
1. ✅ Green status in Actions tab
2. ✅ Badge shows "passing" in README
3. ✅ Commit SHA in Actions matches latest commit
4. ✅ Website loads without errors

### Issue 3: "Workflow failed!"

**Solution**: Check the error logs:
1. Go to Actions tab
2. Click the failed run (red X)
3. Click on the failed job
4. Read the error message
5. Common fixes:
   - Build errors: Fix TypeScript/ESLint errors in code
   - Dependencies: Run `npm install` and commit package-lock.json
   - Permissions: Check that Pages is enabled in repository settings

### Issue 4: "Changes deployed but still seeing old version"

**Possible causes**:
1. **Browser cache** (most common) - Use hard refresh
2. **CDN cache** - Wait 2-3 minutes for CDN to update
3. **Wrong branch** - Ensure changes were pushed to `main` branch
4. **Build failed** - Check Actions tab for errors

## 🔧 Deployment Configuration

### GitHub Pages Settings

The repository should have GitHub Pages configured to use GitHub Actions:

1. Go to: Repository Settings → Pages
2. **Source** should be set to: "GitHub Actions"
3. **Branch** is managed by the workflow (not manually set)

### Workflow Configuration

The workflow is defined in `.github/workflows/deploy.yml`:

- **Trigger**: Push to `main` branch or manual workflow dispatch
- **Build**: Uses Node.js 20, runs `npm ci` and `npm run build`
- **Output**: Static files in `./out` directory
- **Deploy**: Uses `actions/deploy-pages@v4` action

### Next.js Configuration

Key settings in `next.config.mjs`:

```javascript
{
  basePath: "/KienVan",        // Repository name
  assetPrefix: "/KienVan/",    // For assets
  output: "export",            // Static export
  images: { unoptimized: true } // Required for static export
}
```

## 📝 Best Practices

### Before Pushing to Main

1. ✅ Test locally: `npm run build` should succeed
2. ✅ Check for errors: `npm run lint`
3. ✅ Review changes: `git diff`
4. ✅ Commit with clear message: `git commit -m "Description"`

### After Pushing to Main

1. ✅ Watch Actions tab for ~1 minute
2. ✅ Verify deployment completes successfully
3. ✅ Visit website with hard refresh
4. ✅ Test key functionality

### Troubleshooting Workflow

```
Changes not visible?
    ↓
Check Actions tab - Failed?
    ↓                    ↓
   Yes                  No
    ↓                    ↓
Fix errors          Hard refresh browser
Commit and push          ↓
    ↓              Still not visible?
Monitor Actions          ↓
                   Clear cache/incognito
                         ↓
                   Wait 2-3 minutes
```

## 🚀 Manual Deployment

If needed, you can manually trigger a deployment:

1. Go to: [Actions Tab](https://github.com/KarinaeNguyen/KienVan/actions/workflows/deploy.yml)
2. Click "Run workflow" button
3. Select `main` branch
4. Click "Run workflow"

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

## 🆘 Still Having Issues?

If you're still experiencing deployment problems:

1. Check this guide thoroughly
2. Review the workflow logs in Actions tab
3. Ensure GitHub Pages is enabled in repository settings
4. Verify the workflow file exists and is valid
5. Check that the `main` branch has the latest changes

The deployment system is working correctly - most issues are due to browser caching or configuration misunderstandings.
