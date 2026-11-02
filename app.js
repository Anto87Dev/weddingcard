/**
 * WEDDING INVITATION CONTROLLER (FRESCO)
 * Real Video & Poster Animation, Audio Sync, Multi-language & Confetti
 */

// ----------------------------------------------------
// MULTI-LANGUAGE DICTIONARY (IT, EN, DE)
// ----------------------------------------------------
const i18n = {
  it: {
    tapPrompt: "Tocca per aprire l'invito",
    replay: "↺ Riapri Busta",
    inviteLine: "VI INVITIAMO A CELEBRARE IL NOSTRO MATRIMONIO",
    month: "LUGLIO",
    dayWeekYear: "MARTEDÌ 2027",
    heldAt: "PRESSO",
    venue: "Son Bunyola, Maiorca",
    scrollPrompt: "Scorri in basso",
    countdownTitle: "Conto alla Rovescia",
    countdownSub: "Fino al 27 Luglio 2027",
    days: "Giorni",
    hours: "Ore",
    minutes: "Minuti",
    seconds: "Secondi",
    storyTitle: "La Nostra Storia",
    storyP1: "Alcune delle storie d'amore più belle nascono in modo inaspettato, e la nostra non ha fatto eccezione.",
    storyP2: "Quello che era iniziato come un incontro casuale si è presto trasformato in conversazioni infinite, avventure spontanee e ricordi indimenticabili.",
    storyP3: "Lungo il cammino, abbiamo scoperto il nostro posto preferito al mondo: l'uno accanto all'altra.",
    storyP4: "E ora siamo pronti per la nostra avventura più grande: una vita insieme.",
    storySign: "Diana e Richard",
    soireeBadge: "26 LUGLIO",
    soireeTitle: "Welcome Soirée",
    soireeVenue: "Sa Terrassa",
    soireeDesc: "Unitevi a noi per una serata intima tra cocktail e vista sul Mediterraneo, dando inizio ai festeggiamenti a Son Bunyola.",
    soireeTime: "LUNEDÌ 26 LUGLIO 2027 · ORE 19:00",
    celebrationBadge: "IL GIORNO DELLE NOZZE",
    celebrationTitle: "La Celebrazione",
    celebrationSub: "CERIMONIA & CENA",
    celebrationVenue: "Sa Tafona",
    celebrationDesc: "Cerimonia nei giardini al tramonto dietro la catena montuosa della Tramuntana, seguita da cena e festeggiamenti sotto le stelle.",
    celebrationTime: "MARTEDÌ 27 LUGLIO 2027 · ORE 17:30",
    viewMap: "VEDI SULLA MAPPA",
    theDayTitle: "Il Programma",
    theDayBadge: "MARTEDÌ 27 LUGLIO",
    theDaySub: "La nostra giornata di nozze, dai drink al tramonto all'ultimo ballo",
    t1: "Arrivo Ospiti & Drink di Benvenuto",
    t2: "Cerimonia Nuziale",
    t3: "Cocktail Hour",
    t4: "Cena di Gala",
    t5: "Taglio della Torta & Brindisi",
    t6: "Primo Ballo",
    t7: "Danze sotto le Stelle",
    t8: "Buonanotte",
    dressCodeTitle: "Dress Code",
    dressCodeBadge: "BLACK TIE",
    dressCodeQuote: "«Sotto il cielo del Mediterraneo, con il mare a farci da testimone: indossa l'abito che hai sempre sognato e danza finché l'ultima stella non svanirà.»",
    stayTitle: "Dove Alloggiare",
    staySub: "HOTEL CONSIGLIATI VICINO ALLA LOCATION",
    h1Badge: "TARIFFA ESCLUSIVA RISERVATA AGLI OSPITI",
    h1Rate: "€650 per notte · camera doppia con colazione",
    h1Note: "Una tariffa speciale convenzionata di €650 a notte è riservata in esclusiva per i nostri ospiti.",
    h1Addr: "Finca Son Bunyola, Ctra. C-710, 07191 Banyalbufar",
    h1Park: "Parcheggio gratuito in loco",
    h2Badge: "HOTEL PARTNER NELLE VICINANZE",
    h2Rate: "€180 per notte · camera doppia con colazione",
    h2Addr: "Carrer Borguny 1, 07191 Banyalbufar",
    h2Dist: "9 km · circa 25 minuti in auto",
    bookStay: "PRENOTA IL TUO SOGGIORNO",
    giftTitle: "Lista Nozze",
    giftText: "La vostra presenza al nostro matrimonio è per noi il dono più prezioso e gradito. Se desiderate comunque onorarci con un regalo, prediligiamo con affetto un contributo per il nostro viaggio di nozze.",
    viewBank: "DETTAGLI BANCARI & IBAN",
    rsvpTitle: "RSVP",
    rsvpSub: "È GRADITA CONFERMA ENTRO IL 15 MAGGIO 2027",
    labelName: "Nome e Cognome Ospite/i",
    labelAttend: "Confermi la tua presenza?",
    attendingYes: "Sì, ci sarò con gioia!",
    attendingNo: "Con rammarico non potrò",
    labelGuests: "Numero di Partecipanti",
    labelDiet: "Esigenze alimentari / Intolleranze",
    dietNone: "Nessuna preferenza particolare",
    dietVeg: "Vegetariano",
    dietVegan: "Vegano",
    dietGluten: "Senza Glutine (Celiaco)",
    dietOther: "Altro / Allergie specifiche",
    labelSong: "Quale canzone ti farà scendere in pista?",
    btnSubmit: "INVIA CONFERMA",
    rsvpThanks: "Grazie di cuore! La tua risposta è stata registrata.",
    ibanCopied: "IBAN copiato negli appunti!"
  },
  en: {
    tapPrompt: "Tap to open the invitation",
    replay: "↺ Replay Envelope",
    inviteLine: "WE INVITE YOU TO CELEBRATE OUR WEDDING",
    month: "JULY",
    dayWeekYear: "TUESDAY 2027",
    heldAt: "TO BE HELD AT",
    venue: "Son Bunyola, Mallorca",
    scrollPrompt: "Scroll down",
    countdownTitle: "Countdown",
    countdownSub: "Until 27 July 2027",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    storyTitle: "Our Story",
    storyP1: "Some of the best love stories begin unexpectedly, and ours was no different.",
    storyP2: "What started as a chance encounter soon became endless conversations, spontaneous adventures, and countless memories together.",
    storyP3: "Somewhere along the way, we found our favorite place: by each other's side.",
    storyP4: "And now, we're ready for our greatest adventure yet — a lifetime together.",
    storySign: "Diana and Richard",
    soireeBadge: "26TH JULY",
    soireeTitle: "Welcome Soirée",
    soireeVenue: "Sa Terrassa",
    soireeDesc: "Join us for an intimate evening of cocktails and Mediterranean views as we begin our celebrations at Son Bunyola.",
    soireeTime: "MONDAY, 26 JULY 2027 · 7:00 PM",
    celebrationBadge: "THE WEDDING DAY",
    celebrationTitle: "The Celebration",
    celebrationSub: "CEREMONY & DINNER",
    celebrationVenue: "Sa Tafona",
    celebrationDesc: "A ceremony in the gardens at sunset behind the Tramuntana, followed by dinner and dancing under the stars.",
    celebrationTime: "TUESDAY, 27 JULY 2027 · 5:30 PM",
    viewMap: "VIEW ON MAP",
    theDayTitle: "The Day",
    theDayBadge: "TUESDAY 27 JULY",
    theDaySub: "Our wedding day, from sunset drinks to the last dance",
    t1: "Guests Arrival & Welcome Drinks",
    t2: "Ceremony",
    t3: "Cocktail Hour",
    t4: "Dinner",
    t5: "Cake & Toasts",
    t6: "First Dance",
    t7: "Dancing under the Stars",
    t8: "Goodnight",
    dressCodeTitle: "Dress Code",
    dressCodeBadge: "BLACK TIE",
    dressCodeQuote: "“Under a Mediterranean sky, with the sea as our witness — wear the dress you have dreamed of, and dance until the last star fades.”",
    stayTitle: "Where to Stay",
    staySub: "RECOMMENDED HOTELS NEAR THE VENUE",
    h1Badge: "EXCLUSIVE WEDDING GUEST RATE",
    h1Rate: "€650 per night · double room breakfast included",
    h1Note: "A special fixed rate of €650 per night has been reserved exclusively for our wedding guests.",
    h1Addr: "Finca Son Bunyola, Ctra. C-710, 07191 Banyalbufar",
    h1Park: "Free on-site parking",
    h2Badge: "NEARBY BOUTIQUE HOTEL",
    h2Rate: "€180 per night · double room breakfast included",
    h2Addr: "Carrer Borguny 1, 07191 Banyalbufar",
    h2Dist: "9 km · about 25 min by car",
    bookStay: "BOOK YOUR STAY",
    giftTitle: "Wedding Gift",
    giftText: "Your presence is our greatest gift. If you wish to honour us with a gift, we kindly prefer monetary contributions toward our honeymoon.",
    viewBank: "VIEW BANK DETAILS",
    rsvpTitle: "RSVP",
    rsvpSub: "KINDLY RESPOND BY MAY 15, 2027",
    labelName: "Guest Name(s)",
    labelAttend: "Will you attend?",
    attendingYes: "Joyfully Accept!",
    attendingNo: "Regretfully Decline",
    labelGuests: "Number of Guests",
    labelDiet: "Dietary Requirements / Allergies",
    dietNone: "No dietary restrictions",
    dietVeg: "Vegetarian",
    dietVegan: "Vegan",
    dietGluten: "Gluten-Free",
    dietOther: "Other / Specific Allergies",
    labelSong: "What song will get you on the dancefloor?",
    btnSubmit: "SEND RSVP",
    rsvpThanks: "Thank you so much! Your response has been saved.",
    ibanCopied: "IBAN copied to clipboard!"
  },
  de: {
    tapPrompt: "Tippen, um die Einladung zu öffnen",
    replay: "↺ Umschlag wiederholen",
    inviteLine: "WIR LADEN EUCH HERZLICH ZU UNSERER HOCHZEIT EIN",
    month: "JULI",
    dayWeekYear: "DIENSTAG 2027",
    heldAt: "VERANSTALTUNGSORT",
    venue: "Son Bunyola, Mallorca",
    scrollPrompt: "Nach unten scrollen",
    countdownTitle: "Countdown",
    countdownSub: "Bis zum 27. Juli 2027",
    days: "Tage",
    hours: "Stunden",
    minutes: "Minuten",
    seconds: "Sekunden",
    storyTitle: "Unsere Geschichte",
    storyP1: "Einige der schönsten Liebesgeschichten beginnen ganz unerwartet, und unsere war keine Ausnahme.",
    storyP2: "Aus einer zufälligen Begegnung wurden schnell endlose Gespräche, spontane Reisen und unzählige gemeinsame Erinnerungen.",
    storyP3: "Irgendwann stellten wir fest, dass unser liebster Ort der Welt direkt an der Seite des anderen ist.",
    storyP4: "Und jetzt sind wir bereit für unser größtes Abenteuer: ein ganzes Leben zu zweit.",
    storySign: "Diana und Richard",
    soireeBadge: "26. JULI",
    soireeTitle: "Welcome Soirée",
    soireeVenue: "Sa Terrassa",
    soireeDesc: "Feiert mit uns einen stimmungsvollen Vorabend mit Cocktails und mediterranem Ausblick auf Son Bunyola.",
    soireeTime: "MONTAG, 26. JULI 2027 · 19:00 UHR",
    celebrationBadge: "DER HOCHZEITSTAG",
    celebrationTitle: "Die Feier",
    celebrationSub: "ZEREMONIE & DINNER",
    celebrationVenue: "Sa Tafona",
    celebrationDesc: "Trauung im Garten bei Sonnenuntergang hinter der Tramuntana, gefolgt von Festessen und Tanz unter dem Sternenhimmel.",
    celebrationTime: "DIENSTAG, 27. JULI 2027 · 17:30 UHR",
    viewMap: "AUF DER KARTE ANZEIGEN",
    theDayTitle: "Tagesablauf",
    theDayBadge: "DIENSTAG, 27. JULI",
    theDaySub: "Unser Hochzeitstag von den Sundowner-Drinks bis zum letzten Tanz",
    t1: "Ankunft der Gäste & Welcome Drinks",
    t2: "Trauungszeremonie",
    t3: "Cocktail Hour",
    t4: "Festliches Dinner",
    t5: "Hochzeitstorte & Trinksprüche",
    t6: "Eröffnungstanz",
    t7: "Tanzen unter den Sternen",
    t8: "Gute Nacht",
    dressCodeTitle: "Dresscode",
    dressCodeBadge: "BLACK TIE",
    dressCodeQuote: "„Unter dem mediterranen Himmel und mit dem Meer als Zeuge – tragt euer Traumkleid und tanzt, bis der Morgen graut.“",
    stayTitle: "Unterkünfte",
    staySub: "EMPFOHLENE HOTELS IN DER NÄHE",
    h1Badge: "EXKLUSIVER GÄSTETARIF",
    h1Rate: "€650 pro Nacht · Doppelzimmer inkl. Frühstück",
    h1Note: "Ein spezieller Festpreis von €650 pro Nacht wurde exklusiv für unsere Hochzeitsgäste reserviert.",
    h1Addr: "Finca Son Bunyola, Ctra. C-710, 07191 Banyalbufar",
    h1Park: "Kostenlose Parkplätze vor Ort",
    h2Badge: "BOUTIQUE HOTEL IN DER NÄHE",
    h2Rate: "€180 pro Nacht · Doppelzimmer inkl. Frühstück",
    h2Addr: "Carrer Borguny 1, 07191 Banyalbufar",
    h2Dist: "9 km · ca. 25 Min. mit dem Auto",
    bookStay: "ZIMMER RESERVIEREN",
    giftTitle: "Hochzeitsgeschenk",
    giftText: "Eure Anwesenheit an unserem großen Tag ist das größte Geschenk für uns. Wenn ihr uns dennoch eine Freude machen möchtet, freuen wir uns über einen Beitrag zu unseren Flitterwochen.",
    viewBank: "BANKVERBINDUNG ANZEIGEN",
    rsvpTitle: "Rückmeldung (RSVP)",
    rsvpSub: "BITTE GEBT UNS BIS ZUM 15. MAI 2027 BESCHEID",
    labelName: "Name(n) der Gäste",
    labelAttend: "Kommst du zur Hochzeit?",
    attendingYes: "Ja, ich bin von Herzen gerne dabei!",
    attendingNo: "Leider kann ich nicht teilnehmen",
    labelGuests: "Anzahl Personen",
    labelDiet: "Besondere Ernährung / Allergien",
    dietNone: "Keine Einschränkungen",
    dietVeg: "Vegetarisch",
    dietVegan: "Vegan",
    dietGluten: "Glutenfrei",
    dietOther: "Andere / Spezifische Allergien",
    labelSong: "Welcher Song bringt dich auf die Tanzfläche?",
    btnSubmit: "ANTWORT ABSENDEN",
    rsvpThanks: "Herzlichen Dank! Deine Rückmeldung wurde gespeichert.",
    ibanCopied: "IBAN in die Zwischenablage kopiert!"
  }
};

