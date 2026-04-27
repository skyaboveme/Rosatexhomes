/* =============================================================
   RosaTexHomes — Portfolio Page
   Design: Texas Vernacular Modernism
   Sections: Hero, Filterable Gallery, CTA
   ============================================================= */

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";

const P1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071893115/JqfJCqX8rzkZNngxDQvdsP/portfolio-1_a90ed4db.jpg";
const P2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071893115/JqfJCqX8rzkZNngxDQvdsP/portfolio-2_04ce38d1.jpg";
const P3 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071893115/JqfJCqX8rzkZNngxDQvdsP/portfolio-3_b1556e75.jpg";
const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071893115/JqfJCqX8rzkZNngxDQvdsP/hero-home_0ef44b14.jpg";

const projects = [
  { id: 1, img: P1, title: "Hill Country Retreat", location: "Georgetown, TX", style: "Modern Farmhouse", sqft: "3,850", beds: 4, baths: 3.5, year: 2024, desc: "A warm, open-concept farmhouse with vaulted cedar ceilings, a limestone fireplace, and sweeping Hill Country views from every room." },
  { id: 2, img: P2, title: "Sunset Ridge Estate", location: "New Braunfels, TX", style: "Hill Country Contemporary", sqft: "4,200", beds: 5, baths: 4, year: 2024, desc: "Clean lines meet Texas warmth in this contemporary estate featuring an infinity pool, native xeriscape, and panoramic Hill Country vistas." },
  { id: 3, img: P3, title: "Live Oak Manor", location: "Austin, TX", style: "Texas Traditional", sqft: "3,100", beds: 4, baths: 3, year: 2023, desc: "A timeless Texas traditional home nestled beneath mature live oaks, with a welcoming front porch and warm brick-and-stone facade." },
  { id: 4, img: HERO, title: "Cedar Creek Homestead", location: "Georgetown, TX", style: "Modern Farmhouse", sqft: "3,600", beds: 4, baths: 3.5, year: 2023, desc: "A stunning Hill Country farmhouse with a metal roof, limestone exterior, and a covered outdoor living space perfect for Texas evenings." },
  { id: 5, img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop", title: "Blanco Vista", location: "San Marcos, TX", style: "Hill Country Contemporary", sqft: "3,400", beds: 4, baths: 3, year: 2023, desc: "A modern Hill Country home with dramatic rooflines, expansive glazing, and a seamless connection between indoor and outdoor living." },
  { id: 6, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop", title: "Waco Prairie Estate", location: "Waco, TX", style: "Texas Traditional", sqft: "2,900", beds: 3, baths: 2.5, year: 2022, desc: "A beautifully proportioned traditional home on a generous lot, with a wraparound porch and classic Texas craftsmanship throughout." },
];

const styles = ["All", "Modern Farmhouse", "Hill Country Contemporary", "Texas Traditional"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.style === activeFilter);

  return (
    <div className="min-h-screen bg-[oklch(0.99_0.005_80)]">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="pt-32 pb-20 bg-[oklch(0.97_0.008_80)]">
        <div className="container">
          <span className="section-label block mb-3">Our Work</span>
          <span className="horizon-rule" />
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[oklch(0.18_0.01_60)] leading-tight max-w-2xl">
            Homes That Tell<br />
            <em className="italic text-[oklch(0.58_0.12_38)]">Their Own Story</em>
          </h1>
          <p className="font-['DM_Sans'] text-lg text-[oklch(0.4_0.01_60)] mt-6 max-w-xl leading-relaxed">
            Every home we build is a one-of-a-kind reflection of the family who lives in it.
            Browse a selection of our completed custom homes across Central Texas.
          </p>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <section className="py-8 border-b border-[oklch(0.88_0.01_80)] sticky top-16 md:top-20 bg-[oklch(0.99_0.005_80)] z-30">
        <div className="container flex flex-wrap gap-3">
          {styles.map((style) => (
            <button
              key={style}
              onClick={() => setActiveFilter(style)}
              className={`px-5 py-2 font-['DM_Sans'] text-sm font-medium rounded-sm transition-all duration-200 ${
                activeFilter === style
                  ? "bg-[oklch(0.58_0.12_38)] text-white"
                  : "bg-[oklch(0.97_0.008_80)] text-[oklch(0.35_0.01_60)] hover:bg-[oklch(0.92_0.01_80)]"
              }`}
            >
              {style}
            </button>
          ))}
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-sm border border-[oklch(0.88_0.01_80)] hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.img}
                    alt={`${project.title} — ${project.style} custom home built by RosaTexHomes in ${project.location}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[oklch(0.18_0.01_60)]/80 text-white font-['DM_Mono'] text-xs tracking-widest uppercase rounded-sm">
                      {project.style}
                    </span>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h2 className="font-['Playfair_Display'] text-xl font-bold text-[oklch(0.18_0.01_60)] mb-2">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-1.5 mb-3">
                    <MapPin size={13} className="text-[oklch(0.58_0.12_38)]" />
                    <span className="font-['DM_Sans'] text-sm text-[oklch(0.5_0.01_60)]">{project.location}</span>
                  </div>
                  <p className="font-['DM_Sans'] text-sm text-[oklch(0.45_0.01_60)] leading-relaxed mb-4">
                    {project.desc}
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-[oklch(0.92_0.01_80)]">
                    <span className="font-['DM_Mono'] text-xs text-[oklch(0.55_0.01_60)]">{project.sqft} sq ft</span>
                    <span className="font-['DM_Mono'] text-xs text-[oklch(0.55_0.01_60)]">{project.beds} Bed</span>
                    <span className="font-['DM_Mono'] text-xs text-[oklch(0.55_0.01_60)]">{project.baths} Bath</span>
                    <span className="font-['DM_Mono'] text-xs text-[oklch(0.55_0.01_60)] ml-auto">{project.year}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[oklch(0.58_0.12_38)]">
        <div className="container text-center">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-white mb-4">
            Imagine Your Home Here
          </h2>
          <p className="font-['DM_Sans'] text-base text-white/80 mb-8 max-w-lg mx-auto">
            Every home in our portfolio started as a conversation. Yours can too.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[oklch(0.58_0.12_38)] font-['DM_Sans'] font-semibold hover:bg-[oklch(0.97_0.008_80)] transition-colors rounded-sm"
          >
            Start Your Custom Home Journey
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
