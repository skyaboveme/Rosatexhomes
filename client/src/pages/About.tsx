/* =============================================================
   RosaTexHomes — About Us Page
   Design: Texas Vernacular Modernism
   Sections: Hero, Story, Values, Team, CTA
   ============================================================= */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Award, Shield, Heart, Users } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071893115/JqfJCqX8rzkZNngxDQvdsP/about-team_ac77f64c.jpg";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071893115/JqfJCqX8rzkZNngxDQvdsP/hero-home_0ef44b14.jpg";

const values = [
  { icon: Award, title: "Uncompromising Quality", desc: "We use only premium materials and partner with the most skilled tradespeople in Central Texas. Every detail matters, from the foundation to the finish." },
  { icon: Shield, title: "Radical Transparency", desc: "No surprises. You receive milestone updates, clear pricing, and open communication at every stage of your build." },
  { icon: Heart, title: "Genuine Craftsmanship", desc: "We build homes the way they should be built — with care, precision, and the pride of knowing this is where a family will make their memories." },
  { icon: Users, title: "Community Roots", desc: "We are Central Texans building for Central Texans. We understand the land, the climate, and the lifestyle that makes this region unique." },
];

const team = [
  { name: "Rosa Delgado", title: "Founder & CEO", bio: "A third-generation Central Texan, Rosa founded RosaTexHomes in 2008 after 12 years in residential construction. Her vision: a builder that treats every client like family.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face" },
  { name: "Carlos Mendez", title: "Director of Construction", bio: "With 20 years of on-site experience across Central Texas, Carlos oversees every build from groundbreaking to final walkthrough.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
  { name: "Emily Torres", title: "Lead Design Consultant", bio: "Emily translates client visions into stunning, functional floor plans. Her expertise in Hill Country architecture is unmatched.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face" },
  { name: "James Whitfield", title: "Client Relations Manager", bio: "James is your guide through the entire building journey — your first call and your last handshake at key handover.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[oklch(0.99_0.005_80)]">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[oklch(0.97_0.008_80)]" style={{ opacity: 0.85 }} aria-hidden="true" />
        <div className="container relative z-10">
          <span className="section-label block mb-3">Our Story</span>
          <span className="horizon-rule" />
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[oklch(0.18_0.01_60)] leading-tight max-w-2xl">
            Built on Texas Land.<br />
            <em className="italic text-[oklch(0.58_0.12_38)]">Built on Trust.</em>
          </h1>
          <p className="font-['DM_Sans'] text-lg text-[oklch(0.4_0.01_60)] mt-6 max-w-xl leading-relaxed">
            For over 15 years, RosaTexHomes has been turning Central Texas land into
            lasting legacies. We are not a production builder — we are craftspeople,
            neighbors, and partners in the most important project of your life.
          </p>
        </div>
      </section>

      {/* ── STORY SECTION ── */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={ABOUT_IMG}
                  alt="The RosaTexHomes team reviewing blueprints at a custom home construction site in Central Texas"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[oklch(0.18_0.01_60)] p-6 rounded-sm hidden lg:block">
                <div className="font-['Playfair_Display'] text-3xl font-bold text-white">Award</div>
                <div className="font-['DM_Mono'] text-xs tracking-widest uppercase text-white/50 mt-1">Winning Builder</div>
              </div>
            </div>
            <div>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[oklch(0.18_0.01_60)] leading-tight mb-6">
                The RosaTexHomes Story
              </h2>
              <p className="font-['DM_Sans'] text-base text-[oklch(0.4_0.01_60)] leading-relaxed mb-5">
                RosaTexHomes was founded in 2008 by Rosa Delgado, a third-generation Central Texan
                who grew up watching her grandfather build homes with his own hands in the Hill Country.
                After more than a decade working for large production builders, Rosa recognized a gap
                in the market: families who wanted a truly custom home — not a slightly modified floor
                plan from a catalog — had few options they could trust.
              </p>
              <p className="font-['DM_Sans'] text-base text-[oklch(0.4_0.01_60)] leading-relaxed mb-5">
                She founded RosaTexHomes on three principles: quality that outlasts trends, transparency
                that builds trust, and craftsmanship that honors the land. Today, with a team of over
                20 dedicated professionals and more than 200 completed homes across Central Texas,
                those principles remain unchanged.
              </p>
              <p className="font-['DM_Sans'] text-base text-[oklch(0.4_0.01_60)] leading-relaxed">
                Every home we build is a reflection of the family who will live in it. We do not
                build the same home twice. We listen, we design, we build — and we stand behind
                every nail, every beam, and every finish we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-[oklch(0.97_0.008_80)]">
        <div className="container">
          <div className="max-w-xl mb-14">
            <span className="section-label block mb-3">What We Stand For</span>
            <span className="horizon-rule" />
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[oklch(0.18_0.01_60)] leading-tight">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 rounded-sm border border-[oklch(0.88_0.01_80)] hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-sm bg-[oklch(0.97_0.008_80)] flex items-center justify-center mb-5">
                  <v.icon size={22} className="text-[oklch(0.58_0.12_38)]" />
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[oklch(0.18_0.01_60)] mb-3">{v.title}</h3>
                <p className="font-['DM_Sans'] text-sm text-[oklch(0.45_0.01_60)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-xl mb-14">
            <span className="section-label block mb-3">The People Behind the Homes</span>
            <span className="horizon-rule" />
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[oklch(0.18_0.01_60)] leading-tight">
              Meet the Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-square overflow-hidden rounded-sm mb-4">
                  <img
                    src={member.img}
                    alt={`${member.name}, ${member.title} at RosaTexHomes`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="font-['Playfair_Display'] text-lg font-bold text-[oklch(0.18_0.01_60)]">{member.name}</div>
                <div className="font-['DM_Mono'] text-xs tracking-widest uppercase text-[oklch(0.58_0.12_38)] mt-0.5 mb-3">{member.title}</div>
                <p className="font-['DM_Sans'] text-sm text-[oklch(0.45_0.01_60)] leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[oklch(0.18_0.01_60)]">
        <div className="container text-center">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-white mb-4">
            Ready to Build With Us?
          </h2>
          <p className="font-['DM_Sans'] text-base text-white/60 mb-8 max-w-lg mx-auto">
            Schedule a free, no-obligation consultation and let's talk about your vision for a custom home in Central Texas.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[oklch(0.58_0.12_38)] text-white font-['DM_Sans'] font-medium hover:bg-[oklch(0.48_0.12_38)] transition-colors rounded-sm"
          >
            Schedule a Free Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
