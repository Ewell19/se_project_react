# WTWR (What to Wear?)

**Live demo:** [https://Ewell19.github.io/se_project_react/](https://Ewell19.github.io/se_project_react/)  
**Recording video:** [https://www.loom.com/share/85ea96b375c14d7091ab7c1a6e857e87](https://www.loom.com/share/85ea96b375c14d7091ab7c1a6e857e87)

## About the Project

WTWR (What to Wear?) is a weather-based clothing recommendation application built with React. The app fetches real-time weather data and suggests appropriate clothing items based on the current temperature and weather conditions.

### Features

- **Real-time Weather Data**: Displays current temperature in Fahrenheit or Celsius
- **Clothing Recommendations**: Shows clothing items suited for hot, warm, or cold weather
- **Add New Items**: Users can add their own clothing items with image URLs
- **Delete Items**: Remove clothing items with a confirmation modal
- **Temperature Toggle**: Switch between Fahrenheit and Celsius units
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **User Profile**: View and manage your clothing collection

## How to Use

1. **View Weather**: The homepage displays the current weather and recommended clothing items
2. **Toggle Temperature Units**: Click the temperature switch in the header to toggle between °F and °C
3. **Add Clothing Items**:
   - Click the "+ Add clothes" button in the header
   - Enter the item name, image URL, and select the weather type (hot/warm/cold)
   - Click "Add garment" to save
4. **View Your Profile**: Click "Profile" in the header to see all your clothing items
5. **Delete Items**:
   - Click on any clothing card to view details
   - Click "Delete item" button
   - Confirm deletion in the modal

## Technology Stack

- **React 18** - UI framework
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **OpenWeatherMap API** - Weather data
- **JSON Server** - Mock REST API for development

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
