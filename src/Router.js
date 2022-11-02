import React, { Component } from 'react';
import MenuSeries from './components/MenuSeries';
import Home from './components/Home';
import {Route, BrowserRouter, Routes, useParams} from 'react-router-dom';
import Series from './components/Series';
import Personajes from './components/Personajes';
import NuevoPersonaje from './components/NuevoPersonaje';

export default class Router extends Component {
  render() {

    function SeriesElement(){
        var{idserie}=useParams();
        return(<Series idSerie={idserie}/>)
    }

    function PersonajesElement() {
        var{idserie}=useParams();
        return(<Personajes idSerie={idserie}/>)
    }


    return (
      <BrowserRouter>

        <MenuSeries/>


        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/series/:idserie' element={<SeriesElement/>}/>
            <Route path='/personajes/:idserie' element={<PersonajesElement/>}/>
            <Route path='/nuevoPersonaje' element={<NuevoPersonaje/>}/>
        </Routes>
      
            
      
      </BrowserRouter>
    )
  }
}
