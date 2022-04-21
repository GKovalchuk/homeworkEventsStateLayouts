import React from 'react';
import ShopCard from './ShopCard';

function CardsView(props) {
    const { cards } = props;

    return (
        <>
            {cards.map(card => <ShopCard key={card.id} card={card} />)}
        </>
    )
}

export default CardsView;