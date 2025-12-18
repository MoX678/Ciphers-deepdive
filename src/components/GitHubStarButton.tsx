import { useState, useEffect } from "react";
import { Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GitHubStarButtonProps {
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export function GitHubStarButton({ 
  className = "", 
  variant = "outline", 
  size = "sm" 
}: GitHubStarButtonProps) {
  const [starCount, setStarCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/MoX678/ciphers-visualizer");
        if (response.ok) {
          const data = await response.json();
          setStarCount(data.stargazers_count);
        }
      } catch (error) {
        console.error("Failed to fetch star count:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStarCount();
  }, []);

  const formatCount = (count: number): string => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + "k";
    }
    return count.toString();
  };

  return (
    <a 
      href="https://github.com/MoX678/ciphers-visualizer" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Button 
        variant={variant}
        size={size}
        className={cn("gap-2 bg-background/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all", className)}
      >
        <Github className="w-4 h-4" />
        <span className="hidden sm:inline">Star</span>
        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
        {!loading && starCount !== null && (
          <span className="text-xs font-semibold bg-muted px-1.5 py-0.5 rounded-full">
            {formatCount(starCount)}
          </span>
        )}
        {loading && (
          <span className="text-xs font-semibold bg-muted px-1.5 py-0.5 rounded-full animate-pulse">
            ...
          </span>
        )}
      </Button>
    </a>
  );
}
