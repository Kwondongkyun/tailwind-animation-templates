import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const animatedButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:scale-105 hover:shadow-lg active:scale-95",
        gradient:
          "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 active:scale-95 bg-[length:200%_100%] hover:bg-right-bottom transition-all duration-500",
        glow: "bg-blue-600 text-white hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700",
        threed:
          "bg-green-600 text-white shadow-[0_5px_0_0_rgb(21,128,61)] hover:shadow-[0_2px_0_0_rgb(21,128,61)] hover:-translate-y-[3px] active:shadow-[0_0px_0_0_rgb(21,128,61)] active:translate-y-[5px] transition-all",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95",
        ripple:
          "bg-indigo-600 text-white hover:scale-105 hover:shadow-lg active:scale-95 after:absolute after:inset-0 after:bg-white/30 after:rounded-lg after:scale-0 active:after:scale-100 after:transition-transform after:duration-300",
        shimmer:
          "bg-slate-900 text-white hover:scale-105 hover:shadow-xl relative before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent hover:before:translate-x-full before:transition-transform before:duration-1000",
        ghost:
          "bg-transparent hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 active:animate-shake-soft",
        neon: "bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] hover:scale-105 active:scale-95 transition-all duration-300",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-md",
        default: "h-10 px-4 py-2",
        lg: "h-12 px-8 text-base rounded-xl",
        icon: "size-10",
      },
      animation: {
        none: "",
        bounce: "hover:animate-bounce-up",
        pulse: "hover:animate-pulse-soft",
        wiggle: "hover:animate-wiggle",
        spin: "hover:animate-spin-normal",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
    },
  }
);

function AnimatedButton({
  className,
  variant,
  size,
  animation,
  asChild = false,
  loading = false,
  disabled,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof animatedButtonVariants> & {
    asChild?: boolean;
    loading?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        animatedButtonVariants({ variant, size, animation, className })
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin-infinite h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>로딩중...</span>
        </>
      ) : (
        children
      )}
    </Comp>
  );
}

export { AnimatedButton, animatedButtonVariants };
