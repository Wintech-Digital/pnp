import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export const ServiceData = [
    {
      icon: 'RxCrop',
      title: "Development",
      content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
      backgroundImage: 'SpaceCity9',
    },
    {
      icon: 'RxPencil2',
      title: "Branding",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: 'SpaceCity1',
    },
    {
      icon: 'RxDesktop',
      title: "Design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: 'SpaceCity6',
    },
    {
        icon: 'RxAccessibility',
        title: "Seo",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: 'SpaceCity7',
    },
    {
      icon: 'RxAccessibility',
      title: "Management",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: 'SpaceCity5',
    },
    {
      icon: 'RxRocket',
      title: "Production",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: 'SpaceCity8',
    },
  ];

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[200px]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <div className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]">L</div>
                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                <p className="lg:text-[18px]">{item.content} </p>
              </div>
              <ChevronDownIcon className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100"/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;