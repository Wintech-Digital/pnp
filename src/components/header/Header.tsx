import { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import {
  pagePreferencies,
  navigationMainList,
} from "@constants";

import Logo from "./Logo.tsx";
import NavDropDown from "./NavDropDown.tsx";
import ButtonRounded from "@components/buttons/ButtonRounded";
import MobileDialog from "./MobileDialog.tsx";
import {
  NavLink,
  NavButton,
} from "./NavLink";
import { getIcon } from "./utils.tsx";
import { endpoints } from "@api/endpoint.ts";
import { fetchApi } from "@api/index.ts";

const Header = ({data}) => {
  const logoLink = data?.logoLink || '#';
  const buttons = data?.buttons || [];
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [nestedMenu, setNestedMenu] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const slotsPages = await fetchApi({ endpoint: endpoints.slots });
      const slotsList = slotsPages['data'].map(item => item.attributes);
      setNestedMenu({
        slots: slotsList,
      });
    }
    fetchData();
  },[]);

  return (
    <header>
      <nav
        className="mx-auto flex items-center justify-between"
        aria-label="Global"
      >
        <div className="flex flex-row items-center space-x-6">
          <div className="flex pnplg:flex-1">
            <Logo
              link={logoLink}
            />
          </div>

          <Popover.Group className="hidden pnplg:flex pnplg:gap-x-[24px]">
            <>
              {navigationMainList.map((item) => {
                const { id, url, name } = pagePreferencies[item];
                if(nestedMenu){
                  const menuList = Object.keys(nestedMenu);
                  if(menuList.includes(id)){
                    return (
                        <NavDropDown key={id} id={id} menu={nestedMenu}>
                          <NavButton name={name} icon={getIcon(id)} />
                        </NavDropDown>
                    )
                  }
                }
                return (
                  <NavLink key={id} url={url} name={name} icon={getIcon(id)} />
                );
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
            <Bars3BottomLeftIcon className="h-6 w-6"/>
          </button>
        </div>

        <div className="hidden ml-4 pnplg:flex pnplg:flex-1 pnplg:justify-end pnplg:space-x-[16px]">
          {!!buttons.length &&
            buttons.map((item, index) => {
              return (
                <ButtonRounded
                  key={index}
                  size="lg"
                  link={item?.link || '#'}
                  color={item?.type || 'red'}
                  title={item?.name || ''}
                />
              )
            })
          }
        </div>
      </nav>

      {/***
       *  Mobile Menu
       * ***/}

      <MobileDialog
        isOpen={mobileMenuOpen}
        handlerToggle={setMobileMenuOpen}
        nestedMenu={nestedMenu}
      />
    </header>
  );
};

export default Header;