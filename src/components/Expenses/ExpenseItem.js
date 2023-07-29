
import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpanseDate from "./ExpneseDate";
import Card from '../UI/Card';


const ExpanseItem = (props) =>{

  // const [newTitle, setNewTitle] = useState();
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //      setTitle(newTitle)
  // }

  // const changeHandler= (event)=> {
  //   setNewTitle(event.target.value);
  // }

  return (
    
    <Card className="expense-item">
      <div className="expense-item__description">
          <ExpanseDate date= {props.date} />
        <h2>{props.title}</h2>
        {/* <h2>{title}</h2> */}
        <div className="expense-itme__prise">${ props.amount }</div>
      </div>
      {/* <input type="text" value={newTitle} onChange ={changeHandler}/>
      <button onClick={ clickHandler }>Change title</button> */}
    </Card>
  );
}
export default ExpanseItem;
