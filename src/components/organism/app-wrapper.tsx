import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AppWrapper({ children }: Props) {
  return <div className="mx-auto max-w-[1280px]">{children}</div>;
}
