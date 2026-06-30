"use client";

import type { FC } from "react";
import {
  Camera, Box, Palette, Droplets, Layout, Sun, Clock, Lamp, Zap,
  Drone, Search, Eye, Film, Flame, Heart, Ghost, Smile,
  Paintbrush, Contrast, Circle, SwatchBook, Grid3X3,
  SplitSquareHorizontal, ScanLine, AlignCenter, Columns,
  Image, Layers as TextureIcon, GripHorizontal,
  GripVertical, Rows, Maximize, Monitor, Smartphone, Tablet,
  Crop, Moon, Sparkles, Square,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  medium: [
    { id: "photorealistic", title: "Photorealistic", description: "Ultra-realistic like a high-end photograph", icon: Camera },
    { id: "3d-render-unreal", title: "3D Render Unreal", description: "Real-time 3D render with cinematic quality", icon: Box },
    { id: "anime", title: "Anime", description: "Japanese animation style with bold lines and colors", icon: Palette },
    { id: "watercolor", title: "Watercolor", description: "Soft painterly look with wet brush strokes", icon: Droplets },
    { id: "flat-vector", title: "Flat Vector", description: "Clean vector illustration, no gradients or depth", icon: Layout },
    { id: "oil-painting", title: "Oil Painting", description: "Classic oil on canvas with thick brush strokes", icon: Paintbrush },
    { id: "pixel-art", title: "Pixel Art", description: "Retro 8-bit or 16-bit game art style", icon: Grid3X3 },
    { id: "cyberpunk", title: "Cyberpunk", description: "High-tech low-life aesthetic with neon accents", icon: Zap },
  ],
  lighting: [
    { id: "cinematic", title: "Cinematic", description: "Dramatic lighting with strong contrast and shadows", icon: Sun },
    { id: "golden-hour", title: "Golden Hour", description: "Warm sunset or sunrise natural lighting", icon: Clock },
    { id: "studio-lighting", title: "Studio Lighting", description: "Controlled softbox lighting setup", icon: Lamp },
    { id: "cyberpunk-neon", title: "Cyberpunk Neon", description: "Neon colored lights in dark urban scenes", icon: Zap },
    { id: "volumetric", title: "Volumetric Rays", description: "Light rays visible through fog or dust", icon: Sun },
    { id: "rim-lighting", title: "Rim Lighting", description: "Edge light separating subject from background", icon: Contrast },
    { id: "moody-low-key", title: "Moody Low-Key", description: "Dark scene with single small light source", icon: Moon },
    { id: "bioluminescent", title: "Bioluminescent", description: "Glowing organic light sources in darkness", icon: Sparkles },
  ],
  lens: [
    { id: "drone-shot", title: "Drone Shot", description: "Aerial top-down or sweeping high-angle view", icon: Drone },
    { id: "macro-lens", title: "Macro Lens", description: "Extreme close-up with fine detail capture", icon: Search },
    { id: "fisheye", title: "Fisheye", description: "Ultra-wide angle with barrel distortion effect", icon: Eye },
    { id: "35mm-film", title: "35mm Film", description: "Classic film camera look with grain texture", icon: Film },
    { id: "telephoto", title: "Telephoto", description: "Compressed perspective from long distance", icon: Camera },
    { id: "tilt-shift", title: "Tilt-Shift", description: "Selective focus creating miniature effect", icon: AlignCenter },
    { id: "pov", title: "First-Person POV", description: "Point-of-view from the subject's eyes", icon: Eye },
    { id: "panoramic", title: "Panoramic Wide", description: "Ultra-wide panoramic landscape view", icon: Columns },
  ],
  mood: [
    { id: "dramatic", title: "Dramatic", description: "High tension, intense emotions, stormy atmosphere", icon: Flame },
    { id: "peaceful", title: "Peaceful", description: "Calm, serene, soft colors and gentle composition", icon: Heart },
    { id: "eerie", title: "Eerie", description: "Unsettling, dark, mysterious with unsettling undertones", icon: Ghost },
    { id: "cheerful", title: "Cheerful", description: "Bright, happy, vibrant colors and uplifting vibe", icon: Smile },
    { id: "melancholic", title: "Melancholic", description: "Bittersweet sadness, nostalgic and reflective", icon: Heart },
    { id: "mysterious", title: "Mysterious", description: "Enigmatic, hidden details, cryptic atmosphere", icon: Ghost },
    { id: "epic", title: "Epic / Grandiose", description: "Monumental scale, heroic and awe-inspiring", icon: Flame },
    { id: "intimate", title: "Intimate", description: "Close, personal, warm and vulnerable feeling", icon: Heart },
  ],
  colorPalette: [
    { id: "warm-analogous", title: "Warm Analogous", description: "Reds, oranges, yellows in harmony", icon: SwatchBook },
    { id: "cool-analogous", title: "Cool Analogous", description: "Blues, teals, greens in harmony", icon: SwatchBook },
    { id: "complementary", title: "Complementary", description: "Opposite hues for high contrast impact", icon: Contrast },
    { id: "monochrome-palette", title: "Monochrome", description: "Single hue with varying luminance", icon: Circle },
    { id: "triadic", title: "Triadic", description: "Three evenly spaced colors on the wheel", icon: Grid3X3 },
    { id: "pastel-palette", title: "Pastel", description: "Desaturated, soft, light colors", icon: Palette },
    { id: "neon", title: "Neon / Electric", description: "Highly saturated fluorescent colors", icon: Zap },
    { id: "sepia-vintage", title: "Sepia / Vintage", description: "Warm brown-toned nostalgic palette", icon: Droplets },
  ],
  composition: [
    { id: "rule-of-thirds", title: "Rule of Thirds", description: "Subject at intersecting grid lines", icon: Grid3X3 },
    { id: "center-framed", title: "Center Framed", description: "Subject dead center, symmetrical", icon: AlignCenter },
    { id: "golden-spiral", title: "Golden Spiral", description: "Leading lines following Fibonacci curve", icon: SplitSquareHorizontal },
    { id: "leading-lines", title: "Leading Lines", description: "Lines directing eye to the subject", icon: ScanLine },
    { id: "symmetry", title: "Symmetrical", description: "Mirrored left-right or top-bottom balance", icon: GripHorizontal },
    { id: "asymmetry", title: "Asymmetrical", description: "Off-center balance with unequal visual weight", icon: GripVertical },
    { id: "framed", title: "Framed Composition", description: "Natural frame within the image", icon: Crop },
    { id: "negative-space", title: "Negative Space", description: "Subject small with lots of empty space", icon: Maximize },
  ],
  texture: [
    { id: "smooth", title: "Smooth / Glossy", description: "Shiny surfaces, reflections, polished", icon: Droplets },
    { id: "rough", title: "Rough / Gritty", description: "Stone, concrete, sandpaper, raw surfaces", icon: TextureIcon },
    { id: "soft", title: "Soft / Fluffy", description: "Fabric, clouds, fur, plush materials", icon: TextureIcon },
    { id: "metallic", title: "Metallic / Chrome", description: "Shiny metal reflections and highlights", icon: Zap },
    { id: "wooden", title: "Wood / Grain", description: "Natural wood textures and organic grain", icon: Rows },
    { id: "glass", title: "Glass / Crystal", description: "Transparent, refractive, brittle surfaces", icon: Droplets },
    { id: "paper", title: "Paper / Canvas", description: "Art paper, canvas weave, parchment", icon: Layout },
    { id: "liquid", title: "Liquid / Molten", description: "Flowing water, lava, paint drips, ink", icon: Droplets },
  ],
  aspectRatio: [
    { id: "16-9", title: "16:9 Widescreen", description: "Standard HD widescreen for cinematic shots", icon: Monitor },
    { id: "4-3", title: "4:3 Classic", description: "Classic photography and TV ratio", icon: Monitor },
    { id: "1-1", title: "1:1 Square", description: "Perfect square for social media posts", icon: Square },
    { id: "9-16", title: "9:16 Portrait", description: "Vertical for mobile and TikTok/Reels", icon: Smartphone },
    { id: "2-3", title: "2:3 Portrait", description: "Common for portrait photography", icon: Smartphone },
    { id: "3-2", title: "3:2 Landscape", description: "Standard 35mm film landscape ratio", icon: Camera },
    { id: "21-9", title: "21:9 UltraWide", description: "Cinematic ultrawide for panoramas", icon: Layout },
    { id: "3-4", title: "3:4 Portrait", description: "Common for print and tablet portrait", icon: Tablet },
  ],
};

