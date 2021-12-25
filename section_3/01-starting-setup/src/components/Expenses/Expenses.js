import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from './ExpensesChart';
import "./Expenses.css";


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const yearSelectHandler = (year) => {
        setFilteredYear(year);
    };
    
    const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filteredYear);
    
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selectedYear={filteredYear}
                    onYearSelect={yearSelectHandler}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
};

export default Expenses;
