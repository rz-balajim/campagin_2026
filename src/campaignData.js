/**
 * ============================================================================
 *  campaignData.js  —  THE ONLY FILE YOU NEED TO EDIT
 * ============================================================================
 *
 *  Everything that drives the "Vote Balaji" experience lives here:
 *  candidate info, teams, colleagues, achievements, quiz questions, and the
 *  per-persona personalization rules.
 *
 *  You should never have to touch the React components to change content.
 *  Just edit the objects/arrays below. Each section is commented.
 *
 *  TEAMS / COLLEAGUES below were imported from the Roanuz
 *  "Team and Role" sheet. Real team + designation per person.
 *
 *  TODO markers flag invented stats — swap in real numbers when you have them.
 * ============================================================================
 */

/* ---------------------------------------------------------------------------
 * 1. CANDIDATE  — who's campaigning, taglines, closing lines.
 * ------------------------------------------------------------------------- */
export const candidate = {
  name: 'Balaji',
  company: 'Roanuz',
  award: 'Stand-out Performer Award 2025–26',
  // Shown big on the landing hero:
  tagline: 'The genius, smart, handsome developer.',
  subTagline: 'Sometimes you gotta run before you can walk. — and I ship before I test.',
  enterLabel: 'Initialize Arc Reactor',
  // Shown on the finale:
  voteCta: 'Vote Balaji',
  finaleLine: "I am Iron Dev. And I'd like to keep being your Stand-out Performer.",
}

/* ---------------------------------------------------------------------------
 * 2. TEAMS  — the FIRST thing a visitor picks. Picking a team then shows
 *             only that team's members on the next screen.
 *
 *   id    : unique key (matches the `team` field on each colleague below)
 *   name  : display name on the team card
 *   icon  : decorative emoji
 *   blurb : small line under the team name
 *
 *   These map 1:1 to the real Roanuz teams from the sheet.
 * ------------------------------------------------------------------------- */
export const teams = [
  { id: 'command', name: 'Command Deck', icon: '🛡️', blurb: 'Founders & Leadership' },
  { id: '8h', name: 'Team 8H', icon: '⚙️', blurb: 'My home crew — booking-engine HQ' },
  { id: 'tero', name: 'Team Tero', icon: '🛰️', blurb: 'Fellow builders in the trenches' },
  { id: 'sports', name: 'Team Sports', icon: '🏏', blurb: 'Product, ops & sports tech' },
  { id: 'devloop', name: 'Team Devloop', icon: '🎓', blurb: 'Where I trained the padawans' },
  { id: 'hr_admin', name: 'HR & Ops', icon: '🗂️', blurb: 'Keeps Stark Tower running' },
  // Add more teams here. Each team's members are the colleagues whose
  // `team` field (below) matches this team's `id`.
]

/* ---------------------------------------------------------------------------
 * 3. COLLEAGUES  — team members shown AFTER a team is picked.
 *
 *   id        : internal key (keep unique, no spaces)
 *   name      : display name on the button
 *   role      : real job designation — shown as a small label under the name.
 *   team      : which team this person belongs to (must match a teams[].id)
 *   persona   : the PERSONALIZATION key (section 4). Decoupled from `role` so
 *               that everyone with the same title ("Software Engineer") can
 *               still get different tones. Must match a key in `personalization`
 *               or it falls back to 'default'. Also drives which personalized
 *               questions they see (section 6, `personas`).
 *   greeting  : this person's OWN greeting line (`{name}` is replaced with
 *               their name). Shown first and OVERRIDES the per-persona greeting.
 *               Many of these are Balaji's real notes from the sheet. ✍️
 * ------------------------------------------------------------------------- */
