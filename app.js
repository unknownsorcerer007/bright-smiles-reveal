/* ==========================================
   MASCOTS DATABASE WITH PREMIUM CULINARY SVGs
   ========================================== */
const MASCOTS = [
    {
        id: "silver_cloche",
        name: "THE SILVER CLOCHE",
        desc: "A polished silver serving dome with a gentle smile and golden handles.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
            <!-- Dome base plate -->
            <rect x="15" y="75" width="70" height="6" fill="#bdc3c7" stroke="#7f8c8d" stroke-width="2" rx="2" />
            <!-- Dome -->
            <path d="M 20 75 A 30 30 0 0 1 80 75 Z" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="2" />
            <!-- Handle -->
            <circle cx="50" cy="40" r="6" fill="#c5a059" stroke="#e0b869" stroke-width="1.5" />
            <!-- Face -->
            <circle cx="42" cy="62" r="3" fill="#0b0b0c" />
            <circle cx="58" cy="62" r="3" fill="#0b0b0c" />
            <path d="M 45 68 Q 50 71 55 68" stroke="#0b0b0c" stroke-width="2.5" fill="none" />
            <!-- Glow/Shine -->
            <path d="M 30 55 A 20 20 0 0 1 50 48" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.6" />
        </svg>`
    },
    {
        id: "monocle_wine",
        name: "MONOCLE WINE GLASS",
        desc: "A sophisticated glass of red wine wearing a gold monocle.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
            <!-- Glass stem & base -->
            <line x1="50" y1="65" x2="50" y2="88" stroke="#bdc3c7" stroke-width="3.5" />
            <ellipse cx="50" cy="88" rx="20" ry="4" fill="none" stroke="#bdc3c7" stroke-width="3" />
            <!-- Glass bowl outline -->
            <path d="M 30 30 C 30 65, 70 65, 70 30 Z" fill="none" stroke="#bdc3c7" stroke-width="3" />
            <!-- Red wine fill -->
            <path d="M 32 42 C 32 60, 68 60, 68 42 Z" fill="#e51937" opacity="0.9" />
            <!-- Monocle (Gold) -->
            <circle cx="40" cy="38" r="7" fill="none" stroke="#e0b869" stroke-width="2" />
            <line x1="47" y1="38" x2="62" y2="28" stroke="#e0b869" stroke-width="1.5" />
            <!-- Face -->
            <circle cx="40" cy="38" r="1.5" fill="#0b0b0c" />
            <circle cx="58" cy="38" r="2.5" fill="#0b0b0c" />
            <path d="M 45 48 Q 50 51 55 48" stroke="#ffffff" stroke-width="2" fill="none" />
        </svg>`
    },
    {
        id: "fancy_truffle",
        name: "THE FANCY TRUFFLE",
        desc: "An organic black truffle mushroom wearing a gold top hat.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
            <!-- Truffle Body -->
            <path d="M 30 75 C 20 75, 20 50, 35 45 C 45 40, 55 40, 65 45 C 80 50, 80 75, 70 75 Z" fill="#3a3835" stroke="#252422" stroke-width="3" />
            <circle cx="38" cy="55" r="2" fill="#252422" />
            <circle cx="62" cy="58" r="2" fill="#252422" />
            <circle cx="50" cy="70" r="2.5" fill="#252422" />
            <!-- Top Hat (Gold) -->
            <rect x="35" y="20" width="30" height="20" fill="#c5a059" stroke="#e0b869" stroke-width="1.5" rx="2" />
            <ellipse cx="50" cy="40" rx="22" ry="4" fill="#c5a059" stroke="#e0b869" stroke-width="1.5" />
            <!-- Face -->
            <circle cx="42" cy="54" r="3" fill="#ffffff" />
            <circle cx="42" cy="54" r="1.5" fill="#0b0b0c" />
            <circle cx="58" cy="54" r="3" fill="#ffffff" />
            <circle cx="58" cy="54" r="1.5" fill="#0b0b0c" />
            <path d="M 47 62 Q 50 64 53 62" stroke="#ffffff" stroke-width="2.5" fill="none" />
        </svg>`
    },
    {
        id: "sizzling_steak",
        name: "SIZZLING FILET",
        desc: "A premium dry-aged steak with gold grill marks.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
            <!-- Steak Body -->
            <path d="M 25 50 C 20 30, 80 25, 80 50 C 80 75, 20 70, 25 50 Z" fill="#5c2523" stroke="#3a1716" stroke-width="3" />
            <!-- Gold Grill Marks -->
            <line x1="38" y1="35" x2="48" y2="65" stroke="#e0b869" stroke-width="2.5" opacity="0.7" />
            <line x1="50" y1="32" x2="60" y2="62" stroke="#e0b869" stroke-width="2.5" opacity="0.7" />
            <line x1="62" y1="35" x2="72" y2="65" stroke="#e0b869" stroke-width="2.5" opacity="0.7" />
            <!-- Butter Pat (Gold) -->
            <rect x="42" y="42" width="12" height="10" fill="#f1c40f" stroke="#c5a059" stroke-width="1" rx="1" transform="rotate(15 48 47)" />
            <!-- Face -->
            <circle cx="34" cy="48" r="2.5" fill="#ffffff" />
            <circle cx="34" cy="48" r="1" fill="#000" />
            <circle cx="68" cy="48" r="2.5" fill="#ffffff" />
            <circle cx="68" cy="48" r="1" fill="#000" />
            <path d="M 47 56 Q 50 59 53 56" stroke="#ffffff" stroke-width="2" fill="none" />
        </svg>`
    },
    {
        id: "golden_bell",
        name: "THE SERVICE BELL",
        desc: "A high-end brass service bell looking elegant and clean.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
            <!-- Stand -->
            <rect x="20" y="75" width="60" height="8" fill="#1e1e20" stroke="#c5a059" stroke-width="1.5" rx="3" />
            <!-- Bell Dome -->
            <path d="M 28 75 C 28 40, 72 40, 72 75 Z" fill="#c5a059" stroke="#e0b869" stroke-width="2" />
            <!-- Top Button plunger -->
            <rect x="47" y="32" width="6" height="12" fill="#c5a059" />
            <ellipse cx="50" cy="30" rx="8" ry="4" fill="#e0b869" />
            <!-- Face -->
            <circle cx="43" cy="60" r="3" fill="#000" />
            <circle cx="57" cy="60" r="3" fill="#000" />
            <path d="M 46 66 Q 50 69 54 66" stroke="#000" stroke-width="2.5" fill="none" />
        </svg>`
    },
    {
        id: "espresso_martini",
        name: "THE MARTINI GLASS",
        desc: "An elegant espresso martini glass with three coffee beans on top.",
        svg: `<svg viewBox="0 0 100 100" width="100%" height="100%">
            <!-- Base & Stem -->
            <line x1="50" y1="58" x2="50" y2="85" stroke="#bdc3c7" stroke-width="2.5" />
            <ellipse cx="50" cy="85" rx="18" ry="3" fill="none" stroke="#bdc3c7" stroke-width="2" />
            <!-- Martini V-shape -->
            <polygon points="25,25 75,25 50,58" fill="none" stroke="#bdc3c7" stroke-width="2.5" />
            <!-- Espresso fill -->
            <polygon points="29,30 71,30 50,58" fill="#3a2312" />
            <!-- Foam Layer -->
            <rect x="28" y="27" width="44" height="4" fill="#d2b48c" rx="1" />
            <!-- Coffee Beans -->
            <ellipse cx="44" cy="22" rx="3" ry="1.5" fill="#1b0e07" transform="rotate(30 44 22)" />
            <ellipse cx="50" cy="20" rx="3" ry="1.5" fill="#1b0e07" transform="rotate(-15 50 20)" />
            <ellipse cx="56" cy="22" rx="3" ry="1.5" fill="#1b0e07" transform="rotate(45 56 22)" />
            <!-- Face -->
            <circle cx="45" cy="40" r="2.5" fill="#fff" />
            <circle cx="55" cy="40" r="2.5" fill="#fff" />
            <path d="M 47 48 Q 50 50 53 48" stroke="#fff" stroke-width="2" fill="none" />
        </svg>`
    }
];

/* ==========================================
   KEYWORDS DATABASE BY STAR RATING
   ========================================== */
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

/* ==========================================
   ROASTS & BADGES DATABASE (Witty / Upscale)
   ========================================== */
const CRITICAL_ROASTS = [
    { badge: "DENTAL CRITIC", roast: "Ouch! A review so sharp it feels like a root canal without anesthesia. Thanks for the honest drill! 🦷" },
    { badge: "SURPRISE CHARGE SURVIVOR", roast: "Analyzing the bill like a forensic accountant. We appreciate you exposing those sneaky upsells! 💸" },
    { badge: "CAVITY DETECTOR", roast: "Spotting errors in our service like a digital X-ray. Sharp eye, sharp critique!" },
    { badge: "SKEPTICAL PATIENT", roast: "Not buying the 'pain-free' promise. We respect your healthy skepticism! 🤫" },
    { badge: "ENAMEL DEFENDER", roast: "Fiercely protective of your teeth and your wallet. A review with real bite!" }
];

const POSITIVE_ROASTS = [
    { badge: "SMILE CONQUEROR", roast: "Walked in for a checkup, walked out looking like a Hollywood star. Brilliant smile! ✨" },
    { badge: "PLAQUE PATROL", roast: "Fierce advocate of flossing. Your dental hygienist is shedding tears of absolute joy! 🪥" },
    { badge: "ROOT CANAL HERO", roast: "Surviving a root canal with absolute poise and dignity. You deserve a gold medal! 🏅" },
    { badge: "SHINY TEETH ROYALTY", roast: "Enamel so bright it's blinding our clinic lights. Magnificent dental hygiene! 🌟" },
    { badge: "CROWNED PATIENT", roast: "Got a crown and wearing it like royalty. Sophisticated taste!" },
    { badge: "HYGIENE ENTHUSIAST", roast: "Brushing three times a day and using mouthwash. The model patient! 🦷" },
    { badge: "WISDOM TOOTH SURVIVOR", roast: "Kept your cool while the dentist pulled those wisdom teeth. Absolute legend! 🦷" },
    { badge: "FLOSSING CHAMPION", roast: "Flossing every single day without fail. Dental hygienist's dream come true!" },
    { badge: "ANESTHESIA MASTER", roast: "Numb face, drooling slightly, but still writing reviews. That's dedication! 💉" },
    { badge: "CLINIC FAVOURITE", roast: "Polite smiles, clean teeth, prompt arrival. You are officially our favourite patient! 🦷" }
];

/* ==========================================
   APP STATE
   ========================================== */
let appState = {
    selectedStars: 0,
    selectedVibes: [], // Max 2
    selectedMenu: [],  // Max 1
    selectedKeywords: [], 
    selectedCardImage: "",
    isCopied: false,
    isScratched: false
};

/* ==========================================
   DOM ELEMENTS
   ========================================== */
const screens = {
    stars: document.getElementById("screen-stars"),
    keywords: document.getElementById("screen-keywords"),
    writer: document.getElementById("screen-writer"),
    scratch: document.getElementById("screen-scratch"),
    share: document.getElementById("screen-share")
};

/* ==========================================
   SCREEN NAVIGATION
   ========================================== */
function navigateTo(screenId) {
    Object.values(screens).forEach(screen => {
        if (screen) {
            screen.classList.remove("active");
        }
    });
    if (screens[screenId]) {
        screens[screenId].classList.add("active");
    }
    window.scrollTo(0, 0);
}

/* ==========================================
   SCREEN 1: STAR RATING LOGIC
   ========================================== */
const starBtns = document.querySelectorAll(".star-btn");
const ratingLabel = document.querySelector(".rating-label");

starBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const rating = parseInt(btn.getAttribute("data-value"));
        appState.selectedStars = rating;
        
        starBtns.forEach((sBtn, idx) => {
            if (idx < rating) {
                sBtn.classList.add("selected");
            } else {
                sBtn.classList.remove("selected");
            }
        });

        ratingLabel.innerHTML = `<span class="text-yellow">${rating} Star${rating > 1 ? 's' : ''} - Redirecting to review curator...</span>`;
        setTimeout(() => {
            initializeKeywordsScreen();
            navigateTo("keywords");
        }, 1000);
    });

    btn.addEventListener("mouseenter", () => {
        const val = parseInt(btn.getAttribute("data-value"));
        starBtns.forEach((sBtn, idx) => {
            if (idx < val) {
                sBtn.classList.add("hover");
            } else {
                sBtn.classList.remove("hover");
            }
        });
    });

    btn.addEventListener("mouseleave", () => {
        starBtns.forEach(sBtn => sBtn.classList.remove("hover"));
    });
});

/* ==========================================
   SCREEN 3: KEYWORD SELECTION
   ========================================== */
const containerVibes = document.getElementById("container-vibes");
const containerMenu = document.getElementById("container-menu");
const btnConfirmKeywords = document.getElementById("btn-confirm-keywords");
const vibeCount = document.getElementById("vibe-count");
const menuCount = document.getElementById("menu-count");

function initializeKeywordsScreen() {
    appState.selectedVibes = [];
    appState.selectedMenu = [];
    btnConfirmKeywords.disabled = true;

    const currentKeywords = STAR_KEYWORDS[appState.selectedStars] || STAR_KEYWORDS[5];

    containerVibes.innerHTML = "";
    currentKeywords.vibes.forEach(keyword => {
        const chip = document.createElement("button");
        chip.className = "chip";
        chip.textContent = keyword;
        chip.addEventListener("click", () => toggleVibeKeyword(chip, keyword));
        containerVibes.appendChild(chip);
    });

    containerMenu.innerHTML = "";
    currentKeywords.menu.forEach(keyword => {
        const chip = document.createElement("button");
        chip.className = "chip chip-menu";
        chip.textContent = keyword;
        chip.addEventListener("click", () => toggleMenuKeyword(chip, keyword));
        containerMenu.appendChild(chip);
    });

    vibeCount.textContent = "(0/2 Selected)";
    menuCount.textContent = "(0/1 Selected)";
}

function toggleVibeKeyword(chipElement, keyword) {
    const idx = appState.selectedVibes.indexOf(keyword);
    if (idx > -1) {
        appState.selectedVibes.splice(idx, 1);
        chipElement.classList.remove("selected");
    } else {
        if (appState.selectedVibes.length < 2) {
            appState.selectedVibes.push(keyword);
            chipElement.classList.add("selected");
        } else {
            showToast("Maximum of 2 Experience aspects allowed.");
        }
    }
    vibeCount.textContent = `(${appState.selectedVibes.length}/2 Selected)`;
    validateKeywordSelection();
}

function toggleMenuKeyword(chipElement, keyword) {
    const idx = appState.selectedMenu.indexOf(keyword);
    if (idx > -1) {
        appState.selectedMenu.splice(idx, 1);
        chipElement.classList.remove("selected");
    } else {
        if (appState.selectedMenu.length < 1) {
            appState.selectedMenu.push(keyword);
            chipElement.classList.add("selected");
        } else {
            const selectedChips = containerMenu.querySelectorAll(".chip.selected");
            selectedChips.forEach(c => c.classList.remove("selected"));
            appState.selectedMenu = [keyword];
            chipElement.classList.add("selected");
        }
    }
    menuCount.textContent = `(${appState.selectedMenu.length}/1 Selected)`;
    validateKeywordSelection();
}

function validateKeywordSelection() {
    if (appState.selectedVibes.length === 2 && appState.selectedMenu.length === 1) {
        btnConfirmKeywords.disabled = false;
    } else {
        btnConfirmKeywords.disabled = true;
    }
}

btnConfirmKeywords.addEventListener("click", () => {
    appState.selectedKeywords = [...appState.selectedVibes, ...appState.selectedMenu];
    
    if (appState.selectedStars <= 3) {
        appState.selectedCardImage = "card_spa.png";
    } else {
        appState.selectedCardImage = Math.random() < 0.5 ? "card_vacation.png" : "card_camera.png";
    }
    
    initializeWriterScreen();
    navigateTo("writer");
});

/* ==========================================
   SCREEN 4: REVIEW WRITER SCREEN
   ========================================== */
const targetChipsStatus = document.getElementById("target-chips-status");
const reviewText = document.getElementById("review-text");
const reviewCharCount = document.getElementById("review-char-count");
const btnCopyReview = document.getElementById("btn-copy-review");
const btnGotoGoogle = document.getElementById("btn-goto-google");
const btnVerifyClaim = document.getElementById("btn-verify-claim");

function initializeWriterScreen() {
    // Clear review inputs
    reviewText.value = "";
    reviewCharCount.textContent = "0 characters";
    btnCopyReview.disabled = true;
    btnCopyReview.querySelector("small").textContent = "Keywords missing";

    // Hide redirect & verify buttons
    if (btnGotoGoogle) btnGotoGoogle.style.display = "none";
    if (btnVerifyClaim) btnVerifyClaim.style.display = "none";

    // Render keyword verification status chips
    targetChipsStatus.innerHTML = "";
    appState.selectedKeywords.forEach(keyword => {
        const chip = document.createElement("span");
        chip.className = "status-chip";
        chip.textContent = keyword;
        chip.id = `status-chip-${cleanId(keyword)}`;
        targetChipsStatus.appendChild(chip);
    });
}

function cleanId(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, "-");
}

reviewText.addEventListener("input", () => {
    const text = reviewText.value;
    reviewCharCount.textContent = `${text.length} characters`;

    let allUsed = true;

    appState.selectedKeywords.forEach(keyword => {
        const chip = document.getElementById(`status-chip-${cleanId(keyword)}`);
        const isPresent = text.toLowerCase().includes(keyword.toLowerCase());
        
        if (chip) {
            if (isPresent) {
                chip.classList.add("active");
            } else {
                chip.classList.remove("active");
                allUsed = false;
            }
        }
    });

    // Update speech bubble dynamic popups
    updateSpeechBanter(text);

    if (allUsed && text.trim().length > 10) {
        btnCopyReview.disabled = false;
        btnCopyReview.querySelector("small").textContent = "Ready to Copy!";
    } else {
        btnCopyReview.disabled = true;
        btnCopyReview.querySelector("small").textContent = text.trim().length <= 10 ? "Write a bit more..." : "Keywords missing";
    }
});

btnCopyReview.addEventListener("click", () => {
    const textToCopy = reviewText.value;
    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast("Review copied to clipboard!");
        
        // Make next steps visible
        if (btnGotoGoogle) btnGotoGoogle.style.display = "block";
        if (btnVerifyClaim) btnVerifyClaim.style.display = "block";
    }).catch(err => {
        console.error("Failed to copy:", err);
        showToast("Error copying, copy manually.");
    });
});

if (btnGotoGoogle) {
    btnGotoGoogle.addEventListener("click", () => {
        window.open("https://search.google.com/local/writereview?placeid=ChIJT4N1hQ-1j4ARgJ6S0h4FqC4", "_blank");
    });
}

if (btnVerifyClaim) {
    btnVerifyClaim.addEventListener("click", () => {
        setupScratchCard();
        navigateTo("scratch");
    });
}

/* ==========================================
   SCREEN 5: SCRATCH CARD CANVAS
   ========================================== */
const scratchContainer = document.getElementById("scratch-container");
const scratchCanvas = document.getElementById("scratch-canvas");
const btnGoToShare = document.getElementById("btn-go-to-share");

let isDrawing = false;
let ctx = null;

function setupScratchCard() {
    appState.isScratched = false;
    btnGoToShare.style.display = "none";
    
    // Set revealed card background image
    const revealedCard = document.getElementById("scratch-reveal-card");
    if (revealedCard) {
        revealedCard.style.backgroundImage = `url('${appState.selectedCardImage}')`;
    }

    const width = scratchContainer.clientWidth || 310;
    const height = scratchContainer.clientHeight || 550;
    scratchCanvas.width = width;
    scratchCanvas.height = height;

    ctx = scratchCanvas.getContext("2d");
    
    // Fill with a clinical blue grease gradient
    let grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#004bb9');
    grad.addColorStop(0.5, '#3cb3ff');
    grad.addColorStop(1, '#004bb9');
    
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Draw scratch text on grease layer
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 16px 'Fredoka'";
    ctx.textAlign = "center";
    ctx.fillText("SWIPE TO REVEAL", width / 2, height / 2 - 10);
    ctx.fillStyle = "#b9defa";
    ctx.font = "italic 12px 'Poppins'";
    ctx.fillText("uncover your smile card...", width / 2, height / 2 + 15);

    // Overlay warning border outlines on canvas
    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
    ctx.lineWidth = 14;
    ctx.strokeRect(7, 7, width - 14, height - 14);

    ctx.globalCompositeOperation = 'source-over';

    scratchCanvas.addEventListener("mousedown", startScratch);
    scratchCanvas.addEventListener("mousemove", scratch);
    scratchCanvas.addEventListener("mouseup", stopScratch);
    scratchCanvas.addEventListener("mouseleave", stopScratch);

    scratchCanvas.addEventListener("touchstart", startScratch, { passive: false });
    scratchCanvas.addEventListener("touchmove", scratch, { passive: false });
    scratchCanvas.addEventListener("touchend", stopScratch);
}

function startScratch(e) {
    isDrawing = true;
    scratch(e);
}

function scratch(e) {
    if (!isDrawing) return;
    e.preventDefault();

    const rect = scratchCanvas.getBoundingClientRect();
    let x, y;

    if (e.touches) {
        x = e.touches[0].clientX - rect.left;
        y = e.touches[0].clientY - rect.top;
    } else {
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
    }

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();

    checkScratchProgress();
}

function stopScratch() {
    isDrawing = false;
}

function checkScratchProgress() {
    if (appState.isScratched) return;

    const imgData = ctx.getImageData(0, 0, scratchCanvas.width, scratchCanvas.height);
    const pixels = imgData.data;
    let transparentCount = 0;

    for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) {
            transparentCount++;
        }
    }

    const percentage = (transparentCount / (pixels.length / 4)) * 100;
    
    if (percentage > 35) {
        appState.isScratched = true;
        
        scratchCanvas.style.transition = "opacity 0.6s ease-out";
        scratchCanvas.style.opacity = "0";
        
        setTimeout(() => {
            scratchCanvas.style.display = "none";
            btnGoToShare.style.display = "block";
        }, 600);
    }
}

btnGoToShare.addEventListener("click", () => {
    initializeShareScreen();
    navigateTo("share");
});

/* ==========================================
   SCREEN 6: SOCIAL SHARE LOGIC
   ========================================== */
const btnShareInstagram = document.getElementById("btn-share-instagram");
const btnShareWhatsapp = document.getElementById("btn-share-whatsapp");
const btnRestart = document.getElementById("btn-restart");

function initializeShareScreen() {
    const previewCard = document.getElementById("social-preview-card");
    if (previewCard) {
        previewCard.style.backgroundImage = `url('${appState.selectedCardImage}')`;
    }
}

btnShareInstagram.addEventListener("click", () => {
    const shareText = `Check out my patient smile card from Bright Smiles Dental Clinic! 🦷✨`;
    navigator.clipboard.writeText(shareText).then(() => {
        showToast("Instagram text copied! Redirecting...");
        setTimeout(() => {
            window.open("https://instagram.com", "_blank");
        }, 1200);
    });
});

btnShareWhatsapp.addEventListener("click", () => {
    const shareText = `Check out my patient smile card from Bright Smiles Dental Clinic! 🦷🪥\n\nCurate your review at LoopReview!`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, "_blank");
});

btnRestart.addEventListener("click", () => {
    appState = {
        selectedStars: 0,
        selectedVibes: [],
        selectedMenu: [],
        selectedKeywords: [],
        selectedCardImage: "",
        isCopied: false,
        isScratched: false
    };

    starBtns.forEach(btn => btn.classList.remove("selected"));
    ratingLabel.textContent = "Select your rating...";

    scratchCanvas.style.display = "block";
    scratchCanvas.style.opacity = "1";
    scratchCanvas.style.transition = "none";

    navigateTo("stars");
});

/* ==========================================
   TOAST HELPER
   ========================================== */
const toastElement = document.getElementById("app-toast");
function showToast(message) {
    toastElement.textContent = message;
    toastElement.classList.add("show");
    
    setTimeout(() => {
        toastElement.classList.remove("show");
    }, 2500);
}
