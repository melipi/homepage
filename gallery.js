document.addEventListener('DOMContentLoaded', function() {
  const galleryImages = document.querySelectorAll('.projects-gallery img');
  
  galleryImages.forEach(img => {
    img.style.cursor = 'pointer';
    
    img.addEventListener('click', function() {
      // Create modal
      const modal = document.createElement('div');
      modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        cursor: pointer;
      `;
      
      // Create full-size image
      const fullImage = document.createElement('img');
      fullImage.src = this.src;
      fullImage.alt = this.alt;
      fullImage.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
      `;
      
      modal.appendChild(fullImage);
      document.body.appendChild(modal);
      
      // Close modal on click
      modal.addEventListener('click', function() {
        modal.remove();
      });
    });
  });
});