export const colleagues = [
  /* ---- Command Deck (leadership) ---- */
  {
    id: 'anto', name: 'Anto Binish K', role: 'CEO & Founder', team: 'command', persona: 'leader',
    greeting: 'Hello Boss, Its been while since we had a connect, I hope I been perfoming above your expectations.',
  },

  /* ---- Team 8H ---- */
  {
    id: 'arun', name: 'Arun Baskaran', role: 'Tech Lead', team: '8h', persona: 'reviewer',
    greeting: 'Hi Captain, Thanks for trusting my features and deployments in Booking-engine, I will make sure once agiain I will keep up my same perfomence.',
  },
  {
    id: 'jayasuriya', name: 'Jayasuriya Venkatesan', role: 'Project Manager', team: '8h', persona: 'lead',
    greeting: "Hi Jai's, Thanks for getting us the time we required for the features, Hope I never disatisfied you with the deadlines.",
  },
  {
    id: 'devakrishnan', name: 'Devakrishnan K V', role: 'Software Engineer', team: '8h', persona: 'peer',
    greeting: 'HI Deva, The Last Man of DSM, I relly admire your technical knowleadge on different stack.',
  },
  {
    id: 'godwin', name: 'Godwin', role: 'Software Engineer', team: '8h', persona: 'peer',
    greeting: 'Well, well, well... if it isn’t {name}. May the best dev win, friend. 😏',
  },
  {
    id: 'anil', name: 'Anil Tripathi', role: 'Software Engineer', team: '8h', persona: 'peer',
    greeting: 'Hii Broo, Glad to have someone like a brother on my team, and alchoilic guru.',
  },
  {
    id: 'nirmal', name: 'Nirmal', role: 'Software Engineer', team: '8h', persona: 'peer',
    greeting: 'Hey {name}, deploy buddy. Pull up a chair — the demo is about to begin.',
  },
  {
    id: 'gayathri', name: 'Gayathri Nakkeeran', role: 'Software Engineer', team: '8h', persona: 'peer',
    greeting: 'Welcome {name}! The arc reactor glows a little brighter when 8H shows up.',
  },
  {
    id: 'regina', name: 'Regina Sherlin', role: 'Software Engineer', team: '8h', persona: 'peer',
    greeting: 'Hi {name}, 8H represent. Grab a coffee, this won’t take long. 🚀',
  },
  {
    id: 'nandhini', name: 'Nandhini Devi A', role: 'Software Engineer', team: '8h', persona: 'peer',
    greeting: 'Hi Devi, Hope enjoying your mairage life, you guys are being my cute couples on my instagram feeds.',
  },
  {
    id: 'arjun', name: 'KM Arjun Parameshwar', role: 'Software Engineer', team: '8h', persona: 'peer',
    greeting: 'Hi Brooo, mairage kapram ale romba bright ahh marita, un thambiya nenachi oru vote potudu papom.',
  },
  {
    id: 'ragul', name: 'Ragul P', role: 'Software Engineer', team: '8h', persona: 'peer',
    greeting: 'hey Ragul, Congrats for the new bike, aduthu pinnadi ukkara ala pathacha??',
  },
  {
    id: 'janarthanan', name: 'Janarthanan Shanmugam', role: 'Software Engineer', team: '8h', persona: 'peer',
    greeting: 'Hey {name}! 8H in the house. Let me walk you through the highlight reel.',
  },
  {
    id: 'channa-kishore', name: 'Channa Kishore Reddy', role: 'IT Support Specialist', team: '8h', persona: 'ops',
    greeting: 'Hi {name}! You keep the machines alive, I keep the bookings flowing. Teamwork. 🔧',
  },
  {
    id: 'gomathisankar', name: 'Gomathisankar K', role: 'IT Ops Specialist', team: '8h', persona: 'ops',
    greeting: 'Hey {name}! Uptime hero meets feature hero. Let’s talk numbers.',
  },

  /* ---- Team Tero ---- */
  {
    id: 'naveen', name: 'Potnuru Naveen', role: 'Tech Lead', team: 'tero', persona: 'lead',
    greeting: 'Welcome, {name} — one tech lead to another, you’ll appreciate clean end-to-end delivery.',
  },
  {
    id: 'thamizharasan', name: 'Thamizharasan C D K', role: 'Software Engineer', team: 'tero', persona: 'peer',
    greeting: 'Hi Thamizh. recently I started to like you carom games, they are really funny.',
  },
  {
    id: 'jervin', name: 'Jervin Matthew A', role: 'Software Engineer', team: 'tero', persona: 'peer',
    greeting: 'Hey broo, namba tha inga mass katurom.',
  },
  {
    id: 'karthik', name: 'Karthik V', role: 'Software Engineer', team: 'tero', persona: 'peer',
    greeting: 'Hi broo, un carom skills ku na adimai.',
  },
  {
    id: 'sivadharini', name: 'Sivadharini Saravanan', role: 'Software Engineer', team: 'tero', persona: 'peer',
    greeting: 'Heyyy Dharini, Your laughter is the cutest and loudlest i every heard.',
  },
  {
    id: 'abhiram', name: 'Abhiram N Ajith', role: 'Software Engineer', team: 'tero', persona: 'peer',
    greeting: 'Hey {name}! Team Tero in the building. Buckle up for the stats.',
  },
  {
    id: 'tamil-selvan', name: 'Tamil Selvan', role: 'Software Engineer', team: 'tero', persona: 'peer',
    greeting: 'Hi {name}! Tero crew. Let me show you what a campaign looks like. ⚡',
  },

  /* ---- Team Sports ---- */
  {
    id: 'ram-ganesh', name: 'K Ram Ganesh', role: 'Product Manager', team: 'sports', persona: 'pm',
    greeting: "Hii Ram, I'm realy sorry for missing out you in the RPL auction. I like the way you support us on booking-engine, I belive you will support me for this best peformer award.",
  },
  {
    id: 'jayakumar', name: 'Jayakumar M', role: 'Business Operations Lead', team: 'sports', persona: 'ops',
    greeting: 'Hey Bro, Recently we got know well about eachother, Thanks for the fun time we had together and I hope the success for Blue dental.',
  },
  {
    id: 'sruthy', name: 'Sruthy Nandagopal', role: 'Software Engineer', team: 'sports', persona: 'peer',
    greeting: 'Hi {name}! Sports squad. Grab a seat — the reveal cards are warming up.',
  },
  {
    id: 'subashree', name: 'Subashree Subramanian', role: 'Customer Success Specialist', team: 'sports', persona: 'ops',
    greeting: 'Hi {name}! You keep clients happy, I keep their booking-engine humming. Perfect pair.',
  },
  {
    id: 'supraja', name: 'Supraja Raghuraman', role: 'Sales Development Specialist', team: 'sports', persona: 'ops',
    greeting: 'Hey {name}! You sell the dream, I ship it. Let’s close this vote together. 🤝',
  },
  {
    id: 'nivetha', name: 'Nivetha', role: 'Software Engineer', team: 'sports', persona: 'peer',
    greeting: 'Hi {name}! Sports team represent. Ready for the highlight reel?',
  },
  {
    id: 'aadhithya', name: 'Aadhithya S', role: 'Software Engineer', team: 'sports', persona: 'peer',
    greeting: 'Hey {name}! Fellow engineer — you’ll respect the architecture, I promise.',
  },
  {
    id: 'ashiey', name: 'Ashiey Fenn Joe Marshelinco', role: 'Business Development Lead', team: 'sports', persona: 'ops',
    greeting: 'Hi {name}! You grow the business, I build what we sell. Stand-out synergy. 📈',
  },

  /* ---- Team Devloop (where the padawans live) ---- */
  {
    id: 'ananthu', name: 'Ananthu Krishna C R', role: 'Software Engineer', team: 'devloop', persona: 'mentee',
    greeting: 'Hi Bro, Hope you doing good, I realy felt easy while sharing work with last month, hoping to get back you on booking-engine.',
  },
  {
    id: 'sravana', name: 'Pisupati Sravana Durga', role: 'Software Engineer', team: 'devloop', persona: 'mentee',
    greeting: 'Padawan {name}. The student returns to the source. Your guru has logged in. 🎓',
  },
  {
    id: 'narender', name: 'Narender S', role: 'Software Engineer', team: 'devloop', persona: 'peer',
    greeting: 'Hey {name}! Devloop crew. Let me show you how the booking-engine sausage gets made.',
  },

  /* ---- HR & Ops ---- */
  {
    id: 'arul-steffi', name: 'Arul Steffi Muhilarasi', role: 'HR and Ops Manager', team: 'hr_admin', persona: 'ops',
    greeting: 'Hi {name}! You run the people side, I run the product side. Both essential, clearly. 😄',
  },
  {
    id: 'tharun', name: 'Tharun', role: 'Administrative Specialist', team: 'hr_admin', persona: 'ops',
    greeting: 'Hey {name}! You keep the admin tight, I keep the code... mostly tight. Let’s talk.',
  },
  {
    id: 'hemaverthenee', name: 'Hemaverthenee Chandrashekhar', role: 'HR Associate', team: 'hr_admin', persona: 'ops',
    greeting: 'Hi {name}! Welcome to the lab. Performance review season — and I came prepared. 😎',
  },
  {
    id: 'samyuktha', name: 'Samyuktha S', role: 'Accounts Associate', team: 'hr_admin', persona: 'ops',
    greeting: 'Hiii Sam, un isai ya kekama bore adikuthu. missing those days.',
  },
  // Add more colleagues here. Give each a `team` matching a teams[].id,
  // a `persona` matching a personalization key, and their own `greeting`.
  // Anyone who picks "Someone else" gets the "default" experience.
]

