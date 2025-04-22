// Add this to your .eleventy.js file
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function(eleventyConfig) {
  // Configure Markdown processing with attributes support
  const markdownOptions = {
    html: true,
    breaks: true,
    linkify: true
  };
  
  const markdownLibrary = markdownIt(markdownOptions).use(markdownItAttrs);
  
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
