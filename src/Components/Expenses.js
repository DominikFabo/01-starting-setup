import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./expenseFilter/ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");
  function changeYearHandler(year) {
    setSelectedYear(year);
  }
  return (
    <div className="expenses">
      <ExpensesFilter
        onChangeYear={changeYearHandler}
        selected={selectedYear}
      />
      <div>
        {props.expenses.map((i) => {
          return (
            <ExpenseItem
              title={i.title}
              amount={i.amount}
              date={i.date}
            ></ExpenseItem>
          );
        })}
      </div>
    </div>
  );
}

export default Expenses;
