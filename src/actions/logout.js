// React Router DOM imports
import { redirect } from "react-router-dom";

// Library
import { toast } from "react-toastify";

// Helpers
import { deleteItem } from "../helpers";

export async function logoutAction() {
  // Delete user
  deleteItem({
    key: "userName",
  });
  toast.success("You have deleted your account");

  // Return redirect
  return redirect("/");
}
