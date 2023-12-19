import { Carousel} from 'flowbite-react';

const list = [
    {item: '1' },
    {item: '2' },
    {item: '3' },
]
// .flowbite-carousel .slider-item {
//     transition: transform 0.5s ease-in-out; /* Adjust the time and easing to get the desired smooth effect */
//   }
  
const CarouselJsx = () => {
    return (
        <div className="h-56  sm:h-64 xl:h-80 2xl:h-96 border border-pnp-red transform duration-300 ease-in-ou">
            <Carousel
                slide={false}
                draggable={true}
            // slideInterval={500} 
            >
        {
            list.map(item => (
                <div key={item} className='absolute' >
                    <img src={`https://flowbite.com/docs/images/carousel/carousel-${item['item']}.svg`} alt="${item}" />
                </div>
            ))
        }
      </Carousel>
    </div>
  );
}

export default CarouselJsx;