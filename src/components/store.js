import React, { useState } from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import CardsView from './CardsView';

function Store() {
    const products = [{
        id: 1,
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
        id: 2,
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
        id: 3,
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
        id: 4,
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
        id: 5,
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
        id: 6,
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];

    const [icon, setIcon] = useState('view_module');
    function switchView(icon) {
        console.log(icon.icon)
        if (icon.icon === 'view_module') {
            return (<CardsView cards={products} />)
        } else {
            return (<ListView items={products} />)
        }
    }
    const onIconSwitch = evt => {
        setIcon(prevIcon => {
            if (prevIcon === 'view_list') {
                return ('view_module')
            } else {
                return ('view_list')
            }
        });
    }

    return (
        <div className='wrapper_card'>
            <IconSwitch icon={icon} onSwitch={onIconSwitch} onswitchView={switchView} />
            {switchView({ icon })}
        </div>
    );
}

export default Store;