import { NavLink } from "react-router-dom";

export const NavLinks = ({ text, link }) => {
  return (
    <NavLink
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      to={`/${link}`}
    >
      {text}
    </NavLink>
  );
};
