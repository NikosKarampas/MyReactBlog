import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>This page isn't available</h1>
            <h2>The link you followed may be broken, or the page may have been removed.</h2>
            <Link to="/">Back to the homepage...</Link>
        </div>
     );
}
 
export default NotFound;