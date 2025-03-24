import AppInfo from "@/components/organism/app-info";
import AppWrapper from "@/components/organism/app-wrapper";
import Hero from "@/components/organism/hero";

export default function Home() {
  return (
    <AppWrapper className="min-h-[500px] h-5/6">
      <Hero />

      <AppInfo />
    </AppWrapper>
  );
}
