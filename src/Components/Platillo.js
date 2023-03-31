import React from 'react';
import image from "../assets/image 8.png"
function Platillo(props) {
  return (
<div class="Item">
  
  <img class="itemImg" src={props.image} alt={props.name} />
  <h4>{props.name}<br/>{props.precio}</h4>


</div>

  );
}

export default Platillo;