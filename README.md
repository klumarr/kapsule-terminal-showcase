# KAPSULE Terminal Showcase

This folder contains the GitHub Pages showcase site for the KAPSULE Terminal project. This site is designed to highlight the features and technologies of the project without exposing the private codebase.

## Structure

- `index.html` - Main showcase page
- `styles.css` - Custom styling for the showcase
- `scripts.js` - Interactive elements and animations
- Images/ (create this folder) - Store any screenshots or media

## How to Update

### Adding Screenshots

1. Add your screenshots to the `images/` folder
2. Update the image sources in `index.html` to point to your actual screenshots
3. Replace all placeholder URLs with your actual image paths

### Updating Content

1. Modify the `index.html` file to update project descriptions, features, or technology details
2. Customize the `styles.css` file to change the look and feel
3. Edit the `scripts.js` file to modify interactive elements

## GitHub Pages Setup Instructions

### Option 1: Setting up a private project with GitHub Pages

1. Create a new private repository on GitHub (e.g., `kapsule-terminal-showcase`)
2. Push only the contents of this `gh-pages` folder to that repository
3. Go to repository Settings > Pages
4. Set the source to "main" branch and save
5. Your site will be published at `https://yourusername.github.io/kapsule-terminal-showcase/`

### Option 2: Using a branch in your existing private repository

1. Create a new branch called `gh-pages` in your existing repository
2. Clear all files from this branch (except .git)
3. Copy only the contents of this `gh-pages` folder to the root of the `gh-pages` branch
4. Push the `gh-pages` branch to GitHub
5. Go to repository Settings > Pages
6. Set the source to "gh-pages" branch and save
7. Your site will be published at `https://yourusername.github.io/your-repo-name/`

## Tips for Maintaining Privacy

- Never expose sensitive code or environment variables
- Use screenshots instead of live demos that could expose your codebase
- Be careful about what implementation details you share
- Consider watermarking screenshots to prevent unauthorized use
- Keep repository private while making only the GitHub Pages site public

## Testing Locally

You can test this showcase locally by opening the `index.html` file directly in your browser, or by running a simple local server:

```bash
# Using Python
python -m http.server

# Or using Node.js
npx serve
```

Then visit `http://localhost:8000` or the URL provided by the server.

## Important Notes

- GitHub Pages sites are public even if the repository is private
- Ensure you're not committing any sensitive information to this showcase
- Regularly update the showcase as your project evolves 