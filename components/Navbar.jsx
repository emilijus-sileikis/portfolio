import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "./MenuIcon";

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const smoothScrollTo = (sectionId, duration = 1000) => {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            const startPosition = window.pageYOffset;
            const targetPosition = targetSection.offsetTop;
            let offset = 100;

            if (sectionId === "home" || sectionId === "about") {
                offset = 0;
            }

            const distance = (targetPosition - startPosition) - offset;
            const startTime = performance.now();

            function scrollAnimation(currentTime) {
                handleClick();

                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);
                window.scrollTo(0, startPosition + distance * progress);

                if (timeElapsed < duration) {
                    requestAnimationFrame(scrollAnimation);
                }
            }

            requestAnimationFrame(scrollAnimation);
        }
    };

    return (
        <nav className="navbar" id="navbar">
            <p className="title-deskt">Developer Portfolio</p>
            <p className="title-mobile">Portfolio</p>

            <div id="navbar-deskt">
                <ul className="desktop-nav">
                    <li className="nav-links">
                        <a href="#home" onClick={() => smoothScrollTo("home")}>
                            Home
                        </a>
                    </li>
                    <li className="nav-links">
                        <a href="#about" onClick={() => smoothScrollTo("about")}>
                            About
                        </a>
                    </li>
                    <li className="nav-links">
                        <a href="#skills" onClick={() => smoothScrollTo("skills")}>
                            Skills
                        </a>
                    </li>
                    <li className="nav-links">
                        <a href="#projects" onClick={() => smoothScrollTo("projects")}>
                            Projects
                        </a>
                    </li>
                </ul>
            </div>

            <div className="mobile-nav">
                <div className="nav-icon" onClick={handleClick}>
                    <MenuIcon isOpen={click} onClick={handleClick}/>
                </div>

                <div className={click ? "show" : "hide"}>
                    <div className="mob-menu">
                        <ul className="mob-ul">
                            <li className="mob-li">
                                <a href="#home" onClick={() => smoothScrollTo("home")}>
                                    Home
                                </a>
                            </li>
                            <li className="mob-li">
                                <a href="#about" onClick={() => smoothScrollTo("about")}>
                                    About
                                </a>
                            </li>
                            <li className="mob-li">
                                <a href="#skills" onClick={() => smoothScrollTo("skills")}>
                                    Skills
                                </a>
                            </li>
                            <li className="mob-li">
                                <a href="#projects" onClick={() => smoothScrollTo("projects")}>
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
