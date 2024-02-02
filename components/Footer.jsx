import "./Footer.css";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

function Footer() {

    return (
        <footer className="footer">
            <div><p>Copyright © 2024. All Rights Reserved.</p></div>
            <p>
                <a href="https://www.linkedin.com/in/emilijus-sileikis-3b3a8b1b5/" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://www.linkedin.com/in/emilijus-sileikis-3b3a8b1b5/" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/emilijus-sileikis-3b3a8b1b5/" target="_blank" rel="noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://www.linkedin.com/in/emilijus-sileikis-3b3a8b1b5/" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
            </p>
        </footer>
    );
}

export default Footer;
