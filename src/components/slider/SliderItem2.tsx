import ButtonRounded from "@components/buttons/ButtonRounded";

const bg = 'bg-pnp/[.03]';
const border = 'border border-pnp/[.1]';
const shadow = 'shadow-2xl';
const gradient = 'gradient-red';
const rounded = 'rounded-[24px] sm:rounded-[32px]';
// const flex = 'flex flex-col justify-between';
const common = ` ${rounded} ${bg} ${gradient} ${shadow} ${border}`;
const SliderItem2 = ({ ...props}) => { 
  return (
    <div className={`h-full overflow-hidden ${common}`}>
      <a href={props.imageLink}>
        <img
          width="100%"
          height="100%"
          src={props.imageData.url}
          alt={props.imageData.alternativeText || ''}
        />
      </a>
      <div className="py-[24px] px-[24px] h-[250px] sm:h-[180px] flex flex-col justify-between">
          <div className="text-pnp/[.6] text-base font-semibold">
              {props.text}
          </div>
          <div className='text-[28px] font-bold leading-[34px] mb-6'>
            {props.description}
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-4">
            {props.buttons.map((item, index) =>{
              return (
                  <ButtonRounded
                    key={index}
                    size="lg"
                    color={item?.type || 'red'}
                    title={item?.name || ''}
                    link={item?.link || '#'}
                    className="w-auto"
                  />
              )
            })}
          </div>
      </div>
    </div>
)};

export default SliderItem2;