const dict: Record<string, Record<string, string>> = {
  medium: {
    photorealistic: "Generate the image in a photorealistic style. Prioritize accurate lighting, realistic textures, natural skin tones, and lifelike proportions. Use --style raw and high detail parameters for maximum realism.",
    "3d-render-unreal": "Generate the image as a 3D render in Unreal Engine 5 style. Include realistic global illumination, volumetric fog, high-poly geometry, and post-processing effects like bloom and depth of field.",
    anime: "Generate the image in an anime art style inspired by Studio Ghibli or Makoto Shinkai. Use bold outlines, expressive eyes, cel-shaded colors, and dynamic camera angles typical of Japanese animation.",
    watercolor: "Generate the image as a watercolor painting. Use soft bleeding edges, paper texture overlay, diluted pigment splotches, and a light, airy color palette typical of wet-on-wet techniques.",
    "flat-vector": "Generate the image as a flat vector illustration. Use solid unshaded colors, no gradients, simple geometric shapes, and clean silhouettes reminiscent of modern UI illustrations.",
    "oil-painting": "Generate the image as an oil painting on canvas. Use thick impasto brush strokes, rich color blending, canvas texture, and a traditional fine art composition with dramatic lighting.",
    "pixel-art": "Generate the image in retro pixel art style. Use a limited color palette, blocky pixel grids at 16x16 or 32x32 resolution, sharp outlines, and nostalgic game art aesthetics.",
    cyberpunk: "Generate the image in a cyberpunk style. Feature neon-lit cityscapes, rain-slicked streets, holographic advertisements, futuristic technology, and a gritty high-tech low-life atmosphere.",
  },
  lighting: {
    cinematic: "Apply cinematic lighting with strong chiaroscuro contrast, a single key light source, deep shadows in the background, and a subtle rim light to separate the subject from the dark environment.",
    "golden-hour": "Apply golden hour lighting with warm orange-gold sunlight coming from a low angle, long soft shadows, and a warm glow on the subject's edges. Use a slight lens flare for atmosphere.",
    "studio-lighting": "Apply studio lighting with a soft key light at 45 degrees, a fill light on the opposite side to reduce shadows, and a backlight for rim definition. Use a clean white or seamless gray backdrop.",
    "cyberpunk-neon": "Apply cyberpunk neon lighting with vibrant pink, cyan, and purple light sources illuminating the scene from multiple angles. Use strong volumetric beams, reflective wet surfaces, and deep blue ambient shadows.",
    volumetric: "Apply volumetric lighting with visible light rays streaming through atmospheric particles. Use god rays, crepuscular beams, and dust motes illuminated by strong directional light sources.",
    "rim-lighting": "Apply rim lighting with a strong backlight that traces the edge of the subject, creating a bright outline that separates it from a darker background. Use a single edge light from behind.",
    "moody-low-key": "Apply moody low-key lighting with a single small light source illuminating a small portion of the subject. The majority of the scene is in deep shadow, creating a sense of mystery and tension.",
    bioluminescent: "Apply bioluminescent lighting with organic glowing elements scattered throughout the scene. Use cool blues and greens for the glow, with dark surroundings to maximize the luminous effect.",
  },
  lens: {
    "drone-shot": "Compose the shot as a drone aerial view. Use a top-down or 45-degree angle, wide field of view, and include sweeping landscapes or cityscapes with a sense of scale and depth.",
    "macro-lens": "Compose the shot with a macro lens for extreme close-up detail. Use a very shallow depth of field so the subject is sharp while the background blurs into soft bokeh circles.",
    fisheye: "Compose the shot with a fisheye lens effect. Use an ultra-wide 180-degree field of view with noticeable barrel distortion curving the edges, creating a dynamic and immersive perspective.",
    "35mm-film": "Compose the shot as if taken with a 35mm film camera. Add subtle film grain, slight color shifts characteristic of specific film stocks, and natural light leaks.",
    telephoto: "Compose the shot with a telephoto lens. Use a narrow field of view with strong background compression, making distant objects appear closer to the subject. Shallow depth of field isolates the main subject.",
    "tilt-shift": "Compose the shot with tilt-shift lens effect. Apply selective blur to the top and bottom of the frame to simulate a miniature scale. The sharp horizontal band gives a diorama appearance.",
    pov: "Compose the shot from a first-person point of view. The perspective should feel personal and immersive, showing hands or tools in the foreground and the scene from the subject's eye level.",
    panoramic: "Compose an ultra-wide panoramic shot with a field of view exceeding 120 degrees. The image should be extremely wide, capturing sweeping vistas with strong horizontal leading lines.",
  },
  mood: {
    dramatic: "Set a dramatic mood with dark storm clouds, strong directional lighting, intense shadows, and a color palette dominated by deep blues, blacks, and striking red or orange accents.",
    peaceful: "Set a peaceful mood with soft pastel colors, gentle morning light, calm water or open fields, and a composition that emphasizes balance, symmetry, and negative space.",
    eerie: "Set an eerie mood with fog or mist, dim lighting, desaturated cool colors, twisted organic shapes, and an overall unsettling atmosphere that feels uncanny.",
    cheerful: "Set a cheerful mood with bright saturated colors, sunny clear skies, dynamic action poses, smiling subjects, and a warm color palette full of yellows, pinks, and light blues.",
    melancholic: "Set a melancholic mood with muted colors, overcast skies, rain, wilting flowers, and solitary subjects. Use cool blue-gray tones and gentle lighting to evoke a sense of reflective sadness.",
    mysterious: "Set a mysterious mood with heavy shadows, obscured details, fog, silhouettes, and hidden elements. Use a limited color palette with deep blacks and selective highlights to create intrigue.",
    epic: "Set an epic grandiose mood with monumental scale, dramatic cloud formations, vast landscapes, heroic poses, and a color palette with rich golds, deep purples, and intense oranges.",
    intimate: "Set an intimate mood with close framing, soft warm lighting, shallow depth of field, and personal details. The composition should feel private, tender, and emotionally close.",
  },
  colorPalette: {
    "warm-analogous": "Use a warm analogous palette of reds, oranges, and yellows. Colors blend smoothly from one to the next, creating a harmonious, cohesive, and emotionally warm image.",
    "cool-analogous": "Use a cool analogous palette of blues, teals, and greens. This creates a calm, serene, and cohesive atmosphere with smooth transitions between adjacent cool hues.",
    complementary: "Use complementary colors opposite on the color wheel. Classic pairs like blue-orange or red-green create maximum visual tension and vibrant contrast when placed together.",
    "monochrome-palette": "Use a monochrome palette with variations in lightness and saturation of a single hue. This creates a unified, elegant, and cohesive look with emphasis on form and texture.",
    triadic: "Use a triadic color scheme with three evenly spaced hues on the color wheel. This offers rich variety while maintaining balance, with one dominant color and two accents.",
    "pastel-palette": "Use a pastel palette with desaturated, soft versions of colors. Mint, lavender, baby pink, and powder blue create a gentle, dreamy, and childlike atmosphere.",
    neon: "Use a neon electric palette with intensely saturated fluorescent colors. Hot pink, electric blue, lime green, and glowing orange create a high-energy, futuristic, and artificial look.",
    "sepia-vintage": "Use a sepia vintage palette dominated by warm browns, amber, ochre, and faded cream. This creates a nostalgic, old-photograph feel with a timeless quality.",
  },
  composition: {
    "rule-of-thirds": "Apply the rule of thirds by placing key elements at the intersections of an invisible 3x3 grid. This creates dynamic, naturally balanced compositions that feel pleasing to the eye.",
    "center-framed": "Place the subject dead center with perfect symmetry. This creates a powerful, formal, and balanced composition that demands attention and conveys stability and importance.",
    "golden-spiral": "Use the golden spiral composition derived from the Fibonacci sequence. Arrange elements along the spiral curve to guide the viewer's eye naturally through the image.",
    "leading-lines": "Use leading lines such as roads, rivers, fences, or architectural lines that draw the viewer's eye toward the main subject. Lines create depth and guide visual flow.",
    symmetry: "Use perfect symmetry in the composition, mirroring elements left-right or top-bottom. This creates balance, order, and a formal, architectural feel that is aesthetically pleasing.",
    asymmetry: "Use asymmetrical balance where different visual weights are arranged in a non-symmetrical but still balanced way. Creates dynamic tension and a more natural, candid feel.",
    framed: "Use natural framing elements like archways, windows, trees, or doorways to create a frame within the frame. This adds depth and focuses attention on the framed subject.",
    "negative-space": "Use generous negative space around a small subject. The vast empty area emphasizes the subject's isolation, scale, or importance, creating a minimalist and dramatic effect.",
  },
  texture: {
    smooth: "Emphasize smooth, glossy textures. Capture reflections, polished surfaces, liquid sheen, and seamless gradients without visible grain or roughness.",
    rough: "Emphasize rough, gritty textures. Highlight stone crevices, concrete pores, sand granules, bark ridges, and raw, unpolished surfaces with visible tactile detail.",
    soft: "Emphasize soft, fluffy textures. Capture the light-absorbing quality of fabrics, the wispiness of clouds, fur strands, velvet piles, and plush cushioning with gentle lighting.",
    metallic: "Emphasize metallic textures with bright specular highlights, sharp reflections, chrome distortion, brushed metal lines, and the cold hard sheen of polished metal surfaces.",
    wooden: "Emphasize natural wood textures with visible grain patterns, knots, rings, splintered edges, and the warm organic feel of raw or finished timber surfaces.",
    glass: "Emphasize glass and crystal textures with refraction, transparency, reflection, light caustics, and fragile sharp edges. Include highlights and shadows that reveal clarity.",
    paper: "Emphasize paper and canvas textures with visible fiber weave, deckled edges, water stains, fold creases, and the matte absorbent quality of art paper surfaces.",
    liquid: "Emphasize liquid textures with fluid dynamics, surface tension, ripples, splashes, viscous drips, and reflective wet surfaces with colorful refractions and highlights.",
  },
  aspectRatio: {
    "16-9": "Use 16:9 widescreen aspect ratio. The standard cinematic ratio allows for wide landscape compositions with strong horizontal lines and immersive panoramic views.",
    "4-3": "Use the classic 4:3 aspect ratio. Slightly squarer than widescreen, this ratio is reminiscent of traditional photography and CRT television framing.",
    "1-1": "Use a 1:1 square aspect ratio. Perfect for symmetrical compositions, profile pictures, Instagram posts, and abstract designs where balance is centered.",
    "9-16": "Use a 9:16 vertical portrait ratio. Designed for mobile-first platforms. Compositions should be tall and narrow, ideal for full-body portraits and vertical scenes.",
    "2-3": "Use a 2:3 portrait ratio. A classic film photography ratio that naturally fits portrait-oriented subjects, creating elegant vertical framing with pleasing proportions.",
    "3-2": "Use the classic 3:2 landscape ratio. The standard 35mm film frame ratio, it provides a natural-looking field of view for most landscape and street photography.",
    "21-9": "Use 21:9 ultrawide cinematic ratio. Extremely wide format for epic landscapes, city panoramas, and cinematic compositions that fill peripheral vision.",
    "3-4": "Use a 3:4 portrait ratio. Common in medium format photography and print media, this ratio offers a slightly wider portrait frame than 2:3.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const medium = selections.step1;
  const lighting = selections.step2;
  const lens = selections.step3;
  const mood = selections.step4;
  const colorPalette = selections.step5;
  const composition = selections.step6;
  const texture = selections.step7;
  const aspectRatio = selections.step8;

  const lines: string[] = [];

  lines.push("# Midjourney Prompt Builder");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const medLabel = Array.isArray(medium) ? medium.map(id => options.medium.find(o => o.id === id)?.title || id).join(", ") : options.medium.find(o => o.id === medium)?.title || medium;
  const medNote = notes[`medium-${medium}`] || "";
  lines.push(`| Art Medium | ${medLabel} | ${medNote}`);
  const litLabel = Array.isArray(lighting) ? lighting.map(id => options.lighting.find(o => o.id === id)?.title || id).join(", ") : options.lighting.find(o => o.id === lighting)?.title || lighting;
  const litNote = notes[`lighting-${lighting}`] || "";
  lines.push(`| Lighting Style | ${litLabel} | ${litNote}`);
  const lensLabel = Array.isArray(lens) ? lens.map(id => options.lens.find(o => o.id === id)?.title || id).join(", ") : options.lens.find(o => o.id === lens)?.title || lens;
  const lensNote = notes[`lens-${lens}`] || "";
  lines.push(`| Camera & Lens | ${lensLabel} | ${lensNote}`);
  const moodLabel = Array.isArray(mood) ? mood.map(id => options.mood.find(o => o.id === id)?.title || id).join(", ") : options.mood.find(o => o.id === mood)?.title || mood;
  const moodNote = notes[`mood-${mood}`] || "";
  lines.push(`| Mood & Vibe | ${moodLabel} | ${moodNote}`);
  const cpLabel = Array.isArray(colorPalette) ? colorPalette.map(id => options.colorPalette.find(o => o.id === id)?.title || id).join(", ") : options.colorPalette.find(o => o.id === colorPalette)?.title || colorPalette;
  const cpNote = notes[`colorPalette-${colorPalette}`] || "";
  lines.push(`| Color Palette | ${cpLabel} | ${cpNote}`);
  const compLabel = Array.isArray(composition) ? composition.map(id => options.composition.find(o => o.id === id)?.title || id).join(", ") : options.composition.find(o => o.id === composition)?.title || composition;
  const compNote = notes[`composition-${composition}`] || "";
  lines.push(`| Composition | ${compLabel} | ${compNote}`);
  const texLabel = Array.isArray(texture) ? texture.map(id => options.texture.find(o => o.id === id)?.title || id).join(", ") : options.texture.find(o => o.id === texture)?.title || texture;
  const texNote = notes[`texture-${texture}`] || "";
  lines.push(`| Texture | ${texLabel} | ${texNote}`);
  const arLabel = Array.isArray(aspectRatio) ? aspectRatio.map(id => options.aspectRatio.find(o => o.id === id)?.title || id).join(", ") : options.aspectRatio.find(o => o.id === aspectRatio)?.title || aspectRatio;
  const arNote = notes[`aspectRatio-${aspectRatio}`] || "";
  lines.push(`| Aspect Ratio | ${arLabel} | ${arNote}`);
  lines.push("");

  const parts: string[] = [];
  if (medLabel) parts.push(medLabel);
  if (litLabel) parts.push(litLabel);
  if (lensLabel) parts.push(lensLabel);
  if (moodLabel) parts.push(moodLabel);
  if (cpLabel) parts.push(cpLabel);
  if (compLabel) parts.push(compLabel);
  if (texLabel) parts.push(texLabel);

  const arParam: Record<string, string> = {
    "16-9": "--ar 16:9",
    "4-3": "--ar 4:3",
    "1-1": "--ar 1:1",
    "9-16": "--ar 9:16",
    "2-3": "--ar 2:3",
    "3-2": "--ar 3:2",
    "21-9": "--ar 21:9",
    "3-4": "--ar 3:4",
  };
  const arValue = arParam[aspectRatio] || "--ar 16:9";

  lines.push("## Full Prompt");
  lines.push("");
  lines.push("```");
  lines.push(parts.join(", ") + " " + arValue + " --v 6");
  lines.push("```");
  lines.push("");

  lines.push("## Parameter Breakdown");
  lines.push("");
  lines.push("| Parameter | Value | Purpose");
  lines.push("|-----------|-------|--------");
  lines.push(`| \`--ar\` | \`${arValue.replace("--ar ", "")}\` | Aspect ratio for framing`);
  lines.push("| `--v` | `6` | Midjourney V6 model (latest)");
  lines.push("| `--style` | `raw` (recommended) | Reduces Midjourney's stylistic bias for photorealism");
  lines.push("| `--s` | `250` (default) | Stylization — lower is more literal, higher is more artistic");
  lines.push("| `--q` | `2` | Quality — max detail for final renders");
  if (medium === "photorealistic") {
    lines.push("| `--style` | `raw` | Essential for photorealism -- reduces MJ stylistic bias");
  }
  lines.push("");

  lines.push("## Art Medium: " + medLabel);
  lines.push("");
  lines.push(Array.isArray(medium) ? medium.map(v => dict.medium[v] || v).join(", ") : dict.medium[medium] || medium);
  if (medNote) lines.push(`> **Note:** ${medNote}`);
  lines.push("");

  lines.push("## Lighting: " + litLabel);
  lines.push("");
  lines.push(Array.isArray(lighting) ? lighting.map(v => dict.lighting[v] || v).join(", ") : dict.lighting[lighting] || lighting);
  if (litNote) lines.push(`> **Note:** ${litNote}`);
  lines.push("");

  lines.push("## Camera & Lens: " + lensLabel);
  lines.push("");
  lines.push(Array.isArray(lens) ? lens.map(v => dict.lens[v] || v).join(", ") : dict.lens[lens] || lens);
  if (lensNote) lines.push(`> **Note:** ${lensNote}`);
  lines.push("");

  lines.push("## Mood & Atmosphere: " + moodLabel);
  lines.push("");
  lines.push(Array.isArray(mood) ? mood.map(v => dict.mood[v] || v).join(", ") : dict.mood[mood] || mood);
  if (moodNote) lines.push(`> **Note:** ${moodNote}`);
  lines.push("");

  lines.push("## Color Palette: " + cpLabel);
  lines.push("");
  lines.push(Array.isArray(colorPalette) ? colorPalette.map(v => dict.colorPalette[v] || v).join(", ") : dict.colorPalette[colorPalette] || colorPalette);
  if (cpNote) lines.push(`> **Note:** ${cpNote}`);
  lines.push("");

  lines.push("## Composition: " + compLabel);
  lines.push("");
  lines.push(Array.isArray(composition) ? composition.map(v => dict.composition[v] || v).join(", ") : dict.composition[composition] || composition);
  if (compNote) lines.push(`> **Note:** ${compNote}`);
  lines.push("");

  lines.push("## Texture: " + texLabel);
  lines.push("");
  lines.push(Array.isArray(texture) ? texture.map(v => dict.texture[v] || v).join(", ") : dict.texture[texture] || texture);
  if (texNote) lines.push(`> **Note:** ${texNote}`);
  lines.push("");

  lines.push("## Aspect Ratio: " + arLabel);
  lines.push("");
  lines.push(Array.isArray(aspectRatio) ? aspectRatio.map(v => dict.aspectRatio[v] || v).join(", ") : dict.aspectRatio[aspectRatio] || aspectRatio);
  if (arNote) lines.push(`> **Note:** ${arNote}`);
  lines.push("");

  lines.push("## Color Palette Guide");
  lines.push("");
  if (mood === "dramatic") {
    lines.push("| Color | Hex | Role");
    lines.push("|-------|-----|------");
    lines.push("| Deep Blue | `#1a1a2e` | Shadows and base tones");
    lines.push("| Crimson Red | `#e63946` | Accent and focal points");
    lines.push("| Charcoal | `#2b2d42` | Mid-tones and depth");
    lines.push("| Amber | `#f4a261` | Light source glow");
  } else if (mood === "peaceful") {
    lines.push("| Color | Hex | Role");
    lines.push("|-------|-----|------");
    lines.push("| Soft Lavender | `#e8d5f5` | Background wash");
    lines.push("| Pale Pink | `#fde4ec` | Warm highlights");
    lines.push("| Sage Green | `#c5dac1` | Natural elements");
    lines.push("| Warm Ivory | `#fff8e7` | Light and air");
  } else if (mood === "eerie") {
    lines.push("| Color | Hex | Role");
    lines.push("|-------|-----|------");
    lines.push("| Dark Teal | `#1a3a3a` | Deep shadows");
    lines.push("| Pale Green | `#8fbc8f` | Unnatural highlights");
    lines.push("| Fog Gray | `#c8c8c8` | Mist and atmosphere");
    lines.push("| Desaturated Violet | `#4a4063` | Background tones");
  } else if (colorPalette === "neon") {
    lines.push("| Color | Hex | Role");
    lines.push("|-------|-----|------");
    lines.push("| Hot Pink | `#ff2a75` | Primary neon accent");
    lines.push("| Electric Blue | `#00d4ff` | Secondary light source");
    lines.push("| Lime Green | `#39ff14` | Tertiary highlight");
    lines.push("| Deep Purple | `#1a0030` | Dark background");
  } else if (colorPalette === "pastel-palette") {
    lines.push("| Color | Hex | Role");
    lines.push("|-------|-----|------");
    lines.push("| Mint | `#b5e7d7` | Primary background");
    lines.push("| Lavender | `#d4b5e7` | Soft accent");
    lines.push("| Baby Pink | `#f7c5cc` | Warm highlight");
    lines.push("| Powder Blue | `#c5d5f7` | Cool accent");
  } else {
    lines.push("| Color | Hex | Role");
    lines.push("|-------|-----|------");
    lines.push("| Sunny Yellow | `#ffd166` | Primary warmth");
    lines.push("| Coral | `#ff6b6b` | Playful accent");
    lines.push("| Sky Blue | `#4ecdc4` | Background openness");
    lines.push("| Soft White | `#f7fff7` | Clean highlights");
  }
  lines.push("");

  lines.push("## Composition Guidelines");
  lines.push("");
  lines.push("- **" + compLabel + "**: " + (Array.isArray(composition) ? composition.map(v => dict.composition[v] || v).join(", ") : dict.composition[composition] || composition));
  lines.push("- **Rule of Thirds**: Place the subject at intersecting grid points for dynamic balance.");
  lines.push("- **Leading Lines**: Use natural lines to guide the eye through the composition.");
  lines.push("- **Depth Layers**: Include foreground, midground, and background elements.");
  lines.push("- **Negative Space**: Leave breathing room around the main subject.");
  if (lens === "drone-shot") lines.push("- **Top-Down Composition**: Use patterns and textures visible only from above.");
  if (lens === "macro-lens") lines.push("- **Extreme Detail**: Focus on texture and fine details invisible to the naked eye.");
  if (lens === "fisheye") lines.push("- **Radial Composition**: Center the subject to minimize barrel distortion on the main element.");
  if (composition === "golden-spiral") lines.push("- **Fibonacci Flow**: Arrange key elements along the spiral curve from bottom-left inward.");
  if (composition === "symmetry") lines.push("- **Mirror Balance**: Ensure both halves are visually balanced with matching elements.");
  lines.push("");

  lines.push("## Post-Processing Suggestions");
  lines.push("");
  lines.push("- Apply subtle **vignette** to draw focus to the center.");
  lines.push("- Add **film grain** for analog texture (especially with 35mm Film lens).");
  lines.push("- Use **color grading** — teal/orange for cinematic, warm tones for golden hour.");
  lines.push("- Consider **sharpening** for photorealistic outputs, **soft blur** for painterly styles.");
  lines.push("- Apply **chromatic aberration** sparingly for a vintage or cinematic feel.");
  if (lighting === "volumetric") lines.push("- Enhance **volumetric rays** with dodging and burning in post-processing.");
  if (texture === "rough") lines.push("- Emphasize **grit and texture** with clarity and texture slider increases.");
  lines.push("");

  lines.push("## Recommended Midjourney Parameters");
  lines.push("");
  lines.push("| Parameter | Suggested Value | Notes");
  lines.push("|-----------|----------------|------");
  lines.push("| `--v` | 6 | Latest model with best coherence");
  lines.push("| `--style` | raw | Reduces stylization for accuracy");
  lines.push("| `--s` | 50–250 | Lower for literal, higher for artistic");
  lines.push("| `--q` | 2 | Maximum quality for final renders");
  lines.push("| `--iw` | 2 (if using image prompt) | Image weight for reference images");
  lines.push("| `--no` | (optional) | Exclude unwanted elements");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by Midjourney Prompt Builder_");

  return lines.join("\n");
}

export default function MidjourneyPage() {
  return (
    <ToolShell
      title="Midjourney Prompt Builder"
      steps={[
        { id: 1, label: "Medium", component: (p) => (
          <GenericStep {...p} title="Select Art Medium" description="What artistic medium should the image use?" options={options.medium} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="medium" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Lighting", component: (p) => (
          <GenericStep {...p} title="Select Lighting Style" description="How should the scene be lit?" options={options.lighting} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="lighting" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Lens", component: (p) => (
          <GenericStep {...p} title="Select Camera & Lens" description="What camera perspective or lens effect?" options={options.lens} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="lens" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Mood", component: (p) => (
          <GenericStep {...p} title="Select Mood & Vibe" description="What emotional tone should the image convey?" options={options.mood} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="mood" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Color Pal.", component: (p) => (
          <GenericStep {...p} title="Select Color Palette" description="What color scheme should dominate?" options={options.colorPalette} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="colorPalette" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Composition", component: (p) => (
          <GenericStep {...p} title="Select Composition Style" description="How should the scene be framed?" options={options.composition} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="composition" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Texture", component: (p) => (
          <GenericStep {...p} title="Select Surface Texture" description="What texture should the surfaces have?" options={options.texture} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="texture" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Aspect Ratio", component: (p) => (
          <GenericStep {...p} title="Select Aspect Ratio" description="What frame dimensions should be used?" options={options.aspectRatio} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="aspectRatio" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}









