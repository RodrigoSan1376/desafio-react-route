import "./styles.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Products() {
  return (
    <section>
      <section className="drr-container">
        <div className="drr-category-navbar drr-mt20 drr-mb20">
            <NavLink to={"/products/computers"} className={({isActive}) => isActive ? 'drr-mr20 drr-menu-active' : 'drr-mr20'}>Computadores</NavLink>
            <NavLink to={"/products/eletronics"} className={({isActive}) => isActive ? 'drr-mr20 drr-menu-active' : 'drr-mr20'}>Eletrônicos</NavLink>
            <NavLink to={"/products/books"} className={({isActive}) => isActive ? 'drr-mr20 drr-menu-active' : 'drr-mr20'}>Livros</NavLink>
        </div>        
    </section>
      <Outlet />
    </section>
  );
}
