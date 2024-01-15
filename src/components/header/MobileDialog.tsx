import ButtonRounded from "@components/buttons/ButtonRounded";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { getIcon } from "./utils";
import {
  navigationMainList,
  navigationWithNestedList,
  pagePreferencies,
} from "@constants";
import { MobileNavButton, MobileNavLink } from "./NavLink";
import Logo from "./Logo";
import { Fragment } from "react";

const MobileDialog = ({ isOpen, handlerToggle, nestedMenu }) => {
  return (

    <Transition appear show={isOpen} as={Fragment}>

    <Dialog
      as="div"
      className="pnplg:hidden"
      open={isOpen}
      onClose={handlerToggle}
    >
          <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
      <Dialog.Panel className="fixed inset-y-0 right-0 z-[999] w-full overflow-y-auto bg-[#202726] px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => handlerToggle(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6 text-pnp" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 flow-root">
          <div className="-my-9 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigationMainList.map((item) => {
                const { id, url, name } = pagePreferencies[item];
                if(nestedMenu){
                  const menuList = Object.keys(nestedMenu);
                  if(menuList.includes(id)){
                    return (
                      <Disclosure key={id} as="div" className="-mx-3">

                      {({ open }) => (
                        <>
                          <MobileNavButton
                            isOpen={open}
                            name={name}
                            icon={getIcon(id)}
                          />

                          <Disclosure.Panel className="mt-2 space-y-2">
                            {nestedMenu[id].map((i) => {
                              return (
                                <Disclosure.Button
                                  key={i.slug}
                                  as="a"
                                  href={`/${id}/${i.slug}`}
                                  className="flex flex-row rounded-lg py-2 pl-[60px] pr-3 text-sm font-semibold leading-7 text-grey30 hover:text-pnp hover:bg-[#06BA9F]/[.2]"
                                >
                                  {i.name}
                                </Disclosure.Button>
                              );
                            })}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                      )
                  }
                }
                return (
                  <MobileNavLink
                    key={id}
                    url={url}
                    name={name}
                    icon={getIcon(id)}
                  />
                );
              })}
            </div>

            <div className="py-6">
              <ButtonRounded
                size="lg"
                color="green"
                title="Entrada"
                className="w-full mb-2"
              />
              <ButtonRounded
                size="lg"
                color="red"
                title="Cadastro"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </Dialog.Panel>

      </Transition.Child>

    </Dialog>

    </Transition>
  );
};

export default MobileDialog;
