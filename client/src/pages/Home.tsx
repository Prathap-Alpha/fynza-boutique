import { useState } from "react";
import { ArrowRight, ArrowUpRight, MessageCircle, Phone, Search, X } from "lucide-react";
import BoutiqueHero, { BrandLogo } from "@/components/BoutiqueHero";
import ProductCard from "@/components/ProductCard";
import { filterProducts, SALES_DISPLAY, whatsappUrl } from "@/lib/catalogue";

export default function Home() {
  const [category, setCategory] = useState("All");
  const [colour, setColour] = useState("All colours");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const visibleProducts = filterProducts(category, colour, query, sort);
  const reset = () => { setCategory("All"); setColour("All colours"); setQuery(""); setSort("featured"); };

  return <div className="boutique-page">
    <a className="skip-link" href="#stock">Skip to available stock</a>
    <main>
      <BoutiqueHero />
      <section className="stock-section" id="stock" aria-labelledby="stock-heading">
        <div className="section-title-row"><div><p className="eyebrow burgundy"><span />Find your next favourite</p><h2 id="stock-heading">Available <em>stock.</em></h2></div><p className="section-intro">A little elegance for every day.<br />Browse the pieces. Make them yours.</p></div>
        <div className="stock-toolbar"><div className="category-tabs" role="group" aria-label="Filter by clothing category">{["All", "Tops"].map(value => <button key={value} aria-pressed={category === value} className={category === value ? "active" : ""} onClick={() => setCategory(value)}>{value === "All" ? "All pieces" : value}</button>)}</div><div className="stock-controls"><label className="stock-search"><Search size={15} /><span className="sr-only">Search the available collection</span><input type="search" placeholder="Find a piece…" value={query} onChange={event => setQuery(event.target.value)} />{query && <button aria-label="Clear search" onClick={() => setQuery("")}><X size={13} /></button>}</label><label className="colour-filter"><span className="sr-only">Filter by colour</span><select value={colour} onChange={event => setColour(event.target.value)}><option>All colours</option><option>Chocolate</option><option>Pale Yellow</option></select></label></div></div>
        <div className="stock-count-row"><span>{visibleProducts.length} {visibleProducts.length === 1 ? "colourway" : "colourways"} available</span><label><span className="sr-only">Sort products</span><select value={sort} onChange={event => setSort(event.target.value)}><option value="featured">The FYNZA edit</option><option value="price-asc">Price: low to high</option><option value="price-desc">Price: high to low</option></select></label></div>
        {visibleProducts.length ? <div className="product-grid">{visibleProducts.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}</div> : <div className="stock-empty"><h3>No pieces match just yet.</h3><p>Try a different colour, category or search.</p><button onClick={reset}>Reset filters <ArrowRight size={16} /></button></div>}
        <p className="stock-endnote">Need to confirm your size or delivery? <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Ask us on WhatsApp <ArrowUpRight size={13} /></a></p>
      </section>
      <section className="contact-section" id="contact" aria-labelledby="contact-heading"><div className="contact-heading"><p className="eyebrow">Your style. Your conversation.</p><h2 id="contact-heading">Let's find something<br /><em>beautiful for you.</em></h2><p>Ask about size availability and delivery.<br />The next look starts with a hello.</p></div><div className="contact-actions"><a className="contact-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle size={21} />Chat with FYNZA<ArrowUpRight size={20} /></a><a className="contact-phone" href="tel:+26775388058"><Phone size={15} />{SALES_DISPLAY}</a><small>Sales &amp; clothing inquiries</small></div></section>
    </main>
    <footer className="site-footer"><div className="footer-top"><BrandLogo footer /><p>Fashion is what you wear.<br /><em>FYNZA is how you feel.</em></p><a href="#top">Back to the top <ArrowUpRight size={15} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} FYNZA. All rights reserved.</span><a href="tel:+26775388058">{SALES_DISPLAY}</a></div></footer>
    <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label={`Chat with FYNZA sales on WhatsApp at ${SALES_DISPLAY}`}><MessageCircle size={23} /></a>
  </div>;
}
