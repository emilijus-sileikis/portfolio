import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const socialMedia = [
    {
        id: "social-media-1",
        icon: faGithub,
        link: "https://github.com/emilijus-sileikis?tab=repositories",
    },
    {
        id: "social-media-2",
        icon: faLinkedin,
        link: "https://www.linkedin.com/in/emilijus-šileikis-142377243/",
    },
    {
        id: "social-media-3",
        icon: faFacebook,
        link: "https://www.facebook.com/emilijus.sileikis",
    },
    {
        id: "social-media-4",
        icon: faInstagram,
        link: "https://www.instagram.com/emilijus.s/",
    },
];

function SocialLinks() {
    return (
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
            <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                Copyright Ⓒ 2023. All Rights Reserved.
            </p>

            <ul className={`list-none sm:flex hidden justify-center items-center flex-1`}>
                <li>
                    <a href="#navbar" className={`font-poppins nav-hover font-normal cursor-pointer text-[16px] text-white mr-10`}>Home</a>
                    <a href="#about" className={`font-poppins nav-hover font-normal cursor-pointer text-[16px] text-white mr-10`}>About</a>
                    <a href="#skills" className={`font-poppins nav-hover font-normal cursor-pointer text-[16px] text-white mr-10`}>Skills</a>
                </li>
            </ul>

            <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((social, index) => (
                    <a
                        key={social.id}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-white footer-hover font-20 ${
                            index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                        }`}
                    >
                        <FontAwesomeIcon icon={social.icon} />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default SocialLinks;