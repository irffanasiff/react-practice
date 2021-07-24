import React from "react";
import classes from "./Card.css"
const Card = (props) => {
  return( <div class="w-full max-w-xs justify-self-center m-10" > 
  {props.children} 
  </div>)
};

export default Card;