/* A visitor can also pick "Someone else" — this is the fallback identity. */
export const defaultVisitor = {
  id: 'guest',
  name: 'Mystery Voter',
  role: 'Honorary Avenger',
  persona: 'default', // not a real persona key -> falls back to 'default'
  greeting: 'Welcome to the lab, {name}.',
}

/* ---------------------------------------------------------------------------
 * 4. PERSONALIZATION  — tone per PERSONA.
 *
 *   Keyed by the colleague's `persona` (section 3). A visitor whose persona
 *   isn't listed here falls back to the `default` entry.
 *
 *   joke     : the tailored one-liner shown under the greeting.
 *   reactor  : a short "status line" for extra flavor.
 *
 *   NOTE: the greeting lives on each colleague (section 3), not here.
 * ------------------------------------------------------------------------- */
export const personalization = {
  // CEO / founders
  leader: {
    joke: "You hired a genius, smart, handsome developer. The ROI on that decision? Off the charts. You're welcome.",
    reactor: 'Founder confidence index: maxed out.',
  },
  // Balaji's reviewer / tech lead (Arun)
  reviewer: {
    joke: "Remember when I shipped that integration clean and your review had nothing to flag? Yeah. Me too. Fondly.",
    reactor: 'Delivery reliability: suspiciously high.',
  },
  // Project / tech leads who own delivery (Jayasuriya, Naveen)
  lead: {
    joke: "You hand me a feature end-to-end and it comes back end-to-end. Like magic. Legally distinct from magic.",
    reactor: 'Feature ownership: 100%. Excuses: 0%.',
  },
  // Product managers (Ram Ganesh)
  pm: {
    joke: "You spec the product, I ship the booking-engine that makes it real. Roadmap, meet reality.",
    reactor: 'Product-to-delivery latency: minimal.',
  },
  // Juniors mentored via KT (Ananthu, Sravana)
  mentee: {
    joke: "Everything you know about clean integrations? Cite your source. The source is me. I'm the source.",
    reactor: 'Mentorship XP transfer: complete.',
  },
  // Fellow engineers — friendly rivalry
  peer: {
    joke: "May the best dev win. (It's me. I'm the best dev. But it was close. It wasn't.)",
    reactor: 'Friendly rivalry detected. Engaging banter protocols.',
  },
  // Ops / HR / sales / support / business teams
  ops: {
    joke: "You keep Stark Tower running, I keep the product running. Different superpowers, same Avengers.",
    reactor: 'Cross-team synergy: fully armed.',
  },
  default: {
    joke: "I don't know you yet, but I have a feeling you have excellent taste in Stand-out Performers.",
    reactor: 'Charm offensive: armed.',
  },
}

