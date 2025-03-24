import { LightSwitch } from "../light-switch";
import AppWrapper from "./app-wrapper";
import { AppNavigation } from "./navigation";

export default function Header() {
  return (
    <AppWrapper>
      <div className="flex justify-between items-center py-3">
        <p className="font-semibold">GatherHours</p>

        <div className="flex gap-2">
          <AppNavigation />

          <LightSwitch />
        </div>
      </div>
    </AppWrapper>
  );
}
