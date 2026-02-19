# Vercel Deployment Guide

## Quick Deploy

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI (if not already installed):
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from your project directory:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** (for first deployment)
   - What's your project's name? Enter a name
   - In which directory is your code located? **./** (press Enter)

5. For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository (GitHub, GitLab, or Bitbucket)
4. Configure project:
   - **Framework Preset**: Other
   - **Root Directory**: ./
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)
5. Click "Deploy"

### Option 3: Deploy via GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will automatically detect the configuration from `vercel.json`
6. Click "Deploy"

## Configuration Files

### vercel.json
This file handles:
- **Routing**: Maps clean URLs to HTML files
- **SPA Support**: Redirects all routes to appropriate pages
- **Caching**: Optimizes static assets
- **Clean URLs**: Removes .html extensions

### .vercelignore
Excludes unnecessary files from deployment:
- node_modules
- .git
- .vscode
- Documentation files (except README.md)

## URL Structure

After deployment, your URLs will be clean:
- `https://your-domain.vercel.app/` → index.html
- `https://your-domain.vercel.app/about` → about.html
- `https://your-domain.vercel.app/programs` → programs.html
- `https://your-domain.vercel.app/contact` → contact.html

Both `/about` and `/about.html` will work correctly.

## Custom Domain

To add a custom domain:

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your domain
4. Update your DNS records as instructed by Vercel
5. Wait for DNS propagation (usually 5-30 minutes)

## Environment Variables

If you need environment variables:

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Environment Variables"
3. Add your variables
4. Redeploy for changes to take effect

## Troubleshooting

### 404 Errors
- ✅ Fixed by `vercel.json` configuration
- The router now handles all routes correctly
- Both clean URLs and .html URLs work

### Page Not Loading
- Check browser console for errors
- Ensure all files are committed to Git
- Verify `vercel.json` is in the root directory

### Routing Issues
- Clear browser cache
- Check that `router.js` is loaded
- Verify all HTML files are in the root directory

### Build Fails
- This is a static site, no build step required
- If issues persist, check Vercel deployment logs

## Performance Optimization

The deployment is optimized with:
- ✅ Static file caching (1 year)
- ✅ HTML caching (no-cache for fresh content)
- ✅ SPA routing (no full page reloads)
- ✅ Compressed assets
- ✅ CDN distribution

## Monitoring

After deployment:
1. Check Vercel Analytics (if enabled)
2. Monitor Core Web Vitals
3. Test all pages and navigation
4. Verify language toggle works
5. Test on mobile devices

## Redeployment

To redeploy after changes:

**Via CLI:**
```bash
vercel --prod
```

**Via Git:**
- Just push to your main branch
- Vercel auto-deploys on push

**Via Dashboard:**
- Go to Deployments
- Click "Redeploy"

## Support

If you encounter issues:
1. Check [Vercel Documentation](https://vercel.com/docs)
2. Review deployment logs in Vercel Dashboard
3. Check browser console for client-side errors
4. Verify `vercel.json` configuration

## Preview Deployments

Every Git push creates a preview deployment:
- Unique URL for testing
- Doesn't affect production
- Perfect for testing changes

## Production Checklist

Before going live:
- [ ] Test all pages load correctly
- [ ] Verify navigation works (no 404s)
- [ ] Check language toggle on all pages
- [ ] Test forms submission
- [ ] Verify mobile responsiveness
- [ ] Test browser back/forward buttons
- [ ] Check all external links
- [ ] Update phone numbers and email
- [ ] Add Google Analytics (if needed)
- [ ] Set up custom domain
- [ ] Test on multiple browsers
- [ ] Check page load speed

## Success!

Your website is now deployed with:
- ⚡ Lightning-fast SPA navigation
- 🌐 Clean, SEO-friendly URLs
- 🔄 No page refresh on navigation
- 🌍 Global CDN distribution
- 📱 Mobile-optimized
- 🔒 HTTPS by default
