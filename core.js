
// --- NAVIGATION & EXIT LOGIC ---
window.closeMenu = function() {
    // Falls ein Overlay/Modal offen ist, wird es geschlossen
    const modals = document.querySelectorAll('.modal, .floating-card');
    modals.forEach(m => m.style.display = 'none');
    
    // Kehrt sicher zum Dashboard zurück
    resetApp();
};

// --- FIREBASE MOCK AUTH ---


window.toggleAuthMode = function(mode) {
    if(mode === 'register') {
        document.getElementById('login-form-container').style.display = 'none';
        document.getElementById('register-form-container').style.display = 'block';
    } else {
        document.getElementById('login-form-container').style.display = 'block';
        document.getElementById('register-form-container').style.display = 'none';
    }
};

window.handleRegister = function() {
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const pass = document.getElementById('reg-pass').value.trim();
    const passConfirm = document.getElementById('reg-pass-confirm').value.trim();
    
    if(!name || !email || !pass || !passConfirm) {
        alert("Bitte fülle alle Felder aus.");
        return;
    }
    
    if(pass !== passConfirm) {
        alert("Die Passwörter stimmen nicht überein!");
        return;
    }
    
    // Check if user already exists
    if(localStorage.getItem('td_registered_email') === email) {
        alert("Unter dieser E-Mail existiert bereits ein Konto. Bitte melde dich an.");
        toggleAuthMode('login');
        return;
    }
    
    // Save registration
    localStorage.setItem('td_registered_name', name);
    localStorage.setItem('td_registered_email', email);
    localStorage.setItem('td_registered_pass', pass);
    
    alert(`Willkommen an Bord, ${name}! Dein Konto wurde erfolgreich erstellt.`);
    
    // Auto Login
    window.handleLogin(true, email, pass);
};

window.handleLogin = function(isAuto = false, autoEmail = null, autoPass = null) {
    const email = isAuto ? autoEmail : document.getElementById('login-email').value.trim();
    const pass = isAuto ? autoPass : document.getElementById('login-pass').value.trim();
    
    if(!email || (!pass && !isAuto)) {
        alert("Bitte E-Mail und Passwort eingeben.");
        return;
    }
    
    const regEmail = localStorage.getItem('td_registered_email');
    const regPass = localStorage.getItem('td_registered_pass');
    const regName = localStorage.getItem('td_registered_name') || 'Lernender';
    
    if(!regEmail) {
        alert("Es existiert noch kein Konto. Bitte registriere dich zuerst.");
        toggleAuthMode('register');
        return;
    }
    
    if(email !== regEmail || pass !== regPass) {
        alert("Falsche E-Mail oder falsches Passwort.");
        return;
    }
    
    // Login successful
    localStorage.setItem('td_user_logged_in', 'true');
    localStorage.setItem('td_user_email', email);
    localStorage.setItem('td_user_name', regName);
    
    document.getElementById('view-login').style.display = 'none';
    document.getElementById('app-layout').style.display = ''; 
    
    if(window.STATE.xp === undefined) {
        initApp();
    }
    
    updateRings();
    if(document.getElementById('nav-dash')) document.getElementById('nav-dash').click();
};

window.handleLogout = function() {
    if(confirm("Möchtest du dich wirklich abmelden? Dein lokaler Fortschritt wird gespeichert.")) {
        localStorage.removeItem('td_user_logged_in');
        document.getElementById('app-layout').style.display = 'none';
        document.getElementById('view-login').style.display = 'flex';
        document.getElementById('login-pass').value = '';
    }
};

window.STATE = window.STATE || {};
window.STATE.xp = parseInt(localStorage.getItem('td_xp')) || 0;
window.STATE.exams = parseInt(localStorage.getItem('td_exams')) || 0;
window.STATE.errs = parseInt(localStorage.getItem('td_errs')) || 0;
window.STATE.vault = (() => { try { return JSON.parse(localStorage.getItem('td_vault')) || []; } catch(e) { return []; } })();

// Pomodoro State
window.STATE.pomodoroTimer = null;
window.STATE.pomodoroActive = false;
window.STATE.pomodoroSeconds = 25 * 60;
window.STATE.pomodoroBreak = false;

// Load Settings
window.STATE.oledMode = localStorage.getItem('td_oled') === 'true';
window.STATE.lrsMode = localStorage.getItem('td_lrs') === 'true';
window.STATE.zenMode = localStorage.getItem('td_zen') === 'true';

window.Modules = window.Modules || {};
window.registerModule = function(name, data) {
    window.Modules[name] = data;
};

