import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (prop) => {

    const yearSelectHandler = event =>{
        prop.onYearSelect(event.target.value);
        console.log(prop.selectedYear);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={prop.selectedYear} onChange={yearSelectHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
