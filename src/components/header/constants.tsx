import {
  BonusIcon,
  MobileAppIcon,
  SlotsIcon,
  BettingIcon,
  AviatorIcon,
} from "@components/Icons";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";


export const mainNav = [
  {
    title: "Betting",
    icon: <BettingIcon className="h-6 w-auto" />,
    url: "/apostas",
  },
  {
    title: "Aviator",
    icon: <AviatorIcon className="h-6 w-auto" />,
    url: "/aviator",
  },
  {
    title: "Slots",
    icon: <SlotsIcon className="h-6 w-auto" />,
    icon2: SlotsIcon,
    url: "/slots",
  },
  {
    title: "Mobile App",
    icon: <MobileAppIcon className="h-6 w-auto" />,
    url: "/mobile-app",
  },
  {
    title: "Bonus",
    icon: <BonusIcon className="h-6 w-auto" />,
    url: "/",
  },
];

export const slotsList = [
  {
    name: "Hell Hot",
    description: "Shot description of Hell-Hot if needed.",
    href: "/slots/hell-hot",
    icon: ChartPieIcon,
  },
  {
    name: "Demi Gods II",
    description: "Demi Gods II description.",
    href: "/slots/demi-gods-II",
    icon: ChartPieIcon,
  },
  {
    name: "Gates of Olympus",
    description: "Gates of Olympus description.",
    href: "/slots/gates-of-olympus",
    icon: ChartPieIcon,
  },
  {
    name: "Leprechaun Riches",
    description: "Leprechaun Riches description if needed.",
    href: "/slots/leprechaun-riches",
    icon: ChartPieIcon,
  },
  {
    name: "Majestic King",
    description: "Majestic King description.",
    href: "/slots/majestic-king",
    icon: ChartPieIcon,
  },
  {
    name: "Wolf Strike",
    description: "Wolf Strike descriptionif needed.",
    href: "/slots/wolf-strike",
    icon: ChartPieIcon,
  },
  {
    name: "Hot Fruits",
    description: "Hot Fruits description if needed.",
    href: "/slots/hot-fruits",
    icon: ChartPieIcon,
  },
  {
    name: "9 coins",
    description: "Shot description of 9 coins if needed.",
    href: "/slots/9-coins",
    icon: ChartPieIcon,
  },
];


export const slotsNav = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "/",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
export const navigationMap = [
  {
    title: "Betting",
    icon: "betting.svg",
    url: "/apostas",
  },
  { 
    title: "Aviator", 
    icon: "aviator.svg", 
    url: "/aviator" 
  },
  {
    title: "Slots",
    icon: "slots.svg",
    url: "/slots",
    navigation: slotsNav,
  },
  { 
    title: "Mobile App", 
    icon: "mobile.svg", 
    url: "/mobile-app" },
  { 
    title: "Bonus", 
    icon: "bonus.svg", 
    url: "/" 
  },
];
