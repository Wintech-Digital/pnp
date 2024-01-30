
const SliderItem7Info= ({ text, pic, description }) => (
  <div className="h-full w-full">
    <div className="w-[64px] h-[64px] rounded-full gradient-green-small flex items-center justify-center">
      <img src={pic.url} className="h-6 w-6" alt={pic.alt} title={pic.title}/>
    </div>
    <h3 className="text-24-30-700 text-pnp mt-6 mb-2">{text}</h3>
    <div className="text-16-24-400 text-pnp-grey20">{description}</div>
  </div>
);

export default SliderItem7Info;

