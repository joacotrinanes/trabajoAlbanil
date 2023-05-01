import React from "react";
import DarkCarousel from "./Carrousel";
import '../../styles/mainContent.css';
import CardSecciones from "../UI/Card";
import '../UI/card.css';


const MainContent = () => {

    return (
        <div className="background_img_metallic">  
            <div className="container carousel_container">       
                <DarkCarousel/> 
            </div>
            <div className="container cards_container">
                <CardSecciones/>
                <CardSecciones/>
                <CardSecciones/>
                <CardSecciones/>
            </div>                             
        </div>
)

}

export default MainContent;