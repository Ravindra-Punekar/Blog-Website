import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <p>sorry, page not found</p>
            <Link to="/">Back to Homepage</Link>
        </div>
     );
}
 
export default NotFound;