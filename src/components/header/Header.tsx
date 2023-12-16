import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { XMarkIcon, Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ButtonRounded from "@components/buttons/ButtonRounded";
import { Logo } from "@components/Icons";
import { mainNav, slotsList } from "./constants";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header>
      <nav
        className="mx-auto pr-4 sm:pr-0 flex items-center justify-between"
        aria-label="Global"
      >
        <div className="flex flex-row items-center space-x-6">
        <div className="flex pnplg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 text-pnp-red">
            <span className="sr-only">Pin-Up</span>
            <Logo className="fill-pnp-logo h-8 w-auto" />
          </a>
        </div>
        <Popover.Group className="hidden pnplg:flex pnplg:gap-x-[24px]">
          {mainNav.map((item) => {
            const key = item.title.toLowerCase();
            if (item.title === "Slots") {
              return (
                <Popover className="relative" key={key}>
                  <Popover.Button className="flex items-center gap-x-1 text-[16px] font-semibold leading-[24px] text-pnp-grey30 hover:text-pnp">
                    {item.icon}
                    {item.title}
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none text-pnp-grey30"
                      aria-hidden="true"
                    />
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
                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-[24px] bg-[#202726] shadow-lg ring-1 ring-gray-900/5 border border-gray-300/[.5]">
                      <div className="p-4">
                        {slotsList.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 px-4 py-4 rounded-lg hover:bg-[#06BA9F]/[.2]"
                          >
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block text-pnp-grey30 hover:text-pnp"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              );
            }
            return (
              <a
                key={key}
                href={item.url}
                className="pnplg:flex pnplg:gap-x-[12px] text-[16px] font-semibold leading-[24px] text-pnp-grey30 hover:text-pnp"
              >
                {item.icon}
                {item.title}
              </a>
            );
          })}
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
      <Dialog
        as="div"
        className="pnplg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#202726] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Pin-Up</span>
                <Logo className="fill-pnp-logo h-8 w-auto" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-pnp" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {mainNav.map((item) => {
                  const key = item.title.toLowerCase();
                  if (item.title === "Slots") {
                    return (
                      <Disclosure as="div" className="-mx-3" key={key}>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-grey30 hover:text-pnp hover:bg-[#06BA9F]/[.2]">
                              <div className="flex flex-row space-x-2">  
                                  <item.icon2
                                      className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                      aria-hidden="true"
                                  />
                                  <span>{item.title}</span>
                              </div>
                              <ChevronDownIcon
                                className={classNames(
                                  open ? "rotate-180" : "",
                                  "h-5 w-5 flex-none"
                                )}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-2 space-y-2">
                              {[...slotsList].map((item) => (
                                <Disclosure.Button
                                  key={item.name}
                                  as="a"
                                  href={item.href}
                                  className="flex flex-row rounded-lg py-2 pl-[60px] pr-3 text-sm font-semibold leading-7 text-grey30 hover:text-pnp hover:bg-[#06BA9F]/[.2]"
                                >
                                  {item.name}
                                </Disclosure.Button>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    );
                  }
                  return (
                    <a
                      key={key}
                      href={item.url}
                      className="-mx-3 flex flex-row gap-2 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-grey30 hover:text-pnp hover:bg-[#06BA9F]/[.2]"
                    >
                      {item.icon}
                      {item.title}
                    </a>
                  );
                })}
              </div>
              <div className="py-6">
                  <ButtonRounded size="lg" color="green" title="Entrada" className="w-full mb-2" />
                  <ButtonRounded size="lg" color="red" title="Cadastro" className="w-full" />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
