import React from 'react';
import { useState } from 'react';
import { FaHtml5, FaLinux, FaFire, FaCss3Alt, FaJsSquare, FaReact, FaLaravel, FaWordpress, FaPhp, FaGithub, FaJava, FaDatabase, FaStar, FaStarHalfAlt } from 'react-icons/fa';
// Function to generate star icons based on skill level
const generateStars = (level) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= level) {
            stars.push(<FaStar key={i} className="text-yellow-500" />);
        } else if (i - 0.5 === level) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
        } else {
            stars.push(<FaStar key={i} className="text-gray-500" />);
        }
    }
    return stars;
};

export const skills = [
    {
        id: 'skill-1',
        title: 'Laravel',
        experience: '2 Years',
        icon: <FaLaravel />,
        level: 3.5,
        description: 'Used at work (was the framework of one of the websites there) and some university projects (More information on Github).',
    },
    {
        id: 'skill-2',
        title: 'CodeIgniter',
        experience: '2 Years',
        icon: <FaFire />,
        level: 4,
        description: 'Used mostly for university projects in the Innovative Studies program (Full project and documentation on Github).',
    },
    {
        id: 'skill-3',
        title: 'Wordpress',
        experience: '1 Year',
        icon: <FaWordpress />,
        level: 3,
        description: 'Used at work (managing content, creating custom widgets, shortcodes, etc.) and at the university (searching for vulnerabilities and fixing them).',
    },
    {
        id: 'skill-4',
        title: 'HTML',
        experience: '3 Years',
        icon: <FaHtml5 />,
        level: 4.5,
        description: 'Used at work and university for creating websites and web applications.',
    },
    {
        id: 'skill-5',
        title: 'CSS',
        experience: '3 Years',
        icon: <FaCss3Alt />,
        level: 4,
        description: 'Used at work and university for styling websites and web applications.',
    },
    {
        id: 'skill-6',
        title: 'JavaScript',
        experience: '2.5 Years',
        icon: <FaJsSquare />,
        level: 4,
        description: 'Used at work and university for creating the frontend functionality of websites and web applications.',
    },
    {
        id: 'skill-7',
        title: 'PHP',
        experience: '2 Years',
        icon: <FaPhp />,
        level: 4,
        description: 'Used at work and university for creating the backend functionality of websites and web applications.',
    },
    {
        id: 'skill-8',
        title: 'MySQL',
        experience: '2 Years',
        icon: <FaDatabase />,
        level: 3,
        description: 'Used at work and university for interacting with the websites database and making changes there.',
    },
    {
        id: 'skill-9',
        title: 'GIT',
        experience: '4 Years',
        icon: <FaGithub />,
        level: 4.5,
        description: 'Used as a version control system at work and at university.',
    },
    {
        id: 'skill-10',
        title: 'JAVA',
        experience: '1 Year',
        icon: <FaJava />,
        level: 3,
        description: 'Was used in the university to create a plugin for the game Minecraft in the Innovative Studies program.',
    },
    {
        id: 'skill-11',
        title: 'Ansible',
        experience: '1 Year',
        icon: <FaLinux />,
        level: 1.5,
        description: 'Used at the university (Creating automated deployment scenarios using Ansible and Shell/Bash for my website).',
    },
    {
        id: 'skill-12',
        title: 'React',
        experience: '0.5 Years',
        icon: <FaReact />,
        level: 1.5,
        description: 'Just started learning. (Made some projects on Github and this portfolio)',
    },
];

// Component to display skills with star ratings
function SkillList() {
    const [isPopupVisible, setPopupVisibility] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
        setPopupVisibility(true);
    };

    return (
        <div className="w-full text-center justify-center items-center grid grid-cols-1 md:grid-cols-3 gap-5 font-30">
            {skills.map((skill) => (
                <div key={skill.id} className="flex flex-col justify-center items-center bg-blue-gradient rounded cursor-pointer" onClick={() => handleSkillClick(skill)}>
                    <div className="flex items-center p-2">
                        {skill.icon}
                        <span className="ml-2">{skill.title}</span>
                    </div>
                    <small className="p-2">{skill.experience}</small>
                    <div className="star-rating flex items-center p-2">{generateStars(skill.level)}</div>
                </div>
            ))}
            {isPopupVisible && selectedSkill && (
                <div className="overlay">
                    <div className="popup">
                        <button onClick={() => setPopupVisibility(false)} className="bg-blue-gradient text-outline text-white font-bold py-2 px-4 rounded-md mr-4 mb-4 sm:mb-0 w-32">Close</button>
                        <SkillPopup description={selectedSkill.description} />
                    </div>
                </div>
            )}
        </div>
    );
}

function SkillPopup({ description }) {
    return (
            <p>{description}</p>
    );
}

export default SkillList;