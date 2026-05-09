# ReconAI - Complete Project Structure

## 📁 Project Overview

A production-ready Next.js 14 application with 10 fully designed pages, reusable components, and cinematic animations. Built with TypeScript, Tailwind CSS, and Framer Motion.

## 📂 Full Directory Tree

```
ReconAI/
│
├── 📄 package.json                 # Dependencies & scripts
├── 📄 tsconfig.json                # TypeScript configuration
├── 📄 tailwind.config.js           # Tailwind design system
├── 📄 postcss.config.js            # PostCSS configuration
├── 📄 next.config.js               # Next.js configuration
├── 📄 .eslintrc.json               # ESLint configuration
├── 📄 .gitignore                   # Git ignore rules
├── 📄 .env.example                 # Environment template
│
├── 📖 README.md                    # Full documentation
├── 📖 QUICKSTART.md               # Quick start guide
│
├── 📁 app/                         # Next.js App Router pages
│   ├── 📄 layout.tsx              # Root layout wrapper
│   ├── 📄 globals.css             # Global styles & animations
│   ├── 📄 page.tsx                # Landing page (/)
│   │
│   ├── 📁 login/
│   │   └── 📄 page.tsx            # Login page (/login)
│   │
│   ├── 📁 dashboard/
│   │   └── 📄 page.tsx            # Dashboard (/dashboard)
│   │
│   ├── 📁 investigation/
│   │   └── 📁 new/
│   │       └── 📄 page.tsx        # New investigation (/investigation/new)
│   │
│   ├── 📁 evidence/
│   │   └── 📄 page.tsx            # Evidence upload (/evidence)
│   │
│   ├── 📁 reconstruction/
│   │   └── 📄 page.tsx            # AI analysis (/reconstruction)
│   │
│   ├── 📁 timeline/
│   │   └── 📄 page.tsx            # Timeline view (/timeline)
│   │
│   ├── 📁 contradictions/
│   │   └── 📄 page.tsx            # Contradictions (/contradictions)
│   │
│   ├── 📁 final-reconstruction/
│   │   └── 📄 page.tsx            # Final reconstruction (/final-reconstruction)
│   │
│   └── 📁 settings/
│       └── 📄 page.tsx            # Settings (/settings)
│
└── 📁 components/                  # Reusable components
    ├── 📄 index.ts                # Component exports
    ├── 📄 GlassCard.tsx           # Glassmorphism card component
    ├── 📄 NeonButton.tsx          # Animated neon button
    ├── 📄 AnimatedBackground.tsx  # Animated background system
    ├── 📄 ParticleBackground.tsx  # Canvas particle effects
    ├── 📄 HolographicLoader.tsx   # Rotating holographic loader
    └── 📄 FloatingOrb.tsx         # AI assistant floating orb
```

## 📄 File Descriptions

### Root Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | npm dependencies and scripts (dev, build, start, lint) |
| `tsconfig.json` | TypeScript compiler options and path aliases |
| `tailwind.config.js` | Tailwind theme customization (colors, animations, fonts) |
| `postcss.config.js` | PostCSS plugins for Tailwind processing |
| `next.config.js` | Next.js build configuration |
| `.eslintrc.json` | ESLint rules for code quality |
| `.gitignore` | Files to ignore in git commits |
| `.env.example` | Template for environment variables |

### Documentation

| File | Purpose |
|------|---------|
| `README.md` | Complete project documentation |
| `QUICKSTART.md` | Quick start and setup guide |

### App Pages (app/ directory)

| Page | File | Route | Purpose |
|------|------|-------|---------|
| Layout | `layout.tsx` | - | Root wrapper for all pages |
| Global Styles | `globals.css` | - | Keyframe animations and base styles |
| Landing | `page.tsx` | `/` | Hero section with features and stats |
| Login | `login/page.tsx` | `/login` | Investigator authentication page |
| Dashboard | `dashboard/page.tsx` | `/dashboard` | Main control center |
| New Investigation | `investigation/new/page.tsx` | `/investigation/new` | Case creation form |
| Evidence Upload | `evidence/page.tsx` | `/evidence` | File upload interface |
| AI Analysis | `reconstruction/page.tsx` | `/reconstruction` | Cinematic loading screen |
| Timeline | `timeline/page.tsx` | `/timeline` | Interactive timeline visualization |
| Contradictions | `contradictions/page.tsx` | `/contradictions` | Witness analysis comparison |
| Final Reconstruction | `final-reconstruction/page.tsx` | `/final-reconstruction` | Scene reconstruction display |
| Settings | `settings/page.tsx` | `/settings` | User preferences |

### Components (components/ directory)

