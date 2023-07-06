import React from "react";
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props){

    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found no expenses</h2>;
    }

    return (
        <ul className="expenses-list">
            {props.items.map((i) => {
            return (
              <ExpenseItem
                key={i.id}
                title={i.title}
                amount={i.amount}
                date={i.date}
              ></ExpenseItem>
            );
          })}
        </ul>
    );
}

export default ExpensesList;