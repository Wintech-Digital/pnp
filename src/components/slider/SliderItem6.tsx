import type { FC } from "react";
import type { ImageMetadata } from "astro";

interface Props {
  text: string;
  pic: any;
  description: string;
}

const SliderItem6: FC<Props> = ({ text, pic, description }) => {
  return (
    <div className={`bg-pnp/[.03] border border-pnp/[.1] h-full w-full mt-12 card-base card-shadow rounded-[24px] sm:rounded-[32px] pt-[82px] px-[24px] text-center relative gradient-green-coner-2 hover:gradient-green-coner-1`}>
      <div className="flex flex-wrap justify-center absolute left-0 top-0 right-0 -mt-12">
        <div
          className={
            "relative bg-pnp-black/[.2] flex w-[100px] h-[100px] rounded-full items-center justify-center before:absolute before:h-[340px] before:w-[340px] before:rounded-full"
          }
        >
          <img 
            src={pic.url}
            width={pic.w}
            height={pic.h}
            alt={pic.alternativeText}
            className="z-10"
          />
        </div>
      </div>

      <div className="text-28-34-700 text-pnp mb-4">
        {text}
      </div>
      <div className="text-16-24-400 text-pnp-grey20">
        {description}
      </div>
    </div>
  );
};

export default SliderItem6;