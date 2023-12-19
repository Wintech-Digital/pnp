import type { FC } from 'react';
import type { GetImageResult } from 'astro';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import SliderItem from '@components/slider/SliderItem';
import {CustomLeftArrow, CustomRightArrow} from '@components/buttons/ButtonSlider';
interface ListProps {
    title: string,
    description: string,
    pic: GetImageResult,
}
interface Props {
    list: ListProps[];
}

const BlockHeroSlider: FC<Props> = ({list}) => {
    const sliders = list.map( (item, index) => <SliderItem key={index} text={item.title} {...item}/> );
    return (
            <Carousel
                containerClass="rrrr w-full h-[377px] sm:h-[336px] lg:h-[220px] relative overflow-hidden"
                className="aaaa"
                itemClass="iiii"
                sliderClass="bbbb"
                dotListClass=""
                customLeftArrow={<CustomLeftArrow/>}
                customRightArrow={<CustomRightArrow/>}

                rtl={false}
                arrows
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
                        items: 1.3,
                        partialVisibilityGutter: 30
                    },
                }}
            >
                { sliders }
            </Carousel>        
    );
}

export default BlockHeroSlider;