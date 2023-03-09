// React Router DOM imports
import { useLoaderData } from "react-router-dom";

// Components
import Intro from "../components/Intro";

//  Helper functions  
import { fetchData } from "../helpers"

// Loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName }
}

// Action
export async function dashboardAction({request}){
  const data = await request.formData();
  console.log({data, request})
}

const Dashboard = () => {
  const { userName } = useLoaderData()

  return (
    <>
      {userName ? (<p>{userName}</p>) : <Intro /> }
    </>
  )
}
export default Dashboard