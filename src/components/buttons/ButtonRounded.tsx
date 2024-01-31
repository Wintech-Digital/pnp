import React from 'react';

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

const classN = ({ color, size = '', className = '' }) => {
  const btnBg = `${btnColors[color]}`;
  const sizeClasses = `${sizes[size]}`;
  const colorClasses = `${sizeClasses} ${btnBg}`;

  return `transition-colors ease-in-out duration-300 text-center cursor-pointer rounded-full active:ring-2 active:ring-offset-2 ${colorClasses} ${className}`;
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

const getLink = (param) => {
  if(param && param !== '#'){
    return param;
  }
}

const ButtonRounded = (props: Props) => {
  const { size, color, title, details, className = '', link, children } = props;
  
  // Make sure the link is retrieved safely
  const targetLink = getLink(link);

  // Ensuring targetLink is a string before calling .includes()
  const relValue = typeof targetLink === 'string' && targetLink.includes("click.pinupcasinobonus.com.br") ? "nofollow" : undefined;

  return (
    <a
      href={targetLink} // This should always be a string now
      rel={relValue}
      className={classN({ size, color, className })}
    >
      <span className="text-pnp text-nowrap">{title}</span>
      {details && <span className="text-pnp text-24-36-700">{details}</span>}
      {children && <span className="text-pnp">{children}</span>}
    </a>
  );
};

export default ButtonRounded;