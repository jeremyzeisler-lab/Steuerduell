// ========== STEUER-QUIZDUELL PLUS - APPLICATION LOGIC ==========

let currentMode = 'quiz';
let currentLevel = 'all';
let currentQuestionIndex = 0;
let questionPool = [];
let stats = {
    points: 0,
    correct: 0,
    wrong: 0,
    streak: 0,
    bestStreak: 0,
    lvl1: 0,
    lvl2: 0,
    lvl3: 0
};

let currentBilanzItems = [];
let placedItems = {};

// ========== INITIALIZATION ==========
window.onload = () => {
    if (typeof D_EST_QUIZ === 'undefined') {
        document.getElementById('question').textContent = 
            'Fehler: data.js nicht geladen. Stelle sicher, dass data.js im gleichen Ordner liegt.';
        return;
    }
    loadQuiz();
};

// ========== MODE SWITCHING ==========
function switchMode(mode) {
    currentMode = mode;
    
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.mode === mode);
    });

    document.getElementById('quiz-mode').classList.toggle('hidden', mode !== 'quiz');
    document.getElementById('bilanz-mode').classList.toggle('hidden', mode !== 'bilanz');
    document.getElementById('stats-mode').classList.toggle('hidden', mode !== 'stats');

    if (mode === 'quiz') loadQuiz();
    if (mode === 'bilanz') loadBilanz();
    if (mode === 'stats') updateStatsDisplay();
}

// ========== QUIZ FUNCTIONS ==========
function filterLevel(level) {
    currentLevel = level;
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.level == level);
    });
    loadQuiz();
}

function loadQuiz() {
    const allQuestions = [
        ...(typeof D_EST_QUIZ !== 'undefined' ? D_EST_QUIZ : []),
        ...(typeof D_UST !== 'undefined' ? D_UST : []),
        ...(typeof D_AO !== 'undefined' ? D_AO : [])
    ];

    if (currentLevel === 'all') {
        questionPool = allQuestions;
    } else {
        questionPool = allQuestions.filter(q => q.lvl === parseInt(currentLevel));
    }

    if (questionPool.length === 0) {
        document.getElementById('question').textContent = 'Keine Fragen für dieses Level verfügbar.';
        return;
    }

    currentQuestionIndex = Math.floor(Math.random() * questionPool.length);
    displayQuestion();
}

function displayQuestion() {
    const q = questionPool[currentQuestionIndex];
    if (!q) return;

    document.getElementById('question').textContent = q.q;
    document.getElementById('explanation').classList.add('hidden');

    const answersEl = document.getElementById('answers');
    answersEl.innerHTML = '';

    q.opts.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(idx);
        answersEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const q = questionPool[currentQuestionIndex];
    const btns = document.querySelectorAll('.answer-btn');
    
    btns.forEach((btn, idx) => {
        btn.classList.add('disabled');
        if (idx === q.ans) {
            btn.classList.add('correct');
        } else if (idx === selected) {
            btn.classList.add('wrong');
        }
    });

    if (selected === q.ans) {
        stats.correct++;
        stats.points += (q.lvl || 1) * 10;
        stats.streak++;
        if (stats.streak > stats.bestStreak) stats.bestStreak = stats.streak;
        if (q.lvl === 1) stats.lvl1++;
        if (q.lvl === 2) stats.lvl2++;
        if (q.lvl === 3) stats.lvl3++;
    } else {
        stats.wrong++;
        stats.streak = 0;
    }

    updateStats();

    document.getElementById('explanation').classList.remove('hidden');
    document.getElementById('explanationText').innerHTML = q.explain || 'Keine Erklärung verfügbar.';
}

function nextQuestion() {
    currentQuestionIndex = Math.floor(Math.random() * questionPool.length);
    displayQuestion();
}

function resetQuiz() {
    stats = {
        points: 0,
        correct: 0,
        wrong: 0,
        streak: 0,
        bestStreak: 0,
        lvl1: 0,
        lvl2: 0,
        lvl3: 0
    };
    updateStats();
    loadQuiz();
}

// ========== BILANZ DRAG & DROP ==========
function loadBilanz() {
    if (typeof D_BILANZ_DRAGDROP === 'undefined') {
        document.getElementById('bilanz-task').textContent = 'Bilanz-Daten nicht gefunden.';
        return;
    }

    const allItems = [...D_BILANZ_DRAGDROP];
    const numItems = 8 + Math.floor(Math.random() * 5);
    currentBilanzItems = [];
    
    while (currentBilanzItems.length < numItems && allItems.length > 0) {
        const idx = Math.floor(Math.random() * allItems.length);
        currentBilanzItems.push(allItems[idx]);
        allItems.splice(idx, 1);
    }

    displayBilanzItems();
    placedItems = {};
    
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.innerHTML = '';
    });
}

