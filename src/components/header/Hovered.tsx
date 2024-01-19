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
      url: `/${id}/${item.slug}`,
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

                  {/* <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                            <item.icon aria-hidden="true" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="p-4 bg-gray-50">
                      <a
                        href="##"
                        className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <span className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">
                            Documentation
                          </span>
                        </span>
                        <span className="block text-sm text-gray-500">
                          Start integrating products and tools
                        </span>
                      </a>
                    </div> */}
                </div>
              </Popover.Panel>
            </Transition>
          </div>
        );
      }}
    </Popover>
  );
};

function IconOne() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z" stroke="#FB923C" strokeWidth="2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}

export default Hovered;
