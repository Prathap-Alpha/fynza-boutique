import { ArrowUpRight, MessageCircle, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Product, whatsappUrl } from "@/lib/catalogue";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  function productImage(className: string) {
    return <img className={className} src={product.image} onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = product.localImage; }} alt={product.alt} loading="lazy" width="480" height="600" />;
  }
  return <article className="product-card">
    <Dialog>
      <div className="product-image-wrap">{productImage("product-image")}<span className="stock-badge">{product.status}</span><DialogTrigger asChild><button className="quick-view" aria-label={`View ${product.name} in ${product.colour} details`}><Plus size={17} /></button></DialogTrigger></div>
      <div className="product-info"><div className="product-category">{product.category} <span>{product.colour}</span></div><div className="product-title-row"><DialogTrigger asChild><button className="product-title">{product.name}</button></DialogTrigger><strong className="product-price">BWP {product.price}</strong></div><span className="price-note">Price each</span><a className="whatsapp-order" href={whatsappUrl(product)} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} />Ask about size &amp; delivery<ArrowUpRight size={15} /></a></div>
      <DialogContent className="product-dialog"><div className="dialog-product-photo">{productImage("product-image")}</div><div className="dialog-product-copy"><DialogHeader><p className="eyebrow">FYNZA / {product.category} / {product.colour}</p><DialogTitle className="dialog-title">{product.name}</DialogTitle><DialogDescription>{product.description}</DialogDescription></DialogHeader><strong className="dialog-price">BWP {product.price}<small>Price each · in stock</small></strong><a className="whatsapp-order" href={whatsappUrl(product)} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} />Confirm size &amp; delivery on WhatsApp<ArrowUpRight size={15} /></a><details className="original-photo"><summary>Original product photo</summary><img src={product.originalImage} alt={`${product.colour} ${product.name} original product photo`} loading="lazy" /></details><p className="dialog-disclaimer">Opening WhatsApp starts an inquiry. No payment is taken here; confirm your size availability and delivery with FYNZA.</p></div></DialogContent>
    </Dialog>
  </article>;
}
