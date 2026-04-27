/* =============================================================
   RosaTexHomes — Navbar Component
   Design: Texas Vernacular Modernism
   Sticky header, transparent-to-solid on scroll, mobile hamburger
   ============================================================= */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Home } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Our Process", href: "/process" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isTransparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent"
          : "bg-[oklch(0.99_0.005_80)] shadow-sm border-b border-[oklch(0.88_0.01_80)]"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-sm bg-[oklch(0.58_0.12_38)] flex items-center justify-center flex-shrink-0">
            <Home size={16} className="text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className={`font-['Playfair_Display'] font-bold text-lg leading-tight transition-colors duration-300 ${
                isTransparent ? "text-white" : "text-[oklch(0.18_0.01_60)]"
              }`}
            >
              RosaTexHomes
            </span>
            <span
              className={`font-['DM_Mono'] text-[0.6rem] tracking-widest uppercase transition-colors duration-300 ${
                isTransparent ? "text-white/70" : "text-[oklch(0.58_0.12_38)]"
              }`}
            >
              Central Texas
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-['DM_Sans'] text-sm font-medium tracking-wide relative group transition-colors duration-300 ${
                isTransparent
                  ? "text-white/90 hover:text-white"
                  : "text-[oklch(0.35_0.01_60)] hover:text-[oklch(0.18_0.01_60)]"
              } ${location === link.href ? (isTransparent ? "text-white" : "text-[oklch(0.18_0.01_60)]") : ""}`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-[oklch(0.58_0.12_38)] transition-all duration-300 ${
                  location === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-5 py-2.5 bg-[oklch(0.58_0.12_38)] text-white font-['DM_Sans'] text-sm font-medium tracking-wide hover:bg-[oklch(0.48_0.12_38)] transition-colors duration-300 rounded-sm"
          >
            Schedule Consultation
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-2 transition-colors duration-300 ${
            isTransparent ? "text-white" : "text-[oklch(0.18_0.01_60)]"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        } bg-[oklch(0.99_0.005_80)] border-t border-[oklch(0.88_0.01_80)]`}
      >
        <nav className="container py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-3 font-['DM_Sans'] text-base font-medium border-b border-[oklch(0.92_0.01_80)] transition-colors ${
                location === link.href
                  ? "text-[oklch(0.58_0.12_38)]"
                  : "text-[oklch(0.25_0.01_60)] hover:text-[oklch(0.58_0.12_38)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 py-3 text-center bg-[oklch(0.58_0.12_38)] text-white font-['DM_Sans'] text-sm font-medium tracking-wide hover:bg-[oklch(0.48_0.12_38)] transition-colors rounded-sm"
          >
            Schedule a Free Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
