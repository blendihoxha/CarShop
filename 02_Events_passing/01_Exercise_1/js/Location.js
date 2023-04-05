import React from 'react';
import LocationMap from '../js/LocationMap';
const Location = () => {
    return (
        <div className="Location">
            <div className="Location__wrapper">
                <div className="Location__content">
                    <h3>FIND US ON THE MAP</h3>
                    
                </div>
            </div>
            <div className="Location__map">
                <LocationMap />
            </div>
        </div>
    );
};
export default Location;