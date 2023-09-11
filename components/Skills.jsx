import React from 'react';
import styles from "../style.js";
import SkillList from "./SkillList";

function Skills() {
    return (
        <section id="skills" className={`flex flex-wrap text-white ${styles.paddingY}`}>
            <div className="w-full text-center bg-discount-gradient p-10">
                <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] mb-10 leading-[75px] w-full">My Skills</h1>
                <SkillList />
            </div>
        </section>
    );
}

export default Skills;