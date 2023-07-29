
import React from "react";
import './Expenses.css';
import ExpanseItem from './ExpenseItem';
import Card from '../UI/Card';


const Expenses = (props) => {
return (
<Card className='expenses'>

  {
        props.item.map(
              expense =>(
              <ExpanseItem
               date= { expense.date }
               title={ expense.title  }
               amount= { expense.amount } />
              )
          )
  }
        <div>

{/* <ExpanseItem
               date= { props.item[0].date }
               title={ props.item[0].title  }
               amount= { props.item[0].amount } />
               
               <ExpanseItem
               date= { props.item[1].date }
               title= {props.item[1].title} 
               amount= { props.item[1].amount } />
               
               <ExpanseItem
               date= { props.item[2].date }
               title= {props.item[2].title} 
               amount= { props.item[2].amount } />
               
               <ExpanseItem
               date= { props.item[3].date }
               title= {props.item[3].title} 
              amount= { props.item[3].amount } /> */}
        </div>
  
</Card>
);
}
export default Expenses;

