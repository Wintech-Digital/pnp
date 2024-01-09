import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { navigationWithNestedList } from "@constants";
import NavDropDownList from "./NavDropDownList";

const NavDropDown = ({children, id}) => {
    const nestedList = navigationWithNestedList[id];
    return (
        <Popover className="relative">
            {children}
            <Transition
                as={Fragment}
                enter="transition ease-out duration-75"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
            <Popover.Panel className="absolute -left-8 top-full z-[1001] mt-3 w-screen max-w-md overflow-hidden rounded-[24px] bg-[#202726]/[.97] shadow-lg ring-1 ring-gray-900/5 border border-pnp/[.1]">
                <NavDropDownList
                    nestedList={nestedList}
                />
            </Popover.Panel>
            </Transition>
      </Popover>
)
}

export default NavDropDown;