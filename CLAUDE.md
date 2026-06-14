# Claude Code Prompt — "Vote Balaji" Interactive Campaign Site

Copy everything below the line into Claude Code.

---

Build me an interactive single-page React website for a fun office award campaign. It's for the **Stand-out Performer Award 2025–26** at my company (Roanuz). The whole thing should be playful, funny, and Iron Man / Tony Stark themed (I'm campaigning as "the genius, smart, handsome developer"). My name is **Balaji**.

## Tech stack
- React (Vite) with a single-page app
- Plain CSS or Tailwind — your call, but make it look slick and modern with an "arc reactor / Stark tech" aesthetic (dark theme, glowing red/gold accents, subtle animations)
- No backend required — keep all data in a local JS/JSON config file so I can edit achievements easily
- Must run locally with `npm install && npm run dev`
- Keep everything in clearly organized components

## Core flow
1. **Landing screen** — punchy hero with my campaign tagline, an "Enter" button. Iron Man vibe.
2. **Name selection screen** — a visitor picks their name from a list of my colleagues (data in config). This personalizes the rest of the experience.
3. **Interactive Q&A screen** — this is the heart of it:
   - Present questions one at a time, conversational/quiz style.
   - After each question is answered, reveal one of my achievements with related **stats** (numbers, before/after, impact) in a nice animated card.
   - Mix of two question types:
     - **General questions** about my achievements (everyone sees these)
     - **Personalized questions** that change based on which colleague is visiting (see personalization section)
4. **Finale screen** — a recap of all achievements shown, a big "Vote Balaji" call-to-action, and a fun closing line.

## Personalization
Based on the selected colleague's name, tailor some questions and the tone. My colleagues and how to personalize:
- **Arun** (my manager/reviewer) — questions framed around code review, delivery reliability, "remember when I shipped X clean?"
- **Jayasuriya** (team lead) — questions around ownership and leading features end-to-end
- **Godwin, Anil** (peers) — peer-banter tone, friendly rivalry jokes
- **Ananthu, Sravana** (juniors I mentored via KT sessions) — "your guru is campaigning" tone, mentorship achievements
- **Default / anyone else** — generic friendly version

Each personalized greeting should address them by name and have a tailored joke.

## My achievements to feature (use these for the reveal cards + stats — invent reasonable-sounding stats where exact numbers aren't given, and add a TODO comment so I can fill real ones)
- **Bokun channel manager integration** — webhook handling, multi-booking (combo) support, payment state logic, client onboarding. Big complex integration.
- **Booking engine v2 development** — core product work.
- **Frontend deployments across multiple clients** — Laugarás, Forest Lagoon, Reykjabod, Earth Lagoon, Myvatn Nature. (Joke: "deployed across more lagoons than a geography textbook.")
- **BC365 order sync** — backend integration.
- **KT / onboarding sessions** for junior developers (Ananthu, Sravana) — mentorship.
- **Running gag**: I "intentionally ignore testing" and "trust the code I write." Lean into this as a humorous recurring theme. Campaign promise = "I'll finally start writing test cases."

## Tone & content guidance
- Funny, confident, self-aware. Iron Man one-liners welcome.
- Recurring jokes: "code is art," "my JARVIS is Claude," "bugs are abstract art," the testing gag.
- Keep all editable content (questions, achievements, stats, colleague list, personalization rules) in a single `campaignData.js` config file with clear comments so I can tweak it without touching component logic.

## Deliverables
- Full working Vite + React project
- A `campaignData.js` I can easily edit
- A short README explaining how to run it and where to edit content
- Smooth transitions between screens and at least light animation on the achievement reveal cards

Make it feel like a polished, fun mini-experience — not a boring form. Prioritize the interactive Q&A reveal mechanic since that's the centerpiece.
