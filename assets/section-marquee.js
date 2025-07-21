class MarqueeSection {
  constructor() {
    // Pause on hover disabled
  }

  init() {
    // Pause on hover disabled
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
