import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CipherSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  showTutorialCompletion?: boolean;
  onTutorialComplete?: () => void;
}

const ciphers = [
  {
    title: "Caesar Cipher",
    href: "/caesar",
    category: "Classical",
    year: "Ancient Rome"
  },
  {
    title: "Vigenère Cipher",
    href: "/vigenere",
    category: "Classical",
    year: "1553"
  },
  {
    title: "Monoalphabetic Cipher",
    href: "/monoalphabetic",
    category: "Classical",
    year: "500 BC"
  },
  {
    title: "Polyalphabetic Cipher",
    href: "/polyalphabetic",
    category: "Classical",
    year: "Various"
  },
  {
    title: "Playfair Cipher",
    href: "/playfair",
    category: "Classical",
    year: "1854"
  },
  {
    title: "Hill Cipher",
    href: "/hill",
    category: "Classical",
    year: "1929"
  },
  {
    title: "Transposition Cipher",
    href: "/transposition",
    category: "Classical",
    year: "Ancient Greece"
  },
  {
    title: "Rail Fence Cipher",
    href: "/railfence",
    category: "Classical",
    year: "Ancient"
  },
  {
    title: "One-Time Pad",
    href: "/otp",
    category: "Modern",
    year: "1882"
  },
  {
    title: "DES Encryption",
    href: "/des",
    category: "Modern",
    year: "1977"
  },
  {
    title: "AES Encryption",
    href: "/aes",
    category: "Modern",
    year: "2001"
  }
];

export function CipherSidebar({ isOpen, onClose, showTutorialCompletion, onTutorialComplete }: CipherSidebarProps) {
  const location = useLocation();

  const handleTutorialComplete = () => {
    onTutorialComplete?.();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[480px] bg-background/95 backdrop-blur-xl border-l border-border/50 z-50 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        data-tutorial="cipher-sidebar-content"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="border-b border-border/50 bg-gradient-to-r from-primary/10 to-blue-500/10">
            {/* Tutorial Completion Info Box */}
            {showTutorialCompletion && (
              <div className="p-4 pb-3">
                <div className="bg-background/95 backdrop-blur-xl border border-primary/30 rounded-xl shadow-2xl shadow-primary/20 overflow-hidden">
                  {/* Progress Bar - 100% complete */}
                  <div className="h-1 bg-background/50">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-300"
                      style={{ width: '100%' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-3">
                    {/* Header */}
                    <div className="grid grid-cols-[auto_1fr] gap-3 items-center pb-3 border-b border-border/30">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-foreground">Tutorial Complete</h3>
                        <div className="text-xs text-emerald-400 font-mono mt-0.5">
                          All steps completed
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="bg-background/50 rounded-lg p-3 border border-border/20">
                      <p className="text-xs text-foreground leading-relaxed text-center">
                        Explore our collection of ciphers below or return home to start encrypting
                      </p>
                    </div>

                    {/* Action Button - Matches All Ciphers Button Style */}
                    <button
                      onClick={handleTutorialComplete}
                      className="w-full px-4 py-2 relative overflow-hidden group
                        bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-emerald-500/10
                        hover:from-emerald-500/20 hover:via-emerald-500/15 hover:to-emerald-500/20
                        border border-emerald-500/30 hover:border-emerald-500/50
                        text-sm font-semibold text-foreground rounded-lg
                        transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20
                        hover:scale-105 active:scale-95"
                    >
                      {/* Animated shine effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                        translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                      <span className="relative">Got it</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Title and Close */}
            <div className="p-6" data-tutorial="sidebar-header">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-foreground">All Ciphers</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-background/80 transition-colors"
                  aria-label="Close sidebar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground">
                Explore the complete collection of cryptographic algorithms
              </p>
            </div>
          </div>

          {/* Cipher List - Table Style */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              {/* Table Header */}
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-4 py-2 text-xs font-semibold text-muted-foreground border-b border-border/30">
                <div>CIPHER</div>
                <div className="text-center w-24">CATEGORY</div>
                <div className="text-center w-28">YEAR</div>
              </div>

              {/* Table Rows */}
              {ciphers.map((cipher) => {
                const isActive = location.pathname === cipher.href;
                return (
                  <Link
                    key={cipher.href}
                    to={cipher.href}
                    onClick={onClose}
                    className={cn(
                      "grid grid-cols-[1fr_auto_auto] gap-4 px-4 py-3 rounded-lg border transition-all duration-200 group items-center",
                      isActive
                        ? "bg-primary/20 border-primary/50 shadow-lg shadow-primary/10"
                        : "bg-background/50 border-border/30 hover:bg-background/80 hover:border-primary/30 hover:shadow-md"
                    )}
                  >
                    <div className="flex-1 min-w-0">
                      <h3
                        className={cn(
                          "font-semibold text-sm truncate transition-colors",
                          isActive
                            ? "text-primary"
                            : "text-foreground group-hover:text-primary"
                        )}
                      >
                        {cipher.title}
                      </h3>
                    </div>
                    <div className="text-center w-24">
                      <span
                        className={cn(
                          "text-xs px-2 py-1 rounded font-medium",
                          cipher.category === "Classical"
                            ? "bg-blue-500/10 text-blue-400"
                            : "bg-purple-500/10 text-purple-400"
                        )}
                      >
                        {cipher.category}
                      </span>
                    </div>
                    <div className="text-center w-28">
                      <span className="text-xs text-muted-foreground font-mono">
                        {cipher.year}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-border/50 bg-background/50">
            <Link
              to="/"
              onClick={onClose}
              className="block w-full p-3 rounded-lg bg-primary/10 border border-primary/20 text-center font-medium text-primary hover:bg-primary/20 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
