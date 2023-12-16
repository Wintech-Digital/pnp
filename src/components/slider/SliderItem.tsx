import type { FC, ReactNode } from "react";
import ButtonRounded from "@components/buttons/ButtonRounded";

interface Props {
  text: string;
  description: string;
  children: ReactNode;
}
/** 
 * bg-gradient-radial from-yellow-400 to-gray-9000
*/
const wrap = "min-w-[323px] w-[300px]";
const wrapMd = "md:w-[433px] md:h-[212px]";
const blockFlex = "flex flex-col-reverse items-center md:flex-row";
const blockSizes = "rounded-[24px] px-[16px] py-[16px]";
const blockSizesMd = "md:rounded-[32px] md:px-[20px] md:py-[20px]";
const blockBorder = "border border-pnp/[.1]";
const blockBgTransition = "transition duration-300 ease-in-out";
const blockBg = "bg-pnp/[.05] hover:gradient-green";
const textBlockFlex = "flex flex-col items-start justify-between";

const SliderItem: FC<Props> = ({ children, ...props }) => (
  <div className={`${wrap} ${wrapMd}`}>
    <div
      className={`${blockBgTransition} ${blockBg} ${blockFlex} ${blockSizes} ${blockBorder} ${blockSizesMd}`}
    >
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
      <div className="grid w-full justify-items-start mb-[24px] md:justify-items-end md:mb-[0px]">
        {children}
      </div>
    </div>
  </div>
);

export default SliderItem;
