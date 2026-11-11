/**
 * Centralized editable content for the birthday experience.
 * Personalize every string here — components read from this file only.
 */

export const meta = {
  recipientName: "Panda",
  senderName: "Ali Ahmed",
  siteTitle: "A Little Surprise For Panda",
}

export const intro = {
  tease: "A Little Surprise For Panda...",
  headline: "HAPPY BIRTHDAY, PANDA!",
  subheadline: "To Someone Who Makes Life More Beautiful ❤️",
  cta: "Open Your Birthday Surprise",
}

export const book = {
  coverTitle: "To Panda ❤️",
  coverSubtitle: "A Little Book of Love, Happiness & Beautiful Memories",
  openCta: "Open Your Letter",
  finalCta: "One Last Surprise ❤️",
}

export const pages = [
  {
    id: "special-day",
    heading: "Today Is All About You ❤️",
    body: [
      "Today belongs entirely to you — your laugh, your light, and every quiet way you make the world feel warmer.",
      "I’m so happy to celebrate another year of your life. Not just the day itself, but everything you are becoming.",
      "May this birthday feel as special as you make ordinary days feel for the people who love you.",
    ],
  },
  {
    id: "how-special",
    heading: "Someone As Special As You",
    body: [
      "Your kindness never feels performative. It shows up in small, steady ways that people remember long after the moment has passed.",
      "I admire your dedication, your strength, and the way you keep going even when things ask a lot of you.",
      "And your smile — it softens hard days. It reminds me that goodness can be both gentle and powerful.",
    ],
  },
  {
    id: "my-happiness",
    heading: "Your Happiness Means So Much",
    body: [
      "Seeing you smile, grow, and chase what matters to you brings me a quiet kind of joy I don’t take for granted.",
      "Watching you become more fully yourself has been one of the most meaningful parts of knowing you.",
      "Your happiness isn’t a side note to me — it’s something I genuinely root for, celebrate, and hold close.",
    ],
  },
  {
    id: "achievements",
    heading: "Look How Far You've Come",
    body: [
      "Every late night, every careful decision, every moment you chose to keep going — it all adds up.",
      "Your hard work and the sacrifices along the way are not invisible. They’re woven into who you are now.",
      "Be proud of the path behind you. You’ve earned the right to pause, breathe, and recognize how far you’ve come.",
    ],
  },
  {
    id: "graduation",
    heading: "A New Chapter Begins 🎓",
    theme: "graduation",
    body: [
      "Congratulations on your graduation. This moment is proof of your patience, your determination, and the quiet courage it took to keep showing up.",
      "You faced challenges, stayed dedicated, and carried yourself through seasons that asked more than people always see.",
      "A bright future is opening in front of you — not because it was handed to you, but because you built the foundation for it.",
    ],
  },
  {
    id: "wishes",
    heading: "May Life Bring You Everything Beautiful",
    body: [
      "I wish you happiness that feels real, success that feels earned, and peace that stays with you even on busy days.",
      "May you grow in confidence, find new opportunities that fit who you are, and protect your health and joy along the way.",
      "Most of all, I wish you beautiful experiences — and the courage to chase every dream that calls your name.",
    ],
  },
  {
    id: "final-message",
    heading: "A Final Personal Message",
    body: [
      "Thank you for being who you are. Knowing you has added meaning, warmth, and a lot of quiet happiness to my life.",
      "I’m grateful for your presence, proud of your journey, and genuinely happy to celebrate you today.",
      "Happy Birthday Once Again ❤️",
    ],
    closing: `With Love,\n${meta.senderName}`,
  },
]

export const finale = {
  lineOne: "Keep Smiling, Keep Shining, and Never Stop Chasing Your Dreams.",
  lineTwo: "Happy Birthday, Panda & Congratulations on Your Graduation! ❤️",
  replayCta: "Experience It Again",
}

export const audio = {
  /** Place your track at /public/audio/background.mp3 and update this path if needed. */
  src: "/audio/background.mp3",
  labelPlay: "Play music",
  labelPause: "Pause music",
}

export const stages = {
  intro: "intro",
  celebration: "celebration",
  book: "book",
  finale: "finale",
}
