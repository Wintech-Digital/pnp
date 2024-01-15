import { getFields } from "@utils";
import { useMemo, useState } from "react";
import BonusCardList from "./BonusCardList";


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
        return data.map(item=>{
            const attributes = item?.attributes;
            const slug  = attributes?.slug || '';
            const active  = attributes?.active;
            const category  = attributes?.category || '';
            const title  = attributes?.title || '';
            const description  = attributes?.description || '';
            const coverImageLink  = attributes?.coverImageLink || '#';
            const coverImage = attributes?.coverImage || '#';
            const btnList = attributes?.btnList || [];

            return({
                slug,
                active,
                category,
                description,
                text: title,
                imageLink: coverImageLink,
                imageData: getFields(coverImage?.data?.attributes),
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
                <h2 className="text-40-48-700 mb-6 sm:mb-0">{title}</h2>
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