import React from "react";
import img_logo from '../../img/llave_francesa.png';
import '../../styles/logo.css';

const Logo = () => {

    return ( 
        <div className = "marca_logo">
            <img alt = "logo juanico's"
                src = { img_logo }
                width = "50"
                height="50"
                className = "img_logo"/>
            <div>
                <h2 className = 'letra_logo'> JuaNico 's</h2> 
                <span className = 'subtitulo_logo'> Soluciones para tú Hogar </span> 
            </div>     
        </div>
    )
};


export default Logo;