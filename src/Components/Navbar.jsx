import React, { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";  // import router hooks
import './style.css';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // your existing toggler collapse logic
    const toggler = document.querySelector(".navbar-toggler");
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
      link.addEventListener("click", () => {
        const collapse = document.querySelector(".navbar-collapse");
        if (collapse.classList.contains("show")) {
          toggler.click(); // programmatically close it
        }
      });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  // Custom Link component that handles cross-page scroll
  const CustomLink = ({ to, children }) => {
    const handleClick = (e) => {
      e.preventDefault();

      if (location.pathname === "/") {
        // On homepage, use react-scroll normally
        const el = document.getElementById(to);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Not on homepage, navigate to "/" and pass scroll target
        navigate("/", { state: { scrollTo: to } });
      }
    };

    return (
      <a
        href={`#${to}`}
        className="nav-link text-white"
        onClick={handleClick}
      >
        {children}
      </a>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container-fluid">
        <span className="navbar-brand text-white fst-italic fs-4">Sakshi Chavan</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="custom-toggler-icon">
            <div></div> {/* middle line */}
          </span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {['home', 'about', 'education', 'project', 'contact'].map((section) => (
              <li className="nav-item" key={section}>
                <CustomLink to={section}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
