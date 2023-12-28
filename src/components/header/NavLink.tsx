import { Disclosure, Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "./utils";

const NavLink = ({ url, name, icon }) => (
  <a
    href={url}
    className="pnplg:flex pnplg:gap-x-[12px] text-[16px] font-semibold leading-[24px] text-pnp-grey30 hover:text-pnp"
  >
    {icon}
    {name}
  </a>
);

const NavButton = ({ icon, name }) => (
  <Popover.Button className="flex items-center gap-x-1 text-[16px] font-semibold leading-[24px] outline-0 text-pnp-grey30 hover:text-pnp">
    {icon}
    {name}
    <ChevronDownIcon
      className="h-5 w-5 flex-none text-pnp-grey30"
      aria-hidden="true"
    />
  </Popover.Button>
);

const MobileNavLink = ({url, name, icon}) => (
  <a
  href={url}
  className="-mx-3 flex flex-row gap-2 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-grey30 hover:text-pnp hover:bg-[#06BA9F]/[.2]"
>
  {icon}
  {name}
</a>

)
const MobileNavButton = ({ isOpen, name, icon }) => (
  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-grey30 hover:text-pnp hover:bg-[#06BA9F]/[.2]">
    <div className="flex flex-row space-x-2 items-center">
      {icon}
      <span>
        {name}
      </span>
      <ChevronDownIcon
        className={classNames(isOpen ? "rotate-180" : "", "h-5 w-5 flex-none")}
        aria-hidden="true"
      />
    </div>
  </Disclosure.Button>
);

export {
  NavLink,
  MobileNavLink,

  NavButton,
  MobileNavButton
};