// SVG Icons for Level 4
const iconLearn = `<svg viewBox="0 0 24 24"><path d="M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z"/></svg>`;
const iconExam = `<svg viewBox="0 0 24 24"><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"/></svg>`;
const iconPractice = `<svg viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"/></svg>`;

// Accordion Generation

function buildAccordionHTML() {
    const subjects = [
        {id: 'math', name: 'Mathematik'}, {id: 'deu', name: 'Deutsch'}, {id: 'eng', name: 'Englisch'},
        {id: 'phys', name: 'Physik'}, {id: 'chem', name: 'Chemie'}, {id: 'bio', name: 'Biologie'},
        {id: 'geo', name: 'Geografie'}, {id: 'his', name: 'Geschichte'}, {id: 'gk', name: 'Gemeinschaftskunde'},
        {id: 'kunst', name: 'Musik & Kunst'}
    ];
    if (STATE.lrsMode) {
        subjects.push({id: 'lrs', name: 'LRS-Training'});
    }
    
    let html = '';
    
    subjects.forEach(subj => {
        if (subj.id === 'lrs') {
            html += `<div class="acc-level-1">
                <div class="acc-title-1" onclick="toggleAcc(this)">▼ ${subj.name}</div>
                <div class="acc-content-1">
                    <div class="action-card" onclick="startLRS('read')">
                        <div class="action-card-title">Lesen lernen (Silben)</div>
                        ${iconLearn}
                    </div>
                    <div class="action-card" onclick="startLRS('write')">
                        <div class="action-card-title">Schreiben lernen (Sperre)</div>
                        ${iconPractice}
                    </div>
                    <div class="action-card" onclick="startLRS('words')">
                        <div class="action-card-title">Wörter einprägen</div>
                        ${iconExam}
                    </div>
                </div>
            </div>`;
            return;
        }

        html += `<div class="acc-level-1">
            <div class="acc-title-1" onclick="toggleAcc(this)">▼ ${subj.name}</div>
            <div class="acc-content-1">`;
            
        for(let g=5; g<=10; g++) {
            // Check if module data exists
            const modData = window.Modules[subj.id] && window.Modules[subj.id][g];
            
            html += `<div class="acc-level-2">
                <div class="acc-title-2" onclick="toggleAcc(this)">▼ Klasse ${g}</div>
                <div class="acc-content-2">`;
            
            if (modData && modData.topics) {
                // NEW FORMAT: Has an array of topics
                modData.topics.forEach((topic, tIdx) => {
                    html += `<div class="acc-level-3">
                        <div class="acc-title-3" onclick="toggleAcc(this); this.classList.toggle('open');">Thema ${tIdx+1}: ${topic.title}</div>
                        <div class="acc-content-3">
                            <div class="action-card" onclick="openTheory('${subj.id}', ${g}, ${tIdx})">
                                <div class="action-card-title">Lernen (Erklärung)</div>
                                ${iconLearn}
                            </div>
                            <div class="action-card" onclick="openExerciseDirect('${subj.id}', ${g}, ${tIdx})">
                                <div class="action-card-title">Üben (20 Aufgaben)</div>
                                ${iconPractice}
                            </div>
                            <div class="action-card" onclick="startExam('${subj.id}', ${g}, ${tIdx})">
                                <div class="action-card-title" style="color: var(--sys-red);">Prüfung (30 Min)</div>
                                ${iconExam}
                            </div>
                        </div>
                    </div>`;
                });
            } else {
                // OLD FORMAT FALLBACK: Single topic per grade
                html += `<div class="acc-level-3">
                    <div class="acc-title-3" onclick="toggleAcc(this); this.classList.toggle('open');">Thema 1: Lehrplaninhalte</div>
                    <div class="acc-content-3">
                        <div class="action-card" onclick="openTheory('${subj.id}', ${g}, null)">
                            <div class="action-card-title">Lernen (Erklärung)</div>
                            ${iconLearn}
                        </div>
                        <div class="action-card" onclick="openExerciseDirect('${subj.id}', ${g}, null)">
                            <div class="action-card-title">Üben (20 Aufgaben)</div>
                            ${iconPractice}
                        </div>
                        <div class="action-card" onclick="startExam('${subj.id}', ${g}, null)">
                            <div class="action-card-title" style="color: var(--sys-red);">Prüfung (30 Min)</div>
                            ${iconExam}
                        </div>
                    </div>
                </div>`;
            }
            html += `</div></div>`; // Close Ebene 2
        }
        html += `</div></div>`; // Close Ebene 1
    });
    return html;
}

window.toggleAcc = function(el) {
    const content = el.nextElementSibling;
    if(content.style.display === 'block') {
        content.style.display = 'none';
        el.classList.remove('open');
    } else {
        content.style.display = 'block';
        el.classList.add('open');
    }
};

