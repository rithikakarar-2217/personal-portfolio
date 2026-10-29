# Rithika Karar — Personal Portfolio & IDT Digital Thinking Space
**Concept:** *"Thought → Experiment → Creation"*  
**Purpose:** College IDT (Innovation and Design Thinking) Activity  
**Department:** Artificial Intelligence & Machine Learning (First Year, Class of 2030)  
**Institution:** BGS College of Engineering and Technology (BGSCET)  

---

## 💡 About The Website Concept

This is not a generic resume template. It is an interactive digital thinking space designed around an engineering and design thinking methodology:

1. **Signature Feature A — Interactive Thinking Map (`index.html`)**:
   An interactive pipeline demonstrating the 5 stages of an authentic engineering journey:
   - **01 / Questions & Ideas** (Curiosity & problem framing)
   - **02 / Exploring Solutions** (Flowcharts, paper logic & algorithms)
   - **03 / Learning Technologies** (C, C++, Python, HTML/CSS/JS fundamentals)
   - **04 / Experimenting & Building** (Writing prototypes and interactive projects)
   - **05 / Testing & Refining** (Debugging edge cases and responsive polish)

2. **Signature Feature B — Idea-to-Innovation Lab (`projects.html`)**:
   Projects are framed as scientific experiments rather than simple picture cards. It details:
   - The problem / idea
   - The engineering approach
   - Technologies used
   - Actual implemented functionality
   - Real learning takeaways
   - **Includes a live, playable XOXO Tic-Tac-Toe simulator** directly embedded on the page!

3. **Authentic Storytelling & Clear Skill Maturity (`about.html` & `education.html`)**:
   - Represents Rithika authentically as a curious, creative first-year student.
   - Highlights creative balance: dancing, singing, drawing/sketching, and cooking.
   - Categorizes technical skills by maturity stage (*Practised in Projects*, *Core Foundations*, *Currently Learning*) without fake percentage bars.

4. **Transparent Communication Directory (`contact.html`)**:
   - Clean placeholders for email, GitHub, and LinkedIn.
   - One-click copy email button.
   - Honest client-side message form with `mailto:` client fallback.

---

## 📁 File Structure

```text
rithikas personal portfolio/
├── index.html         # Page 1: Home & Interactive Thinking Map
├── about.html         # Page 2: About Me, AI/ML Curiosity & Creative Side
├── education.html     # Page 3: BGSCET Academic Profile & Skill Explorer
├── projects.html      # Page 4: Idea-to-Innovation Lab & Playable Tic-Tac-Toe
├── contact.html       # Page 5: Contact Directory & Message Form
├── style.css          # Shared modern stylesheet (Dark Navy & Electric Lime)
├── script.js          # Shared vanilla JavaScript (Map, Tic-Tac-Toe, Filters)
└── README.md          # Beginner-friendly documentation and deployment guide
```

---

## 🚀 How to Preview and Test the Website Locally

You don't need any complex installation or backend server. You can run it immediately on your computer:

### Method 1: Instant Browser Preview (Easiest)
1. Open the folder `rithikas personal portfolio` in File Explorer.
2. Double-click `index.html`.
3. Your default web browser (Chrome, Edge, Firefox, Safari) will open and run the entire website!
4. Click on the navigation links (`About Me`, `Education & Skills`, `Innovation Lab`, `Contact`) to explore every page.

### Method 2: Using VS Code Live Server (Recommended for Editing)
1. Open Visual Studio Code.
2. Select **File → Open Folder...** and choose this portfolio folder.
3. If you have the **Live Server** extension installed, right-click `index.html` and click **"Open with Live Server"**.
4. The site will open at `http://127.0.0.1:5500/index.html` and will automatically refresh when you save code changes.

### Method 3: Using Python Local Server
If you have Python installed:
1. Open PowerShell or Command Prompt in this folder.
2. Run:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and navigate to:
   ```text
   http://localhost:8000
   ```

---

## ✏️ How to Personalize the Placeholders

