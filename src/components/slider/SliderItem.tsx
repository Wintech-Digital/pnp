import { type FC, useState, useEffect } from "react";
import { getImage } from 'astro:assets';
import ButtonRounded from "@components/buttons/ButtonRounded";
const convert = async (url) => await getImage({ src: url, width: 144, height: 172 });

interface Props {
  text: string;
  description: string;
  pic: string,
  ext: string
}
const blockFlex = "flex flex-col-reverse items-center md:flex-row";
const blockSizes = "rounded-[24px] px-[16px] py-[16px]";
const blockSizesMd = "md:rounded-[32px] md:px-[20px] md:py-[20px]";
const blockBorder = "border border-pnp/[.1]";
const blockBgTransition = "transition duration-300 ease-in-out";
const blockBg = "bg-pnp/[.05] hover:gradient-green";
const textBlockFlex = "flex flex-col items-start justify-between";

const SliderItem: FC<Props> = ({ ...props }) => {
  const [pic, setPic] = useState('');
  useEffect(()=>{
    if(props.ext === '.png'){
      convert(props.pic).then(p=> setPic(p.src))
    }
    setPic(props.pic);
  },[props.pic, props.ext])
  console.log('pic', pic)
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
            {pic &&
              <img src={pic} width='144' height='172' alt="" />
            }
            {/* <img src={props.pic} width='144' height='172' alt="" /> */}
        </div>
      </div>
    </div>
  )
};

export default SliderItem;
