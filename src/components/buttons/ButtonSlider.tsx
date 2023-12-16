import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

type ButtonType = 'left' | 'right';
type Colors = 'red' | 'green';

interface Props {
    type: ButtonType;
    color: Colors;
    className?: string;
    onClick?: () => void;
}
const btnColors = {
    red: 'hover:bg-pnp-red hover:border-pnp-red',
    green: 'hover:bg-pnp-green hover:border-pnp-green',
};

const classN = ({color, className}) => {
    return `rounded-full border border-pnp transition-colors ease-in-out duration-300 ${btnColors[color]} ${className}`;
}

const icon = ({type}:{type: ButtonType}) => {
    const isLeft = type === 'left';
    const isRight = type === 'right';
    const styles = `h-10 w-10 px-[8px] py-[8px]`;

    if(isLeft){
        return <ArrowLeftIcon className={styles}/>
    }
    if(isRight){
        return <ArrowRightIcon className={styles}/>
    }
    return null;
}
const ButtonSlider = ({...props}: Props) => {
    const {type, color, className, ...rest} = props;
    return (
      <button className={classN({color, className})} {...rest}>
        {icon({type})}
      </button>
    )
};

export default ButtonSlider;