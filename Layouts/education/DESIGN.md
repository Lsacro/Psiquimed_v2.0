---
name: Serene Professionalism
colors:
  surface: '#f9f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f9f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f5'
  surface-container: '#edeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e4'
  on-surface: '#1a1c1d'
  on-surface-variant: '#484553'
  inverse-surface: '#2f3132'
  inverse-on-surface: '#f0f0f2'
  outline: '#797584'
  outline-variant: '#cac4d5'
  surface-tint: '#6449c0'
  primary: '#23006b'
  on-primary: '#ffffff'
  primary-container: '#391494'
  on-primary-container: '#a48cff'
  inverse-primary: '#ccbeff'
  secondary: '#7d4b8c'
  on-secondary: '#ffffff'
  secondary-container: '#f0b4fe'
  on-secondary-container: '#724181'
  tertiary: '#340c43'
  on-tertiary: '#ffffff'
  tertiary-container: '#4c245a'
  on-tertiary-container: '#bd8cca'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e7deff'
  primary-fixed-dim: '#ccbeff'
  on-primary-fixed: '#1e0060'
  on-primary-fixed-variant: '#4c2ea6'
  secondary-fixed: '#fad7ff'
  secondary-fixed-dim: '#edb2fb'
  on-secondary-fixed: '#330143'
  on-secondary-fixed-variant: '#633372'
  tertiary-fixed: '#fad7ff'
  tertiary-fixed-dim: '#e8b5f5'
  on-tertiary-fixed: '#30073e'
  on-tertiary-fixed-variant: '#60366d'
  background: '#f9f9fb'
  on-background: '#1a1c1d'
  surface-variant: '#e2e2e4'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style
The design system is anchored in the concept of "Guided Calm." It targets individuals seeking mental wellness and professional psychiatric care, necessitating a visual language that balances clinical authority with empathetic warmth. 

The aesthetic follows a **Modern Corporate** approach with **Minimalist** influences. It prioritizes clarity and whitespace to reduce cognitive load for users who may be in distress. The use of deep purples establishes a sense of wisdom and expertise, while the softer lavender and pink accents introduce a human-centric, approachable touch. The interface should feel spacious, organized, and intentional, avoiding clutter to evoke an immediate sense of relief and trust.

## Colors
The palette for this design system utilizes color psychology to bridge the gap between medical professionalism and emotional accessibility. 

- **Primary (#391494):** Used for headlines, primary navigation, and high-importance UI elements to signal stability and authority.
- **Secondary & Light Purple (#B67FC4, #D2A0DF):** Applied to secondary actions, hover states, and illustrative backgrounds to soften the clinical edge.
- **Accent Pink (#F89DE7):** Reserved for highlights, emotional cues, and specific interactive elements that require high visibility without being aggressive.
- **Surface Neutrals:** A background of off-white (#F9F9FB) is preferred over pure white to reduce screen glare and provide a "softer" canvas.

## Typography
The design system employs **Manrope** for its unique balance of geometric precision and organic warmth. This typeface ensures that even complex medical information remains legible and non-intimidating. 

Headlines use a tighter letter-spacing and heavier weights to command attention, while body text utilizes a generous line-height (1.6) to facilitate easy reading of therapeutic articles. **Inter** is used for functional labels and micro-copy to ensure maximum clarity at small sizes, maintaining a systematic and organized feel throughout the user journey.

## Layout & Spacing
The layout philosophy is built on a **Fixed Grid** system for desktop (12 columns) and a fluid flexible grid for mobile. This design system relies on a strict 8px rhythm to ensure vertical harmony.

Ample whitespace (using 'xl' spacing between sections) is mandatory to prevent the "claustrophobic" feeling often found in legacy healthcare portals. Containers are centered with a maximum width of 1200px to keep line lengths readable and content focused. Components like cards should use 'md' (24px) padding to feel airy and premium.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Ambient Shadows**. This design system avoids harsh blacks in its shadows, instead using low-opacity tints of the primary purple (#391494) to create "Indigo Shadows."

- **Level 1 (Cards/Inputs):** A subtle 2px blur with 5% opacity primary-tinted shadow.
- **Level 2 (Dropdowns/Hover States):** A 10px blur with 8% opacity.
- **Level 3 (Modals/Hero Elements):** A 30px blur with 12% opacity.

The hero carousel may utilize a very subtle **Glassmorphism** effect on text overlays—using a 10px backdrop blur and a semi-transparent white fill—to maintain legibility over photography without fully obscuring the imagery.

## Shapes
The design system adopts a **Rounded** shape language. Sharp corners are avoided to reduce visual tension, while overly "bubbly" or pill-shaped elements are limited to specific actions to maintain professional gravity.

Standard components like cards and input fields use a 0.5rem (8px) radius. Larger containers, such as hero banners and article featured images, utilize the `rounded-xl` (1.5rem / 24px) setting to create a soft, framing effect that feels modern and welcoming.

## Components

### Buttons
- **Primary:** Solid #391494 with white text. High contrast for main CTAs.
- **Secondary:** Outlined with #B67FC4 or soft Lavender backgrounds.
- **WhatsApp Button:** A specialized "Action Button" using a vibrant green gradient but maintaining the design system’s typography and `rounded-lg` corners. It should be positioned as a floating action button (FAB) or a prominent footer CTA with a distinctive icon.

### Cards
- **Doctor Cards:** Feature a high-quality portrait with a subtle `rounded-xl` crop. Name in `headline-md`, specialty in `label-caps` using the Accent Pink color.
- **Service Cards:** Minimalist icons using the Light Purple (#D2A0DF) palette, accompanied by short, centered descriptions.
- **Article Cards:** Horizontal or vertical layouts with a 16:9 image ratio. Includes a "Read Time" tag using the Secondary Purple color.

### Hero Carousel
The carousel should utilize high-resolution, "lifestyle" photography of serene environments or smiling professionals. Text should be left-aligned on a semi-transparent "glass" panel or a soft gradient overlay that fades from #391494 (at 60% opacity) to transparent, ensuring the `headline-xl` text remains the focal point.

### Input Fields & Controls
Text inputs use a light grey border that transitions to the Primary Purple on focus. Error states should use a muted coral rather than a bright red to keep the emotional tone regulated.