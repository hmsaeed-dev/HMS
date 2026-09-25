import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "prose" | "wide";
}

export default function Container({
  children,
  size = "default",
  className,
  ...props
}: ContainerProps) {
  const sizeStyles = {
    default: "max-w-[1200px]",
    prose: "max-w-3xl",
    wide: "max-w-[1400px]",
  };

  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
