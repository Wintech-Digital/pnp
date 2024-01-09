import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const ButtonSliderHidden = () => (
  <>
    <div className="rounded-full h-[43px] w-[43px] border border-pnp/[.1] absolute -top-[70px] right-0">
      <ArrowRightIcon className="px-[8px] py-[8px] text-pnp/[.1]" />
    </div>
    <div className="rounded-full h-[43px] w-[43px] border border-pnp/[.1] absolute -top-[70px] right-16">
      <ArrowLeftIcon className="px-[8px] py-[8px] text-pnp/[.1]" />
    </div>
  </>
);
export default ButtonSliderHidden;
