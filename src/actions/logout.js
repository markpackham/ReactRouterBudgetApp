// React Router DOM imports
import { redirect } from "react-router-dom";

// Helpers
import { deleteItem } from "../helpers";

export async function logoutAction() {
  // Delete user
  deleteItem({
    key: "userName",
  });

  // Return redirect
  return redirect("/");
}
