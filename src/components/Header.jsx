import { NavLink } from "react-router-dom";
import VinylIcon from "../assets/vinyl-icon.png";
import CDIcon from "../assets/cd-icon.png";

export default function Header() {
  return (
    <header>
      <div id="headerBranding">
        <img src={VinylIcon} alt="Vinyl Icon" className="header-icon" />
        Physical Media Cataloging
        <img src={CDIcon} alt="CD Icon" className="header-icon" />
      </div>
      <nav id="headerNavbar">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/collection"}>My Collection</NavLink>
      </nav>
    </header>
  );
}
