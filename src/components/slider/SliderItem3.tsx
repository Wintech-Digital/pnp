import ButtonRounded from "@components/buttons/ButtonRounded";

const transition = "transition duration-300 ease-in-out";
const rounded = "rounded-[24px] sm:rounded-[32px]";
const gradient = "hover:gradient-red";
const bg = 'bg-pnp/[.03]';
const customBorder = 'border border-pnp/[.1]';
const flexCol = 'flex flex-col gap-2 sm:gap-4 justify-between';
const textPosition = 'text-center items-center';
const common = `${bg} ${customBorder} ${flexCol} ${textPosition} ${rounded} ${gradient} ${transition}`;
 
const SliderItem3 = ({ text, description, pic, link = '#', ...props }) => {
  return (
    <div
      className={`h-full overflow-hidden ${common}`}
    >
      <div className="w-full grid justify-items-start mb-[24px] md:justify-items-center md:mb-[0px] max-h-[240px]">
        <img
          src={pic?.url}
          width={pic?.w}
          height={pic?.h}
          alt={pic?.alternativeText || ''}
          className="w-full"
        /> 
      </div> 
      <div className="text-24-36-600 px-[24px]">
        123 {text}
      </div>
      <div className="text-16-24-400 px-[24px] text-pnp/[.6]">
        {description}
      </div>
      <ButtonRounded
        size="xl"
        color="red"
        title={ props?.buttonName || "Jogue agora"}
        link={ link }
        className="w-[calc(100%-24px)] mx-[24px] mb-[12px]"
      />
    </div>
  )
};

export default SliderItem3;
