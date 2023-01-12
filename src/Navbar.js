import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <Link to="/">
                <h1>My React Blog</h1>
            </Link> 
            <div className="links">
                <Link className="nav-link nav-link-fade-up" to="/">Home</Link>
                <Link className="nav-link nav-link-fade-up" to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;