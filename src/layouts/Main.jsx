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
      <h1>Main</h1>
      <Outlet />
      <h1>Main</h1>
    </div>
  )
}
export default Main