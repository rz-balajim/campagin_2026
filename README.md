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

Plus a bonus **Mission Control** stats dashboard at `#/stats` (see below).

## Mission Control — the stats dashboard (`#/stats`)

A separate, scrollable "system dashboard" page that frames Balaji as a piece of
high-availability infrastructure. Reachable from a link on the **landing** and
**finale** screens, or directly at:

```
http://localhost:5173/#/stats
```

(It's a shareable hash URL — paste it straight into Slack; works on mobile and on
any static host.) Sections:

1. **All Systems Operational** — green status banner + count-up hero numbers.
2. **The Booking Engine** radar — confident system-diagnostics shape (Recharts).
3. **My Skills** radar — high everywhere, `Testing` deliberately low (the gag).
4. **New Tech I Learned** — game-style "skill unlock" cards with proficiency bars.
5. **By The Numbers** — a grid of stat cards.
6. **Closing CTA** — a big **Vote Balaji** button back to the campaign.

Charts draw in and numbers count up as each section scrolls into view.

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

**Everything you'd want to change lives in two config files:**

```
src/campaignData.js   # the 4-screen campaign (landing → name → Q&A → finale)
src/statsData.js      # the Mission Control dashboard at #/stats
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

### Editing the Mission Control dashboard

`src/statsData.js` is the same idea for the `#/stats` page — equally commented:

| Section | What it controls |
|---|---|
| `hero` | Status banner text + the count-up hero numbers |
| `bookingEngineRadar` | First radar's axes (0–100), title, and caption |
| `skillsRadar` | Second radar's axes — keep `Testing` low for the joke |
| `techUnlocks` | The "skill unlock" cards (name, what-you-built, proficiency) |
| `byTheNumbers` | The stat-card grid |
| `closing` / `page` | CTA line + page header text |

Just edit the numbers/labels — no component changes needed.

### ⚠ Stats marked `TODO`

Many stats in **both** config files are reasonable-sounding placeholders. Search
`campaignData.js` and `statsData.js` for `TODO` and swap in your real numbers
(uptime, webhook counts, features shipped, proficiency levels, etc.).

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
   ├─ App.jsx                # screen state machine + #/stats hash route (flow only)
   ├─ campaignData.js        # ← campaign content lives here
   ├─ statsData.js           # ← Mission Control dashboard content lives here
   ├─ styles/
   │  └─ global.css          # Stark-tech theme + animations (campaign + stats)
   └─ components/
      ├─ Landing.jsx
      ├─ NameSelect.jsx
      ├─ Quiz.jsx            # the centerpiece Q&A + reveal logic
      ├─ AchievementCard.jsx # animated stat reveal card
      ├─ Finale.jsx
      ├─ ArcReactorBackdrop.jsx
      ├─ Stats.jsx           # the Mission Control dashboard page
      └─ stats/
         ├─ useInView.js     # scroll-into-view hook (triggers animations)
         ├─ CountUp.jsx      # count-up number animation
         ├─ StatsRadar.jsx   # themed Recharts radar that draws in on scroll
         └─ SkillUnlock.jsx  # game-style skill-unlock card
```

## Tech

- React 18 + Vite (no backend, no external state libs)
- [Recharts](https://recharts.org) for the radar charts on the stats page
- Plain CSS with custom properties — Orbitron + Rajdhani fonts via Google Fonts
- Respects `prefers-reduced-motion`

> JARVIS is Claude · Code is art · Bugs are abstract art
