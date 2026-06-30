"use client";

import type { FC } from "react";
import {
  FileText, Lightbulb, Layers, Eye, Hash, User, Zap, Globe,
  Type, Shield, Users, RefreshCw, Diamond, BookOpen, Pen, Code,
  Sliders, Columns2, Triangle, RotateCcw, Heart, Leaf, Cog, Star,
  Expand, Minimize, Palette, Ban, Image, LayoutGrid, MapPin,
  Circle, CircleDot, Paintbrush, Box, Hexagon, Sparkles, Sun,
  Briefcase, CreditCard, Share2, ExternalLink, Shirt, Monitor, Mail, Package, TextInitial,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";
import { translateToId } from "@/utils/tool-translations";

const options = {
  nameStyle: [
    { id: "descriptive", title: "Descriptive", description: "Name that clearly describes what the brand does", icon: FileText },
    { id: "invented", title: "Invented", description: "Completely made-up word with no prior meaning", icon: Lightbulb },
    { id: "compound", title: "Compound", description: "Two or more words combined into one name", icon: Layers },
    { id: "abstract", title: "Abstract", description: "Non-literal name that evokes a concept or feeling", icon: Eye },
    { id: "acronym", title: "Acronym", titleId: "akronim", description: "Initials or abbreviation of a longer phrase", icon: Hash },
    { id: "founder", title: "Founder", description: "Named after the company founder or key person", icon: User },
    { id: "evocative", title: "Evocative", description: "Suggests a mood, emotion, or sensory experience", icon: Zap },
    { id: "geographic", title: "Geographic", description: "Inspired by a location, region, or landmark", icon: Globe },
  ],
  logoType: [
    { id: "wordmark", title: "Wordmark", description: "Stylized text-based logo using the full brand name", icon: Type },
    { id: "lettermark", title: "Lettermark", description: "Logo built from initials or monogram letters", icon: TextInitial },
    { id: "emblem", title: "Emblem", description: "Icon enclosed within a shape or badge", icon: Shield },
    { id: "mascot", title: "Mascot", description: "Character-based logo that personifies the brand", icon: Users },
    { id: "abstract-mark", title: "Abstract Mark", description: "Non-representational geometric symbol", icon: Eye },
    { id: "combination-mark", title: "Combination Mark", description: "Icon and text combined in a unified logo", icon: Layers },
    { id: "dynamic-logo", title: "Dynamic Logo", description: "Logo that changes form across different contexts", icon: RefreshCw },
    { id: "monogram", title: "Monogram", description: "Elegant intertwined letters forming a decorative mark", icon: Diamond },
  ],
  colorPalette: [
    { id: "monochrome", title: "Monochrome", description: "Single hue with varying shades and tints", icon: Sliders },
    { id: "dual-tone", title: "Dual Tone", titleId: "dua-nada", description: "Two complementary or contrasting colors", icon: Columns2 },
    { id: "triadic", title: "Triadic", description: "Three evenly spaced colors on the color wheel", icon: Triangle },
    { id: "analogous", title: "Analogous", description: "Colors adjacent on the color wheel for harmony", icon: Layers },
    { id: "complementary", title: "Complementary", description: "Opposite colors creating high contrast", icon: RotateCcw },
    { id: "pastel", title: "Pastel", description: "Soft, muted, low-saturation color tones", icon: Heart },
    { id: "neon", title: "Neon", description: "Bright, fluorescent, high-energy colors", icon: Zap },
    { id: "earth-tones", title: "Earth Tones", description: "Natural, organic colors inspired by nature", icon: Leaf },
  ],
  typography: [
    { id: "sans-serif", title: "Sans-serif", description: "Clean, modern typeface without decorative strokes", icon: Type },
    { id: "serif", title: "Serif", description: "Classic typeface with small decorative strokes", icon: BookOpen },
    { id: "slab-serif", title: "Slab Serif", description: "Bold serif typeface with thick block-like serifs", icon: Layers },
    { id: "script", title: "Script", description: "Elegant handwritten or calligraphic typeface", icon: Pen },
    { id: "display", title: "Display", description: "Decorative typeface for headlines and short text", icon: Star },
    { id: "monospace", title: "Monospace", description: "Fixed-width typeface for technical or modern feel", icon: Code },
    { id: "custom", title: "Custom Typeface", description: "Bespoke commissioned typeface unique to the brand", icon: User },
    { id: "system", title: "System Font", description: "Native OS fonts for fast loading and reliability", icon: Cog },
  ],
  logoUsage: [
    { id: "clear-space", title: "Clear Space", description: "Minimum empty area required around the logo", icon: Expand },
    { id: "minimum-size", title: "Minimum Size", description: "Smallest allowable logo dimensions", icon: Minimize },
    { id: "color-variations", title: "Color Variations", description: "Approved color versions of the logo", icon: Palette },
    { id: "incorrect-usage", title: "Incorrect Usage", description: "Examples of what not to do with the logo", icon: Ban },
    { id: "backgrounds", title: "Backgrounds", description: "Acceptable background colors and textures", icon: Image },
    { id: "grayscale", title: "Grayscale", description: "Black-and-white and grayscale logo versions", icon: Sliders },
    { id: "pattern", title: "Pattern Usage", description: "Logo placement within repeating patterns", icon: LayoutGrid },
    { id: "placement", title: "Placement", description: "Logo position on various media and materials", icon: MapPin },
  ],
  iconography: [
    { id: "outline", title: "Outline", description: "Icons defined by strokes with transparent interiors", icon: Circle },
    { id: "filled", title: "Filled", description: "Solid shapes with no transparent areas", icon: CircleDot },
    { id: "duotone", title: "Duotone", description: "Two-color icons with layered transparency effects", icon: Columns2 },
    { id: "glyph", title: "Glyph", description: "Minimalist single-color symbolic icons", icon: Hash },
    { id: "illustrated", title: "Illustrated", description: "Detailed, artistic icon illustrations", icon: Paintbrush },
    { id: "3d", title: "3D", description: "Three-dimensional icons with depth and lighting", icon: Box },
    { id: "geometric", title: "Geometric", description: "Icons built from precise geometric shapes", icon: Hexagon },
    { id: "hand-drawn", title: "Hand-drawn", description: "Organic, sketch-like icons with imperfect lines", icon: Pen },
  ],
  brandVoice: [
    { id: "professional", title: "Professional", description: "Formal, polished, and business-appropriate tone", icon: Briefcase },
    { id: "friendly", title: "Friendly", description: "Warm, approachable, and conversational tone", icon: Heart },
    { id: "luxury", title: "Luxury", description: "Sophisticated, exclusive, and premium tone", icon: Diamond },
    { id: "playful", title: "Playful", description: "Fun, energetic, and light-hearted voice", icon: Sparkles },
    { id: "authoritative", title: "Authoritative", description: "Confident, expert, and commanding voice", icon: Shield },
    { id: "minimalist", title: "Minimalist", description: "Simple, clean, and understated communication", icon: Minimize },
    { id: "warm", title: "Warm", description: "Welcoming, empathetic, and human-centered tone", icon: Sun },
    { id: "technical", title: "Technical", description: "Precise, detail-oriented, and industry-specific language", icon: Code },
  ],
  applications: [
    { id: "business-cards", title: "Business Cards", description: "Logo application on standard business cards", icon: CreditCard },
    { id: "letterhead", title: "Letterhead", description: "Logo placement on stationery and documents", icon: FileText },
    { id: "social-media", title: "Social Media", description: "Logo adaptations for profile pictures and banners", icon: Share2 },
    { id: "signage", title: "Signage", description: "Logo usage on physical signs and wayfinding", icon: ExternalLink },
    { id: "merchandise", title: "Merchandise", description: "Logo on apparel, accessories, and promo items", icon: Shirt },
    { id: "digital-ads", title: "Digital Ads", description: "Logo in online advertising and banners", icon: Monitor },
    { id: "email", title: "Email", description: "Logo in email signatures and newsletter templates", icon: Mail },
    { id: "packaging", title: "Packaging", description: "Logo on product packaging and labels", icon: Package },
  ],
};

const dict: Record<string, Record<string, string>> = {
  nameStyle: {
    descriptive: "A descriptive brand name clearly communicates the product or service offered. It reduces cognitive load for customers by immediately conveying what the brand does. This approach works well for B2B companies, local services, and industries where clarity is paramount. Examples include American Airlines, General Motors, and International Business Machines. The name should be simple to spell, easy to remember, and unambiguous in meaning. Avoid overly generic terms that make differentiation difficult. Conduct trademark searches to ensure the descriptive term is legally protectable.",
    invented: "An invented brand name is a completely fabricated word with no prior meaning, giving the brand full ownership of the name's associations. These names are highly distinctive and trademark-friendly. Examples include Kodak, Xerox, Google, and Spotify. The name must be phonetically intuitive — easy to pronounce and spell after hearing it once. Consider how the name translates across languages and cultures. Invented names require significant marketing investment to build meaning. Test for unintended negative connotations in key markets. Ensure the domain name and social handles are available.",
    compound: "Compound names merge two or more existing words into a single brand name, combining familiar concepts to create new meaning. Examples include Microsoft (microcomputer + software), Facebook (face + book), and YouTube (you + tube). The resulting name should flow naturally when spoken and be visually balanced when written. Consider whether the compound reads as one seamless word or uses capitalization. Check that neither component word has negative associations. Compound names benefit from instant recognizability of their parts while being unique as a whole.",
    abstract: "Abstract brand names are non-literal words or phrases that evoke a concept, emotion, or quality rather than describing the product. Examples include Apple, Virgin, and Twitter. These names offer flexibility for brand expansion into new categories. Abstract names work best when paired with strong visual branding. They require storytelling to bridge the name to the brand meaning. Choose sounds and syllables that convey the desired brand feeling — hard consonants for strength, soft vowels for gentleness. Ensure the abstract concept resonates across target cultures.",
    acronym: "Acronym names use initials from a longer organizational name to create a shorter, more memorable identifier. Examples include IBM, BMW, KFC, and IKEA. Acronyms work well for companies with long formal names or those that have evolved beyond their original naming. When possible, ensure the acronym spells something pronounceable (like NATO or LASER) rather than requiring letter-by-letter recitation. Acronyms can lack emotional connection, so pair them with a compelling brand story. Consider whether the full name should remain in the brand's legal identity.",
    founder: "Founder names build brand identity around a real or imagined person, lending authenticity and personal accountability. Examples include Ford, Hewlett-Packard, Chanel, and McDonald's. This style creates an immediate human connection and storytelling opportunity. Consider using the founder's full name, last name only, or a nickname. Founder names work especially well in fashion, automotive, hospitality, and professional services. The name becomes intertwined with the founder's personal reputation, so succession planning is important for long-term brand continuity.",
    evocative: "Evocative brand names suggest a mood, sensory experience, or emotional state without directly describing the product. Examples include Amazon (evoking vastness), Shell (natural protection), and Greyhound (speed). These names create immediate mental imagery and emotional resonance. Choose words with rich sensory associations — visual, auditory, tactile, olfactory. Test the evoked associations in target markets, as imagery can vary culturally. Evocative names are powerful for lifestyle, luxury, and experience-based brands. They work best with visual branding that reinforces the same emotional territory.",
    geographic: "Geographic brand names draw inspiration from cities, regions, countries, or natural landmarks. Examples include Amazon (river), Montblanc (mountain), and AirbnB (bed and breakfast). Geographic names suggest heritage, authenticity, and rootedness. They can signal origin quality (Swiss chocolate, Italian leather). Consider both real and mythical locations. Geographic names may limit international appeal if the location has negative associations in some markets. They imply a story of place that can be leveraged in brand narrative. Ensure the geographic term is legally usable and not already protected.",
  },
  logoType: {
    wordmark: "A wordmark logo uses stylized typography of the full brand name as the primary visual identifier. The typography itself carries the brand personality — every curve, weight, and spacing matters. Choose a custom or carefully selected typeface that reflects the brand character. Kerning, tracking, and baseline alignment must be precise at all sizes. Wordmarks excel for brands with distinctive names that benefit from repetition. Test legibility at very small and very large sizes. Consider creating a custom wordmark that is uniquely ownable. Examples include Coca-Cola, Disney, Google, and FedEx.",
    lettermark: "A lettermark uses the brand's initials in a stylized arrangement, ideal for companies with long or multi-word names. The design focuses on two to four letters max for maximum impact. Letterforms should be carefully crafted for balance and visual harmony. Consider negative space, letter overlap, and geometric precision. Examples include IBM, NASA, HBO, and CNN. Lettermark works well when the initials are naturally memorable or spell something pronounceable. Ensure the letter arrangement is distinctive and not easily confused with other brands. Include the full name nearby on first introduction.",
    emblem: "An emblem logo encloses text and/or iconography within a defined shape — typically a circle, shield, crest, or badge. This classic format conveys tradition, authority, and institutional stability. Emblems work well for universities, government agencies, automotive brands, and sports teams. Examples include Starbucks, Harley-Davidson, and BMW. The enclosed format creates a self-contained visual unit that reads well as a stamp or seal. Emblems can be difficult to reproduce at small sizes, so create simplified versions for digital use. Ensure internal elements have sufficient contrast against the enclosing shape.",
    mascot: "A mascot logo uses a illustrated character to represent the brand, creating an approachable and memorable brand personality. The mascot can be human, animal, or a fantastical creature. Examples include KFC (Colonel Sanders), Michelin (Bibendum), and Pringles (Julius Pringle). Mascots excel at building emotional connections and are especially effective for family-oriented brands. The character should be distinctive in silhouette, versatile in pose, and adaptable to animation. Define the mascot's personality, backstory, and style guide parameters. Ensure it reflects the brand's core values and appeals to the target audience.",
    "abstract-mark": "An abstract mark is a non-representational geometric or organic symbol that becomes synonymous with the brand. Without literal meaning, the mark must be visually distinctive and memorable through shape, proportion, and movement. Examples include Nike (swoosh), Pepsi (globe), and Adidas (three stripes). Abstract marks offer maximum flexibility — they work across all media, languages, and cultures. The design should be simple enough to draw from memory but distinctive enough to identify instantly. Test the mark in silhouette, at tiny sizes, and in monochrome. Build meaning through consistent association over time.",
    "combination-mark": "A combination mark pairs a symbol or icon with text in a unified layout. The text and icon can be arranged horizontally, vertically, or stacked. Examples include McDonald's (arches + name), Lacoste (crocodile + name), and Doritos (triangle + name). Combination marks offer the best of both worlds — the icon drives recognition while the text ensures clarity. Define clear rules for how the two elements relate spatially. Create versions where the icon can stand alone once brand equity is established. Ensure the combined layout works at all required sizes and orientations.",
    "dynamic-logo": "A dynamic logo is not a single fixed mark but a flexible system that generates different visual outputs while maintaining brand coherence. Examples include Google Doodles, MTV's morphing logo, and Nordkyn's rotating geometric mark. Dynamic logos work best for brands in creative, technology, or entertainment fields where variability signals innovation. Define the system's rules and constraints clearly — what changes and what stays constant. The core brand recognition must survive through all variations. Implement through code, algorithmic generation, or modular component systems. Test across all applications for consistent brand feel despite visual variety.",
    monogram: "A monogram logo artistically intertwines two or more letters — typically the brand's initials — into a single decorative mark. This style evokes elegance, craftsmanship, and heritage. Examples include Louis Vuitton (LV overlapping), Chanel (double C), and Gucci (double G). Monograms work well for luxury, fashion, and premium service brands. The letterforms should be carefully crafted for balance, flow, and visual delight. Consider symmetry and whether the letters read clearly when combined. Monograms often work best as secondary marks alongside a primary logo. Ensure legibility at very small sizes through simplified versions.",
  },
  colorPalette: {
    monochrome: "A monochrome palette uses variations of a single hue across different lightness and saturation levels. This creates a sophisticated, cohesive, and instantly recognizable brand system. Start with one base color, then generate tints (lighter with white), shades (darker with black), and tones (muted with gray). Monochrome palettes excel at conveying minimalism, professionalism, and elegance. Ensure sufficient contrast between the lightest and darkest values for accessibility. Use the fullest range for primary applications and a subset for digital where contrast requirements are stricter. Examples include Apple (gray-scale), Spotify (green), and Tiffany & Co. (robin's egg blue).",
    "dual-tone": "A dual-tone palette uses two carefully chosen colors that balance each other — one typically dominant and one accent. The relationship between the two colors defines the brand energy. Complementary pairs (blue/orange, purple/gold) create dynamic tension, while analogous pairs (blue/teal) feel harmonious. Define which color leads for headlines, which for backgrounds, and which for CTAs. Ensure the pair works in both light and dark contexts. Test colorblind accessibility between the two tones. Examples include Coca-Cola (red + white), LinkedIn (blue + white), and Burger King (red + yellow).",
    triadic: "A triadic palette uses three colors evenly spaced (120 degrees apart) on the color wheel, creating vibrant and balanced brand systems. This scheme offers rich variety while maintaining color harmony. Choose one dominant color (60-70% usage), one secondary (20-30%), and one accent (5-10%). Examples include Google (blue, red, yellow, green — actually a tetrad), and many creative brands. Triadic palettes work well for brands targeting younger audiences or in creative industries. The high contrast keeps designs energetic but requires careful balance to avoid chaos. Test each color combination for accessibility compliance.",
    analogous: "An analogous palette uses 3-5 colors adjacent on the color wheel (typically spanning 30-60 degrees each), creating serene and harmonious brand visuals. This scheme naturally feels cohesive and pleasing to the eye. It works well for wellness, nature, and lifestyle brands. Pick a dominant hue and select neighboring colors on one or both sides. Ensure enough contrast between adjacent colors — avoid shades that are too similar. Use the full spectrum for large elements and tighter selection for small details. Examples include Animal Planet (greens and yellows) and many spa and organic product brands.",
    complementary: "A complementary palette pairs colors from opposite sides of the color wheel for maximum contrast and visual impact. This creates energetic, attention-grabbing brand systems. The direct opposition makes each color appear more vibrant. Use one color dominantly (70-80%) and the complementary color as an accent (20-30%) to avoid visual fatigue. Examples include Pepsi (blue + red), FedEx (purple + orange), and many sports brands. Complementary pairs work excellently for CTAs, highlights, and elements needing emphasis. Test carefully for accessibility — complementary pairs often create vibration effects that can be uncomfortable.",
    pastel: "A pastel palette uses soft, low-saturation colors with high lightness values, creating gentle and approachable brand aesthetics. Pastels convey gentleness, creativity, and modernity — popular in wellness, beauty, children's products, and lifestyle brands. Start with full-saturation color and add white to achieve the pastel version. Ensure pastel combinations maintain adequate contrast for text readability — light pastels on white backgrounds can fail accessibility. Pair pastels with a darker neutral (charcoal, navy) for text. Examples include Glossier, Airbnb (original palette), and many direct-to-consumer brands targeting millennial and Gen Z audiences.",
    neon: "A neon palette uses extremely bright, high-saturation colors that appear to glow — typically achieved with fluorescent pigments or high-brightness digital values. Neon conveys energy, youth, innovation, and nightlife. Use sparingly — neon as an accent (10-20% of composition) is more effective than as a dominant color. Neon works best in digital environments where screens can produce the glow effect. For print, require special fluorescent inks. Pair neon with dark backgrounds (black, deep navy) for maximum impact. Examples include Twitch (purple neon), 5 Gum, and many gaming and entertainment brands. Test for accessibility and visual comfort.",
    "earth-tones": "An earth-tone palette draws from natural materials — clay, stone, wood, soil, foliage, and mineral pigments. These colors convey authenticity, sustainability, grounding, and organic quality. The palette typically includes warm browns, terracottas, olive greens, slate grays, and ochre yellows. Earth tones work well for outdoor, food, wellness, and sustainable brands. They pair beautifully with natural textures and materials. Ensure the palette doesn't feel muddy — include one clean, light neutral for breathing room. Examples include Patagonia, REI, and many organic food brands. Source specific color values from natural references for authenticity.",
  },
  typography: {
    "sans-serif": "Sans-serif typefaces (without decorative strokes) are the most versatile choice for modern brand typography. They offer clean, legible letterforms that work exceptionally well across digital and print media. The category includes geometric (Futura, Circular), humanist (Helvetica Now, Frutiger), and grotesque (Univers, Trade Gothic) sub-styles. Sans-serif fonts excel for body text, UI elements, and signage due to their legibility at small sizes. Choose a variable font when possible for maximum design flexibility. Consider loading performance for web fonts. Pair with contrasting styles for headlines. Examples of brands using sans-serif include Google, Microsoft, Netflix, and Airbnb.",
    serif: "Serif typefaces feature small decorative strokes at the end of letterforms, conveying tradition, authority, and readability. They are the classic choice for print publishing and formal brand communications. Sub-categories include old-style (Garamond, Caslon), transitional (Times New Roman, Baskerville), and modern (Didot, Bodoni) serifs. Serifs excel for long-form reading in print but require careful sizing for screen use. Choose serifs with robust web font rendering. Pair a serif headline with a sans-serif body for contemporary contrast. Examples include Tiffany & Co., The New York Times, and Rolex. Ensure the selected serif has good italic and bold weights.",
    "slab-serif": "Slab serif typefaces have thick, block-like serifs that create a bold, confident, and often friendly brand presence. They bridge the gap between serif tradition and sans-serif modernity. Sub-styles include geometric (Rockwell, Archer), humanist (PMN Caecilia), and typewriter (Courier) variants. Slab serifs work well for headlines, posters, and branding where a strong voice is needed. The heavy serifs add weight and presence at large sizes. Pair slab serif headlines with lighter sans-serif body text. Examples include Sony, Honda, and Arhaus. Choose a slab serif with good hinting for screen rendering at smaller sizes.",
    script: "Script typefaces simulate handwriting or calligraphy, bringing elegance, personality, and human warmth to brand typography. Sub-categories include formal scripts (Zapfino, Edwardian Script), casual scripts (Caveat, Pacifico), and brush scripts (Billion Stars, Thirsty Script). Scripts are best reserved for logos, headlines, and short accent text — they become unreadable in long passages or small sizes. Ensure the script has multiple alternate characters for natural variation. Pair with a neutral sans-serif for body copy. Examples include Coca-Cola (Spencerian script), Instagram logo, and Cadillac. Use scripts sparingly for maximum impact.",
    display: "Display typefaces are designed for large-format use — headlines, posters, logos, and hero sections. They are highly expressive and often decorative, prioritizing personality over extended readability. The category includes fat faces, inline styles, stencil, outline, wood type revivals, and experimental forms. Display fonts should never be used for body copy or small sizes. Choose a display typeface that captures the brand's essence in a single glance. Limit usage to 1-2 display faces per brand system. Examples include Disney, Rolling Stone, and many entertainment brands. Ensure the display font supports the required character set.",
    monospace: "Monospace typefaces assign equal width to every character, creating a distinctive technical aesthetic rooted in typewriter and computer heritage. They convey precision, authenticity, and often a tech-forward brand identity. Classic examples include Courier, Consolas, and Fira Code. Monospace works well for technology brands, developer tools, coding platforms, and brands wanting a retro or utilitarian feel. The uniform spacing creates strong vertical rhythm and a unique texture. Pair monospace with proportional sans-serif for hierarchy. Examples include GitHub, Stack Overflow, and many developer-focused brands. Ensure good legibility by choosing fonts with clear differentiation between similar characters (Il1, O0).",
    custom: "A custom typeface is uniquely designed for the brand — the ultimate expression of typographic ownership. Custom fonts ensure no other brand has the same letterforms, creating complete visual distinctiveness. The process involves typeface design, extensive character set development (often 200+ characters), spacing and kerning refinement, and technical implementation across formats. Custom typefaces are a significant investment but provide unmatched brand differentiation. They optimize perfectly for the brand's specific use cases. Examples include Airbnb (Airbnb Cereal), Netflix (Netflix Sans), and Samsung (SamsungOne). Budget for both design and ongoing maintenance across platforms.",
    system: "System fonts leverage typefaces pre-installed on users' operating systems, eliminating loading time and ensuring consistent rendering. System font stacks adapt to each platform (San Francisco on Apple, Segoe on Windows, Roboto on Android). This approach prioritizes performance, reliability, and platform-native feel. System fonts are ideal for products where speed matters and for brands that want a utilitarian or no-nonsense identity. The trade-off is less typographic distinctiveness. Use font-weight and letter-spacing variations to add character. Examples include Medium, Basecamp, and many SaaS products. Test the stack across all target platforms for consistent appearance.",
  },
  logoUsage: {
    "clear-space": "Clear space is the minimum area of empty space required around the logo to ensure visibility and impact. It prevents visual clutter from competing elements. Define clear space as a multiple of the logo's height (e.g., X height). No other graphic elements, text, or images may intrude into this zone. The clear space applies to all logo versions and all applications. For lockups with text, measure clear space from the outermost element. Provide visual diagrams showing the exclusion zone. Stricter clear space may be needed for complex backgrounds. Include clear space specifications in all brand guideline documentation and template files.",
    "minimum-size": "The minimum size specification prevents the logo from being reproduced too small to read or recognize. Define separate minimum sizes for print (typically inches/mm) and digital (pixels). Complex logos have larger minimum sizes than simple wordmarks. Consider physical viewing distance — signage viewed from far away can be larger but needs minimum height. Provide minimum size for each logo variant (full color, monochrome, icon-only). Test minimum sizes in actual production environments. Digital minimums should account for retina/high-DPI displays. Specify what happens below minimum size (switch to simpler logo version or icon-only).",
    "color-variations": "Define all approved color versions of the logo to ensure consistent reproduction across media. Standard versions include full color (primary), monochrome black (for black-and-white print), monochrome white (for dark backgrounds), and single-color versions in each brand color. Specify exactly which logo version to use for light backgrounds, dark backgrounds, photographic backgrounds, and colored backgrounds. Provide digital files for each version in RGB, CMYK, and spot color formats. Clearly label which version is primary and which are alternates. For multicolor logos, ensure all color variations are tested for contrast and legibility.",
    "incorrect-usage": "Document explicit examples of incorrect logo usage to prevent brand dilution. Common violations include stretching or distorting the logo, changing colors, rotating or tilting, adding effects (shadows, gradients, outlines), placing on low-contrast backgrounds, rearranging lockup elements, and adding unauthorized text or graphics. Show each violation side-by-side with the correct usage for clarity. Use red X marks or DO NOT icons for emphasis. This section is critical for maintaining consistency when external partners or non-designers produce branded materials. Keep this section visual and scannable. Update as new misuse patterns emerge.",
    backgrounds: "Specify acceptable and unacceptable background treatments for logo placement. List approved background colors (including hex/CMYK values) that work with each logo version. Define minimum contrast ratios between the logo and any background. Provide guidance for photographic backgrounds — which areas of an image are suitable for logo placement. Specify logo versions to use on light vs. dark vs. patterned backgrounds. Include edge cases like gradients, textures, and busy imagery. For video and motion backgrounds, specify minimum frame brightness and complexity limits. Test all backgrounds in actual production conditions before finalizing guidelines.",
    grayscale: "Grayscale logo versions ensure the brand remains identifiable when color is unavailable (black-and-white print, faxes, newspaper ads, some merchandise). Provide fully desaturated grayscale versions — never simply convert the color logo to grayscale in software. Ensure contrast between logo elements remains distinct without color differentiation. Test grayscale versions at all sizes and on various paper stocks. Specify when to use grayscale vs. full color. For logos with multiple elements that rely on color for distinction (like overlapping shapes), redesign the grayscale version with adjusted tonal values to maintain separation.",
    pattern: "Pattern usage guidelines cover logo placement within repeating patterns, textile prints, and textured surfaces. Define minimum spacing between logo instances within a pattern. Specify acceptable scale relationships between the logo and pattern elements. Determine whether the logo should align with the pattern grid or float independently. For continuous patterns, define the repeat unit that includes the logo. Consider how the logo reads at different pattern scales. Test pattern applications on actual merchandise and materials. Provide digital pattern files with embedded logo placement guides. Include both seamless tile and non-repeating placement options.",
    placement: "Placement guidelines specify logo position across every brand application — print, digital, signage, packaging, and merchandise. Define standard positions (top-left, top-right, centered, bottom-centered) for each medium. Provide reference templates showing exact placement measurements. Consider common format variations (portrait vs. landscape, square vs. wide) and specify positioning for each. For digital applications, specify responsive placement rules across breakpoints. Include eye-tracking and readability considerations. Align placement with industry conventions where appropriate (e.g., top-left for websites). Document placement for both primary logo and alternative versions.",
  },
  iconography: {
    outline: "Outline icons use strokes of consistent weight to define shapes, leaving the interior transparent. This style is modern, light, and works well at medium to large sizes. Outline icons are ideal for UI interfaces, wayfinding, and applications where the background shows through. The stroke weight should be uniform across the entire icon set for visual consistency. Rounded caps and corners create a friendly feel; sharp corners convey precision. Set minimum size thresholds to maintain stroke visibility. Outline icons pair naturally with sans-serif typography. Ensure strokes are thick enough to survive printing and low-resolution screens. Test in both filled and empty states for interactive elements.",
    filled: "Filled icons use solid shapes with no transparent interior areas, creating dense, high-impact visual marks. This style commands attention and works well at small sizes where outline icons would lose definition. Filled icons excel for navigation bars, tab bars, and any context requiring quick recognition. Maintain consistent visual mass across the icon set — no single icon should feel significantly heavier or lighter. Rounded exterior corners soften the appearance. Filled icons pair well with bold typography. Use with active states in UI (filled = active, outline = inactive). Ensure complex shapes are simplified enough to remain legible at small sizes.",
    duotone: "Duotone icons use two colors with layered transparency to create depth and dimension. The primary color typically defines the foreground shapes, while a secondary transparent color creates depth through overlapping. This style adds visual interest while maintaining relative simplicity. Duotone works exceptionally well for hero sections, feature illustrations, and marketing materials. Define the two colors from the brand palette and test their transparency interactions. The overlap creates a third blended color — ensure this is acceptable in the brand system. Avoid duotone at very small sizes where the dual-color effect becomes invisible. Use duotone sparingly to maintain its impact.",
    glyph: "Glyph icons are the most minimalist icon style — single-color, highly simplified symbols that communicate instantly. They strip away all unnecessary detail to the purest representation of the concept. Glyphs work universally across all media and sizes. Each glyph should be recognizable in silhouette at very small scales. Maintain consistent stroke weight or solid mass across the entire glyph set. Grid alignment is critical — all glyphs should sit on the same optical baseline. Glyph sets are the most practical choice for UI systems, signage, and large icon families. Examples include the iOS and Material Design system icons. Prioritize universal recognition over artistic expression.",
    illustrated: "Illustrated icons are detailed, artistic renderings that go beyond simple symbolism to create rich visual narratives. They bring personality, warmth, and storytelling to brand communications. Illustrated icons work well for hero graphics, about pages, feature explanations, and brand storytelling. The illustration style should be consistent across the set — same line quality, coloring technique, level of detail, and perspective. Define clear style parameters (flat vs. dimensional, line art vs. filled, color palette). Illustrated icons require more space than simpler styles. They are best for brand expressions where personality matters more than rapid scanning.",
    "3d": "3D icons use perspective, lighting, material rendering, and depth to create photorealistic or stylized three-dimensional representations. This style conveys innovation, premium quality, and technical sophistication. 3D icons are ideal for tech products, gaming, AR/VR interfaces, and brands wanting cutting-edge visual language. Define consistent lighting direction (camera angle, light source, shadow behavior), material properties (glossy, matte, metallic), and perspective system. 3D icons require significantly more production time and file size. Provide both rendered and wireframe versions for different contexts. Ensure 3D icons have simplified 2D fallbacks for low-performance environments.",
    geometric: "Geometric icons are constructed entirely from precise geometric shapes — circles, squares, triangles, lines, and arcs — following mathematical proportions. This style communicates precision, order, and rationality. Geometric icons work well for technology, finance, architecture, and engineering brands. Define a base grid system (typically 24x24 or 32x32) and shape construction rules. Maintain consistent border radii, angle increments, and spacing throughout the set. Geometric icons are highly systematic and can be generated parametrically. Ensure shapes feel optically balanced even when mathematically centered. Pair with geometric sans-serif typefaces for coherent brand language.",
    "hand-drawn": "Hand-drawn icons have an organic, imperfect quality that feels human and approachable. They embrace irregular lines, varied stroke weights, and subtle imperfections. This style conveys authenticity, creativity, and warmth. Hand-drawn icons are excellent for creative agencies, children's products, food and beverage, and lifestyle brands. The set should feel unified in its drawing style — same tool (pen, brush, pencil), same pressure, same level of finish. Digital tools can simulate hand-drawn effects, but authentic scanned ink or pencil drawings have unique character. Hand-drawn icons work best at larger sizes where their texture is visible. Pair with casual typography.",
  },
  brandVoice: {
    professional: "A professional brand voice is formal, polished, and appropriate for serious business contexts. Use complete sentences, standard grammar, and industry-appropriate terminology. Avoid contractions, slang, and overly casual expressions. Structure communications with clear hierarchy — executive summaries first, then supporting details. Professional voice builds trust through precision and reliability. Use data and evidence to support claims. Address the audience with respect (using Mr./Ms. when appropriate). This voice works for B2B, financial services, legal, consulting, and corporate communications. Maintain consistency across all channels from formal proposals to social media.",
    friendly: "A friendly brand voice is warm, approachable, and conversational — like speaking with a helpful colleague. Use contractions, occasional colloquialisms, and positive language. Write as if having a one-on-one conversation. Show personality through word choice and rhythm. Friendly voice lowers barriers and makes the brand feel accessible. Use humor sparingly and never at the customer's expense. Acknowledge the customer's perspective and validate their feelings. This voice works for consumer brands, hospitality, education, healthcare, and customer-facing services. Adapt the level of familiarity based on context and relationship stage.",
    luxury: "A luxury brand voice is sophisticated, exclusive, and meticulously crafted. Use refined vocabulary and elegant sentence structures. Less is more — let whitespace and silence speak. Never mention price, value, or practicality. Describe experiences, craftsmanship, and heritage. Use sensory language (texture, weight, light, sound). The tone should feel aspirational but never arrogant. Exclusivity is conveyed through implication rather than explicit statement. This voice works for high-end fashion, premium automotive, fine dining, luxury travel, and jewelry. Every word choice must uphold the perception of uncompromising quality and timeless elegance.",
    playful: "A playful brand voice is energetic, witty, and unafraid to have fun. Use wordplay, unexpected metaphors, and creative language structures. Playful voice breaks conventions deliberately and with purpose. The humor should be inclusive, never mean-spirited or at anyone's expense. Use exclamation points, emojis (where appropriate), and casual phrasings. Playful voice works for entertainment, gaming, children's products, snacks and beverages, and lifestyle brands. Balance playfulness with clarity — the message must still be understood. Test playful content with target audiences to ensure it lands as intended. Be prepared to be serious when the situation demands it.",
    authoritative: "An authoritative brand voice speaks with confidence, expertise, and command. Use declarative statements, specific data, and evidence-backed claims. Avoid hedging language like 'we think' or 'perhaps.' Cite credentials, certifications, and track records. Authoritative voice inspires trust through demonstrated mastery. The tone should be confident without being arrogant — factual rather than boastful. Use industry terminology precisely to signal expertise. This voice works for technology leaders, consulting firms, medical and scientific organizations, and any brand that needs to establish thought leadership. Back up authoritative claims with verifiable evidence and expert credentials.",
    minimalist: "A minimalist brand voice uses the fewest words possible to convey the message. Strip away adjectives, adverbs, and any embellishment. Every word must earn its place. Use short sentences, simple vocabulary, and clear structure. Minimalist voice communicates confidence — the brand trusts its audience to understand without hand-holding. White space in copy mirrors white space in design. This voice works for technology products, design-forward brands, and any brand whose positioning is built on clarity and focus. Avoid the trap of sounding cold or robotic — minimal doesn't mean devoid of personality. Choose each word with precision.",
    warm: "A warm brand voice is empathetic, human-centered, and nurturing. Prioritize emotional connection over information transfer. Use inclusive language ('we,' 'us,' 'together'), gentle phrasing, and reassuring words. Acknowledge challenges and validate feelings before offering solutions. Warm voice builds deep emotional bonds with the audience. Use metaphors drawn from human experience — home, community, care, growth. This voice works for healthcare, wellness, parenting, social services, hospitality, and community-focused organizations. Warmth should feel genuine, not manufactured. Listen to the audience's language and mirror it respectfully.",
    technical: "A technical brand voice is precise, detail-oriented, and specific. Use domain-appropriate terminology accurately and consistently. Provide specifications, measurements, performance data, and technical references. Technical voice signals deep expertise and attention to quality. Structure information hierarchically — from architecture overview to implementation details. Use diagrams, code snippets, and technical documentation conventions where appropriate. This voice works for engineering tools, developer platforms, scientific equipment, industrial B2B, and any technically sophisticated product. Translate complex concepts without oversimplifying. Respect the audience's technical knowledge level.",
  },
  applications: {
    "business-cards": "Business card specifications ensure consistent brand representation on this critical networking tool. Define card dimensions (standard 3.5 x 2 inches or local equivalent), paper stock weight, finish (matte, gloss, uncoated), and printing method. Specify logo placement, size, and minimum clear space. Define typography for name, title, company name, and contact details. Include approved color values for print (CMYK and spot). Specify whether the back of the card contains additional information or design. Provide template files for both single-sided and double-sided cards. Consider vertical and horizontal layouts. Account for local conventions in international markets.",
    letterhead: "Letterhead specifications ensure professional and consistent business correspondence. Define page dimensions (typically A4 or US Letter), margins, and logo header area. Specify logo placement — typically centered or left-aligned at the top. Define space for the date, recipient address, subject line, and body. Include footer specifications for address, phone, website, and other contact details. Specify secondary pages layout (typically with a reduced header or no logo). Provide digital template files for Word, Google Docs, and PDF formats. Include envelope specifications that coordinate with the letterhead design. Ensure adequate space for official signatures and stamps.",
    "social-media": "Social media brand applications require adaptations for each platform's unique dimensions and constraints. Define logo treatments for profile pictures (circular crops on most platforms), cover images/banners, and post templates. Provide platform-specific sizes (Facebook, Instagram, LinkedIn, Twitter/X, TikTok, YouTube) and update them as platforms change. Specify how the logo behaves in video content — intro bumper, end card, and corner watermark. Define social media template systems for posts, stories, and ads. Include guidelines for profile bio copy that maintains brand voice character limits. Provide a social media kit with ready-to-use assets.",
    signage: "Signage applications translate brand identity into physical environments — from exterior building signs to interior wayfinding. Specify logo variants for different viewing distances and sign sizes. Define materials (acrylic, metal, vinyl, neon, LED), illumination options (front-lit, back-lit, halo-lit), and mounting methods. Provide placement specifications for various sign types (wall-mounted, projecting, window, directional, monument). Consider environmental factors like sight lines, lighting conditions, and viewing angles. Include accessibility requirements (contrast, tactile elements, height). Specify fabrication tolerances and quality control standards. Coordinate with local signage regulations and permits.",
    merchandise: "Merchandise applications extend the brand into physical products like apparel, accessories, drinkware, and promotional items. Define logo placement zones on common product types (T-shirts — left chest, center back; hats — front center; pens — barrel). Specify logo size relative to product dimensions and appropriate logo versions for each product. Define acceptable production methods (embroidery, screen printing, deboss, foil stamp, heat transfer) and their limitations. Provide artwork files formatted for each production method. Include color matching specifications for non-branded substrates. Define quality standards — minimum stitch count for embroidery, maximum ink colors for screen printing. Include packaging requirements for branded merchandise.",
    "digital-ads": "Digital advertising specifications ensure brand consistency across online ad formats. Define logo placement, size, and clear space for common ad dimensions (leaderboard 728x90, medium rectangle 300x250, skyscraper 160x600, mobile interstitial). Specify animation guidelines — duration limits, motion behavior, and logo reveal timing. Include text-to-logo ratio requirements. Define typography for ad copy and CTA buttons. Provide clickable area specifications. Include accessibility requirements (alt text, contrast, captions for video). Specify file formats, maximum file sizes, and platform-specific requirements. Provide template files for major ad platforms (Google Ads, Meta Ads, LinkedIn Ads).",
    email: "Email guidelines cover brand consistency in email communications — from transactional messages to newsletters. Define logo placement in the email header — typically centered or left-aligned, with maximum width specifications. Specify pre-header text conventions. Define typography for subject lines, headlines, body copy, and CTAs. Include responsive email design specifications for desktop, tablet, and mobile. Define footer requirements — unsubscribe link, physical address, privacy policy link. Provide HTML email templates with inline CSS (required for email clients). Specify tracking pixel and UTM parameter conventions. Test across major email clients (Gmail, Outlook, Apple Mail) and provide fallbacks for image-blocking.",
    packaging: "Packaging guidelines ensure the brand translates effectively to three-dimensional product containers. Define primary logo placement on each package face — typically front face for the logo, side/back for details. Specify logo version, size, and orientation for each package format (box, bottle, bag, tube, can). Define color reproduction specifications for various packaging materials (paperboard, plastic, glass, metal). Include nutritional/legal text typography and placement if applicable. Define closure and seal specifications. Consider shelf impact — how the package reads in a retail environment alongside competitors. Provide dieline templates for common package shapes. Include sustainability guidelines for material choices and ink usage.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const ns = selections.step1;
  const lt = selections.step2;
  const cp = selections.step3;
  const ty = selections.step4;
  const lu = selections.step5;
  const ic = selections.step6;
  const bv = selections.step7;
  const ap = selections.step8;

  const lines: string[] = [];

  lines.push("# Brand & Logo Guideline Blueprint");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes |");
  lines.push("|---------|-----------|-------|");
  const nsLabel = Array.isArray(ns) ? ns.map((id: string) => options.nameStyle.find(o => o.id === id)?.title || id).join(", ") : options.nameStyle.find(o => o.id === ns)?.title || ns;
  const nsNote = notes[`nameStyle-${ns}`] || "";
  lines.push(`| Brand Name Style | ${nsLabel} | ${nsNote}`);
  const ltLabel = Array.isArray(lt) ? lt.map((id: string) => options.logoType.find(o => o.id === id)?.title || id).join(", ") : options.logoType.find(o => o.id === lt)?.title || lt;
  const ltNote = notes[`logoType-${lt}`] || "";
  lines.push(`| Logo Type | ${ltLabel} | ${ltNote}`);
  const cpLabel = Array.isArray(cp) ? cp.map((id: string) => options.colorPalette.find(o => o.id === id)?.title || id).join(", ") : options.colorPalette.find(o => o.id === cp)?.title || cp;
  const cpNote = notes[`colorPalette-${cp}`] || "";
  lines.push(`| Color Palette | ${cpLabel} | ${cpNote}`);
  const tyLabel = Array.isArray(ty) ? ty.map((id: string) => options.typography.find(o => o.id === id)?.title || id).join(", ") : options.typography.find(o => o.id === ty)?.title || ty;
  const tyNote = notes[`typography-${ty}`] || "";
  lines.push(`| Typography | ${tyLabel} | ${tyNote}`);
  const luLabel = Array.isArray(lu) ? lu.map((id: string) => options.logoUsage.find(o => o.id === id)?.title || id).join(", ") : options.logoUsage.find(o => o.id === lu)?.title || lu;
  const luNote = notes[`logoUsage-${lu}`] || "";
  lines.push(`| Logo Usage | ${luLabel} | ${luNote}`);
  const icLabel = Array.isArray(ic) ? ic.map((id: string) => options.iconography.find(o => o.id === id)?.title || id).join(", ") : options.iconography.find(o => o.id === ic)?.title || ic;
  const icNote = notes[`iconography-${ic}`] || "";
  lines.push(`| Iconography | ${icLabel} | ${icNote}`);
  const bvLabel = Array.isArray(bv) ? bv.map((id: string) => options.brandVoice.find(o => o.id === id)?.title || id).join(", ") : options.brandVoice.find(o => o.id === bv)?.title || bv;
  const bvNote = notes[`brandVoice-${bv}`] || "";
  lines.push(`| Brand Voice | ${bvLabel} | ${bvNote}`);
  const apLabel = Array.isArray(ap) ? ap.map((id: string) => options.applications.find(o => o.id === id)?.title || id).join(", ") : options.applications.find(o => o.id === ap)?.title || ap;
  const apNote = notes[`applications-${ap}`] || "";
  lines.push(`| Applications | ${apLabel} | ${apNote}`);
  lines.push("");

  lines.push("## Brand Name Strategy");
  lines.push("");
  lines.push(Array.isArray(ns) ? ns.map((v: string) => dict.nameStyle[v] || v).join("\n\n") : dict.nameStyle[ns] || ns);
  if (nsNote) lines.push(`> **Note:** ${nsNote}`);
  lines.push("");

  lines.push("## Logo Design Direction");
  lines.push("");
  lines.push(Array.isArray(lt) ? lt.map((v: string) => dict.logoType[v] || v).join("\n\n") : dict.logoType[lt] || lt);
  if (ltNote) lines.push(`> **Note:** ${ltNote}`);
  lines.push("");

  lines.push("## Color Palette Strategy");
  lines.push("");
  lines.push(Array.isArray(cp) ? cp.map((v: string) => dict.colorPalette[v] || v).join("\n\n") : dict.colorPalette[cp] || cp);
  if (cpNote) lines.push(`> **Note:** ${cpNote}`);
  lines.push("");

  lines.push("## Typography System");
  lines.push("");
  lines.push(Array.isArray(ty) ? ty.map((v: string) => dict.typography[v] || v).join("\n\n") : dict.typography[ty] || ty);
  if (tyNote) lines.push(`> **Note:** ${tyNote}`);
  lines.push("");

  lines.push("## Logo Usage Guidelines");
  lines.push("");
  lines.push(Array.isArray(lu) ? lu.map((v: string) => dict.logoUsage[v] || v).join("\n\n") : dict.logoUsage[lu] || lu);
  if (luNote) lines.push(`> **Note:** ${luNote}`);
  lines.push("");

  lines.push("## Iconography Style");
  lines.push("");
  lines.push(Array.isArray(ic) ? ic.map((v: string) => dict.iconography[v] || v).join("\n\n") : dict.iconography[ic] || ic);
  if (icNote) lines.push(`> **Note:** ${icNote}`);
  lines.push("");

  lines.push("## Brand Voice Guidelines");
  lines.push("");
  lines.push(Array.isArray(bv) ? bv.map((v: string) => dict.brandVoice[v] || v).join("\n\n") : dict.brandVoice[bv] || bv);
  if (bvNote) lines.push(`> **Note:** ${bvNote}`);
  lines.push("");

  lines.push("## Application Specifications");
  lines.push("");
  lines.push(Array.isArray(ap) ? ap.map((v: string) => dict.applications[v] || v).join("\n\n") : dict.applications[ap] || ap);
  if (apNote) lines.push(`> **Note:** ${apNote}`);
  lines.push("");

  lines.push("## Brand Identity Ecosystem");
  lines.push("");
  lines.push("```");
  lines.push("┌────────────────────────────────────┐");
  lines.push("│        Brand Identity Core         │");
  lines.push("├────────────────────────────────────┤");
  lines.push(`│  Name Style: ${nsLabel.padEnd(31)}│`);
  lines.push(`│  Logo Type:  ${ltLabel.padEnd(31)}│`);
  lines.push(`│  Palette:    ${cpLabel.padEnd(31)}│`);
  lines.push(`│  Typography: ${tyLabel.padEnd(31)}│`);
  lines.push(`│  Voice:      ${bvLabel.padEnd(31)}│`);
  lines.push("├────────────────────────────────────┤");
  lines.push("│         Expression Layer           │");
  lines.push("├────────────────────────────────────┤");
  lines.push(`│  Logo Usage: ${luLabel.padEnd(31)}│`);
  lines.push(`│  Icons:      ${icLabel.padEnd(31)}│`);
  lines.push("├────────────────────────────────────┤");
  lines.push("│         Application Layer          │");
  lines.push("├────────────────────────────────────┤");
  lines.push(`│  ${apLabel.padEnd(36)}│`);
  lines.push("└────────────────────────────────────┘");
  lines.push("```");
  lines.push("");

  lines.push("## Brand Guideline Document Outline");
  lines.push("");
  lines.push("1. **Brand Overview** — Brand story, mission, vision, and values.");
  lines.push("2. **Brand Name** — Origin story, meaning, pronunciation guide, and usage rules.");
  lines.push("3. **Logo Specifications** — Primary logo, clear space, minimum size, and color variations.");
  lines.push("4. **Color Palette** — Primary, secondary, accent colors with hex, RGB, CMYK, and Pantone values.");
  lines.push("5. **Typography** — Typeface selections, hierarchy, sizing, and spacing specifications.");
  lines.push("6. **Logo Usage Rules** — Correct and incorrect usage examples across media.");
  lines.push("7. **Iconography** — Icon style, construction grid, and usage guidelines.");
  lines.push("8. **Brand Voice & Tone** — Communication principles, do's and don'ts, and example copy.");
  lines.push("9. **Application Templates** — Business cards, letterhead, social media, signage, and more.");
  lines.push("10. **Brand Asset Management** — File formats, version control, and distribution.");
  lines.push("");

  lines.push("## Design System Specifications");
  lines.push("");
  lines.push("| Element | Specification |");
  lines.push("|---------|---------------|");
  lines.push("| Logo Format | Primary: SVG/EPS for digital, AI/PDF for print |");
  lines.push("| Color Format | Digital: HEX/RGB, Print: CMYK/Pantone |");
  lines.push("| Minimum Resolution | Print: 300 DPI, Digital: 72 PPI (retina-ready) |");
  lines.push("| File Naming | brand-logo-variation-color-format.ext |");
  lines.push("| Version Control | Semantic versioning for all brand assets |");
  lines.push("| Accessibility | WCAG 2.1 AA minimum for all digital applications |");
  lines.push("");

  lines.push("## Visual Identity Principles");
  lines.push("");
  lines.push("- **Consistency**: Every brand expression must be immediately recognizable as belonging to the brand.");
  lines.push("- **Scalability**: All visual elements must work at every size from favicon to billboard.");
  lines.push("- **Adaptability**: The system must function across print, digital, environmental, and motion media.");
  lines.push("- **Clarity**: Prioritize legibility and recognition over decorative complexity.");
  lines.push("- **Cohesion**: Every element — logo, color, type, imagery — must work together as a unified system.");
  lines.push("- **Protectability**: All brand elements should be legally protectable through trademark and copyright.");
  lines.push("");

  lines.push("## Quality Assurance Checklist");
  lines.push("");
  lines.push("| Check | Criteria |");
  lines.push("|-------|----------|");
  lines.push("| Logo Legibility | Is the logo readable at the minimum specified size?");
  lines.push("| Color Accuracy | Do printed colors match digital specifications?");
  lines.push("| Contrast Compliance | Does every application meet WCAG 2.1 AA contrast ratios?");
  lines.push("| Typography Consistency | Are the correct typefaces used with proper sizing and spacing?");
  lines.push("| Clear Space Compliance | Is the minimum clear space maintained around the logo?");
  lines.push("| Color Variation | Is the correct logo version used for the background?");
  lines.push("| File Format | Is the correct file format used for the medium?");
  lines.push("| Brand Voice | Does the copy match the defined brand voice guidelines?");
  lines.push("");

  lines.push("## Application Delivery Checklist");
  lines.push("");
  if (Array.isArray(ap) ? ap.includes("business-cards") : ap === "business-cards") {
    lines.push("- [ ] Business card artwork approved and sent to printer");
  }
  if (Array.isArray(ap) ? ap.includes("letterhead") : ap === "letterhead") {
    lines.push("- [ ] Letterhead and envelope templates finalized");
  }
  if (Array.isArray(ap) ? ap.includes("social-media") : ap === "social-media") {
    lines.push("- [ ] Social media profile assets created for all platforms");
  }
  if (Array.isArray(ap) ? ap.includes("signage") : ap === "signage") {
    lines.push("- [ ] Signage specifications documented and fabrication quotes obtained");
  }
  if (Array.isArray(ap) ? ap.includes("merchandise") : ap === "merchandise") {
    lines.push("- [ ] Merchandise artwork prepared for each product type");
  }
  if (Array.isArray(ap) ? ap.includes("digital-ads") : ap === "digital-ads") {
    lines.push("- [ ] Digital ad templates created for all standard formats");
  }
  if (Array.isArray(ap) ? ap.includes("email") : ap === "email") {
    lines.push("- [ ] Email templates built and tested across clients");
  }
  if (Array.isArray(ap) ? ap.includes("packaging") : ap === "packaging") {
    lines.push("- [ ] Packaging dielines and artwork approved");
  }
  lines.push("");

  lines.push("## File Naming Convention");
  lines.push("");
  lines.push("```");
  lines.push("brand-name_logo-type_color_bg-placement_format.ext");
  lines.push("");
  lines.push("Examples:");
  lines.push("acme-corp_logo_primary_light-left_cmyk.eps");
  lines.push("acme-corp_logo_monochrome_dark-center_rgb.png");
  lines.push("acme-corp_icon_black_light_svg.svg");
  lines.push("acme-corp_logo_horizontal_white_dark_rgb.jpg");
  lines.push("```");
  lines.push("");

  lines.push("## Brand Asset Delivery Formats");
  lines.push("");
  lines.push("| Use Case | Format | Color Space | Resolution |");
  lines.push("|----------|--------|-------------|------------|");
  lines.push("| Print Production | EPS / AI / PDF | CMYK | Vector |");
  lines.push("| Digital Design | SVG | RGB | Vector |");
  lines.push("| Web | SVG / WebP | sRGB | Vector / Responsive |");
  lines.push("| Social Media | PNG | sRGB | @2x (retina) |");
  lines.push("| Microsoft Office | PNG | sRGB | 300 DPI |");
  lines.push("| Merchandise | AI / EPS | Spot Colors | Vector |");
  lines.push("| Signage | AI / PDF / DXF | CMYK / Spot | Vector / Scale |");
  lines.push("");

  lines.push("## Maintenance & Governance");
  lines.push("");
  lines.push("- **Brand Manager**: Designated owner responsible for guideline enforcement.");
  lines.push("- **Review Cadence**: Quarterly review of brand asset relevance and consistency.");
  lines.push("- **Version History**: Document all changes with dates, descriptions, and approver names.");
  lines.push("- **Access Control**: Centralized brand asset library with controlled access levels.");
  lines.push("- **Exception Process**: Formal process for requesting and approving guideline exceptions.");
  lines.push("- **Training**: Onboarding materials and workshops for all teams using brand assets.");
  lines.push("- **Audit**: Annual comprehensive brand audit across all applications and touchpoints.");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by Brand & Logo Guideline Tool_");

  return lines.join("\n");
}

export default function BrandGuidelinePage() {
  return (
    <ToolShell
      title="Brand & Logo Guideline"
      steps={[
        { id: 1, label: "Naming", component: (p) => (
          <GenericStep {...p} title="Brand Name Style" description="How should the brand be named?" options={options.nameStyle} mode="single" selected={p.selections.step1} selectKey="step1" notePrefix="nameStyle" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Logo", component: (p) => (
          <GenericStep {...p} title="Logo Type" description="What style of logo represents the brand?" options={options.logoType} mode="single" selected={p.selections.step2} selectKey="step2" notePrefix="logoType" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Color", component: (p) => (
          <GenericStep {...p} title="Color Palette" description="What color scheme defines the brand?" options={options.colorPalette} mode="single" selected={p.selections.step3} selectKey="step3" notePrefix="colorPalette" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Type", component: (p) => (
          <GenericStep {...p} title="Typography" description="What typefaces embody the brand character?" options={options.typography} mode="single" selected={p.selections.step4} selectKey="step4" notePrefix="typography" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Usage", component: (p) => (
          <GenericStep {...p} title="Logo Usage" description="What rules govern logo application?" options={options.logoUsage} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="logoUsage" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Icons", component: (p) => (
          <GenericStep {...p} title="Iconography" description="What style should the brand icons follow?" options={options.iconography} mode="single" selected={p.selections.step6} selectKey="step6" notePrefix="iconography" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Voice", component: (p) => (
          <GenericStep {...p} title="Brand Voice" description="What tone should the brand communicate in?" options={options.brandVoice} mode="single" selected={p.selections.step7} selectKey="step7" notePrefix="brandVoice" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Apps", component: (p) => (
          <GenericStep {...p} title="Applications" description="Where will the brand identity be applied?" options={options.applications} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="applications" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}
