import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Tooltip } from "bootstrap";
import { ShopContext } from "../context/ShopContext";
import logo from "../assets/logo-1.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showBorder, setShowBorder] = useState(true);
  const [showSearchIcon, setSearchIcon] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const { setActiveSearch } = useContext(ShopContext);
  const path = window.location.pathname;

  useEffect(() => {
    setShowBorder(path !== "/");
    setSearchIcon(path === "/collection");
  }, [path]);

  useEffect(() => {
    // Bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    );
    return () => tooltipList.forEach((tooltip) => tooltip.dispose());
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <nav className="py-3" style={{ backgroundColor: "#111111" }}>
      <div
        className={`container position-relative bg-gray d-flex justify-content-between align-items-center flex-column ${
          showBorder ? "showLine" : ""
        }`}
        style={{ backgroundColor: "#111111" }}
      >
        <main className="col-12 d-flex justify-content-between align-items-center">
          <Link
            to="/"
            className="logo-link text-decoration-none d-flex align-items-center"
          >
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>

          <ul
            className={`position-fixed p-2 mx-5 rounded-5 bg-black top-0 end-0 z-1 d-flex flex-column ${
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
                className="text-decoration-none c-gray  fw-bold p-4 py-2 d-block border-bottom"
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
          </ul>
          {/* Right Side Icons */}
          <div className="right d-flex align-items-center gap-2 gap-sm-3">
            {/* Dark/Light Toggle Button */}
            <button
              onClick={toggleTheme}
              className="btn btn-outline-secondary rounded-pill px-3 py-1"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              // title="Toggle Theme"
            >
              {isDarkMode ? (
                <i className="bx bx-sun"></i>
              ) : (
                <i className="bx bx-moon"></i>
              )}
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setShowMenu((prev) => !prev)}
              className="px-0 toggleBtn bg-transparent border-0"
              role="button"
            >
              <i className="bx bx-menu-alt-right fs-big c-gray"></i>
            </button>
          </div>
        </main>
      </div>
    </nav>
  );
};

export default Navbar;
