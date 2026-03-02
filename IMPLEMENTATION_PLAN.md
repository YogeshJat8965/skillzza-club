# SKILLZZA K-12 Studio Programme — Frontend Implementation Plan

## 📋 Overview
Build a modern, animated, single-page React + Tailwind CSS frontend for the **Skillzza K-12 Studio Programme** website. All content is sourced **exclusively** from the SKILLZZA club.pdf. The design will be premium, smooth, and visually rich with real Unsplash images.

---

## 🎨 Design System

### Color Palette
| Role | Color | Hex |
|------|-------|-----|
| **Primary** | Purple | `#976EDF` |
| **Secondary** | Light Lavender | `#D8D4FD` |
| Primary Dark | Deep Purple | `#7C4DCC` |
| Primary Light | Soft Purple | `#B89AEF` |
| Accent | Warm Amber | `#F59E0B` |
| Background Light | Off-white Lavender | `#F5F3FF` |
| Background Dark | Deep Indigo | `#1E1145` |
| Text Primary | Dark Charcoal | `#1F2937` |
| Text Secondary | Slate Gray | `#6B7280` |
| White | Pure White | `#FFFFFF` |
| Success | Green | `#10B981` |

### Typography
- **Font Family:** `Inter` (Google Fonts) — clean, modern, professional
- **Headings:** Bold/ExtraBold, large sizing with gradient text effects
- **Body:** Regular/Medium weight, comfortable line-height

### Design Principles
- Glassmorphism cards with backdrop blur
- Gradient backgrounds (purple → indigo transitions)
- Smooth scroll behavior
- Generous whitespace
- Card-based layouts with hover elevations
- Rounded corners (lg/xl/2xl)
- Subtle shadows that deepen on hover

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** (Vite) | UI Framework |
| **Tailwind CSS 3** | Utility-first styling |
| **Framer Motion** | Scroll animations, transitions, hover effects |
| **React Icons** | Icon library (Heroicons, FontAwesome) |
| **React Scroll** | Smooth scrolling navigation |
| **AOS** (optional backup) | Animate on Scroll |
| **Lucide React** | Modern icon set |

---

## 📁 Project Structure

```
skillzza-club/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── images/          (placeholder for any local assets)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Challenge.jsx
│   │   ├── StudioCategories.jsx
│   │   ├── StudioModel.jsx
│   │   ├── ImplementationFramework.jsx
│   │   ├── ImpactMeasurement.jsx
│   │   ├── AnnualStudioFest.jsx
│   │   ├── DomainsSection.jsx
│   │   ├── Partnerships.jsx
│   │   ├── Footer.jsx
│   │   └── ui/
│   │       ├── SectionTitle.jsx
│   │       ├── CheckItem.jsx
│   │       ├── GradientButton.jsx
│   │       ├── StudioCard.jsx
│   │       ├── StatCard.jsx
│   │       └── AnimatedCounter.jsx
│   ├── data/
│   │   └── content.js        (all PDF content as structured data)
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── IMPLEMENTATION_PLAN.md
```

---

## 🖼 Image Strategy (Unsplash Real Images)

Each studio category and section will use **high-quality Unsplash images** via direct URLs. Here's the mapping:

| Studio / Section | Image Description | Unsplash Search Term |
|-----------------|-------------------|---------------------|
| 🤖 AI & Deep Tech | AI neural networks, futuristic tech | `artificial-intelligence-technology` |
| ⚙️ Robotics & Engineering | Robot arms, engineering lab | `robotics-engineering` |
| 💼 Entrepreneurship & Leadership | Business meeting, startup | `entrepreneurship-startup` |
| 🌱 Sustainability & Climate | Green earth, solar panels | `sustainability-climate` |
| 💰 Financial Literacy | Finance charts, coins | `financial-literacy-money` |
| 🔗 Blockchain & FinTech | Blockchain visuals, crypto | `blockchain-technology` |
| 📰 Media & Journalism | Newsroom, camera, journalism | `journalism-media` |
| 🌍 Global Affairs & Diplomacy | World map, UN assembly | `global-diplomacy` |
| ⚖️ Law & Cyber Security | Gavel, cybersecurity | `cybersecurity-law` |
| 🎮 Animation & Game Design | Game controllers, 3D design | `game-design-animation` |
| 🎨 Creative Arts | Painting, art studio | `creative-arts-painting` |
| 🪔 Indian Heritage | Indian culture, temples, diya | `indian-heritage-culture` |
| 🤝 Social Impact | Community help, volunteering | `social-impact-community` |
| 🧘 Mindfulness & Life Skills | Meditation, yoga, calm | `mindfulness-meditation` |
| 🚀 Space & Astronomy | Rocket launch, galaxies | `space-astronomy-rocket` |
| Hero Background | Students learning, school tech | `students-technology-learning` |
| Challenge Section | Classroom, skill gap | `education-classroom` |
| Studio Fest | School exhibition, science fair | `science-fair-exhibition` |
| Partnerships | Handshake, collaboration | `business-partnership-handshake` |

