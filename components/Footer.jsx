import React from 'react';
import styles from "../style.js";
import SocialLinks from "./SocialLinks";

function Footer() {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <SocialLinks />
        </section>
    );
}

export default Footer;