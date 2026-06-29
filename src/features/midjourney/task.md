# Midjourney Prompt Builder - Task Checklist

## Phase 1: Project Initialization

- [ ] **1.1** Initialize Next.js 14 with App Router and TypeScript
- [ ] **1.2** Install dependencies (zustand, lucide-react, clsx, tailwind-merge)
- [ ] **1.3** Install Shadcn UI (button, card, textarea, tooltip)
- [ ] **1.4** Configure Tailwind and create directory structure
- [ ] **1.5** Verify build

---

## Phase 2: Foundation and UI System Setup

- [ ] **2.1** Set up global types (artMedium, lighting, cameraLens, moodVibe)
- [ ] **2.2** Create Shadcn utility, fonts, dark mode layout
- [ ] **2.3** Create SelectableCard, WizardShell, Stepper (5 steps), WizardFooter

---

## Phase 3: Step Implementation

- [ ] **3.1** Create Zustand store with Midjourney selections
- [ ] **3.2** Create Step 1: Art Medium
  - Options: Photorealistic, 3D Render Unreal Engine, Anime, Watercolor, Flat Vector
  - Single selection, icons: Camera, Cuboid, Cat, Droplets, Layout
- [ ] **3.3** Create Step 2: Lighting
  - Options: Cinematic, Golden Hour, Studio Lighting, Cyberpunk Neon
  - Single selection, icons: Clapperboard, Sun, Lamp, Zap
- [ ] **3.4** Create Step 3: Camera and Lens
  - Options: Drone Shot, Macro Lens, Fisheye, 35mm Film
  - Single selection, icons: Drone, Search, Maximize2, Film
- [ ] **3.5** Create Step 4: Mood/Vibe
  - Options: Dramatic, Peaceful, Eerie, Cheerful
  - Single selection, icons: Theater, Mountain, Ghost, Smile
- [ ] **3.6** Create Step 5: Output Step with prompt display and copy
- [ ] **3.7** Create Step Content Router

---

## Phase 4: State Management and Logic

- [ ] **4.1** Create Dictionary for art styles, lighting, camera, mood parameters
- [ ] **4.2** Create Markdown Generator (Midjourney prompt with --ar 16:9, --v 6)
- [ ] **4.3** Connect Generator to Store
- [ ] **4.4** Implement Reset

---

## Phase 5: Markdown Generator Logic

- [ ] **5.1** Build subject description from art medium
- [ ] **5.2** Append lighting parameters
- [ ] **5.3** Append camera/lens specifications
- [ ] **5.4** Append mood/atmosphere descriptors
- [ ] **5.5** Add Midjourney parameters (--ar, --v, --s, --style)
- [ ] **5.6** Implement Copy to Clipboard

---

## Phase 6: Final Polish

- [ ] **6.1** Loading States, Transitions, Keyboard Navigation
- [ ] **6.2** Error Boundaries, Mobile Responsiveness
- [ ] **6.3** Lint, Typecheck, Test full flow
- [ ] **6.4** Build Production Bundle

---

## Phase 7: Documentation

- [ ] **7.1** README for Midjourney Prompt Builder
- [ ] **7.2** Final review of all docs