**Image Format:** `https://images.unsplash.com/photo-XXXXX?w=800&q=80`
We'll use carefully selected specific Unsplash image IDs for best quality.

---

## 📐 Section-by-Section Implementation Plan

### SECTION 1: Navbar (`Navbar.jsx`)
**Content from PDF:**
> Skillzza Logo | Studios | Implementation | Impact Framework | Book a Discovery Call | Download Brochure

**Design:**
- Fixed/sticky top navbar with backdrop blur (`backdrop-blur-md`)
- Transparent initially, turns solid white/purple on scroll
- Skillzza logo (text-based with gradient) on left
- Navigation links center: Studios, Implementation, Impact Framework
- Right side: "Book a Discovery Call" (outlined btn), "Download Brochure" (solid gradient btn)
- Mobile: Hamburger menu with slide-in drawer (animated with Framer Motion)
- Smooth scroll to sections on click

**Animations:**
- Navbar background transition on scroll (transparent → glass)
- Links hover: underline slide-in from left
- Mobile menu: slide from right with stagger children
- Logo subtle pulse on load

---

### SECTION 2: Hero (`Hero.jsx`)
**Content from PDF:**
> **Heading:** "The Future-Ready Studio Ecosystem for Progressive Schools"
> **Subheading:** "From Exploration to Expertise — A Structured Skill Development Engine for K-12"
> **Description:** "Skillzza K-12 Studio Programme transforms traditional school clubs into measurable, mentored, portfolio-driven learning ecosystems. Through 15 future-ready studios across AI, Robotics, Entrepreneurship, Sustainability, Finance, Media, Law, Space, and more — schools choose any 3 studios per academic year to build depth, not distraction."
> **Checklist:**
> - Structured weekly studio curriculum
> - Real-world projects & applied learning
> - Measurable skill assessment framework
> - Digital student portfolio creation
> - Career pathway alignment
> **CTAs:** "Choose Your 3 Studios" | "Explore Studio Catalogue"

**Design:**
- Full viewport height (100vh)
- Split layout: Left = text content (60%), Right = hero image/visual (40%)
- Background: gradient from `#1E1145` (deep indigo) to `#976EDF` with subtle mesh/grain pattern
- Floating animated purple orbs/blobs in background (CSS animation)
- Hero image: collage/mockup of students + tech overlaid with glass card
- Checklist items with animated check icons (stagger reveal)
- Two CTA buttons: Primary gradient btn + Secondary outlined btn

**Animations:**
- Text: Fade up + slide from left, staggered (title → subtitle → description → checklist → buttons)
- Right image: Fade in from right with slight scale
- Background blobs: Infinite slow float animation
- Checklist checkmarks: Pop-in one by one with delay
- Parallax slight movement on scroll

---

### SECTION 3: The Challenge (`Challenge.jsx`)
**Content from PDF:**
> **Label:** "THE CHALLENGE"
> **Heading:** "Schools Need Structured Skill Development"
> **Stats/Pain Points:**
> - Skill Gaps in K-12 Education
> - Limited Career Alignment in School Activities
> - Low Measurable Skill Tracking
> - Minimal Real-World Application Exposure
> - High Demand for Future Skills Integration

**Design:**
- Light background (`#F5F3FF`)
- Section label in small uppercase purple tag
- Large bold heading centered
- 5 stat cards in a responsive grid (2-3 columns)
- Each card: icon + stat percentage (animated counter) + description
- Cards have glass effect with purple border accent
- Visual data representation (progress bars or radial charts, CSS-only)

