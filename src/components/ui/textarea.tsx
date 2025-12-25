import type * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground bg-background flex field-sizing-content min-h-20 w-full rounded-md border px-3 py-2 text-sm transition-all duration-200 outline-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus:border-ring focus:ring-2 focus:ring-ring/20",
        "hover:border-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20",
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
