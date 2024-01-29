import { getFields } from "@utils";
import { useMemo, useState } from "react";
import BonusCardList from "./BonusCardList";

import bonusCard1 from '@assets/images/slides/bonusCards/bonus-2.webp';
import bonusCard2 from '@assets/images/slides/bonusCards/bonus-4.webp';
import bonusCard3 from '@assets/images/slides/bonusCards/bonus-6.webp';
import bonusCard4 from '@assets/images/slides/bonusCards/bonus-7.webp';
import bonusCard5 from '@assets/images/slides/bonusCards/bonus-9.webp';
import bonusCard6 from '@assets/images/slides/bonusCards/bonus-10.webp';
import bonusCard7 from '@assets/images/slides/bonusCards/bonus-12.webp';
const bonusCardLocal = [bonusCard1, bonusCard2, bonusCard3, bonusCard4, bonusCard5, bonusCard6, bonusCard7];
const filters = [
    {
        id: 'todos',
        name: 'Todos'
    },
    {
        id: 'cassino',
        name: 'Cassino'
    },
    {
        id: 'esportes',
        name: 'Esportes'
    },
]
const BonusCardContainer = ({...props}) => {
    const title = props?.title || '';
    const data = props?.data || [];
    const [cardFilter, setCardFilter] = useState('todos');
    const cardData = useMemo(()=> {
        return data.map((item, index)=>{
            const attributes = item?.attributes;
            const slug  = attributes?.slug || '';
            const active  = attributes?.active;
            const category  = attributes?.category || '';
            const title  = attributes?.title || '';
            const description  = attributes?.description || '';
            const coverImageLink  = attributes?.coverImageLink || '#';
            const coverImage = attributes?.coverImage || '#';
            const btnList = attributes?.btnList || [];

            const localImg = bonusCardLocal[index];
            return({
                slug,
                active,
                category,
                description,
                text: title,
                imageLink: coverImageLink,
                imageData:{
                    url: localImg.src,
                    w: localImg.width,
                    h: localImg.height,
                    alternativeText: getFields(coverImage?.data?.attributes).alternativeText
                },
                buttons: btnList
            })
        })
    }, [data]);
    const cardList = useMemo(()=>{
        return cardData.filter(item => {
            if(cardFilter === 'todos'){
                return true;
            }
            return item.category === cardFilter;
        })
    }, [cardFilter, cardData])

    return (
        <div className="mb-[30px]">
            <div className="flex flex-col sm:flex-row justify-between mb-[30px]">
                <h2 className="text-24-36-700 sm:text-34-37-700 mb-4 sm:mb-0">{title}</h2>
                <div className="flex gap-6">
                    {
                        filters.map(item => {
                            const isActive = item.id === cardFilter;
                            if(isActive){
                                return (
                                    <button
                                        key={item.id}
                                        className='text-16-24-600 text-pnp-green' disabled
                                    >
                                        {item.name}
                                    </button>
                                )
                            }
                            return (
                                <button 
                                    key={item.id}
                                    onClick={() => setCardFilter(item.id)}
                                    className='text-16-24-600 text-pnp hover:underline'
                                >
                                    {item.name}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <BonusCardList
                cardList={cardList}
            />
        </div>
    )
}

export default BonusCardContainer;