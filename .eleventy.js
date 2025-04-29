// Add this to your .eleventy.js file
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItMark = require('markdown-it-mark');
const markdownItContainer = require('markdown-it-container');

module.exports = function(eleventyConfig) {
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
  
  // Copy favicon files to the output directory
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");
  
  // Other existing configuration...
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