window.navTo = function(view) {
    document.querySelectorAll('.view-section').forEach(el => {
        el.classList.remove('active-view');
        el.style.display = 'none';
    });
    const target = document.getElementById('view-' + view);
    if(target) {
        target.style.display = 'block';
        void target.offsetWidth;
        target.classList.add('active-view');
    }
    
    // Ambient Themes reset on dashboard
    if (view === 'dashboard') {
        document.body.className = document.body.className.replace(/theme-\w+/g, '').trim();
    }
    
    closeMobileSheet();
    updateDashboardRings();
};

window.openMobileSheet = function() { document.getElementById('mobile-subject-sheet').classList.add('open'); };
window.closeMobileSheet = function() { document.getElementById('mobile-subject-sheet').classList.remove('open'); };

window.updateDashboardRings = function() {
    const pX = Math.min(STATE.xp / 1000, 1);
    const score = Math.floor(pX * 1000);
    const scoreEl = document.getElementById('val-score');
    if(scoreEl) scoreEl.innerText = score;
};

window.openTheory = function(mod, grade, topicIdx) {
    const modData = window.Modules[mod] && window.Modules[mod][grade];
    if(!modData) return;
    STATE.activeModule = mod;
    STATE.activeGrade = grade;
    STATE.activeTopicIdx = topicIdx;
    
    // Ambient Theme application
    document.body.className = document.body.className.replace(/theme-\w+/g, '').trim();
    document.body.classList.add('theme-' + mod);
    if(STATE.oledMode) document.body.classList.add('oled-mode');
    if(STATE.lrsMode) document.body.classList.add('lrs-mode');
    
    let titleStr = `${mod.toUpperCase()} - Klasse ${grade}`;
    
    if (topicIdx !== null && topicIdx !== undefined && modData.topics) {
        titleStr += ` (${modData.topics[topicIdx].title})`;
        if (modData.topics[topicIdx].slides) {
            STATE.activeSlides = modData.topics[topicIdx].slides;
        } else {
            // Fallback for non-migrated modules: Create 1 slide from theory
            STATE.activeSlides = [
                { title: "Einführung", text: modData.topics[topicIdx].theory, svg: "", merkhilfe: "", praxis: false }
            ];
        }
    } else {
        STATE.activeSlides = [ { title: "Einführung", text: modData.theory, svg: "", merkhilfe: "", praxis: false } ];
    }
    
    STATE.activeSlideIndex = 0;
    document.getElementById('theory-title').innerText = titleStr;
    document.getElementById('btn-print-flashcards').style.display = 'none';
    navTo('theory');
    renderSlide();
};

window.renderSlide = function() {
    const container = document.getElementById('theory-slides-container');
    const slide = STATE.activeSlides[STATE.activeSlideIndex];
    
    document.getElementById('slide-progress').innerText = `Slide ${STATE.activeSlideIndex + 1} von ${STATE.activeSlides.length}`;
    
    let html = `<h3 style="margin-bottom:15px; color:var(--sys-blue);">${slide.title}</h3>`;
    
    if(slide.svg && slide.svg.trim() !== '') {
        html += `<div style="text-align:center; margin-bottom: 20px; background: rgba(0,0,0,0.2); border-radius: 16px; padding: 15px;">${slide.svg}</div>`;
    }
    
    html += `<div style="line-height:1.6; font-size: 16px; margin-bottom:20px;">${slide.text}</div>`;
    
    if(slide.merkhilfe && slide.merkhilfe.trim() !== '') {
        html += `<div style="background: rgba(255, 159, 10, 0.1); border-left: 4px solid var(--sys-orange); padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <strong>💡 Merkhilfe:</strong> ${slide.merkhilfe}
        </div>`;
    }
    
    if(slide.praxis) {
        html += `<div style="background: rgba(50, 215, 75, 0.1); border-left: 4px solid var(--sys-green); padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <strong>🚀 Praxis-Case:</strong> Lasse uns das in der Übung anwenden!
        </div>`;
    }
    
    // Add LRS Speech Button if needed
    if(STATE.lrsMode) {
        html += `<button class="secondary" style="margin-top: 10px; font-size: 14px; padding: 8px 15px;" onclick="speakText(\`${slide.text.replace(/"/g, '')}\`)">🔊 Vorlesen</button>`;
    }
    
    container.innerHTML = html;
    
    document.getElementById('btn-slide-prev').style.display = STATE.activeSlideIndex > 0 ? 'block' : 'none';
    
    if (STATE.activeSlideIndex < STATE.activeSlides.length - 1) {
        document.getElementById('btn-slide-next').style.display = 'block';
        document.getElementById('btn-slide-finish').style.display = 'none';
    } else {
        document.getElementById('btn-slide-next').style.display = 'none';
        document.getElementById('btn-slide-finish').style.display = 'block';
    }
};

