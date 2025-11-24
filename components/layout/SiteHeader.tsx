import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { ReactNode } from "react";
export default function SiteHeader({ rightSlot }: { rightSlot?: ReactNode }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-lg">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex justify-between items-center"
        aria-label="Main"
      >
        <Link
          href="/"
          className="text-lg sm:text-xl font-bold text-gold hover:opacity-80 transition-opacity"
          aria-label="Go to home page"
        >
          Dr. Adnan El Bakri
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/CV-DrElBakri.pdf" download>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-transparent border-gold/30 hover:border-gold text-body hover:text-gold"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">CV</span>
            </Button>
          </Link>

          <Link href="/DiagnozSummary.pdf" download>
            <Button
              size="sm"
              className="gap-2 bg-gold text-black hover:bg-gold/90"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Strategy Deck</span>
            </Button>
          </Link>
          {rightSlot && <div>{rightSlot}</div>}
        </div>
      </nav>
    </header>
  );
}
