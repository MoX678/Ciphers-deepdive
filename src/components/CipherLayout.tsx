import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "./ui/button";
import { CipherSidebar } from "./CipherSidebar";
import { GitHubStarButton } from "./GitHubStarButton";
import gsap from "gsap";

interface CipherLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function CipherLayout({ title, description, children }: CipherLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showTutorialCompletion, setShowTutorialCompletion] = useState(false);
  const [shouldShowCompletionModal, setShouldShowCompletionModal] = useState(false);
  const location = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);

  const handleTutorialComplete = () => {
    setShowTutorialCompletion(false);
    setShouldShowCompletionModal(true);
    // Wait for sidebar to close before showing modal
    setTimeout(() => {
      setIsSidebarOpen(false);
    }, 100);
  };

  // Listen for tutorial final step event
  useEffect(() => {
    const handleTutorialFinalStep = () => {
      setShowTutorialCompletion(true);
      setIsSidebarOpen(true); // Ensure sidebar is open
    };

    window.addEventListener('tutorialFinalStep', handleTutorialFinalStep);
    return () => window.removeEventListener('tutorialFinalStep', handleTutorialFinalStep);
  }, []);

  // Show completion modal after sidebar closes
  useEffect(() => {
    if (shouldShowCompletionModal && !isSidebarOpen) {
      // Wait for sidebar animation to complete
      const timer = setTimeout(() => {
        // Trigger completion event with confetti (with storageKey)
        const event = new CustomEvent('showTutorialCompletion', {
          detail: { storageKey: 'cipher-tutorial' }
        });
        window.dispatchEvent(event);
        setShouldShowCompletionModal(false);
      }, 400); // Match sidebar transition duration
      return () => clearTimeout(timer);
    }
  }, [shouldShowCompletionModal, isSidebarOpen]);

  useEffect(() => {
    // Animate on page load
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Header animation - slide down and fade in
      tl.fromTo(
        headerRef.current,
        {
          y: -100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out"
        }
      );

      // Content animation - fade in and slide up
      tl.fromTo(
        contentRef.current,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        },
        "-=0.3" // Start slightly before header animation ends
      );
    }, mainRef);

    return () => ctx.revert();
  }, [location.pathname]); // Re-run animation on route change

  return (
    <div ref={mainRef} className="min-h-screen bg-background relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header ref={headerRef} className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50 relative">
        <div className="px-4 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-foreground">{title}</h1>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <GitHubStarButton />
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2 relative overflow-hidden group
                bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10
                hover:from-primary/20 hover:via-primary/15 hover:to-primary/20
                border-primary/30 hover:border-primary/50
                transition-all duration-300 hover:shadow-lg hover:shadow-primary/20
                hover:scale-105 active:scale-95"
              onClick={() => setIsSidebarOpen(true)}
              data-tutorial="all-ciphers-button"
            >
              {/* Animated shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              
              <Home className="w-4 h-4 group-hover:rotate-[-10deg] transition-transform duration-300" />
              <span className="font-semibold">All Ciphers</span>
              
              {/* Tooltip hint */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 
                bg-foreground text-background text-xs font-medium rounded-md
                opacity-0 group-hover:opacity-100 group-hover:-top-12 
                transition-all duration-300 pointer-events-none whitespace-nowrap
                shadow-xl">
                Browse all encryption methods
                <span className="absolute top-full left-1/2 -translate-x-1/2 
                  border-4 border-transparent border-t-foreground" />
              </span>
            </Button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <CipherSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        showTutorialCompletion={showTutorialCompletion}
        onTutorialComplete={handleTutorialComplete}
      />

      {/* Main content */}
      <main ref={contentRef} className="px-4 lg:px-8 py-6 relative z-10">
        {children}
      </main>
    </div>
  );
}
