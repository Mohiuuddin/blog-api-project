import {Link} from "react-router-dom"
export default function Navbar() {


  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");


  



  return (
    <nav className="navbar">
      <h2 className="logo">Admin Panel</h2>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/create">Create</Link>

        <button onClick={() => window.location.href = "http://localhost:5173"}>
          Go to Blog
        </button>

        {token && <span>{username}</span>}
      </div>
    </nav>
  );
}