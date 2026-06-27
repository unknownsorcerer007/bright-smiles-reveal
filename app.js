/* ==========================================
   BRIGHT SMILES — PRODUCTION APP.JS
   v3: Branding, frictionless UX, templates, haptics
   ========================================== */

// ==========================================
// CONFIG — Change these per clinic
// ==========================================
const CONFIG = {
    googlePlaceId: "ChIJT4N1hQ-1j4ARgJ6S0h4FqC4",
    clinicName: "Bright Smiles",
    contactEmail: "unknownsorcerer007@gmail.com"
};

// ==========================================
// KEYWORDS DATABASE BY STAR RATING
// ==========================================
const STAR_KEYWORDS = {
    1: {
        vibes: ["Long Wait", "Rude Staff", "Surprise Billing", "Rough Dentist", "Unhelpful Desk", "Pushy Sales", "Poor Hygiene", "Dirty Clinic"],
        menu: ["Painful Cleaning", "Aggressive Upsell", "Failed Filling", "Wrong Estimate", "Late Appointment", "Rushed Exam"]
    },
    2: {
        vibes: ["Average Care", "Unorganized Billing", "Cold Atmosphere", "Rushed Service", "Impersonal Team", "Noisy Clinic", "Long Delay"],
        menu: ["Hurried Cleaning", "Delayed Crowns", "High Charges", "Bumpy Root Canal", "Basic Checkup", "Rough Scaling"]
    },
    3: {
        vibes: ["Decent Treatment", "Standard Waiting", "Clean Enough", "Standard Visit", "Okay Bedside Manner", "Fair Service", "Polite Desk"],
        menu: ["Standard Cleaning", "Normal X-Rays", "Fair Filling", "Decent Checkup", "Average Crowning", "Basic Polishing"]
    },
    4: {
        vibes: ["Friendly Staff", "Short Wait", "Clean Office", "Caring Dentist", "Clear Pricing", "Comfortable Chair", "Kind Hygienist"],
        menu: ["Gentle Cleaning", "Smooth Extraction", "Easy Filling", "Thorough Exam", "Quick Crowns", "Clean Sealing"]
    },
    5: {
        vibes: ["Pain-Free Care", "Amazing Staff", "Pristine Clinic", "Exemplary Bedside", "Honest Pricing", "Warm Welcome", "Expert Dentist"],
        menu: ["Flawless Implant", "Perfect Crown", "Painless Root Canal", "Bright Teeth Whitening", "Sparkling Veneers", "Gentle Scaling"]
    }
};

// ==========================================
// JOKES, FOOTERS & TEMPLATES
// ==========================================
const JOKES = {
    spa: [
        "I told my dentist I wanted a crown. He gave me one and said, 'Now you rule the waiting room!' 👑",
        "Why did the tooth go to the spa? It was feeling a bit decayed and needed to brush off some stress! 🧖‍♂️",
        "My dentist told me to relax. I said I'm relaxed, I'm just grinding my teeth in my sleep to save time! 😴",
        "What does a dentist do at a spa? Scaling back on stress! 🧘‍♂️"
    ],
    vacation: [
        "Where do teeth go on vacation? To the beach, to get some fresh enamel and clean tide! 🏖️",
        "Why did the tooth drive a convertible? To feel the wind in its crowns! 🏎️",
        "Taking a vacation from plaque and tartar. Ultimate dental freedom! 🏝️",
        "What is a tooth's favorite vacation destination? Fill-adelphia! ✈️"
    ],
    camera: [
        "Why did the tooth smile for the camera? Because it knew it was lookin' brilliant and bright! 📸",
        "What did the camera say to the clean tooth? 'You make me feel so photogenic!' ✨",
        "Keep smiling! It makes people wonder what you've been up to... or if you just got a dental cleaning! 😁",
        "Say 'Cheese'? No, say 'Bright Smiles'! 🦷"
    ]
};

const FOOTERS = [
    "Your Smile Is A Lot For Us",
    "Smile Responsibly",
    "Compliments Ahead",
    "Handle This Smile With Care"
];

