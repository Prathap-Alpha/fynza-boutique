export const SALES_NUMBER = "26775388058";
export const SALES_DISPLAY = "+267 75 388 058";

export const brand = {
  logo: "/manus-storage/fynza-seal_86fedfe9.webp",
  logoFallback: "/images/fynza-seal.webp",
  poster: "/manus-storage/rose-hero_c27f3eae.webp",
  posterFallback: "/images/rose-hero.webp",
  video: "/manus-storage/fynza-fashion-film_98241d92.mp4",
  videoFallback: "/images/fynza-fashion-film.mp4",
};

export type Category = "Dresses" | "Tops" | "Sets";
export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  sizes: string[];
  status: "In stock" | "Low stock";
  colour: string;
  description: string;
  image: string;
  localImage: string;
};

/** All inventory is illustrative until the business supplies its actual stock. */
export const products: Product[] = [
  {
    id: "satin-dress", name: "Satin Dress", category: "Dresses", price: 450,
    sizes: ["S", "M", "L"], status: "In stock", colour: "Burgundy",
    description: "An elegant burgundy satin look with soft draping. Shown as an example of the FYNZA collection; please confirm the actual garment, fit and price with sales.",
    image: "/manus-storage/01-satin-dress_a2730f45.webp", localImage: "/images/01-satin-dress.webp",
  },
  {
    id: "rose-blouse", name: "Rose Blouse", category: "Tops", price: 280,
    sizes: ["S", "M", "L"], status: "In stock", colour: "Dusty rose",
    description: "A soft rose blouse styled for everyday elegance. This photograph and price illustrate the store design, not confirmed stock.",
    image: "/manus-storage/02-rose-blouse_953509ab.webp", localImage: "/images/02-rose-blouse.webp",
  },
  {
    id: "tailored-set", name: "Tailored Set", category: "Sets", price: 650,
    sizes: ["M", "L", "XL"], status: "Low stock", colour: "Wine",
    description: "A coordinated wine-coloured tailored look. Ask FYNZA to confirm current stock, available sizes and the final price before ordering.",
    image: "/manus-storage/03-tailored-set_8cb9d7ee.webp", localImage: "/images/03-tailored-set.webp",
  },
  {
    id: "everyday-dress", name: "Everyday Dress", category: "Dresses", price: 350,
    sizes: ["S", "M", "L"], status: "In stock", colour: "Rose floral",
    description: "A relaxed floral dress for your everyday wardrobe. This is an illustrative catalogue item; please confirm the real product and availability with sales.",
    image: "/manus-storage/04-everyday-dress_5bc3765c.webp", localImage: "/images/04-everyday-dress.webp",
  },
];

export function whatsappUrl(product?: Product, size?: string) {
  const text = product
    ? `Hi FYNZA! I saw the ${product.name} (${product.colour}) in your demo catalogue${size ? `, size ${size}` : ""}. The illustrative price is P${product.price}. Please confirm the actual product, current stock, available sizes and final price before I order.`
    : "Hi FYNZA! I'd like to browse your clothing collection. Please share current stock, sizes and prices.";
  return `https://wa.me/${SALES_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function filterProducts(category: string, size: string, query: string, sort: string) {
  const filtered = products.filter(product =>
    (category === "All" || product.category === category) &&
    (size === "All sizes" || product.sizes.includes(size)) &&
    `${product.name} ${product.colour} ${product.category}`.toLowerCase().includes(query.trim().toLowerCase()),
  );
  if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
  return filtered;
}
