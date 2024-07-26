import { NavLink } from "react-router-dom";


export default function Header(){

	return(
		<header>
			<div id="headerBranding">
				Physical Media Cataloging
			</div>
			<nav id="headerNavbar">
				<NavLink to={"/"} >Home</NavLink>
				<NavLink to={"/collection"} >MyCollectionPage</NavLink>
				
			</nav>
		</header>
	)
}