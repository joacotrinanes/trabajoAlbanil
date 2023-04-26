import React from "react";
import '../../styles/metallicDiv.css';
import img_metal from '../../img/metal-texture-3-1199822.jpg';

const MetallicDiv = () => {

  return(
    <div className="h-5 metallic_div">
        <img src={img_metal} alt="metallic background" width="100%"/>
    </div>
)
};

export default MetallicDiv