window.nextSlide = function() {
    if(STATE.activeSlideIndex < STATE.activeSlides.length - 1) {
        STATE.activeSlideIndex++;
        renderSlide();
    }
};

window.prevSlide = function() {
    if(STATE.activeSlideIndex > 0) {
        STATE.activeSlideIndex--;
        renderSlide();
    }
};

window.speakText = function(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = 'de-DE';
        window.speechSynthesis.speak(msg);
    } else {
        alert('Dein Browser unterstützt keine Vorlesefunktion.');
    }
};

window.nextExercise = function() {
    if(STATE.examMode && STATE.taskPool.length === 0) {
        finishExam();
    } else {
        startExercise(true);
    }
};

window.startLRS = function(mode) {
    STATE.activeModule = 'lrs';
    document.body.className = document.body.className.replace(/theme-\w+/g, '').trim();
    document.body.classList.add('theme-lrs');
    
    // FISHER-YATES SHUFFLE HELPER
    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    
    if(mode === 'read') {
        if(!window.LRS_DATA || !window.LRS_DATA.readingPool) { alert("LRS Data not loaded"); return; }
        
        // Ensure a shuffled pool exists in STATE
        if(!STATE.shuffledReadingPool || STATE.shuffledReadingPool.length === 0) {
            STATE.shuffledReadingPool = shuffleArray([...window.LRS_DATA.readingPool]);
        }
        const item = STATE.shuffledReadingPool.pop();
        
        document.getElementById('theory-title').innerText = item.title;
        STATE.activeSlides = [ { title: "Lesetext", text: item.text, svg: "", merkhilfe: "Lies aufmerksam." } ];
        
        document.getElementById('theory-title').innerText = "Lesen: " + item.title;
        document.getElementById('theory-slides-container').innerHTML = `
            <h3>${item.title}</h3>
            <p style="font-size: 1.2rem; line-height: 1.8;">${item.text}</p>
            <br>
            <button class="primary" onclick="startReadingQuestions()">Zum Quiz (Verständnis)</button>
        `;
        
        // Store questions for the next step
        window.tempReadingQuestions = item.questions;
        
        navTo('theory');
        
    } else if(mode === 'write') {
        if(!window.LRS_DATA || !window.LRS_DATA.dictationPool) { alert("LRS Data not loaded"); return; }
        STATE.examMode = false;
        
        if(!STATE.shuffledDictationPool || STATE.shuffledDictationPool.length === 0) {
            STATE.shuffledDictationPool = shuffleArray([...window.LRS_DATA.dictationPool]);
        }
        const text = STATE.shuffledDictationPool.pop();
        
        STATE.taskPool = [{q: `Schreibe ab: '${text}'`, a: text, s: "Achte auf Groß/Kleinschreibung"}];
        startExercise();
        
        const inputEl = document.getElementById('ex-input');
        inputEl.oninput = function(e) {
            const currentVal = e.target.value;
            const targetVal = STATE.activeTask.a;
            if (currentVal.length > 0 && !targetVal.startsWith(currentVal)) {
                e.target.value = currentVal.slice(0, -1);
                e.target.style.transform = 'translateX(-5px)';
                e.target.style.borderColor = 'var(--sys-red)';
                setTimeout(() => { 
                    e.target.style.transform = 'translateX(5px)'; 
                    setTimeout(() => { e.target.style.transform = 'none'; }, 100);
                }, 100);
            } else {
                e.target.style.borderColor = 'rgba(255,255,255,0.15)';
            }
        };
    } else if(mode === 'words') {
        if(!window.LRS_DATA || !window.LRS_DATA.dictationPool) { alert("LRS Data not loaded"); return; }
        
        if(!STATE.shuffledDictationPool || STATE.shuffledDictationPool.length === 0) {
            STATE.shuffledDictationPool = shuffleArray([...window.LRS_DATA.dictationPool]);
        }
        const text = STATE.shuffledDictationPool.pop();
        
        const level = parseInt(prompt("Welche Stufe (1=25%, 2=50%, 3=75%, 4=100%)?", "1")) || 1;
        
        document.getElementById('ex-title').innerText = "Wörter einprägen";
        document.getElementById('ex-question').innerHTML = `Präge dir den Text ein:<br><strong style="font-size: 1.5rem; color: var(--sys-blue);">${text}</strong><br><br>Er wird in 5 Sekunden ausgeblendet.`;
        document.getElementById('ex-input').style.display = 'none';
        document.getElementById('ex-next').style.display = 'none';
        document.getElementById('ex-steps').style.display = 'none';
        navTo('exercise');
        
        setTimeout(() => {
            let hiddenText = text;
            if(level === 1) hiddenText = text.replace(/[aeiouAEIOU]/g, '_');
            else if(level === 2) hiddenText = text.replace(/[a-zA-Z]/g, (c, i) => i%2===0?'_':c);
            else if(level === 3) hiddenText = text.replace(/[a-zA-Z]/g, '_');
            else if(level === 4) hiddenText = "";
            
            let html = `Versuche den Text zu rekonstruieren:<br><strong style="font-size: 1.2rem;">${hiddenText}</strong><br><br>`;
            if(level === 4) html += `<button class="secondary" onclick="document.getElementById('peek').style.display='block'; setTimeout(()=>document.getElementById('peek').style.display='none', 5000)">Text kurz ansehen (5s)</button><br><strong id="peek" style="display:none; color:var(--sys-blue); margin-top:10px;">${text}</strong>`;
            
            document.getElementById('ex-question').innerHTML = html;
            document.getElementById('ex-input').style.display = 'block';
            document.getElementById('ex-input').value = '';
            
            STATE.examMode = false;
            STATE.activeTask = {q: hiddenText, a: text, s: "Das war der Originaltext."};
        }, 5000);
    }
};


