/**
 * EVENTS DATA FILE — src/data/events.js
 *
 * BEFORE EDITING:
 * - The `summary` field supports basic HTML (<b>, <i>, <a href="...">).
 *   Rendered with dangerouslySetInnerHTML — no <script> or <style> tags.
 * - To update events: edit this file, push to main. GitHub Actions redeploys in ~2 minutes.
 * - Do NOT rename field keys — components depend on the exact schema.
 * - Set any inapplicable optional field to null — never omit it entirely.
 * - `eventCategory` must be one of: "suggested" | "also" | "oneOnOne" | "social"
 *
 * SCHEMA (all fields required; optional fields must be null, not omitted):
 * {
 *   id: string,
 *   eventCategory: "suggested" | "also" | "oneOnOne" | "social",
 *   title: string,
 *   date: string,              // "YYYY-MM-DD" — event venue's local wall-clock date
 *   startTime: string,         // "HH:MM" 24-hour — event venue's local wall-clock time
 *   endTime: string,           // "HH:MM" 24-hour — event venue's local wall-clock time
 *   // Update the UTC offset in src/components/EventDetail.jsx (toUtcComponents) to match.
 *   room: string|null,
 *   area: string|null,
 *   type: string|null,
 *   topic: string|null,
 *   summary: string|null,      // basic HTML allowed; render with dangerouslySetInnerHTML
 *   participants: string|null,  // oneOnOne only; null for all other categories
 *   registrationRequired: bool,
 *   transitionWarning: string|null,
 *   mapsUrl: string|null,      // null for main venue; Google Maps deep-link for off-site
 *   url: string|null,          // public session catalog URL; null for private sessions
 *   spotifyUrl: string|null,   // playlist link; null unless event has one
 * }
 *
 * See PLAYBOOK.md for the full schema reference and examples.
 */
export const events = [
  // ---------------------------------------------------------------
  // Example: Suggested session (main recommendation — white card)
  // ---------------------------------------------------------------
  {
    id: "example-keynote",
    eventCategory: "suggested",
    title: "Opening Keynote",
    date: "2026-06-03",
    startTime: "09:00",
    endTime: "10:30",
    room: "Hall A",
    area: "Main Convention Center",
    type: "Keynote",
    topic: "Future of AI",
    summary: "The opening keynote featuring product announcements and customer stories.",
    participants: null,
    registrationRequired: false,
    transitionWarning: null,
    mapsUrl: null,
    url: null,
    spotifyUrl: null,
  },

  // ---------------------------------------------------------------
  // Example: Alternative session (same timeslot — teal card)
  // ---------------------------------------------------------------
  {
    id: "example-breakout",
    eventCategory: "also",
    title: "Breakout: Advanced Automation",
    date: "2026-06-03",
    startTime: "09:00",
    endTime: "10:00",
    room: "Room 201",
    area: "Main Convention Center",
    type: "Breakout",
    topic: "Automation",
    summary: "A deep-dive session on building automated workflows with <b>Flow Builder</b>.",
    participants: null,
    registrationRequired: true,
    transitionWarning: null,
    mapsUrl: null,
    url: null,
    spotifyUrl: null,
  },

  // ---------------------------------------------------------------
  // Example: Confirmed 1:1 meeting (amber card)
  // ---------------------------------------------------------------
  {
    id: "example-oneonone",
    eventCategory: "oneOnOne",
    title: "1:1 with Salesforce AE",
    date: "2026-06-03",
    startTime: "14:00",
    endTime: "15:00",
    room: "Meeting Room 5",
    area: "North Hall",
    type: "Confirmed 1:1 Meeting",
    topic: null,
    summary: "Strategic alignment meeting with your Salesforce account team.",
    participants: "Salesforce Account Executive, Salesforce SE",
    registrationRequired: false,
    transitionWarning: null,
    mapsUrl: null,
    url: null,
    spotifyUrl: null,
  },

  // ---------------------------------------------------------------
  // Example: Social / get together (purple card)
  // ---------------------------------------------------------------
  {
    id: "example-party",
    eventCategory: "social",
    title: "Welcome Reception",
    date: "2026-06-03",
    startTime: "18:00",
    endTime: "21:00",
    room: null,
    area: "Rooftop Terrace",
    type: "Social",
    topic: null,
    summary: "Evening reception with drinks and networking. Dress code: smart casual.",
    participants: null,
    registrationRequired: false,
    transitionWarning: "15-min walk from main venue. Check map link below.",
    mapsUrl: "https://maps.google.com/?q=Example+Rooftop+Venue",
    url: null,
    spotifyUrl: null,
  },
]
