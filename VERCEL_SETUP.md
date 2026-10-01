# Vercel Production Setup Guide

This document outlines the environment variables and configuration for deploying FOSSRadar.dev to Vercel.

## Environment Variables

See [`.env.example`](./.env.example) for the full template. Most variables are optional for a basic deploy.

### 1. Site URL (Recommended)

```env
SITE_URL=https://fossradar.dev
```

Used for sitemaps and absolute URLs.

### 2. GitHub API (Optional on Vercel)

```env
GITHUB_TOKEN=your_github_personal_access_token
```

**Note:** This is **NOT required** on Vercel for enrichment because:
- The enrichment script runs via GitHub Actions, not on Vercel
- GitHub Actions provides `GITHUB_TOKEN` automatically

Only needed for local testing of validation/enrichment scripts.

### 3. Admin API Key (Optional - for sitemap ping)

```env
ADMIN_API_KEY=your_random_admin_key
```

**Generate:**
```bash
openssl rand -base64 32
```

This secures the `/api/ping-sitemap` endpoint.

### 4. Optional Integrations

Additional optional keys (CounterAPI, Vercel Blob, etc.) are documented in [`.env.example`](./.env.example).

## Vercel Configuration Steps

### Step 1: Import and Deploy

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `wbfoss/fossradar` (or your fork)
3. Framework Preset: **Next.js**
4. Build Command: `pnpm build`
5. Node.js Version: **20.x** or higher

### Step 2: Add Environment Variables

1. Go to your Vercel project dashboard
2. Navigate to **Settings → Environment Variables**
3. Add at least:

| Variable | Value | Environment |
|----------|-------|-------------|
| `SITE_URL` | `https://fossradar.dev` | Production |
| `ADMIN_API_KEY` | Generate with openssl (optional) | Production |

### Step 3: Redeploy

After adding environment variables:
1. Go to **Deployments** tab
2. Redeploy the latest deployment, or push a new commit

### Step 4: Verify

1. Visit `https://fossradar.dev`
2. Confirm the homepage loads and search works
3. Open a project detail page and check logos/links

## Common Issues

### Issue: Build fails on Vercel

**Cause:** Wrong package manager or Node version

**Solution:**
1. Ensure the project uses **pnpm** (`pnpm-lock.yaml`)
2. Set Node.js to **20.x** or higher
3. Use build command `pnpm build`

### Issue: Sitemap or absolute URLs look wrong

**Cause:** Missing or incorrect `SITE_URL`

**Solution:**
1. Set `SITE_URL=https://fossradar.dev` (no trailing slash)
2. Redeploy

### Issue: `/api/ping-sitemap` returns unauthorized

**Cause:** Missing or incorrect `ADMIN_API_KEY`

**Solution:**
1. Generate a key: `openssl rand -base64 32`
2. Add it to Vercel environment variables
3. Redeploy and call the endpoint with the key

## Security Notes

1. **Never commit** secrets to git
2. Rotate secrets periodically
3. Keep `ADMIN_API_KEY` secure and unique

## Support

If errors persist after configuration:
1. Check Vercel function and build logs
2. Verify environment variables match [`.env.example`](./.env.example)
3. Confirm the deployment used `pnpm build`
