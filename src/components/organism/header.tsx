import Link from "next/link";
import { LightSwitch } from "../light-switch";
import AppWrapper from "./app-wrapper";
import { AppNavigation } from "./navigation";

export default function Header() {
  return (
    <AppWrapper>
      <div className="flex justify-between items-center py-3">
        <Link href={"/"} className="font-semibold hover:cursor-pointer">
          GatherHours
        </Link>

        <div className="flex gap-2">
          <AppNavigation />

          <LightSwitch />
        </div>
      </div>
    </AppWrapper>
  );
}