| Component | File | Purpose |
|-----------|------|---------|
| Index Exports | `index.ts` | Central export file for all components |
| GlassCard | `GlassCard.tsx` | Reusable glassmorphism card with hover effects |
| NeonButton | `NeonButton.tsx` | Animated button with color variations |
| Animated Background | `AnimatedBackground.tsx` | Parallax background with glowing orbs |
| Particle Background | `ParticleBackground.tsx` | Canvas-based particle effects |
| Holographic Loader | `HolographicLoader.tsx` | Rotating rings loading animation |
| Floating Orb | `FloatingOrb.tsx` | Persistent AI assistant orb |

## 🎨 Design System

### Colors (from tailwind.config.js)
- `neon-blue`: #00d4ff (Primary)
- `neon-cyan`: #00ffff (Accent)
- `neon-purple`: #b026ff (Secondary)
- `cyber-black`: #0a0e27 (Background)
- `dark-gray`: #1a1f3a (Elevated)

### Animations (from globals.css)
- `pulse-glow`: Pulsing glow effect
- `float`: Vertical floating motion
- `glow-border`: Border glow animation
- `scan-line`: Vertical scanning effect
- `drift`: Background grid movement
- `typing`: Text typing effect

### Typography
- Display: Bold, 4xl-8xl fonts
- Body: Regular, lg-xl fonts
- Mono: Code and data display (font-mono)

## 🔄 Component Hierarchy

```
RootLayout
│
├── Landing Page
│   ├── AnimatedBackground
│   ├── ParticleBackground
│   ├── GlassCard (Features)
│   └── FloatingOrb
│
├── Login Page
│   ├── AnimatedBackground
│   ├── GlassCard
│   ├── NeonButton
│   └── ParticleBackground
│
├── Dashboard
│   ├── GlassCard (Stats)
│   ├── NeonButton (Actions)
│   └── FloatingOrb
│
└── Other Pages...
```

## 📦 Dependencies

### Core
- `next@14`: React framework
- `react@18`: UI library
- `typescript@5`: Type safety

### Styling & Animation
- `tailwindcss@3`: Utility CSS
- `framer-motion@10`: Animations
- `tailwindcss-animate@1`: Animation utilities

### UI
- `lucide-react@0.292`: Icons
- `radix-ui`: Accessible components
- `clsx@2`: Class name utilities
- `class-variance-authority@0.7`: Component variants

### Dev
- `autoprefixer@10`: CSS vendor prefixes
- `postcss@8`: CSS processor

## 🎯 Usage Examples

### Importing Components
```tsx
import { GlassCard, NeonButton } from "@/components";
import { AnimatedBackground } from "@/components/AnimatedBackground";
```

### Using GlassCard
```tsx
<GlassCard gradient="blue" hover className="p-6">
  <h3>Title</h3>
  <p>Content</p>
</GlassCard>
```

### Using NeonButton
```tsx
<NeonButton size="lg" color="gradient" onClick={handleClick}>
  Action
</NeonButton>
```

### Using Animations
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Content
</motion.div>
```

## 🚀 Build & Deploy

### Development
```bash
npm run dev
```
Starts server at http://localhost:3000

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 📱 Responsive Breakpoints

Using Tailwind breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on icons
- Keyboard navigation support
- Focus states on interactive elements
- Color contrast ratios meet WCAG AA

## 🔒 Type Safety

- Full TypeScript coverage
- Strict mode enabled
- Type aliases for props
- Interface definitions for all components

## 🎓 Learning Path

1. **Understanding Structure**: Review `tailwind.config.js`
2. **Component System**: Study `GlassCard.tsx` and `NeonButton.tsx`
3. **Animations**: Check `globals.css` and `AnimatedBackground.tsx`
4. **Page Structure**: Review `page.tsx` files
5. **Advanced Patterns**: Study `reconstruction/page.tsx` for complex animations

## 🔧 Customization Checklist

- [ ] Change primary colors in tailwind.config.js
- [ ] Update app name in package.json
- [ ] Modify fonts in tailwind.config.js
- [ ] Adjust animation timings in components
- [ ] Replace placeholder content with real data
- [ ] Add API integration
- [ ] Implement authentication
- [ ] Deploy to hosting platform

## 📞 Quick Reference

### Common Commands
```bash
npm install              # Install dependencies
npm run dev             # Start dev server
npm run build           # Production build
npm start               # Run production server
npm run lint            # Check code quality
```

### File Locations
- Colors: `tailwind.config.js`
- Animations: `app/globals.css`
- Buttons: `components/NeonButton.tsx`
- Cards: `components/GlassCard.tsx`
- Pages: `app/*/page.tsx`

### Import Paths
- Components: `@/components`
- Pages: `@/app`
- Lib: `@/lib`
- Types: `@/types`

---

**Ready to customize and deploy!** 🚀
