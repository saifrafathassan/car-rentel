import React from 'react';
import Home from './routes/Home'
import {Route, Routes} from 'react-router-dom'
import About from './routes/About';
import Vehiclepage from './routes/Vehiclepage';
import Testimonialspage from './routes/Testimonialspage';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/vehiclemodels' element={<Vehiclepage/>}/>
        <Route path='/testimonials' element={<Testimonialspage/>}/>
    </Routes>
  );
}

export default App;
