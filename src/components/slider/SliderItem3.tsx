import type { FC } from "react";
import type { GetImageResult } from "astro";
import ButtonRounded from "@components/buttons/ButtonRounded";

interface Props {
  pic: GetImageResult;
  text: string;
  description: string;
}

const transition = "transition duration-300 ease-in-out";
const rounded = "rounded-[24px] sm:rounded-[32px]";
const gradient = "hover:gradient-red";
const bg = 'bg-pnp/[.03]';
const customBorder = 'border border-pnp/[.1]';
const flexCol = 'flex flex-col gap-2 sm:gap-4 justify-between';
const textPosition = 'text-center items-center';
const common = `${bg} ${customBorder} ${flexCol} ${textPosition} ${rounded} ${gradient} ${transition}`;
 
const SliderItem3: FC<Props> = ({ text, description, pic }) => (
  <div
    className={`h-full overflow-hidden ${common}`}
  >
    <div className={`w-full h-[200px] bg-no-repeat bg-cover bg-top`} style={{
      backgroundImage: `url('${pic.src}')`
    }}/>
    <div className="text-24-36-600 px-[24px]">
      {text}
    </div>
    <div className="text-16-24-400 px-[24px] text-pnp/[.6]">
      {description}
    </div>
    <ButtonRounded
      size="xl"
      color="red"
      title="Jogue agora"
      className="w-[calc(100%-24px)] mx-[24px] mb-[12px]"
    />
  </div>
);

export default SliderItem3;
