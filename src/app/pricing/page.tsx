import AppWrapper from "@/components/organism/app-wrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APP_PRICING_TIERS, AppPricingTierType } from "@/lib/constants";

export default function Pricing() {
  return (
    <AppWrapper className="min-h-[500px] h-5/6">
      The product is not yet finish. So it is free right now 😝
      <div className="flex flex-col items-center w-full">
        <p>Pricing plans</p>
        <p>Choose a plan for your usesage</p>

        <div className="flex justify-between w-full gap-4">
          {APP_PRICING_TIERS.map((priceTier, index) => {
            return <PriceCard key={`price-card-${index}`} data={priceTier} />;
          })}
        </div>
      </div>
    </AppWrapper>
  );
}

function PriceCard({ data }: { data: AppPricingTierType }) {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>{data.header}</CardTitle>
        <CardDescription>{data.desc}</CardDescription>
      </CardHeader>

      <CardContent>
        <p>{data.functionDesc}</p>

        {data.listFunctions.map((func, index) => {
          return (
            <CardDescription key={`price-${index}`}>{func}</CardDescription>
          );
        })}
      </CardContent>

      <CardFooter className="justify-center mt-auto">
        <Button>Get GatherHours</Button>
      </CardFooter>
    </Card>
  );
}
