/* =============================================================
   RosaTexHomes — Our Process Page
   Design: Texas Vernacular Modernism
   Sections: Hero, 5-Step Process, FAQ, CTA
   ============================================================= */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery & Consultation",
    duration: "Week 1–2",
    desc: "Every great home begins with a great conversation. In your free initial consultation, we listen — deeply — to understand your vision, your lifestyle, your family's needs, and your budget. We will discuss your preferred architectural style, must-have features, and the land you have in mind (or help you find the right lot). This is not a sales pitch; it is the foundation of a partnership.",
    details: ["Free, no-obligation consultation", "Vision and lifestyle assessment", "Budget framework discussion", "Land evaluation and site analysis", "Introduction to our design partners"],
  },
  {
    num: "02",
    title: "Design & Planning",
    duration: "Months 1–3",
    desc: "With your vision clearly defined, our design team and architectural partners get to work. We create a fully custom floor plan — not a modified template — that reflects how you actually live. You will review and refine every detail, from room proportions to window placement, until the design is exactly right. We also finalize material selections, exterior finishes, and all structural specifications during this phase.",
    details: ["Custom floor plan design (no templates)", "3D renderings and walkthroughs", "Material and finish selection", "Structural engineering coordination", "Final cost estimate and contract signing"],
  },
  {
    num: "03",
    title: "Permitting & Site Preparation",
    duration: "Months 2–4",
    desc: "We handle the regulatory complexity so you do not have to. Our team submits all permit applications, coordinates with local authorities, and manages the timeline to minimize delays. Simultaneously, we prepare your site — clearing, grading, utility connections, and foundation work — so construction can begin the moment permits are approved.",
    details: ["Full permit application and management", "Site clearing and grading", "Utility coordination", "Foundation engineering and pour", "Regular progress updates throughout"],
  },
  {
    num: "04",
    title: "Construction",
    duration: "Months 4–14",
    desc: "This is where your home comes to life. Our construction team follows a milestone-based schedule, and you receive regular updates — photos, site visits, and progress reports — at every stage. We work with a vetted network of Central Texas tradespeople who share our commitment to quality. Every phase is inspected before the next begins. No shortcuts, ever.",
    details: ["Milestone-based construction schedule", "Weekly progress reports and photos", "Scheduled client site visits", "Third-party quality inspections", "Transparent change-order process"],
  },
  {
    num: "05",
    title: "Final Walkthrough & Handover",
    duration: "Week 1–2 (Final)",
    desc: "Before you receive your keys, we conduct a meticulous final walkthrough together. Every system is tested, every finish is inspected, and every item on your punch list is addressed. We do not consider a home complete until you are completely satisfied. Then comes the moment we love most: handing you the keys to your new home.",
    details: ["Comprehensive final inspection", "Systems testing (HVAC, plumbing, electrical)", "Punch list completion", "Warranty documentation", "Key handover ceremony"],
  },
];

