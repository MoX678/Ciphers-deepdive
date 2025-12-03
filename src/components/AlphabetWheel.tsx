import { cn } from "@/lib/utils";

interface AlphabetWheelProps {
  shift: number;
  highlightedInput?: string;
  highlightedOutput?: string;
}

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function AlphabetWheel({ shift, highlightedInput, highlightedOutput }: AlphabetWheelProps) {
  const shiftedAlphabet = [...ALPHABET.slice(shift), ...ALPHABET.slice(0, shift)];
  
  return (
    <div className="glass-card p-6 overflow-x-auto">
      <div className="flex flex-col gap-2 min-w-max">
        {/* Original alphabet */}
        <div className="flex gap-1">
          <span className="w-16 text-xs text-muted-foreground font-mono flex items-center">Plain:</span>
          {ALPHABET.map((letter, i) => (
            <div
              key={`orig-${i}`}
              className={cn(
                "w-8 h-8 flex items-center justify-center font-mono text-sm rounded border",
                highlightedInput === letter
                  ? "bg-primary/20 border-primary text-primary"
                  : "bg-muted/50 border-border text-foreground"
              )}
            >
              {letter}
            </div>
          ))}
        </div>
        
        {/* Arrow indicators */}
        <div className="flex gap-1">
          <span className="w-16" />
          {ALPHABET.map((_, i) => (
            <div key={`arrow-${i}`} className="w-8 flex items-center justify-center text-muted-foreground">
              ↓
            </div>
          ))}
        </div>
        
        {/* Shifted alphabet */}
        <div className="flex gap-1">
          <span className="w-16 text-xs text-muted-foreground font-mono flex items-center">Cipher:</span>
          {shiftedAlphabet.map((letter, i) => (
            <div
              key={`shift-${i}`}
              className={cn(
                "w-8 h-8 flex items-center justify-center font-mono text-sm rounded border",
                highlightedOutput === letter
                  ? "bg-secondary/20 border-secondary text-secondary"
                  : "bg-muted/50 border-border text-foreground"
              )}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
        <span className="font-mono">Shift: {shift}</span>
        <span className="text-xs">({shift > 0 ? `+${shift}` : shift} positions)</span>
      </div>
    </div>
  );
}
