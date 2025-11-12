import logo from "./logo.png";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} width={50} height={50} alt="DLV logo" />
          Dean Lucian Voss
        </Link>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