const REVIEW_TEMPLATES = {
    1: (v1, v2, t) => `I had a really disappointing visit. The main issues were ${v1.toLowerCase()} and ${v2.toLowerCase()}, which made the whole experience frustrating. On top of that, the ${t.toLowerCase()} was not what I expected at all. I hope the clinic takes this feedback seriously and improves.`,
    2: (v1, v2, t) => `My visit was below average. I noticed ${v1.toLowerCase()} and ${v2.toLowerCase()}, which affected my overall experience. The ${t.toLowerCase()} could also use improvement. There's definitely room to do better.`,
    3: (v1, v2, t) => `It was an okay visit overall. I'd describe the experience as ${v1.toLowerCase()} with ${v2.toLowerCase()}. The ${t.toLowerCase()} was acceptable but nothing stood out. Average visit, average expectations met.`,
    4: (v1, v2, t) => `Really positive visit! The ${v1.toLowerCase()} and ${v2.toLowerCase()} made me feel well taken care of. The ${t.toLowerCase()} was smooth and professional. Would recommend to friends and family.`,
    5: (v1, v2, t) => `Absolutely outstanding experience! From the ${v1.toLowerCase()} to the ${v2.toLowerCase()}, everything was exceptional. The ${t.toLowerCase()} was flawless. This clinic truly cares about their patients. Best dental visit I've ever had!`
};

// ==========================================
// APP STATE
// ==========================================
const state = {
    currentScreen: 'stars',
    selectedStars: 0,
    selectedVibes: [],
    selectedMenu: [],
    selectedKeywords: [],
    cardTheme: '',
    cardImage: '',
    joke: '',
    footer: '',
    isCopied: false,
    isScratched: false,
    screenHistory: []
};

// ==========================================
// DOM REFS
// ==========================================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const dom = {
    screens: {
        stars: $('#screen-stars'),
        keywords: $('#screen-keywords'),
        writer: $('#screen-writer'),
        scratch: $('#screen-scratch'),
        share: $('#screen-share')
    },
    backBtn: $('#back-btn'),
    progressBar: $('#progress-bar'),
    starBtns: $$('.star-btn'),
    ratingFeedback: $('#rating-feedback'),
    containerVibes: $('#container-vibes'),
    containerMenu: $('#container-menu'),
    vibeCount: $('#vibe-count'),
    menuCount: $('#menu-count'),
    btnConfirmKeywords: $('#btn-confirm-keywords'),
    keywordTracker: $('#keyword-tracker'),
    reviewText: $('#review-text'),
    reviewCharCount: $('#review-char-count'),
    reviewQuality: $('#review-quality'),
    btnCopyReview: $('#btn-copy-review'),
    copySubtext: $('#copy-subtext'),
    btnGotoGoogle: $('#btn-goto-google'),
    btnVerifyClaim: $('#btn-verify-claim'),
    scratchContainer: $('#scratch-container'),
    scratchCanvas: $('#scratch-canvas'),
    btnGoToShare: $('#btn-go-to-share'),
    btnShareInstagram: $('#btn-share-instagram'),
    btnShareWhatsapp: $('#btn-share-whatsapp'),
    btnRestart: $('#btn-restart'),
    btnSkipGoogle: $('#btn-skip-google'),
    toast: $('#app-toast'),
    confettiCanvas: $('#confetti-canvas')
};

// ==========================================
// HAPTIC FEEDBACK (Vibration API)
// ==========================================
function haptic(type = 'light') {
    if (!navigator.vibrate) return;
    switch (type) {
        case 'light': navigator.vibrate(10); break;
        case 'success': navigator.vibrate([10, 50, 10]); break;
        case 'error': navigator.vibrate([50, 30, 50]); break;
    }
}

// ==========================================
// SCREEN NAVIGATION
// ==========================================
const SCREEN_STEPS = { stars: 1, keywords: 2, writer: 3, scratch: 4, share: 4 };

