import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { NavLink } from 'react-router-dom';
export default class Series extends Component {

  state = {
    serie:{},
    status:false
  }

 //Funcion para cargar los equipos y mostrar su informacion
 loadSeries = () => {
  var id = this.props.idSerie;
  var request = "api/Series/" +  id;
  var url = Global.url + request;
  axios.get(url).then(response =>{
    
      this.setState({
          serie:response.data,
          status:true
      });
  });
}

  //Cargamos la funcion loadEquipos
  componentDidMount = () => {
    this.loadSeries();
  }

  componentDidUpdate = (oldProps) => {
    if(oldProps.idSerie !== this.props.idSerie){
         this.loadSeries();
      
    }
  }

  

  render() {
    return (
      <div>
        <h1>Series: {this.props.idSerie}</h1>
        {
          this.state.status === true &&
          (
            <div className='card center' style={{width: "16rem"}}>
              <img src={this.state.serie.imagen} className="card-img-top"/>
              <div className='card-body'>
                <h5 className='card-tittle'>{this.state.serie.nombre}</h5>
                <p className='card-text'>IMDB:{this.state.serie.puntuacion}</p>
                <NavLink to={'/personajes/' + this.state.serie.idSerie}>Personajes</NavLink>
              </div>

            </div>
          )
        }
            
        </div>
      

    )
  }
}
