import type { FC, ReactNode } from "react";
import type { GetImageResult } from "astro";
import ButtonRounded from "@components/buttons/ButtonRounded";

interface Props {
  text: string;
  description: string;
  pic: GetImageResult,
}
const blockFlex = "flex flex-col-reverse items-center md:flex-row";
const blockSizes = "rounded-[24px] px-[16px] py-[16px]";
const blockSizesMd = "md:rounded-[32px] md:px-[20px] md:py-[20px]";
const blockBorder = "border border-pnp/[.1]";
const blockBgTransition = "transition duration-300 ease-in-out";
const blockBg = "bg-pnp/[.05] hover:gradient-green";
const textBlockFlex = "flex flex-col items-start justify-between";

const SliderItem: FC<Props> = ({ ...props }) => {
  return (
    <div className={`w-full h-full`}>
      <div className={`h-full ${blockBgTransition} ${blockBg} ${blockFlex} ${blockSizes} ${blockBorder} ${blockSizesMd}`}>
        <div className={`${textBlockFlex}`}>
          <span className="text-[12px] text-pnp/[.6] font-semibold leading-[20px] mb-[4px]">
            {props.text}
          </span>
          <h4 className="text-[18px] font-semibold leading-[28px]">
            {props.description}
          </h4>
          <ButtonRounded
            size="md"
            color="red"
            title="Obter bônus"
            className="mt-[24px] w-full md:w-auto"
          />
        </div>
        <div
          className="w-full grid justify-items-start mb-[24px] md:justify-items-end md:mb-[0px] h-[172px]">
            <img src={props.pic.src} alt="" />
        </div>
      </div>
    </div>
  )
};

export default SliderItem;
