/* ==========================================
   BRIGHT SMILES — PRODUCTION APP.JS
   v4: Performance fixes + viral joke content
   ========================================== */

// ==========================================
// CONFIG — Change these per clinic
// ==========================================
const CONFIG = {
    googlePlaceId: "ChIJT4N1hQ-1j4ARgJ6S0h4FqC4",
    clinicName: "Bright Smiles",
    location: "Austin, TX",
    contactEmail: "unknownsorcerer007@gmail.com",
    phone: "+1-512-555-0199"
};

// ==========================================
// KEYWORDS DATABASE BY STAR RATING
// ==========================================
const STAR_KEYWORDS = {
    1: {
        vibes: ["Long Wait Time", "Rude Front Desk", "Surprise Charges", "Rough Dentist", "Unhelpful Staff", "Pushy Upselling", "Dirty Office", "Billing Issues"],
        menu: ["Painful Cleaning", "Failed Filling", "Wrong Estimate", "Late Appointment", "Rushed Exam", "Aggressive Treatment"]
    },
    2: {
        vibes: ["Below Average Care", "Disorganized Billing", "Cold Atmosphere", "Rushed Visit", "Impersonal Staff", "Noisy Waiting Room", "Long Delay"],
        menu: ["Hurried Cleaning", "Delayed Crown", "Overcharged", "Rough Root Canal", "Basic Checkup", "Uncomfortable Scaling"]
    },
    3: {
        vibes: ["Decent Treatment", "Standard Wait", "Clean Office", "Okay Experience", "Fair Bedside Manner", "Average Service", "Polite Staff"],
        menu: ["Standard Cleaning", "Routine X-Rays", "Fair Filling", "Decent Checkup", "Average Crown", "Basic Polishing"]
    },
    4: {
        vibes: ["Friendly Staff", "Short Wait", "Very Clean Office", "Caring Dentist", "Transparent Pricing", "Comfortable Chair", "Gentle Hygienist"],
        menu: ["Gentle Cleaning", "Smooth Extraction", "Easy Filling", "Thorough Exam", "Quick Crown", "Professional Scaling"]
    },
    5: {
        vibes: ["Pain-Free Experience", "Amazing Staff", "Pristine Office", "Exceptional Care", "Honest Pricing", "Welcoming Team", "Expert Dentist"],
        menu: ["Flawless Implant", "Perfect Crown", "Painless Root Canal", "Brilliant Whitening", "Invisalign Results", "Gentle Deep Cleaning"]
    }
};onst STAR_KEYWORDS = {
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
// VIRAL JOKES — Highly shareable, no repeats
// Pool of 40+ per category, randomly drawn
// ==========================================
const JOKES = {
    spa: [
        "POV: You are lying in the dental chair questioning every life choice that led you here",
        "The dentist said this won't hurt. Narrator: It did. It absolutely did",
        "My dentist drives a Mercedes. I like to think I contributed to at least one tire",
        "They asked me to open wide. My bank account already did that at the front desk",
        "The numbing injection needed its own numbing injection. We are going deep people",
        "My dentist's vacation home has a wing named after my cavities",
        "Went in for a cleaning. Left with a treatment plan, an existential crisis, and an empty wallet",
        "The dental chair reclines more than I do in life. At least someone is getting support",
        "They put that bib on me and I instantly lost all human dignity. I am just a mouth now",
        "My dentist said I grind my teeth. I said that is called surviving in this economy",
        "The mirror they use is smaller than my patience. And both are cracking",
        "They numbed half my face and I still looked better than my Monday morning selfie",
        "The suction tube is just a tiny vacuum for my hopes and dreams",
        "My dentist said rinse and spit. Same energy as my last relationship",
        "That moment when the dentist starts making concerned noises. Sir this is a checkup not a crime scene",
        "The X-ray machine sees through more lies than my mother",
        "They found a cavity I didn't know about. Thanks for the surprise attack",
        "My dentist keeps a photo of my teeth in his wallet. That is not care that is a trophy",
        "The waiting room magazines are from 2019. My teeth have been here longer than some staff members",
        "They said the procedure would take 30 minutes. That was 2 hours and 3 existential crises ago",
        "My dentist's kid is going to college thanks to my fillings. You are welcome little Timmy",
        "They asked if I floss. I said only when someone is watching. He didn't laugh",
        "The drill sound is my villain origin story",
        "My dentist said I have a beautiful root canal. Beautiful? ROOT CANAL? The audacity",
        "They charged me extra for the anxious patient discount. That is not a discount that is a tax on feelings",
        "The hygienist said I have strong teeth. Strong enough to survive this bill? Doubt",
        "My dentist's assistant has seen things. Things no human should see. My mouth is a war zone",
        "They gave me a stress ball for the procedure. I squeezed it into a different dimension",
        "My tooth fairy filed a restraining order. Too many claims not enough magic",
        "The dentist said my enamel is thin. Just like my tolerance for unnecessary small talk",
        "Went for a simple checkup. Left with a referral a prescription and trust issues",
        "My dentist said open wide. I said you first show me that invoice",
        "They numbed my mouth so I couldn't scream at the bill. Strategic move",
        "The dental chair has seen more tears than my therapist's couch",
        "My dentist asked about my diet. I said we are not here to judge we are here to fix",
        "They played calming music during the procedure. Nothing calms me when someone has a drill in my mouth",
        "My dentist said I need a crown. I said I have always known that",
        "The cleaning was so thorough my teeth filed a noise complaint",
        "They told me to come back in 6 months. My teeth are already dreading it",
        "My dentist retired early. I would like to think my dental record was a factor"
    ],
    vacation: [
        "My teeth went on a 3 year vacation from the dentist. They came back with souvenirs called cavities",
        "Vacation mode: no floss no brush just vibes and regret",
        "Post vacation dental checkup is just a roast session for your teeth",
        "My enamel took a permanent vacation. Didn't even leave a note",
        "Beach vacation plus no dental care equals my dentist's new boat fund",
        "My teeth partied harder than I did. The evidence is in the X-ray",
        "Vacation calories don't count but vacation cavities carry interest",
        "Lost my toothbrush on day 1. Day 5 I was using my finger. Innovation",
        "My dentist asked what I ate on vacation. I said we don't talk about that",
        "Came back with a tan 2 cavities and zero regrets. Vacation trifecta",
        "My wisdom teeth took a one way vacation. Best decision they ever made",
        "Vacation selfie game strong. Dental game we are rebuilding",
        "My teeth sent me a postcard from vacation. It said SEND FLOSS",
        "The resort had a spa but no dental floss. Priorities are wrong globally",
        "Flossed once on vacation. That is called growth",
        "My dentist could smell the vacation on my teeth. That is embarrassing",
        "Came back from vacation and my toothbrush filed a missing person report",
        "Beach sand in my teeth. That is not the deep clean I signed up for",
        "My vacation diet was 90 percent sugar and 10 percent denial",
        "Post vacation X ray looks like a crime scene. My dentist is collecting evidence",
        "My teeth need a vacation from my vacation. That is how destructive it was",
        "Vacation photos look great. The close up smile ones we don't discuss those",
        "My dentist said vacation was rough on my teeth. I said you should see my liver",
        "Came back with souvenirs: a magnet a t shirt and a root canal referral",
        "Skipped flossing for 2 weeks on vacation. My gums are staging a protest",
        "My teeth on vacation: 0 percent hygiene 100 percent audacity",
        "Vacation tip: your toothbrush needs a vacation too. Pack it",
        "My dentist vacation roasted my teeth so hard I need therapy",
        "The only thing that survived vacation intact was my dental anxiety",
        "My teeth after vacation look like they went through a war. And lost"
    ],
    camera: [
        "My dentist gave me a smile so bright my camera auto adjusted to sunglasses mode",
        "Post dentist selfie hits different when your teeth cost more than your outfit",
        "My teeth are now the main character in every photo. Sorry background you are extra",
        "Smiled so wide after my cleaning my face filed a complaint with HR",
        "My teeth are whiter than my future and I am okay with that",
        "Camera can't handle my post dentist glow. Even the AI beautify is confused",
        "My smile has more followers than me. Teeth influencer era loading",
        "Took a selfie and my teeth got their own fan mail",
        "My dentist is basically a smile architect. This is structural engineering",
        "Teeth so clean they are reflecting light like a diamond. Haters need sunglasses",
        "Zoom call after dental cleaning. Everyone asked what I did different. It is called investing in myself",
        "My smile went from DVD to Blu ray. HD teeth era",
        "Posted a smile pic and my dentist commented my best work. Sir this is Instagram",
        "My teeth are camera ready 24 7. That is not vanity that is consistency",
        "Friends asked for my dentist's number. My teeth are doing the marketing for free",
        "Smiled at my phone and it unlocked Face ID from across the room. Security threat",
        "My teeth so photogenic other teeth are jealous. Tooth beef is real",
        "After my cleaning even my resting face looks happy. That is dental magic",
        "My smile now generates its own light source. I am the sun",
        "Every group photo: my teeth get asked for their own ID",
        "My dentist turned my smile into a weapon of mass attraction",
        "Took 200 selfies post cleaning. Storage full. Worth every megabyte",
        "My teeth sparkle so hard people think I have a filter on. Nope just good dental care",
        "Smile so bright it is technically a light source. OSHA approved",
        "My dentist said keep smiling. With these teeth? Try and stop me"
    ]
};onst JOKES = {
    spa: [
        "My dentist said I need a crown. I said finally, someone who gets me 👑",
        "Went to the dentist and they found a cavity. My teeth are literally falling apart faster than my life decisions 💀",
        "The dentist said I grind my teeth at night. I said that's called hustle culture 💪",
        "Told my dentist I floss daily. He looked at me like I just said I exercise on weekends 😭",
        "My dentist asked me if I floss. I said only when you're watching. He didn't laugh 😬",
        "The hygienist said open wide. I said that's what my ex said too 💅",
        "Went for a cleaning. Left feeling personally attacked by a tiny mirror 🪞",
        "My dentist said I have the teeth of a 40 year old. I'm 22. Thanks for the existential crisis 😔",
        "They numbed my mouth and I still felt that bill coming 💸",
        "The dentist said my enamel is thin. Just like my patience during a root canal 🫠",
        "Got told I brush too hard. Sorry for being passionate about dental hygiene 😤",
        "My dentist keeps telling me to stop drinking coffee. I keep finding a new dentist ☕",
        "Went to the dentist. They said I have a beautiful smile. Then handed me a $400 bill. Plot twist 💀",
        "The waiting room had magazines from 2019. At least my teeth traveled back in time with me ⏰",
        "My dentist said I have a wisdom tooth coming in. Finally, some wisdom in this family 🧠",
        "They asked me to rate my pain 1-10. I said emotionally or physically? 😭",
        "The dental chair reclines more than I do on weekends 🛋️",
        "My dentist said rinse and spit. Same energy as my last relationship 💦",
        "Got a filling today. My teeth have more filler than my Instagram bio 📱",
        "The dentist said my teeth are shifting. Even they can't stay in one place like me 😅",
        "Went for a checkup. Dentist said I have great roots. Unlike my dating history 🌱",
        "They put a mirror in my mouth and I finally saw what my ex was talking about 🪞",
        "My dentist said I bite my nails. I said only when the WiFi is down 😬",
        "The X-ray showed everything. My dentist knows more about me than my therapist 📸",
        "Got my teeth cleaned. Now I'm scared to eat. That's not a cleaning, that's a hostage situation 🍕",
        "The dentist said my gums are receding. Even my mouth is pulling away from me 😩",
        "Went for a teeth whitening. Came out looking like I bite ice cubes for fun 🧊",
        "My dentist said I have a sweet tooth. I said I have 28 of them, don't single one out 🍬",
        "They gave me a toothbrush at the end. That's like a gym giving you a salad after a workout 🥗",
        "The dental hygienist scraped my teeth for 30 minutes. That's not cleaning, that's archaeology 🦴",
        "My dentist said I need to floss more. I said I need a lot of things, Karen 💁‍♀️",
        "Went to the dentist and they played calming music. Sir, nothing about this is calm 🎵",
        "The numbing wore off mid-procedure. 0/10 would not recommend the raw experience 😱",
        "My dentist has better lighting than my ring light. Maybe I should film content there 💡",
        "They said open wide. My bank account already did that at reception 💳",
        "The dentist found 3 cavities. I found 3 reasons to cry 🥲",
        "My tooth fairy is filing for bankruptcy at this point 🧚",
        "Went for a simple cleaning. Left with a treatment plan longer than my Netflix watchlist 📋",
        "The dentist said I have a strong jaw. That's because I've been clenching through 2025 😤",
        "They asked if I'm nervous. I said I'm paying hundreds of dollars for someone to judge my teeth. What do you think? 😰"
    ],
    vacation: [
        "My teeth are on vacation. They haven't seen a dentist in 3 years 🏖️",
        "Taking a break from flossing. My gums need to miss me first 🌴",
        "My enamel said it needs a vacation from my diet. Fair point 🏝️",
        "Went to the beach and got sand in my teeth. That's not the deep clean I wanted 🏖️",
        "My teeth are whiter than my vacation photos. Thanks dentist 📸",
        "Plaque took a permanent vacation. You're welcome, gums 🎉",
        "My dentist said my teeth look rested. I said they've been sleeping all year 😴",
        "Came back from vacation with a tan and a cavity. Priorities 🌞",
        "My wisdom teeth took a one-way vacation. They're not coming back 🦷✈️",
        "Post-vacation dental checkup: 2 new cavities, 1 regret, 0 lessons learned 🤷",
        "My teeth went on strike during vacation. No floss, no brush, just vibes 🏖️",
        "Vacation calories don't count but vacation cavities definitely do 🍦",
        "Flossed on vacation. That's character development right there 📈",
        "My dentist asked about my vacation diet. I said we don't talk about that 🤫",
        "Teeth whitening before vacation was the best investment. Every photo hits different ✨",
        "Brought back souvenirs from vacation. 2 cavities and a chipped tooth from ice 🎁",
        "My vacation smile was powered by 3 days of not drinking coffee. Temporary insanity ☕",
        "Came back with a vacation glow and a dental bill that killed the vibe 💀",
        "My teeth survived vacation but my floss didn't make it through customs 🧳",
        "Vacation mode: activated. Flossing mode: we don't know her 🌊",
        "The resort had a dental clinic. Even my teeth got the spa treatment 🏨",
        "Skipped the dentist for vacation. Now I'm back with interest on my dental debt 💸",
        "Vacation photos look great. The close-up ones... we don't discuss those 📷",
        "My teeth partied harder than I did on vacation. The evidence is at the dentist 🎊",
        "Went snorkeling. My teeth saw more action than I did 🤿",
        "Vacation tip: pack more floss than underwear. Trust me on this one 🩲",
        "Came back from vacation. My toothbrush is filing a missing person report 🔍",
        "My dentist said vacation was rough on my teeth. I said you should see my liver 🍹",
        "Beach vacation + no floss = plaque paradise. My dentist is having a field day 🏖️",
        "My teeth need a vacation from my vacation. That's how good it was 🌅",
        "Vacation selfie game strong. Dental game... we're working on it 🤳",
        "Lost my toothbrush on day 1. Used my finger for 5 days. Innovation 🤙",
        "My dentist said my teeth look like I went on vacation. I said isn't it obvious? 😎",
        "Came back tanned, relaxed, and with 1 new cavity. The vacation trifecta 🏆",
        "My teeth sent me a postcard from vacation. It said 'SEND FLOSS' 📮"
    ],
    camera: [
        "My dentist gave me a smile so bright, my phone camera needed sunglasses 😎",
        "Took a selfie after my dental cleaning. My teeth are the main character now 📸",
        "Smiling so wide after my cleaning, my face hurts. Worth every penny 😁",
        "My teeth are so clean, they're reflecting light like a diamond 💎",
        "Post-dentist selfie hits different when your teeth are actually clean 📱",
        "Camera loves my new smile. My dentist is basically a photographer now 📷",
        "My teeth went from 480p to 4K after that cleaning. Ultra HD smile 🖥️",
        "Took 47 selfies after my dental visit. My teeth finally match my confidence 🤳",
        "My dentist said my smile is their best work. I said put it on the website 🌐",
        "Teeth so white, my camera auto-adjusted the exposure 📸✨",
        "Smiled at my phone and it unlocked with Face ID from across the room 📱",
        "My teeth are now the brightest thing in every photo. Sorry sunset 🌅",
        "Posted a smile pic and got more likes than my vacation photos. Dentist > Beach 🏖️",
        "My dentist should get credit for my Instagram engagement. These teeth are content 📈",
        "After my cleaning, even my resting face looks happy. That's dental magic 🪄",
        "My smile is so bright, people think I'm using a filter. Nope, just good dental care 📷",
        "Took a group photo. My teeth got their own spotlight. Main character energy 🌟",
        "My dentist said keep smiling. I said have you seen these teeth? Of course I will 😄",
        "Zoom call after dental cleaning. Everyone asked what I did different. It's called flossing 💻",
        "My teeth are camera-ready 24/7 now. That's called investing in yourself 🎬",
        "Smiled for my passport photo. They said I look like a different person. Thanks Dr! 🛂",
        "My teeth are so clean, I can see my reflection in them. Free mirror 🪞",
        "Took a bite of an apple post-cleaning. That crunch was cinematic 🍎",
        "My smile has more sparkle than my personality and I'm okay with that ✨",
        "Every photo now: teeth first, background second. New hierarchy 📐",
        "My dentist turned my smile into a weapon of mass attraction 🧲",
        "Friends asked for my dentist's number. My teeth are doing the marketing 📞",
        "My smile is proof that good things come to those who floss 🪥",
        "Camera can't handle my post-dentist glow. Even the AI beautify is confused 🤖",
        "My teeth are so photogenic, they should be paying rent on my Instagram 📸"
    ]
};

// ==========================================
// FOOTERS
// ==========================================
const FOOTERS = [
    "Your Smile Is A Lot For Us",
    "Smile Responsibly",
    "Compliments Ahead",
    "Handle This Smile With Care"
];

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
    screenHistory: [],
    usedJokes: new Set() // Track used jokes to prevent repeats
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
// HAPTIC FEEDBACK
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
        state.joke = getUniqueJoke('spa');
    } else {
        state.cardTheme = Math.random() < 0.5 ? 'vacation' : 'camera';
        state.cardImage = `char_${state.cardTheme}.webp`;
        state.joke = getUniqueJoke(state.cardTheme);
    }
}

