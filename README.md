# Awqat — Prayer Times App

A responsive, bilingual (English / العربية) prayer times web application built with **React 19** and **Vite**. The app displays today's prayer times, a live countdown to the next prayer, and an interactive monthly timetable — all computed from real prayer-time data fetched from the [Aladhan API](https://aladhan.com/prayer-times-api).

> `Awqat` (أوقات) means "times" in Arabic.

---

## Features

- **Next prayer countdown** — a live `HH:MM:SS` timer counting down to the next prayer, calculated in the **selected location's timezone** (not the user's), so the countdown stays accurate no matter where the viewer is.
- **Today's times** — shows all six time slots (Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha) for the current day together with the **Hijri** and Gregorian dates.
- **Monthly timetable** — an interactive calendar grid with month navigation; selecting any day reveals its daily prayer summary (Fajr, Dhuhr, Asr, Maghrib, Isha) with formatted `hh:mm A` times.
- **Multiple locations** — pick from preset cities (Mecca, Medina, Cairo, Algiers, Istanbul, London) or use **"My Location"** via the browser's Geolocation API (with automatic fallback to the first preset city on denial/unavailability).
- **Dark mode** — class-based dark theme toggle, persisted in `localStorage`.
- **Arabic (RTL) support** — full English ⇄ Arabic translations with automatic `rtl`/`ltr` document direction switching via `i18next`.
- **Robust loading & error states** — a loading spinner/card while data is fetching and an error card when the API request fails.
- **Fully responsive** — mobile-first layout that scales up to a two-column dashboard on larger screens.

---

## Tech Stack

| Layer      | Technology |
|------------|------------|
| Framework  | [React 19](https://react.dev) |
| Build tool | [Vite 8](https://vite.dev) |
| Styling    | [Tailwind CSS 4](https://tailwindcss.com) (via `@tailwindcss/vite`, `@theme` design tokens) |
| Dates      | [dayjs](https://dayjs.dev) with `utc`, `timezone` and `customParseFormat` plugins |
| i18n       | [i18next](https://www.i18next.com) + `react-i18next` + `i18next-browser-languagedetector` |
| Icons      | [lucide-react](https://lucide.dev) |
| Linting    | [ESLint](https://eslint.org) (flat config) with `eslint-plugin-react-hooks` & `eslint-plugin-react-refresh` |
| Runtime    | Node.js 24 (also ships a Node 24 Alpine Docker dev image) |

**Fonts** (self-hosted as `woff2`): **Fraunces** (headings), **Inter** (body/Latin UI) and **Amiri** (Arabic UI).

---

## 📡 Data Source

Prayer times are fetched from the public [Aladhan Prayer Times API](https://aladhan.com/prayer-times-api):

```
GET https://api.aladhan.com/v1/calendar/{year}/{month}?latitude={lat}&longitude={lng}
```

The `usePrayerTimes` hook handles fetching with **request cancellation** (via `AbortController`) to avoid racing when switching months or locations quickly.

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 20 (the Dockerfile uses Node 24; verified against Node 24.14)

### Install

```bash
npm install
```

### Available Scripts

| Command             | Description                                     |
|---------------------|-------------------------------------------------|
| `npm run dev`       | Start the Vite dev server with HMR on `http://localhost:5173` |
| `npm run build`     | Produce a production build in `dist/`           |
| `npm run preview`   | Preview the production build locally            |
| `npm run lint`      | Run ESLint over the project                     |

### Development

```bash
npm run dev
```

Open the printed local URL (default `http://localhost:5173`).

### Production Build

```bash
npm run build
npm run preview
```

> **Note:** ESLint currently surfaces a few `no-unused-vars` warnings from existing code (`Header.jsx`, `LanguageSwitchButton.jsx`, `NextPrayerCard.jsx`, `PrayerDashboard.jsx`). These are pre-existing and do not block the dev/build flow.

---

## Docker (Development Image)

A `dockerfile` is included for running the dev server inside a container based on `node:24-alpine` (port `5173`):

```bash
docker build -t prayer-times-app .
docker run -p 5173:5173 prayer-times-app
```

The app will be served at `http://localhost:5173`.

---

## Localization

Translations live centrally in `src/i18n.js`:

- **English** (`en`, fallback language)
- **Arabic** (`ar`)

The language is auto-detected from the browser on first load, and the language button swaps between the two while setting `document.documentElement.dir` (`rtl` for Arabic) and `lang` accordingly.

---

## License

Private project — no license specified.
