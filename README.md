# Next.js Cinematic Portfolio

A cinematic space-themed portfolio website built with Next.js 15, featuring scroll-driven animations and immersive visual effects inspired by films like Interstellar, Gravity, and 2001: A Space Odyssey.

## Features

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS 4.x** with custom color palette and animations
- **Framer Motion** for scroll-driven animations
- **Canvas-based starfield** with parallax effects
- **Cinematic visual effects** (lens flares, gravitational lensing, particle systems)
- **Fully responsive** design for mobile, tablet, and desktop
- **Accessibility compliant** with WCAG AA standards
- **Performance optimized** with sub-2-second load times

## Tech Stack

- **Framework**: Next.js 15+
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **Animations**: Framer Motion
- **Testing**: fast-check (property-based testing)
- **Code Quality**: ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js 18+ or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd nextjs-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
nextjs-portfolio/
├── app/                    # Next.js App Router
│   ├── components/         # React components
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── lib/                    # Utility functions
│   ├── constants.ts        # Configuration constants
│   └── utils.ts            # Helper functions
├── types/                  # TypeScript type definitions
│   └── index.ts            # Shared types
├── public/                 # Static assets
│   └── images/             # Image files
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Configuration

### Color Palette

The portfolio uses a space-themed color palette:

- **Background**: `#000000` (absolute black)
- **Text**: `#FFFFFF` (white)
- **Accents**:
  - Blue: `#4D7CFE`
  - Warm: `#FFD6A5`
  - Pink: `#FF2D75`
  - Purple: `#9D7CFE`
  - Cyan: `#4DFEEF`
  - Green: `#6DFE7C`
  - Amber: `#FEA54D`

### Performance Targets

- First Contentful Paint (FCP): < 1.5s
- Time to Interactive (TTI): < 3s
- Frame Rate: 60 FPS (desktop), 30 FPS (mobile)
- Initial Bundle Size: < 500KB

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with zero configuration

### Static Export

```bash
npm run build
```

The static files will be generated in the `.next` directory.

## Accessibility

This portfolio is designed with accessibility in mind:

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast ratios meeting WCAG AA standards
- `prefers-reduced-motion` support

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is private and proprietary.

## Author

**Raghavendra Saini**

- Email: raghavvv.dev@gmail.com
- LinkedIn: [Raghavendra Saini](https://www.linkedin.com/in/raghavendra-saini-216b8b325/)
