# Website Prototype

A rapid prototyping environment for building websites.

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Vite | 7.x | Build tool & dev server |
| React | 18.x | UI framework |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |
| shadcn/ui | latest | Pre-built components |
| React Router | 7.x | Client-side routing |

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Open http://localhost:5173 in your browser.

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   └── Layout.tsx    # Shared layout with navigation
├── pages/
│   ├── Home.tsx      # Home page
│   └── About.tsx     # About page
├── lib/
│   └── utils.ts      # Utility functions (cn helper)
├── App.tsx           # Router configuration
├── main.tsx          # Entry point
└── index.css         # Tailwind + theme variables
```

## Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

Browse available components: https://ui.shadcn.com/docs/components

**Installed components:** button, card, input

## Adding New Pages

1. Create a new file in `src/pages/`:
   ```tsx
   // src/pages/Contact.tsx
   export default function Contact() {
     return <div>Contact Page</div>
   }
   ```

2. Add the route in `src/App.tsx`:
   ```tsx
   import Contact from '@/pages/Contact'

   // Inside Routes:
   <Route path="/contact" element={<Contact />} />
   ```

3. Add navigation link in `src/components/Layout.tsx`

## Path Aliases

Use `@/` to import from the `src/` directory:

```tsx
import { Button } from '@/components/ui/button'
import Home from '@/pages/Home'
```

## Dark Mode

Add `class="dark"` to the `<html>` element in `index.html` to enable dark mode.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
