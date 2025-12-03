import { cn } from "@/lib/utils";
import { Lock, Unlock } from "lucide-react";

interface ModeToggleProps {
  mode: "encrypt" | "decrypt";
  onChange: (mode: "encrypt" | "decrypt") => void;
}

export function ModeToggle({ mode, onChange }: ModeToggleProps) {
  return (
    <div className="flex rounded-lg bg-muted/50 p-1 border border-border">
      <button
        onClick={() => onChange("encrypt")}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300",
          mode === "encrypt"
            ? "bg-primary text-primary-foreground shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <Lock className="w-4 h-4" />
        Encrypt
      </button>
      <button
        onClick={() => onChange("decrypt")}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300",
          mode === "decrypt"
            ? "bg-secondary text-secondary-foreground shadow-[0_0_15px_hsl(var(--secondary)/0.3)]"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <Unlock className="w-4 h-4" />
        Decrypt
      </button>
    </div>
  );
}
