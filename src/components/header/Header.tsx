import { useState } from "react";
import { Popover } from "@headlessui/react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import ButtonRounded from "@components/buttons/ButtonRounded";

import { navigationMainList, navigationWithNestedList, pagePreferencies } from "@constants";
import { getIcon } from "./utils.tsx";
import { NavLink, NavButton } from "./NavLink";
import NavDropDown from "./NavDropDown.tsx";
import MobileDialog from "./MobileDialog.tsx";
import Logo from "./Logo.tsx";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  return (
    <header>
      <nav
        className="mx-auto flex items-center justify-between"
        aria-label="Global"
      >
        <div className="flex flex-row items-center space-x-6">
          <div className="flex pnplg:flex-1">
            <Logo/>
          </div>

          <Popover.Group className="hidden pnplg:flex pnplg:gap-x-[24px]">
            <>
            {/* {({ open }) => (
              <div>Popover.Group: {open ? 'Open' : 'Not Open'}</div>
            )} */}
            {navigationMainList.map(item => {
              const {id, url, name} = pagePreferencies[item];
              if(navigationWithNestedList.hasOwnProperty(item)){
                return (
                  <NavDropDown
                    key={item}
                    id={item} 
                  >
                    <NavButton
                      name={name}
                      icon={getIcon(id)}
                    />
                  </NavDropDown>
                )
              }
              return (
                <NavLink
                  key={id}
                  url={url}
                  name={name}
                  icon={getIcon(id)}
                />
              )
            })}
            </>
          </Popover.Group>
        </div>

        <div className="flex pnplg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-pnp"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden ml-4 pnplg:flex pnplg:flex-1 pnplg:justify-end pnplg:space-x-[16px]">
          <ButtonRounded size="lg" color="green" title="Entrada" />
          <ButtonRounded size="lg" color="red" title="Cadastro" />
        </div>
      </nav>

      {/***
       *  Mobile Menu
       * ***/}

      <MobileDialog
        isOpen = {mobileMenuOpen}
        handlerToggle = {setMobileMenuOpen}
      /> 
    </header>
  );
};

export default Header;
