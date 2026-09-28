// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check for saved theme preference, otherwise use system preference
    const getPreferredTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    // Set theme
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update the SVG favicon based on theme (leave the .ico fallback alone)
        const faviconLink = document.querySelector('link[rel="icon"][type="image/svg+xml"]');
        if (faviconLink) {
            faviconLink.href = theme === 'dark' ? '/img/favicon-dark.svg' : '/img/favicon.svg';
        }

        // Keep the browser UI color in sync with a manual theme choice
        document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
            meta.setAttribute('content', theme === 'dark' ? '#0a0c14' : '#ffffff');
        });
    };

    // Initial theme setup
    setTheme(getPreferredTheme());

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        themeToggle.setAttribute('aria-pressed', newTheme === 'dark');
    });
    
    // Set initial aria-pressed state
    themeToggle.setAttribute('aria-pressed', document.documentElement.getAttribute('data-theme') === 'dark');
});
