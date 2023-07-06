import "./Expenses.css";
import ExpensesFilter from "./expenseFilter/ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  function changeYearHandler(year) {
    setSelectedYear(year);
  }
  const filteredExpanses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        onChangeYear={changeYearHandler}
        selected={selectedYear}
      />
      <ExpensesList items = {filteredExpanses} />
    </div>
  );
}

export default Expenses;
