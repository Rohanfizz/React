import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (prop) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        // data-> intermediate -> App.js (to add new expense)
        const expenseData = {
            //            ^here
            id: Math.random().toString(),
            ...enteredExpenseData,
        };
        prop.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };
    return (
        <div className="new-expense">
            {isEditing ? (
                <ExpenseForm
                    onCancel={stopEditingHandler}
                    onSaveExpenseData={saveExpenseDataHandler}
                />
            ) : (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
        </div>
    );
};

export default NewExpense;
