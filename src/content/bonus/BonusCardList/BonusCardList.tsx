import BonusCard from "./BonusCard";

const BonusCardList = ({cardList}) => {
    // console.log('cardList :::::', cardList);
    return (
        <div className="grid gap-[30px] mx-auto lg:mx-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-2xl lg:max-w-none">
            {
                cardList?.map(card => {
                    return (
                        <BonusCard key={card.slug} {...card} />
                    )
                })
            }
        </div>
    )
}

export default BonusCardList;