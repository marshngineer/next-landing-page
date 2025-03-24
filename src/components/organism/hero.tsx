import { Download } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="text-5xl font-semibold min-h-5/6 content-center items-center">
      <p className="text-center py-8">
        Working with all productivity rule on your side. Meet{" "}
        <span className="text-amber-500 underline">GatherHours</span>
      </p>
      <div className="w-full text-center">
        <Button>
          Get MacOS App
          <Download />
        </Button>
      </div>
    </div>
  );
}
