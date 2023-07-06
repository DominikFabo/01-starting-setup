import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

function NewExpense(props) {
  const [showButton, setShowButton] = useState(true);
  const SaveExpanseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      date: new Date(enteredExpenseData.date),
      id: Math.random().toString(),
    };
    props.onAddExpanse(expenseData);
  };
  function changeShownButtonHandler() {
    setShowButton(false);
  }
  function onCloseFormHandler() {
    setShowButton(true);
  }
  if (showButton === true) {
    return (
      <div className="new-expense">
        <button onClick={changeShownButtonHandler}>Add new expanse</button>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpanseData={SaveExpanseDataHandler}
        onCloseForm={onCloseFormHandler}
      ></ExpenseForm>
    </div>
  );
}

export default NewExpense;