// Get a joke that hasn't been used yet
function getUniqueJoke(category) {
    const pool = JOKES[category];
    const available = pool.filter(j => !state.usedJokes.has(j));

    // If all used, reset
    if (available.length === 0) {
        state.usedJokes.clear();
        return pool[Math.floor(Math.random() * pool.length)];
    }

    const joke = available[Math.floor(Math.random() * available.length)];
    state.usedJokes.add(joke);
    return joke;
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

    dom.keywordTracker.innerHTML = '';
    state.selectedKeywords.forEach(kw => {
        const chip = document.createElement('span');
        chip.className = 'tracker-chip';
        chip.textContent = kw;
        chip.dataset.keyword = kw.toLowerCase();
        dom.keywordTracker.appendChild(chip);
    });
}

dom.reviewText.addEventListener('input', () => {
    const text = dom.reviewText.value;
    const len = text.length;
    dom.reviewCharCount.textContent = `${len} character${len !== 1 ? 's' : ''}`;

    let allFound = true;
    state.selectedKeywords.forEach(kw => {
        const chip = dom.keywordTracker.querySelector(`[data-keyword="${kw.toLowerCase()}"]`);
        const regex = new RegExp(`\\b${escapeRegex(kw)}\\b`, 'i');
        const found = regex.test(text);
        if (chip) chip.classList.toggle('found', found);
        if (!found) allFound = false;
    });

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

dom.btnCopyReview.addEventListener('click', async () => {
    const text = dom.reviewText.value;
    try { await navigator.clipboard.writeText(text); } catch {
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
});

dom.btnGotoGoogle.addEventListener('click', () => {
    window.open(`https://search.google.com/local/writereview?placeid=${CONFIG.googlePlaceId}`, '_blank');
});

if (dom.btnSkipGoogle) {
    dom.btnSkipGoogle.addEventListener('click', () => {
        window.open(`https://search.google.com/local/writereview?placeid=${CONFIG.googlePlaceId}`, '_blank');
    });
}

dom.btnVerifyClaim.addEventListener('click', () => {
    navigateTo('scratch');
    // Small delay to let the screen render before setting up canvas
    setTimeout(() => setupScratchCard(), 50);
});

// ==========================================
// SCREEN 4: SCRATCH CARD (OPTIMIZED)
// ==========================================
let scratchCtx = null;
let isDrawing = false;
let scratchCheckCounter = 0;

function setupScratchCard() {
    state.isScratched = false;
    scratchCheckCounter = 0;
    dom.btnGoToShare.style.display = 'none';

    // Build reveal card content FIRST (before canvas)
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

    // Setup canvas with proper dimensions
    const container = dom.scratchContainer;
    const canvas = dom.scratchCanvas;
    const dpr = window.devicePixelRatio || 1;
    const w = container.clientWidth || 280;
    const h = container.clientHeight || 435;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';

    scratchCtx = canvas.getContext('2d', { willReadFrequently: true });
    scratchCtx.scale(dpr, dpr);

    // Draw overlay
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

    // Attach events (using direct assignment to avoid stacking)
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
    scratchCtx.arc(x, y, 42, 0, Math.PI * 2);
    scratchCtx.fill();
    scratchCtx.restore();

    // Throttle progress checks — every 3rd stroke
    scratchCheckCounter++;
    if (scratchCheckCounter % 3 === 0) {
        checkScratchProgress();
    }
}

function scratchEnd() {
    isDrawing = false;
    // Final check on lift
    if (!state.isScratched) checkScratchProgress();
}

function checkScratchProgress() {
    if (state.isScratched) return;

    const canvas = dom.scratchCanvas;
    const w = canvas.width;
    const h = canvas.height;

    // Sample a subset of rows for performance (every 4th row)
    const imgData = scratchCtx.getImageData(0, 0, w, h);
    const pixels = imgData.data;
    let transparent = 0;
    let total = 0;
    const rowStep = 4;

    for (let row = 0; row < h; row += rowStep) {
        for (let col = 0; col < w; col++) {
            const i = (row * w + col) * 4 + 3;
            total++;
            if (pixels[i] === 0) transparent++;
        }
    }

    const pct = (transparent / total) * 100;
    if (pct > 18) {
        state.isScratched = true;
        haptic('success');

        canvas.style.transition = 'opacity 0.4s ease-out';
        canvas.style.opacity = '0';
        spawnConfetti(40);

        setTimeout(() => {
            canvas.style.display = 'none';
            dom.btnGoToShare.style.display = 'flex';
        }, 400);
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
// INIT — Preload images for scratch card
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Preload card images so scratch card loads instantly
    ['char_spa.webp', 'char_vacation.webp', 'char_camera.webp'].forEach(src => {
        const img = new Image();
        img.src = src;
    });

    initStarRating();
    navigateTo('stars', false);
});
