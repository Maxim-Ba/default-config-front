import {Link} from "react-router-dom";
import style from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={style.nav}>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
    </nav>
  );
}

export {Navbar};
