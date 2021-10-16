import React, { useState } from "react";


import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import './Expenses.css';
import ExpensesList from "./ExpensesList";

function Expenses (props){

    const [filteredYear, setfilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear =>{
      setfilteredYear(selectedYear);
    };


    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    }); 

    return <div><Card className="expenses">
     
      <ExpensesFilter selected={filteredYear} onChangefilter={filterChangeHandler}></ExpensesFilter>
      <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>
}

export default Expenses;