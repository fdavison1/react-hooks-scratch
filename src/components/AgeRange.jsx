import React, { useState } from 'react';

export const AgeRange = () => {
    const ageRange = ['0-49', '50-59', '60-75', '76+'];

    const state = {
        '0-49': 'btn-primary', 
        '50-59': 'btn-primary', 
        '60-75': 'btn-primary', 
        '76+': 'btn-primary'
    }
    

    const [buttonDisplay, changeButtonDisplay] = useState(state);

    const onButtonClick = e => {
        let button = e.target.name;
        console.log(button);
        changeButtonDisplay(buttonDisplay[button] === 'btn-primary' ? 'btn-default' : 'btn-primary');
        console.log(buttonDisplay);
    }

    return (
        <div>
            <h4>Age Range</h4>
            {ageRange.map(range => {
                return (
                    <button
                        key={range}
                        name={range}
                        className={buttonDisplay[range]}
                        onClick={onButtonClick}
                    >
                        {range}
                    </button>
                )
            })}
        </div>
    )
};

export default AgeRange;