function navigateTo(screenId, pushHistory = true) {
    if (pushHistory && state.currentScreen) {
        state.screenHistory.push(state.currentScreen);
    }

    Object.values(dom.screens).forEach(s => s.classList.remove('active'));

    const target = dom.screens[screenId];
    if (target) {
        target.classList.add('active');
        target.style.animation = 'none';
        target.offsetHeight;
        target.style.animation = '';
    }

    state.currentScreen = screenId;

    const step = SCREEN_STEPS[screenId] || 1;
    dom.progressBar.style.width = `${(step / 4) * 100}%`;

    $$('.step-dot').forEach((dot, i) => {
        dot.classList.remove('active', 'completed');
        if (i + 1 < step) dot.classList.add('completed');
        else if (i + 1 === step) dot.classList.add('active');
    });
    $$('.step-connector').forEach((conn, i) => {
        conn.classList.toggle('active', i + 1 < step);
    });

    dom.backBtn.classList.toggle('visible', state.screenHistory.length > 0);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBack() {
    if (state.screenHistory.length === 0) return;
    const prev = state.screenHistory.pop();
    navigateTo(prev, false);
}

// ==========================================
// SCREEN 1: STAR RATING
// ==========================================
const RATING_LABELS = {
    1: "We're sorry to hear that 😔",
    2: "We can do better 🤔",
    3: "Thanks for the honest feedback 👍",
    4: "Glad you had a good visit! 😊",
    5: "That's amazing! 🌟"
};

function initStarRating() {
    dom.starBtns.forEach(btn => {
        const val = parseInt(btn.dataset.value);

        btn.addEventListener('click', () => {
            state.selectedStars = val;

            dom.starBtns.forEach((b, i) => {
                b.classList.toggle('selected', i < val);
                b.setAttribute('aria-checked', i < val ? 'true' : 'false');
            });

            dom.ratingFeedback.textContent = RATING_LABELS[val] || '';
            dom.ratingFeedback.classList.add('highlight');

            haptic('light');
            if (val === 5) spawnConfetti(30);

            setTimeout(() => {
                initKeywordsScreen();
                navigateTo('keywords');
            }, 800);
        });

        btn.addEventListener('mouseenter', () => {
            dom.starBtns.forEach((b, i) => b.classList.toggle('hover', i < val));
        });
        btn.addEventListener('mouseleave', () => {
            dom.starBtns.forEach(b => b.classList.remove('hover'));
        });
    });
}

// ==========================================
// SCREEN 2: KEYWORD SELECTION
// ==========================================
function initKeywordsScreen() {
    state.selectedVibes = [];
    state.selectedMenu = [];
    dom.btnConfirmKeywords.disabled = true;

    const keywords = STAR_KEYWORDS[state.selectedStars] || STAR_KEYWORDS[5];

    dom.containerVibes.innerHTML = '';
    keywords.vibes.forEach(kw => {
        const chip = document.createElement('button');
        chip.className = 'chip';
        chip.textContent = kw;
        chip.addEventListener('click', () => toggleVibe(chip, kw));
        dom.containerVibes.appendChild(chip);
    });

    dom.containerMenu.innerHTML = '';
    keywords.menu.forEach(kw => {
        const chip = document.createElement('button');
        chip.className = 'chip';
        chip.textContent = kw;
        chip.addEventListener('click', () => toggleMenu(chip, kw));
        dom.containerMenu.appendChild(chip);
    });

    updateCounters();
}

function toggleVibe(chip, keyword) {
    const idx = state.selectedVibes.indexOf(keyword);
    if (idx > -1) {
        state.selectedVibes.splice(idx, 1);
        chip.classList.remove('selected');
    } else {
        if (state.selectedVibes.length >= 2) {
            showToast('Max 2 experience aspects');
            haptic('error');
            return;
        }
        state.selectedVibes.push(keyword);
        chip.classList.add('selected');
        pulseElement(chip);
        haptic('light');
    }
    updateCounters();
    validateKeywords();
}

function toggleMenu(chip, keyword) {
    const idx = state.selectedMenu.indexOf(keyword);
    if (idx > -1) {
        state.selectedMenu.splice(idx, 1);
        chip.classList.remove('selected');
    } else {
        dom.containerMenu.querySelectorAll('.chip.selected').forEach(c => c.classList.remove('selected'));
        state.selectedMenu = [keyword];
        chip.classList.add('selected');
        pulseElement(chip);
        haptic('light');
    }
    updateCounters();
    validateKeywords();
}

function updateCounters() {
    dom.vibeCount.textContent = `${state.selectedVibes.length}/2`;
    dom.menuCount.textContent = `${state.selectedMenu.length}/1`;
}

function validateKeywords() {
    const isComplete = state.selectedVibes.length === 2 && state.selectedMenu.length === 1;
    dom.btnConfirmKeywords.disabled = !isComplete;

    // Auto-advance when all keywords selected
    if (isComplete) {
        haptic('success');
        setTimeout(() => {
            state.selectedKeywords = [...state.selectedVibes, ...state.selectedMenu];
            state.footer = FOOTERS[Math.floor(Math.random() * FOOTERS.length)];
            assignCardTheme();
            initWriterScreen();
            navigateTo('writer');
        }, 400);
    }
}

// Manual button click fallback
dom.btnConfirmKeywords.addEventListener('click', () => {
    state.selectedKeywords = [...state.selectedVibes, ...state.selectedMenu];
    state.footer = FOOTERS[Math.floor(Math.random() * FOOTERS.length)];
    assignCardTheme();
    initWriterScreen();
    navigateTo('writer');
});

function assignCardTheme() {
    if (state.selectedStars <= 3) {
        state.cardTheme = 'spa';
        state.cardImage = 'char_spa.webp';
        state.joke = randomPick(JOKES.spa);
    } else {
        state.cardTheme = Math.random() < 0.5 ? 'vacation' : 'camera';
        state.cardImage = `char_${state.cardTheme}.webp`;
        state.joke = randomPick(JOKES[state.cardTheme]);
    }
}

// ==========================================
// SCREEN 3: REVIEW WRITER
// ==========================================
function initWriterScreen() {
    dom.reviewText.value = '';
    dom.reviewCharCount.textContent = '0 characters';
    dom.reviewQuality.textContent = 'Keep writing...';
    dom.reviewQuality.className = 'quality-indicator';
    dom.btnCopyReview.disabled = true;
    dom.copySubtext.textContent = 'Keywords missing';
    dom.btnGotoGoogle.style.display = 'none';
    dom.btnVerifyClaim.style.display = 'none';
    dom.btnCopyReview.style.display = 'flex';

    // Render keyword tracker
    dom.keywordTracker.innerHTML = '';
    state.selectedKeywords.forEach(kw => {
        const chip = document.createElement('span');
        chip.className = 'tracker-chip';
        chip.textContent = kw;
        chip.dataset.keyword = kw.toLowerCase();
        dom.keywordTracker.appendChild(chip);
    });

    // Generate template suggestion
    const templateFn = REVIEW_TEMPLATES[state.selectedStars];
    const templateCard = document.getElementById('template-card');
    const templateText = document.getElementById('template-text');
    const btnUseTemplate = document.getElementById('btn-use-template');
    if (templateFn && templateText && templateCard) {
        const [v1, v2, t] = state.selectedKeywords;
        templateText.textContent = `"${templateFn(v1, v2, t)}"`;
        templateCard.style.display = 'block';
        btnUseTemplate.onclick = () => {
            dom.reviewText.value = templateFn(v1, v2, t);
            dom.reviewText.dispatchEvent(new Event('input'));
            templateCard.style.display = 'none';
            haptic('light');
        };
    }
}

dom.reviewText.addEventListener('input', () => {
    const text = dom.reviewText.value;
    const len = text.length;
    dom.reviewCharCount.textContent = `${len} character${len !== 1 ? 's' : ''}`;

    // Check keywords (word boundary matching)
    let allFound = true;
    state.selectedKeywords.forEach(kw => {
        const chip = dom.keywordTracker.querySelector(`[data-keyword="${kw.toLowerCase()}"]`);
        const regex = new RegExp(`\\b${escapeRegex(kw)}\\b`, 'i');
        const found = regex.test(text);
        if (chip) chip.classList.toggle('found', found);
        if (!found) allFound = false;
    });

    // Quality indicator
    if (len < 20) {
        dom.reviewQuality.textContent = 'Keep writing...';
        dom.reviewQuality.className = 'quality-indicator';
    } else if (len < 80) {
        dom.reviewQuality.textContent = 'Good start!';
        dom.reviewQuality.className = 'quality-indicator good';
    } else if (len < 150) {
        dom.reviewQuality.textContent = 'Looking great!';
        dom.reviewQuality.className = 'quality-indicator good';
    } else {
        dom.reviewQuality.textContent = 'Excellent detail! ⭐';
        dom.reviewQuality.className = 'quality-indicator great';
    }

    if (allFound && len >= 20) {
        dom.btnCopyReview.disabled = false;
        dom.copySubtext.textContent = 'Ready to copy!';
    } else {
        dom.btnCopyReview.disabled = true;
        dom.copySubtext.textContent = !allFound ? 'Keywords missing' : 'Write a bit more...';
    }
});

// Copy review
dom.btnCopyReview.addEventListener('click', async () => {
    const text = dom.reviewText.value;
    try {
        await navigator.clipboard.writeText(text);
    } catch {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
    }

    state.isCopied = true;
    showToast('Review copied! ✓');
    haptic('success');
    spawnConfetti(20);

    dom.btnGotoGoogle.style.display = 'flex';
    dom.btnVerifyClaim.style.display = 'flex';
    dom.btnCopyReview.style.display = 'none';

    // Hide template card if still visible
    const tc = document.getElementById('template-card');
    if (tc) tc.style.display = 'none';
});

// Go to Google Reviews
dom.btnGotoGoogle.addEventListener('click', () => {
    window.open(`https://search.google.com/local/writereview?placeid=${CONFIG.googlePlaceId}`, '_blank');
});

// Skip to Google (quick exit)
if (dom.btnSkipGoogle) {
    dom.btnSkipGoogle.addEventListener('click', () => {
        window.open(`https://search.google.com/local/writereview?placeid=${CONFIG.googlePlaceId}`, '_blank');
    });
}

// Claim reward
dom.btnVerifyClaim.addEventListener('click', () => {
    navigateTo('scratch');
    requestAnimationFrame(() => setupScratchCard());
});

// ==========================================
// SCREEN 4: SCRATCH CARD
// ==========================================
let scratchCtx = null;
let isDrawing = false;

function setupScratchCard() {
    state.isScratched = false;
    dom.btnGoToShare.style.display = 'none';

    const revealCard = document.getElementById('scratch-reveal-card');
    if (revealCard) {
        revealCard.className = `scratch-reveal-card card-theme-${state.cardTheme}`;
        revealCard.innerHTML = `
            <div class="dynamic-card">
                <div class="card-brand-row">
                    <span>🦷</span>
                    <span>BRIGHT SMILES</span>
                </div>
                <div class="card-character">
                    <img src="${state.cardImage}" alt="Dental character">
                </div>
                <div class="card-joke">"${state.joke}"</div>
                <div class="card-footer-row">${state.footer} • BRIGHT SMILES</div>
            </div>
        `;
    }

    const container = dom.scratchContainer;
    const canvas = dom.scratchCanvas;
    const dpr = window.devicePixelRatio || 1;
    const w = container.clientWidth;
    const h = container.clientHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';

    scratchCtx = canvas.getContext('2d');
    scratchCtx.scale(dpr, dpr);

    // Draw scratch overlay
    const grad = scratchCtx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#1e3a5f');
    grad.addColorStop(0.5, '#2563eb');
    grad.addColorStop(1, '#1e3a5f');
    scratchCtx.fillStyle = grad;
    scratchCtx.fillRect(0, 0, w, h);

    scratchCtx.fillStyle = 'rgba(255,255,255,0.9)';
    scratchCtx.font = `bold ${Math.max(14, w * 0.055)}px 'Space Grotesk', sans-serif`;
    scratchCtx.textAlign = 'center';
    scratchCtx.fillText('SCRATCH HERE', w / 2, h / 2 - 10);
    scratchCtx.fillStyle = 'rgba(255,255,255,0.5)';
    scratchCtx.font = `italic ${Math.max(11, w * 0.04)}px 'Inter', sans-serif`;
    scratchCtx.fillText('reveal your reward card...', w / 2, h / 2 + 15);

    scratchCtx.strokeStyle = 'rgba(255,255,255,0.1)';
    scratchCtx.lineWidth = 12;
    scratchCtx.strokeRect(6, 6, w - 12, h - 12);

    // Remove old listeners before adding new
    canvas.onmousedown = scratchStart;
    canvas.onmousemove = scratchMove;
    canvas.onmouseup = scratchEnd;
    canvas.onmouseleave = scratchEnd;
    canvas.ontouchstart = scratchStart;
    canvas.ontouchmove = scratchMove;
    canvas.ontouchend = scratchEnd;
}

function scratchStart(e) {
    isDrawing = true;
    scratchMove(e);
}

function scratchMove(e) {
    if (!isDrawing) return;
    e.preventDefault();

    const rect = dom.scratchCanvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    let x, y;

    if (e.touches) {
        x = e.touches[0].clientX - rect.left;
        y = e.touches[0].clientY - rect.top;
    } else {
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
    }

    scratchCtx.save();
    scratchCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    scratchCtx.globalCompositeOperation = 'destination-out';
    scratchCtx.beginPath();
    scratchCtx.arc(x, y, 40, 0, Math.PI * 2);
    scratchCtx.fill();
    scratchCtx.restore();

    checkScratchProgress();
}

function scratchEnd() {
    isDrawing = false;
}

function checkScratchProgress() {
    if (state.isScratched) return;

    const canvas = dom.scratchCanvas;
    const w = canvas.width;
    const h = canvas.height;
    const imgData = scratchCtx.getImageData(0, 0, w, h);
    const pixels = imgData.data;
    let transparent = 0;
    const total = pixels.length / 4;

    for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) transparent++;
    }

    const pct = (transparent / total) * 100;
    if (pct > 15) {
        state.isScratched = true;
        haptic('success');
        canvas.style.transition = 'opacity 0.5s ease-out';
        canvas.style.opacity = '0';
        spawnConfetti(40);
        setTimeout(() => {
            canvas.style.display = 'none';
            dom.btnGoToShare.style.display = 'flex';
        }, 500);
    }
}

