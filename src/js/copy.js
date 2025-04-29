document.addEventListener('DOMContentLoaded', () => {
  const copyButtons = document.querySelectorAll('.copy-button');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const bioText = button.closest('.speaker-bio').querySelector('.bio-text');
      
      if (bioText) {
        // Get the text content
        const textToCopy = bioText.innerText;
        
        // Create a temporary textarea to copy from
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
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
  const speakerPhotos = document.querySelectorAll('.bio-content img');
  speakerPhotos.forEach(photo => {
    photo.addEventListener('click', () => {
      const imgSrc = photo.getAttribute('src');
      window.open(imgSrc, '_blank');
    });
  });
});
