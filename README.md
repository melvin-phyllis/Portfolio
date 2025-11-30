## Portfolio Next.js - Melvin.dev

Je construis un portfolio en Next.js 16 + Tailwind CSS 4 pour presenter mon profil de dev Full-Stack JS.

### Apercu
- Navbar responsive (burger) qui pointe vers les ancres `#hero`, `#skills`, `#experience`, `#about`, `#projects`.
- Hero avec mon nom, mon role et des liens LinkedIn/GitHub.
- Grille de competences (Next, React, Tailwind, Firebase, MongoDB, etc.).
- Timeline d'experiences (bootcamp GoMyCode, formation TUVCI).
- Section projets avec captures et liens live/GitHub.
- Section A propos + footer avec contacts et reseaux.
- Metadata SEO/partage (Open Graph, Twitter) definie dans `app/layout.tsx`.

### Stack
- Next.js 16 (App Router) et React 19.
- Tailwind CSS 4.
- TypeScript, React Icons.

### Structure rapide
- app/page.tsx : composition des sections (Hero, Skills, Experience, About, Projects, Footer).
- app/layout.tsx : metadata, fonts Geist et balise html `lang="fr"`.
- components/Navbar.tsx : navigation + ancres.
- components/HeroSection.tsx : hero + liens sociaux.
- components/SkillsSection.tsx : grille des competences.
- components/MyExpericenceSection.tsx : experiences chronologiques.
- components/AboutSection.tsx : a propos.
- components/MyProjectsSection.tsx : galerie de projets.
- components/Footer.tsx : contacts, socials, rappel des sections.

### Lancer le projet
```bash
npm install
npm run dev
# ouvrir http://localhost:3000
```

Build et prod :
```bash
npm run build
npm start
```

Lint :
```bash
npm run lint
```

### Assets
- /public/download-hero-nav.png : image Open Graph/Twitter (1200x630 recommande).
- /public/favicon.ico : favicon.
- Captures et logos dans /public/projects/ et autres visuels dans /public/.
