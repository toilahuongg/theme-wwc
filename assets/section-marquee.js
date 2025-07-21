class MarqueeSection {
  constructor() {
    this.init();
  }

  init() {
    const marqueeContents = document.querySelectorAll('.marquee__content[data-pause-on-hover="true"]');

    marqueeContents.forEach((content) => {
      content.addEventListener('mouseenter', () => {
        content.style.animationPlayState = 'paused';
      });

      content.addEventListener('mouseleave', () => {
        content.style.animationPlayState = 'running';
      });
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new MarqueeSection();
  });
} else {
  new MarqueeSection();
}

// Re-initialize for dynamic content (AJAX, etc.)
document.addEventListener('shopify:section:load', () => {
  new MarqueeSection();
});
