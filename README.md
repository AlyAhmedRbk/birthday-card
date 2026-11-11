# A Beautiful Birthday Experience

A cinematic, interactive birthday & graduation surprise built with React, Vite, Tailwind CSS, and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Personalize

Edit all copy in:

```
src/content/birthdayMessages.js
```

Update `meta.recipientName`, `meta.senderName`, letter pages, and finale text.

## Audio

Place your background track at:

```
public/audio/background.mp3
```

Music never autoplays — use the floating music button.

## Experience flow

1. Cinematic panda intro (glowing heart)
2. Birthday celebration (confetti, balloons, hearts)
3. Interactive 3D birthday book (7 letter pages + graduation chapter)
4. Final surprise with panda return + replay

## Tech notes

- Node 18 compatible (Tailwind CSS v3)
- Respects `prefers-reduced-motion`
- Mobile swipe supported on the book
