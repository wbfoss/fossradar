# Radar - Open Source Directory Platform

> **Build beautiful, Git-powered directories for projects, startups, tools, or any curated collection**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8)](https://tailwindcss.com/)

**Radar** is a modern, production-ready platform for creating and managing curated directories of projects, websites, startups, or any collection you want to showcase. Built with Next.js 16, it offers a complete solution with search, filtering, auto-validation, GitHub integration, and beautiful UI out of the box.

**Live Reference**: [fossradar.dev](https://fossradar.dev) - India's open source project directory powered by Radar

---

## 🎯 Use Cases

**What can you build with Radar?**

- 🚀 **Startup Directories** - Showcase startups, SaaS products, or indie projects
- 🛠️ **Tool Catalogs** - Curate developer tools, AI apps, or productivity software
- 📦 **Open Source Projects** - Directory of libraries, frameworks, or packages
- 🌍 **Regional Showcases** - Projects from specific countries, cities, or communities
- 🏢 **Company Portfolios** - Internal tool catalogs or client project showcases
- 🎓 **Educational Resources** - Course directories, learning platforms, or tutorials
- 🎨 **Creative Works** - Portfolio sites, design systems, or template libraries

**Examples of directories you can build:**
- "Awesome Developer Tools from Europe"
- "YC-Funded Startups Directory"
- "Open Source AI Projects"
- "Indie Maker Showcase"
- "Government Tech Projects"

---

## ✨ Why Radar?

### Complete Directory Solution Out of the Box

**No database setup, no complex backends** - just Git, TOML files, and modern web tech.

#### For Directory Visitors
- 🔍 **Smart Fuzzy Search** - Search across names, descriptions, and tags
- 🏷️ **Multi-Category Filtering** - Filter by technology, tags, or custom fields
- 🗺️ **Geographic Visualization** - Interactive maps showing location-based distribution
- 📱 **Responsive Design** - Perfect on mobile, tablet, and desktop
- 🌙 **Dark Mode** - System-aware, beautiful dark theme
- 🎨 **Dynamic Social Cards** - Auto-generated OpenGraph images (1200×630)
- 🔄 **Social Sharing** - Share on Twitter, LinkedIn, Facebook, email

#### For Content Submitters
- 🚀 **No-Code Submission Form** - 5-step guided form with auto-fill
- 🤖 **Auto PR Creation** - GitHub OAuth to create pull requests automatically
- ✅ **Real-Time Validation** - Helpful error messages as you type
- 🔍 **Duplicate Detection** - Prevents resubmissions
- 🏷️ **Smart Suggestions** - Auto-suggests tags from GitHub topics
- 🖼️ **Logo Upload** - Drag-and-drop file upload in the form
- 📝 **TOML Preview** - See exactly what will be created

#### For Directory Maintainers
- **Git as Database** - All data version-controlled in TOML files
- **Auto-Validation CI** - Every submission automatically validated
- **Auto-Enrichment** - Nightly updates for stars, contributors, metadata
- **GitHub Integration** - OAuth, API, webhooks built-in
- **SEO Optimized** - Sitemaps, structured data, meta tags
- **Zero Runtime DB** - Fast, simple, auditable
- **One-Click Deploy** - Deploy to Vercel in minutes

---

## 🚀 Quick Start

### Deploy Your Own Directory in 5 Minutes

**1. Fork this repository**

Click the "Fork" button at the top of this page

**2. Deploy to Vercel**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wbfoss/fossradar)

Or manually:
- Go to [vercel.com/new](https://vercel.com/new)
- Import your forked repository
- Vercel will auto-detect Next.js and configure everything

**3. Configure Environment Variables** (Optional for enhanced features)

Add these in Vercel dashboard → Settings → Environment Variables. See [`.env.example`](./.env.example) for the full list:

```bash
# Site URL (for sitemaps)
SITE_URL=https://yourdomain.com

# GitHub Token (automatically provided in CI - no setup needed!)
# Only needed for local testing of validation/enrichment
GITHUB_TOKEN=ghp_your_token_here
```

**4. Customize Your Directory**

Edit configuration files to match your use case:
- `data/projects/` - Add your initial entries (TOML files)
- `data/tags.toml` - Define allowed categories/tags
- `app/layout.tsx` - Update site name, description, metadata
- `public/logos/` - Add project/company logos
- Customize colors, fonts, and styling in `tailwind.config.ts`

**5. Push & Deploy**

```bash
git add .
git commit -m "Customize directory"
git push origin main
```

Vercel will auto-deploy your changes!

---

## 🏗️ Local Development

### Prerequisites
- Node.js 18+ (20+ recommended)
- pnpm (or npm/yarn)

### Setup

```bash
# Clone your forked repository
git clone https://github.com/YOUR_USERNAME/radar.git
cd radar

# Install dependencies
pnpm install

# Copy environment template (optional for local dev)
cp .env.example .env

# Run development server
pnpm dev
```

Visit http://localhost:3000

**Note**: GitHub token is NOT required for UI development. Only needed if you want to test validation/enrichment scripts locally.

### Available Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Start production server

# Data Management
pnpm validate         # Validate all TOML files
pnpm run build:index  # Generate search index
pnpm enrich           # Update metadata (requires GITHUB_TOKEN)

# Code Quality
pnpm lint             # Run ESLint
```

---

## 📝 Adding Entries to Your Directory

### Submission Workflow

Visit `/submit` on your deployed site for a step-by-step submission checklist, then open a pull request with your project TOML.

**Step 1: Create TOML file**

Create `data/projects/your-entry-slug.toml`:

```toml
slug = "your-project"
name = "Your Awesome Project"
short_desc = "Brief description (10-160 characters)"
repo = "https://github.com/username/project"
license = "MIT"
added_at = "2025-11-12"

website = "https://yourproject.com"
logo = "/logos/your-project.svg"
primary_lang = "TypeScript"
category = "web-applications"  # Required: Choose from data/categories.json
tags = ["web", "tools", "typescript"]
looking_for_contributors = true

# Customize these fields for your use case
location_city = "San Francisco"
location_indian_state = "California"  # Rename this field as needed
```

**Step 2: Add logo (optional)**

Place logo file (SVG/PNG, max 200KB) in `public/logos/`

**Step 3: Commit and create PR**

```bash
git add data/projects/your-entry.toml public/logos/your-logo.svg
git commit -m "Add Your Project"
git push origin main
```

---

## 🎨 Customization Guide

### Branding & Metadata

**Site Information** (`app/layout.tsx`)
```typescript
export const metadata: Metadata = {
  title: "Your Directory Name",
  description: "Your directory description",
  // Update OpenGraph, Twitter cards, etc.
}
```

**Visual Identity** (`tailwind.config.ts`)
- Update colors, fonts, spacing
- Customize theme (light/dark modes)

### Data Schema

**Categories** (`data/categories.json`) - **Main classification**
```json
{
  "categories": {
    "web-applications": {
      "label": "Web Applications",
      "description": "Full-stack web apps, SaaS platforms",
      "icon": "globe"
    }
  }
}
```
Each entry must select exactly **one** category. Customize for your directory theme:
- **Open Source Projects**: developer-tools, libraries-frameworks, ai-ml, etc.
- **Privacy Tools**: security-privacy, networking (VPN), system-utilities
- **Startup Directory**: web-applications, mobile-applications, automation-productivity
- **Dev Tools Catalog**: developer-tools, infrastructure-devops, content-media

**Tags** (`data/tags.toml`) - **Secondary attributes**
```toml
tags = ["web", "nextjs", "typescript", "cms"]
```
Tags provide fine-grained filtering within categories (1-10 tags per entry).

**Entry Schema** (`lib/schema.ts`)
- Customize required/optional fields
- Add custom validation rules
- Modify data structure

### Features Toggle

**Enable/Disable Features**:
- Geographic radar (`app/radar/`)
- Auto-enrichment (`.github/workflows/enrich.yml`)
- Submission guide (`app/submit/`)

---

## 🏗️ Architecture

### Tech Stack

- **Framework**: Next.js 16 (App Router, React 19, TypeScript 5.6)
- **Styling**: Tailwind CSS 4 (latest major version)
- **Fonts**: VT323 (logo), Share Tech (headings), Inter (body)
- **Search**: Fuse.js (client-side fuzzy search)
- **Validation**: Zod schemas
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended) or any Node.js host
- **Data**: TOML files in Git (no database!)

### Project Structure

```
radar/
├── app/                        # Next.js pages and routes
│   ├── page.tsx               # Homepage with search/filter
│   ├── about/                 # About page
│   ├── radar/                 # Geographic visualization
│   ├── projects/[slug]/       # Individual project pages
│   ├── submit/                # Submission guide
│   └── api/                   # API routes
├── components/                # React components
├── data/
│   ├── projects/              # Project TOML files
│   ├── tags.toml              # Allowed tags
│   └── licenses-osi.json      # OSI licenses
├── lib/                       # Utilities and helpers
├── scripts/                   # Build and validation
└── public/
    ├── logos/                 # Project logos
    ├── cache/                 # Cached metadata
    └── index.json             # Search index
```

### How It Works

1. **Data Layer**: All entries stored as TOML files in `data/projects/`
2. **Build Time**: TOML parsed, validated, and compiled into search index
3. **Runtime**: Static pages generated, search runs client-side
4. **Auto-Update**: GitHub Actions enriches data nightly (stars, contributors)
5. **SEO**: Sitemap auto-generated, search engines auto-pinged

---

## 📊 Auto-Enrichment & Updates

### Nightly Data Updates

GitHub Actions automatically:
- Updates star counts from GitHub API
- Refreshes contributor lists
- Updates project metadata
- Regenerates search index
- Pings search engines (Google, Bing)

**Configuration**: `.github/workflows/enrich.yml`

### Manual Enrichment

```bash
# Requires GITHUB_TOKEN in .env
pnpm enrich
```

---

## 🗺️ Geographic Visualization

Optional geographic dashboard showing:
- State/region-wise distribution
- City-based project clustering
- Interactive charts and maps

**Customize**: Edit `app/radar/` components to match your use case (can be country, continent, or any geographic grouping)

---

## 🌟 Production Examples

**FOSSRadar.dev** ([fossradar.dev](https://fossradar.dev))
- India's open source project directory
- 50+ projects and growing
- Geographic distribution across Indian states
- Auto-verification for project owners

**Build your own!** Fork this repo and create:
- European startup directory
- AI tools catalog
- Regional developer communities
- Industry-specific project showcases

---

## 🤝 Contributing

We welcome contributions to the Radar platform itself!

### Ways to Contribute

- 🐛 **Report Bugs** - Found an issue? Open a bug report
- ✨ **Suggest Features** - Ideas for improvements
- 📝 **Improve Docs** - Clarify instructions, add examples
- 💻 **Submit PRs** - Fix bugs or add features
- 🎨 **Design Improvements** - UI/UX enhancements

See **[CONTRIBUTING.md](./CONTRIBUTING.md)** for detailed guidelines.

---

## 📋 Validation & CI

### Automatic Validation

Every PR automatically validates:
- TOML file format and schema
- Required fields presence
- Tag/category allowlist compliance
- License validity (OSI-approved)
- Repository accessibility
- Logo file size (<200KB)
- Duplicate detection

**Configuration**: `.github/workflows/validate.yml`

### Manual Validation

```bash
pnpm validate
```

---

## 🔐 Security

**Reporting vulnerabilities**: See [SECURITY.md](./SECURITY.md)

**Best practices implemented**:
- No runtime database (attack surface minimized)
- OAuth scopes limited to minimum required
- Environment variables for sensitive data
- Input validation with Zod schemas
- CSP headers (configurable)

---

## 📜 License

[MIT License](./LICENSE) - Free to use for commercial and non-commercial projects.

By contributing, you agree your contributions will be licensed under MIT.

---

## 🙏 Credits

**Built by [wbfoss](https://wbfoss.org)** - West Bengal Free and Open Source Software community

**Powered by**:
- Next.js, React, TypeScript
- Tailwind CSS
- Vercel
- GitHub API

**Special Thanks**:
- All contributors to the Radar platform
- FOSSRadar.dev community for testing and feedback
- Open source community for inspiration

---

## 🌟 Star This Repo

If you find Radar useful, give us a star! It helps others discover this platform.

[![GitHub stars](https://img.shields.io/github/stars/wbfoss/fossradar?style=social)](https://github.com/wbfoss/fossradar/stargazers)

---

## 🚀 Ready to Deploy?

1. **Fork this repo**
2. **Deploy to Vercel** (1-click)
3. **Customize branding**
4. **Add your entries**
5. **Share with your community**

**Questions?** Open an issue or discussion!

---

<div align="center">

**Build your directory today with Radar**

[Deploy Now](https://vercel.com/new/clone?repository-url=https://github.com/wbfoss/fossradar) • [View Demo](https://fossradar.dev) • [Documentation](./docs/) • [Community](https://github.com/wbfoss/fossradar/discussions)

**Made with ❤️ for the open source community**

</div>