window.openExerciseDirect = function(mod, grade, topicIdx) {
    const modData = window.Modules[mod] && window.Modules[mod][grade];
    if(!modData) { alert("Modul existiert nicht."); return; }
    STATE.activeModule = mod;
    STATE.activeGrade = grade;
    STATE.activeTopicIdx = topicIdx;
    
    // Ambient Theme application
    document.body.className = document.body.className.replace(/theme-\w+/g, '').trim();
    document.body.classList.add('theme-' + mod);
    
    document.getElementById('btn-print-flashcards').style.display = 'none'; // Hide print until exercise finished
    startExercise();
};

window.buildTaskPool = function(modData, count) {
    const pool = new Map();
    let attempts = 0;
    while(pool.size < count && attempts < 2000) {
        let task;
        if (STATE.activeTopicIdx !== null && STATE.activeTopicIdx !== undefined && modData.topics) {
            task = modData.topics[STATE.activeTopicIdx].generate();
        } else {
            task = modData.generate();
        }
        
        if(!pool.has(task.q)) {
            pool.set(task.q, task);
        }
        attempts++;
    }
    
    let arr = Array.from(pool.values());
    for(let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

window.printFlashcards = function() {
    const modData = window.Modules[STATE.activeModule] && window.Modules[STATE.activeModule][STATE.activeGrade];
    if(!modData) return;
    
    // Generate pool of up to 20 unique tasks for printing
    const printTasks = window.buildTaskPool(modData, 20);
    
    let html = '<div class="print-grid">';
    printTasks.forEach(t => {
        html += `
            <div class="flashcard">
                <div class="fc-question">${t.q}</div>
                <div class="fc-divider"></div>
                <div class="fc-answer">${t.a}<br><span style="font-size:10pt; color:#666;">(${t.s})</span></div>
            </div>
        `;
    });
    html += '</div>';
    
    document.getElementById('print-area').innerHTML = html;
    window.print();
    // Cleanup after print
    setTimeout(() => { document.getElementById('print-area').innerHTML = ''; }, 1000);
};

window.startExercise = function(isNext = false) {
    const modData = window.Modules[STATE.activeModule] && window.Modules[STATE.activeModule][STATE.activeGrade];
    if(!modData) return;
    
    // Only build pool if it's a new exercise session
    if(!isNext || !STATE.taskPool || STATE.taskPool.length === 0) {
        STATE.examMode = false;
        STATE.taskPool = window.buildTaskPool(modData, 20);
        STATE.completedTasks = 0;
    }
    
    if(STATE.taskPool.length === 0) {
        alert("Übung/Prüfung abgeschlossen! Super gemacht.");
        if(!STATE.examMode) {
            document.getElementById('btn-print-flashcards').style.display = 'block'; // Show print button
        }
        navTo('dashboard');
        return;
    }
    
    // Pop the next unique task from the shuffled array
    const data = STATE.taskPool.pop();
    STATE.activeTask = data;
    
    if(!STATE.examMode) {
        document.getElementById('ex-title').innerText = `Übung (Noch ${STATE.taskPool.length + 1} Aufgaben)`;
    }
    
    const qEl = document.getElementById('ex-question');
    qEl.innerHTML = data.q;
    if(data.svg) qEl.innerHTML += `<div style="margin-top:15px;text-align:center;">${data.svg}</div>`;

    document.getElementById('ex-input').value = '';
    document.getElementById('ex-feedback').innerText = '';
    document.getElementById('ex-steps').style.display = 'none';
    document.getElementById('ex-next').style.display = 'none';
    navTo('exercise');
};





window.startExam = function(mod, grade, topicIdx) {
    STATE.taskPool = []; // Reset pool for exam

    const modData = window.Modules[mod] && window.Modules[mod][grade];
    if(!modData) { alert("Modul existiert nicht."); return; }
    STATE.activeModule = mod;
    STATE.activeGrade = grade;
    STATE.activeTopicIdx = topicIdx;
    STATE.examMode = true;
    STATE.examTimer = 1800; // 30 mins
    
    // Ambient Theme application
    document.body.className = document.body.className.replace(/theme-\w+/g, '').trim();
    document.body.classList.add('theme-' + mod);
    
    document.getElementById('btn-print-flashcards').style.display = 'none';
    
    if(window.examInterval) clearInterval(window.examInterval);
    
    // Zen Mode checks
    if(STATE.zenMode) {
        const exTitle = document.getElementById('ex-title');
        if(exTitle) exTitle.innerHTML = `Prüfung <span style="color:var(--sys-green); float:right;">ZEN</span>`;
    } else {
        window.examInterval = setInterval(() => {
            STATE.examTimer--;
            const mins = Math.floor(STATE.examTimer / 60);
            const secs = STATE.examTimer % 60;
            const exTitle = document.getElementById('ex-title');
            if(exTitle && STATE.examMode) exTitle.innerHTML = `Prüfung <span style="color:var(--sys-red); float:right;">${mins}:${secs < 10 ? '0'+secs : secs}</span>`;
            if(STATE.examTimer <= 0) {
                clearInterval(window.examInterval);
                alert("Die Prüfungszeit ist abgelaufen!");
                navTo('dashboard');
            }
        }, 1000);
    }
    
    startExercise();
};

// --- V8 Features --- //


window.generateExamPlan = function() {
    const type = document.getElementById('exam-type') ? document.getElementById('exam-type').value : 'Prüfung';
    const topicsRaw = document.getElementById('exam-topics') ? document.getElementById('exam-topics').value : '';
    const subj = document.getElementById('exam-subj').value;
    const dateStr = document.getElementById('exam-date').value;
    const output = document.getElementById('exam-plan-output');
    
    if(!dateStr) {
        alert("Bitte ein Datum auswählen!");
        return;
    }
    
    const targetDate = new Date(dateStr);
    const today = new Date();
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if(diffDays <= 0) {
        alert("Das Datum muss in der Zukunft liegen!");
        return;
    }
    
    const topicsList = topicsRaw.split(',').map(t => t.trim()).filter(t => t.length > 0);
    const partA = topicsList.slice(0, Math.ceil(topicsList.length / 2)).join(', ') || 'Grundlagen des Fachs';
    const partB = topicsList.slice(Math.ceil(topicsList.length / 2)).join(', ') || 'Komplexe Anwendungen & Transfer';
    
    output.style.display = 'block';
    output.innerHTML = `
        <h4 style="margin-bottom:10px; color:var(--sys-blue);">KI-Roadmap: ${type} in ${diffDays} Tagen</h4>
        <p><strong>Fach:</strong> ${subj.toUpperCase()}</p>
        <p style="margin-top:10px;"><strong>Teil A (Basis-Wissen/Grundlagen):</strong><br> ${partA}</p>
        <p><strong>Teil B (Transfer/Anwendung):</strong><br> ${partB}</p>
        
        <ul style="margin-left: 20px; margin-top: 15px; line-height: 1.6;">
            <li><strong>HEUTE:</strong> Fokussiere dich auf <span style="color:var(--sys-blue);">Teil A</span>, um die Grundlagen zu sichern.</li>
            <li><strong>In ${Math.max(1, Math.floor(diffDays / 2))} Tagen:</strong> Beginne mit den komplexeren Aufgaben aus <span style="color:var(--sys-green);">Teil B</span>.</li>
            <li><strong>Die letzten 2 Tage:</strong> Gemischte Simulation (Prüfungsmodus) ohne Feedback!</li>
        </ul>
    `;
};

window.togglePomodoro = function() {
    const btn = document.getElementById('btn-pomodoro');
    const timeDisplay = document.getElementById('pomodoro-time');
    
    if(STATE.pomodoroActive) {
        clearInterval(STATE.pomodoroTimer);
        STATE.pomodoroActive = false;
        STATE.pomodoroSeconds = 25 * 60;
        STATE.pomodoroBreak = false;
        btn.style.background = 'rgba(255,255,255,0.1)';
        timeDisplay.innerText = "25:00";
        return;
    }
    
    STATE.pomodoroActive = true;
    btn.style.background = 'var(--sys-red)';
    
    STATE.pomodoroTimer = setInterval(() => {
        STATE.pomodoroSeconds--;
        const m = Math.floor(STATE.pomodoroSeconds / 60);
        const s = STATE.pomodoroSeconds % 60;
        timeDisplay.innerText = `${m}:${s < 10 ? '0'+s : s}`;
        
        if(STATE.pomodoroSeconds <= 0) {
            if(!STATE.pomodoroBreak) {
                alert("Fokus-Zeit beendet! 5 Minuten Pause.");
                STATE.pomodoroBreak = true;
                STATE.pomodoroSeconds = 5 * 60;
                btn.style.background = 'var(--sys-green)';
            } else {
                alert("Pause beendet! Neue Fokus-Phase?");
                clearInterval(STATE.pomodoroTimer);
                STATE.pomodoroActive = false;
                STATE.pomodoroBreak = false;
                STATE.pomodoroSeconds = 25 * 60;
                btn.style.background = 'rgba(255,255,255,0.1)';
                timeDisplay.innerText = "25:00";
            }
        }
    }, 1000);
};



window.onload = function() {
    const accHTML = buildAccordionHTML();
    document.getElementById('desktop-accordion').innerHTML = accHTML;
    document.getElementById('mobile-accordion').innerHTML = accHTML;
    
    
    if(localStorage.getItem('td_user_logged_in') === 'true') {
        document.getElementById('view-login').style.display = 'none';
        document.getElementById('app-layout').style.display = '';
    } else {
        document.getElementById('view-login').style.display = 'flex';
        document.getElementById('app-layout').style.display = 'none';
        return; // Stop init until logged in
    }
    
    // Only init if logged in

    initSettingsUI();
    updateDashboardRings();
    
    if(window.innerWidth <= 1023) {
        document.getElementById('mobile-logo').style.display = 'flex';
    }
};


window.initSettingsUI = function() {
    const lrsToggle = document.getElementById('toggle-lrs');
    const zenToggle = document.getElementById('toggle-zen');
    const zoomSlider = document.getElementById('slider-zoom');
    
    
    const focusInput = document.getElementById('input-pomo-focus');
    const breakInput = document.getElementById('input-pomo-break');
    if(focusInput) focusInput.value = localStorage.getItem('td_pomo_focus') || 25;
    if(breakInput) breakInput.value = localStorage.getItem('td_pomo_break') || 5;

    const themeSelect = document.getElementById('select-theme');
    const blurSlider = document.getElementById('slider-blur');
    const colorPicker = document.getElementById('picker-color');
    
    if(lrsToggle) lrsToggle.checked = localStorage.getItem('td_lrs') === 'true';
    if(zenToggle) zenToggle.checked = localStorage.getItem('td_zen') === 'true';
    if(zoomSlider) zoomSlider.value = (localStorage.getItem('td_zoom') || 1) * 100;
    
    if(themeSelect) themeSelect.value = localStorage.getItem('td_theme') || 'dark';
    if(blurSlider) blurSlider.value = localStorage.getItem('td_blur') || 40;
    if(colorPicker) colorPicker.value = localStorage.getItem('td_color') || '#0A84FF';
    
    applySettings();
};


// --- V8+ LOGIC ---
window.resetApp = function() {
    clearInterval(window.examInterval);
    STATE.examMode = false;
    document.querySelectorAll('.view-section').forEach(el => {
        el.classList.remove('active-view');
        el.style.display = 'none';
    });
    navTo('dashboard');
};

window.toggleLernhilfe = function() {
    const modal = document.getElementById('lernhilfe-modal');
    if(modal.style.display === 'none' || modal.style.display === '') {
        modal.style.display = 'flex';
        document.body.classList.add('dual-screen-active');
        initDrag();
    } else {
        modal.style.display = 'none';
        document.body.classList.remove('dual-screen-active');
    }
};

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

function initDrag() {
    if(window.innerWidth < 1024) return; // Only desktop
    const modal = document.getElementById('lernhilfe-modal');
    const header = document.getElementById('lernhilfe-header');
    
    header.addEventListener('mousedown', dragStart);
    document.addEventListener('mouseup', dragEnd);
    document.addEventListener('mousemove', drag);
}

function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    if (e.target.tagName.toLowerCase() !== 'button') {
        isDragging = true;
    }
}
function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
}
function drag(e) {
    if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        xOffset = currentX;
        yOffset = currentY;
        const modal = document.getElementById('lernhilfe-modal');
        modal.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    }
}


