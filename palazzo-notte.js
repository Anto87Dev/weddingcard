/**
 * PALAZZO NOTTE CONTROLLER
 * Golden Fireflies, Luminous Wax Seal & Emerald Night Suite
 */

let isOpened = false;
let currentLang = 'it';

// ----------------------------------------------------
// GOLDEN FIREFLIES CANVAS (Luminous Floating Particles)
// ----------------------------------------------------
function initFireflies() {
  const canvas = document.getElementById('firefliesCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const fireflies = [];
  const count = 55;

  for (let i = 0; i < count; i++) {
    fireflies.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.2 + 0.8,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45 - 0.15, // gentle float upward
      alpha: Math.random() * 0.7 + 0.2,
      pulseSpeed: Math.random() * 0.025 + 0.01,
      pulsePhase: Math.random() * Math.PI * 2
    });
  }

  function render() {
    if (isOpened) return; // Stop animation when opened to save battery
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const f of fireflies) {
      f.x += f.vx;
      f.y += f.vy;
      f.pulsePhase += f.pulseSpeed;

      // Wrap around edges
      if (f.x < 0) f.x = canvas.width;
      if (f.x > canvas.width) f.x = 0;
      if (f.y < 0) f.y = canvas.height;
      if (f.y > canvas.height) f.y = 0;

      const currentAlpha = Math.max(0.05, Math.sin(f.pulsePhase) * 0.5 + 0.5) * f.alpha;

      // Outer glow
      const grad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.radius * 4.5);
      grad.addColorStop(0, `rgba(245, 215, 130, ${currentAlpha})`);
      grad.addColorStop(0.4, `rgba(212, 175, 55, ${currentAlpha * 0.5})`);
      grad.addColorStop(1, 'rgba(212, 175, 55, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.radius * 4.5, 0, Math.PI * 2);
      ctx.fill();

      // Core particle
      ctx.fillStyle = `rgba(255, 245, 210, ${currentAlpha * 1.2})`;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  render();
}

// ----------------------------------------------------
// OPEN ENVELOPE WITH WAX SEAL BURST
// ----------------------------------------------------
function openPalazzoEnvelope() {
  if (isOpened) return;
  isOpened = true;

  const audio = document.getElementById('weddingAudio');
  const audioBtn = document.getElementById('floatingAudioBtn');
  const screen = document.getElementById('envelopeScreen');
  const scroller = document.getElementById('invitationScroller');
  const flare = document.getElementById('sealBurstFlare');
  const replayBtn = document.getElementById('replayBtn');
  const prompt = document.getElementById('tapPrompt');

  if (prompt) prompt.style.opacity = '0';

  // 1. Play music immediately
  if (audio && audio.paused) {
    audio.play().then(() => {
      if (audioBtn) audioBtn.classList.add('playing');
    }).catch(e => console.log('Audio autoplay:', e));
  }

  // 2. Fire golden starlight burst from the wax seal
  if (flare) {
    flare.classList.add('is-firing');
  }

  // 3. Transition to scrollable suite
  setTimeout(() => {
    scroller.classList.add('is-active');
    scroller.scrollTop = 0;

    screen.style.transition = 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
    screen.style.opacity = '0';
    screen.style.pointerEvents = 'none';

    setTimeout(() => {
      screen.classList.add('opened-hidden');
      if (replayBtn) replayBtn.classList.add('is-visible');
    }, 1200);
  }, 450);
}

function replayPalazzoEnvelope() {
  isOpened = false;
  const screen = document.getElementById('envelopeScreen');
  const scroller = document.getElementById('invitationScroller');
  const flare = document.getElementById('sealBurstFlare');
  const replayBtn = document.getElementById('replayBtn');
  const prompt = document.getElementById('tapPrompt');

  scroller.classList.remove('is-active');
  scroller.scrollTop = 0;

  screen.classList.remove('opened-hidden');
  screen.style.opacity = '1';
  screen.style.pointerEvents = 'auto';

  if (flare) flare.classList.remove('is-firing');
  if (prompt) prompt.style.opacity = '1';
  if (replayBtn) replayBtn.classList.remove('is-visible');

  initFireflies();
}

// ----------------------------------------------------
// AUDIO LIFECYCLE & TOGGLE
// ----------------------------------------------------
let wasPlayingBeforeHidden = false;

document.addEventListener('visibilitychange', () => {
  const audio = document.getElementById('weddingAudio');
  const audioBtn = document.getElementById('floatingAudioBtn');
  if (!audio) return;

  if (document.hidden) {
    if (!audio.paused) {
      wasPlayingBeforeHidden = true;
      audio.pause();
      if (audioBtn) audioBtn.classList.remove('playing');
    }
  } else {
    if (wasPlayingBeforeHidden && isOpened) {
      audio.play().then(() => {
        if (audioBtn) audioBtn.classList.add('playing');
      }).catch(() => {});
    }
  }
});

function toggleAudio() {
  const audio = document.getElementById('weddingAudio');
  const audioBtn = document.getElementById('floatingAudioBtn');
  if (!audio) return;

  if (audio.paused) {
    audio.play().then(() => {
      audioBtn.classList.add('playing');
    });
  } else {
    audio.pause();
    wasPlayingBeforeHidden = false;
    audioBtn.classList.remove('playing');
  }
}

// ----------------------------------------------------
// INITIALIZATION
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initFireflies();

  const stage = document.getElementById('envelopeStage');
  const prompt = document.getElementById('tapPrompt');

  if (stage) {
    stage.addEventListener('pointerdown', openPalazzoEnvelope, { passive: true });
    stage.addEventListener('click', openPalazzoEnvelope);
  }
  if (prompt) {
    prompt.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      openPalazzoEnvelope();
    }, { passive: true });
  }

  const audioBtn = document.getElementById('floatingAudioBtn');
  if (audioBtn) audioBtn.addEventListener('click', toggleAudio);

  const replayBtn = document.getElementById('replayBtn');
  if (replayBtn) replayBtn.addEventListener('click', replayPalazzoEnvelope);

  // Template Picker dropdown
  const tplBtn = document.getElementById('templateMenuBtn');
  const tplDropdown = document.getElementById('templateDropdown');
  if (tplBtn && tplDropdown) {
    tplBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      tplDropdown.classList.toggle('is-open');
    });
    document.addEventListener('click', (e) => {
      if (!tplDropdown.contains(e.target) && e.target !== tplBtn) {
        tplDropdown.classList.remove('is-open');
      }
    });
  }

  // Preload audio
  const audio = document.getElementById('weddingAudio');
  if (audio) audio.load();
});
