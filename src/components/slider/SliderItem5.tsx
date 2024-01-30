import type { FC } from "react";

interface Props {
  ind?: number;
  text: string;
  pic: any;
  description: string;
  alt?: string
  title?: string
}

const SliderItem5: FC<Props> = ({ ...props }) => {
  const { text, pic, description} = props;
  const rounded = 'rounded-[24px] sm:rounded-[32px]';
  const paddings = 'pt-[82px] px-[24px]';

  const picUrl = pic.src ? pic.src: pic;
  const picW = pic.src ? pic.attributes.width : '100%';
  const picH = pic.src ? pic.attributes.height : '100%';

  return (
    <div
      className={`relative w-full h-full mt-[42px] card-base text-center border bg-pnp/[.03] hover:bg-pnp/[.03] hover:gradient-green-coner-1 ${rounded} ${paddings}`}
    >
      <div className={`flex flex-wrap justify-center absolute left-0 top-0 right-0 -mt-12`}>
        <div
          className={`relative bg-pnp-black/[.2] flex w-[100px] h-[100px] rounded-full items-center justify-center before:absolute before:h-[340px] before:w-[340px] before:rounded-full`}
        >
          <img
            src={picUrl}
            width={picW}
            height={picH}
            alt={props?.alt || ''}
            title={props?.title || ''}
            className={"z-10"}
          />
        </div>
      </div>
      <div className="text-28-34-700 text-pnp mb-4">{text}</div>
      <div className="text-16-24-400 text-pnp-grey20">{description}</div>
    </div>
  );
};

export default SliderItem5;
