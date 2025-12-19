import { UtensilsCrossed } from "lucide-react";
import type { HTMLAttributes } from "react";

export const BabyBitesLogo = (props: HTMLAttributes<HTMLDivElement>) => (
  <div className="flex items-center gap-3" {...props}>
    <div className="bg-primary/10 p-2 rounded-lg">
       <UtensilsCrossed className="h-6 w-6 text-primary" />
    </div>
    <span className="text-2xl font-bold text-foreground">
      Baby Bites Hub
    </span>
  </div>
);
