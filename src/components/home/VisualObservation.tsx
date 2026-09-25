import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function VisualObservation() {
  return (
    <section className="w-full bg-surface-canvas py-20 sm:py-28 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5 font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Observation // 03. Visuals</span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl tracking-tight text-ink-primary">
              HMS Clicks
            </h2>
            <p className="font-sans text-sm sm:text-base text-ink-secondary leading-relaxed">
              Macro observation directly informs how I debug systems: both require stillness, patience,
              and noticing what exists between the obvious lines.
            </p>
          </div>
          <Link
            href="/visuals"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-ink-secondary hover:text-primary transition-colors self-start sm:self-auto min-h-[44px]"
          >
            <span>Explore Visual Laboratory</span>
            <ArrowRight className="w-3.5 h-3.5 text-accent" />
          </Link>
        </div>

        {/* Asymmetric 2-Photo Visual Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="p-3 bg-canvas-paper border border-border-hairline rounded-card shadow-sm space-y-3 group hover:border-primary/30 transition-all">
            <div className="overflow-hidden aspect-[4/3] relative bg-canvas-vellum rounded-sharp">
              <Image
                src="https://res.cloudinary.com/dkpehrpdm/image/upload/q_auto/f_auto/v1779626938/Fruitfly-1_v1gfga.jpg"
                alt="Fruitfly Drosophila Melanogaster Macro Capture"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-sans text-ink-tertiary px-1 gap-2">
              <span className="text-ink-primary font-medium truncate">The Navigator</span>
              <span className="shrink-0 text-right">Drosophila Melanogaster</span>
            </div>
          </div>

          <div className="p-3 bg-canvas-paper border border-border-hairline rounded-card shadow-sm space-y-3 group hover:border-primary/30 transition-all">
            <div className="overflow-hidden aspect-[4/3] relative bg-canvas-vellum rounded-sharp">
              <Image
                src="https://res.cloudinary.com/dkpehrpdm/image/upload/q_auto/f_auto/v1779626953/spider_plompb.jpg"
                alt="Silent Weaver Spider Macro Geometry"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-sans text-ink-tertiary px-1 gap-2">
              <span className="text-ink-primary font-medium truncate">Silent Weaver</span>
              <span className="shrink-0 text-right">Geometric Form</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
