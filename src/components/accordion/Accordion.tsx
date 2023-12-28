import React, { type FC } from "react"; 
import {
  
  Accordion,
  AccordionHeader,
  AccordionBody,

} from '@material-tailwind/react';
import "./styles.css";

type AccItem = {
  title: string;
  body: string;
};
interface Props {
  data: AccItem[];
}

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const AccordionCustomStyles: FC<Props> = ({ data }) => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <ul className="flex flex-col gap-y-6">
      {data.map((item, index) => {
        const key = index + 1;
        return (
          <Accordion
            key={key}
            open={open === key}
            className="accc overflow-hidden box-shadow-1 relative bg-pnp/[.01] border border-pnp/[.1] text-18-28-600 rounded-[24px] sm:rounded-[32px] px-4 py-4 sm:px-8 sm:py-4"
            icon={<Icon id={1} open={open} />}
            placeholder={undefined}
          >
            <AccordionHeader
              onClick={() => handleOpen(key)}
              className={`border-b-0 transition-colors ${
                open === 1 ? "text-pnp hover:!text-pnp-grey20" : "text-pnp"
              }`}
              placeholder={undefined}
            >
              {item.title}
            </AccordionHeader>
            <AccordionBody className="pt-0 !text-[#D2D2D2] text-16-24-400">
              {item.body}
            </AccordionBody>
          </Accordion>
        );
      })}
    </ul>
  );
};

export default AccordionCustomStyles;
