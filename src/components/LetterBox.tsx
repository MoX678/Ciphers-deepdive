import { cn } from "@/lib/utils";

interface LetterBoxProps {
  letter: string;
  isActive?: boolean;
  isHighlighted?: boolean;
  variant?: "input" | "output" | "key";
  index?: number;
  showIndex?: boolean;
}

const variantStyles = {
  input: "bg-muted border-border",
  output: "bg-primary/10 border-primary/50 text-primary",
  key: "bg-secondary/10 border-secondary/50 text-secondary",
};

export function LetterBox({ 
  letter, 
  isActive, 
  isHighlighted,
  variant = "input",
  index,
  showIndex 
}: LetterBoxProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      {showIndex && index !== undefined && (
        <span className="text-xs text-muted-foreground font-mono">{index}</span>
      )}
      <div
        className={cn(
          "cipher-letter",
          variantStyles[variant],
          isActive && "cipher-letter-active animate-letter-shift",
          isHighlighted && "ring-2 ring-primary ring-offset-2 ring-offset-background"
        )}
      >
        {letter || " "}
      </div>
    </div>
  );
}
