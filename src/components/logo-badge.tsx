/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type LogoBadgeProps = {
  src?: string;
  alt: string;
  className?: string;
};

const baseClassName =
  "size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none";

export default function LogoBadge({ src, alt, className }: LogoBadgeProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        aria-hidden
        className={cn(baseClassName, "bg-muted", className)}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn(baseClassName, className)}
      onError={() => setHasError(true)}
    />
  );
}
