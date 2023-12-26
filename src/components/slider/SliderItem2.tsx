import type { FC } from "react";
import type { GetImageResult } from "astro";
import ButtonRounded from "@components/buttons/ButtonRounded";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

interface Props {
  text: string;
  description: string;
  pic: GetImageResult;
}
const SliderItem2: FC<Props> = ({ text, description, pic}) => (
  <div className="bg-pnp/[.03] border border-pnp/[.1] h-full shadow-2xl transition duration-300 ease-in-out hover:gradient-red rounded-[32px] overflow-hidden">
    <img src={pic.src} alt="" className="w-full" />
    <div className="py-[24px] px-[32px] flex flex-col justify-between">
        <div className="text-pnp/[.6] text-base font-semibold">
            {text}
        </div>
        <div className='text-[28px] font-bold leading-[34px] mb-6'>
          {description}
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-6">
            <ButtonRounded
              size="xl"
              color="red"
              title="Obter bônus"
              className="w-auto"
            />
            <div className='flex flex-row items-center sm:items-start text-pnp/[.6]'>
                <span>Saiba mais</span>
                <span>
                  <InformationCircleIcon className="h-6 ml-2"/>
                </span>
            </div>
        </div>
    </div>
  </div>
);

export default SliderItem2;
