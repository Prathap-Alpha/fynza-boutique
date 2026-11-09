# FYNZA — Rose Boutique

A responsive Botswana clothing storefront built from the approved rose, burgundy and warm-cream concept. The homepage keeps the existing silent fashion-video hero, then presents the actual two-piece stock: **Lace-Hem Halter Top — Chocolate** and **Lace-Hem Halter Top — Pale Yellow**, both **BWP 270 each**. Customers confirm size availability and delivery via WhatsApp at **+267 75 388 058**.

## Run and build

Use Node.js 22+ and the pinned pnpm 10.18.0 toolchain. Run `pnpm install --frozen-lockfile`, then `pnpm dev:static` to develop on port 3000. Run `pnpm check`, `pnpm test`, and `pnpm build:static`. Deploy `dist/public` on any static web host. No database, login, payment gateway or backend credentials are required for this storefront.

## Current stock and images

The confirmed catalogue lives in `client/src/lib/catalogue.ts` and contains exactly two Tops products at BWP 270 each. Enhanced product images are expected at `client/public/images/fynza-chocolate-hd.webp` and `client/public/images/fynza-yellow-hd.webp`; the modal's expandable **Original product photo** options use `client/public/images/fynza-chocolate-original.jpg` and `client/public/images/fynza-yellow-original.jpg`. The site does not invent sizes, quantities, fabric composition or delivery promises; WhatsApp is used to confirm size availability and delivery.

## Project layout

`client/src/pages/Home.tsx` assembles the storefront. `components/BoutiqueHero.tsx` contains the unchanged logo, navigation and accessible video controls. `components/ProductCard.tsx` handles product cards, accurate prices, WhatsApp inquiries and original-photo disclosures. `lib/catalogue.ts` is the stock and sales-contact source. `index.css` owns the responsive boutique design. `scripts/prerender.tsx` includes homepage content in the static HTML for link previews. Local asset copies keep the repository portable.

The supplied original FYNZA logo is retained at `client/public/images/fynza-original.jpg`. The header uses a crop of its complete circular seal, not a replacement brand mark. Motion defaults include muted playback, a pause/play control, a static-poster fallback and reduced-motion support.
