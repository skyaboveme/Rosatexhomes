/* =============================================================
   RosaTexHomes — Homepage
   Design: Texas Vernacular Modernism
   Sections: Hero, Trust Bar, About Snapshot, Process Preview,
             Featured Portfolio, Testimonials, Blog Teaser, Final CTA
   ============================================================= */

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Star, CheckCircle2, ChevronRight } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071893115/JqfJCqX8rzkZNngxDQvdsP/hero-home_0ef44b14.jpg";
const PORTFOLIO_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071893115/JqfJCqX8rzkZNngxDQvdsP/portfolio-1_a90ed4db.jpg";
const PORTFOLIO_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071893115/JqfJCqX8rzkZNngxDQvdsP/portfolio-2_04ce38d1.jpg";
const PORTFOLIO_3 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071893115/JqfJCqX8rzkZNngxDQvdsP/portfolio-3_b1556e75.jpg";
const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663071893115/JqfJCqX8rzkZNngxDQvdsP/about-team_ac77f64c.jpg";

const trustStats = [
  { value: "15+", label: "Years in Central Texas" },
  { value: "Award", label: "Winning Builder" },
  { value: "4.9★", label: "Average Client Rating" },
  { value: "7", label: "Service Areas" },
];

const processSteps = [
  { num: "01", title: "Discover", desc: "We listen first. Understanding your vision, lifestyle, and budget is the foundation of every home we build." },
  { num: "02", title: "Design", desc: "Our design partners craft a floor plan and aesthetic that is uniquely yours — every detail, your decision." },
  { num: "03", title: "Build", desc: "Transparent, milestone-based construction with regular updates so you're never left wondering." },
  { num: "04", title: "Celebrate", desc: "A meticulous final walkthrough, then the keys are yours. Your legacy begins here." },
];

const portfolioItems = [
  { img: PORTFOLIO_1, title: "Hill Country Retreat", location: "Georgetown, TX", style: "Modern Farmhouse", sqft: "3,850 sq ft" },
  { img: PORTFOLIO_2, title: "Sunset Ridge Estate", location: "New Braunfels, TX", style: "Hill Country Contemporary", sqft: "4,200 sq ft" },
  { img: PORTFOLIO_3, title: "Live Oak Manor", location: "Austin, TX", style: "Texas Traditional", sqft: "3,100 sq ft" },
];

const testimonials = [
  {
    name: "Sarah & Michael T.",
    city: "Georgetown, TX",
    rating: 5,
    text: "RosaTexHomes turned our dream into a reality we still can't believe is ours. From the first consultation to the day we got our keys, every step was transparent, professional, and genuinely exciting. Our Hill Country home is everything we imagined and more.",
  },
  {
    name: "David R.",
    city: "Austin, TX",
    rating: 5,
    text: "I've worked with contractors before and was nervous about a custom build. RosaTexHomes changed my perspective entirely. Their process is clear, their craftsmanship is exceptional, and they treated our project like it was their own home.",
  },
  {
    name: "The Garza Family",
    city: "New Braunfels, TX",
    rating: 5,
    text: "We built our forever home with RosaTexHomes and couldn't be happier. They kept us informed at every milestone, respected our budget, and delivered a home that perfectly reflects our family. We recommend them to everyone.",
  },
];

