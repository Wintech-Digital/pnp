import type { FC } from "react";

interface Props {
  text: string;
  link: string;
  pic: string;
  alt: string;
}

const SliderItem8: FC<Props> = ({ text, link, pic, alt }) => {
  return (
    <a href={link} className={`h-full w-full flex flex-col `}>
      <div className='relative rounded-[24px] overflow-hidden w-full border border-pnp/[.2]'>
        <img src={pic} alt={alt} className="h-full w-full" />
        <div className="rounded-[24px] absolute top-0 bottom-0 w-full transition-all duration-200 ease-in-out gr-red-green-coner-1 opacity-0 hover:opacity-100"/>
      </div>
      <div className="text-16-24-600 text-pnp mt-4 mb-2">
        {text}
      </div>
    </a>
  );
};

export default SliderItem8;
