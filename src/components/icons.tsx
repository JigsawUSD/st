import { UtensilsCrossed } from "lucide-react";
import type { HTMLAttributes } from "react";

export const BabyBitesLogo = (props: HTMLAttributes<HTMLDivElement>) => (
  <div className="flex items-center gap-2" {...props}>
    <div className="bg-primary/20 p-2 rounded-full">
       <UtensilsCrossed className="h-6 w-6 text-primary" />
    </div>
    <span className="font-headline text-2xl font-bold text-foreground/90">
      Baby Bites Hub
    </span>
  </div>
);
