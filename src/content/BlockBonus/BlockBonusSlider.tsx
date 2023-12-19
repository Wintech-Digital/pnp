import type { GetImageResult } from 'astro';
import type { FC } from 'react';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import SliderItem2 from '@components/slider/SliderItem2';

interface ListProps {
    title: string,
    description: string,
    pic: GetImageResult,
}
interface Props {
    list: ListProps[];
}

// const CustomRightArrow = ({ onClick, ...rest }) => {
//     const {
//       onMove,
//       carouselState: { currentSlide, deviceType }
//     } = rest;
//     // onMove means if dragging or swiping in progress.
//     return (
//         // <ButtonSlider type='right' color='green' className="absolute top-0 right-0 border border-pnp-red z-50 bg-pnp-red sm:bg-pnp-green"/>
//         <button 
//             onClick={() => onClick()}
//             className="absolute top-0 right-0 border border-pnp-red px-10 py-10 z-50 bg-pnp-red sm:bg-pnp-green"
//         >
//             Right Btn
//         </button>
//     );
//   };
// const CustomLeftArrow = ({ onClick, ...rest }) => {
//     const {
//       onMove,
//       carouselState: { currentSlide, deviceType }
//     } = rest;
//     console.log({currentSlide, deviceType})
//     // onMove means if dragging or swiping in progress.
//     return (
//         // <ButtonSlider type='left' color='green' className="absolute top-0 left-0 border border-pnp-red px-10 py-10 z-50 bg-pnp-green sm:bg-pnp-red" {...rest}/>
//         <button 
//             onClick={() => onClick()}
//             className="absolute top-0 left-0 border border-pnp-red px-10 py-10 z-50 bg-pnp-green sm:bg-pnp-red"
//         >
//             Left Btn
//         </button>
//     );
// };

const BlockBonusSlider: FC<Props> = ({list}) => {
    const sliders = list.map( (item, index) => <SliderItem2 key={index} amount={item.description} text={item.title} {...item}/> );
    return (
            <Carousel
                containerClass="w-full h-[374px] sm:h-[374px] lg:h-[374px] relative overflow-hidden"
                className="aaa"
                itemClass="iii"
                sliderClass="bbb"
                dotListClass=""

                arrows={true}
                // customLeftArrow={<CustomLeftArrow/>}
                // customRightArrow={<CustomRightArrow/>}

                rtl={false}
                
                draggable
                swipeable
                pauseOnHover

                infinite={false}

                rewind={true}
                focusOnSelect={false}
                renderDotsOutside={false}
                rewindWithAnimation={false}
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                showDots={false} 
                keyBoardControl={false}
                shouldResetAutoplay={false}

                slidesToSlide={1}
                minimumTouchDrag={80}
                additionalTransfrom={0}

                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1.2,
                        partialVisibilityGutter: 30
                    },
                }}
            >
                { sliders }
            </Carousel>        
    );
}
export default BlockBonusSlider;




// customLeftArrow={<CustomLeftArrow/>}
// customRightArrow={<CustomRightArrow/>}
// const CustomRightArrow = ({ onClick, ...rest }) => {
//     const {
//       onMove,
//       carouselState: { currentSlide, deviceType }
//     } = rest;
//     // onMove means if dragging or swiping in progress.
//     return (
//         // <ButtonSlider type='right' color='green' className="absolute top-0 right-0 border border-pnp-red z-50 bg-pnp-red sm:bg-pnp-green"/>
//         <button 
//             onClick={() => onClick()}
//             className="absolute top-0 right-0 border border-pnp-red px-10 py-10 z-50 bg-pnp-red sm:bg-pnp-green"
//         >
//             Right Btn
//         </button>
//     );
//   };
// const CustomLeftArrow = ({ onClick, ...rest }) => {
//     const {
//       onMove,
//       carouselState: { currentSlide, deviceType }
//     } = rest;
//     console.log({currentSlide, deviceType})
//     // onMove means if dragging or swiping in progress.
//     return (
//         // <ButtonSlider type='left' color='green' className="absolute top-0 left-0 border border-pnp-red px-10 py-10 z-50 bg-pnp-green sm:bg-pnp-red" {...rest}/>
//         <button 
//             onClick={() => onClick()}
//             className=""
//         >
//             Left Btn
//         </button>
//     );
// };
