/* =============================================================
   RosaTexHomes — Contact Page
   Design: Texas Vernacular Modernism
   Sections: Hero, Contact Form, Info, Map Area
   ============================================================= */

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const serviceAreas = [
  "Austin, TX", "Georgetown, TX", "New Braunfels, TX",
  "San Marcos, TX", "Waco, TX", "Temple, TX",
  "Killeen, TX", "Texas Hill Country",
];

const budgetRanges = [
  "Under $400,000",
  "$400,000 – $600,000",
  "$600,000 – $900,000",
  "$900,000 – $1.2M",
  "$1.2M+",
  "Not sure yet",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Your consultation request has been sent!");
  };

  return (
    <div className="min-h-screen bg-[oklch(0.99_0.005_80)]">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="pt-32 pb-20 bg-[oklch(0.97_0.008_80)]">
        <div className="container">
          <span className="section-label block mb-3">Let's Talk</span>
          <span className="horizon-rule" />
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[oklch(0.18_0.01_60)] leading-tight max-w-2xl">
            Your Dream Home<br />
            <em className="italic text-[oklch(0.58_0.12_38)]">Starts Here</em>
          </h1>
          <p className="font-['DM_Sans'] text-lg text-[oklch(0.4_0.01_60)] mt-6 max-w-xl leading-relaxed">
            Schedule a free, no-obligation consultation with our team. We will listen to your
            vision, evaluate your land, and outline a clear path forward.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* ── FORM ── */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <div className="w-16 h-16 rounded-full bg-[oklch(0.58_0.12_38)]/10 flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} className="text-[oklch(0.58_0.12_38)]" />
                  </div>
                  <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[oklch(0.18_0.01_60)] mb-4">
                    Thank You, {form.firstName}!
                  </h2>
                  <p className="font-['DM_Sans'] text-base text-[oklch(0.4_0.01_60)] leading-relaxed max-w-md">
                    We have received your consultation request and will be in touch within one
                    business day. We look forward to learning about your vision.
                  </p>
                  <p className="font-['DM_Mono'] text-xs tracking-widest uppercase text-[oklch(0.58_0.12_38)] mt-6">
                    RosaTexHomes Team
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[oklch(0.18_0.01_60)] mb-1">
                      Schedule a Free Consultation
                    </h2>
                    <p className="font-['DM_Sans'] text-sm text-[oklch(0.5_0.01_60)]">
                      Fields marked with * are required.
                    </p>
                  </div>

                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-['DM_Sans'] text-sm font-medium text-[oklch(0.25_0.01_60)] mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Rosa"
                        className="w-full px-4 py-3 border border-[oklch(0.88_0.01_80)] rounded-sm font-['DM_Sans'] text-sm text-[oklch(0.18_0.01_60)] bg-white focus:outline-none focus:border-[oklch(0.58_0.12_38)] transition-colors placeholder:text-[oklch(0.7_0.01_60)]"
                      />
                    </div>
                    <div>
                      <label className="block font-['DM_Sans'] text-sm font-medium text-[oklch(0.25_0.01_60)] mb-1.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Delgado"
                        className="w-full px-4 py-3 border border-[oklch(0.88_0.01_80)] rounded-sm font-['DM_Sans'] text-sm text-[oklch(0.18_0.01_60)] bg-white focus:outline-none focus:border-[oklch(0.58_0.12_38)] transition-colors placeholder:text-[oklch(0.7_0.01_60)]"
                      />
                    </div>
                  </div>

                  {/* Contact Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-['DM_Sans'] text-sm font-medium text-[oklch(0.25_0.01_60)] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="rosa@example.com"
                        className="w-full px-4 py-3 border border-[oklch(0.88_0.01_80)] rounded-sm font-['DM_Sans'] text-sm text-[oklch(0.18_0.01_60)] bg-white focus:outline-none focus:border-[oklch(0.58_0.12_38)] transition-colors placeholder:text-[oklch(0.7_0.01_60)]"
                      />
                    </div>
                    <div>
                      <label className="block font-['DM_Sans'] text-sm font-medium text-[oklch(0.25_0.01_60)] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(512) 555-0100"
                        className="w-full px-4 py-3 border border-[oklch(0.88_0.01_80)] rounded-sm font-['DM_Sans'] text-sm text-[oklch(0.18_0.01_60)] bg-white focus:outline-none focus:border-[oklch(0.58_0.12_38)] transition-colors placeholder:text-[oklch(0.7_0.01_60)]"
                      />
                    </div>
                  </div>

                  {/* Location & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-['DM_Sans'] text-sm font-medium text-[oklch(0.25_0.01_60)] mb-1.5">
                        Where Do You Want to Build?
                      </label>
                      <select
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[oklch(0.88_0.01_80)] rounded-sm font-['DM_Sans'] text-sm text-[oklch(0.18_0.01_60)] bg-white focus:outline-none focus:border-[oklch(0.58_0.12_38)] transition-colors"
                      >
                        <option value="">Select a location</option>
                        {serviceAreas.map((a) => (
                          <option key={a} value={a}>{a}</option>
                        ))}
                        <option value="other">Other / Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-['DM_Sans'] text-sm font-medium text-[oklch(0.25_0.01_60)] mb-1.5">
                        Approximate Budget
                      </label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[oklch(0.88_0.01_80)] rounded-sm font-['DM_Sans'] text-sm text-[oklch(0.18_0.01_60)] bg-white focus:outline-none focus:border-[oklch(0.58_0.12_38)] transition-colors"
                      >
                        <option value="">Select a range</option>
                        {budgetRanges.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block font-['DM_Sans'] text-sm font-medium text-[oklch(0.25_0.01_60)] mb-1.5">
                      When Are You Hoping to Break Ground?
                    </label>
                    <select
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[oklch(0.88_0.01_80)] rounded-sm font-['DM_Sans'] text-sm text-[oklch(0.18_0.01_60)] bg-white focus:outline-none focus:border-[oklch(0.58_0.12_38)] transition-colors"
                    >
                      <option value="">Select a timeline</option>
                      <option value="asap">As soon as possible</option>
                      <option value="6months">Within 6 months</option>
                      <option value="1year">Within 1 year</option>
                      <option value="2years">1–2 years</option>
                      <option value="exploring">Just exploring for now</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-['DM_Sans'] text-sm font-medium text-[oklch(0.25_0.01_60)] mb-1.5">
                      Tell Us About Your Vision *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe your dream home — the style, the land, the features that matter most to you..."
                      className="w-full px-4 py-3 border border-[oklch(0.88_0.01_80)] rounded-sm font-['DM_Sans'] text-sm text-[oklch(0.18_0.01_60)] bg-white focus:outline-none focus:border-[oklch(0.58_0.12_38)] transition-colors resize-none placeholder:text-[oklch(0.7_0.01_60)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[oklch(0.58_0.12_38)] text-white font-['DM_Sans'] font-medium hover:bg-[oklch(0.48_0.12_38)] transition-colors rounded-sm text-base"
                  >
                    Send My Consultation Request
                  </button>
                  <p className="font-['DM_Sans'] text-xs text-[oklch(0.55_0.01_60)] text-center">
                    We respect your privacy. Your information will never be shared or sold.
                  </p>
                </form>
              )}
            </div>

            {/* ── CONTACT INFO ── */}
            <div className="space-y-8">
              <div>
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[oklch(0.18_0.01_60)] mb-5">
                  Contact Information
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[oklch(0.97_0.008_80)] flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-[oklch(0.58_0.12_38)]" />
                    </div>
                    <div>
                      <div className="font-['DM_Mono'] text-xs tracking-widest uppercase text-[oklch(0.58_0.12_38)] mb-0.5">Phone</div>
                      <a href="tel:+15125550100" className="font-['DM_Sans'] text-sm text-[oklch(0.25_0.01_60)] hover:text-[oklch(0.58_0.12_38)] transition-colors">
                        (512) 555-0100
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[oklch(0.97_0.008_80)] flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-[oklch(0.58_0.12_38)]" />
                    </div>
                    <div>
                      <div className="font-['DM_Mono'] text-xs tracking-widest uppercase text-[oklch(0.58_0.12_38)] mb-0.5">Email</div>
                      <a href="mailto:hello@rosatexhomes.com" className="font-['DM_Sans'] text-sm text-[oklch(0.25_0.01_60)] hover:text-[oklch(0.58_0.12_38)] transition-colors">
                        hello@rosatexhomes.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[oklch(0.97_0.008_80)] flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-[oklch(0.58_0.12_38)]" />
                    </div>
                    <div>
                      <div className="font-['DM_Mono'] text-xs tracking-widest uppercase text-[oklch(0.58_0.12_38)] mb-0.5">Office</div>
                      <span className="font-['DM_Sans'] text-sm text-[oklch(0.25_0.01_60)]">
                        Georgetown, TX 78626<br />
                        Serving All of Central Texas
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[oklch(0.97_0.008_80)] flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-[oklch(0.58_0.12_38)]" />
                    </div>
                    <div>
                      <div className="font-['DM_Mono'] text-xs tracking-widest uppercase text-[oklch(0.58_0.12_38)] mb-0.5">Office Hours</div>
                      <span className="font-['DM_Sans'] text-sm text-[oklch(0.25_0.01_60)]">
                        Monday – Friday<br />8:00 AM – 6:00 PM CST
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Service Areas */}
              <div className="bg-[oklch(0.97_0.008_80)] p-6 rounded-sm border border-[oklch(0.88_0.01_80)]">
                <h4 className="font-['DM_Mono'] text-xs tracking-widest uppercase text-[oklch(0.58_0.12_38)] mb-4">
                  Service Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 bg-white border border-[oklch(0.88_0.01_80)] rounded-sm font-['DM_Sans'] text-xs text-[oklch(0.35_0.01_60)]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Promise Box */}
              <div className="bg-[oklch(0.18_0.01_60)] p-6 rounded-sm">
                <h4 className="font-['Playfair_Display'] text-lg font-bold text-white mb-3">
                  Our Promise to You
                </h4>
                <p className="font-['DM_Sans'] text-sm text-white/70 leading-relaxed">
                  Every consultation is free, no-obligation, and conducted with complete
                  transparency. We will never pressure you. We will only build your home
                  if we are the right fit for each other.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
