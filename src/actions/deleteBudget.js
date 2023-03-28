// libraries
import { toast } from "react-toastify";

// helpers
import { deleteItem } from "../helpers";

export function deleteBudget({ params }) {
  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    });

    toast.success("Budget deleted successfully");
  } catch (error) {
    throw new Error("There was a problem deleting the budget");
  }
}
