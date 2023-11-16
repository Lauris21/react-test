import { Link } from "react-router-dom";
import { NavLinks } from "./NavLinks";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          UseContext
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLinks text={"Home"} link={""} />
            </li>
            <li className="nav-item">
              <NavLinks text={"About"} link={"about"} />
            </li>
            <li className="nav-item">
              <NavLinks text={"Login"} link={"login"} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