function displayBilanzItems() {
    const pool = document.getElementById('bilanz-items-pool');
    pool.innerHTML = '';

    currentBilanzItems.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'bilanz-item';
        div.draggable = true;
        div.dataset.itemId = idx;
        div.dataset.correctZone = item.ans;
        div.ondragstart = dragStart;

        div.innerHTML = `
            <span class="item-icon">${item.icon}</span>
            <div class="item-content">
                <div class="item-name">${item.name}</div>
                <div class="item-desc">${item.desc}</div>
            </div>
        `;

        pool.appendChild(div);
    });
}

function dragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.outerHTML);
    e.dataTransfer.setData('itemId', e.target.dataset.itemId);
    e.dataTransfer.setData('correctZone', e.target.dataset.correctZone);
}

function allowDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
}

function dragLeave(e) {
    e.currentTarget.classList.remove('dragover');
}

function drop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');

    const itemId = e.dataTransfer.getData('itemId');
    const zone = e.currentTarget.dataset.zone;
    const html = e.dataTransfer.getData('text/html');

    const wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    const droppedItem = wrapper.firstChild;
    droppedItem.draggable = false;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = '×';
    removeBtn.onclick = () => removeItem(itemId, zone);
    droppedItem.appendChild(removeBtn);

    e.currentTarget.appendChild(droppedItem);

    const originalItem = document.querySelector(`#bilanz-items-pool [data-item-id="${itemId}"]`);
    if (originalItem) {
        originalItem.classList.add('placed');
    }

    placedItems[itemId] = zone;
}

function removeItem(itemId, zone) {
    const zoneEl = document.querySelector(`[data-zone="${zone}"]`);
    const item = zoneEl.querySelector(`[data-item-id="${itemId}"]`);
    if (item) item.remove();

    const originalItem = document.getElementById('bilanz-items-pool').querySelector(`[data-item-id="${itemId}"]`);
    if (originalItem) originalItem.classList.remove('placed');

    delete placedItems[itemId];
}

function checkBilanz() {
    let correct = 0;
    let total = Object.keys(placedItems).length;

    Object.entries(placedItems).forEach(([itemId, zone]) => {
        const item = currentBilanzItems[itemId];
        if (item && item.ans === zone) {
            correct++;
        }
    });

    const result = `${correct} von ${total} richtig platziert!`;
    
    if (correct === total && total === currentBilanzItems.length) {
        alert('🎉 Perfekt! Alle Posten korrekt zugeordnet!\n\n' + result);
        stats.points += 50;
        stats.correct++;
        stats.streak++;
        if (stats.streak > stats.bestStreak) stats.bestStreak = stats.streak;
    } else {
        alert('📊 Ergebnis:\n\n' + result + '\n\nPrüfe die Zuordnung nochmal!');
        stats.wrong++;
        stats.streak = 0;
    }

    updateStats();
}

function resetBilanz() {
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.innerHTML = '';
    });
    displayBilanzItems();
    placedItems = {};
}

function nextBilanzTask() {
    loadBilanz();
}

// ========== STATS ==========
function updateStats() {
    document.getElementById('totalPoints').textContent = stats.points;
    document.getElementById('correctCount').textContent = stats.correct;
    document.getElementById('wrongCount').textContent = stats.wrong;
    document.getElementById('streak').textContent = stats.streak + ' 🔥';
}

function updateStatsDisplay() {
    document.getElementById('stats-points').textContent = stats.points;
    document.getElementById('stats-correct').textContent = stats.correct;
    document.getElementById('stats-wrong').textContent = stats.wrong;
    const ratio = stats.correct + stats.wrong > 0 
        ? Math.round((stats.correct / (stats.correct + stats.wrong)) * 100)
        : 0;
    document.getElementById('stats-ratio').textContent = ratio + '%';
    document.getElementById('stats-best-streak').textContent = stats.bestStreak;
    document.getElementById('stats-lvl1').textContent = stats.lvl1;
    document.getElementById('stats-lvl2').textContent = stats.lvl2;
    document.getElementById('stats-lvl3').textContent = stats.lvl3;
}
