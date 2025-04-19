const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItMark = require('markdown-it-mark');

module.exports = function (eleventyConfig) {
    // Markdown Configuration
    let markdownOptions = {
        html: true,
        breaks: true,
        linkify: true
    };
    
    let markdownLib = markdownIt(markdownOptions)
        .use(markdownItAttrs)
        .use(markdownItMark);;
    eleventyConfig.setLibrary("md", markdownLib);

    // Copy only custom CSS files from src/css
    eleventyConfig.addPassthroughCopy({
        "src/css/custom.css": "css/custom.css",
        "node_modules/@picocss/pico/css/pico.min.css": "css/pico.min.css",
        "src/js/theme.js": "js/theme.js"
    });

    // Watch files for changes
    eleventyConfig.addWatchTarget("src/css/");
    eleventyConfig.addWatchTarget("src/js/");
    eleventyConfig.addPassthroughCopy("src/img");

    // Add this function to create clean URLs with trailing slashes
    eleventyConfig.addGlobalData("permalink", () => {
        return (data) => {
            // Special case for home page
            if (data.page.fileSlug === "") {
                return "/index.html";
            }
            // All other pages with trailing slash
            return `/${data.page.fileSlug}/`;
        };
    });

    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes"
        },
        pathPrefix: "/tragdev/",
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        templateFormats: ["md", "njk", "html"]
    };
};
