import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Jam from "./Jam";
import Chord from "./Chord";

const GuitarRoutes = () => {
   return (
      <Routes>
         <Route exact="true" path="/" element={<Home />} />
         <Route exact="true" path="/jam" element={<Jam />} />
      </Routes>
   )
}

export default GuitarRoutes;