import React from 'react';

export const AgeRange = () => {
    const ageRange = ['0-49', '50-59', '60-75', '76+'];

    return(
        <div>
            <h4>Age Range</h4>
            {ageRange.map(range => {
                return (
                    <button>
                        {range}
                    </button>
                )
            })}
        </div>
    )
};

export default AgeRange;