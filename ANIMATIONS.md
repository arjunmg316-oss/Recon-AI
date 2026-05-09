# ReconAI - Animation & Effects Documentation

## 🎬 Complete Animation Reference

All animations and visual effects used throughout the ReconAI platform.

## 📍 Global Animations (app/globals.css)

### pulse-glow
Pulsing glow effect for highlight elements
```css
0%, 100% { opacity: 1; box-shadow: 0 0 10px rgba(0, 212, 255, 0.5); }
50% { opacity: 0.8; box-shadow: 0 0 30px rgba(0, 212, 255, 0.8); }
```
**Used in**: Dashboard stats, loading indicators

### float
Vertical floating motion
```css
0%, 100% { transform: translateY(0px); }
50% { transform: translateY(-20px); }
```
**Used in**: Demo cards, floating elements, orbs

### glow-border
Animated border glow
```css
0%, 100% { border-color: rgba(0, 212, 255, 0.5); }
50% { border-color: rgba(0, 212, 255, 1); }
```
**Used in**: Input focus states, card borders

### scan-line
Vertical scanning effect
```css
0% { transform: translateY(-100%); }
100% { transform: translateY(100%); }
```
**Used in**: Holographic containers, evidence upload zones

### drift
Background grid movement
```css
0% { background-position: 0 0; }
100% { background-position: 50px 50px; }
```
**Used in**: Neural network background

### typing
Text typing animation
```css
from { width: 0; }
to { width: 100%; }
```
**Used in**: AI messages, narrative text

### blink
Cursor blinking effect
```css
0%, 49% { border-right-color: rgba(0, 212, 255, 1); }
50%, 100% { border-right-color: transparent; }
```
**Used in**: Text input cursors

## 🎨 Framer Motion Animations

### Page Transitions
All pages use entrance animations:
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

### Container Stagger
Container variants for staggered children:
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
```

### Hover Effects
Interactive hover animations:
```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
transition={{ type: "spring", stiffness: 300 }}
```

### Scale Animations
Pulsing scale effects:
```tsx
animate={{ scale: [1, 1.05, 1] }}
transition={{ duration: 2, repeat: Infinity }}
```

## 🎯 Component-Specific Animations

### GlassCard
- **Hover**: Scale 1.02, increased blur
- **Entry**: Fade in from 20px below
- **Shadow**: Dynamic glow based on color

### NeonButton
- **Hover**: Scale 1.05 with glow effect
- **Click**: Scale 0.95 press effect
- **Background**: Color shift on hover

### AnimatedBackground
- **Orbs**: Y and X translation in loops
- **Grid**: Continuous background position drift
- **Timing**: 8-20 second animation loops

### HolographicLoader
- **Outer Ring**: 4s rotation (forward)
- **Inner Ring**: 3s rotation (backward)
- **Center**: 2s scale pulse
- **Glow**: Continuous opacity animation

### FloatingOrb
- **Position**: Vertical float motion (3s)
- **Pulse**: Scale and shadow pulse (1.5s)
- **Rings**: Expanding concentric circles

## 📊 Animation Timings

| Element | Duration | Repeat | Delay |
|---------|----------|--------|-------|
| Page Entry | 0.8s | Once | 0s |
| Container Stagger | - | - | 0.1s |
| Hover Transition | 0.2s | - | - |
| Pulse Glow | 2s | Infinite | - |
| Float Motion | 3s | Infinite | 0s |
| Hologram Loader | 3-4s | Infinite | - |
| Background Drift | 20s | Infinite | - |
| Timeline Events | 0.6s | Once | Staggered |

## 🌈 Color Animations

### Gradient Transitions
```tsx
animate={{
  borderColor: [
    "rgba(176, 38, 255, 0.3)",
    "rgba(0, 212, 255, 0.3)",
    "rgba(176, 38, 255, 0.3)"
  ]
}}
transition={{ duration: 3, repeat: Infinity }}
```

### Glow Effects
```tsx
animate={{
  boxShadow: [
    "0 0 10px rgba(0, 212, 255, 0.5)",
    "0 0 20px rgba(0, 212, 255, 1)",
    "0 0 10px rgba(0, 212, 255, 0.5)"
  ]
}}
transition={{ duration: 2, repeat: Infinity }}
```

## 🎬 Page-Specific Animation Sequences

### Landing Page
1. Hero title scales and glows (2s loop)
2. Animated lines pulse in/out (2s)
3. Feature cards float up (staggered 0.1s)
4. Stats animate on scroll
5. Footer elements fade in on scroll

### Dashboard
1. Header slides down (0.5s)
2. Stats cards scale in (staggered)
3. Confidence indicators pulse
4. Recent cases highlight on hover
5. Status dots blink

### AI Analysis Page
1. Holographic loader rotates continuously
2. Progress bar animates smoothly
3. Analysis steps fade in sequentially
4. Success animation on completion
5. Result cards scale in

### Timeline Page
1. Center timeline line draws (1.5s)
2. Event cards slide in (staggered)
3. Timeline nodes appear with pulse (spring)
4. Confidence badges glow
5. Connecting lines animate

## ⚙️ Animation Customization

### Adjust Global Animation Speed
Edit `tailwind.config.js`:
```js
animation: {
  "pulse-glow": "pulse-glow 4s ease-in-out infinite", // Change 2s to 4s
}
```

### Adjust Page Transition Speed
Edit individual page files:
```tsx
transition={{ duration: 1.2 }} // Was 0.8s
```

### Reduce Animations for Performance
Add to CSS:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0s !important;
    transition-duration: 0s !important;
  }
}
```

