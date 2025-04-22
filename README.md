# Your Own Site

This is your (very) own site starter pack! It's designed to be clean, fast, and easy to maintain using Markdown for content. Everytime the markdown is updated in the repo, the website updates auto-magically ✨.

## Features

- Built with Eleventy (11ty) static site generator
- Content written in Markdown with enhanced features
- Styled with [Pico CSS](https://picocss.com/) for a clean, responsive design
- Custom theme switching functionality
- Optimized for performance and SEO
- Easy to deploy to GitHub Pages
- Includes a "Kitchen Sink" example page showing all possible elements

## Project Structure

```
.
├── .eleventy.js           # Eleventy configuration
├── src/                   # Source files
│   ├── _includes/         # Layout templates
│   ├── css/               # CSS files
│   ├── js/                # JavaScript files
│   ├── img/               # Images
│   ├── sink.md            # Kitchen Sink example page
│   └── *.md               # Content pages written in Markdown
├── dist/                  # Built site (generated)
├── node_modules/          # Dependencies
└── package.json           # Project configuration
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer recommended)
- npm (comes with Node.js)

### Installation

1. Clone this repository:
   ```zsh
   git clone https://github.com/yourusername/your-site.git
   cd your-site
   ```

2. Install dependencies:
   ```zsh
   npm install
   ```

### Running Locally

To start a development server with live reload:

```zsh
npm run dev
```

This will:
- Clean the `dist` directory
- Build the site
- Start a local server at http://localhost:8080
- Watch for changes and rebuild automatically

### Building for Production

To build the site for production:

```zsh
npm run build
```

This generates the static site in the `dist` directory, ready for deployment.

## Customization

### Content

- Edit or add Markdown files in the `src` directory
- Each Markdown file becomes a page on your site
- Use front matter (the `---` section at the top of each file) to set page metadata

### Styling

- Main styling comes from Pico CSS
- Custom styles can be added in `src/css/custom.css`

### Layouts

- Edit layout templates in the `src/_includes` directory
- Templates use Nunjucks templating language

## Deployment

### GitHub Pages

This site is designed to be easily deployed to GitHub Pages:

1. Push your repository to GitHub
2. Enable GitHub Pages in your repository settings
3. Set the source to the `main` branch and `/docs` folder or use GitHub Actions

### Other Hosting Options

The built site in the `dist` directory is static HTML, CSS, and JavaScript, so it can be hosted on any web server or static hosting service like:

- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## Creating Your Own Portfolio

To create your own portfolio based on this template:

1. Fork or clone this repository
2. Modify the content in the Markdown files to reflect your information
3. Update images in the `src/img` directory
4. Customize the styling as needed
5. Deploy to your preferred hosting platform

## Kitchen Sink Example

The site includes a "Kitchen Sink" example page (`src/sink.md`) that demonstrates all the typographic elements and styling available:

- Headers (h1-h6)
- Text formatting (bold, italic, highlighted)
- Lists (ordered and unordered)
- Code blocks with syntax highlighting
- Blockquotes
- Tables
- Images
- Horizontal rules

This page serves as both documentation and a visual reference for the site's styling capabilities.

## License

This project is open source and available under the [ISC License](LICENSE).

## Acknowledgments

- Built with [Eleventy](https://www.11ty.dev/)
- Styled with [Pico CSS](https://picocss.com/)
- Icons from [Flaticon](https://www.flaticon.com/)
- Vibe-checked by [Amazon Q CLI](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/command-line.html)
