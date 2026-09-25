import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArticleFooterNav() {
  return (
    <div className="pt-10 flex items-center justify-between font-sans text-xs">
      <Link
        href="/writing"
        className="inline-flex items-center gap-2 text-ink-tertiary hover:text-ink-primary transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>All writing pieces</span>
      </Link>
      <Link
        href="/connect"
        className="text-rust hover:underline"
      >
        Discuss this piece →
      </Link>
    </div>
  );
}