**Stats to display (visual representation as noted in PDF):**
| Pain Point | Visual % | Color |
|-----------|---------|-------|
| Skill Gaps in K-12 Education | 87% | Red-orange |
| Limited Career Alignment | 72% | Amber |
| Low Measurable Skill Tracking | 68% | Yellow |
| Minimal Real-World Application | 81% | Orange |
| High Demand for Future Skills | 94% | Green |

**Animations:**
- Section label: Fade in
- Heading: Fade up
- Stat cards: Stagger from bottom, each with 0.15s delay
- Percentage counters: Animated count-up from 0 on scroll into view
- Progress bars: Animated fill from left
- Cards: Hover lift with shadow deepening

---

### SECTION 4: Studio Categories (`StudioCategories.jsx`)
**Content from PDF:**
> **Label:** "SKILLZZA K-12 STUDIO PROGRAMME"
> **Heading:** "1. The Future Studios Categories"
> **Subheading:** "15 Future-Ready Studios spanning STEM, Humanities, Creative Arts & Life Skills"
> **15 Studios:**
> 🤖 AI & Deep Tech | ⚙️ Robotics & Engineering | 💼 Entrepreneurship & Leadership | 🌱 Sustainability & Climate | 💰 Financial Literacy | 🔗 Blockchain & FinTech | 📰 Media & Journalism | 🌍 Global Affairs & Diplomacy | ⚖️ Law & Cyber Security | 🎮 Animation & Game Design | 🎨 Creative Arts | 🪔 Indian Heritage | 🤝 Social Impact | 🧘 Mindfulness & Life Skills | 🚀 Space & Astronomy
> **CTA:** "View Full Studio Details"

**Design:**
- Dark background section (`#1E1145` deep indigo) for contrast
- 15 studio cards in a responsive grid (3 cols desktop, 2 tablet, 1 mobile)
- Each card:
  - Real Unsplash image as background (with dark overlay gradient)
  - Emoji icon in a floating badge
  - Studio name in bold white
  - Subtle category tag (STEM / Humanities / Creative / Life Skills)
  - Hover: image zooms slightly, overlay lightens, card lifts
- CTA button centered below grid

**Animations:**
- Cards: Staggered fade-up on scroll (3 at a time per row)
- Card hover: Scale image (1.05), lift card, glow border
- Emoji badges: Subtle bounce on hover
- Background: Subtle animated gradient shift

---

### SECTION 5: 3-Studio-Per-Year Model (`StudioModel.jsx`)
**Content from PDF:**
> **Heading:** "2. The 3-Studio-Per-Year Model"
> **Subheading:** "Focused Depth. Measurable Impact."
> **Checklist:**
> - Schools select exactly 3 studios per academic year
> - Term-based, semester-based, or parallel-track deployment
> - Balanced domain mix across STEM, Humanities & Life Skills
> - Future-skills integration built into every academic year
> - Structured showcase and evaluation framework
> **CTAs:** "Design Your Studio Mix" | "Schedule Discovery Session"
> **Visual:** Academic year roadmap graphic

**Design:**
- Light background with subtle purple gradient accent
- Two-column layout: Left = visual roadmap, Right = text content
- Roadmap visual: CSS/SVG timeline showing 3 studios across an academic year
  - 3 connected nodes on a vertical/horizontal timeline
  - Each node = a studio with icon + name
  - Lines connecting them with animated dash pattern
- Checklist with green check icons
- Two CTA buttons

**Animations:**
- Timeline: Draw-in animation (SVG path drawing on scroll)
- Nodes: Pop in sequentially
- Text: Fade from right
- Checkmarks: Stagger pop
- CTAs: Slide up with fade

---

### SECTION 6: Implementation Framework (`ImplementationFramework.jsx`)
**Content from PDF:**
> **Heading:** "3. Structured Implementation Framework"
> **Subheading:** "Plug-and-Play. School-Led. Scalable."
> **Checklist:**
> - Hybrid-ready delivery (in-person / virtual / blended)
> - Studio Facilitator + School Champion model
> - Ready-to-run session plans & facilitator guides
> - Student workbooks & assessment rubrics
> - Parent integration & showcase participation
> **CTA:** "See Implementation Plan"
> **Visual:** Implementation cycle diagram

