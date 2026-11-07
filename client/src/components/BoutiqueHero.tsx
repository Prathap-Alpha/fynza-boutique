import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, Pause, Phone, Play, X } from "lucide-react";
import { brand, SALES_DISPLAY, whatsappUrl } from "@/lib/catalogue";

export function BrandLogo({ footer = false }: { footer?: boolean }) {
  return <a href="#top" className={`brand-lockup ${footer ? "footer-brand" : ""}`} aria-label="FYNZA home">
    <img src={brand.logo} onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = brand.logoFallback; }} alt="FYNZA circular woman-and-dress logo" width="60" height="60" />
    <span><strong>FYNZA</strong><small>Fashion. Yourself. Newness. Zeal. Allure.</small></span>
  </a>;
}

export default function BoutiqueHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoSource, setVideoSource] = useState(brand.video);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const video = videoRef.current;
    const syncMotion = () => {
      if (reducedMotion.matches) video?.pause();
      else video?.play().catch(() => setPlaying(false));
    };
    syncMotion();
    reducedMotion.addEventListener("change", syncMotion);
    return () => reducedMotion.removeEventListener("change", syncMotion);
  }, [videoSource]);

  function toggleVideo() {
    const video = videoRef.current;
    if (!video) return;
    if (playing) video.pause();
    else video.play().catch(() => setPlaying(false));
  }

  return <>
    <div className="announcement"><span>A little newness. A lot of you.</span><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Shop with us on WhatsApp <ArrowUpRight size={12} /></a></div>
    <header className="site-header" id="top">
      <BrandLogo />
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#stock">The collection</a><a href="#stock">Available stock</a><a href="#contact">Get in touch</a>
      </nav>
      <div className="header-actions"><a className="header-phone" href="tel:+26775388058"><Phone size={15} />{SALES_DISPLAY}</a><a className="header-shop" href="#stock">Shop the edit <ArrowUpRight size={16} /></a><button className="mobile-menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button></div>
    </header>
    {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation"><a href="#stock" onClick={() => setMenuOpen(false)}>Available stock</a><a href="#contact" onClick={() => setMenuOpen(false)}>Get in touch</a><a href="tel:+26775388058">{SALES_DISPLAY}</a></nav>}
    <section className="fashion-hero" aria-labelledby="hero-title">
      <img className="hero-poster" src={brand.poster} onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = brand.posterFallback; }} alt="Model wearing a flowing burgundy satin dress in a rose-toned boutique" fetchPriority="high" />
      {!videoError && <video ref={videoRef} className={`hero-film ${playing ? "is-playing" : ""}`} src={videoSource} poster={brand.posterFallback} muted loop playsInline preload="metadata" onPlaying={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => { if (videoSource !== brand.videoFallback) setVideoSource(brand.videoFallback); else setVideoError(true); }} aria-hidden="true" />}
      <div className="hero-shade" />
      <div className="hero-copy"><p className="eyebrow"><span />The Rose Boutique</p><h1 id="hero-title">Dress like<br /><em>yourself.</em></h1><p className="hero-description">The pieces you love.<br />The confidence that's already yours.</p><a href="#stock" className="hero-cta">Shop available stock <ArrowUpRight size={19} /></a><div className="hero-signature">Fashion. Yourself. Newness. Zeal. Allure.</div></div>
      <div className="hero-bottom"><a href="#stock" className="scroll-cue"><ArrowDown size={15} />Discover the collection</a>{!videoError && <button className="film-toggle" onClick={toggleVideo} aria-label={playing ? "Pause background video" : "Play background video"}>{playing ? <Pause size={15} /> : <Play size={15} />}<span>{playing ? "Pause the moment" : "Play the moment"}</span></button>}</div>
    </section>
  </>;
}
