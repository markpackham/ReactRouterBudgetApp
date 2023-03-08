// React Router DOM imports
import { Outlet, useLoaderData } from "react-router-dom";

//  Helper functions  
import { fetchData } from "../helpers"

// Loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName }
}

const Main = () => {
  const { userName } = useLoaderData()

  return (
    <div>
      <h1>{userName}</h1>
      <Outlet />
    </div>
  )
}
export default Main