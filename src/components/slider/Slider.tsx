//import ButtonSlider from "@components/buttons/ButtonSlider";
//import type { FC, ReactNode } from "react";

// interface Props {
//     title: string;
//     children: ReactNode;
//   }
  
// const Slider: FC<Props> = ({title, children}) => {
//     return (
//         <div>
//             <div className="flex flex-row items-center justify-between space-x-[30px] mb-[32px]">
//                 <span className="text-[24px] leading-[36px] font-bold">
//                     {title}
//                 </span>
//                 <div className="flex flex-row items-center justify-between space-x-[30px]">
//                     <ButtonSlider type='left' color='green' />
//                     <ButtonSlider type='right' color='green' />
//                 </div>
//             </div>
//             <div className="flex flex-row justify-between space-x-[30px] overflow-hidden overflow-x-scroll sm:overflow-visible">
//                 {children}
//             </div>
//         </div>
//     )
// }

// export default Slider;


import { useRef } from 'react';
import ButtonSlider from '@components/buttons/ButtonSlider';
import type { FC, ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

const Slider: FC<Props> = ({ title, children }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { current: slider } = sliderRef;
      const scrollAmount = slider.offsetWidth;
      const scrollLeft = direction === 'left' ? -scrollAmount : scrollAmount;
      slider.scrollBy({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  const handleLeftClick = () => {
    scroll('left');
  };

  const handleRightClick = () => {
    scroll('right');
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-between space-x-[30px] mb-[32px]">
        <span className="text-[24px] leading-[36px] font-bold">
          {title}
        </span>
        <div className="flex flex-row items-center justify-between space-x-[30px]">
          <ButtonSlider type='left' color='green' onClick={handleLeftClick} />
          <ButtonSlider type='right' color='green' onClick={handleRightClick} />
        </div>
      </div>
      <div
        ref={sliderRef}
        className="flex flex-row justify-between space-x-[30px] overflow-hidden overflow-x-scroll sm:overflow-visible"
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;