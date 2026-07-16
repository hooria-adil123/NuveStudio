import { Project, Service, JournalArticle } from './types';

import diningSerraNicheImg from './assets/images/dining_serra_niche_1784203186446.jpg';
import deskSableLightImg from './assets/images/desk_sable_light_1784203207473.jpg';
import heroPlasterInteriorImg from './assets/images/hero_plaster_interior_1784203156784.jpg';
import bedroomOrganicImg from './assets/images/bedroom_organic_1784203171535.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'serra-niche',
    slug: 'serra-niche',
    title: 'SERRA NICHE',
    location: 'Mallorca, Spain',
    year: '2024',
    number: '01/08',
    description: 'Mediterranean calm meets sculptural tactility. Muted tones and raw textures shape a serene dining atmosphere.',
    fullDescription: 'Serra Niche is a deep study of coastal slowness. Located in the heart of Mallorca, this boutique restaurant space combines a handcrafted plaster banquette, monolithic raw timber dining tables, and striking tiered woven jute fixtures that cast a soft, nested glow. Every detail, from the textured plaster walls to the weathered olive planters, is custom-tailored to foster an atmosphere of pure presence and culinary intimacy.',
    primaryImage: diningSerraNicheImg,
    secondaryImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    accentColors: ['#B8A28E', '#6E725F', '#E6E1D8'],
    paletteNames: ['sandstone', 'olive', 'soft linen white'],
    category: 'hospitality',
    specs: [
      { label: 'Location', value: 'Mallorca, Spain' },
      { label: 'Area', value: '180 sqm' },
      { label: 'Lead Designer', value: 'Evelyn Vane' },
      { label: 'Materials', value: 'Hand-sculpted Plaster, Rough Oak, Raw Jute' },
      { label: 'Year Completed', value: '2024' }
    ]
  },
  {
    id: 'sable-light',
    slug: 'sable-light',
    title: 'SABLE LIGHT',
    location: 'Lisbon, Portugal',
    year: '2024',
    number: '02/08',
    description: 'Crafted for clarity and calm. Neutral tones and quiet materials shape a focused, reflective work sanctuary.',
    fullDescription: 'Sable Light reimagines the traditional office as an oasis of absolute stillness. Nestled inside a sun-washed Lisbon flat, this space features a minimal solid-wood floating desk anchored against a recessed arched window. Textured pampas grass stands in rustic ceramic vases, while a tactile white boucle lounge chair invites comfortable reflection. Soft light filters through linen curtains, playing with geometric desk alignments and bringing organic quiet luxury to the workday.',
    primaryImage: deskSableLightImg,
    secondaryImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    accentColors: ['#8C7C6D', '#D9C8B5', '#ECE8E1'],
    paletteNames: ['ash wood', 'oat beige', 'soft ivory white'],
    category: 'residential',
    specs: [
      { label: 'Location', value: 'Lisbon, Portugal' },
      { label: 'Area', value: '45 sqm' },
      { label: 'Lead Designer', value: 'Liam Soren' },
      { label: 'Materials', value: 'Bleached Ash, Boucle Wool, Coarse Clay' },
      { label: 'Year Completed', value: '2024' }
    ]
  },
  {
    id: 'ocular-plaster',
    slug: 'ocular-plaster',
    title: 'OCULAR PLASTER',
    location: 'Athens, Greece',
    year: '2025',
    number: '03/08',
    description: 'Our signature living space utilizing curved plaster walls and low, organic dark oak elements.',
    fullDescription: 'Ocular Plaster is a boutique residential sanctuary designed around fluid movement and sculptural form. Located in Athens, the living space is dominated by an immersive, hand-crafted plaster hearth and a large, organically curved irregular mirror that doubles the warm, natural light. Minimal dark-oak furniture floats along the floor plane, grounded by a low round floor cushion and sculptural potted bonsai trees that add a touch of dynamic life to the quiet, mineral-toned room.',
    primaryImage: heroPlasterInteriorImg,
    secondaryImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    accentColors: ['#32251D', '#D7CEBF', '#4A5043'],
    paletteNames: ['espresso oak', 'warm plaster', 'deep forest'],
    category: 'residential',
    specs: [
      { label: 'Location', value: 'Athens, Greece' },
      { label: 'Area', value: '220 sqm' },
      { label: 'Lead Designer', value: 'Evelyn Vane' },
      { label: 'Materials', value: 'Sculpted Plaster, Dark Bog Oak, Travertine' },
      { label: 'Year Completed', value: '2025' }
    ]
  },
  {
    id: 'curved-slumber',
    slug: 'curved-slumber',
    title: 'CURVED SLUMBER',
    location: 'Oslo, Norway',
    year: '2025',
    number: '04/08',
    description: 'A luxury minimalist bedroom with textured plaster walls and organic architectural curves.',
    fullDescription: 'Curved Slumber represents the ultimate intersection of modern architectural minimalism and cozy Scandinavian hygge. Situated in Oslo, this primary bedroom is sculpted as a continuous plaster envelope. The low-profile platform bed curves seamlessly out of the floor, draped in heavy natural linens. High wooden window pillars frame views of misty pine forests, flooding the interior with cool Northern light that is softened by the tactile warmth of custom oak logs and a circular wool pouf.',
    primaryImage: bedroomOrganicImg,
    secondaryImage: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
    accentColors: ['#5E4C41', '#CBBFB0', '#2E352B'],
    paletteNames: ['brushed timber', 'organic linen', 'misty pine'],
    category: 'residential',
    specs: [
      { label: 'Location', value: 'Oslo, Norway' },
      { label: 'Area', value: '75 sqm' },
      { label: 'Lead Designer', value: 'Kari Sol' },
      { label: 'Materials', value: 'Handmade Gesso, Native Spruce, Loomed Linen' },
      { label: 'Year Completed', value: '2025' }
    ]
  },
  {
    id: 'terracotta-hearth',
    slug: 'terracotta-hearth',
    title: 'TERRACOTTA HEARTH',
    location: 'Siena, Italy',
    year: '2025',
    number: '05/08',
    description: 'A rustic kitchen grounded by earthy tiles and modern metallic accents.',
    fullDescription: 'Terracotta Hearth bridges historical warmth with highly focused modern functionality. Built inside a restored Tuscan barn, the kitchen centers on a massive island topped with raw volcanic basalt stone. The floor is lined with antique reclaimed terracotta tiles, which provide a highly textural contrast against sleek brushed steel cabinetry and raw clay light domes that cast an amber ambient glow.',
    primaryImage: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    accentColors: ['#9A4F35', '#4A4D50', '#C2AC96'],
    paletteNames: ['raw terracotta', 'steel gray', 'soft clay'],
    category: 'residential',
    specs: [
      { label: 'Location', value: 'Siena, Italy' },
      { label: 'Area', value: '90 sqm' },
      { label: 'Lead Designer', value: 'Liam Soren' },
      { label: 'Materials', value: 'Volcanic Basalt, Raw Clay, Brushed Steel' },
      { label: 'Year Completed', value: '2025' }
    ]
  },
  {
    id: 'tactile-sanctum',
    slug: 'tactile-sanctum',
    title: 'TACTILE SANCTUM',
    location: 'Kyoto, Japan',
    year: '2024',
    number: '06/08',
    description: 'A tea room styled with rice paper panels, natural cedar and moss-green tatami.',
    fullDescription: 'Tactile Sanctum is an exercise in extreme restraint. Conceived as a modern tea pavilion, the space is lined with hand-woven tatami mats and panels made of coarse mulberry paper. Beautiful untreated Japanese cedar wood lines the structural columns, releasing a subtle, clean aroma. Shadows from sliding shoji screens dance across the floor, drawing attention to a singular, raw river stone placed in the alcove.',
    primaryImage: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    accentColors: ['#7A5F43', '#5B624A', '#E2DCD2'],
    paletteNames: ['cedar wood', 'tatami green', 'rice paper'],
    category: 'hospitality',
    specs: [
      { label: 'Location', value: 'Kyoto, Japan' },
      { label: 'Area', value: '35 sqm' },
      { label: 'Lead Designer', value: 'Hana Sato' },
      { label: 'Materials', value: 'Japanese Cedar, Woven Tatami, Mulberry Shoji' },
      { label: 'Year Completed', value: '2024' }
    ]
  },
  {
    id: 'restful-restraint',
    slug: 'restful-restraint',
    title: 'RESTFUL RESTRAINT',
    location: 'Stockholm, Sweden',
    year: '2024',
    number: '07/08',
    description: 'A spacious loft focusing on light-filled negative space and sleek monolithic blocks.',
    fullDescription: 'Restful Restraint is a high-volume residential loft designed with sculptural monumentalism. By removing all dividing partitions, the space relies on monolithic blocks of dark grey basalt stone to define different areas. Wide planks of light Douglas fir run underfoot, and walls are kept entirely white, allowing the changing outdoor daylight to paint the room with subtle shadows and ambient warmth.',
    primaryImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    accentColors: ['#1C2321', '#BEB5A5', '#EAE3D6'],
    paletteNames: ['basalt stone', 'clear ash', 'pale wool'],
    category: 'residential',
    specs: [
      { label: 'Location', value: 'Stockholm, Sweden' },
      { label: 'Area', value: '310 sqm' },
      { label: 'Lead Designer', value: 'Evelyn Vane' },
      { label: 'Materials', value: 'Basalt, Douglas Fir, Loomed Boucle' },
      { label: 'Year Completed', value: '2024' }
    ]
  },
  {
    id: 'mineral-atrium',
    slug: 'mineral-atrium',
    title: 'MINERAL ATRIUM',
    location: 'Copenhagen, Denmark',
    year: '2026',
    number: '08/08',
    description: 'A modern office lounge combining raw travertine pillars with soft velvet upholstery.',
    fullDescription: 'Mineral Atrium explores the juxtaposition of hard mineral volumes and soft organic fibers. The space centers around several load-bearing pillars of unfilled honed travertine. To soften these powerful structural statements, we introduced custom modular sofas upholstered in a rich olive-mohair velvet. Warm timber side tables and floating paper lantern sculptures create a comfortable, creative environment for group discussion.',
    primaryImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    accentColors: ['#CBBBA4', '#1A2E22', '#413A32'],
    paletteNames: ['raw travertine', 'charcoal', 'moss green'],
    category: 'commercial',
    specs: [
      { label: 'Location', value: 'Copenhagen, Denmark' },
      { label: 'Area', value: '420 sqm' },
      { label: 'Lead Designer', value: 'Liam Soren' },
      { label: 'Materials', value: 'Travertine, Mohair Velvet, Stained Oak' },
      { label: 'Year Completed', value: '2026' }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'design-project',
    number: '01',
    title: 'DESIGN PROJECT',
    description: 'We offer more than design – we craft experiences through clarity, texture, intention, and thoughtful presence.',
    longDescription: 'Our comprehensive design services guide your space from architectural layout to final tactile curation. We create physical models, spatial drawings, and material elevations, allowing you to sense the scale, flow, and texture of your future interior long before construction begins. We align your space with how you live and feel, treating light, shade, and air as physical elements.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sourcing',
    number: '02',
    title: 'SOURCING',
    description: 'Curating bespoke furniture, unique vintage elements, and custom textile pairings that anchor a room.',
    longDescription: 'We possess an extensive, hand-vetted network of global antique dealers, high-end artisans, and custom craft studios. We source rare timber sideboards, tactile ceramic planters, handmade paper sculptures, and low-slung textile seats that hold historic character. Each selected item is chosen to act as an anchor point for the room, creating an authentic dialogue between the old and the new.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'styling',
    number: '03',
    title: 'STYLING',
    description: 'The final layer of tactile alignment — selecting art, ceramic, botany, and objects of curiosity.',
    longDescription: 'A space is only truly complete once its quietest elements are balanced. Our styling service arranges carefully curated artwork, custom ceramic vessels, organic foliage, and sculptural lighting fixtures. We analyze how shadows fall across your tables, adjusting positions to produce beautiful, calming compositions throughout the day. This is where restraint meets pure elegance.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'supervision',
    number: '04',
    title: 'SUPERVISION',
    description: 'Working side-by-side with artisans and craftsmen to ensure execution aligns perfectly with the initial intent.',
    longDescription: 'To turn paper designs into physical sanctuaries, we supervise the entire build process. We stand in the construction zone alongside masons, plasterers, and woodworkers. We verify the specific texture of plaster coats, audit the alignment of wooden joint lines, and adjust light fixture drops in real-time. This hands-on presence protects the depth and emotional resonance of the concept.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
  }
];

