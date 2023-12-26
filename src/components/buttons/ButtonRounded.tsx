const sizes = {
  xs: "text-[12px] px-[13px] py-[7px]",
  sm: "text-[14px] px-[15px] py-[9px]",
  md: "text-[14px] px-[16px] py-[9px]",
  lg: "text-[16px] px-[21px] py-[9px]",
  xl: "text-[16px] px-[24px] py-[16px]",
};

const btnColors = {
  red: "bg-pnp-red hover:bg-pnp-dark-red active:ring-pnp-dark-red",
  green: "bg-pnp-green hover:bg-pnp-dark-green active:ring-pnp-dark-green",
  transparent: "bg-pnp/[.05] hover:bg-pnp/[.20] active:ring-pnp-white",
};
const classN = ({ color, size, className }) => {
  const btnBg = `${btnColors[color]}`;
  const sizeClasses = `${sizes[size]}`;
  const colorClasses = `${sizeClasses} ${btnBg}`;

  return `transition-colors ease-in-out duration-300 text-center cursor-pointer rounded-full active:ring-2 active:ring-offset-2 ${sizeClasses} ${colorClasses} ${className}`;
};

type Sizes = "xs" | "sm" | "md" | "lg" | "xl";
type Colors = "transparent" | "red" | "green";

interface Props {
  size: Sizes;
  color: Colors;
  title: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const ButtonRounded = ({ ...props }: Props) => {
  const { size, color, title, className, ...rest } = props;
  return (
    <button
      className={classN({ size, color, className })}
      onClick={rest?.onClick}
      {...rest}
    >
      <span className="text-pnp">{title}</span>
      {rest?.children && <span className="text-pnp">{rest?.children}</span>}
    </button>
  );
};

export default ButtonRounded;
