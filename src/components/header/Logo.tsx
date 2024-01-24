import { Logo as LogoIcon } from "@components/Icons";

const Logo = ({link}) => (
  <a href={link} className="-m-1.5 p-1.5">
    <span className="sr-only">Pin-Up</span>
    <LogoIcon className="fill-pnp-logo h-8 w-auto" />
  </a>
);

export default Logo;
