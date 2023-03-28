// rrd imports
import { useLoaderData } from "react-router-dom";

// helpers
import { getAllMatchingItems } from "../helpers";

// component imports
import AddExpenseForm from "../components/AddExpenseForm";
import Table from "../components/Table";

// loader
export async function budgetLoader({ params }) {
  const budget = await getAllMatchingItems({
    cateogry: "budgets",
    key: "id",
    value: params.id,
  })[0];

  const expenses = await getAllMatchingItems({
    cateogry: "expenses",
    key: "budgetId",
    value: params.id,
  });

  if (!budget) {
    throw new Error("The budget you're trying to find doesn't exist");
  }

  return { budget, expenses };
}

const BudgetPage = () => {
  const { budget, expenses } = useLoaderData();
  return (
    <div className="grid-lg">
      <h1 className="h2">
        <span className="accent">{budget.name}</span>
        Overview
      </h1>
      <div className="flex-lg">
        <BugetItem budget={budget} />
        <AddExpenseForm budgets={[budget]} />
      </div>
      {expenses && expenses.length > 0 && (
        <div className="grid-md">
          <h2>
            <span className="accent">{budget.name}</span>Expenses
          </h2>
          <Table expenses={expenses} />
        </div>
      )}
    </div>
  );
};
export default BudgetPage;
