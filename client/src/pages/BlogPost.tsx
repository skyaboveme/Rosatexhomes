/* =============================================================
   RosaTexHomes — Blog Post Detail Page
   Design: Texas Vernacular Modernism
   ============================================================= */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { blogPosts } from "./Blog";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[oklch(0.99_0.005_80)]">
        <Navbar />
        <div className="container pt-40 pb-24 text-center">
          <h1 className="font-['Playfair_Display'] text-4xl font-bold text-[oklch(0.18_0.01_60)] mb-4">
            Article Not Found
          </h1>
          <Link href="/blog" className="inline-flex items-center gap-2 text-[oklch(0.58_0.12_38)] font-['DM_Sans'] text-sm">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // Parse markdown-lite content to JSX
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let inTable = false;
    let tableRows: string[][] = [];
    let tableHeaders: string[] = [];

    const flushTable = () => {
      if (tableRows.length > 0) {
        elements.push(
          <div key={`table-${elements.length}`} className="overflow-x-auto my-8">
            <table className="w-full border-collapse font-['DM_Sans'] text-sm">
              <thead>
                <tr className="bg-[oklch(0.97_0.008_80)]">
                  {tableHeaders.map((h, i) => (
                    <th key={i} className="border border-[oklch(0.88_0.01_80)] px-4 py-3 text-left font-medium text-[oklch(0.18_0.01_60)]">
                      {h.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, ri) => (
                  <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-[oklch(0.99_0.005_80)]"}>
                    {row.map((cell, ci) => (
                      <td key={ci} className="border border-[oklch(0.88_0.01_80)] px-4 py-3 text-[oklch(0.4_0.01_60)]">
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        tableHeaders = [];
        inTable = false;
      }
    };

    lines.forEach((line, i) => {
      if (line.startsWith("|")) {
        const cells = line.split("|").filter((c) => c.trim() !== "" && !c.match(/^[-\s]+$/));
        if (cells.length > 0) {
          if (!inTable) {
            inTable = true;
            tableHeaders = cells;
          } else if (!line.match(/^\|[-|\s]+\|$/)) {
            tableRows.push(cells);
          }
        }
        return;
      }
      if (inTable) flushTable();

      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="font-['Playfair_Display'] text-3xl font-bold text-[oklch(0.18_0.01_60)] mt-12 mb-5 leading-tight">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="font-['Playfair_Display'] text-xl font-bold text-[oklch(0.18_0.01_60)] mt-8 mb-3">
            {line.replace("### ", "")}
          </h3>
        );
      } else if (line.startsWith("**") && line.endsWith("**")) {
        elements.push(
          <p key={i} className="font-['DM_Sans'] font-semibold text-[oklch(0.25_0.01_60)] mt-4 mb-2">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      } else if (line.trim() !== "") {
        // Handle inline bold
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        elements.push(
          <p key={i} className="font-['DM_Sans'] text-base text-[oklch(0.4_0.01_60)] leading-relaxed mb-4">
            {parts.map((part, pi) =>
              part.startsWith("**") ? (
                <strong key={pi} className="font-semibold text-[oklch(0.25_0.01_60)]">
                  {part.replace(/\*\*/g, "")}
                </strong>
              ) : (
                part
              )
            )}
          </p>
        );
      }
    });
    if (inTable) flushTable();
    return elements;
  };

  return (
    <div className="min-h-screen bg-[oklch(0.99_0.005_80)]">
      <Navbar />

      {/* ── ARTICLE HEADER ── */}
      <section className="pt-32 pb-12 bg-[oklch(0.97_0.008_80)]">
        <div className="container max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 font-['DM_Sans'] text-sm text-[oklch(0.55_0.01_60)] hover:text-[oklch(0.58_0.12_38)] transition-colors mb-8">
            <ArrowLeft size={15} /> Back to Blog
          </Link>
          <span className="section-label block mb-3">{post.category}</span>
          <span className="horizon-rule" />
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[oklch(0.18_0.01_60)] leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5">
            <span className="flex items-center gap-2 font-['DM_Sans'] text-sm text-[oklch(0.55_0.01_60)]">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-2 font-['DM_Sans'] text-sm text-[oklch(0.55_0.01_60)]">
              <Clock size={14} /> {post.readTime}
            </span>
            <span className="font-['DM_Sans'] text-sm text-[oklch(0.55_0.01_60)]">
              By <strong className="text-[oklch(0.35_0.01_60)]">RosaTexHomes Team</strong>
            </span>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <article className="py-16">
        <div className="container max-w-3xl">
          {/* Lead */}
          <p className="font-['DM_Sans'] text-lg text-[oklch(0.35_0.01_60)] leading-relaxed mb-8 border-l-4 border-[oklch(0.58_0.12_38)] pl-6 italic">
            {post.excerpt}
          </p>
          {/* Body */}
          <div>{renderContent(post.content)}</div>

          {/* Author Box */}
          <div className="mt-16 p-8 bg-[oklch(0.97_0.008_80)] rounded-sm border border-[oklch(0.88_0.01_80)]">
            <div className="font-['DM_Mono'] text-xs tracking-widest uppercase text-[oklch(0.58_0.12_38)] mb-2">Written By</div>
            <div className="font-['Playfair_Display'] text-xl font-bold text-[oklch(0.18_0.01_60)] mb-1">The RosaTexHomes Team</div>
            <p className="font-['DM_Sans'] text-sm text-[oklch(0.45_0.01_60)] leading-relaxed">
              RosaTexHomes has been building premium custom homes in Central Texas since 2008.
              Our team of builders, designers, and client advisors shares knowledge to help
              homebuyers make confident, informed decisions.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-[oklch(0.58_0.12_38)] rounded-sm text-center">
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-white mb-3">
              Ready to Start Your Custom Home Journey?
            </h3>
            <p className="font-['DM_Sans'] text-sm text-white/80 mb-6">
              Schedule a free consultation with our team and let's talk about your vision.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[oklch(0.58_0.12_38)] font-['DM_Sans'] font-semibold hover:bg-[oklch(0.97_0.008_80)] transition-colors rounded-sm"
            >
              Schedule a Free Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </article>

      {/* ── MORE POSTS ── */}
      <section className="py-16 border-t border-[oklch(0.88_0.01_80)]">
        <div className="container">
          <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[oklch(0.18_0.01_60)] mb-8">
            More Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block border-t-2 border-[oklch(0.88_0.01_80)] hover:border-[oklch(0.58_0.12_38)] transition-colors pt-5"
              >
                <span className="font-['DM_Mono'] text-xs tracking-widest uppercase text-[oklch(0.58_0.12_38)] block mb-2">
                  {p.category}
                </span>
                <h3 className="font-['Playfair_Display'] text-lg font-bold text-[oklch(0.18_0.01_60)] leading-snug group-hover:text-[oklch(0.58_0.12_38)] transition-colors">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
