  import React from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

  
import './App.css';
  
import Teppich from "./pages/Teppich"
import Berg from "./pages/Berg"
import Bruecke from "./pages/Bruecke"
import Buch from "./pages/Buch"
import Ente from "./pages/Ente"
import Viereck from "./pages/Viereck"
import Uni from "./pages/Uni"

import Main from "./pages/Main"

  function App() {



  



    return (

      
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/teppich" element={<Teppich />} />
        <Route path="/berg" element={<Berg />} />
        <Route path="/bruecke" element={<Bruecke />} />
        <Route path="/buch" element={<Buch />} />
        <Route path="/viereck" element={<Viereck />} />
        <Route path="/uni" element={<Uni />} />
        <Route path="/ente" element={<Ente />} />



        </Routes>
      


      </Router> 
    );
  }

  export default App;
