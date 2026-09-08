# Primalact — site rebranding

Next.js 14 (App Router) + Tailwind CSS pentru rebranding-ul site-ului
Primalact / La Ferma, producător de lactate din Satu Mare.

## Pornire

```bash
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000).

## Structură

- `app/` — pagini (App Router): `/`, `/produse`, `/produse/[categorie]`,
  `/produse/[categorie]/[produs]`, `/sustenabilitate`, `/retete`,
  `/despre-noi`, `/noutati`, `/contact`.
- `components/` — componente reutilizabile: `Header`, `Footer`, `VideoHero`,
  `CategoryGrid`, `ProductCard`, `ProductDetail`, `NutritionTable`,
  `SustainabilitySection`, `RecipeCard`, `RecipeFilter`, `ContactForm`.
- `data/products.json` — 10 categorii de produse cu date mock (descriere,
  ingrediente, valori nutriționale, greutate ambalaj). Înlocuiește cu
  conținut real când e disponibil.
- `data/recipes.json` — rețete mock, legate de categorii de produse
  (structură extensibilă, unele marcate `wip`).
- `lib/data.ts` — accesori tipizați pentru datele mock.

## Culori brand

- Alb `#FFFFFF`, crem `#FFF7E3`, albastru `#1B4F8A` — bază.
- Portocaliu `#F5A623` — accent produse.
- Verde `#4CAF50` — accent sustenabilitate.
- Mov `#7B4FA0` — accent rețete.

## Note

Imaginile și video-ul din hero folosesc surse placeholder (`picsum.photos`,
video demo public) — înlocuiește-le cu materiale reale în `data/*.json` și
în paginile statice (`sustenabilitate`, `noutati`, `despre-noi`).
