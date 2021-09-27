import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'SEO And Blog',
      amount: 5000,
      date: new Date(2021, 7, 1),
    },
    { id: 'e2', title: 'Mutual Funds', amount: 6000, date: new Date(2021, 7, 5) },
    {
      id: 'e3',
      title: 'LIC',
      amount: 5000,
      date: new Date(2021, 7, 5),
    },
    {
      id: 'e4',
      title: 'Lightbill',
      amount: 3600,
      date: new Date(2021, 7, 10),
    },
    {
      id: 'e5',
      title: 'Gas bill',
      amount: 820,
      date: new Date(2021, 7, 10),
    },
    {
      id: 'e6',
      title: 'Watch',
      amount: 1400,
      date: new Date(2021, 7, 19),
    },
  ];

const App = () => {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense =>{
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }
return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};
export default App;
