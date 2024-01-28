import { useEffect, useState, useRef } from 'react';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import SliderItem from '@components/slider/SliderItem';
import SliderItem2 from '@components/slider/SliderItem2';
import SliderItem3 from '@components/slider/SliderItem3';
import SliderItem4 from '@components/slider/SliderItem4';
import SliderItem5 from '@components/slider/SliderItem5';
import SliderItem6 from '@components/slider/SliderItem6';
import SliderItem7Info from '@components/slider/SliderItem7Info';
import SliderItem8 from '@components/slider/SliderItem8';
import SliderItem9 from '@components/slider/SliderItem9';
import ButtonSliderHidden from '@components/buttons/ButtonSliderHidden';
import { CustomButton } from '@components/buttons/ButtonSlider';
import type { GetImageResult } from 'astro';

const componentMapping = {
    SliderItem,
    SliderItem2,
    SliderItem3,
    SliderItem4,
    SliderItem5,
    SliderItem6,
    SliderItem7Info,
    SliderItem8,
    SliderItem9,
};

interface ListProps {
    text: string;
    pic: GetImageResult | string;
    description?: string;
    bgHoverStyle?: string;
}

const BlockHeroSlider = ({ itemsNum = 3, noShadow = false, noInfiniti = false, list, itemComponentName }) => {
    const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
    const carouselRef = useRef(null);

    useEffect(() => {
        if (window) {
            const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
            setIsMobile(isMobileDevice);
        }
        adjustTabIndex(); // Adjust tabIndex when the component mounts or updates
    }, [isMobile]); // Dependency array; add other dependencies as necessary

    // Define the function to adjust tabIndex for interactive elements
    const adjustTabIndex = () => {
        setTimeout(() => {
            if (carouselRef.current) {
                carouselRef.current.querySelectorAll('.react-multi-carousel-item').forEach(item => {
                    const isActive = item.classList.contains('react-multi-carousel-item--active');
                    item.querySelectorAll('a, button, input, textarea, select, [tabindex]').forEach(el => {
                        el.tabIndex = isActive ? '0' : '-1';
                    });
                });
            }
        }, 100);
    };

    if (isMobile === undefined) {
        return null;
    }

    const sliderComponents = list.map((item, index) => {
        const Component = componentMapping[itemComponentName];
        return (
            <div key={index} className={`h-full ${!noShadow ? 'shadow-1' : ''} rounded-[24px]`}>
                <Component ind={index} {...item} />
            </div>
        );
    });

    // Carousel component with all configured props
    return (
        <div className='relative' ref={carouselRef}>
            {!isMobile && (<ButtonSliderHidden />)}
            <Carousel
                containerClass="-ml-4 -mr-[15px]"
                className="!overflow-visible pb-[32px]"
                sliderClass=""
                itemClass="px-4 mb-4"
                dotListClass=""
                customLeftArrow={<CustomButton arrow='left'/>}
                customRightArrow={<CustomButton arrow='right'/>}

                rtl={false}
                arrows
                draggable
                swipeable
                pauseOnHover

                infinite={!noInfiniti}
                
                rewind={true}
                focusOnSelect={true}
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
                        items: itemsNum || 3, // Adjusted to use the provided itemsNum or default to 3
                        partialVisibilityGutter: 0,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 431
                        },
                        items: 2,
                        partialVisibilityGutter: 0
                    },
                    mobile: {
                        breakpoint: {
                            max: 430,
                            min: 0
                        },
                        items: 1.3,
                    },
                }}
            >
                {sliderComponents}
            </Carousel>
        </div>
    );
};

export default BlockHeroSlider;