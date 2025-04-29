---
title: Amazon Q
layout: base.njk
---

# Amazon Q

This page was created with Amazon Q CLI.

## Speaker Bio Implementation

To implement a speaker bio section with a copy button on the speaking page, I:

1. Added a speaker bio section with markdown formatting
2. Created CSS styles for the bio callout and copy button
3. Added JavaScript functionality for the copy button
4. Made the speaker photo clickable to open in a new tab

### The Speaker Bio Section

```markdown
<div class="speaker-bio" id="speaker-bio">
  <h2 class="bio-title">About Chris Trag</h2>
  <button class="copy-button" aria-label="Copy speaker bio">
    <i class="fi fi-rr-copy"></i>
  </button>
  
  <p>Chris is the Head of Evangelism at Amazon where he works with creators around the world to build apps & games for Alexa+, Fire TVs, and Echo devices. He previously launched developer programs at Stripe, Evernote, and Roku, and served as the web developer for Harvard.edu.</p>
  
  <p>Connect with Chris on <a href="https://twitter.com/chris_trag">Twitter</a>, <a href="https://www.linkedin.com/in/ctraganos/">Linkedin</a>, and <a href="https://trag.dev/">trag.dev</a></p>
  
  <a href="/img/global/trag.png" target="_blank">
    <img src="/img/global/trag.png" alt="Chris Trag headshot" class="speaker-photo">
  </a>
</div>
```

### CSS Styles

```css
/* Speaker bio callout styles */
.speaker-bio {
  background-color: var(--card-background-color);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin: 2rem 0;
  box-shadow: var(--card-box-shadow);
  position: relative;
}

.bio-title {
  margin-bottom: 0.5rem;
}

.copy-button {
  background-color: var(--primary);
  color: var(--primary-inverse);
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
}

.copy-button:hover {
  background-color: var(--primary-hover);
}

.copy-button.copied {
  background-color: var(--form-element-valid-border-color);
}

.speaker-photo {
  float: right;
  width: 150px;
  border-radius: var(--border-radius);
  margin-top: -4rem;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.speaker-photo:hover {
  transform: scale(1.05);
}
```

### JavaScript for Copy Functionality

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const copyButtons = document.querySelectorAll('.copy-button');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the speaker bio content
      const speakerBio = document.querySelector('.speaker-bio');
      
      if (speakerBio) {
        // Get all paragraphs except the one containing the image
        const paragraphs = Array.from(speakerBio.querySelectorAll('p'))
          .filter(p => !p.querySelector('img'));
        
        // Join the paragraphs with line breaks
        const bioText = paragraphs.map(p => p.innerText).join('\n\n');
        
        // Create a temporary textarea to copy from
        const textarea = document.createElement('textarea');
        textarea.value = bioText;
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
          // Execute copy command
          document.execCommand('copy');
          
          // Visual feedback
          const originalIcon = button.innerHTML;
          button.innerHTML = '<i class="fi fi-rr-check"></i>';
          button.classList.add('copied');
          
          // Reset after 2 seconds
          setTimeout(() => {
            button.innerHTML = originalIcon;
            button.classList.remove('copied');
          }, 2000);
          
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
        
        document.body.removeChild(textarea);
      }
    });
  });
  
  // Make the speaker photo clickable to open in a new tab
  const speakerPhoto = document.querySelector('.speaker-photo');
  if (speakerPhoto) {
    speakerPhoto.addEventListener('click', () => {
      const imgSrc = speakerPhoto.getAttribute('src');
      window.open(imgSrc, '_blank');
    });
  }
});
```

## Future Enhancements

For a pure markdown implementation, we could:

1. Install the `markdown-it-container` plugin
2. Configure it in `.eleventy.js` to handle custom containers
3. Use the `:::speaker-bio` syntax in markdown files

This would allow for a cleaner content file while maintaining the same functionality.
