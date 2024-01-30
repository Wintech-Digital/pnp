import { useState, useRef, useEffect } from "react";
import "./styles.css";

function Icon({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${open ? "rotate-180" : "rotate-0"} h-6 w-6 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

// Styling classes
const box = 'border border-pnp/[.1] bg-pnp/[.03] box-shadow-1';
const rounded = 'rounded-[24px] sm:rounded-[30px]';
const padding = 'px-4 sm:px-8 py-4 sm:py-4';
const margin = 'my-2';

const AccordionItemCustom = ({ title, children, onToggle, isOpen }) => {
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  // Measure the content height and set it
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight + 30 : 20); // Closed height is 20px
    }
  }, [isOpen, children]);

  return (
    <div className={`relative accc mt-5 z-50 overflow-hidden ${box} ${rounded} ${padding} ${margin}`}>
      {/* Adjust this div by adding items-center for vertical centering in a flex container */}
      <div
        className="flex flex-row justify-between text-18-28-600 cursor-pointer items-center pt-4"
        onClick={onToggle}
      >
        <span>{title}</span>
        <Icon open={isOpen}/>
      </div>
      <div
        className="overflow-hidden transition-[height] duration-500 ease-in-out"
        style={{ height: `${contentHeight}px` }}
      >
        <div ref={contentRef} className="relative z-50 text-16-24-400 text-pnp-grey20 mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

const AccordionCustom = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {data.map((item, index) => (
        <AccordionItemCustom
          key={index}
          title={item.title}
          onToggle={() => handleToggle(index)}
          isOpen={openIndex === index}
        >
          {item.body.map((bItem, ind) => (
            <p key={`${index}-${ind}`} className={`${ind !== 0 ? 'mt-0' : 'mt-0'}`}>
              {bItem}
            </p>
          ))}
        </AccordionItemCustom>
      ))}
    </>
  );
};

export default function AccordionCustomStyles({ data }) {
  return <AccordionCustom data={data} />;
}