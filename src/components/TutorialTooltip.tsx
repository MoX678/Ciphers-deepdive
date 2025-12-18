import { useState, useEffect, useRef, useCallback } from "react";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";

export interface TutorialStep {
  target: string; // CSS selector for the element to highlight
  title: string;
  description: string;
  position?: "top" | "bottom" | "left" | "right" | "center"; // "center" for centered modal
  offset?: { x: number; y: number };
  waitForClick?: boolean; // Wait for user to click the highlighted element
  triggerNext?: boolean; // Automatically go to next step after click
  autoClick?: boolean; // Automatically click the target element when this step is shown
  preClickTarget?: string; // CSS selector for an element to click BEFORE showing this step (useful for opening modals/sidebars)
  preClickDelay?: number; // Delay in ms after pre-click before showing the step (default: 500)
  hideBackdrop?: boolean; // Hide the tutorial backdrop (useful when targeting modals/sidebars that have their own backdrop)
  noHighlight?: boolean; // Don't add the highlight class to the target element
  waitForClose?: string; // CSS selector for element to watch - when it disappears, move to next step
  isFinalStep?: boolean; // If true, this is a centered completion message
}

interface TutorialTooltipProps {
  steps: TutorialStep[];
  storageKey: string; // Unique key for localStorage
  onComplete?: () => void;
  autoStart?: boolean;
  onStepChange?: (step: number) => void;
}

