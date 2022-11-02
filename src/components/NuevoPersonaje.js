import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';

export default class NuevoPersonaje extends Component {

    cajaNombre = React.createRef();
    cajaImagen = React.createRef();
    cajaSelect = React.createRef();

    state = {
        series:[],
        status1:false,
        status2:false
    }



    loadSeries = () => {
        var request = "api/Series";
        var url = Global.url + request;
        axios.get(url).then(res=>{
            
            this.setState({
                series:res.data,
                status1:true
            });
        });
        
    }

    componentDidMount = () => {
        this.loadSeries();
    }
    crearPersonaje = (e) => {
        e.preventDefault();
        
        var nombre = this.cajaNombre.current.value();
        var imagen = this.cajaImagen.current.value();
        var select = parseInt(this.cajaSelect.current.value());

        var request = "api/Personajes";
        var url = Global.url + request;

        var personaje = {
            nombre:nombre,
            imagen:imagen,
            idSerie:select
        }
        axios.post(url, personaje).then(res=>{
            this.setState({
                status2:true
            })
            
        })
    }


  render() {
    return (
      <div>
        <h1>Nuevo Personaje</h1>
        <form ref={this.cajaSelect}>
            <label>Nombre:</label>
            <input type="text" ref={this.cajaNombre}/>
            <label>Imagen:</label>
            <input type="text" ref={this.cajaImagen}/>
            <label>Serie:</label>
            <select>
                {
                    this.state.status1 === true && (
                        this.state.series.map((serie,index)=>{
                            return(
                                <option key={index} value={serie.idSerie}>
                                    {serie.nombre}
                                </option>
                            )
                        })
                    )
                }
            </select>
            <button className='btn btn-success' onClick={this.crearPersonaje}>Crear Personaje</button>
        </form>

      </div>
    )
  }
}
