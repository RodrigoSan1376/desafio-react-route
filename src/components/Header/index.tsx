import "./styles.css";
import homeIcon from "../../assets/home.svg";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="drr-header-content drr-container">
        <nav className="drr-navbar">
            <NavLink to={"/home"} className={({ isActive }) => isActive ? "drr-mr20 drr-menu-active" : "drr-mr20"}>Início</NavLink>          
            <NavLink to={"/products"} className={({ isActive }) => isActive ? "drr-mr20 drr-menu-active" : "drr-mr20"}>Produtos</NavLink>
            <NavLink to={"/about"} className={(isActive) => isActive ? "drr-mr20 drr-menu-active" : "drr-mr20"}>Sobre nós</NavLink>          
        </nav>
        <div>
          <Link to={"/"}>
            <img src={homeIcon} alt="Homepage" />
          </Link>           
        </div>
      </div>
    </header>
  );
}
