import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import axios from 'axios';
import Global from './../Global';
import stranger from './../assests/images/stranger.jpg';
import { NavLink } from 'react-router-dom';


export default class MenuSeries extends Component {

    state = {
        series: [],
        status: false
    }



    loadSeries = () => {
        var request = "api/Series";
        var url = Global.url + request;
        axios.get(url).then(res => {
            
           this.setState({
            series:res.data,
            status:true
           });
        });
    }


    componentDidMount = () => {
        this.loadSeries();
    }


    render() {
        return (

                <nav className="navbar navbar-expand-sm bg-light">

                <div className="container-fluid">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <img src={stranger} style={{ width: "70px" }}></img>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/nuevoPersonaje">Nuevo Personaje</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Modificar personaje</a>
                        </li>
                        
                    </ul>
                    
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                        Series

                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {/* Creamos el script que "mapee" los equipos y muestre el nombre de todos los equipos */}

                        {
                            this.state.status == true && 
                            (this.state.series.map((serie, index) => {
                                console.log(serie.nombre);
                                return (<li key={serie.idSerie}>
                                    <NavLink className="btn btn-info" to={"/series/" + serie.idSerie}>{serie.nombre}</NavLink>
                                </li>)
                            }))
                        }
                    </ul>

                </div>

            </nav>
            
        )
    }
}

