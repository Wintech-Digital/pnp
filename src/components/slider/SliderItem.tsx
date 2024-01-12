import { type FC, useState, useEffect } from "react";
// import { getImage } from 'astro:assets';
import ButtonRounded from "@components/buttons/ButtonRounded";
// const convert = async (url) => await getImage({ src: url, width: 144, height: 172 });

interface Props {
  text: string;
  description: string;
  pic: any;
  ext: string;
  children: any;
}

const blockFlex = "flex gap-2 items-center flex-col-reverse md:flex-row";
const blockSizes = "rounded-[24px] md:rounded-[32px]";
const blockSizesMd = "px-4 py-4 md:px-[20px] md:py-4";
const blockBorder = "border border-pnp/[.1]";
const blockBgTransition = "transition duration-300 ease-in-out";
const blockBg = "bg-pnp/[.05] gradient-green";
const textBlockFlex = "flex flex-col items-start justify-between";
const SliderItem: FC<Props> = ({ ...props }) => {
  return (
    <div className={`w-full h-full`}>
      <div className={`h-full ${blockBgTransition} ${blockBg} ${blockFlex} ${blockSizes} ${blockBorder} ${blockSizesMd}`}>
        <div className={`${textBlockFlex} w-full sm:w-1/2`}>
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
        <div className="h-[172px] w-full sm:w-1/2 grid content-center justify-items-start md:justify-items-end mb-[24px] md:mb-[0px]">
            <img src={props.pic} alt=""/>
        </div> 
      </div>
    </div>
  )
};

export default SliderItem;
