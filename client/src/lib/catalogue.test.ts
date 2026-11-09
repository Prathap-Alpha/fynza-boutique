import { describe, expect, it } from "vitest";
import { filterProducts, products, SALES_NUMBER, whatsappUrl } from "./catalogue";

describe("FYNZA actual catalogue", () => {
  it("contains exactly the two confirmed halter tops at BWP270 each", () => {
    expect(products).toHaveLength(2);
    expect(products.map(product => [product.name, product.colour, product.price])).toEqual([
      ["Lace-Hem Halter Top", "Chocolate", 270],
      ["Lace-Hem Halter Top", "Pale Yellow", 270],
    ]);
    expect(products.every(product => product.category === "Tops" && product.status === "In stock")).toBe(true);
  });

  it("filters by the only category and confirmed colours", () => {
    expect(filterProducts("Tops", "All colours", "", "featured")).toHaveLength(2);
    expect(filterProducts("Dresses", "All colours", "", "featured")).toHaveLength(0);
    expect(filterProducts("Tops", "Chocolate", "", "featured").map(product => product.colour)).toEqual(["Chocolate"]);
    expect(filterProducts("Tops", "Pale Yellow", "", "featured").map(product => product.colour)).toEqual(["Pale Yellow"]);
  });

  it("searches case-insensitively and keeps both real prices", () => {
    expect(filterProducts("All", "All colours", "  BUTTER-YELLOW ", "featured")[0]?.colour).toBe("Pale Yellow");
    expect(filterProducts("All", "All colours", "", "price-asc").map(product => product.price)).toEqual([270, 270]);
    expect(filterProducts("All", "All colours", "", "price-desc").map(product => product.price)).toEqual([270, 270]);
  });

  it("opens an inquiry to the authorised phone number with product, price, size and delivery confirmation", () => {
    const url = new URL(whatsappUrl(products[0]));
    const text = url.searchParams.get("text") ?? "";
    expect(SALES_NUMBER).toBe("26775388058");
    expect(url.origin + url.pathname).toBe("https://wa.me/26775388058");
    expect(text).toContain("Lace-Hem Halter Top");
    expect(text).toContain("Chocolate");
    expect(text).toContain("BWP 270");
    expect(text).toContain("size availability");
    expect(text).toContain("delivery");
    expect(text).not.toContain("demo");
  });
});