const blogPosts = [
  {
    slug: "cost-to-build-custom-home-central-texas",
    date: "March 28, 2025",
    category: "Budget & Planning",
    title: "How Much Does It Cost to Build a Custom Home in Central Texas?",
    excerpt: "A transparent breakdown of custom home costs in the Austin, Georgetown, and Hill Country markets — from land to final finish.",
  },
  {
    slug: "choosing-lot-texas-hill-country",
    date: "February 14, 2025",
    category: "Land & Location",
    title: "The Complete Guide to Choosing a Lot in the Texas Hill Country",
    excerpt: "Soil, views, utilities, deed restrictions — everything you need to know before you buy land in the Hill Country.",
  },
  {
    slug: "questions-to-ask-custom-home-builder-austin",
    date: "January 5, 2025",
    category: "Hiring a Builder",
    title: "10 Questions to Ask Before Hiring a Custom Home Builder in Austin",
    excerpt: "Protect your investment and your peace of mind. These are the questions every prospective homebuilder should ask.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.99_0.005_80)]">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
          aria-hidden="true"
        />
        {/* Gradient overlay — dark at bottom for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(28,25,23,0.85) 0%, rgba(28,25,23,0.3) 50%, rgba(28,25,23,0.1) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="container relative z-10">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="section-label text-white/70 mb-4 block">
              Central Texas Custom Home Builder
            </span>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              Your Vision.<br />
              Our Craft.<br />
              <em className="italic text-[oklch(0.75_0.10_38)]">Built for Texas.</em>
            </h1>
            <p className="font-['DM_Sans'] text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
              Custom homes designed and built for the way you live, in the heart
              of Central Texas. From the Hill Country to the Austin suburbs —
              your legacy starts here.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[oklch(0.58_0.12_38)] text-white font-['DM_Sans'] font-medium hover:bg-[oklch(0.48_0.12_38)] transition-colors rounded-sm text-base"
              >
                Schedule a Free Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/50 text-white font-['DM_Sans'] font-medium hover:bg-white/10 transition-colors rounded-sm text-base"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-[oklch(0.18_0.01_60)] py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <div className="font-['Playfair_Display'] text-3xl font-bold text-[oklch(0.75_0.10_38)] mb-1">
                  {stat.value}
                </div>
                <div className="font-['DM_Mono'] text-xs tracking-widest uppercase text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNAPSHOT ── */}
      <section className="py-24 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={ABOUT_IMG}
                  alt="RosaTexHomes construction team reviewing blueprints at a Central Texas build site"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              {/* Accent block */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[oklch(0.58_0.12_38)] rounded-sm hidden lg:flex items-center justify-center">
                <div className="text-center">
                  <div className="font-['Playfair_Display'] text-3xl font-bold text-white">15+</div>
                  <div className="font-['DM_Mono'] text-[0.6rem] tracking-widest uppercase text-white/80">Years Building</div>
                </div>
              </div>
            </div>
            {/* Text */}
            <div>
              <span className="section-label block mb-3">Our Story</span>
              <span className="horizon-rule" />
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[oklch(0.18_0.01_60)] leading-tight mb-6">
                Built on Texas Land.<br />
                <em className="italic text-[oklch(0.58_0.12_38)]">Built on Trust.</em>
              </h2>
              <p className="font-['DM_Sans'] text-base text-[oklch(0.4_0.01_60)] leading-relaxed mb-5">
                RosaTexHomes was founded on a simple belief: every family deserves a home
                that was built specifically for them. For over 15 years, we have been
                turning Central Texas land into lasting legacies — one custom home at a time.
              </p>
              <p className="font-['DM_Sans'] text-base text-[oklch(0.4_0.01_60)] leading-relaxed mb-8">
                We are not a production builder. We do not build the same home twice. Every
                project begins with your vision and ends with a home that reflects your
                family's story, your lifestyle, and the beauty of the Texas landscape.
              </p>
              <ul className="space-y-3 mb-8">
                {["Fully custom floor plans — no templates", "Transparent pricing and milestone updates", "NAHB Member & ENERGY STAR Partner", "Locally owned and operated in Central Texas"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[oklch(0.58_0.12_38)] flex-shrink-0" />
                    <span className="font-['DM_Sans'] text-sm text-[oklch(0.35_0.01_60)]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-['DM_Sans'] text-sm font-medium text-[oklch(0.58_0.12_38)] hover:text-[oklch(0.48_0.12_38)] transition-colors group"
              >
                Meet the Team
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS PREVIEW ── */}
      <section className="py-24 bg-[oklch(0.97_0.008_80)]">
        <div className="container">
          <div className="max-w-xl mb-14">
            <span className="section-label block mb-3">How We Build</span>
            <span className="horizon-rule" />
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[oklch(0.18_0.01_60)] leading-tight">
              A Process Built on<br />
              <em className="italic text-[oklch(0.58_0.12_38)]">Transparency</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className="relative bg-white p-8 rounded-sm border border-[oklch(0.88_0.01_80)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="font-['Playfair_Display'] text-6xl font-bold text-[oklch(0.92_0.01_80)] leading-none mb-4 select-none">
                  {step.num}
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[oklch(0.18_0.01_60)] mb-3">
                  {step.title}
                </h3>
                <p className="font-['DM_Sans'] text-sm text-[oklch(0.45_0.01_60)] leading-relaxed">
                  {step.desc}
                </p>
                <div className="mt-6 w-8 h-0.5 bg-[oklch(0.58_0.12_38)]" />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[oklch(0.58_0.12_38)] text-[oklch(0.58_0.12_38)] font-['DM_Sans'] font-medium hover:bg-[oklch(0.58_0.12_38)] hover:text-white transition-colors rounded-sm"
            >
              Explore Our Full Process
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED PORTFOLIO ── */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="section-label block mb-3">Featured Work</span>
              <span className="horizon-rule" />
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[oklch(0.18_0.01_60)] leading-tight">
                Homes That Tell<br />
                <em className="italic text-[oklch(0.58_0.12_38)]">Their Own Story</em>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-['DM_Sans'] text-sm font-medium text-[oklch(0.58_0.12_38)] hover:text-[oklch(0.48_0.12_38)] transition-colors group flex-shrink-0"
            >
              View All Projects
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <Link
                key={item.title}
                href="/portfolio"
                className="group block overflow-hidden rounded-sm animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={`${item.title} — ${item.style} custom home built by RosaTexHomes in ${item.location}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.01_60)]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-['DM_Mono'] text-xs tracking-widest uppercase text-[oklch(0.75_0.10_38)]">
                      {item.style}
                    </span>
                  </div>
                </div>
                <div className="bg-white border border-[oklch(0.88_0.01_80)] border-t-0 p-5">
                  <h3 className="font-['Playfair_Display'] text-lg font-bold text-[oklch(0.18_0.01_60)] mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-['DM_Sans'] text-sm text-[oklch(0.5_0.01_60)]">
                      {item.location}
                    </span>
                    <span className="font-['DM_Mono'] text-xs text-[oklch(0.58_0.12_38)]">
                      {item.sqft}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-[oklch(0.18_0.01_60)]" itemScope itemType="https://schema.org/Organization">
        <div className="container">
          <div className="max-w-xl mb-14">
            <span className="section-label text-[oklch(0.58_0.12_38)] block mb-3">Client Stories</span>
            <span className="block w-12 h-0.5 bg-[oklch(0.58_0.12_38)] mb-4" />
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white leading-tight">
              What Our Clients<br />
              <em className="italic text-[oklch(0.75_0.10_38)]">Are Saying</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-white/5 border border-white/10 p-8 rounded-sm animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s` }}
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-[oklch(0.75_0.10_38)] text-[oklch(0.75_0.10_38)]" />
                  ))}
                </div>
                <blockquote
                  className="font-['DM_Sans'] text-sm text-white/75 leading-relaxed mb-6 italic"
                  itemProp="reviewBody"
                >
                  "{t.text}"
                </blockquote>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-['DM_Sans'] font-medium text-white text-sm" itemProp="author">
                    {t.name}
                  </div>
                  <div className="font-['DM_Mono'] text-xs tracking-wide text-white/40 uppercase mt-0.5">
                    {t.city}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG TEASER ── */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="section-label block mb-3">Resources & Insights</span>
              <span className="horizon-rule" />
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[oklch(0.18_0.01_60)] leading-tight">
                Knowledge to Guide<br />
                <em className="italic text-[oklch(0.58_0.12_38)]">Your Build</em>
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-['DM_Sans'] text-sm font-medium text-[oklch(0.58_0.12_38)] hover:text-[oklch(0.48_0.12_38)] transition-colors group flex-shrink-0"
            >
              All Articles
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="border-t-2 border-[oklch(0.88_0.01_80)] group-hover:border-[oklch(0.58_0.12_38)] transition-colors duration-300 pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-['DM_Mono'] text-xs tracking-widest uppercase text-[oklch(0.58_0.12_38)]">
                      {post.category}
                    </span>
                    <span className="text-[oklch(0.75_0.01_60)] text-xs">·</span>
                    <span className="font-['DM_Sans'] text-xs text-[oklch(0.55_0.01_60)]">{post.date}</span>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl font-bold text-[oklch(0.18_0.01_60)] leading-snug mb-3 group-hover:text-[oklch(0.58_0.12_38)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-['DM_Sans'] text-sm text-[oklch(0.45_0.01_60)] leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-['DM_Sans'] text-xs font-medium text-[oklch(0.58_0.12_38)] group-hover:gap-2.5 transition-all">
                    Read Article <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="relative py-32 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, oklch(0.58 0.12 38) 0%, oklch(0.42 0.10 38) 100%)",
        }}
      >
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />
        <div className="container relative z-10 text-center">
          <span className="font-['DM_Mono'] text-xs tracking-widest uppercase text-white/60 block mb-4">
            Start Your Journey
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl mx-auto">
            Ready to Build the Home You've Always Imagined?
          </h2>
          <p className="font-['DM_Sans'] text-lg text-white/80 leading-relaxed mb-10 max-w-xl mx-auto">
            Your free consultation is the first step. Let's talk about your land,
            your vision, and how RosaTexHomes can bring it to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[oklch(0.58_0.12_38)] font-['DM_Sans'] font-semibold hover:bg-[oklch(0.97_0.008_80)] transition-colors rounded-sm text-base"
            >
              Schedule Your Free Consultation
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+15125550100"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-['DM_Sans'] font-medium hover:bg-white/10 transition-colors rounded-sm text-base"
            >
              Call (512) 555-0100
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
