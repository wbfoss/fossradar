# Contributing to FOSSRadar.dev

Thank you for your interest in contributing to FOSSRadar.dev! This document provides guidelines and instructions for contributing.

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Ways to Contribute

### 1. Add Your Project

Projects are added via a Git-based pull request. Start with the guided checklist on [fossradar.dev/submit](https://fossradar.dev/submit).

**Prerequisites:**
- Your project must be open source with an OSI-approved license
- Repository must be publicly accessible on GitHub
- Repository must have the topic `fossradar` (case-insensitive)
- Project has a connection to India (founders, organization, community, or contributors)

**Steps:**
1. Add the `fossradar` topic to your GitHub repository
2. Fork this repository
3. Create a TOML file in `data/projects/` with all required fields
4. Add your logo to `public/logos/`
5. Commit and push your changes
6. Create a Pull Request

Our CI will automatically validate your submission and verify your affiliation with the project.

See the [README](./README.md) and [PR Workflow](./docs/PR_WORKFLOW.md) for detailed submission instructions.

### 2. Improve Documentation

- Fix typos or unclear instructions
- Add examples or clarifications
- Translate documentation (future)

### 3. Report Bugs

Found a bug? Please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment (browser, OS, etc.)

### 4. Suggest Features

Have an idea? Open an issue with:
- Clear use case
- Proposed solution or approach
- Alternative solutions considered
- Any potential drawbacks

### 5. Code Contributions

Want to improve FOSSRadar.dev itself? We welcome contributions to the platform!

#### Setup Development Environment

```bash
# Fork and clone
git clone https://github.com/your-github-username/fossradar.git
cd fossradar

# Install dependencies
pnpm install

# Copy environment file
cp .env.example .env
# Add your GitHub token for API access

# Start development server
pnpm dev
```

Visit http://localhost:3000 to see your changes.

See [docs/QUICK_START.md](./docs/QUICK_START.md) for detailed setup instructions.

#### Development Workflow

1. Create a branch from `main`:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes:
- Follow existing code style
- Write clear, concise commits
- Add tests if applicable

3. Test locally:
```bash
pnpm run validate
pnpm run build
pnpm run lint
```

4. Commit your changes:
```bash
git add .
git commit -m "feat: add amazing feature"
```

Use conventional commits:
- `feat:` - new feature
- `fix:` - bug fix
- `docs:` - documentation changes
- `style:` - code style changes (formatting, etc.)
- `refactor:` - code refactoring
- `test:` - adding tests
- `chore:` - maintenance tasks

5. Push and create PR:
```bash
git push origin feature/your-feature-name

# Go to your fork on GitHub and create a Pull Request
```

Then open a pull request on GitHub.

## TOML File Guidelines

### Required Fields

```toml
slug = "project-slug"           # Lowercase, alphanumeric + hyphens
name = "Project Name"           # Display name (2-80 chars)
short_desc = "Description"      # 10-160 characters
repo = "https://github.com/..." # Valid GitHub URL
license = "MIT"                 # OSI-approved SPDX ID
added_at = "2025-11-09"        # YYYY-MM-DD format
tags = ["tag1", "tag2"]        # From tags.toml allowlist
```

### Optional Fields

```toml
website = "https://..."         # Project website
logo = "/logos/project.svg"     # Logo under /public/logos/
primary_lang = "TypeScript"     # Programming language
looking_for_contributors = true # Boolean
```

### Validation Rules

1. **Slug**:
   - Must match filename (e.g., `my-project.toml` → `slug = "my-project"`)
   - Only lowercase letters, numbers, hyphens
   - Not a reserved word (new, admin, api, etc.)
   - Unique across all projects

2. **License**:
   - Must be in `data/licenses-osi.json`
   - Use SPDX identifier (MIT, Apache-2.0, GPL-3.0, etc.)

3. **Tags**:
   - Must be from `data/tags.toml` allowlist
   - 1-10 tags maximum
   - Use comma-separated array: `["tag1", "tag2"]`

4. **Logo**:
   - Must be under `/public/logos/`
   - Formats: SVG (preferred), PNG, JPG, WEBP
   - Maximum size: 200 KB
   - No remote URLs

5. **Repository**:
   - Must be a public GitHub repository
   - Must have `fossradar` topic
   - Must be accessible at time of validation

## Tag Policy

To add a new tag:

1. Open an issue proposing the tag with justification
2. If approved, submit PR adding to `data/tags.toml`
3. Keep tags general and reusable

Current tag categories:
- Development & Tools (cli, devtools, ide, etc.)
- Web & Mobile (web, frontend, backend, etc.)
- Data & ML (data, ml, ai, etc.)
- Infrastructure (cloud, devops, kubernetes, etc.)
- Domain Specific (security, video, blockchain, etc.)
- Languages (python, javascript, rust, etc.)

## Review Process

### For Project Additions

1. **Automated Checks** (CI):
   - TOML syntax validation
   - Schema validation (Zod)
   - Duplicate slug/repo check
   - Tag/license allowlist verification
   - GitHub topic verification

2. **Manual Review**:
   - Project relevance to West Bengal FOSS
   - Quality of description
   - Appropriateness of tags

3. **Merge**:
   - Typically within 2-3 business days
   - Auto-deploy to production

### For Code Changes

1. CI must pass (lint, tests, build)
2. At least one maintainer approval required
3. Changes should align with project goals
4. Breaking changes need discussion

## Best Practices

### Code Style

- Use TypeScript strict mode
- Follow existing formatting (Prettier will auto-format)
- Write meaningful variable/function names
- Add comments for complex logic
- Keep functions small and focused

### Component Guidelines

- Use server components by default
- Client components only when needed ("use client")
- Extract reusable components
- Props should be typed with TypeScript
- Use Tailwind classes, avoid inline styles

### Accessibility

- Include ARIA labels where appropriate
- Ensure keyboard navigation works
- Test with screen readers
- Maintain color contrast ratios (WCAG AA)
- Use semantic HTML

### Performance

- Optimize images (use Next/Image)
- Minimize bundle size
- Avoid unnecessary client-side JavaScript
- Use ISR/SSG where possible

## Questions?

- Open a [GitHub Discussion](https://github.com/wbfoss/fossradar/discussions)
- Ask in issue comments
- Email: community@wbfoss.org

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
