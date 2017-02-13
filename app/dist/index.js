import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    constructor(){
        super();
        this.nombre = "edu";
    }
    obtenerNombre(){
        return this.nombre;
    }
    render(){
        return(
            <h1>Hola { this.obtenerNombre() }</h1>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);