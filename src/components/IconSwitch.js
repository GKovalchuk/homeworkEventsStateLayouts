import React from 'react';

function IconSwitch(props) {
    const { icon } = props;
    const onSwitch = () => {
        props.onswitchView(props);
        props.onSwitch(props);
    }

    return (
        <button onClick={onSwitch} className='button_switch'><span className="material-icons">
            {icon}
        </span></button>
    )
}

export default IconSwitch;