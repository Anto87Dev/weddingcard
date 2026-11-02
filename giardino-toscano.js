/**
 * GIARDINO TOSCANO CONTROLLER
 * GSAP 60fps Synchronized 3D Envelope Opening & Tuscan Sunbeam Living Frame
 */

let isOpened = false;
let masterTimeline = null;

// ----------------------------------------------------
// GSAP CHOREOGRAPHED 3D ENVELOPE OPENING
// ----------------------------------------------------
function openTuscanEnvelope() {
  if (isOpened) return;
  isOpened = true;

  const audio = document.getElementById('weddingAudio');
  const audioBtn = document.getElementById('floatingAudioBtn');
  const screen = document.getElementById('envelopeScreen');
  const scroller = document.getElementById('invitationScroller');
  const flare = document.getElementById('tuscanFlare');
  const sealGroup = document.getElementById('waxSealGroup');
  const flap = document.getElementById('envelopeFlap3D');
  const letter = document.getElementById('envelopeLetterSlide');
  const prompt = document.getElementById('tapPrompt');
  const heroText = document.getElementById('heroTextOverlay');
  const replayBtn = document.getElementById('replayBtn');

  // 1. Instant audio start
  if (audio && audio.paused) {
    audio.play().then(() => {
      if (audioBtn) audioBtn.classList.add('playing');
    }).catch(e => console.log('Audio autoplay:', e));
  }

  // 2. Master GSAP Timeline (butter-smooth 60fps synchronization)
  masterTimeline = gsap.timeline({
    onComplete: () => {
      screen.classList.add('opened-hidden');
      if (replayBtn) replayBtn.classList.add('is-visible');
    }
  });

  // T = 0.0s: Prompt fades out
  masterTimeline.to(prompt, { opacity: 0, duration: 0.25, ease: 'power2.out' }, 0);

  // T = 0.0s: Warm golden sunburst flare erupts from the pearlescent wax seal
  masterTimeline.fromTo(flare,
    { scale: 0, opacity: 0 },
    { scale: 1.8, opacity: 1, duration: 0.5, ease: 'power2.out' },
    0
  );
  masterTimeline.to(flare, { opacity: 0, duration: 0.45, ease: 'power2.in' }, 0.4);

  // T = 0.15s: Pearlescent wax seal unlocks and dissolves
  masterTimeline.to(sealGroup, { scale: 1.18, opacity: 0, duration: 0.45, ease: 'power2.in' }, 0.15);

  // T = 0.35s: Top Flap opens in 3D (0 -> 180deg)
  masterTimeline.to(flap, {
    rotateX: 180,
    duration: 1.15,
    ease: 'power2.inOut',
    transformOrigin: 'top center'
  }, 0.35);

  // T = 0.75s: Letter emerges out of the envelope pocket and glides upward
  masterTimeline.to(letter, {
    opacity: 1,
    y: -190,
    scale: 1.05,
    duration: 1.35,
    ease: 'power2.out'
  }, 0.75);

  // T = 1.75s: Activate scroller
  masterTimeline.add(() => {
    scroller.classList.add('is-active');
    scroller.scrollTop = 0;
  }, 1.75);

  // T = 1.8s: Harmonious crossfade from envelope to Hero living painting
  masterTimeline.to(screen, {
    opacity: 0,
    duration: 1.1,
    ease: 'power2.inOut'
  }, 1.8);

  // T = 2.0s: The text and branches in "quel riquadro" settle into place
  masterTimeline.fromTo(heroText,
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
    2.0
  );
}

function replayTuscanEnvelope() {
  isOpened = false;

  const screen = document.getElementById('envelopeScreen');
  const scroller = document.getElementById('invitationScroller');
  const flare = document.getElementById('tuscanFlare');
  const sealGroup = document.getElementById('waxSealGroup');
  const flap = document.getElementById('envelopeFlap3D');
  const letter = document.getElementById('envelopeLetterSlide');
  const prompt = document.getElementById('tapPrompt');
  const heroText = document.getElementById('heroTextOverlay');
  const replayBtn = document.getElementById('replayBtn');

  if (masterTimeline) {
    masterTimeline.kill();
  }

  scroller.classList.remove('is-active');
  scroller.scrollTop = 0;

  // Reset GSAP animated properties to initial state
  gsap.set(screen, { opacity: 1 });
  screen.classList.remove('opened-hidden');

  gsap.set(flap, { rotateX: 0 });
  gsap.set(letter, { opacity: 0, y: 0, scale: 0.85 });
  gsap.set(sealGroup, { scale: 1, opacity: 1 });
  gsap.set(flare, { scale: 0, opacity: 0 });
  gsap.set(prompt, { opacity: 1 });
  gsap.set(heroText, { opacity: 0, y: 15 });

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
