# Aruma Tacos & Tequila

A production-oriented restaurant experience for Aruma's Marshall, Minnesota location. The approved concept was rebuilt in Astro 4, Tailwind CSS, and GSAP with a larger content system, responsive interactions, optimized local photography, and accessible motion fallbacks.

## Run locally

```bash
npm install
npm run dev
```

The local site is available at `http://localhost:4321`.

```bash
npm run check   # Astro and TypeScript diagnostics
npm run build   # Validate and generate the static site in dist/
npm run preview # Preview the production build
```

## Main project files

- `src/pages/index.astro` — page structure and image assignments
- `src/data/site.ts` — address, hours, featured menu data, and full-menu data
- `src/data/promotions.ts` — the weekly specials, monthly offers, promo code, and VIP text-club details
- `src/styles/global.css` — visual system, layout, responsive behavior, and component styling
- `src/scripts/main.ts` — GSAP motion and all page interactions
- `src/components/` — shared header, brand mark, reservation flow, and full-menu dialog
- `src/assets/images/` — hero, menu, and remaining concept photography
- `src/assets/store pics/` — original Aruma bar, dining-room, kitchen, and patio photography

## Photography handoff

The bar, dining-room, kitchen, and patio photographs are original Aruma assets. The food, cocktail, agave, and group-dining placeholders should be replaced as matching restaurant photography becomes available. JPG files in sRGB are ideal; Astro generates the production WebP files automatically.

| Filename | Used for | Recommended master | Composition guidance |
| --- | --- | --- | --- |
| `logoo.png` | Site logo and favicon | Current 1319 × 1192 transparent PNG | Preserve transparency and the illuminated red/cyan edge treatment |
| `bar.png` | Opening hero | 2400 × 1600 or larger, 3:2 | Current real bar image is usable; a larger master would provide more flexibility on high-density displays |
| `store pics/bar normal.png` | Interior gallery | Current 1672 × 941 | Real Aruma bar photograph |
| `store pics/inside.png` | Gallery and reservation dialog | Current 1462 × 1076 | Real dining-room photograph |
| `store pics/inside2.png` | Story feature | Current 1448 × 1086 | Real dining-room photograph |
| `store pics/kitchen.png` | Story detail and gallery | Current 1448 × 1086 | Real kitchen-pass photograph |
| `store pics/outsite.png` | Patio gallery and gatherings | Current 1448 × 1086 | Real patio photograph; keep the filename until the existing page import is renamed |
| `fajitas.jpg` | Fire ritual and menu | 2200 × 1650 or larger, 4:3 | Sizzling plate, visible steam, clean edges for cropping |
| `birria.jpg` | Taco ritual, menu, gallery | 2200 × 1650 or larger, 4:3 | Hero plate with lime, salsa, and real table texture; keep the dish near center |
| `churros.jpg` | Dessert ritual and menu | 1600 × 2000 or larger, 4:5 | Vertical dessert detail with a little darker negative space |
| `margarita.jpg` | Story detail and menu | 1800 × 2250 or larger, 4:5 | One signature margarita, visible condensation and garnish, clean bar background |
| `aruma-cocktail.png` | Main agave feature | 1600 × 2400 or larger, 2:3 | Vertical signature cocktail, centered low, moody space above |
| `agave-field.jpg` | Agave transition | 2400 × 1600 or larger, 3:2 | Wide atmospheric landscape or a strong Aruma bar/interior replacement with depth |

For the cleanest results, avoid baked-in text, watermarks, phone UI, and extreme color grading. Keep important faces, plates, and glassware away from the outer 10% because the responsive crops change by screen size.

## Before launch

- Confirm hours, menu items, prices, and address in `src/data/site.ts`.
- Replace the remaining food, cocktail, agave, and group-lifestyle placeholders with original restaurant photography.
- Update weekly and monthly offers in `src/data/promotions.ts`; no component edits are required.
- Connect the reservation form in `src/scripts/main.ts` to the restaurant's booking provider or form endpoint.
- Replace the placeholder Instagram URL in `src/data/site.ts`.
- Add final Open Graph photography and the production domain.

This project intentionally remains on Astro 4.x per the build requirement and exports a static site. Keep the development server private; Astro 4 is an older major line and current npm advisories recommend moving to a maintained Astro release when the project constraint allows it.
