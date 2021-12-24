import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (prop) =>{

    const saveExpenseDataHandler = enteredExpenseData =>{       // data-> intermediate -> App.js (to add new expense)
        const expenseData = {                                   //            ^here
            id: Math.random().toString(),
            ...enteredExpenseData
        }
        prop.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}
export default NewExpense;