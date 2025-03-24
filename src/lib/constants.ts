import { StaticImageData } from "next/image";
import MOCK_IMG from "../../public/mock-img.jpg";

export type AppFunctionType = {
  image: StaticImageData;
  shortDescription: string[];
};

export const APP_FUNTIONS: AppFunctionType[] = [
  {
    image: MOCK_IMG,
    shortDescription: ["Build on the idea of the Dunning-Kruger effect"],
  },
  {
    image: MOCK_IMG,
    shortDescription: ["Easy setup to shape your day routines"],
  },
];

export type AppPricingTierType = {
  header: string;
  desc: string;
  functionDesc: string;
  listFunctions: string[];
};

export const APP_PRICING_TIERS: AppPricingTierType[] = [
  {
    header: "Free",
    desc: "Free to try out. No payment includes",
    functionDesc: "Perfect for someone just need basic stuff",
    listFunctions: ["Manage todo-list"],
  },
  {
    header: "Free",
    desc: "Free to try out. No payment includes",
    functionDesc: "Perfect for someone just need basic stuff",
    listFunctions: [
      "Manage todo-list",
      "Manage todo-list",
      "Manage todo-list",
      "Manage todo-list",
      "Manage todo-list",
    ],
  },
  {
    header: "Free",
    desc: "Free to try out. No payment includes",
    functionDesc: "Perfect for someone just need basic stuff",
    listFunctions: [
      "Manage todo-list",
      "Manage todo-list",
      "Manage todo-list",
      "Manage todo-list",
      "Manage todo-list",
    ],
  },
];
