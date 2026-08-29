# PR Workflow with Auto-Verification

## Overview

FOSSRadar.dev uses a **Git-based pull request workflow** for project submissions.

1. Follow the checklist on [fossradar.dev/submit](https://fossradar.dev/submit)
2. Open a pull request with your project TOML (and optional logo)
3. CI validates the submission and checks your affiliation with the project

## Key Features

### 🚀 Git-Based Submissions
- Full control via fork → branch → PR
- Transparent Git history for every listing
- Community review before merge

### ✅ Auto-Verification
When you submit a project via PR, our CI **automatically checks** if you're affiliated with the project repository:

1. **Repository Owner**: You own the repository
2. **Organization Member**: You're a member of the organization that owns the repo
3. **Collaborator**: You have write access to the repository
4. **Contributor**: You have commits in the repository

If **any** of the above is true → **Verified ✓**

---

## How It Works

### Manual PR Workflow

#### For Project Owners

#### Step 1: Prepare Your Repository
```bash
# Add the fossradar topic to your GitHub repository
# Go to your repository on GitHub
# Click About → Settings → Add topic: fossradar
```

#### Step 2: Fork FOSSRadar.dev
```bash
# Fork the repository on GitHub
https://github.com/wbfoss/fossradar

# Clone your fork
git clone https://github.com/your-github-username/fossradar.git
cd fossradar
```

#### Step 3: Create Your Project File
```bash
# Create a new TOML file
cat > data/projects/my-awesome-project.toml << 'EOF'
slug = "my-awesome-project"
name = "My Awesome Project"
short_desc = "A brief description of what my project does (10-160 chars)"
repo = "https://github.com/yourusername/yourproject"
license = "MIT"
added_at = "2025-11-09"

primary_lang = "TypeScript"
tags = ["web", "typescript", "nextjs"]
looking_for_contributors = true

# India connection
india_connection = "founder"
india_connection_details = "Created by developers from India"
EOF
```

#### Step 4: Commit and Push
```bash
git add data/projects/my-awesome-project.toml
git commit -m "feat: add my-awesome-project"
git push origin main
```

#### Step 5: Create Pull Request
1. Go to your fork on GitHub
2. Click "Contribute" → "Open pull request"
3. Fill in the PR template
4. Submit!

#### Step 6: Auto-Verification
Our CI will automatically:
1. Validate your TOML file
2. Check if your repo has the `fossradar` topic
3. Verify tags and license
4. **Check your affiliation with the project**
5. If affiliated → mark as `verified = true`

---

## Verification Logic

### Script: `scripts/verify-pr-author.ts`

The verification script checks multiple levels of affiliation:

```typescript
// Checks performed:
1. Repository Owner
   - PR author's username === repo owner's username

2. Organization Member
   - If repo is owned by an org, check if PR author is a member

3. Collaborator
   - Check if PR author has write/admin access to the repo

4. Contributor
   - Check if PR author has commits in the repository
```

### How It's Called

In `.github/workflows/validate.yml`:

```yaml
- name: Verify PR author affiliation
  run: |
    # Get changed TOML files
    CHANGED_FILES=$(git diff --name-only ...)

    # For each changed project
    for file in $CHANGED_FILES; do
      SLUG=$(basename "$file" .toml)
      tsx scripts/verify-pr-author.ts "$PR_AUTHOR" "$SLUG"
    done

    # If affiliated, script updates verified = true
    git commit -m "chore: update verification status"
```

---

## Example Scenarios

### Scenario 1: Repository Owner Submits
```
PR Author: @alice
Repository: github.com/alice/awesome-tool

Verification:
✅ Repository Owner: Yes (alice owns alice/awesome-tool)
✅ Organization Member: N/A
✅ Collaborator: Yes (implicit as owner)
✅ Contributor: Yes (likely has commits)

Result: verified = true
```

### Scenario 2: Org Member Submits
```
PR Author: @bob
Repository: github.com/wbfoss/cool-project

Verification:
❌ Repository Owner: No (owned by wbfoss)
✅ Organization Member: Yes (bob is in wbfoss)
✅ Collaborator: Yes (org members have access)
✅ Contributor: Maybe

Result: verified = true
```

### Scenario 3: Contributor Submits
```
PR Author: @charlie
Repository: github.com/alice/awesome-tool

Verification:
❌ Repository Owner: No (owned by alice)
❌ Organization Member: N/A
❌ Collaborator: No (no write access)
✅ Contributor: Yes (has commits in the repo)

Result: verified = true
```

### Scenario 4: Unaffiliated Submission
```
PR Author: @dave
Repository: github.com/alice/awesome-tool

Verification:
❌ Repository Owner: No
❌ Organization Member: N/A
❌ Collaborator: No
❌ Contributor: No (no commits)

Result: verified = false
```

---

## Verified Badge

### On FOSSRadar.dev
Projects marked as `verified = true` display a **Verified ✓** badge:

```tsx
{project.verified && (
  <span className="verified-badge">
    <CheckIcon /> Verified
  </span>
)}
```

### On Your Project README
Once verified, add the badge to your project README:

```markdown
[![fossradar.dev: Verified](https://img.shields.io/badge/fossradar.dev-Verified-brightgreen?style=for-the-badge)](https://fossradar.dev/projects/your-slug)
```

This badge shows:
- ✅ Project is in FOSSRadar.dev directory
- ✅ Submitted by affiliated member
- ✅ India connection verified

---

## Benefits of This Approach

### 1. **Quality Control**
- Only developers who can create PRs can submit
- Community can review before merging
- Full Git history for accountability

### 2. **Automatic Verification**
- No manual verification needed
- Instant verification for affiliated members
- Transparent verification criteria

### 3. **Trust & Transparency**
- Clear verification logic
- Public GitHub profile checks
- Auditable process

### 4. **No External Auth**
- No OAuth setup required
- No user data storage
- GitHub-native workflow

### 5. **Developer-Friendly**
- Familiar Git workflow
- No forms to fill out
- Quick submission process

---

## Troubleshooting

### My project isn't marked as verified

**Check:**
1. Are you the repository owner?
2. Are you a member of the organization?
3. Do you have write access to the repository?
4. Do you have commits in the repository?

If **none** of the above, you're not affiliated. Ask an affiliated member to submit the PR.

### How do I get verified after initial submission?

If your project was submitted by someone else and is unverified:
1. Create a PR updating any field in your project's TOML file
2. CI will re-run verification
3. If you're now affiliated, it will be marked verified

### Can I verify someone else's project?

No. The verification is automatic based on **PR author** affiliation with the **project repository**. You can only get verified for projects you're affiliated with.

---

## Security Considerations

### Why This Is Secure

1. **GitHub API Verification**: All checks use official GitHub API
2. **Read-Only Checks**: We only read public information
3. **No Spoofing**: Can't fake being a repo owner/member
4. **Transparent**: All verification happens in public CI logs

### What We Check

- Public repository ownership
- Public organization membership
- Public collaborator status
- Public commit history

### What We Don't Check

- Private repositories
- Private organization details
- Email addresses
- Other personal information

---

## FAQ

**Q: Should I use the Quick Form or Manual PR workflow?**
A: Use the Quick Form for faster, guided submission with auto-fill. Use Manual PR workflow if you prefer direct Git control or want to batch multiple projects.

**Q: Does the Quick Form still create a PR?**
A: Yes! Both methods create GitHub Pull Requests for community review and transparency.

**Q: What if I'm not a developer?**
A: You can still use the Quick Form - it only requires a GitHub account. For manual workflow, ask the project maintainer to submit it.

**Q: Can I submit a project I don't own?**
A: Yes, but it won't be verified unless submitted by an affiliated member.

**Q: How long does verification take?**
A: Instant! CI runs automatically on PR creation.

**Q: Can verification be revoked?**
A: Yes, if you lose affiliation (leave org, lose access), re-running CI will update status.

---

## Technical Details

### Environment Variables Required

```bash
GITHUB_TOKEN=ghp_your_token  # Required for API calls
```

The token needs:
- `public_repo` scope
- Read access to organization membership (public)
- Read access to repository collaborators (public)

### Rate Limiting

GitHub API has rate limits:
- **Authenticated**: 5,000 requests/hour
- **Unauthenticated**: 60 requests/hour

Our verification script makes ~4 API calls per project:
- Get repository
- Check org membership (if applicable)
- Check collaborator status
- List contributors

For typical PRs (1-2 projects), we're well within limits.

---

## Summary

FOSSRadar.dev uses a Git-based submission workflow with auto-verification:

**Submission guide:** [fossradar.dev/submit](https://fossradar.dev/submit)
- ✅ Clear eligibility and field checklist
- ✅ TOML example and validation steps
- ✅ Links to fork the repository and open a PR

**Manual PR workflow:**
- ✅ Full Git control for developers
- ✅ Batch multiple project submissions
- ✅ Traditional workflow for Git users

**Every submission:**
- ✅ Creates a GitHub Pull Request for community review
- ✅ Automatically verifies project affiliation
- ✅ Maintains full transparency
- ✅ Scales without a separate write API