**Design:**
- Medium purple gradient background
- Center-aligned content
- Implementation cycle: Circular/wheel diagram with 5 spokes
  - Each spoke = one checklist item
  - Center = "Implementation Framework" label
  - CSS-only or SVG animated wheel
- Below wheel: checklist in cards
- CTA button

**Animations:**
- Wheel: Rotate in on scroll, spokes extend outward
- Cards: Stagger from bottom
- Hover on wheel segments: highlight + tooltip
- Background: Subtle floating particles (CSS)

---

### SECTION 7: Impact Measurement (`ImpactMeasurement.jsx`)
**Content from PDF:**
> **Heading:** "4. Impact Measurement Framework"
> **Subheading:** "Evidence Over Certificates."
> **Description:** "Skillzza tracks measurable growth across:"
> **Metrics:**
> - Knowledge & Concept Mastery
> - Skill Application & Project Completion
> - Creativity & Innovation
> - Confidence & Mindset Development
> - School-Level Impact Metrics
> - Digital portfolio documentation
> - Structured mid-year & annual showcase
> - Performance reporting dashboards
> **Visual:** Sample student portfolio dashboard

**Design:**
- Light background
- Left side: text + metrics list
- Right side: Mock dashboard UI (styled card showing):
  - Student name & avatar
  - Skill progress bars (AI: 85%, Robotics: 72%, etc.)
  - Project completion badges
  - Innovation score radial
- Metrics displayed as icon + text pairs in 2-column grid
- Dashboard card with glass effect and subtle animations

**Animations:**
- Dashboard: Slide in from right with fade
- Progress bars inside dashboard: Animated fill on scroll
- Metric items: Stagger fade-in from left
- Dashboard hover: Subtle 3D tilt (perspective transform)

---

### SECTION 8: Annual Studio Fest (`AnnualStudioFest.jsx`)
**Content from PDF:**
> **Heading:** "5. Annual Studio Fest"
> **Subheading:** "Showcase. Celebrate. Recognize."
> **List:**
> - Year-end studio exhibitions
> - Capstone presentations
> - Robotics demos & AI prototypes
> - Startup pitch competitions
> - Cultural & media showcases
> **Tagline:** "A structured celebration of student innovation and applied learning."

**Design:**
- Dark background with festive/celebration feel
- Background: Real image of a science fair/exhibition with dark overlay
- Content centered over the image
- Feature cards (5) arranged as horizontal scroll on mobile, grid on desktop
- Each card: Icon + title + brief visual
- Confetti or sparkle effect subtle in background
- Tagline in large italic/serif font at bottom

**Animations:**
- Background image: Ken Burns slow zoom effect
- Cards: Flip or slide in from different directions
- Sparkle particles: Subtle CSS animation
- Text: Typewriter effect for tagline (optional) or fade-in

---

### SECTION 9: Domains / Elevate Section (`DomainsSection.jsx`)
**Content from PDF:**
> **Heading:** "Elevate Your Institution with Structured Studio Learning"
> **Label:** "Our Domains"
> **Domains:**
> 🧠 Artificial Intelligence & Robotics
> 💼 Entrepreneurship & Business Intelligence
> 🌱 Sustainability & Climate Leadership
> 💰 Financial & Economic Literacy
> 🌍 Global Affairs & Policy
> 🎥 Creative & Digital Media
> 🚀 Space Sciences & Innovation

**Design:**
- Purple gradient background (light to medium)
- Large heading centered
- 7 domain cards in a horizontal scrollable strip or grid
- Each card: Large icon/emoji + domain name + decorative underline
- Cards have glass morphism effect
- Accent lines/decorations

**Animations:**
- Heading: Fade up with letter-by-letter reveal
- Cards: Stagger slide-up
- Card hover: Scale up + glow + border color shift
- Background gradient: Slow animated shift

---

### SECTION 10: Partnerships (`Partnerships.jsx`)
**Content from PDF:**
> **Label:** "THE COLLABORATION"
> **Heading:** "Partnerships for Transformational Learning"
> **CTA:** "Partner With Us"

**Design:**
- Clean, minimal section
- Background: Real image of business handshake/collaboration with purple overlay
- Centered text on overlay
- Large bold heading
- Single prominent CTA button (white with purple text)
- Decorative border/frame around content

