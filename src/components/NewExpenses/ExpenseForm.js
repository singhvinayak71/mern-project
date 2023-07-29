import React, { useState } from "react";
import "./ExpensesForm.css";

const ExpenseForm = (props) => {
    const [enteredTite, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTite,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);

        console.log(expenseData);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <lable>Title</lable>
                    <input
                        type="text"
                        value={enteredTite}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <lable>Amount</lable>
                    <input
                        type="number"
                        value={enteredAmount}
                        min="0.1"
                        step="0.1"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <lable>Date</lable>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
