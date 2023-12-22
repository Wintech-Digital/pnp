import type { FC } from "react";
import type { GetImageResult } from "astro";

interface Props {
  ind: number;
  pic: GetImageResult;
  text: string;
  description: string;
}

const brd = 'border border-pnp/[.1] bg-pnp/[.05]'
const transition = 'transition duration-300 ease-in-out';
const rounded = 'rounded-[24px] sm:rounded-[30px]';
const gradient = 'hover:gradient-red';
const paddings = 'px-[16px] py-[16px] sm:px-[16px] sm:py-[16px]';
const flexCol = 'flex flex-col gap-4'

const SliderItem4: FC<Props> = ({ind,pic,text, description}) => {
  return (
    <li className={`shadow w-full h-full relative ${brd} ${rounded} ${paddings}  ${gradient} ${transition} ${flexCol}`}>
        <div className="bg-pnp-green absolute top-2 left-2 h-[50px] w-[50px] rounded-full flex items-center justify-center px-[11px] py-[10px]">
          <span className="text-16-24-600">
            0{ind+1}
          </span>
        </div>
        <img className="pointer-events-none object-cover h-[170px] w-full flex-shrink-0 rounded-[16px]" src={pic.src} alt={text}/>
        <h3 className="text-pnp text-18-28-600">
          {text}
        </h3>
        <p className="text-16-28-400 text-pnp-grey20">
          {description}
        </p>
    </li>
  )
};

export default SliderItem4;




/*
// tailwind.config.js
  module.exports = {
    plugins: [
      require('@tailwindcss/aspect-ratio'),
    ],
  }
*/
// const files = [
//   {
//     title: 'IMG_4985.HEIC',
//     size: '3.9 MB',
//     source:
//       'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
//   },
// ]

// export default function Example() {
//   return (
//     <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
//       {files.map((file) => (
//         <li key={file.source} className="relative">
//           <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
//             <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
//             <button type="button" className="absolute inset-0 focus:outline-none">
//               <span className="sr-only">View details for {file.title}</span>
//             </button>
//           </div>
//           <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.title}</p>
//           <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p>
//         </li>
//       ))}
//     </ul>
//   )
// }
