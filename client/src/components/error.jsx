import { useRouteError, Link } from "react-router-dom";

export function ErrorPage() {

  const error = useRouteError();
 
 return(
  <div className="errorDiv">
    <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error.statusText} || {error.error.message}</p>
        <Link to="/">Back to Home</Link>
  </div>
 );

}