/* ---------------------------------------------------------------------------
 * 5. ACHIEVEMENTS  — the reveal cards. Each question unlocks one of these.
 *
 *   id       : unique key, referenced by questions below
 *   title    : card headline
 *   blurb    : one or two punchy sentences
 *   stats    : array of { label, value, note } shown as animated stat chips
 *   icon     : an emoji shown on the card (purely decorative)
 *
 *   ⚠ Stats marked TODO are invented — replace with real numbers.
 * ------------------------------------------------------------------------- */
export const achievements = {
  bokun: {
    id: 'bokun',
    icon: '🔌',
    title: 'Bókun Channel Manager Integration',
    blurb:
      'Built the full Bókun integration — webhook handling, multi-booking (combo) support, payment-state logic, and client onboarding. A big, gnarly integration that just works.',
    stats: [
      { label: 'Webhook events handled', value: '20+', note: 'TODO: confirm count' }, // TODO real number
      { label: 'Combo bookings supported', value: 'Yes', note: 'multi-booking logic' },
      { label: 'Payment states modeled', value: '6', note: 'TODO: confirm count' }, // TODO real number
      { label: 'Clients onboarded', value: '5+', note: 'TODO: confirm count' }, // TODO real number
    ],
  },

  bookingEngine: {
    id: 'bookingEngine',
    icon: '🚀',
    title: 'Booking Engine v2',
    blurb:
      'Core product work on Booking Engine v2 — the engine room of the whole platform. Faster, cleaner, more capable.',
    stats: [
      { label: 'Version', value: 'v2', note: 'the sequel nobody skips' },
      { label: 'Core flows rebuilt', value: '8', note: 'TODO: confirm count' }, // TODO real number
      { label: 'Perf improvement', value: '~35%', note: 'TODO: confirm metric' }, // TODO real number
    ],
  },

  deployments: {
    id: 'deployments',
    icon: '🌊',
    title: 'Frontend Deployments — The Lagoon Tour',
    blurb:
      'Shipped frontends across a whole portfolio of clients: Laugarás, Forest Lagoon, Reykjaból, Earth Lagoon, and Mývatn Nature. Deployed across more lagoons than a geography textbook.',
    stats: [
      { label: 'Clients live', value: '5', note: 'Laugarás · Forest Lagoon · Reykjaból · Earth Lagoon · Mývatn' },
      { label: 'Lagoons', value: 'Several', note: 'geographically impressive' },
      { label: 'Rollback incidents', value: '0', note: 'TODO: confirm 😅' }, // TODO real number
    ],
  },

  bc365: {
    id: 'bc365',
    icon: '🔄',
    title: 'BC365 Order Sync',
    blurb:
      'Backend integration syncing orders with Business Central 365 — the kind of plumbing nobody sees until it breaks. It does not break.',
    stats: [
      { label: 'Orders synced', value: '1000s', note: 'TODO: confirm volume' }, // TODO real number
      { label: 'Sync direction', value: '2-way', note: 'TODO: confirm' }, // TODO real number
      { label: 'Manual entry saved', value: 'Lots', note: 'TODO: quantify hours' }, // TODO real number
    ],
  },

  mentorship: {
    id: 'mentorship',
    icon: '🎓',
    title: 'KT & Onboarding Sessions',
    blurb:
      'Ran knowledge-transfer and onboarding sessions for junior devs (hi Ananthu & Sravana). I don’t just write the code — I clone the expertise.',
    stats: [
      { label: 'Devs mentored', value: '2+', note: 'Ananthu, Sravana, & more' },
      { label: 'KT sessions', value: '10+', note: 'TODO: confirm count' }, // TODO real number
      { label: 'Guru rating', value: '5★', note: 'self-reported, very accurate' },
    ],
  },

  testing: {
    id: 'testing',
    icon: '🧪',
    title: 'The Testing Situation (A Confession)',
    blurb:
      'I have historically... trusted the code I write. Bugs are abstract art. Tests are for people who doubt themselves. CAMPAIGN PROMISE: I will finally start writing test cases.',
    stats: [
      { label: 'Tests written (past)', value: '~0', note: 'bold strategy' },
      { label: 'Bugs (claimed)', value: 'Art', note: 'not bugs, features with vision' },
      { label: 'Tests promised (future)', value: '∞', note: 'the manifesto' },
    ],
  },

  // Unlocked by the uptime + weekend-support questions.
  reliability: {
    id: 'reliability',
    icon: '⚡',
    title: 'Rock-Solid Reliability',
    blurb:
      'The booking-engine just stays up. 99%+ uptime, features shipped on time, and a product so stable it doesn’t even need weekend babysitting. No tests, no fear — just reliability you can stop worrying about.',
    stats: [
      { label: 'Uptime', value: '99%+', note: 'and climbing' },
      { label: 'On-time delivery', value: 'Always', note: 'deadlines respected' },
      { label: 'Weekend pages', value: '0', note: 'a good SaaS sleeps' },
    ],
  },

  // Unlocked by the Black Friday question.
  blackFriday: {
    id: 'blackFriday',
    icon: '🛒',
    title: 'Black Friday 2025 — Crore-Scale',
    blurb:
      'Think the booking-engine is a small project? On Black Friday 2025 it handled over ₹1 Crore worth of bookings without breaking a sweat. The engine didn’t flinch.',
    stats: [
      { label: 'Bookings handled', value: '₹1 Cr+', note: 'TODO: confirm exact figure' }, // TODO real number
      { label: 'Peak day', value: 'Black Friday', note: '2025' },
      { label: 'Downtime', value: '0', note: 'on the biggest day of the year' },
    ],
  },
}

