/**
 * RITHIKA KARAR — PERSONAL PORTFOLIO & IDT DIGITAL THINKING SPACE
 * JavaScript Engine for Thinking Map, Interactive Lab Simulator & Site Utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initThinkingMap();
  initTicTacToeSimulator();
  initSkillFilters();
  initContactForm();
});

/* ==========================================================================
   1. NAVIGATION & ACTIVE PAGE DETECTOR
   ========================================================================== */
function initNavigation() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-link');

  // Mobile menu toggle
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('open');
    });

    // Close on link click
    links.forEach(link => {
      link.addEventListener('click', () => {
        toggleBtn.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!toggleBtn.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('open')) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
      }
    });
  }

  // Active page indicator
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ==========================================================================
   2. SIGNATURE FEATURE A: INTERACTIVE THINKING MAP
   ========================================================================== */
const thinkingMapData = [
  {
    step: "01",
    title: "Questions & Ideas",
    badge: "PHASE 01 // CURIOSITY",
    description: "Every engineering journey begins with authentic curiosity. Rather than looking for complex pre-built frameworks, I ask foundational questions: How does a browser interpret code? How does a computer keep track of turns in a game? What problems can simple logic solve?",
    takeaways: [
      "Identifying everyday logic problems that can be solved with software.",
      "Framing ideas through the Innovation & Design Thinking (IDT) lens: User need first.",
      "Keeping an engineering journal for raw thoughts, diagrams, and questions."
    ],
    reflection: "“I used to think programming was about memorizing code. Now I see it's about breaking questions down until they become simple enough to solve.”"
  },
  {
    step: "02",
    title: "Exploring Solutions",
    badge: "PHASE 02 // LOGIC DESIGN",
    description: "Before typing a single line of code, I map out the flow using paper, pen, and flowcharts. In college coursework and personal experiments, planning state transitions and user interactions saves hours of debugging.",
    takeaways: [
      "Drafting decision trees and conditional flowcharts.",
      "Visualizing user inputs, system states, and edge conditions.",
      "Evaluating whether an approach requires an array, loops, or event listeners."
    ],
    reflection: "“When I designed my Tic-Tac-Toe game, sketching the 3x3 grid as indexed positions [0-8] on paper made writing the JavaScript win logic straightforward.”"
  },
  {
    step: "03",
    title: "Learning Technologies",
    badge: "PHASE 03 // FOUNDATIONS",
    description: "In my first year of AI & ML at BGSCET, I deliberately focus on rock-solid fundamentals. I study C programming to understand memory and flow, C++ for object-oriented structure, Python for data manipulation, and HTML/CSS/JS for interactive web interfaces.",
    takeaways: [
      "Mastering C syntax, loops, functions, and memory basics.",
      "Understanding the Document Object Model (DOM) and event-driven architecture.",
      "Writing clean, readable code with descriptive comments rather than cryptic shortcuts."
    ],
    reflection: "“There are no shortcuts to becoming an AI engineer. If I don't understand how data is stored and manipulated at the fundamental level, I cannot build robust AI systems later.”"
  },
  {
    step: "04",
    title: "Experimenting & Building",
    badge: "PHASE 04 // IMPLEMENTATION",
    description: "This is where thoughts transform into creations. I build focused, working prototypes in my Idea-to-Innovation Lab. Each project is an experiment to test what I've learned, from turn-based game logic to responsive CSS layouts.",
    takeaways: [
      "Translating wireframe concepts into responsive HTML & CSS.",
      "Connecting DOM event listeners to dynamic state management functions.",
      "Documenting challenges and solutions in real-time."
    ],
    reflection: "“My XOXO Tic-Tac-Toe game was my first complete experiment. Seeing the grid react to clicks and declare winners accurately was an exciting breakthrough.”"
  },
  {
    step: "05",
    title: "Improving Through Testing",
    badge: "PHASE 05 // ITERATION",
    description: "Creation doesn't end at the first working run. Testing uncovers edge cases — clicking an already-filled square, rapid multi-clicks, or responsive layout shifts on mobile phones. Feedback drives meaningful refinement.",
    takeaways: [
      "Handling edge conditions like draw games and tile re-clicks.",
      "Ensuring clean responsiveness across phones, tablets, and desktops.",
      "Refactoring code for clarity, accessibility, and smooth performance."
    ],
    reflection: "“Testing taught me humility. A project isn't truly finished when it runs on my screen; it's finished when anyone can use it without confusion or breakage.”"
  }
];

function initThinkingMap() {
  const nodes = document.querySelectorAll('.map-node');
  const panelStep = document.getElementById('map-step-badge');
  const panelTitle = document.getElementById('map-title');
  const panelDesc = document.getElementById('map-desc');
  const panelTakeaways = document.getElementById('map-takeaways');
  const panelReflection = document.getElementById('map-reflection');

  if (!nodes.length || !panelTitle) return;

  function activateNode(index) {
    nodes.forEach((n, idx) => {
      n.classList.toggle('active', idx === index);
      n.setAttribute('aria-selected', idx === index ? 'true' : 'false');
    });

    const data = thinkingMapData[index];
    if (!data) return;

    if (panelStep) panelStep.textContent = data.badge;
    if (panelTitle) panelTitle.textContent = `${data.step} / ${data.title}`;
    if (panelDesc) panelDesc.textContent = data.description;
    if (panelReflection) panelReflection.textContent = data.reflection;

    if (panelTakeaways) {
      panelTakeaways.innerHTML = data.takeaways
        .map(t => `<div class="takeaway-item"><span class="takeaway-bullet">›</span><span>${t}</span></div>`)
        .join('');
    }
  }

  nodes.forEach((node, idx) => {
    node.addEventListener('click', () => activateNode(idx));
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateNode(idx);
      } else if (e.key === 'ArrowRight') {
        const nextIdx = (idx + 1) % nodes.length;
        nodes[nextIdx].focus();
        activateNode(nextIdx);
      } else if (e.key === 'ArrowLeft') {
        const prevIdx = (idx - 1 + nodes.length) % nodes.length;
        nodes[prevIdx].focus();
        activateNode(prevIdx);
      }
    });
  });

  // Activate default first node
  activateNode(0);
}

