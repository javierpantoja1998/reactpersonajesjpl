import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
export default class Personajes extends Component {

    state = {
        personajes:[],
        status:false
    }


    loadPersonajes = () => {
        var id = this.props.idSerie;
        var request = "api/Series/PersonajesSerie/" + id;
        var url = Global.url + request;
        axios.get(url).then(res=>{
            
            this.setState({
                
                personajes:res.data,
                status:true
            });
        });
    }

    componentDidMount = () => {
        this.loadPersonajes();
    }


  render() {
    return (
      <div>
        <h1>Personajes</h1>
        {
            this.state.status === true && 
            (
                <div>
                    <table border="1px">
                        <thead>
                            <tr>
                                <th>Personaje</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                    <tbody>
                        {
                            this.state.personajes.map((personaje, index)=>{
                                return(
                                    <tr key={index}>

                                        <td>{personaje.nombre}</td>
                                        <td><img src={personaje.imagen} style={{width:"100px"}}/></td>
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    </table>
                </div>
            )
        }
      </div>
    )
  }
}
