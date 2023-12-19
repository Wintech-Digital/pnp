import type { FC, ReactNode } from 'react';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//import ButtonSlider from '@components/buttons/ButtonSlider';

interface Props {
    list: any[];
}
  
const list = [ {item: '1' }, {item: '2' }, {item: '3' }, {item: '4' }, {item: '5' }, {item: '6' }, {item: '7' }, {item: '8' }, {item: '9' }];

const WithStyles = ({...props}) => (
    <div>
        <img src={props.image} alt="" />
    </div>
);

const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
        // <ButtonSlider type='right' color='green' className="absolute top-0 right-0 border border-pnp-red z-50 bg-pnp-red sm:bg-pnp-green"/>
        <button 
            onClick={() => onClick()}
            className="absolute top-0 right-0 border border-pnp-red px-10 py-10 z-50 bg-pnp-red sm:bg-pnp-green"
        >
            Right Btn
        </button>
    );
  };
  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    console.log({currentSlide, deviceType})
    // onMove means if dragging or swiping in progress.
    return (
        // <ButtonSlider type='left' color='green' className="absolute top-0 left-0 border border-pnp-red px-10 py-10 z-50 bg-pnp-green sm:bg-pnp-red" {...rest}/>
        <button 
            onClick={() => onClick()}
            className=""
        >
            Left Btn
        </button>
    );
  };

// const MultiCarouselJsx = () => {
const MultiCarouselJsx: FC<Props> = ({list}) => {
    const sliders = list.map((item,index)=> <div key={index}>{item['item']}</div>)
    return (
            <Carousel
                containerClass="w-full h-56 sm:h-64 xl:h-80 2xl:h-96 border border-pnp-red relative overflow-hidden"
                className="aaa"
                itemClass="iii"
                sliderClass="bbb"
                dotListClass=""
                // customLeftArrow={<CustomLeftArrow/>}
                // customRightArrow={<CustomRightArrow/>}

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
                        partialVisibilityGutter: 140
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 130
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1.5,
                        partialVisibilityGutter: 130
                    },
                }}
            >
                { sliders }
            </Carousel>        
    );
}

export default MultiCarouselJsx;


// { list.map(item => (
//     <WithStyles
//         key={item}
//         description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
//         headline="w3js.com - web front-end studio"
//         image="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//     />
// ))}