let currentLang = 'it';

function setLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  const nameInput = document.getElementById('rsvpGuestName');
  if (nameInput) {
    nameInput.placeholder = lang === 'it' ? 'es. Mario e Chiara Rossi' : (lang === 'de' ? 'z.B. Max und Anna Muster' : 'e.g. John & Jane Doe');
  }
}

// ----------------------------------------------------
// ENVELOPE OPENING VIDEO ORCHESTRATION
// ----------------------------------------------------

function startMusicImmediately() {
  const audio = document.getElementById('weddingAudio');
  const audioBtn = document.getElementById('floatingAudioBtn');
  if (audio && audio.paused) {
    audio.play().then(() => {
      if (audioBtn) audioBtn.classList.add('playing');
    }).catch(e => console.log('Audio autoplay prevented:', e));
  }
}

let isEnvelopeOpened = false;

function openEnvelope() {
  if (isEnvelopeOpened) return;
  isEnvelopeOpened = true;

  const video = document.getElementById('envelopeVideo');
  const poster = document.getElementById('envelopePosterImg');
  const prompt = document.getElementById('tapPrompt');
  const audio = document.getElementById('weddingAudio');
  const audioBtn = document.getElementById('floatingAudioBtn');
  const scroller = document.getElementById('invitationScroller');
  const screen = document.getElementById('envelopeScreen');
  const replayBtn = document.getElementById('replayBtn');

  // 1. Hide tap prompt immediately
  if (prompt) {
    prompt.style.transition = 'opacity 0.3s ease';
    prompt.style.opacity = '0';
  }

  // 2. Start background romantic music
  if (audio) {
    audio.play().then(() => {
      if (audioBtn) audioBtn.classList.add('playing');
    }).catch(e => console.log('Audio autoplay prevented:', e));
  }

  // 3. Play envelope video
  if (video) {
    video.currentTime = 0;
    video.play().catch(e => {
      console.log('Video play error:', e);
      finishOpening();
    });

    // When video is almost finished, transition to scrollable invitation
    let hasTransitioned = false;
    const checkTransition = () => {
      // Hide static poster as soon as video has rendered its first frame (> 0.04s)
      if (video.currentTime > 0.04 && poster && !poster.classList.contains('is-hidden')) {
        poster.classList.add('is-hidden');
      }

      if (hasTransitioned) return;
      // When video is ~0.9 seconds from end (letter emerging), start crossfading
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

    // Start animated living video background for the first page ("quel riquadro")
    const heroVid = document.getElementById('heroVideo');
    if (heroVid) {
      heroVid.playbackRate = 0.5;
      heroVid.play().catch(() => {});
    }

    // Explicitly add is-visible class to ensure text is 100% visible
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

function replayEnvelope() {
  isEnvelopeOpened = false;
  const video = document.getElementById('envelopeVideo');
  const poster = document.getElementById('envelopePosterImg');
  const prompt = document.getElementById('tapPrompt');
  const scroller = document.getElementById('invitationScroller');
  const screen = document.getElementById('envelopeScreen');
  const replayBtn = document.getElementById('replayBtn');

  scroller.classList.remove('is-active');
  scroller.scrollTop = 0;

  const heroText = document.getElementById('heroTextOverlay');
  if (heroText) heroText.classList.remove('is-visible');

  const heroVid = document.getElementById('heroVideo');
  if (heroVid) {
    heroVid.pause();
    heroVid.currentTime = 0;
  }

  screen.classList.remove('opened-hidden');
  screen.style.transition = 'opacity 0.6s ease';
  screen.style.opacity = '1';
  screen.style.pointerEvents = 'auto';

  if (poster) poster.classList.remove('is-hidden');
  if (prompt) prompt.style.opacity = '1';
  if (replayBtn) replayBtn.classList.remove('is-visible');

  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}

// ----------------------------------------------------
// AUDIO CONTROLLER & PAGE LIFECYCLE (Auto-pause when leaving/switching tabs)
// ----------------------------------------------------
let wasPlayingBeforeHidden = false;

// Ferma la musica quando si cambia scheda, si minimizza il browser o si passa ad altra app
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
    // Quando si torna sulla pagina dell'invito, riprendi la musica se era attiva
    if (wasPlayingBeforeHidden && isEnvelopeOpened) {
      audio.play().then(() => {
        if (audioBtn) audioBtn.classList.add('playing');
      }).catch(() => {});
    }
  }
});

