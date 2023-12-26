import type { FC } from "react";
import type { ImageMetadata } from "astro";

interface Props {
  text: string;
  pic: ImageMetadata;
  description: string;
}

const SliderItem5: FC<Props> = ({ ...props }) => {
  const { text, pic, description} = props;
  const rounded = 'rounded-[24px] sm:rounded-[32px]';
  const paddings = 'py-[24px] px-[24px]';
  const flexBox = 'flex flex-col gap-2';
  return (
    <div
      className={`relative w-full h-full ${flexBox} card-base text-center border bg-pnp/[.03] hover:gradient-green-coner-1 ${rounded} ${paddings}`}
    >

      <img src={pic.src} alt="imagepng." className={""} />
      <div className="text-28-34-700 text-pnp mb-4">{text}</div>
      <div className="text-16-24-400 text-pnp-grey20">{description}</div>
    </div>
  );
};

export default SliderItem5;
