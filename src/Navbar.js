const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>My React Blog</h1>
            <div className="links">
                <a className="nav-link nav-link-fade-up" href="/">Home</a>
                <a className="nav-link nav-link-fade-up" href="/create">New Blog</a>            
            </div>
        </nav>
    );
}
 
export default Navbar;