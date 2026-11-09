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

export type Category = "Tops";
export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  status: "In stock";
  colour: string;
  description: string;
  image: string;
  localImage: string;
  originalImage: string;
  alt: string;
};

export const products: Product[] = [
  {
    id: "lace-hem-halter-top-chocolate",
    name: "Lace-Hem Halter Top",
    category: "Tops",
    price: 270,
    status: "In stock",
    colour: "Chocolate",
    description: "A near-black chocolate halter top with a halter neckline, loose drape and wide floral lace hem. Please confirm your size availability and delivery details with FYNZA on WhatsApp.",
    image: "/manus-storage/fynza-chocolate-hd_f9afe082.webp",
    localImage: "/images/fynza-chocolate-hd.webp",
    originalImage: "/images/fynza-chocolate-original.jpg",
    alt: "Near-black chocolate Lace-Hem Halter Top with a loose drape and wide floral lace hem",
  },
  {
    id: "lace-hem-halter-top-pale-yellow",
    name: "Lace-Hem Halter Top",
    category: "Tops",
    price: 270,
    status: "In stock",
    colour: "Pale Yellow",
    description: "A pale butter-yellow halter top with a halter neckline, loose drape and wide floral lace hem. Please confirm your size availability and delivery details with FYNZA on WhatsApp.",
    image: "/manus-storage/fynza-yellow-hd_d243a327.webp",
    localImage: "/images/fynza-yellow-hd.webp",
    originalImage: "/images/fynza-yellow-original.jpg",
    alt: "Pale butter-yellow Lace-Hem Halter Top with a loose drape and wide floral lace hem",
  },
];

export function whatsappUrl(product?: Product) {
  const text = product
    ? `Hi FYNZA! I'm interested in the ${product.name} (${product.colour}) at BWP ${product.price}. Please confirm size availability and delivery.`
    : "Hi FYNZA! I'd like to ask about the current Lace-Hem Halter Top stock. Please confirm available sizes and delivery options.";
  return `https://wa.me/${SALES_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function filterProducts(category: string, colour: string, query: string, sort: string) {
  const filtered = products.filter(product =>
    (category === "All" || product.category === category) &&
    (colour === "All colours" || product.colour === colour) &&
    `${product.name} ${product.colour} ${product.category} ${product.description} ${product.alt}`.toLowerCase().includes(query.trim().toLowerCase()),
  );
  if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
  return filtered;
}
