# Abhishek Tiwari — Personal Portfolio Website

A modern, responsive personal portfolio website engineered for **Abhishek Tiwari**, a BTech Data Science student at Pranveer Singh Institute of Technology (PSIT). Built with React, Vite, Tailwind CSS, and Framer Motion.

---

## 🌟 Overview & Key Features

- **Design Aesthetic**: Premium dark-mode interface with charcoal tones, glowing glassmorphism cards (`backdrop-blur`), and purple/indigo accents.
- **Responsive Architecture**: Multi-column desktop layout gracefully transitioning to adaptive tablet grids and single-column mobile layouts with zero horizontal overflow.
- **Smooth Navigation**: Sticky header with blur effects, scroll-spy section tracking, and animated mobile hamburger drawer.
- **Accessible & Performance-Driven**: Fast bundle builds (sub-500ms), zero external font bloat, pure SVG iconography matching 24x24 guidelines, and semantic HTML structure.
- **Honest Academic Representation**: Adheres strictly to genuine achievements, confirmed coursework, and transparent project staging (no fabricated credentials, certificates, or fake deployed demo claims).

---

## 🛠️ Technology Stack

| Domain | Technology |
|---|---|
| **Core Framework** | [React 19](https://react.dev/) + [Vite 8](https://vite.dev/) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) |
| **Animations & Interactions** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom Brand SVGs |
| **Code Quality & Linter** | [Oxlint](https://oxc.rs/) |
| **Deployment Target** | [Vercel](https://vercel.com/) |

---

## 📂 Project Structure

```text
├── public/                 # Static assets & SVG icons
│   ├── favicon.svg         # Tab favicon
│   └── icons.svg
├── src/
│   ├── assets/             # Static logos & imagery
│   ├── components/
│   │   ├── layout/         # Navigation & Footer
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/       # Core Portfolio Sections
│   │   │   ├── Hero.jsx            # Section 2: Hero & Initials Avatar
│   │   │   ├── About.jsx           # Section 3: About Me
│   │   │   ├── Skills.jsx          # Section 4: Categorized Skills
│   │   │   ├── Projects.jsx        # Section 5: Featured Projects
│   │   │   ├── Education.jsx       # Section 6 & 8: Education & Achievements
│   │   │   ├── Certifications.jsx  # Section 7: Verified Credentials
│   │   │   └── Contact.jsx         # Section 9: Mailto & Socials
│   │   └── ui/             # Reusable UI Design System
│   │       ├── Badge.jsx
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Container.jsx
│   │       ├── SectionHeading.jsx
│   │       ├── SocialIcons.jsx
│   │       └── index.js
│   ├── data/
│   │   └── portfolioData.js # Centralized portfolio content & config
│   ├── App.jsx             # Root layout composer
│   ├── index.css           # Tailwind CSS imports & theme tokens
│   └── main.jsx            # Application entry point
├── PRD.md                  # Project Requirements Document
├── progress.txt            # Continuous execution progress log
├── progress.md             # Formatted markdown iteration report
├── package.json
└── vite.config.js          # Vite + Tailwind configuration
```

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended, tested on v24.x)
- **npm** (v9.x or higher)

### Installation

1. Clone or navigate to the repository:
   ```bash
   cd "Protfolio website"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server with Hot Module Replacement (HMR):
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. Run code quality linter:
   ```bash
   npm run lint
   ```

5. Build for production:
   ```bash
   npm run build
   ```

6. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment Guide (Vercel)

This project is fully optimized for single-click deployment on **Vercel**:

### Option 1: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: Via Vercel Web Dashboard
1. Push this repository to your GitHub account (`https://github.com/Abhishektiwari1324/...`).
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**.

---

## 📝 Customization & Placeholders Guide

All content is managed in [`src/data/portfolioData.js`](./src/data/portfolioData.js). To customize personal details:

1. **Resume File**:
   - Place your finalized PDF resume into `public/resume.pdf`.
   - In `src/data/portfolioData.js`, change `resumeUrl: "#resume"` to `resumeUrl: "/resume.pdf"`.
2. **LinkedIn URL**:
   - In `src/data/portfolioData.js`, update `socials.linkedin` to your official public LinkedIn profile URL.
3. **Repository / Live Project URLs**:
   - Update `projects[].githubUrl` or `projects[].demoUrl` when ready to showcase live deployments.
