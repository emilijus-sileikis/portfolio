import React from "react";

import styles from "./style";

import {Navbar, Hero, Skills, Portfolio, Footer} from './components';
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => (
    <div className={`bg-primary w-full overflow-hidden`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar/>
            </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero/>
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Skills/>
                <Portfolio/>
                <Footer/>
            </div>
        </div>
        <ScrollToTopButton />
    </div>
    );

export default App