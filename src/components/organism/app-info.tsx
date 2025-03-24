import { APP_FUNTIONS, AppFunctionType } from "@/lib/constants";
import Image from "next/image";

const info_key = "app-info";

export default function AppInfo() {
  return (
    <div className="text-3xl text-center">
      <h2 className="font-semibold py-8">What does GatherHours do?</h2>

      <div className="mx-auto">
        {APP_FUNTIONS.map((appFunction, index) => {
          return <InfoRow key={`${info_key}-${index}`} data={appFunction} />;
        })}
      </div>
    </div>
  );
}

function InfoRow({ data }: { data: AppFunctionType }) {
  return (
    <div className="flex items-center justify-center gap-10 mb-10">
      <Image
        height={300}
        width={300}
        src={data.image}
        alt="preview"
        className="rounded-xl max-w-[300px] flex-1"
      />

      <div className="block flex-1">
        {data.shortDescription.map((desc, index) => {
          return (
            <span
              key={`${info_key}-span-${index}`}
              className="text-xl font-semibold"
            >
              {desc}
            </span>
          );
        })}
      </div>
    </div>
  );
}
