import React from 'react';

function ShopCard(props) {
    const { card } = props;

    return (
        <div className='card'>
            <div className='card_top'>
                <h1>{card.name}</h1>
                <p>{card.color}</p>
            </div>

            <img className='card_img' src={card.img} alt='' />

            <div className='card_bottom'><p>${card.price}</p>
                <button className='card_button'>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ShopCard;