/* ==========================================================================
   3. SIGNATURE FEATURE B: INTERACTIVE TIC-TAC-TOE LAB SIMULATOR
   ========================================================================== */
function initTicTacToeSimulator() {
  const grid = document.getElementById('ttt-grid');
  const statusDisplay = document.getElementById('ttt-status');
  const resetBtn = document.getElementById('ttt-reset-btn');

  if (!grid || !statusDisplay) return;

  let boardState = ['', '', '', '', '', '', '', '', ''];
  let currentPlayer = 'X';
  let isGameActive = true;

  const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  function renderBoard() {
    grid.innerHTML = '';
    boardState.forEach((val, idx) => {
      const cell = document.createElement('button');
      cell.classList.add('ttt-cell');
      cell.setAttribute('type', 'button');
      cell.setAttribute('aria-label', `Tile ${idx + 1}, ${val ? 'marked ' + val : 'empty'}`);
      cell.dataset.index = idx;
      cell.textContent = val;

      if (val === 'X') cell.classList.add('x-mark');
      if (val === 'O') cell.classList.add('o-mark');

      cell.addEventListener('click', () => handleCellClick(idx));
      grid.appendChild(cell);
    });
  }

  function handleCellClick(index) {
    if (boardState[index] !== '' || !isGameActive) return;

    boardState[index] = currentPlayer;
    checkResult();
  }

  function checkResult() {
    let roundWon = false;
    let winningCombo = [];

    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
        roundWon = true;
        winningCombo = [a, b, c];
        break;
      }
    }

    if (roundWon) {
      statusDisplay.textContent = `Player ${currentPlayer} Wins! 🎉`;
      statusDisplay.style.color = 'var(--accent-lime)';
      isGameActive = false;
      renderBoard();

      // Highlight winner cells
      const cells = grid.querySelectorAll('.ttt-cell');
      winningCombo.forEach(idx => cells[idx]?.classList.add('winner'));
      return;
    }

    if (!boardState.includes('')) {
      statusDisplay.textContent = "It's a Draw! (Cat's Game) 🤝";
      statusDisplay.style.color = 'var(--accent-cyan)';
      isGameActive = false;
      renderBoard();
      return;
    }

    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.textContent = `Player ${currentPlayer}'s Turn`;
    statusDisplay.style.color = currentPlayer === 'X' ? 'var(--accent-lime)' : 'var(--accent-cyan)';
    renderBoard();
  }

  function resetGame() {
    boardState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    isGameActive = true;
    statusDisplay.textContent = "Player X's Turn";
    statusDisplay.style.color = 'var(--accent-lime)';
    renderBoard();
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', resetGame);
  }

  // Initial render
  resetGame();
}

/* ==========================================================================
   4. SKILLS FILTER SYSTEM (EDUCATION & SKILLS PAGE)
   ========================================================================== */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  if (!filterBtns.length || !skillCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.dataset.filter;

      skillCards.forEach(card => {
        if (filterValue === 'all' || card.dataset.category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

/* ==========================================================================
   5. CONTACT FORM & INTERACTIVE TOAST
   ========================================================================== */
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--accent-lime);">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

function initContactForm() {
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const contactForm = document.getElementById('portfolio-contact-form');

  // Copy email button
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = copyEmailBtn.dataset.email || 'rithika.karar.edu@example.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Email copied: ${email}`);
      }).catch(() => {
        showToast(`Email address: ${email}`);
      });
    });
  }

  // Demo contact form
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const msgInput = document.getElementById('contact-message');

      const name = nameInput ? nameInput.value.trim() : 'Visitor';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = msgInput ? msgInput.value.trim() : '';

      if (!name || !email || !message) {
        showToast('Please fill out all fields.');
        return;
      }

      // Authentic feedback explaining client-side demo state
      showToast(`Thank you, ${name}! Notice: This is a front-end preview. Use the direct email link to connect.`);

      // Create pre-filled mailto fallback
      const subject = encodeURIComponent(`Portfolio Message from ${name}`);
      const body = encodeURIComponent(`Hi Rithika,\n\n${message}\n\nFrom: ${name} (${email})`);
      const mailtoUrl = `mailto:rithika.karar.edu@example.com?subject=${subject}&body=${body}`;

      // Offer opening default email client
      setTimeout(() => {
        if (confirm(`Would you like to open your default email application to send this message to Rithika?`)) {
          window.location.href = mailtoUrl;
        }
      }, 600);

      contactForm.reset();
    });
  }
}
