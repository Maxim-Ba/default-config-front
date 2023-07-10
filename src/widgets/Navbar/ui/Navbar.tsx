import { Link } from "react-router-dom";
import { ROUTES } from "shared/config/routeConfig/routeConfig";
import style from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={style.nav}>
      <Link to={ROUTES.MAIN}>Главная</Link>
      <Link to={ROUTES.ABOUT}>О сайте</Link>
    </nav>
  );
}

export { Navbar };
