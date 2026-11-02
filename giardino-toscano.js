/**
 * GIARDINO TOSCANO CONTROLLER
 * 3D Envelope Opening Animation, Pearlescent Wax Seal & Tuscan Sunbeam Hero Frame
 */

let isOpened = false;

// ----------------------------------------------------
// 3D ENVELOPE OPENING ORCHESTRATION
// ----------------------------------------------------
function openTuscanEnvelope() {
  if (isOpened) return;
  isOpened = true;

  const audio = document.getElementById('weddingAudio');
  const audioBtn = document.getElementById('floatingAudioBtn');
  const stage = document.getElementById('envelopeStage');
  const screen = document.getElementById('envelopeScreen');
  const scroller = document.getElementById('invitationScroller');
  const flare = document.getElementById('tuscanFlare');
  const replayBtn = document.getElementById('replayBtn');
  const prompt = document.getElementById('tapPrompt');
  const heroText = document.getElementById('heroTextOverlay');

  if (prompt) prompt.style.opacity = '0';

  // 1. Instant audio start
  if (audio && audio.paused) {
    audio.play().then(() => {
      if (audioBtn) audioBtn.classList.add('playing');
    }).catch(e => console.log('Audio autoplay:', e));
  }

  // 2. Fire warm sunburst from the pearlescent wax seal
  if (flare) {
    flare.classList.add('is-firing');
  }

  // 3. Trigger 3D flap fold and letter rising
  if (stage) {
    stage.classList.add('is-opening');
  }

  // 4. After 3D flap unfolds and letter emerges, transition to Hero Living Frame
  setTimeout(() => {
    scroller.classList.add('is-active');
    scroller.scrollTop = 0;

    if (heroText) {
      heroText.classList.add('is-visible');
    }

    screen.style.transition = 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
    screen.style.opacity = '0';
    screen.style.pointerEvents = 'none';

    setTimeout(() => {
      screen.classList.add('opened-hidden');
      if (replayBtn) replayBtn.classList.add('is-visible');
    }, 1200);
  }, 950);
}

function replayTuscanEnvelope() {
  isOpened = false;
  const stage = document.getElementById('envelopeStage');
  const screen = document.getElementById('envelopeScreen');
  const scroller = document.getElementById('invitationScroller');
  const flare = document.getElementById('tuscanFlare');
  const replayBtn = document.getElementById('replayBtn');
  const prompt = document.getElementById('tapPrompt');
  const heroText = document.getElementById('heroTextOverlay');

  scroller.classList.remove('is-active');
  scroller.scrollTop = 0;
  if (heroText) heroText.classList.remove('is-visible');

  if (stage) stage.classList.remove('is-opening');
  if (flare) flare.classList.remove('is-firing');

  screen.classList.remove('opened-hidden');
  screen.style.opacity = '1';
  screen.style.pointerEvents = 'auto';

  if (prompt) prompt.style.opacity = '1';
  if (replayBtn) replayBtn.classList.remove('is-visible');
}

// ----------------------------------------------------
// AUDIO LIFECYCLE
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
  const stage = document.getElementById('envelopeStage');
  const prompt = document.getElementById('tapPrompt');

  if (stage) {
    stage.addEventListener('pointerdown', openTuscanEnvelope, { passive: true });
    stage.addEventListener('click', openTuscanEnvelope);
  }
  if (prompt) {
    prompt.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      openTuscanEnvelope();
    }, { passive: true });
  }

  const audioBtn = document.getElementById('floatingAudioBtn');
  if (audioBtn) audioBtn.addEventListener('click', toggleAudio);

  const replayBtn = document.getElementById('replayBtn');
  if (replayBtn) replayBtn.addEventListener('click', replayTuscanEnvelope);

  // Chevron smooth scroll button
  const scrollBtn = document.getElementById('heroScrollBtn');
  const scroller = document.getElementById('invitationScroller');
  if (scrollBtn && scroller) {
    scrollBtn.addEventListener('click', () => {
      const heroSection = document.getElementById('heroSection');
      if (heroSection) {
        scroller.scrollTo({
          top: heroSection.offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  }

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

  const audio = document.getElementById('weddingAudio');
  if (audio) audio.load();
});
