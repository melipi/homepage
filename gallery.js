document.addEventListener('DOMContentLoaded', function() {
  const galleryImages = document.querySelectorAll('.projects-gallery img');
  
  galleryImages.forEach(img => {
    img.style.cursor = 'pointer';
    
    img.addEventListener('click', function() {
      const figure = this.closest('figure');
      const figcaption = figure?.querySelector('figcaption');
      const caption = figcaption?.textContent || '';
      
      const modalHTML = `
        <div class="modal" style="
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
        ">
          <div style="
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 90%;
            max-height: 90%;
          ">
            <img src="${this.src}" alt="${this.alt}" style="
              max-width: 100%;
              max-height: 90vh;
              object-fit: contain;
            ">
            ${caption ? `<div style="
              color: #cbd5e1;
              font-size: 0.85rem;
              text-align: center;
              margin-top: 1rem;
              max-width: 100%;
              white-space: normal;
            ">${caption}</div>` : ''}
          </div>
        </div>
      `;
      
      document.body.insertAdjacentHTML('beforeend', modalHTML);
      
      const modal = document.body.lastElementChild;
      modal.addEventListener('click', () => modal.remove());
    });
  });
});
