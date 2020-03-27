module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `assests/` to `_site/img`
  eleventyConfig.addPassthroughCopy("assets");

};