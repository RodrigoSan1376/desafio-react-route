import "./styles.css";
import homeIcon from "../../assets/home.svg";

export default function Header() {
  return (
    <header>
      <div className="drr-header-content drr-container">
        <nav className="drr-navbar">
          <div className="drr-menu-item">Início</div>
          <div className="drr-menu-item">Produtos</div>
          <div className="drr-menu-item">Sobre nós</div>          
        </nav>
        <div>
            <img src={homeIcon} alt="Homepage" />
          </div>
      </div>
    </header>
  );
}
