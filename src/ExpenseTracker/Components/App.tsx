/*

// App.tsx for Expense Tracker

import Form from "./Forms/Form3";
import ExpenseList from "./ExpenseTracker/Components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./ExpenseTracker/Components/ExpenseFilter";
import ExpenseForm from "./ExpenseTracker/Components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "adf", amount: 10, category: "Utilities" },
    { id: 2, description: "adf", amount: 10, category: "Utilities" },
    { id: 3, description: "adf", amount: 10, category: "Utilities" },
    { id: 4, description: "adf", amount: 10, category: "Utilities" },
  ]);

  const categorisedExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      //{ <Form /> }
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(expense) =>
            // passing new array, not object
            // setExpenses([...]), x setExpenses({...}) x
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={categorisedExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;

*/