// Ferma l'audio alla chiusura della pagina o del browser
window.addEventListener('pagehide', () => {
  const audio = document.getElementById('weddingAudio');
  if (audio) {
    audio.pause();
  }
});

window.addEventListener('beforeunload', () => {
  const audio = document.getElementById('weddingAudio');
  if (audio) {
    audio.pause();
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
// LIVE REAL-TIME COUNTDOWN
// ----------------------------------------------------
function initCountdown() {
  const weddingDate = new Date('2027-07-27T17:30:00+02:00').getTime();

  function update() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
      document.getElementById('countDays').textContent = '0';
      document.getElementById('countHours').textContent = '0';
      document.getElementById('countMinutes').textContent = '0';
      document.getElementById('countSeconds').textContent = '0';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const elDays = document.getElementById('countDays');
    const elHours = document.getElementById('countHours');
    const elMin = document.getElementById('countMinutes');
    const elSec = document.getElementById('countSeconds');

    if (elDays) elDays.textContent = days;
    if (elHours) elHours.textContent = hours;
    if (elMin) elMin.textContent = minutes;
    if (elSec) elSec.textContent = seconds;
  }

  update();
  setInterval(update, 1000);
}

// ----------------------------------------------------
// MODALS (Bank Details & Map)
// ----------------------------------------------------
function openBankModal() {
  const modal = document.getElementById('bankModal');
  if (modal) modal.classList.add('is-active');
}

function closeBankModal() {
  const modal = document.getElementById('bankModal');
  if (modal) modal.classList.remove('is-active');
}

function openMapModal() {
  const modal = document.getElementById('mapModal');
  if (modal) modal.classList.add('is-active');
}

function closeMapModal() {
  const modal = document.getElementById('mapModal');
  if (modal) modal.classList.remove('is-active');
}

function showToast(message) {
  const toast = document.getElementById('toastMsg');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

function copyIban() {
  const ibanText = "ES91 2100 0418 4502 0005 1234";
  navigator.clipboard.writeText(ibanText.replace(/\s+/g, '')).then(() => {
    showToast(i18n[currentLang].ibanCopied || "IBAN copiato!");
  }).catch(() => {
    showToast(ibanText);
  });
}

// ----------------------------------------------------
// RSVP FORM & CELEBRATORY CONFETTI
// ----------------------------------------------------
function handleRsvpSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('rsvpGuestName').value.trim();
  const attending = document.querySelector('input[name="attending"]:checked')?.value || 'yes';
  const count = document.getElementById('rsvpGuestCount').value;
  const dietarySelect = document.getElementById('rsvpDietary');
  const dietary = dietarySelect ? dietarySelect.options[dietarySelect.selectedIndex].text : '';
  const song = document.getElementById('rsvpSong') ? document.getElementById('rsvpSong').value.trim() : '';

  if (!name) {
    alert(currentLang === 'it' ? 'Inserisci il tuo nome!' : 'Please enter your name!');
    return;
  }

  // Se ospitato su Aruba (o qualsiasi host PHP), invia i dati a save_rsvp.php
  fetch('save_rsvp.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name,
      attending: attending,
      guests: count,
      dietary: dietary,
      song: song
    })
  }).catch(() => {
    // Ignora silenziosamente se in ambiente locale statico
  });

  fireConfetti();

  const formBox = document.getElementById('rsvpFormContainer');
  formBox.innerHTML = `
    <div style="text-align: center; padding: 25px 10px;">
      <div style="font-size: 38px; margin-bottom: 12px;">🥂 ✨</div>
      <h3 style="font-family: var(--font-serif); font-size: 26px; color: #243526; margin-bottom: 8px;">
        ${attending === 'yes' ? (currentLang === 'it' ? 'Ci vediamo a Maiorca!' : (currentLang === 'de' ? 'Wir freuen uns auf euch!' : 'See you in Mallorca!')) : (currentLang === 'it' ? 'Grazie per aver risposto' : 'Thank you for your response')}
      </h3>
      <p style="font-size: 13px; color: #6b6358; line-height: 1.6; margin-bottom: 16px;">
        ${i18n[currentLang].rsvpThanks}
      </p>
      <div style="font-size: 11px; color: #8c8173; border-top: 1px solid #ebd9c2; padding-top: 12px;">
        <strong>${name}</strong> (${count} ${currentLang === 'it' ? 'ospite/i' : 'guest/s'})
      </div>
    </div>
  `;
}

function fireConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ['#dfc59b', '#c5a880', '#e2a89b', '#41758e', '#ffffff', '#243526', '#f6f1e7'];

  for (let i = 0; i < 95; i++) {
    pieces.push({
      x: canvas.width / 2,
      y: canvas.height * 0.7,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 1.25) * 16,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rSpeed: (Math.random() - 0.5) * 12,
      alpha: 1
    });
  }

  let animationFrame;
  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45;
      p.rotation += p.rSpeed;
      p.alpha -= 0.009;

      if (p.alpha > 0) {
        alive = true;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }
    });

    if (alive) {
      animationFrame = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  render();
}

// ----------------------------------------------------
// DOCUMENT INITIALIZATION
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const envelopeStage = document.getElementById('envelopeStage');
  const envelopeScreen = document.getElementById('envelopeScreen');
  const tapPrompt = document.getElementById('tapPrompt');

  if (envelopeStage) {
    envelopeStage.addEventListener('click', openEnvelope);
  }
  if (envelopeScreen) {
    envelopeScreen.addEventListener('click', openEnvelope);
  }
  if (tapPrompt) {
    tapPrompt.addEventListener('click', (e) => {
      e.stopPropagation();
      openEnvelope();
    });
  }

  const audioBtn = document.getElementById('floatingAudioBtn');
  if (audioBtn) {
    audioBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleAudio();
    });
  }

  const replayBtn = document.getElementById('replayBtn');
  if (replayBtn) {
    replayBtn.addEventListener('click', replayEnvelope);
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      setLanguage(btn.dataset.lang);
    });
  });

  const closeBank = document.getElementById('closeBankBtn');
  if (closeBank) closeBank.addEventListener('click', closeBankModal);

  const closeMap = document.getElementById('closeMapBtn');
  if (closeMap) closeMap.addEventListener('click', closeMapModal);

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('is-active');
      }
    });
  });

  const copyBtn = document.getElementById('copyIbanBtn');
  if (copyBtn) copyBtn.addEventListener('click', copyIban);

  const rsvpForm = document.getElementById('rsvpForm');
  if (rsvpForm) rsvpForm.addEventListener('submit', handleRsvpSubmit);


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

  initCountdown();
  setLanguage('it');
});
