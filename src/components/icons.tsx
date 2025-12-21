import { UtensilsCrossed } from "lucide-react";
import type { HTMLAttributes } from "react";

export const BabyBitesLogo = (props: HTMLAttributes<HTMLDivElement>) => (
  <div className="flex items-center gap-3" {...props}>
    <div className="bg-primary/10 p-2 rounded-lg">
       <UtensilsCrossed className="h-7 w-7 text-primary" />
    </div>
    <span className="text-2xl font-bold text-foreground">
      Crescendo Saudável
    </span>
  </div>
);
