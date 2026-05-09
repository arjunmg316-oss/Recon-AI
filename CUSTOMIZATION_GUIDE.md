# ReconAI - Customization & Extension Guide

## 🎨 Customization Guide

Complete guide to personalizing and extending ReconAI for your needs.

## 🎭 Branding & Colors

### Change Primary Colors
Edit `tailwind.config.js`:

```js
colors: {
  "neon-blue": "#00d4ff",    // Change this
  "neon-cyan": "#00ffff",    // And this
  "neon-purple": "#b026ff",  // And this
  "cyber-black": "#0a0e27",  // Dark background
  "dark-gray": "#1a1f3a",    // Surface color
}
```

### Change Logo/Name
1. Edit title in `app/layout.tsx`
2. Update app name in `package.json`
3. Change brand text in `components` files

### Add Company Logo
1. Place image in `public/` folder
2. Import in layout: `import Image from 'next/image'`
3. Replace text with: `<Image src="/logo.png" alt="Logo" />`

## 🎬 Animation Customization

### Speed Up All Animations
Edit `tailwind.config.js`:
```js
keyframes: {
  "pulse-glow": {
    animation: "pulse-glow 1s cubic-bezier...", // Was 2s
  }
}
```

### Disable Animations (for accessibility)
Add to `app/globals.css`:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Change Animation Colors
Edit component files:
```tsx
animate={{
  boxShadow: [
    "0 0 10px rgba(255, 0, 0, 0.5)",  // Red glow
    "0 0 20px rgba(255, 0, 0, 1)",
    "0 0 10px rgba(255, 0, 0, 0.5)",
  ]
}}
```

## 📝 Content Customization

### Update Hero Text
Edit `app/page.tsx`:
```tsx
<h1>Your Company Name</h1>
<p>Your tagline here</p>
```

### Change Feature Cards
Search for "Advanced Forensic" and update card content:
```tsx
{
  icon: Brain,
  title: "Your Feature Title",
  desc: "Your feature description"
}
```

### Update Statistics
Edit the stats section:
```tsx
{ number: "Your Stat", label: "Label" }
```

## 🔗 Navigation Changes

### Add New Page
1. Create folder: `app/newpage/`
2. Create file: `app/newpage/page.tsx`
3. Copy layout from existing page
4. Add link in sidebar: `app/dashboard/page.tsx`

### Reorganize Sidebar
Edit sidebar items in `app/dashboard/page.tsx`:
```tsx
const navItems = [
  { icon: Home, label: "Home", href: "/" },
  // Add your items here
];
```

### Change Footer Links
Edit footer in `app/page.tsx`:
```tsx
<a href="/your-link">Your Text</a>
```

## 🎨 Typography Changes

### Change Font
Edit `tailwind.config.js`:
```js
theme: {
  fontFamily: {
    sans: ['Your Font', 'sans-serif'],
  }
}
```

Then import in `app/layout.tsx`:
```tsx
import { YourFont } from 'next/font/google'
```

### Change Font Sizes
Edit `tailwind.config.js`:
```js
fontSize: {
  "xl": "1.5rem",  // Change size
  "2xl": "2rem",
  // Add more sizes
}
```

## 🔧 Component Customization

### Modify GlassCard
Edit `components/GlassCard.tsx` to change:
- Blur amount: `backdrop-blur-xl` → `backdrop-blur-lg`
- Opacity: `bg-white/[0.03]` → `bg-white/[0.05]`
- Border color: `border-white/[0.1]` → `border-neon-cyan/30`

### Customize NeonButton
Edit `components/NeonButton.tsx` to:
- Change default color
- Add new size option
- Modify hover effects

### Adjust ParticleBackground
Edit `components/ParticleBackground.tsx`:
```tsx
for (let i = 0; i < 50; i++) {  // Change particle count
  // Modify particle properties
  size: Math.random() * 2 + 0.5,  // Change particle size
}
```

## 📱 Responsive Design Changes

### Mobile Breakpoint
Edit `tailwind.config.js` to add custom breakpoints:
```js
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  'mobile': { 'raw': '(max-width: 500px)' },
}
```

### Adjust Spacing
Edit `tailwind.config.js`:
```js
spacing: {
  '1': '0.25rem',  // Adjust base spacing
  '2': '0.5rem',
  // ...
}
```

## 🔐 Security Enhancements

### Add Authentication
1. Install auth library: `npm install next-auth`
2. Create API route: `app/api/auth/[...nextauth]/route.ts`
3. Wrap pages with auth check

### Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_API_URL=your-api-url
SECRET_KEY=your-secret
DATABASE_URL=your-db-url
```

Then use:
```tsx
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

## 🔌 API Integration

### Connect to Backend
Replace mock data with API calls:

```tsx
// Before (mock data)
const recentCases = [...]

// After (API data)
const [cases, setCases] = useState([])
useEffect(() => {
  fetch('/api/cases')
    .then(r => r.json())
    .then(data => setCases(data))
}, [])
```

### Add Loading States
```tsx
const [loading, setLoading] = useState(false)

if (loading) return <HolographicLoader />

return <div>Content</div>
```

## 🗄️ Database Integration

### Set Up MongoDB
1. Install: `npm install mongoose`
2. Add connection string to `.env.local`
3. Create models for data
4. Create API routes: `app/api/`

### Example API Route
```tsx
// app/api/cases/route.ts
export async function GET() {
  const cases = await CaseModel.find()
  return Response.json(cases)
}
```

## 🎯 Feature Additions

### Add Search Functionality
Edit dashboard search:
```tsx
const [query, setQuery] = useState("")
const filtered = cases.filter(c => 
  c.name.includes(query)
)
```

### Add Filtering
```tsx
const [filter, setFilter] = useState("all")
const filtered = cases.filter(c => {
  if (filter === "active") return c.status === "active"
  return true
})
```

### Add Sorting
```tsx
const sorted = [...cases].sort((a, b) => 
  a.date.localeCompare(b.date)
)
```

## 📊 Analytics Integration

### Add Google Analytics
Install: `npm install @react-google-analytics/core`

Add to `layout.tsx`:
```tsx
import GoogleAnalytics from '@react-google-analytics/core'

export default function RootLayout() {
  return (
    <html>
      <body>
        <GoogleAnalytics measurementId="G-XXXXX" />
      </body>
    </html>
  )
}
```

## 🎬 Advanced Animations

### Add Custom Animation
Edit `app/globals.css`:
```css
@keyframes myAnimation {
  0% { /* start state */ }
  50% { /* middle state */ }
  100% { /* end state */ }
}

.my-animation {
  animation: myAnimation 2s infinite;
}
```

### Complex Framer Motion
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
  animate={{ opacity: 1, scale: 1, rotate: 0 }}
  exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
  transition={{ type: "spring", stiffness: 100 }}
>
  Content
</motion.div>
```

## 🧪 Testing Setup

### Add Testing
```bash
npm install -D vitest @testing-library/react
```

### Example Test
```tsx
import { render, screen } from '@testing-library/react'
import { GlassCard } from '@/components/GlassCard'

test('renders glass card', () => {
  render(<GlassCard>Test</GlassCard>)
  expect(screen.getByText('Test')).toBeInTheDocument()
})
```

## 📦 Deployment Customization

### Build Optimizations
Update `next.config.js`:
```js
module.exports = {
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
}
```

### Environment-Specific Config
```tsx
const isDev = process.env.NODE_ENV === 'development'
const apiUrl = isDev ? 'localhost:3000' : 'api.example.com'
```

## 🔄 Version Updates

### Update Dependencies
```bash
npm update
npm outdated  # Check for updates
npm audit     # Security check
```

### Major Version Upgrades
```bash
npm install next@latest react@latest
npm run build  # Test compatibility
```

## 🎓 Next Steps

1. **Customize Colors** - Update tailwind.config.js
2. **Add Content** - Replace placeholder text
3. **Connect Database** - Add backend integration
4. **Implement Auth** - Add user authentication
5. **Deploy** - Push to production
6. **Monitor** - Add analytics
7. **Iterate** - Gather feedback and improve

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Docs](https://react.dev)

## 💡 Pro Tips

1. **Use CSS Variables** - For easier theme switching
2. **Component Library** - Create component variations
3. **Utility Functions** - Extract common logic
4. **Environment Variables** - Keep secrets safe
5. **Type Definitions** - Create types for data models
6. **Error Boundaries** - Wrap route components
7. **Loading States** - Always show loading UI
8. **Caching** - Use Next.js data cache
9. **SEO** - Add metadata to pages
10. **Performance** - Use React.memo, useMemo

## 🚀 Ready to Customize!

You now have everything needed to:
- ✅ Brand the platform
- ✅ Add real data
- ✅ Connect to backends
- ✅ Deploy to production
- ✅ Scale the application

Start with small changes and iterate!
