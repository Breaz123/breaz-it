import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-16 md:py-24 lg:py-32", className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

