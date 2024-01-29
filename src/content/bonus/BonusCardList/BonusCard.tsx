import ButtonRounded from "@components/buttons/ButtonRounded";

const BonusCard = ({ ...props}) => { 
  return (
    <div className={`${!props.active ? 'grayscale': ''} bg-pnp/[.03] border border-pnp/[.1] shadow-2xl gradient-red rounded-[32px] overflow-hidden flex flex-col justify-between`}>
        <img
          width={props.imageData.w}
          height={props.imageData.h}
          src={props.imageData.url}
          alt={props.imageData.alternativeText}
          className="w-full" 
        />
      <div className="py-4 sm:py-6 px-4 sm:px-8 flex flex-col justify-between h-full">
          <h3 className="text-pnp text-28-34-700">
              {props.text}
          </h3>
          <div>
          <p className='text-pnp-grey20 text-16-24-600'>
            {props.description}
          </p>
          <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-4 mt-4">
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
    </div>
)};

export default BonusCard;
