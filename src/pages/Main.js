import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';







function Main() {







  return (
    
    <div className="App">


        <Helmet>
                <title>Kachelthemen</title>
        </Helmet>

      <div className="titlePage">

            <h1 className="title">KACHEL</h1>
            <h1 className="title">THEMEN</h1>
    

      </div>


    <section class="socials">

      

            <article class="social-box">
                
            <Link to="/teppich" className="square square-1">
                    Teppich
            </Link>
                
            <Link to="/uni" className="square square-2">
                    Universität
            </Link>
                
            <Link to="/buch" className="square square-3">        
                    Buch
            </Link>
                
            <Link to="/ente" className="square square-4">  
                    Ente
            </Link>
                
            <Link to="/bruecke" className="square square-5">  
                    Brücke
            </Link>

            <Link to="/berg" className="square square-6">  
                    Berg
            </Link>

            <Link to="/viereck" className="square square-7">  
                    Viereck
            </Link>
            </article>
        </section>

    </div>
    
  );
}

export default Main;
