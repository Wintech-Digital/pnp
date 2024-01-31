import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useRef } from 'react';
import NavDropDownList from './NavDropDownList';
import { pagePreferencies } from '@constants';

const Hovered = ({ id, menu, name, icon }) => {
  const ITEM_URL = pagePreferencies[id]?.url || "/";
  const buttonRef = useRef(null);
  const timeoutDuration = 100;
  let timeout: string | number | NodeJS.Timeout;

  const listData = menu[id].map((item) => {
    return {
      slug: item.slug,
      url: `/${id}/${item.slug}/`,
      name: item.name,
    };
  });

  const closePopover = () => {
    return buttonRef.current?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      })
    );
  };

  const onMouseEnter = (open) => {
    clearTimeout(timeout);
    if (open) return;
    return buttonRef.current?.click();
  };
  const onMouseLeave = (open) => {
    if (!open) return;
    timeout = setTimeout(() => closePopover(), timeoutDuration);
  };
  const handletClick = (ev) => {
    ev.preventDefault();
    window.location.href = `${window.location.origin}${ITEM_URL}`;
  };

  return (
    <Popover className="relative">
      {({ open }) => {
        return (
          <div onMouseLeave={onMouseLeave.bind(null, open)}>
            <Popover.Button
              ref={buttonRef}
              as="a"
              href={ITEM_URL}
              className={`
                  ${open ? 'text-pnp' : 'text-pnp-grey20 hover:text-pnp'}
                  focus:outline-none
                  `}
              onMouseEnter={onMouseEnter.bind(null, open)}
              onMouseLeave={onMouseLeave.bind(null, open)}
            >
              <div onClick={handletClick} className="inline-flex items-center gap-3">
                {icon && icon}
                <span>{name}</span>
                <ChevronDownIcon
                  className={`${open ? '' : 'text-opacity-70'}
                    h-6 w-6 text-pnp group-hover:text-opacity-80 transition ease-in-out duration-150`}
                  aria-hidden="true"
                />
              </div>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-[1001] w-screen max-w-[250px] overflow-hidden transform -translate-x-1/2 left-1/2 rounded-[24px] bg-[#202726]/[.97] shadow-lg ring-1 ring-gray-900/5 border border-pnp/[.1] ">
                <div
                  className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                  onMouseEnter={onMouseEnter.bind(null, open)}
                  onMouseLeave={onMouseLeave.bind(null, open)}
                >
                  <NavDropDownList nestedList={listData} />
                </div>
              </Popover.Panel>
            </Transition>
          </div>
        );
      }}
    </Popover>
  );
};


export default Hovered;
