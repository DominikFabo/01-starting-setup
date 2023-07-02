import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  function titleChangeHandler(event) {
    setUserInput((prevState) => {
        return{
            ...prevState,
            enteredTitle: event.target.value,
        };
    });
  }

  function amountChangeHandler(event) {
    setUserInput((prevState) => {
        return{
            ...prevState,
            enteredAmount: event.target.value,
        };
    });
  }

  function dateChangeHandler(event) {
    setUserInput((prevState) => {
        return{
            ...prevState,
            enteredDate: event.target.value,
        };
    });
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
