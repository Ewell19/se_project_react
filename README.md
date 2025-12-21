# React + Vite

**Live demo:** [https://Ewell19.github.io/se_project_react/]
**recording video** [https://www.loom.com/share/85ea96b375c14d7091ab7c1a6e857e87]

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Deployment

### Automated Deployment (Recommended)

The project automatically deploys to GitHub Pages when changes are pushed to the `main` branch using GitHub Actions. The workflow:

1. Builds the project with the correct base path (`/se_project_react/`)
2. Removes any CNAME files to prevent custom domain conflicts
3. Deploys to the `gh-pages` branch

The deployed site is available at: **https://Ewell19.github.io/se_project_react/**

### Manual Deployment

To deploy manually from your local machine:

```bash
npm run deploy
```

This command will:

1. Run `npm run build` to create the production build
2. Deploy the `dist` folder to the `gh-pages` branch

**Note:** After manual deployment, ensure no CNAME file was added to prevent redirect issues.

## Troubleshooting

### Custom Domain Issues

If the site redirects to an incorrect domain (e.g., `aeweather119.github.io`):

1. **Check GitHub Pages Settings:**

   - Go to Repository Settings → Pages
   - Ensure the "Custom domain" field is **empty**
   - If a domain is present, remove it and save

2. **Clear CNAME file from gh-pages branch:**

   ```bash
   git checkout gh-pages
   git rm CNAME
   git commit -m "Remove CNAME file"
   git push origin gh-pages
   git checkout main
   ```

3. **Clear browser cache:**

   - The old redirect may be cached in your browser
   - Clear your browser cache or use incognito/private browsing mode
   - Wait a few minutes for GitHub Pages to update

4. **Verify deployment:**
   - Check that the GitHub Actions workflow completed successfully
   - Visit the site at: https://Ewell19.github.io/se_project_react/

### Changes Not Appearing

If new changes aren't reflected on the deployed site:

1. Verify the workflow ran successfully in the "Actions" tab
2. Wait 2-5 minutes for GitHub Pages to update
3. Clear your browser cache
4. Check that you're accessing the correct URL: https://Ewell19.github.io/se_project_react/
