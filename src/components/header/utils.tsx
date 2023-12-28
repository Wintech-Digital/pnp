import {
  BonusIcon,
  MobileAppIcon,
  SlotsIcon,
  BettingIcon,
  AviatorIcon,
} from "@components/Icons";
import { PageId } from "@constants";

export const getIcon = (id: PageId) => {
  switch (id) {
    case PageId.BET:
      return <BettingIcon className="h-6 w-auto" />;
    case PageId.AVIATOR:
      return <AviatorIcon className="h-6 w-auto" />;
    case PageId.SLOTS:
      return <SlotsIcon className="h-6 w-auto" />;
    case PageId.APP:
      return <MobileAppIcon className="h-6 w-auto" />;
    case PageId.BONUS:
      return <BonusIcon className="h-6 w-auto" />;
    default:
      return;
  }
};

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
