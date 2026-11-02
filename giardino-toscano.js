/**
 * GIARDINO TOSCANO CONTROLLER
 * 60fps Fluid Video Opening with Pearl Wax Seal & Tuscan Sunbeam Hero Frame
 */

let isOpened = false;

// ----------------------------------------------------
// 60FPS FLUID VIDEO ENVELOPE OPENING (EXACT TEMPLATE 1 ENGINE)
// ----------------------------------------------------
function openTuscanEnvelope() {
  if (isOpened) return;
  isOpened = true;

  const video = document.getElementById('envelopeVideo');
  const poster = document.getElementById('envelopePosterWrapper');
  const prompt = document.getElementById('tapPrompt');
  const audio = document.getElementById('weddingAudio');
  const audioBtn = document.getElementById('floatingAudioBtn');
  const scroller = document.getElementById('invitationScroller');
  const screen = document.getElementById('envelopeScreen');
  const replayBtn = document.getElementById('replayBtn');
  const flare = document.getElementById('tuscanFlare');

  // 1. Hide tap prompt immediately
  if (prompt) {
    prompt.style.transition = 'opacity 0.3s ease';
    prompt.style.opacity = '0';
  }

  // 2. Fire warm sunburst flare from wax seal
  if (flare) {
    flare.classList.add('is-firing');
  }

  // 3. Start romantic background music immediately
  if (audio && audio.paused) {
    audio.play().then(() => {
      if (audioBtn) audioBtn.classList.add('playing');
    }).catch(e => console.log('Audio autoplay prevented:', e));
  }

  // 4. Play envelope opening video (60fps fluid ribbon unknotting & flap opening)
  if (video) {
    video.currentTime = 0;
    video.play().catch(e => {
      console.log('Video play error:', e);
      finishOpening();
    });

    let hasTransitioned = false;
    const checkTransition = () => {
      // Smoothly crossfade from static wax seal poster to video as soon as video starts
      if (video.currentTime > 0.05 && poster && !poster.classList.contains('is-hidden')) {
        poster.classList.add('is-hidden');
      }

      if (hasTransitioned) return;
      // When video is ~0.9s from end (letter emerging), start crossfading into living painting
      if (video.duration && (video.currentTime >= video.duration - 0.9 || video.ended)) {
        hasTransitioned = true;
        finishOpening();
      }
    };

    video.addEventListener('timeupdate', checkTransition);
    video.addEventListener('ended', finishOpening);
  } else {
    finishOpening();
  }

  function finishOpening() {
    scroller.classList.add('is-active');
    scroller.scrollTop = 0;

    const heroText = document.getElementById('heroTextOverlay');
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
  }
}

function replayTuscanEnvelope() {
  isOpened = false;

  const video = document.getElementById('envelopeVideo');
  const poster = document.getElementById('envelopePosterWrapper');
  const prompt = document.getElementById('tapPrompt');
  const scroller = document.getElementById('invitationScroller');
  const screen = document.getElementById('envelopeScreen');
  const replayBtn = document.getElementById('replayBtn');
  const flare = document.getElementById('tuscanFlare');
  const heroText = document.getElementById('heroTextOverlay');

  scroller.classList.remove('is-active');
  scroller.scrollTop = 0;
  if (heroText) heroText.classList.remove('is-visible');

  if (video) {
    video.pause();
    video.currentTime = 0;
  }

  if (poster) poster.classList.remove('is-hidden');
  if (flare) flare.classList.remove('is-firing');

  screen.classList.remove('opened-hidden');
  screen.style.transition = 'opacity 0.6s ease';
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