dom.btnGoToShare.addEventListener('click', () => {
    initShareScreen();
    navigateTo('share');
});

// ==========================================
// SCREEN 5: SHARE
// ==========================================
function initShareScreen() {
    const preview = document.getElementById('social-preview-card');
    if (preview) {
        preview.className = `share-preview card-theme-${state.cardTheme}`;
        preview.innerHTML = `
            <div class="dynamic-card">
                <div class="card-brand-row">
                    <span>🦷</span>
                    <span>BRIGHT SMILES</span>
                </div>
                <div class="card-character">
                    <img src="${state.cardImage}" alt="Dental character">
                </div>
                <div class="card-joke">"${state.joke}"</div>
                <div class="card-footer-row">${state.footer} • BRIGHT SMILES</div>
            </div>
        `;
    }
}

dom.btnShareInstagram.addEventListener('click', async () => {
    const text = `Check out my patient smile card from ${CONFIG.clinicName}! 🦷✨`;
    try { await navigator.clipboard.writeText(text); } catch {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
    }
    showToast('Text copied! Opening Instagram...');
    setTimeout(() => window.open('https://instagram.com', '_blank'), 1000);
});

dom.btnShareWhatsapp.addEventListener('click', () => {
    const text = `Check out my patient smile card from ${CONFIG.clinicName}! 🦷🪥`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
});

