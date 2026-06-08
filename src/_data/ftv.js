// Data for the Fire TV developer resources linktree at /ftv/.
// Consumed by src/ftv/index.njk via Eleventy's data cascade.
module.exports = {
  hero: {
    title: ["Developer", "Resources"], // two-line stacked - wordmark image already says "Fire TV"
    tagline: "Build for the future of connected entertainment.",
  },
  links: [
    {
      url: "https://developer.amazon.com/docs/apps-and-games/documentation.html",
      text: "Fire TV Documentation",
      sublabel: "Specs & resources for building apps",
      icon: "amazon",
    },
    {
      url: "https://github.com/amazonappdev",
      text: "Sample Code on GitHub",
      sublabel: "Sample code, reference apps, and libraries",
      icon: "github",
    },
    {
      url: "https://www.youtube.com/channel/UCT9ApARFgQJOeqD-ygmxnJQ",
      text: "AmazonAppDev on YouTube",
      sublabel: "Tutorials, talks, workshops, and interviews",
      icon: "youtube",
    },
    {
      url: "https://dev.to/amazonappdev",
      text: "Technical Articles",
      sublabel: "Our developers building in public",
      icon: "devto",
    },
    {
      url: "https://community.amazondeveloper.com/c/fire-apps/17",
      text: "Developer Community",
      sublabel: "Open discussions for Fire TV, Alexa, and Ring developers",
      icon: "discourse",
    },
    {
      url: "https://www.linkedin.com/showcase/amazon-appstore-developers/",
      text: "AmazonAppDev on LinkedIn",
      sublabel: "Showcase page for Amazon Devices builders",
      icon: "linkedin",
    },
    {
      url: "https://developer.amazon.com/apps-and-games/subscribe-newsletter",
      text: "Developer Newsletter",
      sublabel: "News, product releases, and updates",
      icon: "newsletter",
    },
    {
      url: "https://www.callstack.com/ebooks/the-ultimate-guide-to-react-native-tv-development",
      text: "E-Book: TV Apps w/ React Native",
      sublabel: "Your comprehensive handbook to React Native TV app development",
      icon: "book",
    },
  ],
  socials: [
    { url: "https://trag.dev", text: "Built by Chris Trag", icon: "globe" },
  ],
};
