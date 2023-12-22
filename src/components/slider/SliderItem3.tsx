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

const SliderItem3: FC<Props> = ({ text, description, pic }) => (
  <div
    className={`card flex flex-col gap-4 justify-between text-center items-center h-full overflow-hidden ${rounded} ${gradient} ${transition}`}
  >
    <img src={pic.src} alt={text} className="w-full" />
    <div className="text-24-36-600 px-[24px]">{text}</div>
    <div className="text-16-24-400 px-[24px] text-pnp/[.6]">{description}</div>
    <ButtonRounded
      size="xl"
      color="red"
      title="Jogue agora"
      className="w-[calc(100%-24px)] mx-[24px] mb-[12px]"
    />
  </div>
);

export default SliderItem3;
