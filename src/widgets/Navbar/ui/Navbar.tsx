import { Link } from "react-router-dom";
import { ROUTES } from "shared/config/routeConfig/routeConfig";

const Navbar = () => {
  return (
    <nav>
      <Link to={ROUTES.MAIN}>Главная</Link>
      <Link to={ROUTES.ABOUT}>О сайте</Link>
    </nav>
  );
};

export { Navbar };