export function TutorialTooltip({
  steps,
  storageKey,
  onComplete,
  autoStart = true,
  onStepChange,
}: TutorialTooltipProps) {
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [hasCompleted, setHasCompleted] = useState(false);
  const [waitingForClick, setWaitingForClick] = useState(false);
  const [preClickDone, setPreClickDone] = useState(true); // True by default for steps without preClickTarget
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if tutorial was already completed
    const completed = localStorage.getItem(`tutorial-${storageKey}`);
    if (completed === "true") {
      setHasCompleted(true);
      return;
    }

    if (autoStart && !hasCompleted) {
      // Small delay before starting tutorial
      const timer = setTimeout(() => {
        setIsActive(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [storageKey, autoStart, hasCompleted]);

  const completeTutorial = useCallback((showModal: boolean = true) => {
    const currentTarget = document.querySelector(steps[currentStep]?.target);
    if (currentTarget) {
      currentTarget.classList.remove("tutorial-highlight");
    }

    // Check if we're on the home page - if so, don't show modal or confetti
    const isOnHomePage = window.location.pathname === '/';
    
    if (!isOnHomePage) {
      // Confetti celebration!
      const duration = 3000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      const interval: ReturnType<typeof setInterval> = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // Launch confetti from both sides
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
      }, 250);
    }

    localStorage.setItem(`tutorial-${storageKey}`, "true");
    setIsActive(false);
    
    // Show completion modal only if not on home page and modal is requested
    if (showModal && !isOnHomePage) {
      setShowCompletionModal(true);
    } else {
      setHasCompleted(true);
    }
    
    onComplete?.();
  }, [currentStep, steps, storageKey, onComplete]);

  // Listen for completion event from CipherLayout
  useEffect(() => {
    const handleShowCompletion = (event: Event) => {
      const customEvent = event as CustomEvent;
      // Only respond if:
      // 1. This is the cipher tutorial (matching storageKey)
      // 2. We're NOT on the home page (route check)
      const isOnHomePage = window.location.pathname === '/';
      if (customEvent.detail?.storageKey === storageKey && !isOnHomePage) {
        completeTutorial(true);
      }
    };

    window.addEventListener('showTutorialCompletion', handleShowCompletion);
    return () => window.removeEventListener('showTutorialCompletion', handleShowCompletion);
  }, [completeTutorial, storageKey]);

  // Handle waitForClose - watch for element to disappear then advance/complete
  useEffect(() => {
    if (!isActive || currentStep >= steps.length) return;
    
    const step = steps[currentStep];
    if (!step.waitForClose) return;

    // Don't start checking until preClick is done (e.g., sidebar has opened)
    if (!preClickDone) return;

    // Add a small delay to ensure the element is fully rendered/visible before we start checking
    const initialDelay = setTimeout(() => {
      const checkInterval = setInterval(() => {
        const targetElement = document.querySelector(step.waitForClose!) as HTMLElement;
        
        // Check if element is hidden or removed by checking:
        // 1. Element doesn't exist
        // 2. Element has translate-x-full class (fully translated off-screen)
        // 3. Element's computed transform indicates it's off-screen
        const isHidden = !targetElement || 
                        targetElement.offsetParent === null ||
                        (window.getComputedStyle(targetElement).transform !== 'none' && 
                         window.getComputedStyle(targetElement).transform.includes('matrix') &&
                         targetElement.getBoundingClientRect().left >= window.innerWidth);
        
        if (isHidden) {
          clearInterval(checkInterval);
          
          // Additional wait to ensure animation is complete
          setTimeout(() => {
            // Final check - verify element is still hidden
            const finalCheck = document.querySelector(step.waitForClose!) as HTMLElement;
            const stillHidden = !finalCheck || 
                              finalCheck.offsetParent === null ||
                              finalCheck.getBoundingClientRect().left >= window.innerWidth;
            
            if (stillHidden) {
              // Move to next step or complete
              if (currentStep < steps.length - 1) {
                const currentTarget = document.querySelector(step.target);
                if (currentTarget) {
                  currentTarget.classList.remove("tutorial-highlight");
                }
                const nextStep = currentStep + 1;
                setCurrentStep(nextStep);
                onStepChange?.(nextStep);
              } else {
                completeTutorial(true);
              }
            }
          }, 400); // Wait for animation to complete
        }
      }, 200);

      return () => clearInterval(checkInterval);
    }, 300); // Wait 300ms after preClick is done before starting to check

    return () => clearTimeout(initialDelay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, currentStep, steps, preClickDone]);

  // Handle click listener for wait-for-click steps
  useEffect(() => {
    if (!isActive || currentStep >= steps.length) return;
    
    const step = steps[currentStep];
    if (!step.waitForClick) return;

    const targetElement = document.querySelector(step.target);
    if (!targetElement) return;

    setWaitingForClick(true);

    const handleClick = () => {
      setWaitingForClick(false);
      if (step.triggerNext) {
        // Automatically advance to next step after click
        setTimeout(() => {
          if (currentStep < steps.length - 1) {
            const currentTarget = document.querySelector(steps[currentStep].target);
            if (currentTarget) {
              currentTarget.classList.remove("tutorial-highlight");
            }
            const nextStep = currentStep + 1;
            setCurrentStep(nextStep);
            onStepChange?.(nextStep);
          } else {
            completeTutorial();
          }
        }, 500);
      }
    };

    targetElement.addEventListener('click', handleClick);

    return () => {
      targetElement.removeEventListener('click', handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, currentStep, steps]);

  useEffect(() => {
    if (!isActive || currentStep >= steps.length || !preClickDone) return;

    const step = steps[currentStep];
    // If this is the final step, dispatch event to show completion info in sidebar
    // and hide the tutorial tooltip
    if (step.isFinalStep) {
      const event = new CustomEvent('tutorialFinalStep', { 
        detail: { storageKey } 
      });
      window.dispatchEvent(event);
      // Hide the tutorial tooltip when final step is reached
      setIsActive(false);
      return;
    }

    const updatePosition = () => {
      const step = steps[currentStep];
      const targetElement = document.querySelector(step.target);

      if (targetElement && tooltipRef.current) {
        const targetRect = targetElement.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        const position = step.position || "bottom";
        const offset = step.offset || { x: 0, y: 0 };

        let top = 0;
        let left = 0;

        switch (position) {
          case "top":
            top = targetRect.top - tooltipRect.height - 16 + offset.y;
            left = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2 + offset.x;
            break;
          case "bottom":
            top = targetRect.bottom + 16 + offset.y;
            left = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2 + offset.x;
            break;
          case "left":
            top = targetRect.top + targetRect.height / 2 - tooltipRect.height / 2 + offset.y;
            left = targetRect.left - tooltipRect.width - 16 + offset.x;
            break;
          case "right":
            top = targetRect.top + targetRect.height / 2 - tooltipRect.height / 2 + offset.y;
            left = targetRect.right + 16 + offset.x;
            break;
        }

        // Keep tooltip within viewport
        const margin = 16;
        top = Math.max(margin, Math.min(top, window.innerHeight - tooltipRect.height - margin));
        left = Math.max(margin, Math.min(left, window.innerWidth - tooltipRect.width - margin));

        setTooltipPosition({ top, left });

        // Add spotlight effect to target element (unless noHighlight is set)
        if (!step.noHighlight) {
          targetElement.classList.add("tutorial-highlight");
        }
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
      
      // Remove highlight from previous target
      const step = steps[currentStep];
      const targetElement = document.querySelector(step.target);
      if (targetElement) {
        targetElement.classList.remove("tutorial-highlight");
      }
    };
  }, [isActive, currentStep, steps, preClickDone, storageKey]);

  // Handle preClickTarget - click another element before showing this step
  useEffect(() => {
    if (!isActive || currentStep >= steps.length) return;
    
    const step = steps[currentStep];
    if (!step.preClickTarget) {
      setPreClickDone(true);
      return;
    }

    // Reset preClickDone when step changes
    setPreClickDone(false);

    const preClickElement = document.querySelector(step.preClickTarget) as HTMLElement;
    if (!preClickElement) {
      setPreClickDone(true);
      return;
    }

    // Click the element first
    preClickElement.click();
    
    // Wait for the UI to update (e.g., sidebar to open)
    const delay = step.preClickDelay || 500;
    const timer = setTimeout(() => {
      setPreClickDone(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [isActive, currentStep, steps]);

  // Handle autoClick - automatically click the target element when step is shown
  useEffect(() => {
    if (!isActive || currentStep >= steps.length || !preClickDone) return;
    
    const step = steps[currentStep];
    if (!step.autoClick) return;

    const targetElement = document.querySelector(step.target) as HTMLElement;
    if (!targetElement) return;

    // Small delay to let the UI update before clicking
    const timer = setTimeout(() => {
      targetElement.click();
    }, 300);

    return () => clearTimeout(timer);
  }, [isActive, currentStep, steps, preClickDone]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      // Remove highlight from current step
      const currentTarget = document.querySelector(steps[currentStep].target);
      if (currentTarget) {
        currentTarget.classList.remove("tutorial-highlight");
      }
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      onStepChange?.(nextStep);
    } else {
      completeTutorial();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      // Remove highlight from current step
      const currentTarget = document.querySelector(steps[currentStep].target);
      if (currentTarget) {
        currentTarget.classList.remove("tutorial-highlight");
      }
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      onStepChange?.(prevStep);
      setWaitingForClick(false);
    }
  };

  const handleSkip = () => {
    completeTutorial();
  };

  // Early return if tutorial was already completed (don't show modal for already-completed tutorials)
  if (hasCompleted && !showCompletionModal) return null;
  if (!isActive && !showCompletionModal) return null;

  // Render completion modal if shown (only when actively completing, not when already completed)
  if (showCompletionModal && !hasCompleted) {
    return (
      <>
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/60 z-[9998] animate-in fade-in duration-300" />
        
        {/* Centered Completion Modal - Matches Tooltip Design */}
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div className="w-full max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="bg-background/95 backdrop-blur-xl border border-primary/30 rounded-xl shadow-2xl shadow-primary/20 overflow-hidden">
              {/* Progress Bar - 100% complete */}
              <div className="h-1 bg-background/50">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-300"
                  style={{ width: '100%' }}
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Header - Matches Tooltip Style */}
                <div className="grid grid-cols-[auto_1fr] gap-4 items-center pb-4 border-b border-border/30">
                  {/* Success Icon - No Animation */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  {/* Title */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">Tutorial Complete</h3>
                    <div className="text-xs text-emerald-400 font-mono mt-1">
                      All steps completed
                    </div>
                  </div>
                </div>

                {/* Description - Matches Tooltip Style */}
                <div className="bg-background/50 rounded-lg p-4 border border-border/20">
                  <p className="text-sm text-foreground leading-relaxed text-center">
                    You've successfully completed the tutorial! Explore our collection of classical and modern encryption methods to learn how cryptography works.
                  </p>
                </div>

                <div className="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/20">
                  <p className="text-sm text-emerald-400 font-medium text-center">
                    Start encrypting and decrypting messages
                  </p>
                </div>

                {/* Action Button - Matches All Ciphers Button Style */}
                <Button
                  onClick={() => {
                    setShowCompletionModal(false);
                    setHasCompleted(true);
                  }}
                  className="w-full relative overflow-hidden group
                    bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-emerald-500/10
                    hover:from-emerald-500/20 hover:via-emerald-500/15 hover:to-emerald-500/20
                    border-emerald-500/30 hover:border-emerald-500/50
                    transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20
                    hover:scale-105 active:scale-95 font-semibold"
                >
                  {/* Animated shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                    translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                  <span className="relative">Get Started</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!isActive || hasCompleted) return null;

  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <>
      {/* Backdrop - hidden when step has hideBackdrop set */}
      {!step.hideBackdrop && (
        <div className="fixed inset-0 bg-black/60 z-[9998] pointer-events-none animate-in fade-in duration-300" />
      )}

      {/* Tooltip */}
      <div
        ref={tooltipRef}
        className={cn(
          "fixed z-[9999] w-full max-w-sm pointer-events-auto",
          "animate-in fade-in slide-in-from-bottom-4 duration-300"
        )}
        style={{
          top: `${tooltipPosition.top}px`,
          left: `${tooltipPosition.left}px`,
        }}
      >
        <div className="bg-background/95 backdrop-blur-xl border border-primary/30 rounded-xl shadow-2xl shadow-primary/20 overflow-hidden">
          {/* Progress Bar */}
          <div className="h-1 bg-background/50">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Header - Table Row Style */}
            <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center pb-4 border-b border-border/30">
              {/* Step Number */}
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-lg font-bold text-emerald-400">
                  {currentStep + 1}
                </span>
              </div>
              
              {/* Title */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <div className="text-xs text-muted-foreground font-mono mt-1">
                  Step {currentStep + 1} of {steps.length}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={handleSkip}
                className="p-2 rounded-lg hover:bg-background/80 transition-colors"
                aria-label="Skip tutorial"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Description */}
            <div className="bg-background/50 rounded-lg p-4 border border-border/20">
              <p className="text-sm text-foreground leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Waiting Indicator */}
            {waitingForClick && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/20 animate-pulse">
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                <p className="text-xs text-primary font-medium">
                  Click the highlighted element to continue
                </p>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between gap-2 pt-2">
              <Button
                onClick={handlePrevious}
                variant="outline"
                size="sm"
                disabled={currentStep === 0}
                className="gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              <div className="flex gap-1">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      index === currentStep
                        ? "bg-primary w-6"
                        : index < currentStep
                        ? "bg-primary/50"
                        : "bg-muted"
                    )}
                  />
                ))}
              </div>

              {!waitingForClick && (
                <Button
                  onClick={handleNext}
                  size="sm"
                  className="gap-2"
                >
                  {currentStep === steps.length - 1 ? "Finish" : "Next"}
                  {currentStep < steps.length - 1 && <ChevronRight className="w-4 h-4" />}
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Pointer Arrow */}
        <div
          className={cn(
            "absolute w-4 h-4 bg-background/95 border-primary/30 rotate-45",
            step.position === "top" && "bottom-[-8px] left-1/2 -translate-x-1/2 border-b border-r",
            step.position === "bottom" && "top-[-8px] left-1/2 -translate-x-1/2 border-t border-l",
            step.position === "left" && "right-[-8px] top-1/2 -translate-y-1/2 border-t border-r",
            step.position === "right" && "left-[-8px] top-1/2 -translate-y-1/2 border-b border-l",
            !step.position && "top-[-8px] left-1/2 -translate-x-1/2 border-t border-l"
          )}
        />
      </div>

      {/* Global Styles for Highlight */}
      <style>{`
        .tutorial-highlight {
          z-index: 9998 !important;
          box-shadow: 0 0 0 4px hsl(var(--primary) / 0.5), 0 0 0 9999px rgba(0, 0, 0, 0.6) !important;
          border-radius: 0.5rem;
          animation: tutorial-pulse 2s ease-in-out infinite;
        }

        @keyframes tutorial-pulse {
          0%, 100% {
            box-shadow: 0 0 0 4px hsl(var(--primary) / 0.5), 0 0 0 9999px rgba(0, 0, 0, 0.6);
          }
          50% {
            box-shadow: 0 0 0 8px hsl(var(--primary) / 0.3), 0 0 0 9999px rgba(0, 0, 0, 0.6);
          }
        }
      `}</style>
    </>
  );
}
