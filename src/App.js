import React, { useState } from "react";
import NewExpense from './components/NewExpenses/NewExpense';
import Expanses from "./components/Expenses/Expenses";


let Dummy_Expense= [
    {
        id:'e1',
        title:'Schoot Fee',
        amount: 250,
        date: new Date(2022,8,17)
    },
    {
        id:'e2',
        title:'Books',
        amount: 420,
        date: new Date(2022,8,17)
    },
    {
        id:'e3',
        title:'House Rent',
        amount: 750,
        date: new Date(2022,8,18)
    },
    {
        id:'e4',
        title:'Vegitables',
        amount: 50,
        date: new Date(2022,8,22)
    },
   ];

const App = () =>{
  
  const [expenses , setExpense]  =useState(Dummy_Expense);
   
   const addExpenseHandler =(expense) => {
            // console.log(expense)
            const updateExpense = [expense , ...expenses]
            setExpense(updateExpense)

}


    // let expanseDate = new Date(2022, 8  , 17);
    // let expenseTitle ="Schoot Fee";
    // let ExpenseAmount = 300;
    return (
        <div>
            
            <NewExpense onAddExpense= { addExpenseHandler } />
            <Expanses item={ expenses } />
        </div>
    );
}

export default App;