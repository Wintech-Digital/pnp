import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

interface Props {
  [x: string]: any;
}
interface BtnProps extends Props {
  onClick?: () => void;
}
type TypeArrow = "left" | "right";
interface CutomBtnProps extends Props {
  arrow: TypeArrow;
  onClick?: () => void;
}

const transition = "transition-colors ease-in-out duration-300";
const buttonHover = "bg-pnp/[.05] hover:bg-pnp-green hover:border-pnp-green";
const buttonPosionTop = "absolute -top-[70px] z-50";
const buttonPosionMiddle = "absolute top-[40%] z-50";
const commonButtonStyle = `${transition} ${buttonHover}`;

const CustomButton = ({ arrow, onClick, ...rest }: CutomBtnProps) => {
  const {
    carouselState: { deviceType },
  } = rest;
  const isLeft = arrow === "left";
  const isMobile = !(deviceType !== "mobile");
  const btnPosition = isMobile ? buttonPosionMiddle : buttonPosionTop;
  const leftStyles = isMobile ? `left-8` : `right-20`;
  const rightStyles = isMobile ? `right-8`: `right-4`;
  const leftRight = isLeft ? leftStyles : rightStyles;
  const btnStyles = `${commonButtonStyle} ${btnPosition} ${leftRight}`;
  const size = isMobile
    ? "h-14 w-14 px-[8px] py-[8px]"
    : "h-10 w-10 px-[8px] py-[8px]";
  return (
    <div
      onClick={() => onClick()}
      className={`rounded-full border border-pnp/[.5] ${btnStyles}`}
    >
      {isLeft ? (
        <ArrowLeftIcon className={size} />
      ) : (
        <ArrowRightIcon className={size} />
      )}
    </div>
  );
};

export { CustomButton };
