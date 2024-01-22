import type { FC } from "react";

interface Props {
  ind: number;
  pic: any;
  text: string;
  description: string;
}

const brd = 'border border-pnp/[.1] bg-pnp/[.05]'
const transition = 'transition duration-300 ease-in-out';
const rounded = 'rounded-[24px] sm:rounded-[30px]';
const gradient = 'hover:gradient-red';
const paddings = 'px-[16px] py-[16px] sm:px-[16px] sm:py-[16px]';
const flexCol = 'flex flex-col gap-4'

const SliderItem4: FC<Props> = ({ind,pic,text, description}) => {
  return (
    <div className={`shadow w-full h-full relative ${brd} ${rounded} ${paddings}  ${gradient} ${transition} ${flexCol}`}>
        <div className="bg-pnp-dark-green absolute top-2 left-2 h-[50px] w-[50px] rounded-full flex items-center justify-center px-[11px] py-[10px]">
          <span className="text-16-24-600">
            0{ind+1}
          </span>
        </div>
        <img
          width={pic.w}
          height={pic.h}
          src={pic.url}
          alt={pic.alternativeText}
          loading="lazy"
          className="pointer-events-none object-cover h-[170px] w-full flex-shrink-0 rounded-[16px]"
        />
        <h3 className="text-pnp text-18-28-600">
          {text}
        </h3>
        <p className="text-16-28-400 text-pnp-grey20">
          {description}
        </p>
    </div>
  )
};

export default SliderItem4;
