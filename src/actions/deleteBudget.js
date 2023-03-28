import { deleteItem } from "../helpers";

export function deleteBudget({ params }) {
  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    });
  } catch (error) {
    throw new Error("There was a problem deleting the budget");
  }
}
