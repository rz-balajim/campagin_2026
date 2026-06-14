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
  tagline: 'The genius, smart, handsome developer',
  subTagline: 'Sometimes you gotta run before you can walk — and I ship before I test.',
  enterLabel: 'Initialize Arc Reactor',
  // Shown on the finale:
  voteCta: 'Vote Balaji',
  finaleLine: "I am Iron Dev. And I'd like to keep being your Stand-out Performer.",
  // Heartfelt closing note on the finale screen (edit freely).
  // Each array entry renders as its own paragraph:
  thankNote: [
    'Thank you for coming along on this campaign with me 🙏',
    'Every integration, deployment, and late-night fix was a team effort — and honestly, your trust and support is what kept me running this whole time.',
    "Win or lose, it's been an honour building with you all. But just so we're clear: I'm not saying vote for me… I'm just saying history remembers the people who shipped. 😎🏆",
    "It's been a blast, RUMANS. 🚀",
  ],
  thankSignoff: '— Balaji',
  // Hashtags shown at the very bottom of the finale (edit freely):
  hashtags: ['#IronDev', '#TeamRoanuz', '#ShipItBalaji', '#CodeIsArt', '#StandoutPerformer'],
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
    id: 'anto', name: 'Anto', role: 'CEO & Founder', team: 'command', persona: 'leader',
    greeting: "Hello Boss, it's been a while since we had a connect. I hope I've been performing above your expectations.",
  },

  /* ---- Team 8H ---- */
  {
    id: 'arun', name: 'Arun', role: 'Tech Lead', team: '8h', persona: 'reviewer',
    greeting: "Hi Captain, thanks for trusting my features and deployments in the Booking Engine. I'll make sure I keep up the same performance.",
  },
  {
    id: 'jayasuriya', name: 'Jayasuriya', role: 'Project Manager', team: '8h', persona: 'lead',
    greeting: "Hi Jai, thanks for always getting us the time we needed for features. I hope I've never disappointed you on deadlines.",
  },
  {
    id: 'devakrishnan', name: 'Deva', role: 'Software Engineer', team: '8h', persona: 'peer',
    greeting: "Hi Deva, the Last Man of DSM! I really admire your technical knowledge across different stacks. Happy to see your growth.",
  },
  {
    id: 'godwin', name: 'Godwin', role: 'Software Engineer', team: '8h', persona: 'peer',
    greeting: "Heyyy Partner! Thanks for making the work even more fun and easy. Wishing you the best in this contest — and yeah, let's solve more things together.",
  },
  {
    id: 'anil', name: 'Anil', role: 'Software Engineer', team: '8h', persona: 'peer',
    greeting: "Hii Broo, glad to have someone like a brother on my team — and my alcoholic guru at that.",
  },
  {
    id: 'nirmal', name: 'Nirmal', role: 'Software Engineer', team: '8h', persona: 'peer',
    greeting: 'Hey {name}, deploy buddy. Pull up a chair — the demo is about to begin.',
  },
  {
    id: 'gayathri', name: 'Gayathri', role: 'Software Engineer', team: '8h', persona: 'peer',
    greeting: 'Welcome {name}! The arc reactor glows a little brighter when 8H shows up.',
  },
  {
    id: 'regina', name: 'Regina', role: 'Software Engineer', team: '8h', persona: 'peer',
    greeting: "Hi {name}, 8H represent. Grab a coffee, this won't take long. 🚀",
  },
  {
    id: 'nandhini', name: 'Nandhini', role: 'Software Engineer', team: '8h', persona: 'peer',
    greeting: "Hi Devi, hope you're enjoying married life! You two are the cutest couple on my Instagram feed.",
  },
  {
    id: 'arjun', name: 'Arjun', role: 'Software Engineer', team: '8h', persona: 'peer',
    greeting: "Hi Brooo, marriage kapram ale romba bright ah marita, un thambiya nenachi oru vote potudu papom.",
  },
  {
    id: 'ragul', name: 'Ragul', role: 'Software Engineer', team: '8h', persona: 'peer',
    greeting: "Hey Ragul, congrats on the new bike! Aduthu pinnadi ukkara ala pathacha??",
  },
  {
    id: 'janarthanan', name: 'Janarthanan', role: 'Software Engineer', team: '8h', persona: 'peer',
    greeting: 'Hey {name}! 8H in the house. Let me walk you through the highlight reel.',
  },
  {
    id: 'channa-kishore', name: 'Kishore', role: 'IT Support Specialist', team: '8h', persona: 'ops',
    greeting: "Hey man! Your work speaks a lot — probably that's why you speak less, I guess. All the best for your campaign, Kishore!",
  },
  {
    id: 'gomathisankar', name: 'Gomathisankar', role: 'IT Ops Specialist', team: '8h', persona: 'ops',
    greeting: 'Hey {name}! Uptime hero meets feature hero. Let\'s talk numbers.',
  },

  /* ---- Team Tero ---- */
  {
    id: 'naveen', name: 'Naveen', role: 'Tech Lead', team: 'tero', persona: 'lead',
    greeting: "Welcome, {name} — one tech lead to another, you'll appreciate clean end-to-end delivery.",
  },
  {
    id: 'thamizharasan', name: 'Thamizh', role: 'Software Engineer', team: 'tero', persona: 'peer',
    greeting: "Hi Thamizh, I really admire the way you carry yourself and your calmness, both personally and professionally. And playing carrom with you is really fun.",
  },
  {
    id: 'jervin', name: 'Jervin', role: 'Software Engineer', team: 'tero', persona: 'peer',
    greeting: "Hey broo, namba tha inga mass katurom.",
  },
  {
    id: 'karthik', name: 'Karthik', role: 'Software Engineer', team: 'tero', persona: 'peer',
    greeting: "Hi bro, I really liked the effort you put into the Women's Day speech preparation — and un carom skills ku na adimai.",
  },
  {
    id: 'sivadharini', name: 'Sivadharini', role: 'Software Engineer', team: 'tero', persona: 'peer',
    greeting: "Heyyy Dharini, your laughter is the cutest and loudest I've ever heard.",
  },
  {
    id: 'abhiram', name: 'Abhiram', role: 'Software Engineer', team: 'tero', persona: 'peer',
    greeting: "Hey Abhi! I would have been even happier if you'd joined us in this campaign. Nevertheless, I really admire your dedication. And yes — now you're a dedicated fiancé as well. Happy for you, bro!",
  },
  {
    id: 'tamil-selvan', name: 'Tamil Selvan', role: 'Software Engineer', team: 'tero', persona: 'peer',
    greeting: "Hi Tamil, I really enjoyed meeting you during our interview — you came across as remarkably calm and confident!",
  },

  /* ---- Team Sports ---- */
  {
    id: 'ram-ganesh', name: 'Ram', role: 'Product Manager', team: 'sports', persona: 'pm',
    greeting: "Hi Ram, I'm really sorry for missing you in the RPL auction. I love the way you support us on the Booking Engine, and I believe you'll support me for this Best Performer award too.",
  },
  {
    id: 'jayakumar', name: 'Jayakumar', role: 'Business Operations Lead', team: 'sports', persona: 'ops',
    greeting: "Hey bro, we've only recently gotten to know each other better — thanks for the fun times we've had together. Wishing you every success with Blue Dental!",
  },
  {
    id: 'sruthy', name: 'Sruthy', role: 'Software Engineer', team: 'sports', persona: 'peer',
    greeting: `Hi Sruthy, "Handling things with a calm mind" — yes, I really admire that quality in you.`,
  },
  {
    id: 'subashree', name: 'Subashree', role: 'Customer Success Specialist', team: 'sports', persona: 'ops',
    greeting: "Hi Subashree, you do what you love — and that's what makes you unique. It was fun getting to know you, and yeah, let's cheers to another beer soon!",
  },
  {
    id: 'supraja', name: 'Supraja', role: 'Sales Development Specialist', team: 'sports', persona: 'ops',
    greeting: "Hey {name}! You sell the dream, I ship it. Let's close this vote together. 🤝",
  },
  {
    id: 'nivetha', name: 'Nivetha', role: 'Software Engineer', team: 'sports', persona: 'peer',
    greeting: "Hi Nivetha, we haven't talked much, but at the Christmas mom-child game I loved the way you carried the task with such sportiveness.",
  },
  {
    id: 'aadhithya', name: 'Aadhithya', role: 'Software Engineer', team: 'sports', persona: 'peer',
    greeting: "Hey Aadhithya! I see you walking around with a laptop more often than a coffee mug — and that says a lot about your dedication. All the best in this campaign, bro!",
  },
  {
    id: 'ashiey', name: 'Ashiey', role: 'Business Development Lead', team: 'sports', persona: 'ops',
    greeting: 'Hi {name}! You grow the business, I build what we sell. Stand-out synergy. 📈',
  },

  /* ---- Team Devloop (where the padawans live) ---- */
  {
    id: 'ananthu', name: 'Ananthu', role: 'Software Engineer', team: 'devloop', persona: 'mentee',
    greeting: "Hi bro, hope you're doing good. I really felt at ease while working with you last month — hoping to get you back on the Booking Engine soon.",
  },
  {
    id: 'sravana', name: 'Sravana', role: 'Software Engineer', team: 'devloop', persona: 'mentee',
    greeting: "Hi Sravana, we've been working closely recently and I love your spirit at work. Wishing you all the best in this campaign!",
  },
  {
    id: 'narender', name: 'Narender', role: 'Software Engineer', team: 'devloop', persona: 'peer',
    greeting: 'Hey {name}! Devloop crew. Let me show you how the Booking Engine sausage gets made.',
  },

  /* ---- HR & Ops ---- */
  {
    id: 'arul-steffi', name: 'Steffi', role: 'HR and Ops Manager', team: 'hr_admin', persona: 'ops',
    greeting: "Hi Steffi, I still remember my first interview with you. Thanks for trusting me — I'll keep working hard to justify it.",
  },
  {
    id: 'tharun', name: 'Tharun', role: 'Administrative Specialist', team: 'hr_admin', persona: 'ops',
    greeting: 'Hey {name}! You keep the admin tight, I keep the code... mostly tight. Let\'s talk.',
  },
  {
    id: 'hemaverthenee', name: 'Hemaverthenee', role: 'HR Associate', team: 'hr_admin', persona: 'ops',
    greeting: "Heyyy Vice-Captain! You bring the same level of care and attention to our employees as you do to nurturing the office plants — beautifully.",
  },
  {
    id: 'samyuktha', name: 'Samyuktha', role: 'Accounts Associate', team: 'hr_admin', persona: 'ops',
    greeting: "Hiii Sam, Dedication = Samyuktha. Un isai ya kekama bore adikuthu. Let's sing together at your wedding soon!",
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
// export const achievements = {
//   bokun: {
//     id: 'bokun',
//     icon: '🔌',
//     title: 'Bókun Channel Manager Integration',
//     blurb:
//       'Built the full Bókun integration — webhook handling, multi-booking (combo) support, payment-state logic, and client onboarding. A big, gnarly integration that just works.',
//     stats: [
//       { label: 'Webhook events handled', value: '20+', note: 'TODO: confirm count' }, // TODO real number
//       { label: 'Combo bookings supported', value: 'Yes', note: 'multi-booking logic' },
//       { label: 'Payment states modeled', value: '6', note: 'TODO: confirm count' }, // TODO real number
//       { label: 'Clients onboarded', value: '5+', note: 'TODO: confirm count' }, // TODO real number
//     ],
//   },

//   blackFriday: {
//     id: 'blackFriday',
//     icon: '🛒',
//     title: 'Black Friday 2025 — Crore-Scale',
//     blurb:
//       'Think the booking-engine is a small project? On Black Friday 2025 it handled over ₹1 Crore worth of bookings without breaking a sweat. The engine didn’t flinch.',
//     stats: [
//       { label: 'Bookings handled', value: '₹1 Cr+', note: 'TODO: confirm exact figure' }, // TODO real number
//       { label: 'Peak day', value: 'Black Friday', note: '2025' },
//       { label: 'Downtime', value: '0', note: 'on the biggest day of the year' },
//     ],
//   },

//   bookingEngine: {
//     id: 'bookingEngine',
//     icon: '🚀',
//     title: 'Booking Engine v2',
//     blurb:
//       'Core product work on Booking Engine v2 — the engine room of the whole platform. Faster, cleaner, more capable.',
//     stats: [
//       { label: 'Version', value: 'v2', note: 'the sequel nobody skips' },
//       { label: 'Core flows rebuilt', value: '8', note: 'TODO: confirm count' }, // TODO real number
//       { label: 'Perf improvement', value: '~35%', note: 'TODO: confirm metric' }, // TODO real number
//     ],
//   },

//   deployments: {
//     id: 'deployments',
//     icon: '🌊',
//     title: 'Frontend Deployments — The Lagoon Tour',
//     blurb:
//       'Shipped frontends across a whole portfolio of clients: Laugarás, Forest Lagoon, Reykjaból, Earth Lagoon, and Mývatn Nature. Deployed across more lagoons than a geography textbook.',
//     stats: [
//       { label: 'Clients live', value: '5', note: 'Laugarás · Forest Lagoon · Reykjaból · Earth Lagoon · Mývatn' },
//       { label: 'Lagoons', value: 'Several', note: 'geographically impressive' },
//       { label: 'Rollback incidents', value: '0', note: 'TODO: confirm 😅' }, // TODO real number
//     ],
//   },

//   mentorship: {
//     id: 'mentorship',
//     icon: '🎓',
//     title: 'KT & Onboarding Sessions',
//     blurb:
//       'Ran knowledge-transfer and onboarding sessions for junior devs (hi Ananthu & Sravana). I don’t just write the code — I clone the expertise.',
//     stats: [
//       { label: 'Devs mentored', value: '2+', note: 'Ananthu, Sravana, & more' },
//       { label: 'KT sessions', value: '10+', note: 'TODO: confirm count' }, // TODO real number
//       { label: 'Guru rating', value: '5★', note: 'self-reported, very accurate' },
//     ],
//   },

//   testing: {
//     id: 'testing',
//     icon: '🧪',
//     title: 'The Testing Situation (A Confession)',
//     blurb:
//       'I have historically... trusted the code I write. Bugs are abstract art. Tests are for people who doubt themselves. CAMPAIGN PROMISE: I will finally start writing test cases.',
//     stats: [
//       { label: 'Tests written (past)', value: '~0', note: 'bold strategy' },
//       { label: 'Bugs (claimed)', value: 'Art', note: 'not bugs, features with vision' },
//       { label: 'Tests promised (future)', value: '∞', note: 'the manifesto' },
//     ],
//   },

//   // Unlocked by the uptime + weekend-support questions.
//   reliability: {
//     id: 'reliability',
//     icon: '⚡',
//     title: 'Rock-Solid Reliability',
//     blurb:
//       'The booking-engine just stays up. 99%+ uptime, features shipped on time, and a product so stable it doesn’t even need weekend babysitting. No tests, no fear — just reliability you can stop worrying about.',
//     stats: [
//       { label: 'Uptime', value: '99%+', note: 'and climbing' },
//       { label: 'On-time delivery', value: 'Always', note: 'deadlines respected' },
//       { label: 'Weekend pages', value: '0', note: 'a good SaaS sleeps' },
//     ],
//   },

//   // Unlocked by the Black Friday question.
 
// }

export const achievements = {
  reliability: {
    id: 'reliability',
    icon: '⚡',
    title: 'Rock-Solid Reliability',
    blurb:
      'The booking-engine just stays up. 99%+ uptime, features shipped on time, and a product so stable it doesn\'t even need weekend babysitting. No tests, no fear — just reliability you can stop worrying about.',
    stats: [
      { label: 'Uptime', value: '99%+', note: 'and climbing' },
      { label: 'Weekend pages', value: '0', note: 'a good SaaS sleeps' },
      { label: 'Sleep lost', value: '0', note: 'not even on weekends' },
    ],
  },

  blackFriday: {
    id: 'blackFriday',
    icon: '🛒',
    title: 'Black Friday 2025 — High-Volume Heroics',
    blurb:
      'Think the booking-engine is a small project? On Black Friday 2025 it handled 2500+ bookings without breaking a sweat. The engine didn\'t flinch.',
    stats: [
      { label: 'Bookings handled', value: '2500+', note: 'on the single biggest day' },
      { label: 'Peak day', value: 'Black Friday', note: '2025' },
      { label: 'Downtime', value: '0', note: 'on the biggest day of the year' },
    ],
  },

  testing: {
    id: 'testing',
    icon: '🧪',
    title: 'The Testing Situation (A Confession)',
    blurb:
      'I have historically... trusted the code I write. Bugs are abstract art. Tests are for people who doubt themselves. And yet — clients almost never find bugs. Go figure.',
    stats: [
      { label: 'Client-reported bugs', value: '~0', note: 'somehow' },
      { label: 'Tests written (past)', value: '~0', note: 'bold strategy' },
      { label: 'Tests promised (future)', value: '∞', note: 'the manifesto' },
    ],
  },

  deadlines: {
    id: 'deadlines',
    icon: '📅',
    title: 'Deadline? What Deadline?',
    blurb:
      'Some developers treat deadlines as suggestions. I treat them as facts. Features ship on time, every time — no heroics, no last-minute drama, just consistent delivery.',
    stats: [
      { label: 'On-time delivery', value: 'Always', note: 'deadlines respected' },
      { label: 'Late deliveries', value: '0', note: 'not the style' },
      { label: 'Panic commits at 11:59pm', value: 'Classified', note: '🤐' },
    ],
  },

  attendance: {
    id: 'attendance',
    icon: '📋',
    title: 'DSM Attendance — Honest Edition',
    blurb:
      'I\'m not a perfect-attendance trophy hunter. I miss DSM a few times — because sometimes the code needs more of me than the standup does. But when I\'m there, I\'m actually there.',
    stats: [
      { label: 'Attendance rate', value: '~80%', note: 'TODO: confirm' },
      { label: 'Times zoned out mid-standup', value: '0', note: 'present means present' },
      { label: 'Perfection claimed', value: 'Never', note: 'just honest' },
    ],
  },

  bookingEngine: {
    id: 'bookingEngine',
    icon: '🚀',
    title: 'Booking Engine v2',
    blurb:
      'Core product work on Booking Engine v2 — the engine room of the whole platform. ~35% of the codebase gets written or changed every quarter. Faster, cleaner, more capable every cycle.',
    stats: [
      { label: 'Version', value: 'v2', note: 'the sequel nobody skips' },
      { label: 'Code churn per quarter', value: '~35%', note: 'constantly evolving' },
      { label: 'Legacy rewrites', value: 'Ongoing', note: 'no place for the word Legacy' },
    ],
  },
};

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
    prompt: '🤔 Take a wild guess — what\'s the booking-engine\'s uptime?',
    options: [
      {
        text: '80% — it\'s software, stuff happens',
        reply: 'Ouch, that hurts. We\'re not running on hope and prayers here — it\'s 99%+. The engine barely blinks.',
      },
      {
        text: '95% — pretty solid',
        reply: 'Respectable guess, but we don\'t do "pretty solid." Try 99%+. Overachieving is kind of our thing.',
      },
      {
        text: '99% — this guy knows his stuff',
        reply: '🎯 Nailed it! 99%+ uptime, no drama, no midnight panic. Just a boring, beautiful, rock-solid engine.',
      },
    ],
    reveal: 'reliability',
    reactorNote: 'Pulling uptime receipts...',
  },

  {
    id: 'BlackFridaysupport',
    type: 'general',
    prompt: '🛒 Black Friday 2025 — the internet\'s hunger games. How many bookings did the engine handle without breaking a sweat?',
    options: [
      {
        text: '1000+ — a decent day',
        reply: 'A decent day? It was Black Friday! Try 2500+. The engine didn\'t even look up from its coffee.',
      },
      {
        text: '2000+ — okay now we\'re talking',
        reply: '🎉 2500+ bookings, zero downtime, zero drama. The engine handled Black Friday like it was a lazy Tuesday.',
      },
    ],
    reveal: 'blackFriday',
    reactorNote: 'Counting the Black Friday carnage (spoiler: we won)...',
  },

  {
    id: 'bug-free',
    type: 'general',
    prompt: '🐛 Be honest — how often do clients find bugs in the booking-engine?',
    options: [
      {
        text: 'Rarely — a bug here and there',
        reply: 'I\'ll take "rarely" as a compliment, but the real answer is closer to never. Clients finding bugs? Not on my watch.',
      },
      {
        text: 'Never — I refuse to believe otherwise',
        reply: '✅ Correct and correct. No tests were harmed (or written) in the making of this bug-free engine. Don\'t ask how.',
      },
    ],
    reveal: 'testing',
    reactorNote: 'Scanning bug reports... (this won\'t take long)',
  },

  {
    id: 'deadlines',
    type: 'general',
    prompt: '📅 Deadlines — do I treat them like suggestions, or like laws of physics?',
    options: [
      {
        text: 'Sometimes on time — he\'s human, cut him some slack',
        reply: 'I appreciate the grace, but I don\'t need it. Deadlines aren\'t suggestions in my world — they\'re the finish line.',
      },
      {
        text: 'Always — this man does not miss',
        reply: '🏁 Always. Every time. No exceptions. Some people have a to-do list. I have a done list.',
      },
    ],
    reveal: 'deadlines',
    reactorNote: 'Checking the delivery record...',
  },

  {
    id: 'DSM attendance',
    type: 'general',
    prompt: '☕ Daily standups — how often do you think I actually show up?',
    options: [
      {
        text: 'Half the time — cameras off, vibes on',
        reply: 'Ha! You know me too well. I\'m not a perfect-attendance kid — sometimes the code needs me more than the standup does.',
      },
      {
        text: 'Always — disciplined developer, obviously',
        reply: '😅 Sweet of you, but nope. I miss a few. I\'m a developer, not a morning person. When I\'m there though, I\'m actually there.',
      },
    ],
    reveal: 'attendance',
    reactorNote: 'Checking the attendance roll...',
  },

  {
    id: 'code-change',
    type: 'general',
    prompt: '🔄 What percentage of the codebase gets written or changed every quarter? (Hint: the word "legacy" makes me physically ill.)',
    options: [
      {
        text: '20% — careful, deliberate changes',
        reply: 'We move a bit faster than that. Careful is fine, but stagnant is not — it\'s closer to 35%.',
      },
      {
        text: '35% — constantly shipping and evolving',
        reply: '⚡ Exactly right! Every quarter, a third of the codebase gets touched, improved, or rebuilt. Legacy? Never heard of her.',
      },
      {
        text: '50% — are they rewriting it from scratch?!',
        reply: 'We\'re ambitious, not reckless. 35% is the sweet spot — fast enough to keep improving, stable enough to not terrify the clients.',
      },
    ],
    reveal: 'bookingEngine',
    reactorNote: 'Running git log to count the carnage...',
  },

  {
    id: 'weekend-support',
    type: 'general',
    prompt: '📵 Weekend support calls — how often does the booking-engine drag me away from my Saturday?',
    options: [
      {
        text: 'Rarely — it\'s a SaaS, not a baby',
        reply: '🙌 Exactly the energy. A good product shouldn\'t need a babysitter on weekends, and ours doesn\'t. Saturdays are sacred.',
      },
      {
        text: 'Often — on-call life is real',
        reply: 'That\'s the old world. Our engine is stable enough that weekends are actually weekends. No pager, no panic, no problem.',
      },
    ],
    reveal: 'reliability',
    reactorNote: 'Checking the weekend incident log (it\'s very short)...',
  },
];
  


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
