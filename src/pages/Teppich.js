import React from 'react';
import '../styles/teppich.css';
import { Helmet } from 'react-helmet';

function Teppich() {
    return (
        <div className="teppich-container"> {/* Wrap the entire content */}

            <Helmet>
                <title>Teppich</title>
            </Helmet>

            <div className="Teppich">
                
            </div>
        </div>
    );
};

export default Teppich;
