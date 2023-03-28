// rrd imports
import { useLoaderData } from "react-router-dom";

// helpers
import { getAllMatchingItems } from "../helpers";

// loader
export async function budgetLoader({ params }) {
  const budget = await getAllMatchingItems({
    cateogry: "budgets",
    key: "id",
    value: params.id,
  })[0];

  if (!budget) {
    throw new Error("The budget you're trying to find doesn't exist");
  }

  return { budget };
}

const BudgetPage = () => {
  const { budget } = useLoaderData();
  return <div>{budget.name}</div>;
};
export default BudgetPage;
