# Vote Balaji ⚡ — Stand-out Performer Award 2025–26

An interactive, Iron Man / Stark-tech themed single-page campaign site for the
**Stand-out Performer Award 2025–26** at Roanuz. Built for fun. Engineered like
it matters. (Tests pending. It's a whole bit — see the running gag.)

## What it does

A four-screen mini-experience:

1. **Landing** — arc-reactor hero with the campaign tagline and an "Enter" button.
2. **Name select** — a visitor picks their name; this personalizes everything after.
3. **Interactive Q&A** — the centerpiece. Questions appear one at a time. Each
   answer reveals one of Balaji's achievements as an animated stat card. Mixes
   general questions (everyone) with personalized ones (per colleague).
4. **Finale** — a recap of every achievement revealed + a big **Vote Balaji** CTA.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

Other commands:

```bash
npm run build     # production build into dist/
npm run preview   # preview the production build
```

## Where to edit content

**Everything you'd want to change lives in one file:**

```
src/campaignData.js
```

It's heavily commented and split into clear sections:

| Section | What it controls |
|---|---|
| `candidate` | Name, taglines, enter-button label, finale lines |
| `colleagues` | The list of names on the selection screen + their relation |
| `defaultVisitor` | The "Someone else" fallback identity |
| `personalization` | Greeting, joke, and status line per relation type |
| `achievements` | The reveal cards: titles, blurbs, and stat chips |
| `questions` | The Q&A — prompts, answer options, replies, which card each reveals |

You can add colleagues, rewrite jokes, add questions, or fix the stats **without
touching any React component.**

### ⚠ Stats marked `TODO`

Several stats are reasonable-sounding placeholders. Search `campaignData.js` for
`TODO` and swap in your real numbers (webhook counts, sync volumes, perf gains, etc.).

### How personalization works

Each colleague has a `relation` (`manager`, `lead`, `peer`, `junior`, or
`default`). The greeting/tone comes from `personalization[relation]`, and
personalized questions list which relations see them via their `relations`
array. Anyone who picks "Someone else" gets the `default` experience.

## Project structure

```
campaign/
├─ index.html
├─ package.json
├─ vite.config.js
├─ public/
│  └─ arc-reactor.svg        # favicon
└─ src/
   ├─ main.jsx               # React entry
   ├─ App.jsx                # screen state machine (flow only)
   ├─ campaignData.js        # ← ALL editable content lives here
   ├─ styles/
   │  └─ global.css          # Stark-tech theme + animations
   └─ components/
      ├─ Landing.jsx
      ├─ NameSelect.jsx
      ├─ Quiz.jsx            # the centerpiece Q&A + reveal logic
      ├─ AchievementCard.jsx # animated stat reveal card
      ├─ Finale.jsx
      └─ ArcReactorBackdrop.jsx
```

## Tech

- React 18 + Vite (no backend, no external state libs)
- Plain CSS with custom properties — Orbitron + Rajdhani fonts via Google Fonts
- Respects `prefers-reduced-motion`

> JARVIS is Claude · Code is art · Bugs are abstract art