export const JOURNAL: JournalArticle[] = [
  {
    id: 'spaces-that-breathe',
    slug: 'spaces-that-breathe',
    title: 'SPACES THAT BREATHE',
    date: 'June 14, 2026',
    category: 'Interior Philosophy',
    excerpt: 'An exploration of negative space and how intentional emptiness lets a room breathe and hold emotion.',
    content: `
At Nuve Studio, we believe that the most vital element of any room is often the one you cannot touch: **emptiness**.

In a world filled with continuous visual stimulation and noise, our homes are increasingly required to serve as psychological sanctuaries. Yet, the instinctive response when designing a space is often to fill it. We purchase another chair, add another shelf, cover another blank wall with frames. 

But a room that is completely filled leaves no space for the mind to expand. It becomes a container of possessions, rather than a vessel for living.

### The Art of Leaving Room

Designing with **restraint** means understanding that a blank plaster wall is not a failure of decoration; it is a conscious decision to frame light. When a wall is left bare, the early morning sun has a canvas upon which to paint its soft yellow gradients. The shadow of a single dry olive branch can stretch across the floor, drawing attention to the passage of time.

*   **Generous Margins**: Just as a luxury book places its text within wide, clean paper margins, a high-end room places its furniture within wide, open floor space.
*   **Monolithic Anchors**: Instead of filling a room with multiple small items of furniture, we prefer a single, powerful monolithic statement—like a large travertine coffee table—surrounded by negative space.
*   **The Power of Pause**: A hallway left empty invites slower walking. A corner left vacant creates a visual resting point, a place for the eye to pause before taking in the rest of the architecture.

By practicing structural editing, we allow our spaces to breathe. Emptiness ceases to feel hollow, transforming instead into a warm, supportive presence that holds emotion, calm, and clarity.
    `,
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80',
    readTime: '4 min read'
  },
  {
    id: 'textures-of-stillness',
    slug: 'textures-of-stillness',
    title: 'TEXTURES OF STILLNESS',
    date: 'May 02, 2026',
    category: 'Material Study',
    excerpt: 'How raw plaster, split timber, and brushed metal engage our senses and bring quietness into daily rituals.',
    content: `
How does stillness feel when you run your hand across it?

When we design, we think of materials not merely as surface choices, but as direct sensory interfaces. A highly polished, synthetic material feels cold, sterile, and unyielding. It reflects light in sharp, glaring lines, keeping our minds alert and tense. 

Conversely, organic, tactile materials absorb light. They invite touch, introducing a deep somatic grounding into our spaces.

### The Physicality of Quietness

We work with materials that are allowed to retain their history, weathering gracefully over time:

1.  **Hand-Applied Plaster**: Our signature wall finish is applied using mineral plaster and coarse sands. It is left un-sanded, retaining the rhythmic sweeps of the craftsman's trowel. This textured surface diffuses light softly, eliminating sharp glare and wrapping the room in a gentle, velvet shadow.
2.  **Split Timber**: We prefer raw timber that shows its ring lines, knot patterns, and natural weathering. Walking barefoot on a floor made of untreated spruce or Douglas fir immediately grounds the nervous system.
3.  **Honed Travertine**: Unfilled, honed travertine contains tiny caverns and veins. It looks and feels like a block of ancient earth brought inside, reminding us of geological slow-time.
4.  **Brushed, Unlacquered Metals**: Copper and brass fixtures are left raw so they can oxidize. The touch of a hand slowly patinates the metal, creating a living piece of hardware that matures alongside the house.

When these materials are balanced within a room, they speak directly to our tactile senses. They encourage us to put down our digital devices, running our hands across the rugged clay of a vase or the soft grain of an oak seat, re-anchoring ourselves in the immediate, physical present.
    `,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    readTime: '5 min read'
  },
  {
    id: 'light-as-a-material',
    slug: 'light-as-a-material',
    title: 'LIGHT AS A MATERIAL',
    date: 'April 11, 2026',
    category: 'Atmosphere',
    excerpt: 'Designing not just with solid walls, but with the path of the sun. Capturing morning glows and late afternoon shadows.',
    content: `
In architectural drafting, we draw walls, doors, and columns with solid ink. Yet, the most transformative element we work with is entirely weightless: **light**.

A space without conscious light design is static. It remains identical at 8:00 AM and 6:00 PM, disconnected from the rhythm of the natural world. But when we treat light as a physical material—folding it, filtering it, and focusing it—the home becomes a living, breathing sundial.

### Sculpting with Shadows

We do not design for uniform brightness. A room that is evenly illuminated by overhead spotlights feels like a clinical office. True luxury lies in the balance between light and shadow.

*   **The Morning Wash**: In dining and breakfast nooks, we position narrow vertical windows that capture the low, golden rays of the early sun, washing over textured walls and creating a warm, energetic start to the day.
*   **Filtered Diffuse Light**: For living areas and bedrooms, we employ deep window recesses, linen drapery, and sliding screens. This filters harsh direct midday glare, transforming it into a soft, ambient glow that feels incredibly protective.
*   **The Evening Shadowplay**: As evening approaches, we utilize low-level light sources—floor lanterns, table bowls, and concealed ledger strips. This places illumination near the floor plane, mirroring the setting sun and signaling the brain to release tension and prepare for sleep.

By aligning our interiors with the daily journey of the sun, we allow the house to feel connected to the seasons and the sky. The light is never decorative; it is the soul of the space.
    `,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    readTime: '4 min read'
  }
];
