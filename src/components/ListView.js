import React from 'react';
import ShopItem from './ShopItem';

function ListView(props) {
    const { items } = props;

    return (
        <>{items.map(item => <ShopItem key={item.id} item={item} />)}</>
    )
}

export default ListView;