/* ---------------------------------------------------------------------------
 * 6. QUESTIONS  — the interactive Q&A. Shown one at a time.
 *
 *   Each question reveals an achievement card after answering.
 *
 *   type        : 'general'  -> shown to EVERY visitor
 *                 'personal' -> shown only to matching personas
 *   personas    : (personal only) which personas see this question
 *                 (values must match colleague `persona` strings).
 *   prompt      : the question text (`{name}` is replaced with visitor name).
 *   options     : answer buttons. Each has { text, reply }.
 *                 `reply` is Balaji's cheeky response after they pick it.
 *   reveal      : achievement id (from section 5) unlocked after answering.
 *   reactorNote : short line shown while the card animates in (optional).
 *
 *   ORDER MATTERS: questions appear top-to-bottom. General + matching
 *   personal questions are merged at runtime (see getQuestionsFor()).
 * ------------------------------------------------------------------------- */
export const questions = [
  /* ---- GENERAL (everyone) ---- */
  {
    id: 'uptime',
    type: 'general',
    prompt: 'Guess the uptime for the booking-engine?',
    options: [
      { text: '80%', reply: 'Nope, don\'t judge a book by its cover. we have over 99%' },
      { text: '95%', reply: 'Close, but not quite. The booking-engine is even more reliable.' },
      { text: '99%', reply: 'Correct! The booking-engine is rock solid.' },
    ],
    reveal: 'reliability',
    reactorNote: 'We take reliability seriously. Pulling uptime stats...',
  },
  {
    id: `bug-free`,
    type: 'general',
    prompt: 'How often do you think bugs are found by clients in the booking-engine?',
    options: [
      { text: 'Rarely', reply: 'Not quite. The booking-engine is surprisingly reliable.' },
      { text: 'Never', reply: 'Correct! The booking-engine is rock solid.' },
    ],
    reveal: 'testing',
    reactorNote: 'We take quality seriously. Pulling bug stats...',
  },
  {
    id: 'deadlines',
    type: 'general',
    prompt: 'How often do you think I ship features on time?',
    options: [
      { text: 'Sometimes', reply: 'Not quite. I take deadlines seriously and ship on time.' },
      { text: 'Always', reply: 'Correct! I take deadlines seriously and ship on time.' },
    ],
    reveal: 'bokun',
    reactorNote: 'Booking-Engine is always on time.',
  },
  {
    id: 'code-change',
    type: 'general',
    prompt: 'What is the percentage of code getting written/changed for every quarter?',
    options: [
      {
        text: '20%', reply: 'Not quite. The codebase is constantly evolving and improving.' },
      { text: '35%', reply: 'Correct! The codebase is constantly evolving and improving.' },
      { text: '50%', reply: 'We don\'t rewrite half the code every quarter, but it\'s a significant portion.' },
    ],
    reveal: 'bookingEngine',
    reactorNote: 'We keep the codebase fresh and evolving. No place for the word Legacy.',
  },
  {
    id: 'DSM attendance',
    type: 'general',
    prompt: 'How often do you think I attend the daily standup meetings?',
    options: [
     {text: 'Half the time', reply: 'Your right!!, you know me well'},
      {text: 'Always', reply: 'Nope! I miss DSM few time.'},
    ],
    reveal: 'mentorship',
    reactorNote: 'I\'m not mister perfect, but I try to be there for the team.',
  },
  {
    id: 'weekend-support',
    type: 'general',
    prompt: 'How often do you think I support the team on weekends?',
    options: [
      {
        text: 'rarely', reply: 'Correct!!, our product doesn\'t require much weekend supports.' },
        { text: 'often', reply: 'Nope! Weekends are for rest, not work.' }
    ],
    reveal: 'reliability',
    reactorNote: 'A good SAAS product should not require weekend support, and ours doesn\'t.',
  },
  {

    id: 'BlackFridaysupport',
    type: 'general',
    prompt: 'If you think booking-engine is a small project, Guess how much worth of bookings we handled on Black Friday 2025?',
    options: [
      {
        text: '40 Lacks', reply: 'Not close — think bigger.' },
        { text: '1 Crore', reply: 'Correct! We handled over ₹1 Crore worth of bookings on Black Friday 2025. The engine didn\'t even flinch.' }
    ],
    reveal: 'blackFriday',
    reactorNote: 'Black Friday is a big day for us, and the booking-engine handled it like a champ.' ,
  },


  /* ---- PERSONALIZED ---- */
  // {
  //   id: 'q-leader-roi',
  //   type: 'personal',
  //   personas: ['leader'],
  //   prompt: '{name}, be honest — has the genius, smart, handsome developer delivered on the bet?',
  //   options: [
  //     { text: 'Above expectations', reply: 'That’s the founder energy I live for. Booking-engine, integrations, deployments — all shipped. ROI confirmed.' },
  //     { text: 'Let me see the numbers', reply: 'Say less. Bókun, BC365, Booking Engine v2, 5 client frontends. The numbers are about to talk. 📊' },
  //   ],
  //   reveal: 'bookingEngine',
  //   reactorNote: 'Compiling founder-grade impact report...',
  // },
  // {
  //   id: 'q-pm-product',
  //   type: 'personal',
  //   personas: ['pm'],
  //   prompt: '{name}, you spec the product — who turns the booking-engine roadmap into reality?',
  //   options: [
  //     { text: 'You do, reliably', reply: 'Exactly. You support us on booking-engine, I ship it. Roadmap, meet reality.' },
  //     { text: 'It just appears 😉', reply: 'Magic, you say? That magic has a name, and it deploys across five lagoons.' },
  //   ],
  //   reveal: 'bookingEngine',
  //   reactorNote: 'Aligning product roadmap with shipped reality...',
  // },
  // {
  //   id: 'q-reviewer-review',
  //   type: 'personal',
  //   personas: ['reviewer'],
  //   prompt: '{name}, when you review my PRs, how often do you find something genuinely broken?',
  //   options: [
  //     { text: 'Honestly, rarely', reply: 'Music to my arc reactor. Clean delivery is the whole brand.' },
  //     { text: 'I stopped looking that hard', reply: 'See? Reliability you can stop worrying about. That’s the dream.' },
  //   ],
  //   reveal: 'bokun',
  //   reactorNote: 'Pulling review history...',
  // },
  // {
  //   id: 'q-lead-ownership',
  //   type: 'personal',
  //   personas: ['lead'],
  //   prompt: '{name}, when you hand me a feature end-to-end, what comes back?',
  //   options: [
  //     { text: 'A finished feature', reply: 'End-to-end ownership. You don’t babysit it, I drive it home.' },
  //     { text: 'More questions than answers', reply: 'Not from me. You give me the wheel, I bring the whole feature back parked neatly.' },
  //   ],
  //   reveal: 'bookingEngine',
  //   reactorNote: 'Assessing ownership metrics...',
  // },
  // {
  //   id: 'q-peer-banter',
  //   type: 'personal',
  //   personas: ['peer'],
  //   prompt: '{name}, real talk — who writes the more artful code, you or me?',
  //   options: [
  //     { text: 'Me, obviously', reply: 'Bold. Respect the confidence. Now go look at the Bókun integration and weep a little.' },
  //     { text: 'Fine... you', reply: 'I’ll frame this moment. Code is art, my friend, and I’m basically a gallery.' },
  //   ],
  //   reveal: 'bokun',
  //   reactorNote: 'Engaging rivalry subsystem...',
  // },
  // {
  //   id: 'q-mentee-mentor',
  //   type: 'personal',
  //   personas: ['mentee'],
  //   prompt: '{name}, who ran the KT sessions that leveled you up?',
  //   options: [
  //     { text: 'You did, guru', reply: 'Correct, padawan. The expertise transfer was real. Now go vote for your sensei.' },
  //     { text: 'I taught myself', reply: 'Bold rewrite of history. We both know who ran those KT sessions. 😎' },
  //   ],
  //   reveal: 'mentorship',
  //   reactorNote: 'Loading mentorship records...',
  // },
  // {
  //   id: 'q-ops-synergy',
  //   type: 'personal',
  //   personas: ['ops'],
  //   prompt: '{name}, the product only shines when both sides work — agreed?',
  //   options: [
  //     { text: 'Different superpowers, same team', reply: 'Exactly. You keep Stark Tower running, I keep the product running. Avengers assemble. 🤝' },
  //     { text: 'Show me the impact first', reply: 'Fair. BC365 sync alone saves everyone manual work. Let me walk you through it.' },
  //   ],
  //   reveal: 'bc365',
  //   reactorNote: 'Computing cross-team synergy...',
  // },
  // {
  //   id: 'q-bc365-default',
  //   type: 'general',
  //   prompt: 'Last one: what’s the best kind of backend plumbing?',
  //   options: [
  //     { text: 'The kind you never notice', reply: 'Exactly. Like BC365 order sync — silent, reliable, saving everyone manual work.' },
  //     { text: 'The kind that pages you at 3am', reply: 'Hard no. My BC365 sync lets everyone sleep. Including me.' },
  //   ],
  //   reveal: 'bc365',
  //   reactorNote: 'Syncing order ledger...',
  // },
]

/* ---------------------------------------------------------------------------
 * 7. HELPERS  — used by the app. You usually don't need to touch these.
 * ------------------------------------------------------------------------- */

/** Returns the personalization block for a given persona (with fallback). */
export function getPersona(persona) {
  return personalization[persona] || personalization.default
}

/** Returns the colleagues belonging to a given team id. */
export function getColleaguesForTeam(teamId) {
  return colleagues.filter((c) => c.team === teamId)
}

/**
 * Builds the ordered question list for a visitor:
 *  - all 'general' questions
 *  - 'personal' questions whose `personas` includes the visitor's persona
 * Preserves the authoring order in `questions`.
 */
export function getQuestionsFor(persona) {
  return questions.filter((q) => {
    if (q.type === 'general') return true
    if (q.type === 'personal') return (q.personas || []).includes(persona)
    return false
  })
}

/** Looks up an achievement by id (used by the reveal cards + finale). */
export function getAchievement(id) {
  return achievements[id]
}
