import { redirect } from "react-router-dom";

export async function logoutAction() {
  // Delete user

  // Return redirect
  return redirect("/");
}
