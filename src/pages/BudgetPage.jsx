// loader
export async function budgetsLoader({ params }) {
  const budget = await getAllMatchingItems({
    cateogry: "budgets",
    key: "id",
    value: params.id,
  })[0];

  return { budget };
}

const BudgetPage = () => {
  return <div>BudgetPage</div>;
};
export default BudgetPage;
