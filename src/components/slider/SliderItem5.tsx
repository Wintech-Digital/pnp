import type { FC } from "react";
import type { ImageMetadata } from "astro";

interface Props {
  ind?: number;
  text: string;
  pic: ImageMetadata;
  description: string;
}

const SliderItem5: FC<Props> = ({ ...props }) => {
  const { text, pic, description, ind} = props;
  const rounded = 'rounded-[24px] sm:rounded-[32px]';
  const paddings = 'pt-[82px] px-[24px]';
  return (
    <div
      className={`relative w-full h-full mt-[42px] card-base text-center border bg-pnp/[.03] hover:bg-pnp/[.03] hover:gradient-green-coner-1 ${rounded} ${paddings}`}
    >
      <div className={`flex flex-wrap justify-center absolute left-0 top-0 right-0 -mt-12`}>
        <div
          className={`relative bg-pnp-black/[.2] flex w-[100px] h-[100px] rounded-full items-center justify-center before:absolute before:h-[340px] before:w-[340px] before:rounded-full`}
        >
          <img src={pic.src} alt="imagepng." className={"z-10"} />
        </div>
      </div>
      <div className="text-28-34-700 text-pnp mb-4">{text}</div>
      <div className="text-16-24-400 text-pnp-grey20">{description}</div>
    </div>
  );
};

export default SliderItem5;
