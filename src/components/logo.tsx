import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="text-xl font-bold tracking-tight text-foreground/80">
        CORPO TT Services
      </span>
      <div className="flex flex-col gap-0.5" aria-hidden="true">
        <div className="flex gap-0.5">
            <div className="h-3 w-3 rounded-sm bg-[#8d9fce]" />
            <div className="h-3 w-3 rounded-sm bg-[#1e429f]" />
        </div>
        <div className="flex gap-0.5">
            <div className="h-3 w-3 rounded-sm bg-[#1e429f]" />
            <div className="h-3 w-3 rounded-sm bg-[#8d9fce]" />
        </div>
      </div>
      <div className="flex items-center gap-1.5" aria-hidden="true">
      </div>
      <span className="sr-only">
        CORPO TT Services
      </span>
    </div>
  );
}
