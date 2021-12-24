import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const yearSelectHandler = (year) => {
        setFilteredYear(year);
    };
    
    const filteredExpenses = props.items.filter(item => item.date.getFullYear() == filteredYear);

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selectedYear={filteredYear}
                    onYearSelect={yearSelectHandler}
                />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
};

export default Expenses;
