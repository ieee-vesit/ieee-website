import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../../theme/ThemeToggle";

const Chevron = ({ open }) => (
  <svg
    className={`arrow ${open ? "rotate" : ""}`}
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // The bar gets a little more body once the page moves under it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus after every navigation.
  useEffect(() => {
    setMenuVisible(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (menu) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === menu ? null : menu);
    }
  };

  const handleMouseEnter = (menu) => {
    if (!isMobile) {
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  const toggleSidebar = () => {
    setMenuVisible(!menuVisible);
  };

  const closeSidebar = () => {
    if (isMobile) {
      setMenuVisible(false);
    }
  };

  const trigger = (menu) => (e) => {
    e.preventDefault();
    toggleDropdown(menu);
  };

  const Brand = () => (
    <>
      <img src="/loader-logo.webp" alt="" className="brand-mark brand-mark--light" width="34" height="34" />
      <img src="/loader-logo-white.webp" alt="" className="brand-mark brand-mark--dark" width="34" height="34" />
      <span className="brand-name">IEEE VESIT</span>
    </>
  );

  return (
    <nav className={`navbar-shell ${scrolled ? "is-scrolled" : ""}`}>
      <div className="navbar">
        <button
          type="button"
          className="nav-burger"
          aria-label="Open menu"
          aria-expanded={menuVisible}
          onClick={toggleSidebar}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h10" />
          </svg>
        </button>

        <div className="logo">
          <Link to="/" onClick={closeSidebar} className="brand" aria-label="IEEE VESIT home">
            <Brand />
          </Link>
        </div>

        <div className={`nav-scrim ${menuVisible ? "show" : ""}`} onClick={toggleSidebar} />

        <div className={menuVisible ? "nav-links show" : "nav-links"}>
          <div className="sidebar-logo logo">
            <span className="brand">
              <Brand />
            </span>
            <button type="button" className="nav-close" aria-label="Close menu" onClick={toggleSidebar}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <ul className="links">
            <Link to="/" onClick={closeSidebar}><li><a href="#">Home</a></li></Link>

            <li onMouseEnter={() => handleMouseEnter("ieee")} onMouseLeave={handleMouseLeave}>
              <a href="#" onClick={trigger("ieee")}>IEEE</a>
              <Chevron open={activeDropdown === "ieee"} />
              <ul className={`sub-menu ${activeDropdown === "ieee" ? "show" : ""}`}>
                <li><a href="/myloft">IEEE Xplore digital library</a></li>
                <li><a href="https://spectrum.ieee.org/" target="_blank" rel="noreferrer" onClick={closeSidebar}>IEEE Spectrum</a></li>
              </ul>
            </li>

            <li onMouseEnter={() => handleMouseEnter("societies")} onMouseLeave={handleMouseLeave}>
              <a href="#" onClick={trigger("societies")}>Societies</a>
              <Chevron open={activeDropdown === "societies"} />
              <ul className={`sub-menu ${activeDropdown === "societies" ? "show" : ""}`}>
                <Link to="/societies/wie" onClick={closeSidebar}><li><a href="#">Women in Engineering</a></li></Link>
              </ul>
            </li>

            <li onMouseEnter={() => handleMouseEnter("council")} onMouseLeave={handleMouseLeave}>
              <a href="#" onClick={trigger("council")}>Council</a>
              <Chevron open={activeDropdown === "council"} />
              <ul className={`sub-menu ${activeDropdown === "council" ? "show" : ""}`}>
                <Link to="/council26-27" onClick={closeSidebar}><li><a href="#">Year (26-27)</a></li></Link>
                <Link to="/current_council" onClick={closeSidebar}><li><a href="#">Year (25-26)</a></li></Link>
                <Link to="/PreviousCouncil2425" onClick={closeSidebar}><li><a href="#">Year (24-25)</a></li></Link>
                <Link to="/previousCouncil" onClick={closeSidebar}><li><a href="#">Year (23-24)</a></li></Link>
              </ul>
            </li>

            <li onMouseEnter={() => handleMouseEnter("events")} onMouseLeave={handleMouseLeave}>
              <a href="#" onClick={trigger("events")}>Events</a>
              <Chevron open={activeDropdown === "events"} />
              <ul className={`sub-menu ${activeDropdown === "events" ? "show" : ""}`}>
                {/* Upcoming event → Membership Drive */}
                <li>
                  <Link to="/join_ieee" onClick={closeSidebar}>
                    Upcoming (Membership Drive 26-27)
                  </Link>
                </li>
                {/* Past events */}
                <li>
                  <Link to="/events" onClick={closeSidebar}>
                    Past
                  </Link>
                </li>
              </ul>
            </li>

            <Link to="/developers" onClick={closeSidebar}><li><a href="#">Developers</a></li></Link>
            <Link to="/contact" onClick={closeSidebar}><li><a href="#">Contact</a></li></Link>

            <li className="nav-actions">
              <ThemeToggle />
              <a
                className="nav-register"
                href="https://forms.gle/gPrA2sc8sUVoVxbY8"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeSidebar}
              >
                Register
              </a>
              <Link to="/join_ieee" onClick={closeSidebar} className="nav-join">
                Join IEEE
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
