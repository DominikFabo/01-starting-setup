import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function titleChangeHandler(event) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  }

  function amountChangeHandler(event) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
  }

  function dateChangeHandler(event) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: event.target.value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    props.onSaveExpanseData(userInput);

    setUserInput({
      title: "",
      amount: "",
      date: new Date(),
    });
  }

  function onClose(){
    props.onCloseForm();
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onClose}>Close</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