## 🎨 Advanced Effects

### Holographic Scanning
Canvas-based particle effects with:
- Gradient mesh overlays
- Scan line strips
- Color shift animations
- Opacity fading

### Neural Network Background
Grid pattern with:
- Animated gradient overlay
- Continuous drift effect
- Opacity layering
- Color cycling

### Glassmorphism Cards
Achieved with:
- `backdrop-filter: blur(10px)`
- `background: rgba(white, 0.03)`
- `border: rgba(cyan, 0.1)`
- Shadow layering

### Neon Glow Effects
Created with:
- `box-shadow` with multiple layers
- Animated color values
- Blur radius changes
- Opacity transitions

## 🎯 Performance Optimization

### GPU Acceleration
- Using `transform` instead of `top/left`
- `opacity` changes for fades
- `will-change` hints for animations
- `containment` for large animations

### Reduced Motion Support
```tsx
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

<motion.div
  animate={prefersReducedMotion ? {} : { y: [0, -20, 0] }}
>
```

### Animation Performance Tips
1. Use `transform` over position properties
2. Group similar animations
3. Use CSS animations for continuous effects
4. Limit particle count
5. Disable animations on mobile if needed

## 📱 Responsive Animation Adjustments

### Mobile Optimizations
- Reduce float distance (10px instead of 20px)
- Faster transitions (0.3s instead of 0.8s)
- Fewer particles on canvas
- Simpler gradient overlays

### Implementation
```tsx
const duration = isMobile ? 0.3 : 0.8;
```

## 🔧 Common Animation Patterns

### Fade In
```tsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.8 }}
```

### Slide In
```tsx
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6 }}
```

### Scale Pulse
```tsx
animate={{ scale: [1, 1.1, 1] }}
transition={{ duration: 2, repeat: Infinity }}
```

### Staggered Children
```tsx
variants={{
  container: {
    staggerChildren: 0.1,
  }
}}
```

### Spring Animation
```tsx
transition={{
  type: "spring",
  stiffness: 300,
  damping: 30
}}
```

## 📊 Animation Statistics

- **Total Global Keyframes**: 7
- **Total Framer Motion Variants**: 20+
- **Average Page Load Animations**: 5-8
- **Continuous Background Animations**: 3
- **Interactive Hover States**: 10+
- **Supported Browsers**: All modern (Chrome, Firefox, Safari, Edge)

## 🎓 Learning Resources

- [Tailwind Animation Docs](https://tailwindcss.com/docs/animation)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [CSS Animations MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [Web Animation Performance](https://web.dev/animations/)

## 🚀 Advanced Techniques

### Layout Animations
```tsx
layoutId="timeline-line"
initial={{ scaleY: 0 }}
animate={{ scaleY: 1 }}
```

### Gesture Animations
```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
whileInView={{ opacity: 1 }}
```

### Scroll-Triggered Animations
```tsx
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: true }}
```

---

**All animations are optimized for smooth 60fps performance across devices** ✨
