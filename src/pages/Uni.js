import React from 'react';
import '../styles/uni.css';
import uniImage from '../res/uni.png';
import { Helmet } from 'react-helmet';



function Uni(){
    return (
        
        <div className="uni-container"> {/* Wrap the entire content */}

            <Helmet>
                <title>Universität</title>
            </Helmet>
        

            <div className="topBarUni">
            
                
            
            </div>

            <div className="contentContainerUni">
                <div className="imageAreaUni">
                        <img src={uniImage} alt="Uni" />
                </div> 

                <div className="contentUni">
                        <span className='uniTitle'>Universität</span>
                        <span className='uniDate'>- 01.09.2023 -</span>
                        <br></br>
                        

                        <span className="uniMainContent">

                        </span>



                </div>
            </div>
            
        </div>
    );
};

export default Uni;