dom.btnRestart.addEventListener('click', () => {
    Object.assign(state, {
        selectedStars: 0, selectedVibes: [], selectedMenu: [],
        selectedKeywords: [], cardTheme: '', cardImage: '',
        joke: '', footer: '', isCopied: false, isScratched: false,
        screenHistory: []
    });

    dom.starBtns.forEach(b => {
        b.classList.remove('selected');
        b.setAttribute('aria-checked', 'false');
    });
    dom.ratingFeedback.textContent = 'Tap a star to begin';
    dom.ratingFeedback.classList.remove('highlight');
    dom.reviewText.value = '';
    dom.btnCopyReview.style.display = 'flex';

    const canvas = dom.scratchCanvas;
    canvas.style.display = 'block';
    canvas.style.opacity = '1';
    canvas.style.transition = 'none';

    navigateTo('stars', false);
});

// ==========================================
// BACK BUTTON
// ==========================================
dom.backBtn.addEventListener('click', goBack);

// ==========================================
// UTILITIES
// ==========================================
function randomPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function showToast(msg) {
    dom.toast.textContent = msg;
    dom.toast.classList.add('show');
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => dom.toast.classList.remove('show'), 2500);
}

function pulseElement(el) {
    el.style.transform = 'scale(1.08)';
    setTimeout(() => { el.style.transform = ''; }, 150);
}

// ==========================================
// CONFETTI
// ==========================================
function spawnConfetti(count = 40) {
    const canvas = dom.confettiCanvas;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#3b82f6', '#60a5fa', '#f59e0b', '#fbbf24', '#10b981', '#f472b6', '#a78bfa'];

    for (let i = 0; i < count; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: -10 - Math.random() * 100,
            w: 4 + Math.random() * 6,
            h: 8 + Math.random() * 8,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 4,
            vy: 2 + Math.random() * 4,
            rotation: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 10,
            opacity: 1
        });
    }

    let frame = 0;
    const maxFrames = 120;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pieces.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.08;
            p.rotation += p.rotSpeed;
            p.opacity = Math.max(0, 1 - frame / maxFrames);
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });
        frame++;
        if (frame < maxFrames) requestAnimationFrame(draw);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    requestAnimationFrame(draw);
}

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initStarRating();
    navigateTo('stars', false);
});
