import { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import {
  pagePreferencies,
  navigationMainList,
} from "@constants";

import Logo from "./Logo.tsx";
import ButtonRounded from "@components/buttons/ButtonRounded";
import MobileDialog from "./MobileDialog.tsx";
import {
  NavLink,
} from "./NavLink";
import { getIcon } from "./utils.tsx";
import { endpoints } from "@api/endpoint.ts";
import { fetchApi } from "@api/index.ts";
import Hovered from "./Hovered.tsx";

const Header = ({data}) => {
  const logoLink = data?.logoLink || '#';
  const buttons = data?.buttons || [];
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [nestedMenu, setNestedMenu] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Check if the data is already in local storage
      const storedData = localStorage.getItem('slotsData');
      
      let slotsList = [];
  
      if (storedData) {
        // If data is in local storage, parse it and use that
        slotsList = JSON.parse(storedData);
      } else {
        // Data is not in local storage, fetch it from the API
        const slotsPages = await fetchApi({ endpoint: endpoints.slots });
        slotsList = slotsPages['data'].map(item => item.attributes);
        
        // Store the fetched data in local storage for future use
        localStorage.setItem('slotsData', JSON.stringify(slotsList));
      }
  
      // Set your state with either the fetched data or the data from local storage
      setNestedMenu({
        slots: slotsList,
      });
    }
  
    fetchData();
  }, []);
  

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
                      <Hovered
                        key={id}
                        id={id}
                        name={name}
                        icon={getIcon(id)} menu={nestedMenu}
                      />
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
        logoLink={logoLink}
      />
    </header>
  );
};

export default Header;