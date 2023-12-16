import type { FC } from "react";
import type { GetImageResult } from "astro";
import ButtonRounded from "@components/buttons/ButtonRounded";

interface Props {
  pic: GetImageResult;
  name: string;
  description: string;
}

const transition = 'transition duration-300 ease-in-out';
const rounded = 'rounded-[24px] sm:rounded-[32px]';
const widthHeight = 'min-w-[323px] w-[323px] sm:min-w-[433px] sm:w-[433px]';
const gradient = 'hover:gradient-red';
const SliderItem3: FC<Props> = ({ name, description, pic}) => (
  <div className={`card shadow-2xl overflow-hidden ${widthHeight} ${rounded} ${gradient} ${transition}`}>
    <div
        className="w-[433px] h-[240px]" 
        style={{
            backgroundImage: `url('${pic.src}')`, 
        }}
    />
    <div className="flex flex-col gap-4 justify-between items-center text-center px-[24px] py-[32px]">
        <div className="text-24-36-600">
            {name}
        </div>
        <div className='text-16-24-400 text-pnp/[.6]'>
          {description}
        </div>
        <ButtonRounded
          size="xl"
          color="red"
          title="Jogue agora"
          className="w-full"
        />
    </div>
  </div>
);

export default SliderItem3;
