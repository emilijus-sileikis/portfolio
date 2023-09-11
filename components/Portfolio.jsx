import React from 'react';
import styles from "../style.js";
import WorkGallery from "./WorkGallery";

function Portfolio() {
    return (
        <section className={`flex flex-wrap text-white ${styles.paddingY}`}>
            <div className="w-full text-center bg-discount-gradient p-10">
                <h1 id="portfolio" className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">My Work</h1>
                <WorkGallery />
            </div>
        </section>
    );
}

export default Portfolio;