// components/layout/SiteFooter.tsx
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 sm:px-6 py-8">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-body/70 text-sm text-center sm:text-left">
          © 2025 Dr. Adnan El Bakri. All rights reserved.
        </p>
        <nav
          className="flex gap-6 flex-wrap justify-center"
          aria-label="Social links"
        >
          <Link
            href="https://www.linkedin.com/in/adnanelbakri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body/70 hover:text-gold transition-colors text-sm"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.facebook.com/elbakriadnan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body/70 hover:text-gold transition-colors text-sm"
            aria-label="Facebook profile"
          >
            Facebook
          </Link>
          <Link
            href="https://adnanelbakri.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body/70 hover:text-gold transition-colors text-sm"
            aria-label="Medium blog"
          >
            Medium
          </Link>
        </nav>
        <p className="text-body/50 text-xs text-center sm:text-right">
          Designed &amp; built by{" "}
          <Link
            href="https://mace-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            Mace Akkari
          </Link>
        </p>
      </div>
    </footer>
  );
}
