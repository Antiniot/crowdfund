# Crowdfunding Product Page

A modern, responsive crowdfunding product page built with React, TypeScript, and Tailwind CSS.

## Features

- ✅ Responsive design for mobile and desktop
- ✅ Interactive pledge modal with reward selection
- ✅ Real-time progress tracking
- ✅ Bookmark functionality
- ✅ Success modal after pledging
- ✅ Smooth animations and transitions
- ✅ Accessible UI components

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── About.tsx          # About section with reward cards
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section with CTA
│   ├── PledgeModal.tsx    # Modal for selecting pledges
│   ├── RewardCard.tsx     # Individual reward card
│   ├── Stats.tsx          # Statistics and progress bar
│   └── SuccessModal.tsx   # Success confirmation modal
├── App.tsx                # Main app component
├── main.tsx               # Entry point
├── index.css              # Global styles
└── types.ts               # TypeScript type definitions
```

## Features Implementation

### User Interactions

- **View optimal layout** - Responsive design adapts to screen size
- **Hover states** - Interactive elements have hover effects
- **Pledge selection** - Choose from multiple reward tiers
- **Progress updates** - Real-time updates to progress bar and totals
- **Backer count** - Increments after each pledge
- **Bookmark toggle** - Toggle bookmark state with visual feedback

## Design Specifications

- **Colors:**
  - Moderate Cyan: `hsl(176, 50%, 47%)`
  - Dark Cyan: `hsl(176, 72%, 28%)`
  - Black: `hsl(0, 0%, 0%)`
  - Dark Gray: `hsl(0, 0%, 48%)`

- **Typography:**
  - Font Family: Commissioner
  - Weights: 400, 500, 700
  - Base Size: 16px

- **Breakpoints:**
  - Mobile: 375px
  - Desktop: 1440px

## License

This project is a solution to the [Frontend Mentor Crowdfunding Product Page challenge](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uCzZpZpS).
