import { useState } from "react";
import { ArrowUpRight, ArrowRight, MessageCircle, Phone, Search, SlidersHorizontal, Sparkles, X } from "lucide-react";
import BoutiqueHero, { BrandLogo } from "@/components/BoutiqueHero";
import ProductCard from "@/components/ProductCard";
import { filterProducts, SALES_DISPLAY, whatsappUrl } from "@/lib/catalogue";

export default function Home() {
  const [category, setCategory] = useState("All");
  const [size, setSize] = useState("All sizes");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const visibleProducts = filterProducts(category, size, query, sort);
  const reset = () => { setCategory("All"); setSize("All sizes"); setQuery(""); setSort("featured"); };

  return <div className="boutique-page">
    <a className="skip-link" href="#stock">Skip to available stock</a>
    <main>
      <BoutiqueHero />
      <section className="stock-section" id="stock" aria-labelledby="stock-heading">
        <div className="section-title-row"><div><p className="eyebrow burgundy"><span />Find your next favourite</p><h2 id="stock-heading">Available <em>stock.</em></h2></div><p className="section-intro">A little elegance for every day.<br />Browse the pieces. Make them yours.</p></div>
        <div className="demo-notice"><Sparkles size={16} /><p><strong>A preview of the FYNZA experience.</strong> These products, images, prices, sizes and stock statuses are illustrative. Ask sales to confirm the actual collection.</p></div>
        <div className="stock-toolbar"><div className="category-tabs" role="group" aria-label="Filter by clothing category">{["All", "Dresses", "Tops", "Sets"].map(value => <button key={value} aria-pressed={category === value} className={category === value ? "active" : ""} onClick={() => setCategory(value)}>{value === "All" ? "All pieces" : value}</button>)}</div><div className="stock-controls"><label className="stock-search"><Search size={15} /><span className="sr-only">Search the example collection</span><input type="search" placeholder="Find a piece…" value={query} onChange={event => setQuery(event.target.value)} />{query && <button aria-label="Clear search" onClick={() => setQuery("")}><X size={13} /></button>}</label><label className="size-filter"><SlidersHorizontal size={14} /><span className="sr-only">Filter by size</span><select value={size} onChange={event => setSize(event.target.value)}>{["All sizes", "S", "M", "L", "XL"].map(value => <option key={value}>{value}</option>)}</select></label></div></div>
        <div className="stock-count-row"><span>{visibleProducts.length} {visibleProducts.length === 1 ? "piece" : "pieces"} in the example edit</span><label><span className="sr-only">Sort products</span><select value={sort} onChange={event => setSort(event.target.value)}><option value="featured">The FYNZA edit</option><option value="price-asc">Price: low to high</option><option value="price-desc">Price: high to low</option></select></label></div>
        {visibleProducts.length ? <div className="product-grid">{visibleProducts.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}</div> : <div className="stock-empty"><h3>No pieces match just yet.</h3><p>Try a different size, category or search.</p><button onClick={reset}>Reset filters <ArrowRight size={16} /></button></div>}
        <p className="stock-endnote">Not sure about a size or style? <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Let's find your fit <ArrowUpRight size={13} /></a></p>
      </section>
      <section className="contact-section" id="contact" aria-labelledby="contact-heading"><div className="contact-heading"><p className="eyebrow">Your style. Your conversation.</p><h2 id="contact-heading">Let's find something<br /><em>beautiful for you.</em></h2><p>Ask about current stock, sizing and prices.<br />The next look starts with a hello.</p></div><div className="contact-actions"><a className="contact-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle size={21} />Chat with FYNZA<ArrowUpRight size={20} /></a><a className="contact-phone" href="tel:+26775388058"><Phone size={15} />{SALES_DISPLAY}</a><small>Sales &amp; clothing inquiries</small></div></section>
    </main>
    <footer className="site-footer"><div className="footer-top"><BrandLogo footer /><p>Fashion is what you wear.<br /><em>FYNZA is how you feel.</em></p><a href="#top">Back to the top <ArrowUpRight size={15} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} FYNZA. All rights reserved.</span><span>Demo storefront · illustrative catalogue · no online checkout</span><a href="tel:+26775388058">{SALES_DISPLAY}</a></div></footer>
    <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label={`Chat with FYNZA sales on WhatsApp at ${SALES_DISPLAY}`}><MessageCircle size={23} /></a>
  </div>;
}
