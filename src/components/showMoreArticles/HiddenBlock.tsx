import type { FC } from "react";
import React, { useState } from "react";
import ButtonRounded from "@components/buttons/ButtonRounded";
import Article from "./Article";

interface Articles {
    title: string;
    body: string;
}
interface Props {
    hiddens?: Articles[];
}
const HiddenBlock: FC<Props> = ({hiddens}) => {
    const [show, setShow] = useState<boolean>(false);
    const isShowBtn = hiddens && !show; 
    const isShowList = hiddens && show; 

    if(isShowBtn){
        return (
            <ButtonRounded
                size="sm"
                color="red"
                title="Leia mais"
                className="w-full sm:w-auto"
                onClick={()=>setShow(true)}
            />
        )
    }
    if(isShowList){
        return (
            <>
            {hiddens.map((item) => {
              const key = item.title.toLowerCase().replaceAll(/\s/g,'');
              return (
                  <React.Fragment key={key}>
                    <Article
                        title={item.title}
                        body={item.body}
                    />
                  </React.Fragment>
                )
            })}  
          </>
        )
    }

    return null;
}

export default HiddenBlock;