import { describe, expect, it } from "vitest";
import { filterProducts, products, SALES_NUMBER, whatsappUrl } from "./catalogue";

describe("FYNZA demo catalogue", () => {
  it("shows the four approved sample pieces", () => {
    expect(products.map(p => [p.name, p.price])).toEqual([["Satin Dress", 450], ["Rose Blouse", 280], ["Tailored Set", 650], ["Everyday Dress", 350]]);
  });
  it("filters by category and size", () => {
    expect(filterProducts("Dresses", "All sizes", "", "featured")).toHaveLength(2);
    expect(filterProducts("All", "XL", "", "featured").map(p => p.name)).toEqual(["Tailored Set"]);
    expect(filterProducts("Tops", "XL", "", "featured")).toHaveLength(0);
  });
  it("searches case-insensitively and orders sample prices", () => {
    expect(filterProducts("All", "All sizes", "  BURGUNDY ", "featured")[0].name).toBe("Satin Dress");
    expect(filterProducts("All", "All sizes", "", "price-asc").map(p => p.price)).toEqual([280, 350, 450, 650]);
    expect(filterProducts("All", "All sizes", "", "price-desc").map(p => p.price)).toEqual([650, 450, 350, 280]);
  });
  it("opens an inquiry to the exact authorised phone number with the selected item and size", () => {
    const url = new URL(whatsappUrl(products[0], "M"));
    expect(SALES_NUMBER).toBe("26775388058");
    expect(url.origin + url.pathname).toBe("https://wa.me/26775388058");
    expect(url.searchParams.get("text")).toContain("Satin Dress");
    expect(url.searchParams.get("text")).toContain("size M");
    expect(url.searchParams.get("text")).toContain("demo catalogue");
    expect(url.searchParams.get("text")).toContain("confirm");
  });
});
