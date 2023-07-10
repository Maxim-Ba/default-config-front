import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import style from "./AppLink.module.scss";

interface IAppLinkProps extends LinkProps {
  className?: string;
}
const AppLink: FC<IAppLinkProps> = ({ children, to, className }) => (
  <Link className={className || style.link} to={to}>
    {children}
  </Link>
);

export default AppLink;
