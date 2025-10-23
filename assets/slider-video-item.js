// slider-video-item component
class SliderVideoItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['src', 'title', 'description', 'autoplay', 'muted', 'loop', 'playsinline'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const src = this.getAttribute('src') || '';
    const title = this.getAttribute('title') || '';
    const description = this.getAttribute('description') || '';
    const autoplay = this.hasAttribute('autoplay');
    const muted = this.hasAttribute('muted');
    const loop = this.hasAttribute('loop');
    const playsinline = this.hasAttribute('playsinline');

    // Initialize state tracking
    this._isPlaying = false;
    this._playPromise = null;
    this._userInteracted = false;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        .slide {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          background: #000;
        }

        .video-container {
          position: relative;
          width: 100%;
          height: 600px;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 15px;
        }

        .video-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #667eea, #764ba2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          text-align: center;
          padding: 20px;
        }

        .slide-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          color: white;
          padding: 30px;
          z-index: 2;
        }

        .slide-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .slide-description {
          font-size: 1.1rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .video-container {
            height: 300px;
          }

          .slide-title {
            font-size: 1.5rem;
          }

          .slide-description {
            font-size: 1rem;
          }
        }
        @media screen and (max-width: 480px) {
          .video-container {
            height: 150px;
          }
        }
      </style>
      <div class="slide">
        <div class="video-container">
          <video ${autoplay ? 'autoplay' : ''} ${muted ? 'muted' : ''} ${loop ? 'loop' : ''} ${
      playsinline ? 'playsinline' : ''
    }>
            <source src="${src}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="slide-content">
          <h3 class="slide-title">${title}</h3>
          <p class="slide-description">${description}</p>
        </div>
      </div>
    `;

    // Handle video events
    const video = this.shadowRoot.querySelector('video');
    let reloadCount = 0;
    const maxReload = 3;

    if (video) {
      // Add user interaction listener for autoplay policy compliance
      const handleUserInteraction = () => {
        this._userInteracted = true;
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
      };

      document.addEventListener('click', handleUserInteraction);
      document.addEventListener('touchstart', handleUserInteraction);
      document.addEventListener('keydown', handleUserInteraction);

      video.addEventListener('error', (e) => {
        if (reloadCount < maxReload) {
          reloadCount++;
          // Reset play promise and reload
          this._playPromise = null;
          this._isPlaying = false;
          video.load();
          // Don't auto-play on reload, let the slider handle it
        } else {
          console.log('Video error:', video.error);
          const container = video.parentElement;
          container.innerHTML = `
          <div class="video-placeholder">
            <div>
              <h3>${title || 'Video'}</h3>
              <p>Video failed to load</p>
              <p>This is a placeholder for demonstration</p>
            </div>
          </div>
        `;
        }
      });

      // Add event listeners for video state changes
      video.addEventListener('play', () => {
        this._isPlaying = true;
        console.log(`Video "${title}" started playing`);
      });

      video.addEventListener('pause', () => {
        this._isPlaying = false;
        this._playPromise = null;
        console.log(`Video "${title}" paused`);
      });

      video.addEventListener('ended', () => {
        this._isPlaying = false;
        this._playPromise = null;
        console.log(`Video "${title}" ended`);
      });

      video.addEventListener('loadstart', () => {
        this._playPromise = null;
        this._isPlaying = false;
      });
    }
  }

  // Public methods for external control
  async play() {
    const video = this.shadowRoot.querySelector('video');
    if (!video) {
      return Promise.reject(new Error('Video element not found'));
    }

    // If already playing, return the existing promise
    if (this._isPlaying && this._playPromise) {
      return this._playPromise;
    }

    // If there's a pending play promise, wait for it to resolve/reject
    if (this._playPromise) {
      try {
        await this._playPromise;
      } catch (e) {
        // Ignore previous promise errors, we'll try again
      }
    }

    // Check if user has interacted (required for autoplay in most browsers)
    if (!this._userInteracted) {
      console.log('User interaction required for video autoplay');
      return Promise.reject(new Error('User interaction required'));
    }

    // Ensure video is ready to play
    if (video.readyState < 2) {
      return new Promise((resolve, reject) => {
        const handleCanPlay = () => {
          video.removeEventListener('canplay', handleCanPlay);
          this._attemptPlay(video).then(resolve).catch(reject);
        };
        video.addEventListener('canplay', handleCanPlay);
      });
    }

    return this._attemptPlay(video);
  }

  _attemptPlay(video) {
    // Clear any existing play promise
    this._playPromise = null;

    // Pause first to ensure clean state
    video.pause();

    // Create new play promise
    this._playPromise = video.play().catch((error) => {
      this._playPromise = null;
      this._isPlaying = false;

      if (error.name === 'AbortError') {
        console.log('Video play was aborted (likely due to another play/pause call)');
        return Promise.resolve(); // Don't treat as error
      }

      console.error('Video play failed:', error);
      throw error;
    });

    return this._playPromise;
  }

  pause() {
    const video = this.shadowRoot.querySelector('video');
    if (video) {
      // Clear any pending play promise
      this._playPromise = null;
      this._isPlaying = false;
      video.pause();
    }
  }

  getVideoElement() {
    return this.shadowRoot.querySelector('video');
  }

  isPlaying() {
    return this._isPlaying;
  }

  // Method to check if user has interacted (for autoplay policy compliance)
  hasUserInteracted() {
    return this._userInteracted;
  }
}

// Register the custom element
customElements.define('slider-video-item', SliderVideoItem);
