import type { FC } from "react";
interface Props {
  text: string;
  pic: string;
  description: string;
}

const SliderItem7Info: FC<Props> = ({ text, pic, description }) => (
  <div className="h-full w-full">
    <div className="w-[64px] h-[64px] rounded-full gradient-green-small flex items-center justify-center">
      <img src={pic} className="h-6 w-6" alt=""/>
    </div>
    <div className="text-24-30-700 text-pnp mt-6 mb-2">{text}</div>
    <div className="text-16-24-400 text-pnp-grey20">{description}</div>
  </div>
);

export default SliderItem7Info;

/**
 * 
    import {
      ArrowTrendingUpIcon,
      TrophyIcon,
      GiftIcon,
      InformationCircleIcon
    } from '@heroicons/react/24/outline'

    const icons = {
      ArrowTrendingUpIcon,
      TrophyIcon,
      GiftIcon,
      InformationCircleIcon
    };
    const Icon = icons[pic];

    <Icon className='h-6 w-6'/>
* 
*/
