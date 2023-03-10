// React Router DOM imports
import { useLoaderData } from "react-router-dom";

// Components
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";

//  Helper functions  
import { fetchData } from "../helpers"

// Libraries
import { toast } from "react-toastify";

// Loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets }
}

// Action
export async function dashboardAction({request}){
  const data = await request.formData();
  const {_action, ...values} = Object.fromEntries(data)

  // new user submission
  if(_action === "newUser"){
    try {
      localStorage.setItem("userName", JSON.stringify(formData.userName))
      return toast.success(`Welcome, ${formData.userName}`)
    } catch (error) {
      throw new Error("There was a problem with user creation")
    }
  }

}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData()

  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>Welcome back, <span className="accent">{userName}</span></h1>
          <div className="grid-sm">
          {/* {budgets ? () : ()} */}
          <div className="grid-lg">
            <div className="flex-lg">
              <AddBudgetForm />
            </div>
          </div>
          </div>
        </div>
      ) : <Intro /> }
    </>
  )
}
export default Dashboard