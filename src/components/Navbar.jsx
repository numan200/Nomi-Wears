// Import Image
import logo from "../images/logo.png";
// Import React Router and React
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<nav className="py-3">
			<div className="container position-relative he-50 d-flex justify-content-between align-items-center">
				{/* Logo */}
				<NavLink to="" className="logo h-75">
					<img src={logo} className="h-100" alt="logo" />
				</NavLink>

				{/* Mobile Menu */}
				<ul
					className={`position-fixed p-0 top-0 end-0 z-1 d-flex flex-column ${
						showMenu ? "show" : ""
					}`}
				>
					<li
						onClick={() => setShowMenu((prev) => !prev)}
						className="backMenu p-1 py-2 d-flex fs-5 fw-bold c-light-gray align-items-center border-bottom cursor"
					>
						<i className="bx bx-chevron-left fs-big c-light-gray"></i> Back
					</li>
					<li>
						<NavLink
							onClick={() => setShowMenu((prev) => !prev)}
							className="text-decoration-none c-gray fw-bold p-4 py-2 d-block border-bottom"
							to="/"
						>
							HOME
						</NavLink>
					</li>
					<li>
						<NavLink
							onClick={() => setShowMenu((prev) => !prev)}
							className="text-decoration-none c-gray fw-bold p-4 py-2 d-block border-bottom"
							to="/collection"
						>
							COLLECTION
						</NavLink>
					</li>
					<li>
						<NavLink
							onClick={() => setShowMenu((prev) => !prev)}
							className="text-decoration-none c-gray fw-bold p-4 py-2 d-block border-bottom"
							to="/about"
						>
							ABOUT
						</NavLink>
					</li>
					<li>
						<NavLink
							onClick={() => setShowMenu((prev) => !prev)}
							className="text-decoration-none c-gray fw-bold p-4 py-2 d-block border-bottom"
							to="/contact"
						>
							CONTACT
						</NavLink>
					</li>
					<li>
						<NavLink
							onClick={() => setShowMenu((prev) => !prev)}
							className="text-decoration-none c-gray fw-bold p-4 py-2 d-block border-bottom"
							to="/admin-panel"
						>
							ADMIN PANEL
						</NavLink>
					</li>
				</ul>

				{/* Right Side Icons */}
				<div className="right d-flex align-items-center gap-1 gap-sm-3">
					<div className="icons d-flex gap-1 gap-sm-3">
						<i className="bx bx-search-alt-2 fs-little-big c-gray cursor"></i>
						<i className="bx bx-user fs-little-big c-gray cursor"></i>
						<button className="bg-transparent border-0 position-relative">
							<i className="bx bx-shopping-bag fs-little-big c-gray cursor"></i>
							<span className="bg-black d-block rounded-circle cart-icon c-white">
								0
							</span>
						</button>
					</div>
					<button
						onClick={() => setShowMenu((prev) => !prev)}
						className="px-0 toggleBtn bg-transparent border-0"
						role="button"
					>
						<i className="bx bx-menu-alt-right fs-big c-gray"></i>
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
