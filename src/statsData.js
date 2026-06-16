/**
 * ============================================================================
 *  statsData.js  —  THE ONLY FILE YOU EDIT FOR THE "MISSION CONTROL" PAGE
 * ============================================================================
 *
 *  Everything on the /stats dashboard (the numbers, labels, chart axes, card
 *  text, captions) lives here. Tweak numbers freely without touching any
 *  React component.
 *
 *  This mirrors the pattern of campaignData.js. Sections are numbered and
 *  commented to match the page layout top-to-bottom.
 *
 *  ⚠ TODO markers flag invented/placeholder numbers — swap in real figures
 *    when you have them. (Honesty matters: your manager is watching. 👀)
 * ============================================================================
 */

/* ---------------------------------------------------------------------------
 * 1. HERO STRIP  — "All Systems Operational"
 * ------------------------------------------------------------------------- */
export const hero = {
  status: 'ALL SYSTEMS OPERATIONAL',
  subtitle: 'Balaji.exe — high-availability developer. Running since onboarding, zero unplanned restarts. Occasional coffee top-ups.',
  counters: [
    { value: 99.9, suffix: '%', decimals: 1, label: 'Uptime', icon: '⚡' },        // TODO: confirm real number
    { value: 40, suffix: '+', label: 'Features Shipped', icon: '🚀' },             // TODO: confirm real number
    { value: 5, suffix: '', label: 'Clients Deployed', icon: '🌊' },               // TODO: confirm real number
    { value: 50, suffix: '+', label: 'Bugs Fixed', icon: '🐛' },                  // TODO: confirm — was 0, that was awkward
  ],
}

/* ---------------------------------------------------------------------------
 * 2. RADAR — "The Booking Engine"
 * ------------------------------------------------------------------------- */
export const bookingEngineRadar = {
  title: 'The Booking Engine',
  subtitle: 'System diagnostics — core infrastructure',
  max: 100,
  axes: [
    { axis: 'Uptime', value: 99 },        // TODO: confirm
    { axis: 'Reliability', value: 95 },   // TODO: confirm
    { axis: 'Integrations', value: 90 },  // TODO: confirm
    { axis: 'Performance', value: 88 },   // TODO: confirm
    { axis: 'Webhooks', value: 92 },      // TODO: confirm
    { axis: 'Payments', value: 90 },      // TODO: confirm
  ],
  caption: '99% uptime — the same number AWS puts in their SLA. Difference is, they have data centers. I have a hoodie and conviction.',
}

/* ---------------------------------------------------------------------------
 * 3. RADAR — "My Skills"
 *
 *   NOTE: 'Testing' is deliberately the low point — that's the running gag.
 * ------------------------------------------------------------------------- */
export const skillsRadar = {
  title: 'My Skills',
  subtitle: 'Developer capability matrix',
  max: 100,
  axes: [
    { axis: 'Backend', value: 92 },          // TODO: confirm
    { axis: 'Frontend', value: 85 },         // TODO: confirm
    { axis: 'DevOps', value: 75 },           // TODO: confirm
    { axis: 'Problem Solving', value: 93 },  // TODO: confirm
    { axis: 'System Designing', value: 96 }, // TODO: confirm
    { axis: 'Mentoring', value: 88 },        // TODO: confirm
    { axis: 'Testing', value: 50 },          // the gag — be honest-ish, keep it humble 😎
  ],
  footnote: '*Testing isn\'t low. It\'s just... aspirational. The dip you see is character development in progress.',
}

/* ---------------------------------------------------------------------------
 * 4. NEW TECH I LEARNED  — "skill unlock" cards (game-achievement style)
 * ------------------------------------------------------------------------- */
export const techUnlocks = [
  {
    name: 'AWS',
    built: 'Spelunked through half the AWS console and lived to tell the tale. Still occasionally surprised by the bill.',
    proficiency: 75,
    icon: '☁️',
    tag: 'INFRA',
  },
  {
    name: 'Rust',
    built: 'Picked up Rust — the language that refuses to compile until you become a better person. Character building.',
    proficiency: 60, // honest: "recently started" ≠ 85. Bumped down so it's believable.
    icon: '🦀',
    tag: 'BACKEND',
  },
  {
    name: 'Payment State Machines',
    built: 'Modeled multi-state payment flows so money never gets stuck in limbo. Customers charged once. Exactly once.',
    proficiency: 87,
    icon: '💳',
    tag: 'LOGIC',
  },
  {
    name: 'Multi-Client Deploys',
    built: 'Shipped frontends across 5 lagoon clients. My deploy history reads like a travel brochure for Iceland.',
    proficiency: 92,
    icon: '🌊',
    tag: 'FRONTEND',
  },
  {
    name: 'Mentoring & KT',
    built: 'Ran KT sessions that turned juniors into people who now fix my bugs. Circle of life.',
    proficiency: 86,
    icon: '🎓',
    tag: 'PEOPLE',
  },
  // Add more unlocks here — keep the same shape.
]

/* ---------------------------------------------------------------------------
 * 5. BY THE NUMBERS  — stat grid (icon + big number + label)
 * ------------------------------------------------------------------------- */
export const byTheNumbers = [
  { icon: '🔌', value: '4+', label: 'Integrations built', note: 'Bókun, BC365 & friends' },        // TODO: confirm
  { icon: '🌙', value: '50+', label: 'Late-night deploys survived', note: 'sleep is also a feature I ignored' }, // TODO: confirm
  { icon: '🎓', value: '2+', label: 'Juniors mentored', note: 'Ananthu, Sravana & more' },           // TODO: confirm
  { icon: '🌊', value: '5', label: 'Lagoons deployed to', note: 'geographically showing off' },
  { icon: '🛒', value: '2500+', label: 'Black Friday bookings', note: 'zero downtime, much sweat' },  // TODO: confirm
  { icon: '🧪', value: '~0', label: 'Test cases written', note: 'the campaign promise, still pending' },
  { icon: '🐛', value: 'few', label: 'Client-reported bugs', note: 'and the ones that slipped, I fixed before lunch' }, // changed from ~0 — nobody believes ~0
  { icon: '☕', value: '∞', label: 'Coffees converted to code', note: 'fuel efficiency: questionable' },
]

/* ---------------------------------------------------------------------------
 * 6. CLOSING CTA
 * ------------------------------------------------------------------------- */
export const closing = {
  line: "That's the year — shipped, deployed, occasionally untested, but always with heart. If the numbers didn't convince you, the hoodie should have. Let's bring this one home. 🏆",
  ctaLabel: 'VOTE BALAJI 🚀',
}

/* ---------------------------------------------------------------------------
 * 7. PAGE HEADER  — the small intro strip at the very top of /stats
 * ------------------------------------------------------------------------- */
export const page = {
  eyebrow: 'My shameless brag sheet',
  title: 'BALAJI v2025–26',
  subtitle: 'Specs, stats, and one suspiciously low testing score. All numbers honest. All confidence earned.',
}