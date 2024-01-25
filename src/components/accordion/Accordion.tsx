import type { FC } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import "./styles.css";

function Icon({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${ open ? "rotate-180" : "rotate-0" } h-6 w-6 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const box = 'border border-pnp/[.1] bg-pnp/[.03] box-shadow-1';
const rounded = 'rounded-[24px] sm:rounded-[30px]';
const padding = 'px-4 sm:px-8 py-4 sm:py-4';
const margin = 'my-2';
const itemClasses = {
  base: `relative accc z-50 overflow-hidden ${box} ${rounded} ${padding} ${margin}`,
  title: "text-18-28-600",
  trigger: "flex flex-row justify-between",
  indicator: "",
  content: "relative z-50 text-16-24-400 text-pnp-grey20",
};

type AccItem = {
  title: string;
  body: string[];
};

interface Props {
  data: AccItem[];
}

const AccordionCustomStyles: FC<Props> = ({ data }) => {
  if(!data) return null;
  return (
    <Accordion
      variant="splitted"
      defaultExpandedKeys={["0"]}
      itemClasses={itemClasses}
    >
      {data.map((item, index) => (
        <AccordionItem
          key={`${index}`}
          aria-label={`acc${index}`}
          title={<h3>{item.title}</h3>}
          indicator={({ isOpen }) => ( <Icon open={isOpen}/> )}
        >
          {item?.body?.map((bItem, ind)=>(
            <p key={`${index}-${ind}`} className={`${ind!==0?'mt-4':'mt-0'}`}>
              {bItem}
            </p>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionCustomStyles;