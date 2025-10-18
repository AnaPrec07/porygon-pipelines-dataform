# GitHub Pages Portfolio for Porygon Pipelines

This repository contains a GitHub Pages site showcasing the Porygon Pipelines Dataform project as a portfolio piece.

## Quick Setup

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"

2. **Update Configuration**
   - Edit `_config.yml` and update the following fields:
     - `email`: Your contact email
     - `github_username`: Your GitHub username
     - `twitter_username`: Your Twitter handle (optional)
     - `linkedin_username`: Your LinkedIn username (optional)
     - `google_analytics`: Your Google Analytics tracking ID (optional)

3. **Customize Content**
   - Update the hero section in `index.html`
   - Modify the about page in `about.md`
   - Add your professional details and contact information

## Site Structure

- `index.html` - Main portfolio page with project overview
- `about.md` - Detailed project information and your background
- `architecture.md` - Technical architecture documentation
- `documentation.md` - Setup and usage instructions
- `_config.yml` - Jekyll configuration file
- `assets/css/style.scss` - Custom CSS styling
- `Gemfile` - Ruby dependencies for local development

## Local Development

To run the site locally:

```bash
# Install dependencies
bundle install

# Serve the site
bundle exec jekyll serve

# Open in browser: http://localhost:4000
```

## Customization Tips

### Colors and Branding
Edit the CSS variables in `assets/css/style.scss`:
```scss
:root {
  --primary-color: #2563eb;    /* Main brand color */
  --secondary-color: #64748b;  /* Secondary text */
  --accent-color: #f59e0b;     /* Accent/highlight */
}
```

### Technology Logos
Update the technology stack section in `index.html` with your preferred tech stack logos and links.

### Project Stats
Modify the statistics in the contact section to reflect your actual project metrics.

## Features

- ✅ Responsive design optimized for all devices
- ✅ Professional portfolio presentation
- ✅ Technical documentation integration
- ✅ SEO optimized with meta tags
- ✅ Fast loading and GitHub Pages compatible
- ✅ Clean, modern design
- ✅ Easy to customize and maintain

## GitHub Pages URL

Once enabled, your site will be available at:
`https://[username].github.io/porygon-pipelines-dataform`

Replace `[username]` with your actual GitHub username.

---

This portfolio site effectively showcases your data engineering skills and provides a professional presentation of your Dataform project.