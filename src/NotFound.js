import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div classname='not-found'>
            <h2>404 Error</h2>
            <p>This page cannot be found.</p>
            <Link to='/'>Return to home</Link>
        </div>
    );
}

export default NotFound;