**Animations:**
- Background image: Parallax scroll
- Text: Fade in with scale from 0.9 to 1
- Button: Pulse/glow animation
- On hover: Button expands with arrow sliding in

---

### SECTION 11: Footer (`Footer.jsx`)
**Content from PDF:**
> **Tagline:** "Empowering the Next Generation of AI Thinkers."
> **India Office:** WeWork India, Chromium, CTS No. 106/1-5, JPLR Road, Milind Nagar, Powai, Mumbai – 400076.
> **Our Presence:** Mumbai | Thane | Raipur | Delhi NCR | UK | UAE
> **Contact Us:** +91 9136961978

**Design:**
- Dark background (`#1E1145`)
- Three columns:
  - Col 1: Skillzza logo + tagline
  - Col 2: India Office address + Our Presence cities
  - Col 3: Contact info + social media icons (placeholder)
- Horizontal divider line
- Bottom bar: Copyright © 2026 Skillzza. All rights reserved.
- Presence cities as subtle pill/tag badges

**Animations:**
- Fade in on scroll
- Links hover: Color shift to primary purple
- City badges: Subtle slide-in stagger

---

## ⚡ Animation & Effects Strategy

### Global Animations (Framer Motion)
| Animation | Trigger | Elements |
|-----------|---------|----------|
| Fade Up | Scroll into view | All section headings, text blocks |
| Stagger Children | Scroll into view | Card grids, checklist items |
| Scale In | Scroll into view | Icons, badges, images |
| Slide From Left/Right | Scroll into view | Split layout sections |
| Counter Animation | Scroll into view | Statistics numbers |
| Parallax | Scroll | Background images, floating elements |
| Hover Lift | Mouse hover | Cards, buttons |
| Hover Glow | Mouse hover | CTA buttons, feature cards |
| Background Gradient | Continuous | Hero, dark sections |
| Floating Blobs | Continuous | Hero background decorations |

### Framer Motion Variants
```js
// Fade Up
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// Stagger Container
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

// Scale In
const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// Slide From Left
const slideFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};

// Slide From Right
const slideFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};
```

### CSS Animations
```css
/* Floating blob animation */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(5deg); }
  66% { transform: translateY(10px) rotate(-3deg); }
}

/* Gradient background shift */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Glow pulse for buttons */
@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 20px rgba(151, 110, 223, 0.3); }
  50% { box-shadow: 0 0 40px rgba(151, 110, 223, 0.6); }
}

/* Progress bar fill */
@keyframes fillBar {
  from { width: 0%; }
  to { width: var(--target-width); }
}
```

---

## 🖼 Specific Unsplash Image URLs (Pre-selected, High Quality)