window.applySettings = function() {
    const lrsToggle = document.getElementById('toggle-lrs');
    const zenToggle = document.getElementById('toggle-zen');
    const zoomSlider = document.getElementById('slider-zoom');
    
    const focusInput = document.getElementById('input-pomo-focus');
    const breakInput = document.getElementById('input-pomo-break');
    if(focusInput) localStorage.setItem('td_pomo_focus', focusInput.value);
    if(breakInput) localStorage.setItem('td_pomo_break', breakInput.value);

    const themeSelect = document.getElementById('select-theme');
    const blurSlider = document.getElementById('slider-blur');
    const colorPicker = document.getElementById('picker-color');
    
    if(themeSelect) {
        const theme = themeSelect.value;
        localStorage.setItem('td_theme', theme);
        document.body.classList.remove('theme-light', 'oled-mode');
        if(theme === 'light') document.body.classList.add('theme-light');
        if(theme === 'oled') document.body.classList.add('oled-mode');
    }
    
    if(blurSlider) {
        const blurVal = blurSlider.value;
        localStorage.setItem('td_blur', blurVal);
        document.documentElement.style.setProperty('--glass-blur', blurVal + 'px');
    }

    const glowSlider = document.getElementById('slider-glow');
    if(glowSlider) {
        const glowVal = glowSlider.value / 100;
        localStorage.setItem('td_glow', glowVal);
        document.documentElement.style.setProperty('--glow-opacity', glowVal);
    }

    
    if(colorPicker) {
        const colorVal = colorPicker.value;
        localStorage.setItem('td_color', colorVal);
        document.documentElement.style.setProperty('--accent-color', colorVal);
    }
    
    if (lrsToggle) {
        STATE.lrsMode = lrsToggle.checked;
        localStorage.setItem('td_lrs', STATE.lrsMode);
        if (STATE.lrsMode) document.body.classList.add('lrs-mode');
        else document.body.classList.remove('lrs-mode');
    }
    
    if (zenToggle) {
        STATE.zenMode = zenToggle.checked;
        localStorage.setItem('td_zen', STATE.zenMode);
    }
    
    if (zoomSlider) {
        const scale = parseInt(zoomSlider.value) / 100;
        document.documentElement.style.setProperty('--base-font-scale', scale);
        localStorage.setItem('td_zoom', scale);
    }
};


