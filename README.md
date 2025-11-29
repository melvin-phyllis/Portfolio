## Portfolio Next.js - Melvin.dev

Je construis un mini portfolio en Next.js 16 + Tailwind CSS 4 pour presenter mon profil et mes competences.

### Ce que je montre
- Navbar responsive avec burger qui se deroule en douceur.
- Hero avec mon nom, mon role (Full-Stack JS), un visuel et des liens vers LinkedIn et GitHub.
- Grille de competences avec mes stacks (Next, React, Tailwind, Firebase, MongoDB, Vercel, etc.).
- Section Experience avec mes parcours (bootcamp GoMyCode, formation TUVCI) presentes en cartes chronologiques.

### Stack
- Next.js 16 (App Router) et React 19.
- Tailwind CSS 4.
- React Icons pour les pictos.

### Structure rapide
- app/page.tsx : composition des sections (Navbar, Hero, Skills, Experience).
- app/layout.tsx : layout racine + fonts Geist.
- components/Navbar.tsx : navigation responsive.
- components/HeroSection.tsx : presentation + liens reseaux.
- components/SkillsSection.tsx : grille des competences.
- components/MyExpericenceSection.tsx : liste de mes experiences avec logo, titre, dates et description.

### Lancer le projet
```bash
npm install
npm run dev
# puis ouvrir http://localhost:3000
```

Build et prod :
```bash
npm run build
npm start
```

### Notes
- Les styles globaux sont en app/globals.css (Tailwind 4).
- Les assets d'illustration sont servis depuis /public.
