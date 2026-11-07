# FYNZA — Rose Boutique

A responsive Botswana clothing storefront built from the approved rose, burgundy and warm-cream concept. The homepage includes a silent fashion-video background, a stock grid immediately beneath it, category/size/search filters, product details and WhatsApp inquiries to **+267 75 388 058**.

## Run and build

Use Node.js 22+ and the pinned pnpm 10.18.0 toolchain. Run `pnpm install --frozen-lockfile`, then `pnpm dev:static` to develop on port 3000. Run `pnpm check`, `pnpm test`, and `pnpm build:static`. Deploy `dist/public` on any static web host. No database, login, payment gateway or backend credentials are required for this storefront.

## Replace the example stock before live trading

All four products, photographs, prices, sizes and stock statuses are illustrative and explicitly labelled as such on the website. Update `client/src/lib/catalogue.ts` with actual inventory and replace the files under `client/public/images`. WhatsApp links ask sales to confirm the actual item, price and availability; the site does not accept payments or promise delivery terms. The demo is marked noindex so unconfirmed products are not deliberately indexed by search engines.

## Project layout

`client/src/pages/Home.tsx` assembles the storefront. `components/BoutiqueHero.tsx` contains the logo, navigation and accessible video controls. `components/ProductCard.tsx` handles size selection and product dialogs. `lib/catalogue.ts` is the stock and sales-contact source. `index.css` owns the responsive boutique design. `scripts/prerender.tsx` includes homepage content in the static HTML for link previews. Local asset copies are included so the repository remains portable; managed asset URLs fall back to those local files.

The supplied original FYNZA logo is retained at `client/public/images/fynza-original.jpg`. The header uses a crop of its complete circular seal, not a replacement brand mark. Motion defaults include muted playback, a pause/play control, a static-poster fallback and reduced-motion support.
