// React Router DOM imports
import { useLoaderData } from "react-router-dom";

// Components
import Intro from "../components/Intro";

//  Helper functions  
import { fetchData } from "../helpers"

// Libraries
import { toast } from "react-toastify";

// Loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName }
}

// Action
export async function dashboardAction({request}){
  const data = await request.formData();
  const formData = Object.fromEntries(data)
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName))
    return toast.success(`Welcome, ${formData.userName}`)
  } catch (error) {
    throw new Error("There was a problem with user creation")
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData()

  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>Welcome back, <span className="accent">{userName}</span></h1>
        </div>
      ) : <Intro /> }
    </>
  )
}
export default Dashboard