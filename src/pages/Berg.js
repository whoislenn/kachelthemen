import React from 'react';
import '../styles/berg.css';
import { Helmet } from 'react-helmet';

function Berg(){
    return (
        <div className="berg-container"> {/* Wrap the entire content */}

            <Helmet>
                <title>Berg</title>
            </Helmet>

            <div className="Berg">
                
            </div>
        </div>
    );
};

export default Berg;