const faqs = [
  { q: "How long does it take to build a custom home in Central Texas?", a: "The custom home building process with RosaTexHomes typically takes 12 to 18 months from initial consultation to key handover, depending on the size and complexity of the home, permitting timelines in your specific county, and material availability. We provide a detailed project timeline at the start of every build." },
  { q: "Can I make changes during construction?", a: "Yes, with a transparent change-order process. We understand that ideas evolve, and we accommodate reasonable changes during construction. All changes are documented with a clear cost and schedule impact before work proceeds — no surprises." },
  { q: "Do I need to own land before starting the process?", a: "Not necessarily. We can begin the consultation process before you have secured land, and our team can help evaluate potential lots for suitability. Many clients find their land and begin the design process simultaneously." },
  { q: "What is included in the base price?", a: "Our pricing is comprehensive and transparent. Your detailed quote includes all labor, materials, permits, and project management. We will walk you through every line item so you understand exactly what you are paying for. There are no hidden fees." },
  { q: "Do you offer a warranty on your homes?", a: "Yes. RosaTexHomes provides a 1-year workmanship warranty, a 2-year systems warranty (HVAC, plumbing, electrical), and a 10-year structural warranty on all homes we build, in compliance with Texas state requirements." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[oklch(0.88_0.01_80)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-['Playfair_Display'] text-lg font-bold text-[oklch(0.18_0.01_60)]">{q}</span>
        <ChevronDown
          size={20}
          className={`text-[oklch(0.58_0.12_38)] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="font-['DM_Sans'] text-sm text-[oklch(0.4_0.01_60)] leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <div className="min-h-screen bg-[oklch(0.99_0.005_80)]">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="pt-32 pb-20 bg-[oklch(0.97_0.008_80)]">
        <div className="container">
          <span className="section-label block mb-3">How We Build</span>
          <span className="horizon-rule" />
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[oklch(0.18_0.01_60)] leading-tight max-w-2xl">
            A Transparent Journey<br />
            <em className="italic text-[oklch(0.58_0.12_38)]">From Vision to Keys</em>
          </h1>
          <p className="font-['DM_Sans'] text-lg text-[oklch(0.4_0.01_60)] mt-6 max-w-xl leading-relaxed">
            Building a custom home is one of the most significant investments you will ever make.
            Our five-step process is designed to make it clear, collaborative, and — dare we say —
            enjoyable.
          </p>
        </div>
      </section>

      {/* ── PROCESS STEPS ── */}
      <section className="py-24">
        <div className="container">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 py-16 ${
                  i < steps.length - 1 ? "border-b border-[oklch(0.88_0.01_80)]" : ""
                }`}
              >
                {/* Number + Duration */}
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2">
                  <div className="font-['Playfair_Display'] text-6xl font-bold text-[oklch(0.92_0.01_80)] leading-none select-none">
                    {step.num}
                  </div>
                  <div className="font-['DM_Mono'] text-xs tracking-widest uppercase text-[oklch(0.58_0.12_38)]">
                    {step.duration}
                  </div>
                </div>
                {/* Content */}
                <div className="lg:col-span-6">
                  <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[oklch(0.18_0.01_60)] mb-4">
                    {step.title}
                  </h2>
                  <p className="font-['DM_Sans'] text-base text-[oklch(0.4_0.01_60)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {/* Details */}
                <div className="lg:col-span-4">
                  <div className="bg-[oklch(0.97_0.008_80)] p-6 rounded-sm border border-[oklch(0.88_0.01_80)]">
                    <div className="font-['DM_Mono'] text-xs tracking-widest uppercase text-[oklch(0.58_0.12_38)] mb-4">
                      What's Included
                    </div>
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.58_0.12_38)] mt-1.5 flex-shrink-0" />
                          <span className="font-['DM_Sans'] text-sm text-[oklch(0.35_0.01_60)]">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-[oklch(0.97_0.008_80)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="section-label block mb-3">Common Questions</span>
              <span className="horizon-rule" />
              <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[oklch(0.18_0.01_60)] leading-tight mb-4">
                Frequently Asked<br />
                <em className="italic text-[oklch(0.58_0.12_38)]">Questions</em>
              </h2>
              <p className="font-['DM_Sans'] text-base text-[oklch(0.4_0.01_60)] leading-relaxed">
                We believe in radical transparency. If you have a question that is not answered here,
                call us or schedule a consultation — we are always happy to talk.
              </p>
            </div>
            <div>
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[oklch(0.18_0.01_60)]">
        <div className="container text-center">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-white mb-4">
            Ready to Start Step One?
          </h2>
          <p className="font-['DM_Sans'] text-base text-white/60 mb-8 max-w-lg mx-auto">
            Your free discovery consultation is the first step toward the home you have always imagined.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[oklch(0.58_0.12_38)] text-white font-['DM_Sans'] font-medium hover:bg-[oklch(0.48_0.12_38)] transition-colors rounded-sm"
          >
            Schedule Your Free Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