```js
const images = {
  hero: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",       // Students collaborating with tech
  aiDeepTech: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",  // AI neural network visual
  robotics: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=600&q=80",       // Robot arm engineering
  entrepreneurship: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80", // Business startup meeting
  sustainability: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=600&q=80", // Green nature sustainability
  finance: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",         // Financial charts
  blockchain: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80",   // Blockchain technology
  media: "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=600&q=80",        // Media journalism
  globalAffairs: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&q=80", // Globe diplomacy
  lawCyber: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",        // Cybersecurity
  animation: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80",    // Gaming setup
  creativeArts: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80", // Art painting
  indianHeritage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80", // Taj Mahal / Indian culture
  socialImpact: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",    // Community volunteering
  mindfulness: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",  // Meditation calm
  space: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",        // Space galaxy
  challenge: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",    // Education classroom
  studioFest: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",   // Exhibition/conference
  partnership: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",   // Handshake partnership
  implementation: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80", // Team planning
};
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|-----------|-------|----------------|
| Mobile | < 640px | Single column, hamburger nav, stacked cards |
| Tablet | 640-1024px | 2-column grids, condensed nav |
| Desktop | 1024-1280px | Full layout, 3-column grids |
| Large | > 1280px | Max-width container (1280px), centered |

---

## 🔧 Implementation Order

### Phase 1: Foundation
1. Initialize Vite + React project
2. Install dependencies (tailwindcss, framer-motion, react-icons, react-scroll, lucide-react)
3. Configure Tailwind with custom colors, fonts, animations
4. Setup global CSS (Inter font, smooth scroll, custom animations)
5. Create `content.js` data file with ALL PDF content

### Phase 2: Core Components (Top to Bottom)
6. Build reusable UI components (SectionTitle, CheckItem, GradientButton, StudioCard, StatCard)
7. Navbar.jsx
8. Hero.jsx
9. Challenge.jsx
10. StudioCategories.jsx
11. StudioModel.jsx
12. ImplementationFramework.jsx
13. ImpactMeasurement.jsx
14. AnnualStudioFest.jsx
15. DomainsSection.jsx
16. Partnerships.jsx
17. Footer.jsx

### Phase 3: Polish
18. Add all Framer Motion scroll animations
19. Responsive testing & fixes
20. Performance optimization (lazy loading images)
21. Final review & adjustments

---

## ✅ Content Verification Checklist

Every piece of text below MUST appear on the final website (from PDF):

- [x] "The Future-Ready Studio Ecosystem for Progressive Schools"
- [x] "From Exploration to Expertise — A Structured Skill Development Engine for K-12"
- [x] Full description paragraph about 15 studios
- [x] All 5 hero checklist items
- [x] "Choose Your 3 Studios" & "Explore Studio Catalogue" buttons
- [x] "THE CHALLENGE" label
- [x] "Schools Need Structured Skill Development"
- [x] All 5 challenge bullet points
- [x] "SKILLZZA K-12 STUDIO PROGRAMME" label
- [x] "The Future Studios Categories" heading
- [x] "15 Future-Ready Studios spanning STEM, Humanities, Creative Arts & Life Skills"
- [x] All 15 studio names with emojis
- [x] "View Full Studio Details" button
- [x] "The 3-Studio-Per-Year Model" heading
- [x] "Focused Depth. Measurable Impact."
- [x] All 5 studio model checklist items
- [x] "Design Your Studio Mix" & "Schedule Discovery Session" buttons
- [x] "Structured Implementation Framework" heading
- [x] "Plug-and-Play. School-Led. Scalable."
- [x] All 5 implementation checklist items
- [x] "See Implementation Plan" button
- [x] "Impact Measurement Framework" heading
- [x] "Evidence Over Certificates."
- [x] "Skillzza tracks measurable growth across:"
- [x] All 8 impact metrics
- [x] "Annual Studio Fest" heading
- [x] "Showcase. Celebrate. Recognize."
- [x] All 5 fest items
- [x] "A structured celebration of student innovation and applied learning."
- [x] "Elevate Your Institution with Structured Studio Learning"
- [x] "Our Domains" label
- [x] All 7 domain items
- [x] "THE COLLABORATION" label
- [x] "Partnerships for Transformational Learning"
- [x] "Partner With Us" button
- [x] "Empowering the Next Generation of AI Thinkers."
- [x] India Office full address
- [x] All 6 presence locations
- [x] Contact number: +91 9136961978
- [x] "Download Brochure" nav item
- [x] "Book a Discovery Call" nav item

---

## 📊 Estimated Component Complexity

| Component | Complexity | Lines (est.) |
|-----------|-----------|-------------|
| Navbar | Medium | ~120 |
| Hero | High | ~180 |
| Challenge | Medium | ~150 |
| StudioCategories | High | ~200 |
| StudioModel | Medium | ~160 |
| ImplementationFramework | Medium | ~150 |
| ImpactMeasurement | High | ~180 |
| AnnualStudioFest | Medium | ~140 |
| DomainsSection | Medium | ~120 |
| Partnerships | Low | ~80 |
| Footer | Low | ~100 |
| UI Components (6) | Low each | ~300 total |
| Data/Content file | Low | ~200 |
| App.jsx + Config | Low | ~100 |
| **TOTAL** | | **~2,080** |

---

## 🎯 Quality Goals
1. **Content Accuracy:** 100% match with PDF — zero deviations
2. **Visual Quality:** Modern, premium, comparable to top EdTech websites
3. **Animation Smoothness:** 60fps, no jank, purposeful motion
4. **Responsiveness:** Perfect on mobile, tablet, desktop
5. **Image Quality:** Real, relevant, high-resolution Unsplash images
6. **Code Quality:** Clean, component-based, well-organized
7. **Performance:** Fast load, lazy images, optimized bundle

---

*This plan covers every section, every piece of content, every design decision, every animation, and every image required to build the SKILLZZA K-12 Studio Programme frontend exactly as specified in the PDF.*
