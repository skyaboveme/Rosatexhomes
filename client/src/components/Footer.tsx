/* =============================================================
   RosaTexHomes — Footer Component
   Design: Texas Vernacular Modernism — deep charcoal, warm accents
   ============================================================= */

import { Link } from "wouter";
import { Home, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.01_60)] text-white">
      {/* Main Footer */}
      <div className="container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-sm bg-[oklch(0.58_0.12_38)] flex items-center justify-center">
              <Home size={16} className="text-white" />
            </div>
            <span className="font-['Playfair_Display'] font-bold text-lg text-white">
              RosaTexHomes
            </span>
          </div>
          <p className="font-['DM_Sans'] text-sm text-white/60 leading-relaxed mb-6">
            Where Texas Land Becomes Your Legacy. Building premium custom homes
            in Central Texas since 2008.
          </p>
          <div className="flex gap-3">
            <a
              href="https://facebook.com/rosatexhomes"
              aria-label="Facebook"
              className="w-9 h-9 rounded-sm border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[oklch(0.58_0.12_38)] transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://instagram.com/rosatexhomes"
              aria-label="Instagram"
              className="w-9 h-9 rounded-sm border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[oklch(0.58_0.12_38)] transition-colors"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-['DM_Mono'] text-xs tracking-widest uppercase text-[oklch(0.58_0.12_38)] mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Our Process", href: "/process" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Blog & Resources", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-['DM_Sans'] text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="font-['DM_Mono'] text-xs tracking-widest uppercase text-[oklch(0.58_0.12_38)] mb-5">
            Service Areas
          </h4>
          <ul className="space-y-3">
            {[
              "Austin, TX",
              "Georgetown, TX",
              "New Braunfels, TX",
              "San Marcos, TX",
              "Waco, TX",
              "Temple, TX",
              "Texas Hill Country",
            ].map((area) => (
              <li
                key={area}
                className="font-['DM_Sans'] text-sm text-white/60"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-['DM_Mono'] text-xs tracking-widest uppercase text-[oklch(0.58_0.12_38)] mb-5">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-[oklch(0.58_0.12_38)] mt-0.5 flex-shrink-0" />
              <span className="font-['DM_Sans'] text-sm text-white/60">
                Georgetown, TX 78626<br />Serving All of Central Texas
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[oklch(0.58_0.12_38)] flex-shrink-0" />
              <a
                href="tel:+15125550100"
                className="font-['DM_Sans'] text-sm text-white/60 hover:text-white transition-colors"
              >
                (512) 555-0100
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[oklch(0.58_0.12_38)] flex-shrink-0" />
              <a
                href="mailto:hello@rosatexhomes.com"
                className="font-['DM_Sans'] text-sm text-white/60 hover:text-white transition-colors"
              >
                hello@rosatexhomes.com
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block px-5 py-2.5 bg-[oklch(0.58_0.12_38)] text-white font-['DM_Sans'] text-sm font-medium hover:bg-[oklch(0.48_0.12_38)] transition-colors rounded-sm"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-['DM_Sans'] text-xs text-white/40">
            © {new Date().getFullYear()} RosaTexHomes. All rights reserved.
          </p>
          <p className="font-['DM_Mono'] text-xs text-white/30 tracking-wide">
            NAHB Member · ENERGY STAR Partner · Central Texas Builder
          </p>
        </div>
      </div>
    </footer>
  );
}