// Check Answer Overhaul for Exam Mode
window.checkAnswer = function() {
    const ans = document.getElementById('ex-input').value.trim().toLowerCase().replace(',', '.');
    const corr = STATE.activeTask.a.toLowerCase().replace(',', '.');
    
    if(STATE.examMode) {
        // Just save and proceed
        STATE.examAnswers = STATE.examAnswers || [];
        STATE.examAnswers.push({q: STATE.activeTask.q, a: ans, corr: corr});
        nextExercise();
        return;
    }
    
    // Normal Exercise
    if(ans === corr) {
        document.getElementById('ex-feedback').innerHTML = "<span style='color:var(--sys-green);'>Richtig! +10 XP</span>";
        STATE.xp += 10;
        localStorage.setItem('td_xp', STATE.xp);
        document.getElementById('ex-next').style.display = 'block';
    } else {
        document.getElementById('ex-feedback').innerHTML = "<span style='color:var(--sys-red);'>Falsch!</span>";
        document.getElementById('ex-steps').innerHTML = `<p><strong>Lösungsweg:</strong></p><p>${STATE.activeTask.s}</p>`;
        document.getElementById('ex-steps').style.display = 'block';
        document.getElementById('ex-next').style.display = 'block';
    }
};

window.finishExam = function() {
    clearInterval(window.examInterval);
    let correct = 0;
    let total = STATE.examAnswers ? STATE.examAnswers.length : 0;
    if(total === 0) total = 1; // prevent div by zero
    
    if(STATE.examAnswers) {
        STATE.examAnswers.forEach(ans => {
            if(ans.a === ans.corr) correct++;
        });
    }
    
    alert(`Prüfung beendet! Du hast ${correct} von ${total} richtig.`);
    STATE.examAnswers = [];
    navTo('dashboard');
};

window.nextExercise = function() {
    if(STATE.examMode && STATE.taskPool.length === 0) {
        finishExam();
    } else {
        startExercise(true);
    }
};

window.startReadingQuestions = function() {
    if(!window.tempReadingQuestions || window.tempReadingQuestions.length === 0) {
        alert("Keine Fragen vorhanden.");
        navTo('dashboard');
        return;
    }
    STATE.taskPool = window.tempReadingQuestions.map(q => ({
        q: q.q,
        a: q.a,
        s: "Die Lösung stammt direkt aus dem Text."
    }));
    STATE.examMode = false;
    startExercise(true);
};
