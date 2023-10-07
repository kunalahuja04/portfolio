import "./Navbar.css";
import "../../index.css";
import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
function Navbar({ onThemeChange, classNames }) {
  const themeValue = useRef("light");

  const [theme, setTheme] = useState("light");
  const [hState, sethState] = useState("top");
  useEffect(() => {
    // const tOffset = navbar.offsetTop;
    // const tHeight = navbar.clientHeight;
    // let scrollY;
    // document.addEventListener("scroll", function () {
    //   scrollY = window.scrollY;
    //   if (scrollY > tOffset + tHeight) {
    //     console.log("out of the top");
    //   }
    // });
    var lastVal = 0;
    window.onscroll = function () {
      let y = window.scrollY;
      if (y > lastVal) {
        sethState("down");
      }
      if (y < lastVal) {
        sethState("up");
      }
      if (y === 0) {
        sethState("top");
      }
      lastVal = y;
    };
    const primaryNavigation = document.querySelector(".primary-navigation");
    const item = document.getElementById("menu");
    document.getElementById("menu").onclick = () => {
      if (item.classList.contains("open")) {
        item.classList.remove("open");
        primaryNavigation.setAttribute("data-visible", false);
      } else {
        primaryNavigation.setAttribute("data-visible", true);
        item.classList.add("open");
      }
    };
  }, [themeValue]);

  return (
    <>
      <header
        className={`primary-header flex bg-[var(--clr-navbar)] fixed w-full z-[1000] ${hState} ${classNames}`}
      >
        <div className="logo">
          <h4 className="name font-bold py-4 px-4 text-3xl text-[var(--primary)]">
            Kunal
          </h4>
        </div>
        <nav>
          <ul
            className="primary-navigation flex text-[var(--primary)]"
            data-visible="false"
          >
            <li>
              <a href="#about" className="text-2xl font-semibold">
                About me
              </a>
            </li>
            <li>
              <a href="#skills" className="text-2xl font-semibold">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="text-2xl font-semibold">
                Experience
              </a>
            </li>
            <li>
              <a href="#education" className="text-2xl font-semibold">
                Education
              </a>
            </li>
            <li>
              <a href="#projects" className="text-2xl font-semibold">
                Projects
              </a>
            </li>
            <form action="" ref={themeValue}>
              <fieldset>
                <legend className="visually-hidden">Pick a color scheme</legend>
                <div className="switch-container">
                  <input
                    type="checkbox"
                    id={theme === "light" ? "light" : "dark"}
                    value={theme}
                    onChange={(e) => {
                      if (e.target.value === "light") {
                        setTheme("dark");
                        onThemeChange("dark");
                      } else {
                        setTheme("light");
                        onThemeChange("light");
                      }
                    }}
                  />
                  <label htmlFor={theme === "light" ? "light" : "dark"}>
                    <i className="fas fa-sun"></i>
                    <i className="fas fa-moon"></i>
                    <span className="ball"></span>
                  </label>
                </div>
              </fieldset>
            </form>
          </ul>
          <div id="menu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>

        {/* <button
          type="button"
          aria-controls="primary-navigation"
          aria-expanded="false"
          className={
            theme !== "light"
              ? "bg-[url('../../src/assets/svgs/hamburger-dark.svg')] toggle-btn"
              : "bg-[url('../../src/assets/svgs/hamburger-light.svg')] toggle-btn"
          }
        >
          <span className="sr-only">Menu</span>
        </button> */}
      </header>
    </>
  );
}

export default Navbar;
