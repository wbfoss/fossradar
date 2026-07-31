# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| latest  | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of Radar seriously. If you discover a security vulnerability, please follow these steps:

### 1. **Do Not** Open a Public Issue

Security vulnerabilities should not be disclosed publicly until a fix is available.

### 2. Report Privately

Send details to: **security@wbfoss.org**

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)
- Your contact information

### 3. Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Fix Timeline**: Depends on severity
  - Critical: 24-48 hours
  - High: 7 days
  - Medium: 14 days
  - Low: 30 days

### 4. Disclosure Policy

- We will acknowledge your report within 48 hours
- We will provide regular updates on our progress
- Once a fix is available, we will:
  1. Deploy the fix
  2. Publish a security advisory
  3. Credit you (if you wish) in the advisory

## Security Measures

### Data Protection

- **No User Accounts Required**: Submissions happen via GitHub pull requests
- **No Database**: All data is in Git, version-controlled and auditable
- **Environment Variables**: Secrets managed via environment variables (never committed)

### Authentication & Authorization

- **Git-based submissions**: Project listings are added via pull requests, not end-user OAuth sessions
- **API Protection**: Admin endpoints (for example sitemap ping) require configured secrets
- **No public write API**: Directory data changes go through Git and CI validation
- **Rate Limiting**: Applied where supported by the hosting platform

### Input Validation

- **Zod Schemas**: All inputs validated with strict schemas
- **Allowlists**: Tags and licenses validated against allowlists
- **URL Validation**: Repository and website URLs validated
- **File Size Limits**: Logo files limited to 200 KB
- **Content Sanitization**: All user content sanitized

### Infrastructure Security

- **HTTPS Only**: All traffic over HTTPS
- **Security Headers**:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `X-XSS-Protection: 1; mode=block`
  - `Referrer-Policy: strict-origin-when-cross-origin`
- **Webhook Verification**: HMAC signature verification for GitHub webhooks
- **Dependency Scanning**: Automated via Dependabot

### CI/CD Security

- **Branch Protection**: Main branch requires reviews and passing CI
- **Signed Commits**: Recommended (not required)
- **DCO**: Contributor agreement via sign-off
- **Secrets Management**: GitHub Secrets for sensitive data

## Scope

### In Scope

- Security vulnerabilities in the application code
- Authentication/authorization bypasses
- XSS, CSRF, injection vulnerabilities
- Information disclosure
- Denial of service (if reproducible)

### Out of Scope

- Issues in dependencies (report to maintainers directly)
- Social engineering attacks
- Physical security
- Spam/abuse of submission form (report via normal channels)
- Issues requiring physical access to infrastructure

## Security Best Practices for Contributors

### Code Contributions

1. **Never commit secrets** (API keys, tokens, passwords)
2. **Validate all inputs** before processing
3. **Use parameterized queries** (if adding database features)
4. **Avoid eval()** and similar dangerous functions
5. **Keep dependencies updated**

### TOML Files

1. **No executable code** in TOML files
2. **Validate URLs** before adding
3. **Check file sizes** for logos
4. **No external resources** loaded at runtime

### Environment Setup

1. **Use .env.local** for local secrets (never commit)
2. **Rotate tokens** regularly
3. **Minimum permissions** for GitHub tokens (public_repo only)
4. **Webhook secrets** should be random, high-entropy strings

## Known Issues

None currently. Check [Security Advisories](https://github.com/wbfoss/fossradar/security/advisories) for updates.

## Security Updates

Subscribe to security advisories:
- Watch this repository
- Enable notifications for security updates
- Follow [@wbfoss](https://twitter.com/wbfoss) for announcements

## Contact

- **Security Email**: security@wbfoss.org
- **General Contact**: community@wbfoss.org
- **GitHub**: https://github.com/wbfoss/fossradar

## Acknowledgments

We appreciate security researchers who responsibly disclose vulnerabilities. Contributors will be credited in:
- Security advisories
- CHANGELOG
- Hall of Fame (if desired)

Thank you for helping keep Radar secure!
