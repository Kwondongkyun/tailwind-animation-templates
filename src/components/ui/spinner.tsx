import { cn } from "@/lib/utils";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  variant?:
    | "default"
    | "dots"
    | "pulse"
    | "ring"
    | "bars"
    | "circle"
    | "gradient"
    | "dual";
  className?: string;
}

export const Spinner = ({
  size = "md",
  variant = "default",
  className,
}: SpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const baseSize = sizeClasses[size];

  // Default spinner (single ring)
  if (variant === "default") {
    return (
      <div
        className={cn(
          baseSize,
          "border-2 border-current border-t-transparent rounded-full animate-spin",
          className
        )}
        role="status"
        aria-label="로딩 중"
      >
        <span className="sr-only">로딩 중...</span>
      </div>
    );
  }

  // Dots spinner
  if (variant === "dots") {
    const dotSize =
      size === "sm" ? "w-1.5 h-1.5" : size === "lg" ? "w-3 h-3" : "w-2 h-2";
    return (
      <div
        className={cn("flex gap-1", className)}
        role="status"
        aria-label="로딩 중"
      >
        <div
          className={cn(dotSize, "bg-current rounded-full animate-bounce")}
          style={{ animationDelay: "0ms" }}
        />
        <div
          className={cn(dotSize, "bg-current rounded-full animate-bounce")}
          style={{ animationDelay: "150ms" }}
        />
        <div
          className={cn(dotSize, "bg-current rounded-full animate-bounce")}
          style={{ animationDelay: "300ms" }}
        />
        <span className="sr-only">로딩 중...</span>
      </div>
    );
  }

  // Pulse spinner
  if (variant === "pulse") {
    return (
      <div
        className={cn(
          baseSize,
          "bg-current rounded-full animate-pulse",
          className
        )}
        role="status"
        aria-label="로딩 중"
      >
        <span className="sr-only">로딩 중...</span>
      </div>
    );
  }

  // Ring spinner (double ring)
  if (variant === "ring") {
    return (
      <div
        className={cn("relative", baseSize, className)}
        role="status"
        aria-label="로딩 중"
      >
        <div className="absolute inset-0 border-2 border-current/30 rounded-full" />
        <div className="absolute inset-0 border-2 border-current border-t-transparent rounded-full animate-spin" />
        <span className="sr-only">로딩 중...</span>
      </div>
    );
  }

  // Bars spinner
  if (variant === "bars") {
    const barWidth = size === "sm" ? "w-0.5" : size === "lg" ? "w-1" : "w-0.5";
    const barHeight = size === "sm" ? "h-4" : size === "lg" ? "h-8" : "h-6";
    return (
      <div
        className={cn("flex gap-1 items-center", className)}
        role="status"
        aria-label="로딩 중"
      >
        <div
          className={cn(barWidth, barHeight, "bg-current animate-pulse")}
          style={{ animationDelay: "0ms", animationDuration: "1s" }}
        />
        <div
          className={cn(barWidth, barHeight, "bg-current animate-pulse")}
          style={{ animationDelay: "150ms", animationDuration: "1s" }}
        />
        <div
          className={cn(barWidth, barHeight, "bg-current animate-pulse")}
          style={{ animationDelay: "300ms", animationDuration: "1s" }}
        />
        <span className="sr-only">로딩 중...</span>
      </div>
    );
  }

  // Circle spinner (filled circle growing)
  if (variant === "circle") {
    return (
      <div
        className={cn(
          baseSize,
          "bg-current rounded-full animate-ping",
          className
        )}
        role="status"
        aria-label="로딩 중"
      >
        <span className="sr-only">로딩 중...</span>
      </div>
    );
  }

  // Gradient spinner
  if (variant === "gradient") {
    return (
      <div
        className={cn(
          baseSize,
          "rounded-full animate-spin",
          "bg-linear-to-tr from-transparent via-current to-current",
          className
        )}
        role="status"
        aria-label="로딩 중"
      >
        <span className="sr-only">로딩 중...</span>
      </div>
    );
  }

  // Dual ring spinner
  if (variant === "dual") {
    return (
      <div
        className={cn("relative", baseSize, className)}
        role="status"
        aria-label="로딩 중"
      >
        <div className="absolute inset-0 border-2 border-current border-t-transparent rounded-full animate-spin" />
        <div
          className="absolute inset-1 border-2 border-current border-b-transparent rounded-full animate-spin"
          style={{ animationDirection: "reverse" }}
        />
        <span className="sr-only">로딩 중...</span>
      </div>
    );
  }

  return null;
};
