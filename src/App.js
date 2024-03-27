import React from 'react';
import Home from './routes/Home'
import {Route, Routes} from 'react-router-dom'
import About from './routes/About';
import Vehiclepage from './routes/Vehiclepage';
import Testimonialspage from './routes/Testimonialspage';
import Ourteampage from './routes/Ourteampage';
import Contactpage from './routes/Contactpage';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/vehiclemodels' element={<Vehiclepage/>}/>
        <Route path='/testimonials' element={<Testimonialspage/>}/>
        <Route path='/ourteam' element={<Ourteampage/>}/>
        <Route path='/contact' element={<Contactpage/>}/>
    </Routes>
  );
}

export default App;
