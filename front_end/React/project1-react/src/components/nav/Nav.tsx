import { Link, useNavigate } from "react-router-dom"
import "./Nav.css"
import { useContext } from "react";
import { authContext } from "../../App";

function Nav() {

  const auth = useContext(authContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    auth?.logout()
    console.log("LOGOUT")
    navigate("/")
  }

  return (
    <div className="menu">
        <Link to="/home">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/search">Search</Link>
        <Link to="/profile">Profile</Link>
        <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Nav
