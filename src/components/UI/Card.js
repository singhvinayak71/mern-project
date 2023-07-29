import React from "react";

import './Card.css';


const Card = (props) =>{
    const classes = 'card '+ props.className;      //need space in 'card '
return <div className={classes}>{props.children}</div>
}
export default Card;