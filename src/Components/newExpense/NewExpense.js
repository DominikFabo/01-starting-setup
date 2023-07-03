import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  const SaveExpanseDataHandler =(enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    props.onAddExpanse(expenseData);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpanseData={SaveExpanseDataHandler}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
