import { useRouteError, Link } from "react-router-dom"

// Library
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

const Error = () => {
  const error = useRouteError() 
  

  return (
    <div className="error">
      <h1>Oh dear we have a problem</h1>
      <p>{error.message || error.status}</p>
      <div className="flex-md">
        <button className="btn btn--dark">
          <ArrowUturnLeftIcon width={20} />
          <span>Go Back</span>
        </button>
        <Link to="/" className="btn btn--dark">
        <HomeIcon width={20} />
        <span>Go Home</span>
        </Link>
      </div>
    </div>
  )
}
export default Error