import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove, // onMove means if dragging or swiping in progress.
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <button
      onClick={() => onClick()}
      className="absolute top-[40%] right-4 z-50 rounded-full border border-pnp transition-colors ease-in-out duration-300 bg-[#000]/[.2] hover:bg-pnp-green hover:border-pnp-green"
    >
      <ArrowRightIcon className={`h-10 w-10 px-[8px] py-[8px]`} />
    </button>
  );
};
const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove, // onMove means if dragging or swiping in progress.
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <button
      onClick={() => onClick()}
      className="absolute top-[40%] left-4 z-50 rounded-full border border-pnp transition-colors ease-in-out duration-300 bg-[#000]/[.2] hover:bg-pnp-green hover:border-pnp-green"
    >
      <ArrowLeftIcon className={`h-10 w-10 px-[8px] py-[8px]`} />
    </button>
  );
};

export { CustomLeftArrow, CustomRightArrow };
