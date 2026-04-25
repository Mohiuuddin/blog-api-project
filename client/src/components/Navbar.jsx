import { Link, useNavigate } from "react-router-dom";

export default function Navbar(){
  const navigate =  useNavigate();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");

 

  const handleLogout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  }

  return(
    <nav className="navbar">
      <h2 className="logo">MyBlog</h2>
      <div className="nav-links">
      <Link to="/">Home</Link>
      {token && role === "ADMIN" && (
          // <Link to="/dashboard">Dashboard</Link>
          <a href="http://localhost:5174">Dashboard</a>
        )}

      {
        !token ? (
          <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <span className="welcome">Hi, {username}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>

    </nav>
  );
}