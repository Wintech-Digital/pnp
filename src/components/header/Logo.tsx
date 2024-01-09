import { PageId, pagePreferencies } from "@constants";
import { Logo as LogoIcon } from "@components/Icons";

const Logo = () => (
  <a href={pagePreferencies[PageId.HOME].url} className="-m-1.5 p-1.5">
    <span className="sr-only">Pin-Up</span>
    <LogoIcon className="fill-pnp-logo h-8 w-auto" />
  </a>
);

export default Logo;
