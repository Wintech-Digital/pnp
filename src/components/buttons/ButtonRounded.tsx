const sizes = {
  empty: '',
  xs: "text-[12px] px-[13px] py-[7px]",
  sm: "text-[14px] px-[15px] py-[9px]",
  md: "text-[14px] px-[16px] py-[9px]",
  lg: "text-[16px] px-[21px] py-[9px]",
  xl: "text-[16px] px-[24px] py-[16px]",
};

const btnColors = {
  red: "bg-pnp-dark-red hover:bg-pnp-red active:ring-pnp-red",
  green: "bg-pnp-dark-green hover:bg-pnp-green active:ring-pnp-green",
  transparent: "bg-pnp/[.05] hover:bg-pnp/[.20] active:ring-pnp-white",
  info: "bg-pnp/[.03] hover:bg-pnp/[.10] active:ring-pnp-white",
};
const classN = ({ color, size = '', className }) => {
  const btnBg = `${btnColors[color]}`;
  const sizeClasses = `${sizes[size]}`;
  const colorClasses = `${sizeClasses} ${btnBg}`;

  return `transition-colors ease-in-out duration-300 text-center cursor-pointer rounded-full active:ring-2 active:ring-offset-2 ${sizeClasses} ${colorClasses} ${className}`;
};

type Sizes = "xs" | "sm" | "md" | "lg" | "xl";
type Colors = "transparent" | "red" | "green" | 'info';

interface Props {
  link?: string;
  size: Sizes;
  color: Colors;
  title: string;
  details?: string;
  className?: string;
  children?: React.ReactNode;
}

const _DEFAULT = 'https://try.pi1pur.com/C3wx7K';
const getLink = (param) => {
  if(param && param !== '#'){
    return param;
  }
  return _DEFAULT;
}

const ButtonRounded = ({ ...props }: Props) => {
  const { size, color, title, details, className, ...rest } = props;
  if(rest.link){
    if(color === 'info'){
      return(
        <a
          href={getLink(rest.link)}
          rel="nofollow"
          className={`${classN({ size: 'empty', color, className })} inline-flex flex-col justify-center border border-pnp/[.1] px-6 pb-2 sm:py-0 my-0`}
        >
            <span className="text-pnp-grey20 text-14-24-600 text-nowrap">{title}</span>
            { details && 
              <span className="text-pnp text-24-24-700 text-nowrap">{details}</span>
            }
            {rest?.children &&
              <span className="text-pnp">{rest?.children}</span>
            }
        </a>
      )
    }
    return (
      <a
        href={getLink(rest.link)}
        rel="nofollow"
        className={classN({ size, color, className })}
      >
        <span className="text-pnp text-nowrap">{title}</span>
        { details && 
          <span className="text-pnp text-24-36-700">{details}</span>
        }
        {rest?.children &&
          <span className="text-pnp">{rest?.children}</span>
        }
      </a>
    )
  }
  return (
    <a
      className={classN({ size, color, className })}
      href={getLink(rest.link)}
      rel="nofollow"
    >

      <span className="text-pnp text-nowrap">{title}</span>
      {rest?.children && <span className="text-pnp">{rest?.children}</span>}
    </a>
  );
};

export default ButtonRounded;