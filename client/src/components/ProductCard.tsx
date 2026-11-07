import { useState } from "react";
import { ArrowUpRight, MessageCircle, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Product, whatsappUrl } from "@/lib/catalogue";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const [size, setSize] = useState<string>();
  function productImage(className: string) {
    return <img className={className} src={product.image} onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = product.localImage; }} alt={`${product.name} in ${product.colour} — illustrative fashion image`} loading="lazy" width="480" height="400" />;
  }
  const sizeButtons = <div className="size-buttons" role="group" aria-label={`Select a size for ${product.name}`}>{product.sizes.map(value => <button key={value} className={size === value ? "selected" : ""} aria-pressed={size === value} onClick={() => setSize(size === value ? undefined : value)}>{value}</button>)}</div>;
  return <article className="product-card">
    <Dialog>
      <div className="product-image-wrap">{productImage("product-image")}<span className={`stock-badge ${product.status === "Low stock" ? "low" : ""}`}>Example: {product.status.toLowerCase()}</span><span className="product-number">0{index + 1}</span><DialogTrigger asChild><button className="quick-view" aria-label={`View ${product.name} details`}><Plus size={17} /></button></DialogTrigger></div>
      <div className="product-info"><div className="product-category">{product.category} <span>{product.colour}</span></div><div className="product-title-row"><DialogTrigger asChild><button className="product-title">{product.name}</button></DialogTrigger><strong className="product-price">P{product.price}</strong></div><span className="price-note">Illustrative price</span><div className="sizes-row"><span>Sizes</span>{sizeButtons}</div><a className="whatsapp-order" href={whatsappUrl(product, size)} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} />Order on WhatsApp<ArrowUpRight size={15} /></a></div>
      <DialogContent className="product-dialog"><div className="dialog-product-photo">{productImage("product-image")}</div><div className="dialog-product-copy"><DialogHeader><p className="eyebrow">FYNZA / {product.category}</p><DialogTitle className="dialog-title">{product.name}</DialogTitle><DialogDescription>{product.description}</DialogDescription></DialogHeader><strong className="dialog-price">P{product.price}<small>Illustrative price · not confirmed stock</small></strong><p className="dialog-label">Choose a size to include in your inquiry</p>{sizeButtons}<a className="whatsapp-order" href={whatsappUrl(product, size)} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} />Order on WhatsApp<ArrowUpRight size={15} /></a><p className="dialog-disclaimer">Opening WhatsApp starts an inquiry. No payment is taken here; confirm stock, size, final price and delivery with FYNZA.</p></div></DialogContent>
    </Dialog>
  </article>;
}
