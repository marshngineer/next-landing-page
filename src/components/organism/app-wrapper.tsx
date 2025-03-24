import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function AppWrapper({ children, className = "" }: Props) {
  return (
    <div
      className={cn(
        "max-w-[580px] md:max-w-[720px] lg:max-w-[960px] mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
