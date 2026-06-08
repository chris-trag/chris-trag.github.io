// Add this to your .eleventy.js file
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItMark = require('markdown-it-mark');
const markdownItContainer = require('markdown-it-container');
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Spotify shortcode - updated to handle full URLs and height parameter
  eleventyConfig.addShortcode("spotify", function(url) {
    // Extract the type and ID from the URL
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/');
    const type = pathParts[1]; // playlist, album, track, etc.
    const id = pathParts[2]; // The ID part
    
    // Return the embed HTML with the appropriate type class
    return `<div class="spotify-embed ${type}">
      <iframe 
        style="border-radius:12px" 
        src="https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=0" 
        width="100%" 
        height="352"
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
      </iframe>
    </div>`;
  });
  
  // Configure Markdown processing with attributes support
  const markdownOptions = {
    html: true,
    breaks: true,
    linkify: true
  };
  
  const markdownLibrary = markdownIt(markdownOptions)
    .use(markdownItAttrs)
    .use(markdownItMark)
    .use(markdownItContainer, 'speaker-bio', {
      validate: function(params) {
        return params.trim() === 'speaker-bio';
      },
      render: function(tokens, idx) {
        if (tokens[idx].nesting === 1) {
          // opening tag
          return '<div class="speaker-bio">\n' +
                 '<div class="bio-columns">\n' +
                 '<div class="bio-text">\n';
        } else {
          // closing tag
          return '</div>\n';
        }
      }
    })
    .use(markdownItContainer, 'bio-image', {
      validate: function(params) {
        return params.trim() === 'bio-image';
      },
      render: function(tokens, idx) {
        if (tokens[idx].nesting === 1) {
          // opening tag
          return '<div class="bio-image">\n';
        } else {
          // closing tag
          return '</div>\n</div>\n</div>\n';
        }
      }
    });
  
  eleventyConfig.setLibrary("md", markdownLibrary);
  
  // Add date filter for use in templates
  eleventyConfig.addFilter("date", function(dateObj, format) {
    return DateTime.fromJSDate(new Date(dateObj)).toFormat(format);
  });
  
  // Copy favicon files to the output directory
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/llms.txt");
  
  // Other existing configuration...
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/fonts");

  // Per-event /ftv linktree assets (CSS, fonts, images)
  eleventyConfig.addPassthroughCopy("src/ftv/ftv.css");
  eleventyConfig.addPassthroughCopy("src/ftv/fonts");
  eleventyConfig.addPassthroughCopy("src/ftv/img");

  // Watch passthrough paths so CSS/SVG/icon edits trigger live reload.
  // Without these, Eleventy only watches templates and you'd need a manual
  // server restart for every CSS or asset change.
  eleventyConfig.addWatchTarget("./src/ftv/ftv.css");
  eleventyConfig.addWatchTarget("./src/ftv/img/");
  eleventyConfig.addWatchTarget("./src/_includes/icons/");
  
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
