import ButtonRounded from "@components/buttons/ButtonRounded";

const SliderItem2 = ({ ...props}) => { 
  // console.log('SliderItem2 props ::::', props)
  return (
    <div className="bg-pnp/[.03] border border-pnp/[.1] h-full shadow-2xl transition duration-300 ease-in-out gradient-red rounded-[32px] overflow-hidden">
      <a href={props.imageLink}>
        <img
          width={props.imageData.w}
          src={props.imageData.url}
          alt={props.imageData.alternativeText}
          className="w-full" 
        />
      </a>
      <div className="py-[24px] px-[32px] flex flex-col justify-between">
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
                    size="xl"
                    color={item?.type || 'red'}
                    title={item?.name || ''}
                    link={item?.link || '#'}
                    className="w-auto"
                  />
              )
            })}

              {/* <ButtonRounded
                size="xl"
                color="transparent"
                title="Saiba mais"
                link='#'
                className="w-auto"
              /> */}

              {/* <div className='flex flex-row items-center sm:items-start text-pnp/[.6]'>
                  <span>Saiba mais</span>
                  <span>
                    <InformationCircleIcon className="h-6 ml-2"/>
                  </span>
              </div> */}
          </div>
      </div>
    </div>
)};

export default SliderItem2;
