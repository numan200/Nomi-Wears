// Import Image
import logo from "../assets/logo.png";
// Import React Router and React
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Tooltip } from "bootstrap"; 

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [activeSearch, setActiveSearch] = useState(false)

	// useEffect(() => {
	// 	localStorage.setItem('activeSearch', activeSearch);
	// 	// console.log(localStorage.getItem('activeSearch'));
	// }, [activeSearch]) 

	useEffect(() => {
		// Initialize Bootstrap tooltips
		const tooltipTriggerList = document.querySelectorAll(
			'[data-bs-toggle="tooltip"]'
		);
		const tooltipList = [...tooltipTriggerList].map(
			(tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
		);

		// Cleanup tooltips on component unmount
		return () => {
			tooltipList.forEach((tooltip) => tooltip.dispose());
		};
	}, []);

	return (
		<nav className="py-203">
			<div className="container position-relative  d-flex justify-content-between align-items-center flex-column">
				<main className="col-12 d-flex justify-content-between align-items-center">
				{/* Logo */}
				<NavLink to="" className="logo">
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
							className="admin-panel-btn btn  rounded-pill mt-3 text-decoration-none c-gray p-3 py-2 d-block border-gray"
							to="/admin-panel"
						>
							ADMIN PANEL
						</NavLink>
					</li>
				</ul>

				{/* Right Side Icons */}
				<div className="right d-flex align-items-center gap-1 gap-sm-3">
					<div className="icons d-flex gap-1 gap-sm-3">
						<i className="bx bx-search-alt-2 fs-little-big c-gray cursor" onClick={() => setActiveSearch(true)}></i>
						<NavLink className="login-link text-deoration-none" to="/login" data-bs-toggle="tooltip"
						data-bs-placement="bottom" data-bs-title="Login">
							<i className="bx bx-user fs-little-big c-gray cursor"></i>
						</NavLink>
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
				</main>
				{activeSearch && 
				<div className="search-field border-top border-c-gray col-12 d-flex justify-content-center align-items-center pt-3 pb-2 mt-2">
					<input type="text" className="rounded-pill border-ml-gray outline-0 p-2 px-3" placeholder="Search" />
					<i className='bx bx-x fs-2 p-2 cursor c-gray' onClick={() => setActiveSearch(false)}></i>
				</div>
				}
			</div>
		</nav>
	);
};

export default Navbar;
