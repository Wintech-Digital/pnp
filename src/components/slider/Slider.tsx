import type { FC, ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

const Slider: FC<Props> = ({ title, children }) => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between space-x-[30px] mb-[32px]">
        <span className="text-[24px] leading-[36px] font-bold">
          {title}
        </span>
        <div className="flex flex-row items-center justify-between space-x-[30px]">
        </div>
      </div>
      <div
        className="flex flex-row justify-between space-x-[30px] overflow-hidden overflow-x-scroll sm:overflow-visible"
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;