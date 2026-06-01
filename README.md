# CoachBunny Online — Teaser (Lemon Line to Ibiza Hop)

## Purpose
Ship a Docker-ready static teaser page for CoachBunny’s “Lemon Line to Ibiza Hop” concept.

## What this repo is
- A static, single-page teaser site (HTML/CSS/JS) served by nginx.
- A concept/pilot research landing page with clear trust and caveat boundaries.
- A no-tracking, no-forms page (placeholder CTA is mailto only).

## What this repo is not
- Not a transport operator, ferry operator, taxi service, venue, marina, restaurant, club, jobs/housing board, events platform, or tours provider.
- Not a booking product: no ticket sales, no payments, no reservations.
- Not a live route planner: no live routes, fares, timetables, operator claims, availability, or promised connections.
- Not a backend service: no APIs, database, analytics, cookies, tracking, or scraping.

## Local run (Docker)
Prerequisites: Docker + Docker Compose.

```bash
docker compose up --build
```

Open: http://localhost:8080

Stop:

```bash
docker compose down
```

## Public-claim boundaries
This project must not publish claims such as:
- Calls to buy tickets immediately
- Promises about routes, ferries, or connections
- Assertions about timetables
- Claims of precise fares
- Claims of precise platform/station details
- Claims of availability checks
- Claims of partner status

## Required caveat (must remain present)
CoachBunny does not operate transport, ferries, taxis, venues, marinas, restaurants, clubs, jobs, housing, events, or tours. CoachBunny does not sell tickets. This Hop is currently a pilot concept in research. Travellers must verify and book directly with relevant operators and official sources.

## Future TODOs
- Add optional non-personal “read more” content (no signup, no tracking).
- Add accessibility pass (contrast, reduced motion, keyboard flow).
- Add lightweight CI to build the container image.
- Add a content checklist to prevent forbidden copy from slipping in.