Search for the following placeholders in your files and replace them with your actual details:

### 1. In `projects.html`
- Find: `https://github.com/your-username/xoxo-tic-tac-toe`
- Replace with: The actual link to your Tic-Tac-Toe GitHub repository.

### 2. In `contact.html`
- Find: `rithika.karar.edu@example.com`
- Replace with: Your real personal or college email address (also update in `script.js` line 208 if you change the fallback address).
- Find: `github.com/your-username` and `https://github.com/your-username`
- Replace with: Your GitHub username and URL.
- Find: `linkedin.com/in/your-username` and `https://linkedin.com/in/your-username`
- Replace with: Your LinkedIn profile username and URL.

---

## 🌐 How to Publish for Free Using GitHub Pages

Publishing on GitHub Pages makes your portfolio live on the internet so your professors, classmates, and recruiters can visit it from anywhere.

### Step 1: Create a GitHub Account and Repository
1. Go to [github.com](https://github.com/) and sign in (or sign up).
2. Click the **"+"** icon in the top-right corner and select **New repository**.
3. Name your repository (e.g. `rithika-portfolio` or `idt-portfolio`).
4. Set the visibility to **Public**.
5. Leave "Add a README file" unchecked (we already have a complete README).
6. Click **Create repository**.

### Step 2: Upload Your Files
#### Option A: Drag and Drop via Web Browser
1. On your new empty repository page, click the link that says **"uploading an existing file"**.
2. Drag and drop all the files from this folder (`index.html`, `about.html`, `education.html`, `projects.html`, `contact.html`, `style.css`, `script.js`, and `README.md`) into the box.
3. At the bottom, type a commit message like `Initial IDT Portfolio release`.
4. Click **Commit changes**.

#### Option B: Using Git in Terminal
If you have Git installed on your computer:
```bash
git init
git add .
git commit -m "Initial release of Rithika's IDT Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages (Free Hosting)
1. Inside your repository on GitHub, click on **Settings** (tab at the top with a gear icon).
2. On the left sidebar menu, click on **Pages** (under the "Code and automation" section).
3. Under **Build and deployment**:
   - Source: Select **"Deploy from a branch"**.
   - Branch: Select **`main`** branch and the **`/ (root)`** folder.
   - Click **Save**.
4. Wait about 60 to 90 seconds. Refresh the page.
5. GitHub will display a message at the top:
   > *"Your site is live at `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME/`"*
6. Click the link to view your live portfolio online!

---

## 🛠️ How to Make Future Edits Easily

Whenever you learn a new language, build another experiment, or complete an academic semester:
1. Open the relevant file in any code editor (VS Code, Notepad++, etc.).
2. **Adding a new project in `projects.html`**:
   - Copy one of the `future-card` blocks.
   - Change the status badge to `Status: Active`.
   - Add your problem statement, approach, and repository link.
3. **Updating skills in `education.html`**:
   - When you advance in C++ or Python, change `data-category="learning"` to `data-category="practised"` and update the badge class.
4. Save the file and upload the updated file to GitHub (or run `git commit -am "Update skills"` and `git push`). GitHub Pages will automatically update in seconds!

---

## 🎨 Design System Summary

- **Primary Canvas:** Deep Space Charcoal (`#070a0f` / `#0b0f17`)
- **Card Surfaces:** Dark Navy Technical Surface (`#111824` / `#162030`)
- **Primary Accent:** Electric Lime (`#bcf834` — symbolizing freshness, curiosity, and innovation)
- **Secondary Accents:** Sky Cyan (`#38bdf8`) & Electric Violet (`#a78bfa`)
- **Typography:** `Space Grotesk` (Headings) + `Plus Jakarta Sans` (Body) + `JetBrains Mono` (Code & Technical tags)
- **Accessibility:** High contrast ratios, accessible focus rings, ARIA roles, and `prefers-reduced-motion` compliance.

---
*Created for the First-Year Innovation & Design Thinking (IDT) Activity at BGS College of Engineering and Technology.*
