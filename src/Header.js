import { Link, NavLink} from "react-router-dom"
import './header.css'

const Header = () => {
  return (
    <header className="header">
        <div className="logo">
            <Link to= "/">Logo</Link>
        </div>
        <div className="navbar">
            <NavLink className= "nav-item" to= "/">Home</NavLink>
            <NavLink className= "nav-item" to= "/contact">Contact</NavLink>
            <NavLink className= "nav-item" to= "/about">About</NavLink>
        </div>
    </header>
  )
}

export default Header