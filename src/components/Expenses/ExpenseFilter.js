import React from "react";
import './ExpenseFilter.css'

const ExpenseFilter = () => {
    return (
        <div className="expenses-filter">
            <label>Filtered by Year</label>
            <select className="expenses-filter__control">
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>

        </div>
    );


};

export default ExpenseFilter;